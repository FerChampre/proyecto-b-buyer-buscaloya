import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      
      {/* Background 404 Text */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.03]">
        <span className="text-[250px] md:text-[350px] font-black tracking-tighter text-rose-900">404</span>
      </div>

      <div className="relative z-10 max-w-md">
        <div className="w-20 h-20 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-12 shadow-sm border border-rose-100">
          <svg aria-hidden="true" className="w-10 h-10 -rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          Página no encontrada
        </h2>
        
        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
          Parece que te has perdido en la ciudad. La tienda o el producto que estás buscando no existe o fue removido de Buscaloya.
        </p>

        <Link
          href="/stores"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-rose-600 text-white font-bold py-4 px-8 rounded-xl shadow-md hover:bg-rose-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
        >
          <svg aria-hidden="true" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Volver a Inicio
        </Link>
      </div>
    </div>
  );
}
