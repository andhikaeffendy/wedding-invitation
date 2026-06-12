import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-serif", display: "swap" });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-script", display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

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
    <html lang="id" className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${greatVibes.variable} scroll-smooth`}>
      <body
        className="min-h-screen font-sans antialiased"
        style={{
          background: 'var(--color-background, #F7F1E6)',
          color: 'var(--color-text-primary, #22382D)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        {/* Skip to content — accessibility */}
        <a href="#main-content" className="skip-to-content" aria-label="Lewati ke konten utama">
          Lewati ke konten
        </a>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}
