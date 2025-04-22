export default function ProfileHeader({ avatar, name, bio, followers, following, location }) {
    return (
      <div className="relative bg-[#20293A] rounded-b-xl pt-24 pb-6 px-6 border-b border-[#30363D]">
        {/* Avatar - Posición exacta */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <img 
            src={avatar} 
            alt={name} 
            className="w-24 h-24 rounded-full border-4 border-[#20293A] object-cover shadow-lg"
          />
        </div>
  
        {/* Contenido */}
        <div className="mt-6">
          <h1 className="text-[#E6EDF3] text-xl font-semibold text-center md:text-left">{name}</h1>
          
          {bio && (
            <p className="text-[#97A3B6] text-sm mt-2 text-center md:text-left line-clamp-2">
              {bio}
            </p>
          )}
  
          {/* Stats - Versión exacta a referencia */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
            <div className="flex items-center bg-[#111729] rounded-full px-3 py-1 border border-[#30363D]">
              <span className="text-[#CDD5E0] font-medium text-sm">{followers}</span>
              <span className="text-[#97A3B6] text-xs ml-1">Followers</span>
            </div>
            
            <div className="flex items-center bg-[#111729] rounded-full px-3 py-1 border border-[#30363D]">
              <span className="text-[#CDD5E0] font-medium text-sm">{following}</span>
              <span className="text-[#97A3B6] text-xs ml-1">Following</span>
            </div>
            
            {location && (
              <div className="flex items-center bg-[#111729] rounded-full px-3 py-1 border border-[#30363D]">
                <span className="text-[#97A3B6] text-xs flex items-center">
                  <span className="text-xs mr-1">📍</span>
                  {location}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }