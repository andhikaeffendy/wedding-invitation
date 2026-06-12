"use client";
import { motion } from "framer-motion";
import { TOKENS } from "../styles";

interface ClosingSectionProps {
  groomName: string; brideName: string;
  groomFull?: string; brideFull?: string;
  groomParents?: string; brideParents?: string;
}

export default function ClosingSection({ groomName, brideName, groomFull, brideFull, groomParents, brideParents }: ClosingSectionProps) {
  const socials = [
    { name:"Instagram", path:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z" },
    { name:"Facebook", path:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" },
    { name:"Pinterest", path:"M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.805-2.425 1.808-2.425.853 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.481 1.806 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.282a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.222-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" },
    { name:"Twitter", path:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  ];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 text-center overflow-hidden" style={{ background: TOKENS.color.darkBg, color: TOKENS.color.textLight }}>
      {/* Background with SLOW ZOOM */}
      <div className="absolute inset-0 bg-cover bg-center closing-slow-zoom" style={{ backgroundImage: `url(${TOKENS.bg.closing})`, opacity: 0.12 }}/>
      {/* Leaves pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c0 0-15 20-15 30s8 15 15 20c7-5 15-10 15-20S30 5 30 5z' fill='%23C9A86A'/%3E%3C/svg%3E")` }}/>
      {/* Gold gradient overlay */}
      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg,transparent 0%,${TOKENS.color.gold}08 50%,transparent 100%)` }}/>

      {/* Top decorative line */}
      <motion.div className="mx-auto mb-10 sm:mb-12 max-w-[300px]" initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }} transition={{ duration:1.2, ease:TOKENS.motion.easeOut }}>
        <div className="h-[1px]" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}50,transparent)` }}/>
        <motion.div className="absolute -top-2 left-1/2 -translate-x-1/2 text-lg" animate={{ rotate:[0,180,360] }} transition={{ duration:8, repeat:Infinity, ease:"linear" }}>
          <span style={{ color:TOKENS.color.gold }}>🌿</span>
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-lg mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-[1px] w-12" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}30,transparent)` }}/>
          <span style={{ color: TOKENS.color.gold }}>🌿</span>
          <div className="h-[1px] w-12" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}30,transparent)` }}/>
        </div>
        <motion.p className="text-[10px] sm:text-xs tracking-[0.5em] uppercase mb-4" style={{ color:`${TOKENS.color.gold}CC` }} initial={{ opacity:0,y:-10 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}>— Final Words —</motion.p>

        <motion.h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8" style={{ fontFamily:TOKENS.font.display, fontWeight:200, letterSpacing:"0.05em" }}
          initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.2,duration:0.8 }}>
          Terima{" "}<span className="relative">Kasih<motion.span className="absolute -bottom-2 left-0 right-0 h-[2px]" style={{ background:`linear-gradient(90deg,transparent,${TOKENS.color.gold},transparent)` }}
            initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }} transition={{ delay:0.6,duration:1 }}/></span>
        </motion.h2>

        <motion.div className="mx-auto mb-6 sm:mb-8 w-16 h-[1px]" style={{ background:`linear-gradient(90deg,transparent,${TOKENS.color.gold},transparent)` }} initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }}/>

        <motion.p className="text-xs sm:text-sm mb-8 sm:mb-10 leading-relaxed" style={{ opacity:0.7,maxWidth:"420px",margin:"0 auto" }} initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.4 }}>
          Merupakan suatu kehormatan dan kebahagiaan yang tak terhingga apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu kepada kami
        </motion.p>

        {/* "With love," */}
        <motion.p className="text-xs sm:text-sm mb-3" style={{ opacity:0.5 }} initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.5 }}>
          With love,
        </motion.p>

        <motion.p className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4" style={{ fontFamily:TOKENS.font.display, color:TOKENS.color.gold }}
          initial={{ opacity:0,scale:0.95 }} whileInView={{ opacity:1,scale:1 }} viewport={{ once:true }} transition={{ delay:0.6,duration:0.8 }}>
          {groomName} &amp; {brideName}
        </motion.p>

        {(groomFull || brideFull) && (
          <motion.p className="text-[10px] sm:text-xs" style={{ opacity:0.5, letterSpacing:"0.05em" }} initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.8 }}>
            {groomFull} &amp; {brideFull}
          </motion.p>
        )}

        {/* Family */}
        {(groomParents || brideParents) && (
          <motion.div className="mt-6 sm:mt-8 pt-6 sm:pt-8" style={{ borderTop:`1px solid ${TOKENS.color.gold}20` }} initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:1 }}>
            <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase mb-2" style={{ opacity:0.4 }}>Keluarga Besar</p>
            {groomParents && <p className="text-[10px] sm:text-xs" style={{ opacity:0.5 }}>{groomParents}</p>}
            {brideParents && <p className="text-[10px] sm:text-xs mt-1" style={{ opacity:0.5 }}>&amp; {brideParents}</p>}
          </motion.div>
        )}

        {/* Social Icons */}
        <motion.div className="flex items-center justify-center gap-4 mt-8" initial={{ opacity:0,y:10 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:1 }}>
          {socials.map((s,i) => (
            <a key={i} href="#" aria-label={s.name} className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background:`${TOKENS.color.gold}15`, border:`1px solid ${TOKENS.color.gold}30` }} onClick={e=>e.preventDefault()}>
              <svg width={16} height={16} viewBox="0 0 24 24" fill={TOKENS.color.gold}><path d={s.path}/></svg>
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p className="text-[9px] mt-10" style={{ opacity:0.3 }} initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:1.2 }}>
          &copy; {new Date().getFullYear()}
        </motion.p>
      </div>
      <style jsx>{`
        @keyframes closing-slow-zoom {
          0% { transform: scale(1.02); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1.02); }
        }
        .closing-slow-zoom {
          animation: closing-slow-zoom 22s ease-in-out infinite alternate;
          transform-origin: center;
        }
        @media (prefers-reduced-motion: reduce) {
          .closing-slow-zoom { animation-duration: 0.01ms !important; }
        }
      `}</style>
    </section>
  );
}
