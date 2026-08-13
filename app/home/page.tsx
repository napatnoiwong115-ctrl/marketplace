import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const mockProducts: Product[] = [
  { id: 1, name: 'หนังสือเรียน Programming 101', price: 150, image: '📚' },
  { id: 2, name: 'เสื้อช็อปไซส์ L มือสอง', price: 250, image: '👕' },
  { id: 3, name: 'หูฟัง Bluetooth เสียงดี', price: 390, image: '🎧' },
  { id: 4, name: 'กระเป๋าเป้นักศึกษา', price: 200, image: '🎒' },
  { id: 5, name: 'เครื่องคิดเลขวิทยาศาสตร์', price: 450, image: '🔢' },
];

export default function HomePage() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">สินค้าในวิทยาลัย</h1>
        <Link
          href="/product"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition"
        >
          + เพิ่มสินค้า
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mockProducts.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center space-x-4"
          >
            <div className="text-4xl bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
              {item.image}
            </div>
            <div>
              <h2 className="font-semibold text-base">{item.name}</h2>
              <p className="text-indigo-600 dark:text-indigo-400 font-bold mt-1">
                ฿{item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}