'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';

export default function FloatingNav() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-3 p-2.5 rounded-full bg-white/70 dark:bg-slate-900/80 backdrop-blur-2xl border border-purple-300/50 dark:border-purple-500/40 shadow-[0_10px_30px_rgba(147,51,234,0.25)]">
        <Link
          href="/home"
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
            pathname === '/home'
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/50 scale-105'
              : 'text-slate-600 dark:text-purple-300 hover:text-purple-500'
          }`}
        >
          🏰 มิติหลัก
        </Link>
        <Link
          href="/product"
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
            pathname === '/product'
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/50 scale-105'
              : 'text-slate-600 dark:text-purple-300 hover:text-purple-500'
          }`}
        >
          📜 หลอมไอเทม
        </Link>
        <button
          onClick={toggleTheme}
          type="button"
          className="p-2 rounded-full bg-purple-100 dark:bg-purple-950/80 text-xs border border-purple-300/50 dark:border-purple-500/40 hover:scale-110 transition cursor-pointer"
          title="สลับมิติพลังงาน"
        >
          {theme === 'dark' ? '🔮' : '☀️'}
        </button>
      </nav>
    </div>
  );
}