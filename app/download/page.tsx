'use client';

import Navbar from '../components/Navbar';

interface DownloadItem {
  id: number;
  name: string;
  version: string;
  size: string;
  updatedAt: string;
  description: string;
  status: 'online' | 'updating';
  downloadUrl: string;
  badge: string;
  icon: string;
}

const downloadItems: DownloadItem[] = [
  {
    id: 1,
    name: 'KAITAN Auto Farm Launcher',
    version: 'v2.4.0',
    size: '15.4 MB',
    updatedAt: '03 ก.ย. 2026',
    description: 'โปรแกรมช่วยจัดการไอดีออโต้ฟาร์ม บอทฟาร์ม Blox Fruits เสถียร ไม่หลุดง่าย',
    status: 'online',
    downloadUrl: '#',
    badge: 'RECOMMENDED',
    icon: '🚀',
  },
  {
    id: 2,
    name: 'Delta Executor (PC / Android)',
    version: 'v2.642',
    size: '84.2 MB',
    updatedAt: '01 ก.ย. 2026',
    description: 'ตัวรันสคริปต์ Roblox ยอดนิยม รองรับทุกสคริปต์ ใช้งานง่าย ปลอดภัย',
    status: 'online',
    downloadUrl: '#',
    badge: 'POPULAR',
    icon: '⚡',
  },
  {
    id: 3,
    name: 'Blox Fruits Hub Script 2026',
    version: 'v1.8.5',
    size: '1.2 KB',
    updatedAt: '02 ก.ย. 2026',
    description: 'รวมสคริปต์ออโต้ฟาร์ม ล่าค่าหัว ออโต้สมอเรือ และการันตีฟาร์มเวลไว',
    status: 'online',
    downloadUrl: '#',
    badge: 'HOT',
    icon: '📜',
  },
  {
    id: 4,
    name: 'Roblox FPS Unlocker',
    version: 'v5.2.0',
    size: '3.8 MB',
    updatedAt: '20 ส.ค. 2026',
    description: 'ปลดล็อก FPS ในเกม Roblox ให้รันได้เกิน 60 FPS เล่นลื่นขึ้น 200%',
    status: 'online',
    downloadUrl: '#',
    badge: 'FREE',
    icon: '🎮',
  },
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-orange-500 selection:text-black">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-wider uppercase">
            Downloads & Tools
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-3">
            ศูนย์รวม <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">ดาวน์โหลดซอฟต์แวร์</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2">
            ดาวน์โหลดโปรแกรม สคริปต์ และตัวช่วยเล่น Roblox Blox Fruits อัปเดตเวอร์ชันล่าสุด ปลอดภัย ไร้ไวรัส 100%
          </p>
        </div>

        {/* Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {downloadItems.map((item) => (
            <div
              key={item.id}
              className="relative group bg-[#0e0e17] border border-white/10 hover:border-orange-500/50 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-xl overflow-hidden"
            >
              {/* Card Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition duration-500 pointer-events-none" />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#141422] border border-white/10 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-white group-hover:text-orange-400 transition">
                      {item.name}
                    </h2>
                    <div className="flex items-center gap-2 text-[11px] text-zinc-400 mt-0.5">
                      <span>เวอร์ชัน {item.version}</span>
                      <span>•</span>
                      <span>ขนาด {item.size}</span>
                    </div>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[10px] font-black tracking-wider">
                  {item.badge}
                </span>
              </div>

              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] text-emerald-400 font-bold">
                    {item.status === 'online' ? 'พร้อมใช้งาน (อัปเดต ' + item.updatedAt + ')' : 'กำลังอัปเดต'}
                  </span>
                </div>

                <a
                  href={item.downloadUrl}
                  className="px-5 py-2.5 rounded-xl font-black text-xs bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-zinc-950 shadow-md shadow-orange-500/20 hover:scale-105 active:scale-95 transition"
                >
                  ดาวน์โหลด ⬇
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Warning / Guide Box */}
        <div className="bg-[#0e0e17] border border-amber-500/20 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto">
          <h3 className="text-base font-black text-amber-400 flex items-center gap-2 mb-3">
            ⚠️ ข้อแนะนำก่อนการติดตั้งและใช้งาน
          </h3>
          <ul className="space-y-2 text-xs text-zinc-300 list-disc list-inside leading-relaxed">
            <li>ปิดโปรแกรม Antivirus หรือ Windows Defender ชั่วคราวก่อนดาวน์โหลด (เนื่องจากโปรแกรมรันสคริปต์อาจถูกตรวจจับเป็น False Positive)</li>
            <li>ดาวน์โหลดเฉพาะลิงก์ตรงจากเว็บไซต์ KAITAN SHOP เท่านั้น เพื่อป้องกันการแอบอ้างมัลแวร์จากแหล่งอื่น</li>
            <li>หากพบปัญหาการใช้งาน สามารถติดต่อทีมงานได้ตลอด 24 ชั่วโมงที่หน้าติดต่อเรา</li>
          </ul>
        </div>
      </main>
    </div>
  );
}