export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto p-6 animate-pulse">
      {/* Titulo Placeholder */}
      <div className="mb-8">
        <div className="h-8 bg-gray-200 rounded-md w-64 mb-4"></div>
        <div className="h-4 bg-gray-100 rounded-md w-96"></div>
      </div>

      {/* Stores Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-row items-center p-4 gap-4 h-[144px]">
            {/* Image Placeholder */}
            <div className="h-24 w-24 sm:h-28 sm:w-28 bg-gradient-to-br from-gray-200 via-rose-50 to-gray-100 rounded-xl flex-shrink-0 relative"></div>
            
            {/* Content Placeholder */}
            <div className="flex flex-col flex-grow min-w-0">
              <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded-md w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-100 rounded-md w-full mb-1"></div>
              <div className="h-4 bg-gray-100 rounded-md w-5/6"></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
