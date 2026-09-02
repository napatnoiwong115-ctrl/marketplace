import Navbar from '../components/Navbar';

export default function GachaPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-4 py-16 space-y-6">
        <h1 className="text-3xl font-black text-orange-500">🎲 มินิเกมสุ่มรางวัล</h1>
        <p className="text-zinc-400">สุ่มวงล้อลุ้นรับไอดีพรีเมียมและของรางวัลมากมาย</p>
      </main>
    </div>
  );
}