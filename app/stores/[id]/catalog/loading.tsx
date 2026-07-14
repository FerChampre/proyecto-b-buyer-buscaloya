export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto p-6 animate-pulse">
      {/* Store Header Info Skeleton */}
      <div className="mb-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex flex-col md:flex-row gap-6 items-start md:items-center">
        <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-rose-100 rounded-2xl flex-shrink-0"></div>
        <div className="flex-1">
          <div className="h-8 bg-gray-200 rounded-md w-48 mb-3"></div>
          <div className="h-4 bg-gray-100 rounded-md w-72 mb-2"></div>
          <div className="h-4 bg-gray-100 rounded-md w-64"></div>
        </div>
      </div>
      
      {/* Categories / Filters Skeleton */}
      <div className="mb-8 flex gap-3 overflow-x-hidden">
         {[1, 2, 3, 4, 5].map(i => (
           <div key={i} className="h-10 w-24 bg-gray-200 rounded-full flex-shrink-0"></div>
         ))}
      </div>

      {/* Catalog Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col h-[380px]">
            <div className="h-48 bg-gradient-to-br from-gray-200 via-rose-50 to-gray-100 w-full relative"></div>
            
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-3">
                <div className="h-6 bg-gray-200 rounded-md w-2/3"></div>
                <div className="h-6 bg-rose-100 rounded-md w-1/4"></div>
              </div>
              <div className="h-4 bg-gray-100 rounded-md w-full mb-2"></div>
              <div className="h-4 bg-gray-100 rounded-md w-4/5 mb-auto"></div>
              
              <div className="h-10 bg-gray-200 rounded-xl w-full mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}