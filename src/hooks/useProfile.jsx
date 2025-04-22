import { useState, useEffect } from 'react';

export default function useProfile(username = 'midudev') {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!username) return;

      setLoading(true);
      setError(null);

      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=10`)
        ]);

        if (!userRes.ok) throw new Error(`Usuario no encontrado: ${username}`);
        if (!reposRes.ok) throw new Error('Error al cargar repositorios');

        const [userData, reposData] = await Promise.all([
          userRes.json(),
          reposRes.json()
        ]);

        setUser(userData);
        setRepos(reposData);
      } catch (err) {
        setError(err.message);
        setUser(null);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchData, 500);
    return () => clearTimeout(timer);
  }, [username]);

  return { user, repos, loading, error };
}