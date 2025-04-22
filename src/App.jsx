import { useState } from 'react';
import useProfile from './hooks/useProfile';
import SearchBar from './components/SearchBar';
import ProfileHeader from './components/ProfileHeader';
import RepoList from './components/RepoList';
import SkeletonLoader from './components/SkeletonLoader';

export default function App() {
  const [searchInput, setSearchInput] = useState('');
  const { user, repos, loading, error } = useProfile(searchInput || 'github');

  const handleSearch = (username) => {
    setSearchInput(username.trim());
  };

  return (
    <div className="min-h-screen bg-[#20293A]">
      {/* Sección Superior (Full-width con fondo azul) */}
      <div className="w-full bg-[#20293A]">
        <div className="max-w-6xl mx-auto px-6">
          <SearchBar onSearch={handleSearch} />
          
          {!loading && !error && user && (
            <ProfileHeader
              avatar={user?.avatar_url}
              name={user?.name || user?.login}
              bio={user?.bio}
              followers={user?.followers}
              following={user?.following}
              location={user?.location}
            />
          )}
        </div>
      </div>

      {/* Sección Inferior (Contenedor centrado) */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        {loading && <SkeletonLoader />}

        {error && (
          <div className="bg-red-900/20 border border-red-400 text-red-200 rounded-lg p-4 mb-6">
            {error.includes('rate limit')
              ? 'Límite de API excedido. Espera 30 seg.'
              : error}
          </div>
        )}

        {!loading && !error && <RepoList repos={repos} />}
      </div>
    </div>
  );
}