'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function GachaPage() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSpin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);

    setTimeout(() => {
      setSpinning(false);
      setResult('🎉 คุณได้รับ: ไก่ตันเผ่า V4 Full Tier!');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-orange-500 selection:text-black">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-12 text-center">
        <div className="max-w-xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-black uppercase tracking-wider">
            <span>🎲</span> LUCKY WHEEL GACHA
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            วงล้อ <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">สุ่มรางวัล</span>
          </h1>
          <p className="text-sm text-zinc-400">ลุ้นรับไอดีไก่ตันระดับ VIP ในราคาเพียง 20 บาทต่อการสุ่ม 1 ครั้ง</p>
        </div>

        {/* ตู้สุ่ม / วงล้อ */}
        <div className="bg-[#0e0e17] border border-white/5 rounded-3xl p-8 max-w-lg mx-auto shadow-2xl relative overflow-hidden">
          <div className="w-56 h-56 sm:w-64 sm:h-64 mx-auto rounded-full border-8 border-orange-500/30 flex items-center justify-center relative bg-gradient-to-br from-zinc-900 to-black shadow-inner my-6">
            <div className={`text-6xl transition-all duration-700 ${spinning ? 'animate-spin scale-110' : ''}`}>
              🎁
            </div>
            <div className="absolute -top-3 w-6 h-8 bg-orange-500 clip-path-triangle" />
          </div>

          {result && (
            <div className="p-4 rounded-xl bg-orange-500/20 border border-orange-500/40 text-amber-300 font-extrabold text-sm mb-6 animate-bounce">
              {result}
            </div>
          )}

          <button
            onClick={handleSpin}
            disabled={spinning}
            className="w-full py-4 rounded-2xl font-black text-base bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-zinc-950 shadow-xl shadow-orange-500/25 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
          >
            {spinning ? 'กำลังสุ่มรางวัล...' : 'หมุนวงล้อ (฿20 / ครั้ง)'}
          </button>
        </div>
      </main>
    </div>
  );
}