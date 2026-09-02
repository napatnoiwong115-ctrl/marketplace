'use client';

import { useState } from 'react';

export interface AccountProduct {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  level: string;
  fightingStyle?: string;
  fruit?: string;
  image: string;
  badge?: string;
  stock: number;
}

export default function ThreeDCard({ item }: { item: AccountProduct }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white dark:bg-zinc-900/90 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-amber-400 dark:hover:border-yellow-400 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 flex flex-col justify-between"
    >
      {/* ภาพไอดีไก่ตัน */}
      <div className="relative w-full aspect-video bg-zinc-950 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
        
        {/* ป้ายกำกับ / Badge */}
        {item.badge && (
          <div className="absolute top-3 left-3 bg-amber-400 text-zinc-950 font-extrabold text-[11px] px-3 py-1 rounded-xl shadow-lg border border-yellow-300">
            ⚡ {item.badge}
          </div>
        )}

        <div className="absolute bottom-2 left-3 text-xs font-bold text-yellow-300 bg-zinc-950/80 px-2.5 py-1 rounded-lg backdrop-blur-md">
          Lv. {item.level}
        </div>
      </div>

      {/* รายละเอียดสินค้า */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base line-clamp-1 group-hover:text-amber-500 dark:group-hover:text-yellow-400 transition-colors">
            {item.title}
          </h3>

          {/* รายละเอียดจุดเด่นไอดี */}
          <div className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
            {item.fightingStyle && (
              <div className="flex items-center gap-1.5">
                <span className="text-amber-500">🥊</span>
                <span>หมัด: <strong className="text-zinc-800 dark:text-zinc-200">{item.fightingStyle}</strong></span>
              </div>
            )}
            {item.fruit && (
              <div className="flex items-center gap-1.5">
                <span className="text-amber-500">🍇</span>
                <span>ผลการตื่น: <strong className="text-zinc-800 dark:text-zinc-200">{item.fruit}</strong></span>
              </div>
            )}
          </div>
        </div>

        {/* ราคา & ปุ่มสั่งซื้อ */}
        <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
          <div>
            <div className="text-xs text-zinc-400 line-through">
              {item.originalPrice ? `฿${item.originalPrice}` : ''}
            </div>
            <div className="text-xl font-black text-amber-500 dark:text-yellow-400">
              ฿{item.price.toLocaleString()}
            </div>
          </div>

          <button
            type="button"
            className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-zinc-950 text-xs font-black px-4 py-2.5 rounded-xl shadow-md shadow-amber-400/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            ซื้อทันที 🛒
          </button>
        </div>
      </div>
    </div>
  );
}