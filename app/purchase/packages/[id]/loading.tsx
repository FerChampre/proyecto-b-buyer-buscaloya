export default function Loading() {
  return (
    <div className="container mx-auto p-4 md:p-6 max-w-6xl animate-pulse">
      <div className="flex justify-between items-center mb-6">
        <div className="h-6 w-24 bg-gray-200 rounded-md"></div>
        <div className="h-8 w-40 bg-gray-200 rounded-md"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Skeleton (Map + Courier) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <div className="h-6 bg-gray-200 rounded-md w-1/3"></div>
              <div className="h-6 bg-green-50 rounded-full w-24"></div>
            </div>
            
            {/* Map Placeholder */}
            <div className="h-[400px] w-full bg-gradient-to-br from-gray-200 via-rose-50 to-gray-100 relative">
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                 <div className="h-16 w-16 bg-white/50 backdrop-blur-md rounded-full shadow-lg"></div>
               </div>
            </div>

            {/* Courier Info Placeholder */}
            <div className="p-4 bg-gray-50 flex items-center gap-4">
              <div className="h-12 w-12 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <div className="h-5 bg-gray-200 rounded-md w-32 mb-1"></div>
                <div className="h-4 bg-gray-100 rounded-md w-24"></div>
              </div>
              <div className="h-8 w-24 bg-gray-200 rounded-md"></div>
            </div>
          </div>
        </div>

        {/* Timeline Sidebar Skeleton */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full">
            <div className="h-6 bg-gray-200 rounded-md w-48 mb-8"></div>
            
            <div className="space-y-8 relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-100"></div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative flex items-start gap-4 pl-10">
                  <div className="absolute left-1.5 top-1 w-5 h-5 rounded-full border-4 border-white bg-gray-200 shadow-sm"></div>
                  <div className="w-full">
                    <div className="h-5 bg-gray-200 rounded-md w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded-md w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
