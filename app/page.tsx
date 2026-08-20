'use client';
import ThreeDCard from './components/ThreeDCard';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: number;
  reviews: number;
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
  return (
    <div className="space-y-4 pt-1">
      
      {/* Header สไตล์แอปช้อปปิ้งชั้นนำ */}
      <div className="sticky top-0 z-40 bg-slate-100/80 dark:bg-slate-950/80 backdrop-blur-md pt-2 pb-1">
        <div className="flex items-center gap-2 bg-white dark:bg-slate-900 p-2.5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
          <span className="text-slate-400 text-sm">🔍</span>
          <input 
            type="text" 
            placeholder="ค้นหาสินค้าในวิทยาลัย..." 
            className="w-full bg-transparent text-xs outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400"
          />
        </div>
      </div>

      {/* Banner โปรโมชัน */}
      <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 p-4 rounded-2xl text-white shadow-lg shadow-orange-500/20">
        <span className="text-[10px] font-extrabold uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded-full">
          CAMPUS DEAL
        </span>
        <h2 className="text-lg font-black mt-1">ตลาดนัดนักศึกษา ราคาพิเศษ!</h2>
        <p className="text-xs text-white/90 mt-0.5">รวมสินค้ามือหนึ่ง มือสอง สภาพดี คุณภาพเกินราคา</p>
      </div>

      {/* แถบหัวข้อ สินค้าแนะนำ */}
      <div className="flex justify-between items-center px-1">
        <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
          <span className="w-2 h-4 bg-orange-500 rounded-full inline-block"></span>
          สินค้าแนะนำสำหรับคุณ
        </h3>
        <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 cursor-pointer hover:underline">
          ดูทั้งหมด &gt;
        </span>
      </div>

      {/* Grid สินค้าแบบ 2 คอลัมน์ดูโปร */}
      <div className="grid grid-cols-2 gap-3">
        {mockProducts.map((item) => (
          <ThreeDCard key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
}