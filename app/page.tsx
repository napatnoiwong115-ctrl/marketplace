'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import ThreeDCard, { AccountProduct } from './components/ThreeDCard';

const mockAccounts: AccountProduct[] = [
  {
    id: 1,
    title: 'ไก่ตันเผ่า V4 สุ่ม สุ่มหมัด Godhuman + ผลโมจิตื่น',
    price: 159,
    originalPrice: 250,
    level: '2555 (MAX)',
    fightingStyle: 'Godhuman',
    fruit: 'Mochi Awakened',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop',
    badge: 'ขายดีมาก',
    stock: 12,
  },
  {
    id: 2,
    title: 'ไก่ตันดาบคู่ Cursed Dual Katana + เผ่ามังกร V4',
    price: 289,
    originalPrice: 390,
    level: '2555 (MAX)',
    fightingStyle: 'Dragon Talon',
    fruit: 'Dragon Fruit',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600&auto=format&fit=crop',
    badge: 'การันตีดาบคู่',
    stock: 5,
  },
  {
    id: 3,
    title: 'ไก่ตันสายฟาร์ม ผลเสือตื่นครบ + เงิน 50M+',
    price: 99,
    originalPrice: 180,
    level: '2555 (MAX)',
    fightingStyle: 'Superhuman',
    fruit: 'Leopard Awakened',
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=600&auto=format&fit=crop',
    badge: 'ราคาประหยัด',
    stock: 20,
  },
  {
    id: 4,
    title: 'ไก่ตัน VIP เผ่าไซบอร์ก V4 Full Tier + ดาบสมอ',
    price: 450,
    originalPrice: 600,
    level: '2555 (MAX)',
    fightingStyle: 'Godhuman',
    fruit: 'Kitsune Fruit',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop',
    badge: 'ระดับพรีเมียม',
    stock: 3,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[520px] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full relative z-10">
          
          {/* ฝั่งซ้าย */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <h3 className="text-2xl font-black text-white tracking-tight">
              เริ่มต้น
            </h3>

            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                หาสินค้าที่คุณชอบกับ
              </h1>
              <div className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 bg-clip-text text-transparent tracking-tight py-1">
                KAITANSHOP
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              ร้านจำหน่ายหรือขายไอดีเกมออนไลน์ ขายไก่ตัน สุ่มไก่ตัน บริการฟาร์ม เกม ROBLOX แมพ BLOX FRUITS เติมเกมและขายแอพพรีเมี่ยมราคาถูก
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 shadow-lg shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all">
                🛒 เลือกซื้อสินค้า
              </button>
              <button className="px-6 py-3 rounded-xl font-bold text-sm bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800 transition-all">
                🎲 ดูเกมสุ่มแนะนำ
              </button>
            </div>

            {/* รีวิวผู้ใช้ + คุมขนาดรูปตายตัว */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2">
                <img style={{ width: '36px', height: '36px' }} className="rounded-full border-2 border-zinc-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="user" />
                <img style={{ width: '36px', height: '36px' }} className="rounded-full border-2 border-zinc-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="user" />
                <img style={{ width: '36px', height: '36px' }} className="rounded-full border-2 border-zinc-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="user" />
              </div>
              <div className="text-xs font-bold text-zinc-300">
                148 ผู้ใช้งานรีวิว <span className="text-zinc-600">|</span> <span className="text-amber-400">ความพึงพอใจ 5 ดาว ⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>

          {/* ฝั่งขวา */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-2xl">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-red-600 via-orange-500 to-amber-400 flex items-center justify-center font-black text-white text-5xl shadow-lg shadow-orange-500/30 mb-3 border border-amber-300/30">
                K
              </div>
              <div className="text-xl font-black text-white tracking-wider">
                KAITAN <span className="text-orange-500">SHOP</span>
              </div>
              <p className="text-[10px] text-amber-400 font-bold mt-1 tracking-widest uppercase">
                ● ONLINE 24 HOURS
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* สินค้าแนะนำ */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-3">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <span className="text-orange-500">🔥</span> สินค้าแนะนำประจำวัน
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockAccounts.map((account) => (
            <ThreeDCard key={account.id} item={account} />
          ))}
        </div>
      </main>
    </div>
  );
}