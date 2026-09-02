'use client';

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
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors">
      <Navbar />

      {/* Hero Banner โทนเหลือง */}
      <section className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-400/20 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 p-8 sm:p-12 rounded-3xl text-zinc-950 shadow-2xl shadow-amber-500/20 overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="bg-zinc-950 text-yellow-300 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              ⚡ KAITAN ID STORE
            </span>
            <h1 className="text-3xl sm:text-5xl font-black mt-4 leading-tight tracking-tight">
              ศูนย์รวมไอดีไก่ตัน <br />
              <span className="text-zinc-900 underline decoration-zinc-950/30">ปลอดภัย 100% ส่งไวทันที</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base font-semibold text-zinc-800/90">
              ไอดีเวลตัน เลเวล 2555 การันตีเผ่า V4 ผลตื่นครบ พร้อมใช้งานได้ทันทีหลังชำระเงิน
            </p>
          </div>
        </div>
      </section>

      {/* รายการสินค้า */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="text-amber-500 dark:text-yellow-400">🔥</span> ไอดีไก่ตันแนะนำ
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">ไอดีพร้อมส่ง เปลี่ยนรหัสได้ทันที</p>
          </div>
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