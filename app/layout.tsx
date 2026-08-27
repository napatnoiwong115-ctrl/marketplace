import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campus Marketplace",
  description: "ตลาดนัดนักศึกษา",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={inter.className}>
        <ThemeProvider>
          {/* ขยายความกว้างเต็มจอแนวนอน ไม่บีบเป็นจอมือถือ */}
          <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}