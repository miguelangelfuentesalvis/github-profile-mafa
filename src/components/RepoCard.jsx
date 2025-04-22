export default function RepoCard({ name, description, stars, forks, language, license, updated_at, url }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#1D1B48] hover:bg-[#364153] rounded-xl p-4 border border-[#CDD5E0]/10 hover:border-[#CDD5E0]/30 transition-all shadow-xl"
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

            <div className="mt-3 flex flex-wrap items-center gap-4 text-[#97A3B6] text-sm">
                {license?.key === 'mit' && (
                    <span className="flex items-center gap-1">
                        <img
                            src="/Chield_alt.svg"
                            className="w-4 h-4"
                            alt="MIT License"
                        />
                        <span>MIT</span>
                    </span>
                )}

                <span className="flex items-center gap-1">
                    <img
                        src="/Nesting.svg"
                        className="size-5"
                        alt="Forks"
                    />
                    {forks}
                </span>

                <span className="flex items-center gap-1">
                    <img
                        src="/Star.svg"
                        className="size-5"
                        alt="Stars"
                    />
                    {stars}
                </span>

                {updated_at && (
                    <span className="flex items-center">
                        updated {new Date(updated_at).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        })}
                    </span>
                )}
            </div>
        </a>
    );
}