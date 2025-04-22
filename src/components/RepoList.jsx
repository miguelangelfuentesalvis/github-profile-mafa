import RepoCard from './RepoCard';

export default function RepoList({ repos }) {
  if (!repos || repos.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {repos.map((repo) => (
        <RepoCard
          key={repo.id}
          name={repo.name}
          description={repo.description}
          stars={repo.stargazers_count}
          forks={repo.forks_count}
          language={repo.language}
          url={repo.html_url}
        />
      ))}
    </div>
  );
}