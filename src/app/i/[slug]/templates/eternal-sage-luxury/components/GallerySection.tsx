"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { TOKENS } from "../styles";

interface GallerySectionProps { images: string[]; }

export default function GallerySection({ images }: GallerySectionProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const display = images.slice(0, 6);

  return (
    <section className="relative py-20 sm:py-28 px-3 sm:px-4" style={{ background: TOKENS.color.cream }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-12" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}30,transparent)` }}/>
          <span style={{ color: TOKENS.color.gold }}>🌿</span>
          <div className="h-[1px] w-12" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}30,transparent)` }}/>
        </div>
        <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3 text-center" style={{ color: TOKENS.color.gold }}>Momen Berharga</p>
        <h2 className="text-2xl sm:text-4xl text-center mb-10 sm:mb-14" style={{ fontFamily: TOKENS.font.display, color: TOKENS.color.text }}>Gallery</h2>

        {/* Grid 3×2 */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {display.map((src, i) => (
            <motion.div key={i} className="cursor-pointer rounded-xl overflow-hidden aspect-square"
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.03 }} onClick={() => setLightbox(i)}>
              <img src={src} alt={`Gallery ${i+1}`} className="w-full h-full object-cover" loading="lazy"/>
            </motion.div>
          ))}
        </div>

        {/* "Lihat Semua Foto" */}
        {images.length > 6 && (
          <motion.div className="text-center mt-8" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <button onClick={() => setLightbox(0)} className="px-6 py-3 rounded-full text-xs font-medium tracking-wider text-white transition-all hover:scale-105"
              style={{ background: `linear-gradient(135deg,${TOKENS.color.gold},${TOKENS.color.accent})`, boxShadow: TOKENS.shadow.button }}>
              📸 Lihat Semua Foto
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}>
            <button className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white/60 p-2 hover:text-white" onClick={() => setLightbox(null)}><X size={24}/></button>
            <img src={images[lightbox]} alt="Preview" className="max-h-[85vh] max-w-[94vw] object-contain rounded-lg" onClick={e => e.stopPropagation()}/>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
