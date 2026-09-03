'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import ThreeDCard, { AccountProduct } from '../components/ThreeDCard';

const mockAccounts: AccountProduct[] = [
  {
    id: 1,
    title: 'ไก่ตัน 7 หมัด + สมอเรือ (Shark Anchor) การันตีสุ่มแรร์ไอเทม',
    price: 189,
    originalPrice: 290,
    level: '2555 (MAX)',
    fightingStyle: 'ครบ 7 หมัด',
    fruit: 'สุ่มผลแรร์',
    image: '/products/item1.png',
    badge: '🔥 ขายดีมาก',
    stock: 15,
  },
  {
    id: 2,
    title: 'ไก่ตัน LV.2550 จิ้งจอกมาสครบ (Kitsune Max) + สุ่มไอเทมระดับ Cursed/Soul Guitar',
    price: 350,
    originalPrice: 490,
    level: '2550 (MAX)',
    fightingStyle: 'สุ่มหมัด Godhuman',
    fruit: 'จิ้งจอก (Kitsune)',
    image: '/products/item2.jpg',
    badge: '✨ การันตีจิ้งจอก',
    stock: 8,
  },
  {
    id: 3,
    title: 'ไก่ตัน LV.2550 สุ่ม 3-5 หมัด + ลุ้นผลโมจิตื่น/ผลแดงในตัว',
    price: 129,
    originalPrice: 199,
    level: '2550 (MAX)',
    fightingStyle: 'สุ่ม 3-5 หมัด',
    fruit: 'โมจิตื่น / ผลแดง',
    image: '/products/item3.jpg',
    badge: '⚡ ราคาสุดคุ้ม',
    stock: 25,
  },
  {
    id: 4,
    title: 'ไก่ตัน VIP เผ่าไซบอร์ก V4 Full Tier + ดาบคู่ CDK + หมัด Godhuman',
    price: 450,
    originalPrice: 600,
    level: '2555 (MAX)',
    fightingStyle: 'Godhuman',
    fruit: 'Kitsune Fruit',
    image: '/products/item1.png',
    badge: '👑 ระดับพรีเมียม',
    stock: 3,
  },
];

export default function ShopPage() {
  const [search, setSearch] = useState('');

  const filteredAccounts = mockAccounts.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.fightingStyle.toLowerCase().includes(search.toLowerCase()) ||
      item.fruit.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-orange-500 selection:text-black">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black text-white flex items-center gap-2">
              🛒 คลังสินค้า<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">ไอดี Roblox</span>
            </h1>
            <p className="text-xs text-zinc-400 mt-1">
              เลือกซื้อไอดีไก่ตัน Blox Fruits ราคาถูกที่สุด ส่งระบบอัตโนมัติ 24 ชม.
            </p>
          </div>

          <div className="w-full md:w-80">
            <input
              type="text"
              placeholder="🔍 ค้นหาไอดี เช่น จิ้งจอก, 7 หมัด, V4..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#0e0e17] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500 transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAccounts.map((account) => (
            <ThreeDCard key={account.id} item={account} />
          ))}
        </div>
      </main>
    </div>
  );
}