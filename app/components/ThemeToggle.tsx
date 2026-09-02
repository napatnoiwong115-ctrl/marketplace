'use client';

import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle Theme"
      className="relative p-2.5 rounded-2xl bg-zinc-200 dark:bg-zinc-900 border border-amber-400/30 text-amber-500 dark:text-yellow-400 hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 font-bold text-xs"
    >
      {theme === 'dark' ? (
        <>
          <span className="text-base">☀️</span>
          <span className="hidden sm:inline text-zinc-300">โหมดสว่าง</span>
        </>
      ) : (
        <>
          <span className="text-base">🌙</span>
          <span className="hidden sm:inline text-zinc-700">โหมดมืด</span>
        </>
      )}
    </button>
  );
}