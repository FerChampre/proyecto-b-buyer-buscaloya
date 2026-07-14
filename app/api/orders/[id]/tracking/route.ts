import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { stringToUuid } from '@/app/lib/utils';

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
    const deliveryServiceUrl = process.env.DELIVERY_APP_URL;

    // 2. Consumimos el endpoint oficial de la Delivery App
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

    // 3. Devolvemos la respuesta exacta al frontend
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error en el proxy de tracking:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}