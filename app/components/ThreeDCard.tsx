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
      <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 shadow-lg transition-all duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(10deg)_rotateY(-10deg)_translateZ(10px)] hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/20">
        <div className="w-full aspect-square bg-slate-100 dark:bg-slate-800/80 rounded-2xl flex items-center justify-center text-4xl mb-3 shadow-inner [transform:translateZ(30px)] transition-transform duration-500 group-hover:[transform:translateZ(40px)]">
          {item.image}
        </div>
        <div className="[transform:translateZ(20px)]">
          <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1 line-clamp-2">
            {item.name}
          </h2>
          <p className="text-indigo-600 dark:text-indigo-400 font-bold text-base">
            ฿{item.price}
          </p>
        </div>
      </div>
    </div>
  );
}