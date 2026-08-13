'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const mockProducts: Product[] = [
  { id: 1, name: 'หนังสือเรียน Programming 101', price: 150, image: '📚' },
  { id: 2, name: 'เสื้อช็อป ไซส์ L มือสอง', price: 250, image: '👕' },
  { id: 3, name: 'หูฟัง Bluetooth เสียงดี', price: 390, image: '🎧' },
  { id: 4, name: 'กระเป๋าเป้ นักศึกษา', price: 200, image: '🎒' },
  { id: 5, name: 'เครื่องคิดเลข วิทยาศาสตร์', price: 450, image: '🔢' },
];

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            สินค้าในวิทยาลัย
          </h1>

          {/* ปุ่มสลับโหมด */}
          {mounted && (
            <button
              onClick={toggleTheme}
              type="button"
              className="p-2 rounded-xl bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-800 dark:text-yellow-400 font-medium transition cursor-pointer text-xs flex items-center gap-1 shadow-sm"
            >
              {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
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

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-3">
        {mockProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-3 flex flex-col justify-between shadow-sm transition-colors duration-200"
          >
            <div className="w-full aspect-square bg-gray-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-3xl mb-3">
              {item.image}
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-800 dark:text-slate-200 line-clamp-2 leading-tight mb-2">
                {item.name}
              </h2>
              <p className="text-indigo-600 dark:text-indigo-400 font-bold text-base">
                ฿{item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}