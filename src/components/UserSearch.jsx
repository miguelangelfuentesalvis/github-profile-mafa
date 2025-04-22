import { useState } from 'react';

export default function UserSearch({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) onSearch(inputValue.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7" stroke="#CDD5E0" strokeWidth="2"/>
            <path d="M20 20L17 17" stroke="#CDD5E0" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Buscar usuario de GitHub..."
          className="w-full pl-10 pr-4 py-2 bg-[#20293A] border border-[#CDD5E0]/30 rounded-lg text-[#CDD5E0] focus:outline-none focus:ring-2 focus:ring-[#97A3B6]"
        />
      </div>
    </form>
  );
}