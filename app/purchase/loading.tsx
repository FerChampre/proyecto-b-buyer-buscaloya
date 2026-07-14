export default function Loading() {
  return (
    <div className="container mx-auto p-6 max-w-4xl animate-pulse">
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 mb-8">
        
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-100 pb-4 mb-6">
          <div>
            <div className="h-6 w-32 bg-green-50 rounded-md mb-2"></div>
            <div className="h-8 bg-gray-200 rounded-md w-64 mt-2"></div>
            <div className="h-4 bg-gray-100 rounded-md w-40 mt-2"></div>
          </div>
          <div className="mt-4 md:mt-0 md:text-right">
            <div className="h-4 bg-gray-100 rounded-md w-24 mb-1 md:ml-auto"></div>
            <div className="h-8 bg-gray-200 rounded-md w-32 md:ml-auto"></div>
          </div>
        </div>

        <div className="h-6 bg-gray-200 rounded-md w-48 mb-6"></div>

        {/* Packages Grid Skeleton */}
        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2].map((i) => (
            <div key={i} className="block border border-gray-100 rounded-xl p-5 bg-gray-50/50 shadow-sm h-[140px] flex flex-col">
              <div className="flex justify-between items-start">
                <div>
                  <div className="h-6 bg-gray-200 rounded-md w-32 mb-2"></div>
                  <div className="h-4 bg-gray-100 rounded-md w-20"></div>
                </div>
                <div className="h-6 bg-green-50 rounded-full w-24"></div>
              </div>

              <div className="mt-auto flex justify-between items-center">
                <div className="h-4 bg-rose-50 rounded-md w-32"></div>
                <div className="h-4 w-4 bg-rose-50 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
