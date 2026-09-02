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

const categories = ['ทั้งหมด', '🔥 ขายดี', '⚡ เผ่า V4 Full', '🗡️ ดาบสาย Cursed', '🍇 ผลโมจิ / คิตสึเนะ'];

export default function Home() {
  const [selectedCat, setSelectedCat] = useState('ทั้งหมด');

  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden selection:bg-orange-500 selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-orange-600/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[250px] h-[250px] bg-amber-500/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
          
          {/* Left Hero */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-black tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              NO.1 AUTOMATED BLOX FRUITS STORE
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
                ค้นพบไอดีไก่ตัน <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 drop-shadow-[0_10px_25px_rgba(249,115,22,0.3)]">
                  ระดับพรีเมียม ส่งทันที
                </span>
              </h1>
            </div>

            <p className="text-sm sm:text-base text-zinc-400 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              การันตีไอดีคุณภาพ เลเวล 2555 MAX เผ่า V4 ตื่นครบ สุ่มหมัด Godhuman ปลอดภัย 100% พร้อมระบบส่งอัตโนมัติ 24 ชั่วโมง
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button className="px-8 py-4 rounded-2xl font-black text-sm bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-zinc-950 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                <span>🛒</span> เลือกซื้อไอดีทันที
              </button>
              <button className="px-8 py-4 rounded-2xl font-black text-sm bg-[#0d0d14] hover:bg-zinc-900 text-white border border-zinc-800 hover:border-orange-500/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                <span>🎲</span> สุ่มรางวัลมินิเกม
              </button>
            </div>

            {/* User Reviews */}
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-4 border-t border-zinc-800/60">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-zinc-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="user" />
                <img className="w-10 h-10 rounded-full border-2 border-zinc-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="user" />
                <img className="w-10 h-10 rounded-full border-2 border-zinc-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="user" />
              </div>
              <div>
                <div className="text-xs font-black text-white">ยอดจำหน่ายแล้วกว่า 10,000+ ออเดอร์</div>
                <div className="text-[11px] font-bold text-amber-400">ความพึงพอใจลูกค้า 4.9/5.0 ⭐⭐⭐⭐⭐</div>
              </div>
            </div>

          </div>

          {/* Right Hero Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-700"></div>
              
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 bg-[#0d0d14]/90 border border-orange-500/30 rounded-3xl p-8 flex flex-col items-center justify-center text-center backdrop-blur-2xl shadow-2xl">
                <div className="relative mb-6">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-red-600 via-orange-500 to-amber-400 flex items-center justify-center font-black text-white text-6xl shadow-xl shadow-orange-500/40 border border-amber-300/30">
                    K
                  </div>
                  <span className="absolute -bottom-2 -right-2 bg-emerald-500 text-zinc-950 text-[10px] font-black px-2 py-0.5 rounded-md shadow">
                    ONLINE
                  </span>
                </div>

                <div className="text-2xl font-black text-white tracking-wider">
                  KAITAN <span className="text-orange-500">SHOP</span>
                </div>
                <p className="text-xs text-zinc-400 font-bold mt-1">
                  ระบบทำรายการอัตโนมัติ ตลอด 24 ชม.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Showcase Section */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        
        {/* Header & Categories */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-zinc-800/80 pb-6">
          <div>
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <span className="text-orange-500">🔥</span> ไอดีแนะนำประจำวัน
            </h2>
            <p className="text-xs text-zinc-400 mt-1">คัดสรรไอดีสเปกเทพ การันตีตรงตามรูป 100%</p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all ${
                  selectedCat === cat
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 shadow-lg shadow-orange-500/20'
                    : 'bg-[#0d0d14] text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockAccounts.map((account) => (
            <ThreeDCard key={account.id} item={account} />
          ))}
        </div>

      </main>
    </div>
  );
}