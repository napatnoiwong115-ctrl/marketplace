'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            สินค้าในวิทยาลัย
          </h1>
          {/* ซ่อนปุ่มชั่วคราวจนกว่าจะ mounted เสร็จ เพื่อป้องกัน Hydration / Build Error */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg bg-gray-200 dark:bg-slate-800 text-gray-800 dark:text-yellow-400 hover:opacity-80 transition cursor-pointer text-xs"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          )}
        </div>

        <Link
          href="/product"
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-3 py-2 rounded-xl transition"
        >
          + เพิ่มสินค้า
        </Link>
      </div>

      {/* รายการสินค้า... */}
    </div>
  );
}