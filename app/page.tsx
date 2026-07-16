import Link from "next/link";
import { auth } from '@clerk/nextjs/server';
import { SignUpButton } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = await auth();

  const categories = [
    { name: "Gastronomía", icon: "🍔", color: "bg-orange-100 text-orange-600" },
    { name: "Tecnología", icon: "💻", color: "bg-blue-100 text-blue-600" },
    { name: "Indumentaria", icon: "👕", color: "bg-purple-100 text-purple-600" },
    { name: "Librerías", icon: "📚", color: "bg-yellow-100 text-yellow-600" },
    { name: "Farmacias", icon: "💊", color: "bg-teal-100 text-teal-600" },
    { name: "Supermercados", icon: "🛒", color: "bg-green-100 text-green-600" },
    { name: "Deportes", icon: "⚽", color: "bg-red-100 text-red-600" },
    { name: "Hogar", icon: "🛋️", color: "bg-amber-100 text-amber-600" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gray-50 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-rose-200/50 blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] rounded-full bg-orange-100/50 blur-3xl opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1.5 px-4 mb-6 rounded-full bg-rose-100 text-rose-700 text-sm font-bold tracking-wide uppercase shadow-sm">
              Tu Ciudad en un solo lugar
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 tracking-tight leading-tight mb-6">
              Encontrá todo lo que querés, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500">
                sin salir de casa.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Explorá miles de productos en locales de tecnología, restaurantes, farmacias, indumentaria y mucho más. Comprá fácil, rápido y seguro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {userId ? (
                <Link
                  href="/stores"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 h-14 px-10 rounded-2xl bg-rose-600 text-white font-bold text-lg hover:bg-rose-700 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-rose-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Explorar Tiendas
                </Link>
              ) : (
                <div className="w-full sm:w-auto h-14 bg-rose-600 text-white rounded-2xl font-bold text-lg hover:bg-rose-700 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-rose-200 flex items-center justify-center [&>button]:w-full [&>button]:h-full [&>button]:px-10">
                  <SignUpButton mode="modal">Comenzar Ahora</SignUpButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">¿Qué estás buscando hoy?</h2>
            <p className="text-gray-500 text-lg">Buscaloya conecta todos los rubros de tu ciudad.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat, i) => (
              <div 
                key={i}
                className="group flex flex-col items-center justify-center p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-rose-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 ${cat.color} shadow-sm`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-center">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS SECTION */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-orange-500 to-rose-500"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Más fácil, imposible.</h2>
            <p className="text-gray-400 text-lg">Tu pedido en tus manos en solo tres pasos.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-800 border-4 border-gray-900 flex items-center justify-center mb-6 shadow-xl text-rose-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">1. Explorá</h3>
              <p className="text-gray-400 leading-relaxed">Navegá entre cientos de tiendas locales y encontrá exactamente lo que necesitas.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-rose-600 border-4 border-gray-900 flex items-center justify-center mb-6 shadow-xl shadow-rose-900/50 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">2. Pedí</h3>
              <p className="text-gray-400 leading-relaxed">Agregá los productos al carrito y finalizá tu compra de forma 100% segura.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-800 border-4 border-gray-900 flex items-center justify-center mb-6 shadow-xl text-rose-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">3. Recibí</h3>
              <p className="text-gray-400 leading-relaxed">Seguí el recorrido de tu cadete en tiempo real hasta la puerta de tu casa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      {!userId && (
        <section className="py-20 bg-rose-50">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">¿Qué estás esperando?</h2>
            <p className="text-lg text-gray-600 mb-8">Únete a miles de compradores y disfruta de la mejor experiencia de compra local.</p>
            <div className="w-full sm:w-auto inline-flex h-14 bg-rose-600 text-white rounded-2xl font-bold text-lg hover:bg-rose-700 transition-colors shadow-lg [&>button]:w-full [&>button]:h-full [&>button]:px-12">
              <SignUpButton mode="modal">Crear mi cuenta gratis</SignUpButton>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}