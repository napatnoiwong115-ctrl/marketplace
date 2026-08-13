import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';

export const metadata: Metadata = {
  title: 'Campus Marketplace',
  description: 'ตลาดสินค้าในวิทยาลัย',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="dark">
      {/* แก้ตรงนี้: กำหนด bg-white สำหรับ Light Mode และ dark:bg-slate-950 สำหรับ Dark Mode */}
      <body className="bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
        <ThemeProvider>
          <main className="max-w-md mx-auto min-h-screen bg-white dark:bg-slate-900 border-x border-slate-200 dark:border-slate-800 p-4 shadow-xl transition-colors duration-300">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}