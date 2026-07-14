import { auth } from '@clerk/nextjs/server';
import { Client } from '@neondatabase/serverless';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new Response('Unauthorized', { status: 401 });
    }

    const { id: purchaseId } = await params;

    // Usar la URL que esté disponible (dependiendo si estamos en Vercel o local)
    const dbUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL;
    if (!dbUrl) throw new Error("Missing DB URL");

    const client = new Client(dbUrl);
    await client.connect();
    await client.query('LISTEN order_status_updates');

    let isClosed = false;

    const stream = new ReadableStream({
      async start(controller) {
        // Ping inicial de conexión
        controller.enqueue(`data: ${JSON.stringify({ type: 'connected' })}\n\n`);

        client.on('notification', (msg) => {
          if (isClosed) return;
          if (msg.channel === 'order_status_updates' && msg.payload) {
            try {
              const payload = JSON.parse(msg.payload);
              // Filtramos: solo nos importa si la notificación es para ESTA compra
              if (payload.purchase_id === purchaseId) {
                controller.enqueue(`data: ${JSON.stringify({ type: 'status_update', payload })}\n\n`);
              }
            } catch (err) {
              console.error('Error parsing notification:', err);
            }
          }
        });

        // Ping periódico para mantener viva la conexión (prevenir timeouts prematuros por inactividad)
        const pingInterval = setInterval(() => {
          if (!isClosed) {
            controller.enqueue(`data: ${JSON.stringify({ type: 'ping' })}\n\n`);
          }
        }, 15000);

        // Si el cliente corta la conexión (ej: recarga la página o cierra la pestaña)
        req.signal.addEventListener('abort', () => {
          isClosed = true;
          clearInterval(pingInterval);
          client.end().catch(console.error);
          try { controller.close(); } catch {}
        });
      },
      cancel() {
        isClosed = true;
        client.end().catch(console.error);
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Error in SSE stream:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
