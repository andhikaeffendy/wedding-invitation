"use client";
import { motion } from "framer-motion";
import { TOKENS } from "../styles";

interface CoupleSectionProps {
  groomPhoto: string; groomName: string; groomFull?: string; groomParents?: string;
  bridePhoto: string; brideName: string; brideFull?: string; brideParents?: string;
}

export default function CoupleSection({ groomPhoto, groomName, groomFull, groomParents, bridePhoto, brideName, brideFull, brideParents }: CoupleSectionProps) {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden" style={{ background: TOKENS.color.cream }}>
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: `url(${TOKENS.bg.signature})` }}/>
      <div className="absolute inset-0" style={{ background:"rgba(255,255,255,0.65)" }}/>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Ornament */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-[1px] w-12" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}30,transparent)` }}/>
          <span style={{ color: TOKENS.color.gold }}>🌿</span>
          <div className="h-[1px] w-12" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}30,transparent)` }}/>
        </div>

        <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-2" style={{ color: TOKENS.color.gold }}>Bismillahirrahmanirrahim</p>
        <p className="text-xs sm:text-sm mb-8" style={{ color: TOKENS.color.text, opacity: 0.5 }}>Dengan memohon rahmat dan ridho Allah SWT</p>

        <div className="relative grid md:grid-cols-2 gap-10 sm:gap-14 items-center">
          {/* Bride Card */}
          <motion.div className="flex flex-col items-center" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden mb-5 shadow-xl" style={{ border: `3px solid ${TOKENS.color.gold}40`, boxShadow: TOKENS.shadow.card }}>
              <img src={bridePhoto} alt={brideName} className="w-full h-full object-cover"/>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl mb-1" style={{ fontFamily: TOKENS.font.display, color: TOKENS.color.text }}>{brideName}</h3>
            {brideFull && <p className="text-xs sm:text-sm" style={{ color: TOKENS.color.text, opacity: 0.6 }}>{brideFull}</p>}
            {brideParents && <p className="text-[11px] sm:text-xs mt-2 max-w-xs" style={{ color: TOKENS.color.text, opacity: 0.5 }}>{brideParents}</p>}
          </motion.div>

          {/* Groom Card */}
          <motion.div className="flex flex-col items-center" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden mb-5 shadow-xl" style={{ border: `3px solid ${TOKENS.color.gold}40`, boxShadow: TOKENS.shadow.card }}>
              <img src={groomPhoto} alt={groomName} className="w-full h-full object-cover"/>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl mb-1" style={{ fontFamily: TOKENS.font.display, color: TOKENS.color.text }}>{groomName}</h3>
            {groomFull && <p className="text-xs sm:text-sm" style={{ color: TOKENS.color.text, opacity: 0.6 }}>{groomFull}</p>}
            {groomParents && <p className="text-[11px] sm:text-xs mt-2 max-w-xs" style={{ color: TOKENS.color.text, opacity: 0.5 }}>{groomParents}</p>}
          </motion.div>

          {/* Gold Ampersand — center on desktop */}
          <motion.div className="hidden md:flex absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 z-10" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4, type: "spring" }}>
            <span className="text-4xl sm:text-5xl md:text-6xl font-light" style={{ color: TOKENS.color.gold, fontFamily: TOKENS.font.display, textShadow: `0 2px 20px ${TOKENS.color.gold}30` }}>&amp;</span>
          </motion.div>
        </div>

        {/* Social Icons */}
        <motion.div className="mt-10 flex justify-center gap-5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
          {["Instagram","Facebook","Pinterest","Twitter"].map((name,i) => {
            const paths: Record<string,string> = {
              Instagram: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z",
              Facebook: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z",
              Pinterest: "M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.805-2.425 1.808-2.425.853 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.481 1.806 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.282a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.222-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z",
              Twitter: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
            };
            return (
              <a key={i} href="#" aria-label={name} className="group transition-all duration-300 hover:scale-110" onClick={e=>e.preventDefault()}>
                <svg width={16} height={16} viewBox="0 0 24 24" fill={TOKENS.color.gold} className="opacity-50 group-hover:opacity-100 transition-opacity">
                  <path d={paths[name]}/>
                </svg>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
