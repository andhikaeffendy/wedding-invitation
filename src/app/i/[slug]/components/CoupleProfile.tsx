"use client";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { dummyInvitation } from "@/lib/dummy-data";

export default function CoupleProfile({ invitation }: { invitation?: any }) {
  const inv = invitation || dummyInvitation;

  return (
    <section id="section-couple" className="relative py-20 md:py-32 px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 ornament-leaf opacity-5" />

      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">Assalamualaikum Wr. Wb.</p>
          <h2 className="section-title">Yang Berbahagia</h2>
          <div className="w-16 h-[1px] bg-[#C9A86A] mx-auto mt-4" />
        </motion.div>

        {/* Couple Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Groom */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6">
              <div className="absolute inset-2 rounded-full border border-[#C9A86A]/30" />
              <div className="absolute inset-4 rounded-full border border-[#C9A86A]/20" />
              <div
                className="w-full h-full rounded-full bg-cover bg-center shadow-xl"
                style={{ backgroundImage: `url(${inv.settings.groomPhoto || 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80'})` }}
              />
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-[#22382D] mb-2">{inv.groom_name}</h3>
            <p className="text-[#6F7F55] text-lg font-medium mb-1">{inv.groom_full_name}</p>
            <p className="text-[#A9B89B] text-sm mb-3">{inv.groom_parents}</p>
            {inv.groom_ig && (
              <a
                href={`https://instagram.com/${inv.groom_ig.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#C9A86A] hover:text-[#b8974f] text-sm transition-colors"
              >
                <Camera size={14} /> {inv.groom_ig}
              </a>
            )}
          </motion.div>

          {/* Gold & */}
          <motion.div
            className="hidden md:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="font-display text-5xl gold-gradient-text">&</span>
          </motion.div>

          {/* Bride */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6">
              <div className="absolute inset-2 rounded-full border border-[#C9A86A]/30" />
              <div className="absolute inset-4 rounded-full border border-[#C9A86A]/20" />
              <div
                className="w-full h-full rounded-full bg-cover bg-center shadow-xl"
                style={{ backgroundImage: `url(${inv.settings.bridePhoto || 'https://images.unsplash.com/photo-1594552073388-6e3f45e83df6?w=400&q=80'})` }}
              />
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-[#22382D] mb-2">{inv.bride_name}</h3>
            <p className="text-[#6F7F55] text-lg font-medium mb-1">{inv.bride_full_name}</p>
            <p className="text-[#A9B89B] text-sm mb-3">{inv.bride_parents}</p>
            {inv.bride_ig && (
              <a
                href={`https://instagram.com/${inv.bride_ig.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#C9A86A] hover:text-[#b8974f] text-sm transition-colors"
              >
                <Camera size={14} /> {inv.bride_ig}
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
