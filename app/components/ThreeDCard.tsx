'use client';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ThreeDCard({ item }: { item: Product }) {
  return (
    <div className="group [perspective:1000px]">
      <div className="relative bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-amber-500/30 rounded-2xl p-4 shadow-lg transition-all duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(8deg)_rotateY(-8deg)] hover:border-amber-400 hover:shadow-2xl hover:shadow-cyan-500/20">
        
        {/* กรอบแสดงรูปภาพสินค้าแบบมีสีสันสดใส */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 border border-slate-100 dark:border-amber-500/20 shadow-md [transform:translateZ(20px)] transition-all duration-500 group-hover:[transform:translateZ(35px)]">
          {/* พื้นหลังไล่เฉดสีเพื่อเพิ่มความสดใส */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-pink-500/20 to-amber-400/30 z-10 opacity-40 group-hover:opacity-10 transition-opacity duration-300" />
          
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* รายละเอียดสินค้า */}
        <div className="[transform:translateZ(15px)] space-y-1.5">
          <span className="text-[10px] uppercase tracking-[0.2em] text-purple-600 dark:text-amber-400 font-bold">
            EUROPEAN SELECTION
          </span>
          <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-100 line-clamp-1">
            {item.name}
          </h2>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Official Price</span>
            <p className="text-sm font-serif font-bold text-indigo-600 dark:text-amber-400">
              ฿{item.price.toLocaleString()}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}