import Navbar from '../components/Navbar';

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-4 py-16 space-y-6">
        <h1 className="text-3xl font-black text-orange-500">📰 ประกาศและข่าวสาร</h1>
        <p className="text-zinc-400">อัปเดตข่าวสาร กิจกรรม และโปรโมชันล่าสุด</p>
      </main>
    </div>
  );
}