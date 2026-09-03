'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LoginModal from './LoginModal';

const navItems = [
  { name: 'หน้าหลัก', href: '/' },
  { name: 'ร้านค้า', href: '/shop' },
  { name: 'เติมเงิน', href: '/topup' },
  { name: 'สุ่มรางวัล', href: '/gacha' },
  { name: 'รับของรางวัล', href: '/rewards' },
  { name: 'ข่าวสาร', href: '/news' },
  { name: 'ติดต่อเรา', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  
  // State จัดการ Modal และ ยูสเซอร์
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'login' | 'register'>('login');
  const [user, setUser] = useState<{ username: string; balance: number } | null>(null);

  const openModal = (mode: 'login' | 'register') => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full glass-panel border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-11 h-11 rounded-2xl bg-[#0c0c14] border border-orange-500/30 flex items-center justify-center font-black text-white text-2xl tracking-tighter">
                K
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-wider text-white flex items-center gap-1">
                KAITAN<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">SHOP</span>
              </span>
              <span className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase -mt-1">
                Premium Store
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center bg-[#0d0d15]/90 border border-white/10 p-1.5 rounded-2xl gap-1 shadow-2xl">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-zinc-950 shadow-lg shadow-orange-500/25 scale-[1.02]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User Auth Controls */}
          <div className="flex items-center gap-3">
            {user ? (
              // แสดงเมื่อล็อกอินแล้ว
              <div className="flex items-center gap-3 bg-[#0d0d15] border border-white/10 p-1.5 pl-3 rounded-2xl">
                <div className="flex flex-col text-right">
                  <span className="text-xs font-black text-white">{user.username}</span>
                  <span className="text-[10px] font-bold text-emerald-400">฿{user.balance.toFixed(2)}</span>
                </div>

                <Link
                  href="/topup"
                  className="w-8 h-8 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/30 flex items-center justify-center text-xs font-bold hover:bg-orange-500 hover:text-black transition"
                  title="เติมเงิน"
                >
                  +
                </Link>

                <button
                  onClick={() => setUser(null)}
                  className="px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold border border-red-500/20 transition"
                >
                  ออก
                </button>
              </div>
            ) : (
              // แสดงเมื่อยังไม่ได้ล็อกอิน
              <>
                <button
                  onClick={() => openModal('login')}
                  className="hidden sm:block text-xs font-bold text-zinc-300 hover:text-white px-4 py-2.5 rounded-xl hover:bg-white/5 transition"
                >
                  เข้าสู่ระบบ
                </button>
                <button
                  onClick={() => openModal('register')}
                  className="relative group overflow-hidden rounded-xl p-[1px] font-extrabold text-xs"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 rounded-xl transition-all duration-300 group-hover:scale-105"></span>
                  <span className="relative px-5 py-2.5 rounded-[11px] bg-[#09090e] group-hover:bg-transparent text-white group-hover:text-zinc-950 transition-all duration-300 flex items-center gap-2">
                    <span>⚡</span> สมัครสมาชิก
                  </span>
                </button>
              </>
            )}
          </div>

        </div>
      </header>

      {/* Auth Modal Component */}
      <LoginModal
        isOpen={isModalOpen}
        initialMode={modalMode}
        onClose={() => setIsModalOpen(false)}
        onLoginSuccess={(userData) => setUser(userData)}
      />
    </>
  );
}