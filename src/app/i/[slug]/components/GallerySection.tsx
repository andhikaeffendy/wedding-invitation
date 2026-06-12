"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { GalleryItem } from "@/lib/template-types";

export default function GallerySection({ gallery }: { gallery?: (string | GalleryItem)[] }) {
  const rawImages = gallery?.length
    ? gallery
    : [
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
        'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80',
        'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80',
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80',
        'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80',
      ];

  const images = useMemo(
    () =>
      rawImages.map((src, i) => {
        const url = typeof src === 'string' ? src : src.public_url || src.url || '';
        return { id: `gal-${i}`, url, alt: `Gallery ${i + 1}` };
      }),
    [rawImages],
  );

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="section-gallery" className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-[#F0EBE0] to-[#F7F1E6]" aria-labelledby="gallery-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#C9A86A] text-xs tracking-[0.4em] uppercase mb-4">Momen Berharga</p>
          <h2 id="gallery-heading" className="font-serif text-3xl md:text-5xl text-[#1F2E26]">Our Gallery</h2>
          <div className="w-20 h-[1px] mx-auto mt-4 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent" aria-hidden="true" />
        </motion.div>

        <ul className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4" aria-label="Galeri foto">
          {images.map((img, index) => (
            <motion.li
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="break-inside-avoid group"
            >
              <button
                onClick={() => setLightboxIndex(index)}
                className="relative rounded-xl overflow-hidden shadow-lg w-full cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C9A86A] focus-visible:ring-offset-2"
                aria-label={`Lihat foto ${index + 1} dari ${images.length}`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E26]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" aria-hidden="true">
                  <span className="text-[#F7F1E6] font-serif text-sm">Lihat</span>
                </div>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1F2E26]/95 backdrop-blur-sm flex items-center justify-center p-4"
            role="dialog"
            aria-label={`Lightbox foto ${lightboxIndex + 1} dari ${images.length}`}
            aria-modal="true"
            onClick={() => setLightboxIndex(null)}
            onKeyDown={(e) => { if (e.key === 'Escape') setLightboxIndex(null); }}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-[#F7F1E6]/80 hover:text-white transition-colors"
              aria-label="Tutup lightbox"
            >
              <X size={32} aria-hidden="true" />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[lightboxIndex].url}
              alt={images[lightboxIndex].alt}
              className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
