export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto p-6 animate-pulse">
      {/* Titulo Placeholder */}
      <div className="mb-8">
        <div className="h-8 bg-gray-200 rounded-md w-64 mb-4"></div>
        <div className="h-4 bg-gray-100 rounded-md w-96"></div>
      </div>

      {/* Stores Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col h-[320px]">
            {/* Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-gray-200 via-rose-50 to-gray-100 w-full relative">
              <div className="absolute top-4 right-4 h-6 w-20 bg-white/50 backdrop-blur-md rounded-full"></div>
            </div>
            
            {/* Content Placeholder */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-3">
                <div className="h-6 bg-gray-200 rounded-md w-2/3"></div>
                <div className="h-5 bg-gray-200 rounded-md w-12"></div>
              </div>
              <div className="h-4 bg-gray-100 rounded-md w-full mb-2"></div>
              <div className="h-4 bg-gray-100 rounded-md w-3/4 mb-auto"></div>
              
              <div className="flex gap-2 mt-4">
                <div className="h-6 bg-rose-50 rounded-full w-16"></div>
                <div className="h-6 bg-rose-50 rounded-full w-20"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
