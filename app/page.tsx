'use client';
import ThreeDCard from './components/ThreeDCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const mockProducts: Product[] = [
  { id: 1, name: 'หนังสือเรียน Programming 101', price: 150, image: '📚' },
  { id: 2, name: 'เสื้อช็อป ไซส์ L มือสอง', price: 250, image: '👕' },
  { id: 3, name: 'หูฟัง Bluetooth เสียงดี', price: 390, image: '🎧' },
  { id: 4, name: 'กระเป๋าเป้ นักศึกษา', price: 200, image: '🎒' },
  { id: 5, name: 'เครื่องคิดเลข วิทยาศาสตร์', price: 450, image: '🔢' },
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">
          สินค้าในวิทยาลัย
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