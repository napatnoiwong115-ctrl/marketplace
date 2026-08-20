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
      <div className="relative bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border border-purple-200 dark:border-purple-500/30 rounded-3xl p-4 shadow-xl transition-all duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(12deg)_rotateY(-12deg)_translateZ(15px)] hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/30">
        
        {/* วงแหวนเวทมนตร์หลังรูปภาพ */}
        <div className="relative w-full aspect-square bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-pink-500/10 dark:from-purple-900/40 dark:to-slate-800 rounded-2xl flex items-center justify-center text-4xl mb-3 border border-purple-300/30 dark:border-purple-500/20 shadow-inner [transform:translateZ(30px)] transition-all duration-500 group-hover:[transform:translateZ(45px)]">
          <div className="absolute inset-0 rounded-2xl bg-purple-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10 filter drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            {item.image}
          </span>
        </div>

        {/* รายละเอียดไอเทม */}
        <div className="[transform:translateZ(20px)]">
          <h2 className="text-sm font-bold text-slate-800 dark:text-purple-100 mb-1 line-clamp-2 tracking-wide">
            {item.name}
          </h2>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 font-medium border border-purple-300/50 dark:border-purple-500/30">
              💎 Rare Item
            </span>
            <p className="text-amber-600 dark:text-amber-400 font-extrabold text-base filter drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]">
              {item.price} Gold
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}