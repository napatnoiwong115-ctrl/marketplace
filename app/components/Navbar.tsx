'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { name: 'หน้าหลัก', href: '/' },
  { name: 'เติมเงิน', href: '/topup' },
  { name: 'รับของรางวัล', href: '/rewards' },
  { name: 'ร้านค้า', href: '/shop' },
  { name: 'เกมสุ่ม', href: '/gacha' },
  { name: 'ข่าวสาร', href: '/news' },
  { name: 'ติดต่อเรา', href: '/contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* โลโก้ */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-red-600 via-orange-500 to-amber-400 flex items-center justify-center font-black text-white text-2xl shadow-lg shadow-orange-500/30 border border-amber-300/30">
            K
          </div>
          <div>
            <div className="font-black text-xl tracking-tight text-white flex items-center gap-0.5">
              KAITAN<span className="text-orange-500">SHOP</span>
            </div>
            <p className="text-[10px] text-zinc-400 font-medium">NO.1 BLOX FRUITS STORE</p>
          </div>
        </Link>

        {/* แท็บบาร์กดเปลี่ยนหน้า */}
        <nav className="hidden lg:flex items-center bg-zinc-900/90 border border-zinc-800/80 p-1.5 rounded-2xl gap-1 shadow-inner">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-zinc-950 shadow-md shadow-orange-500/25 scale-[1.02]'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* ปุ่มด้านขวา */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition border border-zinc-800"
            title="สลับโหมด"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button className="hidden sm:block text-sm font-bold text-zinc-300 hover:text-white px-3 py-2 transition">
            เข้าสู่ระบบ
          </button>

          <button className="px-6 py-2.5 rounded-full font-extrabold text-sm bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-zinc-950 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all">
            สมัครสมาชิก
          </button>
        </div>

      </div>
    </header>
  );
}