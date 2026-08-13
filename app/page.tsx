'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // แสดง Splash Screen 2 วินาที แล้วเปิดไปยังหน้า /home
    const timer = setTimeout(() => {
      router.push('/home');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center animate-bounce mb-4">
        <span className="text-white text-3xl font-bold">🛒</span>
      </div>
      <h1 className="text-2xl font-bold">Campus Marketplace</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        แหล่งรวมสินค้าและบริการในวิทยาลัย
      </p>
    </div>
  );
}