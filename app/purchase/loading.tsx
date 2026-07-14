export default function Loading() {
  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl animate-pulse">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Header Premium con Gradiente Placeholder */}
        <div className="bg-gradient-to-r from-gray-200 via-rose-50 to-gray-200 p-8 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-6 w-24 bg-white/50 backdrop-blur-md rounded-full"></div>
                <div className="h-4 w-20 bg-white/40 rounded-md"></div>
              </div>
              <div className="h-10 w-64 md:w-96 bg-white/60 rounded-xl mb-3"></div>
              <div className="h-4 w-32 bg-white/40 rounded-md"></div>
            </div>
            <div className="md:text-right bg-white/30 backdrop-blur-sm p-4 rounded-xl w-40">
              <div className="h-4 w-24 bg-white/40 rounded-md mb-2 md:ml-auto"></div>
              <div className="h-10 w-32 bg-white/60 rounded-xl md:ml-auto"></div>
            </div>
          </div>
        </div>

        {/* Content Section Placeholder */}
        <div className="p-8 bg-gray-50/50">
          <div className="flex items-center justify-between mb-6">
            <div className="h-6 w-48 bg-gray-200 rounded-md"></div>
            <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col h-[160px]">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <div>
                      <div className="h-5 w-32 bg-gray-200 rounded-md mb-2"></div>
                      <div className="h-3 w-40 bg-gray-100 rounded-md"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center">
                  <div className="h-8 w-32 bg-gray-200 rounded-full"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
