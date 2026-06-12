"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TOKENS } from "../styles";

interface CoverSectionProps {
  coverImg: string;
  groomName: string;
  brideName: string;
  eventDate: string;
  guestName?: string;
  onOpen: () => void;
  musicOn: boolean;
  onToggleMusic: () => void;
}

const leafIcons = ["🌿", "🍃", "🌱", "🍂"];

export default function CoverSection({
  coverImg, groomName, brideName, eventDate,
  guestName, onOpen, musicOn, onToggleMusic,
}: CoverSectionProps) {
  const [revealed, setRevealed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => { setTimeout(() => setRevealed(true), 200); }, []);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const dateStr = new Date(eventDate).toLocaleDateString("id-ID", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100dvh" }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(14px)" }}
      transition={{ duration: 1.8, ease: [0.32, 0.72, 0, 1] }}
    >
      {/* ═══ KEN BURNS IMAGE ═══ */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[-5%] ken-burns-cover">
          <img
            src={coverImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: isMobile ? "center 20%" : "center 30%" }}
          />
        </div>
      </div>

      {/* ═══ DARK GREEN OVERLAY (base) ═══ */}
      <div className="absolute inset-0" style={{ background: "rgba(31,46,38,0.25)" }} />

      {/* ═══ VIGNETTE — cinematic focus ═══ */}
      <div className="absolute inset-0" style={{
        background: isMobile
          ? "radial-gradient(ellipse at center, transparent 20%, rgba(31,46,38,0.15) 50%, rgba(31,46,38,0.55) 100%)"
          : "radial-gradient(ellipse at center, transparent 25%, rgba(31,46,38,0.2) 50%, rgba(31,46,38,0.65) 100%)",
      }} />

      {/* ═══ GRAIN TEXTURE ═══ */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ BOTANICAL FRAME — full surrounding ═══ */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-[2]" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="gld" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C9A86A" stopOpacity="0.7"/>
            <stop offset="50%" stopColor="#C9A86A" stopOpacity="0.35"/>
            <stop offset="100%" stopColor="#C9A86A" stopOpacity="0.7"/>
          </linearGradient>
        </defs>

        {/* 4 Corner leaf clusters */}
        {[
          { x:2, y:2, sx:1.3, sy:1.3 },
          { x:98, y:2, sx:-1.3, sy:1.3 },
          { x:2, y:98, sx:1.3, sy:-1.3 },
          { x:98, y:98, sx:-1.3, sy:-1.3 },
        ].map((c, i) => (
          <g key={i} transform={`translate(${c.x},${c.y}) scale(${c.sx},${c.sy})`}>
            <path d="M6 22C4 10 10 2 20 0C12 4 7 12 6 22Z" fill="#C9A86A" opacity="0.22"/>
            <path d="M10 16C8 8 14 3 22 1C16 5 12 10 10 16Z" fill="#C9A86A" opacity="0.15"/>
            <path d="M4 18C3 12 8 6 14 3C10 5 7 9 4 18Z" fill="#C9A86A" opacity="0.1"/>
            <circle cx="12" cy="6" r="2" fill="#FFFFFF" opacity="0.45"/>
            <circle cx="18" cy="3" r="1.2" fill="#FFFFFF" opacity="0.3"/>
            <circle cx="8" cy="10" r="1" fill="#FFFFFF" opacity="0.25"/>
            <circle cx="15" cy="10" r="0.8" fill="#C9A86A" opacity="0.3"/>
            <line x1="0" y1="0" x2="16" y2="0" stroke="#C9A86A" strokeWidth="0.4" opacity="0.5"/>
            <line x1="0" y1="0" x2="0" y2="16" stroke="#C9A86A" strokeWidth="0.4" opacity="0.5"/>
            <path d="M3 3L7 3M3 3L3 7" stroke="#C9A86A" strokeWidth="0.7" opacity="0.8"/>
            <circle cx="2" cy="2" r="1.2" fill="#FFFFFF" opacity="0.5"/>
          </g>
        ))}

        {/* Top border */}
        <line x1="6" y1="3" x2="42" y2="3" stroke="url(#gld)" strokeWidth="0.3"/>
        <line x1="58" y1="3" x2="94" y2="3" stroke="url(#gld)" strokeWidth="0.3"/>
        {/* Bottom border */}
        <line x1="6" y1="97" x2="42" y2="97" stroke="url(#gld)" strokeWidth="0.3"/>
        <line x1="58" y1="97" x2="94" y2="97" stroke="url(#gld)" strokeWidth="0.3"/>
        {/* Left border */}
        <line x1="3" y1="6" x2="3" y2="42" stroke="url(#gld)" strokeWidth="0.3"/>
        <line x1="3" y1="58" x2="3" y2="94" stroke="url(#gld)" strokeWidth="0.3"/>
        {/* Right border */}
        <line x1="97" y1="6" x2="97" y2="42" stroke="url(#gld)" strokeWidth="0.3"/>
        <line x1="97" y1="58" x2="97" y2="94" stroke="url(#gld)" strokeWidth="0.3"/>

        {/* Center diamond ornaments */}
        <path d="M50 1L52.5 3L50 5L47.5 3Z" fill="#C9A86A" opacity="0.5"/>
        <circle cx="50" cy="1.5" r="0.8" fill="#FFFFFF" opacity="0.4"/>
        <path d="M50 99L52.5 97L50 95L47.5 97Z" fill="#C9A86A" opacity="0.5"/>

        {/* Scattered white flowers along borders */}
        {[12,24,36,64,76,88].map(x => (
          <g key={`t${x}`}>
            <circle cx={x} cy="4.5" r="0.5" fill="#FFFFFF" opacity="0.3"/>
            <circle cx={x+1.2} cy="3.8" r="0.3" fill="#C9A86A" opacity="0.2"/>
          </g>
        ))}
        {[14,28,42,58,72,86].map(x => (
          <g key={`b${x}`}>
            <circle cx={x} cy="95.5" r="0.5" fill="#FFFFFF" opacity="0.25"/>
          </g>
        ))}
      </svg>

      {/* ═══ FLOATING PARTICLES — all devices ═══ */}
      {[...Array(isMobile ? 5 : 8)].map((_, i) => (
        <motion.div key={i} className="absolute pointer-events-none z-[3]"
          style={{ left: `${4 + i * (isMobile ? 18 : 11)}%`, fontSize: `${10 + (i % 3) * 4}px` }}
          animate={{
            y: ["0vh", "110vh"], x: [0, i%2===0 ? 12 : -12, 0],
            opacity: [0, 0.18, 0.22, 0], rotate: [0, i%2===0 ? 180 : -180, 360],
          }}
          transition={{ duration: 15 + (i%4)*4, delay: i*2.2, repeat: Infinity, ease: "linear" }}>
          {leafIcons[i % leafIcons.length]}
        </motion.div>
      ))}

      {/* ═══ CONTENT ═══ */}
      <motion.div className="relative z-10 text-center px-6 sm:px-8 max-w-md w-full"
        initial={{ opacity: 0, y: 35 }} animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 35 }}
        transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>

        {/* Monogram with ring */}
        <motion.div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-5 sm:mb-8 rounded-full flex items-center justify-center relative"
          style={{ border: `1.5px solid ${TOKENS.color.gold}`, background: "rgba(247,241,230,0.12)", backdropFilter: "blur(4px)" }}
          initial={{ opacity: 0, scale: 0, rotate: -15 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.1, duration: 1, type: "spring", stiffness: 80 }}>
          {/* Outer decorative ring */}
          <div className="absolute inset-[-4px] sm:inset-[-5px] rounded-full" style={{ border: `1px solid rgba(201,168,106,0.25)` }} />
          <div className="absolute inset-[-8px] sm:inset-[-10px] rounded-full" style={{ border: `0.5px solid rgba(201,168,106,0.1)` }} />
          <span className="text-xl sm:text-3xl font-light tracking-[0.35em]" style={{ fontFamily: TOKENS.font.display, color: TOKENS.color.gold }}>
            {groomName[0]}&amp;{brideName[0]}
          </span>
        </motion.div>

        {/* "You are invited" */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
          <div className="h-[1px] w-5 sm:w-8" style={{ background: `linear-gradient(90deg, transparent, ${TOKENS.color.gold}50)` }} />
          <p className="text-[9px] sm:text-[11px] tracking-[0.45em] uppercase" style={{ color: TOKENS.color.gold }}>You are invited to</p>
          <div className="h-[1px] w-5 sm:w-8" style={{ background: `linear-gradient(90deg, ${TOKENS.color.gold}50, transparent)` }} />
        </div>
        <p className="text-[8px] sm:text-[10px] tracking-[0.55em] uppercase mb-4 sm:mb-5" style={{ color: TOKENS.color.gold, opacity: 0.8 }}>the wedding of</p>

        {/* Names */}
        <motion.h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-2 text-white leading-tight"
          style={{ fontFamily: TOKENS.font.display }} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9 }}>
          {groomName} <motion.span style={{ color: TOKENS.color.gold, display: "inline-block" }} animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 4, repeat: Infinity }}>&amp;</motion.span> {brideName}
        </motion.h1>

        <motion.p className="text-[10px] sm:text-sm mb-2" style={{ color: "rgba(255,255,255,0.65)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>{dateStr}</motion.p>

        {/* Ornament */}
        <motion.div className="flex items-center justify-center gap-2 sm:gap-3 my-4 sm:my-5" initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
          <div className="h-[1px] w-6 sm:w-10" style={{ background: `linear-gradient(90deg, transparent, ${TOKENS.color.gold}50, transparent)` }} />
          <motion.span style={{ color: TOKENS.color.gold, fontSize: isMobile ? "14px" : "18px" }} animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>🌿</motion.span>
          <div className="h-[1px] w-6 sm:w-10" style={{ background: `linear-gradient(90deg, transparent, ${TOKENS.color.gold}50, transparent)` }} />
        </motion.div>

        {/* Guest name */}
        {guestName && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
            <p className="text-[10px] sm:text-xs mb-1" style={{ color: "rgba(255,255,255,0.6)" }}>Kepada Yth. Bapak/Ibu/Saudara/i</p>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8 text-white" style={{ fontFamily: TOKENS.font.display }}>{guestName}</h2>
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div className="relative inline-block" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.7 }}>
          {/* Glow behind button */}
          <motion.div className="absolute inset-0 rounded-full" style={{ background: `radial-gradient(circle, ${TOKENS.color.gold}25, transparent 70%)` }}
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.button onClick={() => { onOpen(); setTimeout(() => onToggleMusic(), 600); }}
            className="relative px-8 sm:px-14 py-3 sm:py-3.5 rounded-full font-medium text-xs sm:text-sm tracking-wider text-white backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
            style={{ background: `linear-gradient(135deg, ${TOKENS.color.gold}E0, ${TOKENS.color.accent}CC)`, border: "1.5px solid rgba(255,255,255,0.25)", boxShadow: `0 4px 30px rgba(201,168,106,0.4), 0 0 0 4px rgba(201,168,106,0.12)` }}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            {/* Shimmer sweep */}
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <motion.span className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                animate={{ left: ["-30%", "130%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }} />
            </span>
            <motion.span className="inline-block mr-1" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>✨</motion.span>
            Buka Undangan
          </motion.button>
        </motion.div>

        <motion.p className="text-[8px] mt-6 sm:mt-8 tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}
          animate={{ opacity: [0.15, 0.45, 0.15] }} transition={{ duration: 2.5, repeat: Infinity }}>Tap to open</motion.p>
      </motion.div>

      {/* Music button */}
      <motion.button onClick={onToggleMusic} className="absolute bottom-5 sm:bottom-6 right-4 sm:right-6 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(16px)", border: `1px solid ${TOKENS.color.gold}35` }}
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, type: "spring" }} aria-label="Music">
        <span className="text-xs sm:text-sm" style={{ color: musicOn ? TOKENS.color.gold : "rgba(255,255,255,0.4)", animation: musicOn ? "musicPulse 2.5s ease-in-out infinite" : "none" }}>🎵</span>
      </motion.button>

      <style jsx>{`
        @keyframes kenBurnsCover {
          0%   { transform: scale(1.00) translate(0%, 0%); }
          15%  { transform: scale(1.06) translate(0.3%, -0.2%); }
          30%  { transform: scale(1.12) translate(0.1%, 0.15%); }
          50%  { transform: scale(1.18) translate(-0.2%, 0.3%); }
          70%  { transform: scale(1.12) translate(-0.1%, -0.15%); }
          85%  { transform: scale(1.06) translate(0.15%, 0.1%); }
          100% { transform: scale(1.00) translate(0%, 0%); }
        }
        .ken-burns-cover {
          animation: kenBurnsCover 28s cubic-bezier(0.25, 0.1, 0.25, 1) infinite alternate;
          transform-origin: center;
        }
        @keyframes musicPulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.2); opacity: 0.7; } }
        @media (prefers-reduced-motion: reduce) {
          .ken-burns-cover { animation-duration: 0.01ms !important; transform: scale(1.05) !important; }
        }
      `}</style>
    </motion.div>
  );
}
