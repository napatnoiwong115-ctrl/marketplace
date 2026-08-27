'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import ThreeDCard from './components/ThreeDCard';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  rating?: number;
  reviews?: number;
  image: string;
  badge?: string;
}

const mockProducts: Product[] = [
  { 
    id: 1, 
    name: 'GUC กระเป๋าสะพายข้าง ทรงสวยจุของได้เยอะ หนังนุ่มพรีเมียม', 
    price: 149, 
    originalPrice: 390, 
    discount: '-61%', 
    rating: 4.9, 
    reviews: 120, 
    badge: 'MALL',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=80' 
  },
  { 
    id: 2, 
    name: 'เสื้อช็อปนักศึกษา ผ้าคอมทวิวเนื้อดี ใส่สบาย ไม่ร้อน', 
    price: 250, 
    originalPrice: 450, 
    discount: '-44%', 
    rating: 5.0, 
    reviews: 85, 
    badge: 'ร้านแนะนำ',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80' 
  },
  { 
    id: 3, 
    name: 'หูฟังไร้สาย Bluetooth 5.3 ตัดเสียงรบกวน เบสหนัก', 
    price: 399, 
    originalPrice: 1290, 
    discount: '-69%', 
    rating: 4.8, 
    reviews: 240, 
    badge: 'HOT',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80' 
  },
  { 
    id: 4, 
    name: 'กระเป๋าเป้นักศึกษา ช่องเยอะ กันน้ำ สายสะพายนุ่มซัพพอร์ตไหล่', 
    price: 290, 
    originalPrice: 590, 
    discount: '-50%', 
    rating: 4.9, 
    reviews: 64, 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80' 
  },
];

export default function HomePage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="w-full min-h-screen">
      {/* Navbar แนวนอนเต็มความกว้าง */}
      <Navbar onOpenLogin={() => setIsLoginOpen(true)} />

      {/* Main Content ขยายกว้างเต็มตาแนวนอน */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Banner แนวนอนขนาดใหญ่ */}
        <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="space-y-3 text-center sm:text-left">
            <span className="text-xs font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
              CAMPUS BIG SALE
            </span>
            <h1 className="text-3xl sm:text-5xl font-black">ศูนย์รวมสินค้าและอุปกรณ์นักศึกษา</h1>
            <p className="text-base text-white/90">ซื้อ-ขาย ปลอดภัย ภายในรั้ววิทยาลัย</p>
          </div>
          <button 
            type="button"
            onClick={() => setIsLoginOpen(true)}
            className="bg-white text-orange-600 hover:bg-slate-100 font-bold px-8 py-4 rounded-2xl shadow-lg transition cursor-pointer text-base whitespace-nowrap"
          >
            เริ่มลงขายสินค้า
          </button>
        </div>

        {/* หัวข้อสินค้า */}
        <div className="flex justify-between items-center pt-2">
          <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-3 h-6 bg-orange-500 rounded-full inline-block"></span>
            สินค้าแนะนำสำหรับคุณ
          </h2>
        </div>

        {/* Grid การ์ดสินค้าแนวนอน 4-5 คอลัมน์เต็มหน้าจอ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {mockProducts.map((item) => (
            <ThreeDCard key={item.id} item={item} />
          ))}
        </div>

      </main>

      {/* Popup เข้าสู่ระบบ */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}