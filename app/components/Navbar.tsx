'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'หน้าหลัก', href: '/' },
  { name: 'เติมเงิน', href: '/topup' },
  { name: 'รับรางวัล', href: '/rewards' },
  { name: 'ร้านค้า', href: '/shop' },
  { name: 'เกมสุ่ม', href: '/gacha' },
  { name: 'ข่าวสาร', href: '/news' },
  { name: 'ติดต่อเรา', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-500/10 bg-[#08080c]/80 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative w-11 h-11 rounded-2xl bg-[#0e0e16] border border-orange-500/40 flex items-center justify-center font-black text-white text-2xl">
              K
            </div>
          </div>
          <div>
            <div className="font-black text-xl tracking-tight text-white flex items-center gap-1">
              KAITAN<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">SHOP</span>
            </div>
            <div className="text-[9px] font-extrabold tracking-widest text-orange-400/80 uppercase -mt-1">
              ● Blox Fruits Store
            </div>
          </div>
        </Link>

        {/* Tab Navigation */}
        <nav className="hidden lg:flex items-center bg-[#0d0d14] border border-zinc-800/80 p-1.5 rounded-2xl gap-1 shadow-2xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-zinc-950 shadow-lg shadow-orange-500/30 scale-[1.03]'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block text-xs font-bold text-zinc-300 hover:text-white px-4 py-2.5 rounded-xl hover:bg-zinc-900 transition">
            เข้าสู่ระบบ
          </button>
          <button className="relative group overflow-hidden rounded-xl p-[1px] font-extrabold text-xs">
            <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 rounded-xl"></span>
            <span className="relative px-5 py-2.5 rounded-[11px] bg-[#0a0a10] group-hover:bg-transparent text-white group-hover:text-zinc-950 transition-all duration-300 flex items-center gap-2">
              <span>⚡</span> สมัครสมาชิก
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}