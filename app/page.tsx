'use client';
import ThreeDCard from './components/ThreeDCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const mockProducts: Product[] = [
  { 
    id: 1, 
    name: 'หนังสือเรียน Programming 101', 
    price: 150, 
    category: 'EDUCATION',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80' 
  },
  { 
    id: 2, 
    name: 'เสื้อช็อป ไซส์ L มือสอง', 
    price: 250, 
    category: 'FASHION',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80' 
  },
  { 
    id: 3, 
    name: 'หูฟัง Bluetooth เสียงดี', 
    price: 390, 
    category: 'GADGETS',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80' 
  },
  { 
    id: 4, 
    name: 'กระเป๋าเป้ นักศึกษา', 
    price: 200, 
    category: 'ACCESSORIES',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80' 
  },
];

export default function HomePage() {
  return (
    <div className="space-y-6 py-4">
      {/* Header สไตล์ยุโรป */}
      <div className="text-center space-y-1 pb-4 border-b border-amber-500/20">
        <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-amber-600 dark:text-amber-400">
          Campus Collection
        </span>
        <h1 className="text-2xl font-serif font-black text-slate-900 dark:text-white tracking-wide">
          BOUTIQUE DE L'UNIVERSITÉ
        </h1>
      </div>

      {/* Grid การ์ดสินค้า */}
      <div className="grid grid-cols-2 gap-4">
        {mockProducts.map((item) => (
          <ThreeDCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}