'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ onOpenLogin }: { onOpenLogin?: () => void }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* โลโก้ร้านไอดีไก่ตัน */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-11 h-11 bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-300 rounded-2xl flex items-center justify-center text-zinc-950 font-black text-2xl shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-all duration-300">
            ⚡
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider text-zinc-900 dark:text-white leading-none">
              KAITAN<span className="text-amber-500 dark:text-yellow-400">SHOP</span>
            </span>
            <span className="text-[10px] tracking-[0.15em] text-amber-600 dark:text-amber-400 uppercase font-bold">
              ขายไอดีไก่ตัน 100%
            </span>
          </div>
        </div>

        {/* ช่องค้นหาไอดี */}
        <div className="flex-1 max-w-xl hidden md:block">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ค้นหา เช่น เผ่า V4, หมัด Godhuman, ผลโมจิ..."
              className="w-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 pl-11 pr-24 py-2.5 rounded-2xl text-sm outline-none border border-zinc-300 dark:border-zinc-800 focus:border-amber-400 dark:focus:border-yellow-400 transition-all shadow-inner"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">
              🔍
            </span>
            <button 
              type="button"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-amber-400 hover:bg-yellow-400 text-zinc-950 text-xs font-black px-4 py-1.5 rounded-xl transition-all shadow-md shadow-amber-400/20 cursor-pointer"
            >
              ค้นหา
            </button>
          </div>
        </div>

        {/* ปุ่มสลับโหมด & เข้าสู่ระบบ */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          <button
            onClick={onOpenLogin}
            type="button"
            className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-zinc-950 text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-2xl transition-all shadow-lg shadow-amber-400/20 hover:scale-105 active:scale-95 cursor-pointer tracking-wider"
          >
            🔑 เข้าสู่ระบบ
          </button>
        </div>

      </div>
    </header>
  );
}