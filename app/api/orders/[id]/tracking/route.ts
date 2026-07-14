import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { stringToUuid } from '@/app/lib/utils';
import sql from '@/app/lib/db';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 1. Validamos que el usuario esté logueado
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const orderId = id;
    const orderUuid = stringToUuid(id);
    
    // 2. Validar que la orden pertenece al usuario autenticado (Prevención de IDOR)
    const ownershipCheck = await sql`
      SELECT p.client_id 
      FROM orders o
      JOIN purchases p ON o.purchase_id = p.purchase_id
      WHERE o.order_id = ${orderUuid}
    `;

    if (ownershipCheck.length === 0) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    if (ownershipCheck[0].client_id !== userId) {
      return NextResponse.json({ error: 'Forbidden: You do not have access to this order' }, { status: 403 });
    }

    const deliveryServiceUrl = process.env.DELIVERY_APP_URL;

    // 3. Consumimos el endpoint oficial de la Delivery App
    const response = await fetch(`${deliveryServiceUrl}/api/deliveries/${orderId}/tracking`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.DELIVERY_SERVICE_SECRET}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Error al obtener la telemetría del microservicio de Delivery' },
        { status: response.status }
      );
    }

    const data = await response.json();

    // 4. Devolvemos la respuesta exacta al frontend
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error en el proxy de tracking:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}