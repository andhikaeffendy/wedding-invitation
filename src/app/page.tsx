"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#F7F1E6] flex items-center justify-center">
      <div className="text-center px-6 max-w-md">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-full border-2 border-[#C9A86A] flex items-center justify-center bg-[#C9A86A]/5">
            <Heart size={32} className="text-[#C9A86A]" />
          </div>
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl text-[#22382D] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Wedding Invitation
        </motion.h1>

        <motion.p
          className="text-[#6F7F55] mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Selamat datang di undangan pernikahan online. Silakan buka undangan Anda melalui link yang telah dibagikan.
        </motion.p>

        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <button
            onClick={() => router.push("/i/andhika-laila?guest=tok-a1b2c3d4e5")}
            className="btn-primary w-full"
          >
            🎉 Demo Undangan (dengan Guest Token)
          </button>
          <button
            onClick={() => router.push("/i/andhika-laila")}
            className="btn-outline w-full"
          >
            📋 Demo Undangan (Tanpa Token)
          </button>
        </motion.div>

        <motion.p
          className="text-[#A9B89B] text-xs mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          Dibangun dengan ❤️ menggunakan Next.js + Tailwind CSS
        </motion.p>
      </div>
    </main>
  );
}
