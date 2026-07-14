'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body className="antialiased bg-gray-50 min-h-screen flex items-center justify-center p-6">
        <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl p-8 max-w-lg w-full relative overflow-hidden text-center">
          
          <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-6 shadow-sm border border-red-100">
              <svg aria-hidden="true" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-black text-gray-900 mb-3">Error Fatal</h1>
            <p className="text-gray-500 mb-8 leading-relaxed text-lg">
              La plataforma ha sufrido un error crítico al intentar inicializar. Estamos trabajando para solucionarlo.
            </p>

            <button
              onClick={() => reset()}
              className="w-full bg-gray-900 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-gray-800 transition-colors"
            >
              Reiniciar Plataforma
            </button>
            
            {process.env.NODE_ENV === 'development' && (
               <div className="mt-8 p-4 bg-gray-100 rounded-lg text-left overflow-auto text-xs font-mono text-red-600 w-full max-h-40">
                 {error.message || 'Error desconocido'}
               </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
