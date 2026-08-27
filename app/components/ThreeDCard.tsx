'use client';

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

export default function ThreeDCard({ item }: { item: Product }) {
  return (
    <div className="group bg-slate-900/60 hover:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-sky-950/50 transition-all duration-500 border border-slate-800 hover:border-sky-500/40 flex flex-col justify-between cursor-pointer">
      
      {/* รูปภาพสินค้า */}
      <div className="relative w-full aspect-square bg-slate-950 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
        
        {/* ส่วนลดโทนสีฟ้า */}
        {item.discount && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-[11px] font-black px-2.5 py-1 rounded-lg shadow-lg backdrop-blur-md">
            {item.discount}
          </div>
        )}

        {/* ป้าย Badge สีทอง */}
        {item.badge && (
          <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-amber-400/30">
            {item.badge}
          </div>
        )}
      </div>

      {/* รายละเอียด */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <h2 className="text-sm font-semibold text-slate-200 line-clamp-2 leading-relaxed mb-3 group-hover:text-sky-300 transition-colors">
          {item.name}
        </h2>

        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
              ฿{item.price.toLocaleString()}
            </span>
            {item.originalPrice && (
              <span className="text-xs text-slate-500 line-through">
                ฿{item.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-800/80">
            <div className="flex items-center gap-1">
              <span className="text-amber-400 text-xs">★</span>
              <span className="text-xs font-bold text-slate-300">{item.rating ?? 5.0}</span>
            </div>
            <span className="text-[11px] text-slate-500">
              ขายแล้ว {item.reviews ?? 0} ชิ้น
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}