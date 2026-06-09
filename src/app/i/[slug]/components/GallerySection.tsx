"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

export default function GallerySection({ gallery }: { gallery?: string[] }) {
  const rawImages = gallery?.length
    ? gallery
    : [
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
        'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80',
        'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80',
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80',
        'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80',
        'https://images.unsplash.com/photo-1519741343486-eb1a50165ad6?w=600&q=80',
        'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&q=80',
      ];

  // Normalize to objects with id, url, alt
  const images: GalleryImage[] = useMemo(
    () =>
      rawImages.map((src, i) => ({
        id: `gal-${i}`,
        url: typeof src === 'string' ? src : (src as any).public_url || (src as any).url || '',
        alt: (typeof src === 'string' ? `Gallery ${i + 1}` : (src as any).alt_text || `Gallery ${i + 1}`),
      })),
    [gallery],
  );

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const next = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % images.length);
  };
  const prev = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="section-gallery" className="relative py-20 md:py-32 px-4 bg-[#22382D]/3">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">Momen Berharga</p>
          <h2 className="section-title">Our Gallery</h2>
          <p className="text-[#6F7F55] text-sm mt-2">Momen-momen berharga perjalanan cinta kami</p>
          <div className="w-16 h-[1px] bg-[#C9A86A] mx-auto mt-4" />
        </motion.div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#22382D]/0 group-hover:bg-[#22382D]/20 transition-colors duration-300 flex items-center justify-center">
                <Play size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#22382D]/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/80 hover:text-white z-10">
              <X size={28} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10">
              <ChevronLeft size={40} />
            </button>
            <motion.img
              key={images[lightboxIndex].id}
              src={images[lightboxIndex].url}
              alt={images[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10">
              <ChevronRight size={40} />
            </button>
            <p className="absolute bottom-8 text-white/60 text-sm">
              {lightboxIndex + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
