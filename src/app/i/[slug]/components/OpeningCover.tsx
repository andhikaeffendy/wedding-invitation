"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Volume2, VolumeX } from "lucide-react";

export default function OpeningCover({
  guestToken,
  invitation,
  guest,
  onOpen,
}: {
  guestToken: string;
  invitation?: any;
  guest?: any;
  onOpen?: () => void;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const inv = invitation || {
    groom_name: "Andhika",
    bride_name: "Laila",
    event_date: "2027-01-30",
    settings: {
      coverImage:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    },
  };
  const coverImg =
    inv.settings.coverImage ||
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80";

  const handleOpen = () => {
    if (onOpen) onOpen();
    setTimeout(() => {
      setIsVisible(false);
    }, 1200);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[100] flex flex-col md:flex-row overflow-hidden bg-[#1F2E26]"
      >
        {/* SIDEBAR (Desktop Only) */}
        <div className="hidden md:flex w-[350px] bg-[#1F2E26] border-r border-[#C9A86A]/20 flex-col justify-between p-10 z-20 relative overflow-hidden">
          {/* Floral Ornament Top */}
          <div className="absolute top-[-50px] left-[-50px] w-64 h-64 opacity-20 pointer-events-none rotate-12">
            <img
              src="https://i.ibb.co/L5Qx8S5/floral-corner.png"
              alt=""
              className="w-full h-full object-contain brightness-0 invert opacity-50"
            />
          </div>

          <div className="relative z-10">
            <div className="w-12 h-12 mb-8">
              <img
                src="https://i.ibb.co/v3K4W7C/monogram-gold.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-[#F7F1E6] font-serif text-3xl leading-tight mb-2 tracking-wide uppercase">
              Eternal Sage
            </h2>
            <p className="text-[#C9A86A] text-[10px] tracking-[0.4em] uppercase font-light mb-12">
              Luxury Wedding Invitation
            </p>

            <div className="w-24 h-[1px] bg-[#C9A86A]/30 mb-8" />

            <p className="text-[#A9B89B] text-[9px] tracking-[0.5em] uppercase leading-loose">
              Cinematic • Elegant
              <br />
              Timeless • Premium
            </p>
          </div>

          <div className="relative z-10">
            <div className="mb-8">
              <div className="w-12 h-12 flex items-center justify-center border border-[#C9A86A]/30 rounded-full mb-4">
                <Music size={16} className="text-[#C9A86A]" />
              </div>
              <p className="text-[#F7F1E6]/40 text-[9px] leading-relaxed max-w-[200px]">
                Desain undangan digital dengan nuansa mewah, elegan, dan animasi
                yang smooth untuk pengalaman yang tak terlupakan.
              </p>
            </div>

            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-[#F7F1E6]" />
              <div className="w-5 h-5 rounded-full bg-[#A9B89B]" />
              <div className="w-5 h-5 rounded-full bg-[#6F7F55]" />
              <div className="w-5 h-5 rounded-full bg-[#22382D]" />
              <div className="w-5 h-5 rounded-full bg-[#B86B4B]" />
              <div className="w-5 h-5 rounded-full bg-[#C9A86A]" />
              <div className="w-5 h-5 rounded-full bg-[#1F2E26] border border-white/10" />
            </div>
          </div>

          {/* Floral Ornament Bottom */}
          <div className="absolute bottom-[-80px] left-[-30px] w-72 h-72 opacity-20 pointer-events-none -rotate-12">
            <img
              src="https://i.ibb.co/L5Qx8S5/floral-corner.png"
              alt=""
              className="w-full h-full object-contain brightness-0 invert opacity-50"
            />
          </div>
        </div>

        {/* MAIN AREA */}
        <div className="relative flex-1 flex items-center justify-center p-6 overflow-hidden">
          {/* Background Image with Cinematic Zoom */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${coverImg})` }}
          />
          <div className="absolute inset-0 bg-[#1F2E26]/40 z-[1]" />

          {/* Floral Corners */}
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 z-[2] opacity-80 pointer-events-none">
            <img
              src="https://i.ibb.co/L5Qx8S5/floral-corner.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 z-[2] opacity-80 pointer-events-none rotate-180">
            <img
              src="https://i.ibb.co/L5Qx8S5/floral-corner.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          {/* Center Content */}
          <div className="relative z-10 text-center max-w-lg w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="text-[#F7F1E6] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-8 font-light">
                You are invited to the wedding of
              </p>

              <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 font-light">
                {inv.groom_name} & {inv.bride_name}
              </h1>

              <div className="w-32 h-[1px] bg-white/20 mx-auto mb-8" />

              <p className="text-[#C9A86A] font-serif text-lg md:text-xl mb-12 tracking-wide">
                Sabtu, 30 Januari 2027
              </p>

              <div className="mb-12">
                <p className="text-[#F7F1E6]/60 text-[10px] tracking-[0.3em] uppercase mb-4">
                  Kepada Yth. Bapak/Ibu/Saudara/i
                </p>
                <div className="inline-block relative">
                  <h3 className="text-[#F7F1E6] font-serif text-2xl md:text-3xl mb-1">
                    {guest ? guest.guest_name : "Nama Tamu"}
                  </h3>
                  <div className="w-full h-[1px] bg-[#C9A86A]/50" />
                </div>
              </div>

              <motion.button
                onClick={handleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 bg-[#6F7F55]/90 hover:bg-[#6F7F55] text-white rounded-full font-serif text-sm tracking-[0.2em] transition-all flex items-center justify-center gap-3 mx-auto shadow-2xl backdrop-blur-sm"
              >
                <span>BUKA UNDANGAN</span>
                <img
                  src="https://i.ibb.co/v3K4W7C/monogram-gold.png"
                  alt=""
                  className="w-4 h-4 object-contain brightness-0 invert"
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom Music Info (Mobile) */}
          <div className="md:hidden absolute bottom-10 left-0 right-0 px-8 flex items-center gap-4 z-10">
            <div className="flex-1 h-[1px] bg-white/10" />
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
              <Volume2 size={12} className="text-white/60" />
            </div>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
