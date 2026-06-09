import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: "Andhika & Laila - Wedding Invitation",
  description: "Undangan pernikahan Andhika & Laila — 15 Agustus 2026",
  openGraph: {
    title: "Andhika & Laila - Wedding Invitation",
    description: "Kami mengundang Anda untuk hadir di hari bahagia kami",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F7F1E6] text-[#22382D] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
