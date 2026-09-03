'use client';

import Navbar from '../components/Navbar';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-orange-500 selection:text-black">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-black uppercase tracking-wider">
            <span>💬</span> 24/7 SUPPORT CENTER
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ติดต่อ <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">ทีมงาน</span>
          </h1>
          <p className="text-sm text-zinc-400">
            สอบถามปัญหา เคลมไอดี หรือแจ้งปัญหาการใช้งาน ได้ตลอด 24 ชั่วโมง
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ช่องทางติดต่อหลัก */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="group p-6 rounded-3xl bg-[#0e0e17] border border-white/5 hover:border-blue-500/40 transition-all duration-300 flex items-center gap-5 block shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 text-blue-500 border border-blue-500/30 flex items-center justify-center text-2xl font-black group-hover:scale-110 transition-transform">
                f
              </div>
              <div>
                <h3 className="font-extrabold text-base text-white group-hover:text-blue-400 transition-colors">
                  Facebook Fanpage
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">KAITAN SHOP - แฟนเพจหลัก</p>
                <span className="inline-block text-[10px] font-bold text-emerald-400 mt-2">
                  ● ตอบกลับเฉลี่ยภายใน 5 นาที
                </span>
              </div>
            </a>

            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="group p-6 rounded-3xl bg-[#0e0e17] border border-white/5 hover:border-indigo-500/40 transition-all duration-300 flex items-center gap-5 block shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center text-2xl font-black group-hover:scale-110 transition-transform">
                👾
              </div>
              <div>
                <h3 className="font-extrabold text-base text-white group-hover:text-indigo-400 transition-colors">
                  Discord Community
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">ชุมชนผู้ใช้งานพูดคุยและแจ้งปัญหา</p>
                <span className="inline-block text-[10px] font-bold text-indigo-400 mt-2">
                  ● สมาชิกมากกว่า 15,000 คน
                </span>
              </div>
            </a>

            <a
              href="https://line.me"
              target="_blank"
              rel="noreferrer"
              className="group p-6 rounded-3xl bg-[#0e0e17] border border-white/5 hover:border-emerald-500/40 transition-all duration-300 flex items-center gap-5 block shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-2xl font-black group-hover:scale-110 transition-transform">
                💬
              </div>
              <div>
                <h3 className="font-extrabold text-base text-white group-hover:text-emerald-400 transition-colors">
                  Line Official Account
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">@kaitanshop (มี @ นำหน้า)</p>
                <span className="inline-block text-[10px] font-bold text-emerald-400 mt-2">
                  ● แชตแจ้งปัญหารวดเร็ว
                </span>
              </div>
            </a>
          </div>

          {/* ฟอร์มส่งข้อความ */}
          <div className="lg:col-span-7 bg-[#0e0e17] border border-white/5 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h2 className="text-xl font-black text-white mb-6 flex items-center gap-2">
              <span>📩</span> ส่งข้อความถึงทีมงาน
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-2">ชื่อผู้ใช้ / Username</label>
                  <input
                    type="text"
                    placeholder="กรอกชื่อผู้ใช้ของคุณ"
                    className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-2">เบอร์โทร / Line ID</label>
                  <input
                    type="text"
                    placeholder="สำหรับติดต่อกลับ"
                    className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-2">หัวข้อเรื่อง</label>
                <select className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition">
                  <option>สอบถามข้อมูลไอดี</option>
                  <option>แจ้งเคลมไอดีมีปัญหา</option>
                  <option>เติมเงินแล้วเงินไม่เข้า</option>
                  <option>สอบถามเรื่องอื่นๆ</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-2">รายละเอียดข้อความ</label>
                <textarea
                  rows={4}
                  placeholder="อธิบายรายละเอียดปัญหาหรือหมายเลขคำสั่งซื้อ..."
                  className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-black text-sm bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 shadow-lg shadow-orange-500/20 hover:scale-[1.01] active:scale-95 transition-all"
              >
                ส่งข้อความ
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}