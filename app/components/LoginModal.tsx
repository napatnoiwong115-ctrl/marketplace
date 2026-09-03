'use client';

import { useState, useEffect } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
  onLoginSuccess: (user: { username: string; balance: number }) => void;
}

export default function LoginModal({
  isOpen,
  onClose,
  initialMode = 'login',
  onLoginSuccess,
}: LoginModalProps) {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setMode(initialMode);
    setError('');
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    if (mode === 'register') {
      if (!email) {
        setError('กรุณากรอกอีเมล');
        return;
      }
      if (password !== confirmPassword) {
        setError('รหัสผ่านทั้งสองช่องไม่ตรงกัน');
        return;
      }
    }

    // จำลองเข้าสู่ระบบสำเร็จ
    onLoginSuccess({
      username: username,
      balance: 0,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Container */}
      <div className="relative w-full max-w-md bg-[#0e0e17] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Glow BG Effect */}
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition"
        >
          ✕
        </button>

        {/* Tab Switcher */}
        <div className="flex bg-[#050508] p-1.5 rounded-2xl border border-white/5 mb-6">
          <button
            type="button"
            onClick={() => { setMode('login'); setError(''); }}
            className={`flex-1 py-2.5 rounded-xl font-black text-xs transition-all ${
              mode === 'login'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            เข้าสู่ระบบ
          </button>
          <button
            type="button"
            onClick={() => { setMode('register'); setError(''); }}
            className={`flex-1 py-2.5 rounded-xl font-black text-xs transition-all ${
              mode === 'register'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            สมัครสมาชิก
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-white">
            {mode === 'login' ? 'ต้อนรับกลับเข้าสู่ระบบ' : 'สร้างบัญชีผู้ใช้ใหม่'}
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            {mode === 'login'
              ? 'กรอกข้อมูลเพื่อเข้าใช้งานระบบ KAITAN SHOP'
              : 'สมัครวันนี้เพื่อรับสิทธิพิเศษและโปรโมชันมากมาย'}
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold text-center">
            ⚠️ {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-zinc-400 mb-1.5">ชื่อผู้ใช้งาน (Username)</label>
            <input
              type="text"
              placeholder="กรอกชื่อผู้ใช้..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          {mode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-zinc-400 mb-1.5">อีเมล (Email)</label>
              <input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-zinc-400 mb-1.5">รหัสผ่าน (Password)</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          {mode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-zinc-400 mb-1.5">ยืนยันรหัสผ่าน (Confirm Password)</label>
              <input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-zinc-950 shadow-lg shadow-orange-500/20 hover:scale-[1.02] active:scale-95 transition-all mt-2"
          >
            {mode === 'login' ? 'เข้าสู่ระบบ' : 'ยืนยันการสมัครสมาชิก'}
          </button>
        </form>
      </div>
    </div>
  );
}