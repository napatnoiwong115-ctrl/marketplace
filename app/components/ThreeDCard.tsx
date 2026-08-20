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
  badge?: string;
}

export default function ThreeDCard({ item }: { item: Product }) {
  return (
    <div className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between cursor-pointer">
      
      {/* รูปภาพสินค้า คมชัด มี Gradient Overlay */}
      <div className="relative w-full aspect-square bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* ป้าย % ส่วนลดสีส้มสดใส */}
        <div className="absolute top-2 right-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-extrabold px-2 py-0.5 rounded-full shadow-md">
          {item.discount}
        </div>

        {/* ป้ายการันตี/สถานะมุมซ้าย */}
        {item.badge && (
          <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-md text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-md border border-amber-400/30">
            {item.badge}
          </div>
        )}
      </div>

      {/* ข้อมูลสินค้า */}
      <div className="p-3 flex flex-col justify-between flex-1">
        <h2 className="text-xs font-medium text-slate-800 dark:text-slate-100 line-clamp-2 leading-snug mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
          {item.name}
        </h2>

        <div>
          {/* ราคาขาย + ราคาเต็ม */}
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-black text-orange-600 dark:text-orange-500">
              ฿{item.price.toLocaleString()}
            </span>
            <span className="text-[11px] text-slate-400 line-through">
              ฿{item.originalPrice.toLocaleString()}
            </span>
          </div>

          {/* ดาวรีวิว และจำนวนที่ขายแล้ว */}
          <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center gap-1">
              <span className="text-amber-400 text-xs">★</span>
              <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">{item.rating}</span>
            </div>
            <span className="text-[10px] text-slate-400">
              ขายแล้ว {item.reviews} ชิ้น
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}