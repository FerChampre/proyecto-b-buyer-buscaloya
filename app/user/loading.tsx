export default function Loading() {
  return (
    <div className="container mx-auto p-6 max-w-4xl animate-pulse">
      {/* Header Profile Skeleton */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-rose-100 flex-shrink-0"></div>
        <div className="flex-1 flex flex-col items-center md:items-start w-full">
          <div className="h-8 bg-gray-200 rounded-md w-48 mb-3"></div>
          <div className="h-4 bg-gray-100 rounded-md w-64 mb-3"></div>
          <div className="h-6 bg-rose-50 rounded-full w-24"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Form Skeleton */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
          <div className="h-6 bg-gray-200 rounded-md w-48 mb-6"></div>
          
          <div className="space-y-5">
            {[1, 2, 3].map(i => (
              <div key={i}>
                <div className="h-4 bg-gray-200 rounded-md w-24 mb-2"></div>
                <div className="h-11 bg-gray-50 rounded-xl w-full border border-gray-100"></div>
              </div>
            ))}
            
            <div className="h-12 bg-gray-200 rounded-xl w-full mt-8"></div>
          </div>
        </div>

        {/* Addresses Skeleton */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
          <div className="flex justify-between items-center mb-6">
            <div className="h-6 bg-gray-200 rounded-md w-40"></div>
            <div className="h-8 bg-rose-50 rounded-lg w-24"></div>
          </div>
          
          <div className="space-y-4">
            {[1, 2].map(i => (
              <div key={i} className="border border-gray-100 rounded-xl p-5 bg-gray-50/50">
                <div className="flex justify-between items-start mb-3">
                  <div className="h-5 bg-gray-200 rounded-md w-3/4"></div>
                  <div className="h-5 bg-gray-200 rounded-md w-8"></div>
                </div>
                <div className="h-4 bg-gray-100 rounded-md w-full mb-2"></div>
                <div className="h-4 bg-gray-100 rounded-md w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
