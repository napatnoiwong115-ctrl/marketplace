import Navbar from '../components/Navbar';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-4 py-16 space-y-6">
        <h1 className="text-3xl font-black text-orange-500">📞 ติดต่อทีมงาน</h1>
        <p className="text-zinc-400">สอบถามปัญหา เคลมไอดี หรือแจ้งปัญหาการใช้งานได้ตลอด 24 ชั่วโมง</p>
      </main>
    </div>
  );
}