import RepoCard from './RepoCard'; // Importación faltante

export default function RepoList({ repos }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
      {repos.map((repo) => (
        <RepoCard
          key={repo.id}
          name={repo.name}
          description={repo.description}
          stars={repo.stargazers_count}
          forks={repo.forks_count}
          language={repo.language}
          license={repo.license}
          updated_at={repo.updated_at}
          url={repo.html_url}
        />
      ))}
    </div>
  );
}