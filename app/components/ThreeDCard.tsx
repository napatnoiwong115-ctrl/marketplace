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
      <div className="relative bg-white dark:bg-[#161B22] border border-[#E5E0D8] dark:border-[#30363D] rounded-2xl p-5 shadow-sm transition-all duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(6deg)_rotateY(-6deg)] hover:shadow-xl hover:border-[#D4AF37]">
        
        {/* กรอบแสดงรูปสินค้าทรงแกลเลอรี */}
        <div className="w-full aspect-[4/3] bg-[#F7F5F0] dark:bg-[#21262D] rounded-xl flex items-center justify-center text-4xl mb-4 border border-[#EFECE6] dark:border-[#30363D] [transform:translateZ(20px)] transition-all duration-500 group-hover:[transform:translateZ(30px)]">
          <span className="filter drop-shadow-md">{item.image}</span>
        </div>

        {/* รายละเอียดสินค้า สไตล์นิตยสารยุโรป */}
        <div className="[transform:translateZ(15px)] space-y-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C7A5B] dark:text-[#D4AF37] font-semibold">
            European Selection
          </span>
          <h2 className="text-sm font-serif font-medium text-[#1A1A1A] dark:text-[#F0F6FC] line-clamp-1 leading-snug">
            {item.name}
          </h2>
          <div className="pt-2 border-t border-[#F0ECE1] dark:border-[#30363D] flex items-center justify-between">
            <span className="text-xs text-[#706E6B] dark:text-[#8B949E]">Official Price</span>
            <p className="text-sm font-serif font-bold text-[#1A1A1A] dark:text-[#D4AF37]">
              ฿{item.price.toLocaleString()}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}