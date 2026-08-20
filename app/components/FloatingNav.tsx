'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';

export default function FloatingNav() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1 p-1.5 rounded-full bg-[#1A1A1A]/90 dark:bg-[#161B22]/90 backdrop-blur-md border border-[#D4AF37]/30 shadow-2xl">
        <Link
          href="/home"
          className={`px-5 py-2 rounded-full text-xs font-serif tracking-wider transition-all duration-300 ${
            pathname === '/home'
              ? 'bg-[#D4AF37] text-[#1A1A1A] font-bold shadow-md'
              : 'text-[#E6EDF3]/70 hover:text-[#D4AF37]'
          }`}
        >
          COLLECTION
        </Link>
        <Link
          href="/product"
          className={`px-5 py-2 rounded-full text-xs font-serif tracking-wider transition-all duration-300 ${
            pathname === '/product'
              ? 'bg-[#D4AF37] text-[#1A1A1A] font-bold shadow-md'
              : 'text-[#E6EDF3]/70 hover:text-[#D4AF37]'
          }`}
        >
          ADD ITEM
        </Link>
        <button
          onClick={toggleTheme}
          type="button"
          className="p-2 rounded-full text-xs text-[#D4AF37] hover:scale-110 transition cursor-pointer"
          title="Switch Theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>
    </div>
  );
}