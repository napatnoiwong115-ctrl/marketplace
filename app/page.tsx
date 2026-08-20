'use client';
import ThreeDCard from './components/ThreeDCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const mockProducts: Product[] = [
  { 
    id: 1, 
    name: 'หนังสือเรียน Programming 101', 
    price: 150, 
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80' 
  },
  { 
    id: 2, 
    name: 'เสื้อช็อป ไซส์ L มือสอง', 
    price: 250, 
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80' 
  },
  { 
    id: 3, 
    name: 'หูฟัง Bluetooth เสียงดี', 
    price: 390, 
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80' 
  },
  { 
    id: 4, 
    name: 'กระเป๋าเป้ นักศึกษา', 
    price: 200, 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80' 
  },
];

export default function HomePage() {
  return (
    <div className="space-y-6 py-4">
      <div className="flex justify-between items-center pb-2 border-b border-amber-500/20">
        <h1 className="text-xl font-serif font-bold text-slate-900 dark:text-amber-100 tracking-wide">
          สินค้าแนะนำสไตล์ยุโรป
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {mockProducts.map((item) => (
          <ThreeDCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}