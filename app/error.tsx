'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Aquí se podría enviar el error a un servicio de reporte como Sentry
    console.error('Error reportado al Error Boundary:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white border border-rose-100 rounded-3xl shadow-xl p-8 max-w-md w-full relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-rose-50 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-rose-50 rounded-full blur-2xl"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-black text-gray-900 mb-2">¡Ups! Algo no salió bien</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Hemos tenido un problema técnico al intentar cargar esta sección. No te preocupes, puedes intentar de nuevo.
          </p>

          <button
            onClick={() => reset()}
            className="w-full bg-rose-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:bg-rose-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Intentar nuevamente
          </button>
        </div>
      </div>
    </div>
  );
}
