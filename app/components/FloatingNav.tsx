'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';

export default function FloatingNav() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-2 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 shadow-2xl">
        <Link
          href="/home"
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
            pathname === '/home'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/40 scale-105'
              : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600'
          }`}
        >
          🏠 หน้าหลัก
        </Link>
        <Link
          href="/product"
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
            pathname === '/product'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/40 scale-105'
              : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600'
          }`}
        >
          ➕ เพิ่มสินค้า
        </Link>
        <button
          onClick={toggleTheme}
          type="button"
          className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-xs hover:scale-110 transition cursor-pointer"
          title="สลับโหมด"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>
    </div>
  );
}