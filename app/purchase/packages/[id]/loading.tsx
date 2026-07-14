export default function Loading() {
  return (
    <div className="container mx-auto p-4 md:p-6 max-w-3xl animate-pulse">
      {/* Botón Volver Placeholder */}
      <div className="mb-6 flex items-center">
        <div className="h-4 w-32 bg-gray-200 rounded-md"></div>
      </div>
      
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
        {/* Header Placeholder */}
        <div className="bg-rose-100 p-6">
          <div className="h-8 w-64 bg-white/50 backdrop-blur-sm rounded-md"></div>
        </div>

        <div className="p-6">
          {/* Horizontal Stepper Placeholder */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col items-center w-1/5">
                  <div className="w-8 h-8 rounded-full bg-gray-200 mb-2"></div>
                  <div className="h-3 w-16 bg-gray-100 rounded-md"></div>
                </div>
              ))}
            </div>
            {/* Linea conectora */}
            <div className="relative mt-[-38px] left-[10%] w-[80%] h-1 bg-gray-100 -z-10"></div>
          </div>

          {/* Contenido del paquete Placeholder */}
          <div className="mb-8 mt-12">
            <div className="h-4 w-40 bg-gray-200 rounded-md mb-3"></div>
            <div className="bg-gray-50 rounded-lg border border-gray-100 p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="h-4 w-48 bg-gray-200 rounded-md"></div>
                <div className="h-6 w-12 bg-rose-50 rounded-md"></div>
              </div>
              <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                <div className="h-4 w-32 bg-gray-200 rounded-md"></div>
                <div className="h-6 w-12 bg-rose-50 rounded-md"></div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="h-[300px] w-full bg-gradient-to-br from-gray-200 via-rose-50 to-gray-100 rounded-xl mt-8 flex items-center justify-center">
            <div className="h-16 w-16 bg-white/50 backdrop-blur-md rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
