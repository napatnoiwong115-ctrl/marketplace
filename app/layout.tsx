import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Campus Marketplace',
  description: 'เว็บบอร์ดซื้อขายสินค้าในวิทยาลัย',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="dark">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        <main className="max-w-md mx-auto min-h-screen shadow-lg border-x border-gray-200 dark:border-gray-800 p-4">
          {children}
        </main>
      </body>
    </html>
  );
}