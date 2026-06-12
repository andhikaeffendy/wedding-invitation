"use client";
import { motion } from "framer-motion";

export default function HeroSection({ invitation }: { invitation?: any }) {
  const inv = invitation || { groom_name: "Andhika", bride_name: "Laila" };

  return (
    <section
      id="section-hero"
      className="relative py-24 px-6 bg-[#F7F1E6] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/paper-fibers.png")',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Circular Photo with Floral Wreath */}
          <div className="relative inline-block mb-12">
            {/* Floral Wreath arranged from 4 corners */}
            <div className="absolute inset-[-60px] z-0 pointer-events-none">
              <img
                src="https://i.ibb.co/L5Qx8S5/floral-corner.png"
                alt=""
                className="absolute top-0 left-0 w-48 h-48 object-contain opacity-40 -rotate-45"
              />
              <img
                src="https://i.ibb.co/L5Qx8S5/floral-corner.png"
                alt=""
                className="absolute top-0 right-0 w-48 h-48 object-contain opacity-40 rotate-45"
              />
              <img
                src="https://i.ibb.co/L5Qx8S5/floral-corner.png"
                alt=""
                className="absolute bottom-0 left-0 w-48 h-48 object-contain opacity-40 -rotate-135"
              />
              <img
                src="https://i.ibb.co/L5Qx8S5/floral-corner.png"
                alt=""
                className="absolute bottom-0 right-0 w-48 h-48 object-contain opacity-40 rotate-135"
              />
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-40px] z-0 pointer-events-none opacity-20"
            >
              <img
                src="https://i.ibb.co/v3K4W7C/monogram-gold.png"
                alt=""
                className="w-full h-full object-contain scale-110"
              />
            </motion.div>

            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img
                src={
                  inv.settings?.heroImage ||
                  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80"
                }
                alt="Couple"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative">
            <p className="text-[#C9A86A] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-6 font-light">
              THE WEDDING OF
            </p>

            <h2 id="hero-heading" className="font-serif text-5xl md:text-7xl text-[#1F2E26] mb-4 font-light leading-tight">
              {inv.groom_name} & {inv.bride_name}
            </h2>

            <div className="w-24 h-[1px] bg-[#C9A86A]/30 mx-auto mb-6" />

            <p className="text-[#6F7F55] font-serif text-lg md:text-xl tracking-wide italic">
              Sabtu, 30 Januari 2027
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
