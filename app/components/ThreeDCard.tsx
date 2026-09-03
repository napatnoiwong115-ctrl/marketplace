'use client';

export interface AccountProduct {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  level: string;
  fightingStyle: string;
  fruit: string;
  image: string;
  badge?: string;
  stock: number;
}

export default function ThreeDCard({ item }: { item: AccountProduct }) {
  const discountPercent = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);

  return (
    <div className="group relative bg-[#0e0e17] rounded-3xl border border-white/5 glow-card transition-all duration-500 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Product Image & Badges */}
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e17] via-transparent to-black/30" />

          <div className="absolute top-3 left-3 flex gap-2">
            {item.badge && (
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 font-black text-[10px] px-3 py-1 rounded-full shadow-lg uppercase tracking-wider">
                {item.badge}
              </span>
            )}
          </div>

          <span className="absolute top-3 right-3 bg-red-500/90 backdrop-blur-md text-white font-black text-[10px] px-2.5 py-1 rounded-full">
            -{discountPercent}%
          </span>

          <span className="absolute bottom-3 left-3 text-[11px] font-black text-amber-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-xl border border-amber-500/20">
            ⚡ MAX LV. {item.level}
          </span>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-3">
          <h3 className="font-extrabold text-sm text-zinc-100 line-clamp-2 leading-snug group-hover:text-orange-400 transition-colors">
            {item.title}
          </h3>

          <div className="flex flex-wrap gap-2 pt-1">
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-white/5 text-zinc-300 border border-white/5">
              🥊 {item.fightingStyle}
            </span>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
              🍇 {item.fruit}
            </span>
          </div>
        </div>
      </div>

      {/* Pricing & CTA */}
      <div className="p-5 pt-0 mt-auto border-t border-white/5 flex items-center justify-between gap-2">
        <div className="pt-3">
          <span className="text-[11px] text-zinc-500 line-through font-bold block">
            ฿{item.originalPrice}
          </span>
          <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
            ฿{item.price}
          </span>
        </div>

        <button className="mt-3 px-5 py-2.5 rounded-xl font-black text-xs bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all">
          สั่งซื้อทันที
        </button>
      </div>
    </div>
  );
}