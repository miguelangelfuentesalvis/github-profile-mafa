import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) onSearch(inputValue.trim());
  };

  return (
    <div className="relative w-full h-64 bg-[#111729] overflow-hidden">
      {/* Fondo Hero */}
      <img
        src="hero-image-github-profile-sm.jpg" 
        alt="GitHub Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Barra de búsqueda */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <form 
          onSubmit={handleSubmit}
          className="w-full max-w-2xl"
        >
          <div className="flex items-center bg-[#161B22]/90 border border-[#CDD5E0]/10 rounded-lg px-4 py-3 backdrop-blur-sm">
          <img 
                src="Search.svg" 
                className="size-6"
                alt="Buscar usuario"
              />

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search GitHub username..."
              className="bg-transparent w-full text-[#CDD5E0] focus:outline-none placeholder-[#97A3B6] text-sm"
            />
          </div>
        </form>
      </div>
    </div>
  );
}