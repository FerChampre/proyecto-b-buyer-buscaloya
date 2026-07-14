'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Purchase, Order } from '@/app/lib/definitions';
import { notFound, useRouter } from 'next/navigation';

const STATUS_MAP: Record<string, string> = {
  'PAYMENT_PENDING': 'Pendiente de pago',
  'PREPARING': 'En preparación',
  'COURIER_ASSIGNED': 'Cadete asignado',
  'PICKED_UP': 'Recogido',
  'OUT_FOR_DELIVERY': 'En camino',
  'DELIVERED': 'Entregado',
  'DELIVERY_FAILED': 'Fallo en entrega',
  'CANCELLED': 'Cancelado'
};

const getStatusBadge = (status: string) => {
  const baseClasses = "text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm";
  
  if (status === 'CANCELLED' || status === 'DELIVERY_FAILED') {
    return <span className={`${baseClasses} bg-red-100 text-red-800 border border-red-200`}>
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      {STATUS_MAP[status] || status}
    </span>;
  }
  if (status === 'DELIVERED') {
    return <span className={`${baseClasses} bg-emerald-100 text-emerald-800 border border-emerald-200`}>
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      {STATUS_MAP[status] || status}
    </span>;
  }
  if (status === 'PREPARING') {
    return <span className={`${baseClasses} bg-amber-100 text-amber-800 border border-amber-200`}>
      <svg className="w-3.5 h-3.5 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
      {STATUS_MAP[status] || status}
    </span>;
  }
  
  // Default for in-transit
  return <span className={`${baseClasses} bg-blue-100 text-blue-800 border border-blue-200`}>
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    {STATUS_MAP[status] || status}
  </span>;
};

export default function PurchaseTracker({ purchase, packages }: { purchase: Purchase, packages: Order[] }) {
  const router = useRouter();

  useEffect(() => {
    if (purchase?.status !== 'PAID') return;
    
    let es: EventSource;
    let reconnectTimeout: NodeJS.Timeout;

    const connect = () => {
      es = new EventSource(`/api/purchases/${purchase.purchase_id}/stream`);

      es.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === 'status_update') {
            router.refresh();
          }
        } catch (err) {
          // Ignorar errores
        }
      };

      es.onerror = () => {
        es.close();
        reconnectTimeout = setTimeout(connect, 3000);
      };
    };

    connect();

    return () => {
      clearTimeout(reconnectTimeout);
      if (es) es.close();
    };
  }, [purchase?.status, purchase?.purchase_id, router]);

  if (!purchase) {
    return notFound();
  }

  const currentDate = new Date().toLocaleDateString('es-AR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const shortPurchaseId = purchase.purchase_id.split('-')[0].toUpperCase();

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Header Premium con Gradiente */}
        <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 p-8 text-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-white opacity-10 blur-2xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 shadow-sm">
                  Pedido Activo
                </span>
                <span className="text-sm font-medium text-rose-100">
                  ORD-{shortPurchaseId}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white drop-shadow-md">Panel de Control de Compra</h1>
              <p className="text-rose-100 mt-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {currentDate}
              </p>
            </div>
            <div className="md:text-right bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <p className="text-sm text-rose-100 font-medium uppercase tracking-wider mb-1">Total Abonado</p>
              <p className="text-4xl font-black text-white drop-shadow-sm">${purchase.amount.toLocaleString('es-AR')}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 bg-gray-50/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Tus Paquetes Individuales
            </h2>
            <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2.5 py-1 rounded-full">
              {packages.length} {packages.length === 1 ? 'paquete' : 'paquetes'}
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {packages.map((pkg, index) => (
              <Link
                key={pkg.order_id}
                href={`/purchase/packages/${pkg.order_id}`}
                className="group relative bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
              >
                {/* Decorative hover line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0 text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                      <span className="font-bold">#{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-rose-600 transition-colors">
                        {pkg.store_name}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium">Click para seguir el envío en vivo</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center">
                  {getStatusBadge(pkg.status)}
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-rose-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 group-hover:text-rose-500 transform group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}