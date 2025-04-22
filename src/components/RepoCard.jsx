export default function RepoCard({ name, description, stars, forks, language, url }) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#20293A] hover:bg-[#364153] rounded-lg p-4 border border-[#CDD5E0]/10 hover:border-[#CDD5E0]/30 transition-all"
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-[#CDD5E0] text-base font-semibold hover:text-[#97A3B6]">
              {name}
            </h3>
            {description && (
              <p className="mt-1 text-[#97A3B6] text-sm">
                {description}
              </p>
            )}
          </div>
          {language && (
            <span className="text-xs text-[#97A3B6] bg-[#111729] px-2 py-1 rounded-full">
              {language}
            </span>
          )}
        </div>
  
        <div className="mt-3 flex flex-row gap-4 text-[#97A3B6] text-sm">
          <span className="flex items-center gap-1">
            <img 
              src="Star.svg" 
              className="size-5" 
              alt="Stars"
            />
            {stars}
          </span>
          <span className="flex items-center gap-1">
            <img 
              src="Nesting.svg" 
              className="size-5" 
              alt="Forks"
            />
            {forks}
          </span>
        </div>
      </a>
    );
  }