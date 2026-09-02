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

const categories = ['ทั้งหมด', '🔥 ขายดี', '⚡ เผ่า V4', '🗡️ สายดาบ', '🍇 ผลตื่นครบ'];

export default function Home() {
  const [selectedCat, setSelectedCat] = useState('ทั้งหมด');

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
      <Navbar />

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        {/* แสงเอฟเฟกต์ด้านหลัง */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/15 dark:bg-amber-400/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-extrabold tracking-wide uppercase">
              <span>🚀</span> ระบบจัดส่งอัตโนมัติ 24 ชม.
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              ศูนย์รวมไอดีไก่ตัน <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                ปลอดภัย 100% ส่งไวทันที
              </span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-400 font-medium">
              ไอดีเลเวล 2555 MAX การันตีเผ่า V4 ผลตื่นครบ เปลี่ยนรหัสได้ทันทีหลังชำระเงิน พร้อมประกันหลังการขาย
            </p>

            {/* แถบการันตี Trust Badges */}
            <div className="pt-2 flex flex-wrap gap-6 text-xs text-zinc-300 font-semibold border-t border-zinc-800/80">
              <div className="flex items-center gap-2">
                <span className="text-amber-400">✓</span> รับประกันไอดีตรงสเปก
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">✓</span> เคลมง่าย มีแอดมินดูแล
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">✓</span> ชำระเงินได้หลายช่องทาง
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* หัวข้อ + ปุ่มตัวกรอง (Filter Chips) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-black flex items-center gap-2 tracking-tight">
              <span>⚡</span> รายการไอดีพร้อมส่ง
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">เลือกซื้อไอดีคุณภาพที่ผ่านการตรวจสอบสเปกแล้ว</p>
          </div>

          {/* ตัวกรองหมวดหมู่ */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCat === cat
                    ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20'
                    : 'bg-zinc-200/70 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ตารางการ์ดสินค้า (Product Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockAccounts.map((account) => (
            <ThreeDCard key={account.id} item={account} />
          ))}
        </div>

      </main>
    </div>
  );
}