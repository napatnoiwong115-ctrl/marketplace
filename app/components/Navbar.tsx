'use client';

import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [search, setSearch] = useState('');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* โลโก้ร้าน */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center font-black text-zinc-950 text-xl shadow-lg shadow-amber-500/20">
            K
          </div>
          <div>
            <div className="font-extrabold text-lg tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-1">
              KAITAN<span className="text-amber-500 dark:text-yellow-400">SHOP</span>
            </div>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 -mt-1 font-medium">ศูนย์รวมไอดีไก่ตัน 24 ชม.</p>
          </div>
        </div>

        {/* ช่องค้นหาสินค้า */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ค้นหาไอดี, เผ่า V4, หมัด Godhuman..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition"
          />
          <svg className="w-4 h-4 absolute left-3.5 top-3 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* ปุ่มเมนูขวา */}
        <div className="flex items-center gap-3">
          {/* ปุ่มสลับโหมด มืด / สว่าง */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition border border-zinc-200/50 dark:border-zinc-800/50"
            title="สลับโหมด"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* ปุ่มเข้าสู่ระบบ */}
          <button className="px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-zinc-950 shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-95 transition">
            เข้าสู่ระบบ
          </button>
        </div>

      </div>
    </header>
  );
}