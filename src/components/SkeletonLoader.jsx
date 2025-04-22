export default function SkeletonLoader() {
    return (
      <div className="space-y-6 animate-pulse">
        {/* Perfil */}
        <div className="flex flex-col sm:flex-row items-center gap-4 p-4">
          <div className="w-24 h-24 rounded-full bg-gray-200"></div>
          <div className="space-y-3 w-full sm:w-auto">
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto sm:mx-0"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto sm:mx-0"></div>
          </div>
        </div>
        
        {/* Repositorios */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-4 border rounded-lg">
            <div className="h-5 bg-gray-200 rounded w-2/3 mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="flex gap-4">
              <div className="h-4 bg-gray-200 rounded w-10"></div>
              <div className="h-4 bg-gray-200 rounded w-10"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }