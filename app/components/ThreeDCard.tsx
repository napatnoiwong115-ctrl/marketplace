'use client';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ThreeDCard({ item }: { item: Product }) {
  return (
    <div className="group [perspective:1000px]">
      <div className="relative bg-white/90 dark:bg-[#151C2C]/90 backdrop-blur-md border border-amber-200/60 dark:border-purple-500/30 rounded-3xl p-4 shadow-xl transition-all duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(10deg)_rotateY(-10deg)] hover:border-amber-400 dark:hover:border-pink-500 hover:shadow-2xl hover:shadow-purple-500/20">
        
        {/* รูปภาพสินค้า คมชัด มีออร่าสีสัน */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-3.5 border border-slate-100 dark:border-purple-500/20 shadow-inner [transform:translateZ(25px)] transition-all duration-500 group-hover:[transform:translateZ(40px)]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-amber-300 border border-amber-400/30">
            {item.category}
          </span>
        </div>

        {/* รายละเอียดสินค้า */}
        <div className="[transform:translateZ(15px)] space-y-1.5">
          <h2 className="text-sm font-serif font-bold text-slate-800 dark:text-slate-100 line-clamp-1 group-hover:text-amber-600 dark:group-hover:text-pink-400 transition-colors">
            {item.name}
          </h2>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
            <span className="text-[11px] text-slate-400 font-medium">Prix Officiel</span>
            <p className="text-base font-serif font-extrabold text-amber-600 dark:text-amber-400 filter drop-shadow-sm">
              ฿{item.price.toLocaleString()}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}