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
}

const mockProducts: Product[] = [
  { 
    id: 1, 
    name: 'GUC กระเป๋าสะพายข้าง ทรงสวยจุของได้เยอะ หนังนุ่มน่ารัก', 
    price: 49, 
    originalPrice: 169, 
    discount: '-71%', 
    rating: 5, 
    reviews: 3, 
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=80' 
  },
  { 
    id: 2, 
    name: 'เสื้อผ้าผู้หญิง เสื้อลูกไม้ แขนสั้น ลายสวยเข้ารูปใส่สบาย', 
    price: 220, 
    originalPrice: 330, 
    discount: '-33%', 
    rating: 5, 
    reviews: 12, 
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80' 
  },
  { 
    id: 3, 
    name: 'Eloop E14 ของแท้ 100% Power Bank แบตสำรองความจุสูง', 
    price: 399, 
    originalPrice: 1290, 
    discount: '-69%', 
    rating: 5, 
    reviews: 12, 
    image: 'https://images.unsplash.com/photo-1609592424109-dd9892f1b177?w=600&auto=format&fit=crop&q=80' 
  },
  { 
    id: 4, 
    name: 'LEDTV สมาร์ททีวี ขนาด 55 นิ้ว คมชัดระดับ 4K UHD', 
    price: 9900, 
    originalPrice: 15900, 
    discount: '-37%', 
    rating: 5, 
    reviews: 14, 
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&auto=format&fit=crop&q=80' 
  },
];

export default function HomePage() {
  return (
    <div className="space-y-3 pt-2">
      {/* แถบหัวข้อ สินค้าแนะนำ */}
      <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border-l-4 border-orange-500 flex justify-between items-center">
        <h1 className="text-sm font-bold text-orange-600 dark:text-orange-500 flex items-center gap-1.5">
          <span>🔥</span> สินค้าเพื่อคุณโดยเฉพาะ
        </h1>
      </div>

      {/* Grid สินค้าแบบ 2 คอลัมน์แน่นๆ สไตล์แอปส้ม */}
      <div className="grid grid-cols-2 gap-2">
        {mockProducts.map((item) => (
          <ThreeDCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}