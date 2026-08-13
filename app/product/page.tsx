'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', price: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`เพิ่มสินค้าเรียบร้อย: ${formData.name}`);
    router.push('/home');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => router.back()}
          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          ← ย้อนกลับ
        </button>
        <h1 className="text-xl font-bold">ลงประกาศขายสินค้า</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">ชื่อสินค้า</label>
          <input
            type="text"
            required
            className="w-full p-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="เช่น สมุดโน้ต, เสื้อช็อป"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">ราคา (บาท)</label>
          <input
            type="number"
            required
            className="w-full p-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="เช่น 150"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition"
        >
          ลงขายสินค้า
        </button>
      </form>
    </div>
  );
}