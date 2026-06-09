"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OpeningCover({ guestToken, invitation, guest }: { guestToken: string; invitation?: any; guest?: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const inv = invitation || { bride_name: 'Laila', groom_name: 'Andhika', settings: { coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80' } };
  const coverUrl = inv?.settings?.coverImage || 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80';

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => setIsVisible(false), 1200);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.section
        className="fixed inset-0 z-50 flex items-center justify-center"
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${coverUrl})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-[#22382D]/40" />

        {/* Floating petals */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-30"
            initial={{ y: "-10vh", x: `${Math.random() * 100}vw`, rotate: 0 }}
            animate={{ y: "110vh", rotate: 360, x: `${Math.random() * 100}vw` }}
            transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 5 }}
          >
            🌿
          </motion.div>
        ))}

        {/* Gold line decoration - top */}
        <motion.div
          className="absolute top-[15%] left-[10%] right-[10%] h-[1px]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-md w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Monogram */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.6, type: "spring" }}
          >
            <div className="w-24 h-24 mx-auto rounded-full border-2 border-[#C9A86A] flex items-center justify-center">
              <span className="font-display text-3xl text-[#C9A86A]">A<span className="text-2xl">&</span>L</span>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="text-[#C9A86A] text-sm tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Kepada Yth.
          </motion.p>

          {/* Guest Name */}
          <motion.h1
            className="font-display text-3xl md:text-4xl text-[#F7F1E6] mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            {guest ? guest.guest_name : "Bapak/Ibu/Saudara/i"}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-[#A9B89B]/80 text-sm mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            Kami mengundang Bapak/Ibu/Saudara/i<br />untuk hadir di hari bahagia kami
          </motion.p>

          {/* Open Button */}
          <motion.button
            onClick={handleOpen}
            className="btn-primary text-base px-10 py-3.5 relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">🖐️ Buka Undangan</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </motion.button>

          {/* Music Consent Note */}
          <motion.p
            className="text-[#A9B89B]/50 text-xs mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            Musik akan diputar setelah Anda membuka undangan
          </motion.p>
        </motion.div>

        {/* Gold line decoration - bottom */}
        <motion.div
          className="absolute bottom-[15%] left-[10%] right-[10%] h-[1px]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent" />
        </motion.div>

        {/* Ornament */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C9A86A]/40 text-sm tracking-[0.4em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          ANDHIKA & LAILA
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
