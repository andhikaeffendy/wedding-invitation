"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function ClosingSection({ invitation }: { invitation?: any }) {
  const inv = invitation || { groom_name: 'Andhika', bride_name: 'Laila', bride_parents: 'Keluarga Besar Bpk. H. Ahmad Fauzi', groom_parents: 'Keluarga Besar Bpk. Ir. Budi Santoso' };

  return (
    <section className="relative py-24 md:py-40 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F1E6] via-[#F7F1E6] to-[#A9B89B]/10" />
      <div className="max-w-2xl mx-auto text-center relative">
        {/* Ornament top */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-[1px] bg-[#C9A86A]/40" />
          <span className="text-2xl">🌿</span>
          <div className="w-12 h-[1px] bg-[#C9A86A]/40" />
        </motion.div>

        <motion.h2
          className="font-display text-4xl md:text-5xl text-[#22382D] mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Terima Kasih
        </motion.h2>

        <motion.p
          className="text-[#6F7F55] text-sm md:text-base leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Merupakan suatu kehormatan dan kebahagiaan apabila<br />
          Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu.
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-[#C9A86A] text-sm tracking-[0.2em] uppercase mb-2">Kami yang berbahagia</p>
          <h3 className="font-display text-3xl text-[#22382D]">
            {inv.groom_name} <span className="text-[#C9A86A]">&</span> {inv.bride_name}
          </h3>
        </motion.div>

        <motion.p
          className="text-[#A9B89B] text-xs leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          {inv.bride_parents}<br />&<br />{inv.groom_parents}
        </motion.p>

        <motion.div
          className="bg-[#22382D]/5 rounded-2xl p-6 md:p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <Heart size={20} className="text-[#C9A86A]/50 mx-auto mb-3" />
          <p className="text-[#6F7F55] text-xs md:text-sm leading-relaxed italic">
            &ldquo;Dan di antara tanda-tanda kekuasaan-Nya, Dia menciptakan pasangan-pasangan untukmu<br />
            agar kamu merasa tenteram kepadanya. Sesungguhnya pada yang demikian itu<br />
            benar-benar terdapat tanda-tanda bagi kaum yang berpikir.&rdquo;<br />
            <span className="text-[#C9A86A] not-italic mt-2 block">— QS. Ar-Rum: 21</span>
          </p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-[1px] bg-[#C9A86A]/40" />
          <span className="text-2xl">💐</span>
          <div className="w-12 h-[1px] bg-[#C9A86A]/40" />
        </motion.div>
      </div>
    </section>
  );
}
