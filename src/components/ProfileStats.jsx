// src/components/ProfileStats.jsx
import React from 'react'

export default function ProfileStats({ repos, followers, following }) {
  return (
    <div className="flex justify-center gap-4 my-8">
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg px-6 py-4 text-center">
        <span className="block text-xl font-bold text-white">{repos || 0}</span>
        <span className="text-xs uppercase text-[#8b949e]">Repos</span>
      </div>
      
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg px-6 py-4 text-center">
        <span className="block text-xl font-bold text-white">{followers || 0}</span>
        <span className="text-xs uppercase text-[#8b949e]">Followers</span>
      </div>
      
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg px-6 py-4 text-center">
        <span className="block text-xl font-bold text-white">{following || 0}</span>
        <span className="text-xs uppercase text-[#8b949e]">Following</span>
      </div>
    </div>
  )
}