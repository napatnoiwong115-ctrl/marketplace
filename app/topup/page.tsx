'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function TopupPage() {
  const [method, setMethod] = useState('promptpay');
  const [amount, setAmount] = useState('100');

  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-orange-500 selection:text-black">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center max-w-xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-black uppercase tracking-wider">
            <span>💳</span> AUTOMATED TOP-UP SYSTEM
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ระบบ <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">เติมเงิน</span>
          </h1>
          <p className="text-sm text-zinc-400">เติมเครดิตเข้าบัญชีเพื่อใช้ซื้อสินค้าและสุ่มรางวัลทันที</p>
        </div>

        {/* ช่องทางเติมเงิน */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <button
            onClick={() => setMethod('promptpay')}
            className={`p-5 rounded-2xl border text-left transition-all flex items-center gap-4 ${
              method === 'promptpay'
                ? 'bg-orange-500/10 border-orange-500 text-white shadow-lg shadow-orange-500/10'
                : 'bg-[#0e0e17] border-white/5 text-zinc-400 hover:border-white/20'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-black text-xl">
              QR
            </div>
            <div>
              <div className="font-extrabold text-sm text-white">พร้อมเพย์ (PromptPay)</div>
              <div className="text-[11px] text-zinc-400">สแกน QR ฟรีค่าธรรมเนียม</div>
            </div>
          </button>

          <button
            onClick={() => setMethod('truewallet')}
            className={`p-5 rounded-2xl border text-left transition-all flex items-center gap-4 ${
              method === 'truewallet'
                ? 'bg-orange-500/10 border-orange-500 text-white shadow-lg shadow-orange-500/10'
                : 'bg-[#0e0e17] border-white/5 text-zinc-400 hover:border-white/20'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center font-black text-xl">
              🧧
            </div>
            <div>
              <div className="font-extrabold text-sm text-white">ซองอั่งเปา TrueMoney</div>
              <div className="text-[11px] text-zinc-400">กรอกลิงก์ซองอั่งเปา</div>
            </div>
          </button>

          <button
            onClick={() => setMethod('code')}
            className={`p-5 rounded-2xl border text-left transition-all flex items-center gap-4 ${
              method === 'code'
                ? 'bg-orange-500/10 border-orange-500 text-white shadow-lg shadow-orange-500/10'
                : 'bg-[#0e0e17] border-white/5 text-zinc-400 hover:border-white/20'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center font-black text-xl">
              🎁
            </div>
            <div>
              <div className="font-extrabold text-sm text-white">โค้ดเติมเงิน</div>
              <div className="text-[11px] text-zinc-400">ใช้ Gift Code หรือ Voucher</div>
            </div>
          </button>
        </div>

        {/* ฟอร์มการเติมเงิน */}
        <div className="bg-[#0e0e17] border border-white/5 rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto shadow-2xl">
          {method === 'promptpay' && (
            <div className="space-y-6 text-center">
              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-3">ระบุจำนวนเงินที่ต้องการเติม (บาท)</label>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {['50', '100', '300', '500'].map((val) => (
                    <button
                      key={val}
                      onClick={() => setAmount(val)}
                      className={`py-2.5 rounded-xl font-extrabold text-xs transition ${
                        amount === val
                          ? 'bg-orange-500 text-zinc-950'
                          : 'bg-white/5 text-zinc-300 hover:bg-white/10'
                      }`}
                    >
                      ฿{val}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3 text-center text-xl font-black text-orange-400 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="p-6 bg-white rounded-2xl inline-block shadow-xl">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=PROMPTPAY_${amount}`}
                  alt="QR Code"
                  className="w-44 h-44 mx-auto"
                />
                <div className="text-zinc-900 font-black text-xs mt-3">สแกนจ่าย ฿{amount}</div>
              </div>

              <button className="w-full py-4 rounded-xl font-black text-sm bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 shadow-lg shadow-orange-500/20 hover:scale-[1.01] transition-all">
                ยืนยันการชำระเงิน
              </button>
            </div>
          )}

          {method === 'truewallet' && (
            <div className="space-y-4">
              <label className="block text-xs font-bold text-zinc-400">วางลิงก์ซองอั่งเปา TrueMoney Wallet</label>
              <input
                type="text"
                placeholder="https://gift.truemoney.com/campaign/?v=..."
                className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-orange-500"
              />
              <button className="w-full py-4 rounded-xl font-black text-sm bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 shadow-lg shadow-orange-500/20 hover:scale-[1.01] transition-all">
                เติมเงินด้วยซองอั่งเปา
              </button>
            </div>
          )}

          {method === 'code' && (
            <div className="space-y-4">
              <label className="block text-xs font-bold text-zinc-400">กรอกรหัสโค้ดเติมเงิน</label>
              <input
                type="text"
                placeholder="XXXX-XXXX-XXXX"
                className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white uppercase tracking-widest focus:outline-none focus:border-orange-500"
              />
              <button className="w-full py-4 rounded-xl font-black text-sm bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 shadow-lg shadow-orange-500/20 hover:scale-[1.01] transition-all">
                ใช้งานโค้ด
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}