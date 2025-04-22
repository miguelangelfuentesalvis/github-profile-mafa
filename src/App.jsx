import { useState } from 'react';
import useProfile from './hooks/useProfile';
import SearchBar from './components/SearchBar';
import ProfileHeader from './components/ProfileHeader';
import RepoList from './components/RepoList';
import SkeletonLoader from './components/SkeletonLoader';

export default function App() {
  const [username, setUsername] = useState('');
  const { user, repos, loading, error } = useProfile(username);

  return (
    <div className="min-h-screen bg-[#111729]">
      <SearchBar onSearch={setUsername} />

      <div className="max-w-6xl mx-auto px-6 pb-8">
        {loading && <SkeletonLoader />}
        
        {error && (
          <div className="bg-red-900/20 border border-red-400 text-red-200 rounded-lg p-4 mb-6">
            {error.includes('rate limit') 
              ? 'Límite de API excedido. Espera 1 hora.' 
              : error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,30%)_1fr] gap-6 mt-2">
          {!user && !loading ? (
            <div className="col-span-full text-center py-12">
              <img 
                src="github.png" 
                className="mx-auto w-40 mb-4"
                alt="Buscar usuario"
              />
              <p className="text-[#97A3B6] text-base">Ingresa un usuario de GitHub</p>
            </div>
          ) : (
            <>
              <ProfileHeader
                avatar={user?.avatar_url}
                name={user?.name || user?.login}
                bio={user?.bio}
                followers={user?.followers}
                following={user?.following}
                location={user?.location}
              />
              <RepoList repos={repos || []} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}