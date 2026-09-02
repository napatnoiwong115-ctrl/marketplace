import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const kanit = Kanit({ 
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"] 
});

export const metadata: Metadata = {
  title: "KAITAN SHOP - ศูนย์รวมไอดีไก่ตัน การันตีแท้ 100%",
  description: "จำหน่ายไอดีไก่ตัน Blox Fruits เผ่า V4 การันตีผลตื่น ดาบคู่ หมัด Godhuman ราคาถูก ส่งไว ปลอดภัย",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" class="dark">
      <body className={`${kanit.className} min-h-screen antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}