"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sun, Moon, ArrowRight } from "lucide-react";

// ═══════════════════════════════════════════════════════════
// Design Token System — ALL values from CSS custom properties
// ═══════════════════════════════════════════════════════════

const DEMO_SLUG = "andhika-laila";
const DEMO_GUEST_TOKEN = "tok-a1b2c3d4e5";

export default function HomePage() {
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(true);

  // Detect dark mode preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setIsDark(saved === "dark");
    } else {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Toggle dark mode
  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    // Apply to document for globals.css dark mode
    if (next) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Apply initial class
  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
  }, [isDark]);

  const bgClass = isDark ? "bg-[#0F1A15]" : "bg-[#F7F1E6]";
  const textClass = isDark ? "text-[#FDF5E2]" : "text-[#1A2A22]";
  const textSecondary = isDark ? "text-[#A9B89B]" : "text-[#6F7F55]";
  const textMuted = isDark ? "text-[#8FA07F]" : "text-[#A9B89B]";
  const cardBg = isDark ? "bg-[#1A2A22]/80" : "bg-white/80";
  const cardBorder = isDark ? "border-[#C9A86A]/15" : "border-[#C9A86A]/20";

  return (
    <main className={`${bgClass} min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500`}>
      {/* Skip to content */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{
          background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
          border: `1px solid ${isDark ? "rgba(201,168,106,0.2)" : "rgba(201,168,106,0.15)"}`,
        }}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? (
          <Sun size={18} className="text-[#C9A86A]" />
        ) : (
          <Moon size={18} className="text-[#6F7F55]" />
        )}
      </button>

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: isDark
            ? "radial-gradient(circle, rgba(201,168,106,0.3) 1px, transparent 1px)"
            : "radial-gradient(circle, rgba(34,56,45,0.3) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Loading State */}
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-20 h-20 rounded-full border-2 border-[#C9A86A]/20 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-[#C9A86A] border-t-transparent rounded-full animate-spin" />
            </div>
            <div className="space-y-2 w-48">
              <div className="h-3 bg-[#C9A86A]/20 rounded animate-pulse" />
              <div className="h-2 bg-[#C9A86A]/10 rounded animate-pulse" style={{ animationDelay: "0.1s" }} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            id="main-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center px-6 w-full max-w-md"
          >
            {/* Card Container */}
            <div
              className={`${cardBg} backdrop-blur-xl rounded-3xl border ${cardBorder} shadow-2xl p-8 md:p-10`}
            >
              {/* Logo / Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-[#C9A86A]/30 flex items-center justify-center bg-[#C9A86A]/5">
                  <Heart size={28} className="text-[#C9A86A]" aria-label="Love" />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1
                className={`${textClass} font-[family-name:var(--font-display)] font-light mb-2`}
                style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Wedding Invitation
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className={`${textClass} text-sm leading-relaxed mb-8 opacity-70`}
                style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Selamat datang di undangan pernikahan online. Silakan buka undangan Anda melalui link yang telah dibagikan.
              </motion.p>

              {/* Divider */}
              <motion.div
                className="w-16 h-[1px] mx-auto mb-8"
                style={{ background: "linear-gradient(90deg, transparent, #C9A86A40, transparent)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />

              {/* CTA Buttons */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button
                  onClick={() => router.push(`/i/${DEMO_SLUG}?guest=${DEMO_GUEST_TOKEN}`)}
                  className="w-full group flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A86A33] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #C9A86A, #D4AB40)",
                    color: "#fff",
                    minHeight: "48px",
                  }}
                  aria-label="Open demo invitation with guest token"
                >
                  <span>Buka Undangan</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => router.push(`/i/${DEMO_SLUG}`)}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-300 border-2 active:scale-[0.98] ${isDark ? "border-[#C9A86A]/40 text-[#C9A86A] hover:bg-[#C9A86A]/10" : "border-[#22382D]/30 text-[#22382D] hover:bg-[#22382D]/5"}`}
                  style={{ minHeight: "48px" }}
                  aria-label="Open demo invitation without guest token"
                >
                  Lihat Tanpa Token
                </button>
              </motion.div>
            </div>

            {/* Footer */}
            <motion.p
              className={`${textMuted} text-xs mt-8`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Dibangun dengan <span aria-label="love">❤️</span> menggunakan Next.js + Tailwind CSS
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
