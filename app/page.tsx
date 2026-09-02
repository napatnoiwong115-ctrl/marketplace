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
  const [selectedCat, setSelectedCat] = useState('ทั้งหมด');

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white transition-colors overflow-x-hidden">
      <Navbar />

      {/* Hero Section สไตล์ MADMAXSHOP */}
      <section className="relative min-h-[580px] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        
        {/* แสงเอฟเฟกต์สีส้มฟุ้งๆ ด้านหลัง */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-600/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-amber-500/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
          
          {/* ฝั่งซ้าย: ข้อความหลัก + ปุ่ม + รีวิว */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* คำเกริ่นเล็กด้านบน */}
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              เริ่มต้น
            </h3>

            {/* หัวข้อหลัก */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                หาสินค้าที่คุณชอบกับ
              </h1>
              {/* ชื่อร้านตัวใหญ่ไล่สีส้ม-แดง */}
              <div className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(249,115,22,0.3)] tracking-tight py-2">
                KAITANSHOP
              </div>
            </div>

            {/* คำอธิบายร้าน */}
            <p className="text-sm sm:text-base text-zinc-400 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              ร้านจำหน่ายหรือขายไอดีเกมออนไลน์ ขายไก่ตัน สุ่มไก่ตัน บริการฟาร์ม เกม ROBLOX แมพ BLOX FRUITS หรือแมพอื่นๆ อีกมากมาย เติมเกมและขายแอพพรีเมี่ยมราคาถูก
            </p>

            {/* ปุ่มกด Action */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button className="px-8 py-3.5 rounded-2xl font-extrabold text-sm bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                <span>🛒</span> เลือกซื้อสินค้า
              </button>
              <button className="px-8 py-3.5 rounded-2xl font-extrabold text-sm bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-800 hover:border-zinc-700 shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                <span>🎲</span> ดูเกมสุ่มแนะนำ
              </button>
            </div>

            {/* Avatar ผู้ใช้งานรีวิว + ดาวความพึงพอใจ */}
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-zinc-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="user" />
                <img className="w-10 h-10 rounded-full border-2 border-zinc-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="user" />
                <img className="w-10 h-10 rounded-full border-2 border-zinc-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="user" />
              </div>
              <div className="text-xs font-extrabold text-zinc-300">
                148 ผู้ใช้งานรีวิว <span className="text-zinc-500">|</span> <span className="text-amber-400">ความพึงพอใจ 5 ดาว ⭐⭐⭐⭐⭐</span>
              </div>
            </div>

          </div>

          {/* ฝั่งขวา: โลโก้ 3D ประจำร้านพร้อมกรอบเรืองแสง */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative group">
              {/* แสงวิ้งๆ หลังการ์ด */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
              
              {/* ตัวการ์ดแสดงโลโก้หลัก */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-xl">
                <div className="w-28 h-28 rounded-3xl bg-gradient-to-tr from-red-600 via-orange-500 to-amber-400 flex items-center justify-center font-black text-white text-6xl shadow-xl shadow-orange-500/40 mb-4 border border-amber-300/30 animate-pulse">
                  K
                </div>
                <div className="text-2xl font-black text-white tracking-wider">
                  KAITAN <span className="text-orange-500">SHOP</span>
                </div>
                <p className="text-xs text-amber-400/90 font-bold mt-1 tracking-widest uppercase">
                  ● ONLINE 24 HOURS
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ส่วนแสดงรายการสินค้า ด้านล่าง */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex items-center justify-between mb-8 border-b border-zinc-800/80 pb-4">
          <div>
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <span className="text-orange-500">🔥</span> สินค้าแนะนำประจำวัน
            </h2>
            <p className="text-xs text-zinc-400 mt-1">ไอดีพร้อมส่ง เปลี่ยนรหัสได้ทันที การันตีปลอดภัย 100%</p>
          </div>
        </div>

        {/* การ์ดสินค้า */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockAccounts.map((account) => (
            <ThreeDCard key={account.id} item={account} />
          ))}
        </div>
      </main>

    </div>
  );
}