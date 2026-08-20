'use client';

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

export default function ThreeDCard({ item }: { item: Product }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 dark:border-slate-700 flex flex-col justify-between">
      
      {/* รูปภาพสินค้า + ป้ายส่วนลด */}
      <div className="relative w-full aspect-square bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        {/* ป้าย % ส่วนลดมุมขวาบน */}
        <div className="absolute top-0 right-0 bg-orange-500 text-white text-[11px] font-bold px-1.5 py-0.5 rounded-bl-md">
          {item.discount}
        </div>
      </div>

      {/* ข้อมูลสินค้า */}
      <div className="p-2.5 flex flex-col justify-between flex-1">
        <h2 className="text-xs text-slate-800 dark:text-slate-100 line-clamp-2 leading-snug mb-2 font-normal">
          {item.name}
        </h2>

        <div>
          {/* ราคาขาย + ราคาเต็ม */}
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="text-base font-bold text-orange-600 dark:text-orange-500">
              ฿{item.price.toLocaleString()}
            </span>
            <span className="text-[11px] text-slate-400 line-through">
              ฿{item.originalPrice.toLocaleString()}
            </span>
          </div>

          {/* ดาวรีวิว */}
          <div className="flex items-center gap-1 mt-1">
            <div className="flex text-amber-400 text-[10px]">
              {'★'.repeat(Math.floor(item.rating))}
            </div>
            <span className="text-[10px] text-slate-400">
              ({item.reviews})
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}