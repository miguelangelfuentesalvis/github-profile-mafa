export default function ProfileHeader({ avatar, name, bio, followers, following, location }) {
    return (
      <div className="relative pt-20 pb-6 px-4">
        {/* Avatar (sin cambios) */}
        <div className="absolute -top-12 left-4">
          <img
            src={avatar}
            alt={name}
            className="w-24 h-24 rounded-2xl border-6 border-[#20293A] object-cover shadow-lg"
          />
        </div>
  
        {/* Contenedor principal ajustado */}
        <div className="flex flex-col sm:block">
          {/* Stats - Ahora en línea para tablet/desktop */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="inline-flex items-center bg-[#111729] rounded-lg border border-[#30363D] px-4 py-3">
              <span className="text-[#CDD5E0] text-sm">Followers</span>
              <span className="text-[#97A3B6] mx-3">|</span>
              <span className="text-[#CDD5E0] font-medium text-sm">{followers}</span>
            </div>
  
            <div className="inline-flex items-center bg-[#111729] rounded-lg border border-[#30363D] px-4 py-3">
              <span className="text-[#CDD5E0] text-sm">Following</span>
              <span className="text-[#97A3B6] mx-3">|</span>
              <span className="text-[#CDD5E0] font-medium text-sm">{following}</span>
            </div>
  
            {location && (
              <div className="inline-flex items-center bg-[#111729] rounded-lg border border-[#30363D] px-4 py-3">
                <span className="text-[#CDD5E0] text-sm flex items-center">
                  <span className="mr-2"></span>
                  Location
                </span>
                <span className="text-[#97A3B6] mx-3">|</span>
                <span className="text-[#CDD5E0] font-medium text-sm">{location}</span>
              </div>
            )}
          </div>
  
          {/* Nombre y Bio (sin cambios, posición relativa ajustada) */}
          <div className="mt-6 space-y-4">
            <h1 className="text-[#CDD5E0] font-semibold md:text-left">
              {name}
            </h1>
            {bio && (
              <p className="text-[#CDD5E0] text-sm md:text-left line-clamp-2">
                {bio}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }