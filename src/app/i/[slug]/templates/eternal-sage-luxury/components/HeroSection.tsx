"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart } from "lucide-react";
import { TOKENS } from "../styles";

interface HeroSectionProps {
  heroImg: string;
  groomName: string;
  brideName: string;
  eventDate: string;
  onScrollTo: (id: string) => void;
}

const Flower = ({ cx, cy, r, fill, opacity }: { cx:number; cy:number; r:number; fill:string; opacity:number }) => (
  <g opacity={opacity}>
    {[0,72,144,216,288].map(a => { const rad = (a*Math.PI)/180; return <ellipse key={a} cx={cx+r*0.4*Math.cos(rad)} cy={cy+r*0.4*Math.sin(rad)} rx={r*0.25} ry={r*0.15} transform={`rotate(${a} ${cx} ${cy})`} fill={fill}/>;})}
    <circle cx={cx} cy={cy} r={r*0.15} fill={fill} opacity={0.5}/>
  </g>
);

export default function HeroSection({ heroImg, groomName, brideName, eventDate, onScrollTo }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);

  const dateStr = new Date(eventDate).toLocaleDateString("id-ID", { weekday:"long", day:"numeric", month:"long", year:"numeric" });

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex flex-col items-center justify-center py-20 sm:py-28 px-4 sm:px-6 overflow-hidden" style={{ background: TOKENS.color.cream }}>
      {/* Parallax background image */}
      <motion.div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${TOKENS.bg.hero})`, y: bgY, opacity: 0.12 }}/>
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(31,46,38,0.12) 0%,rgba(247,241,230,0.01) 40%,rgba(31,46,38,0.08) 100%)" }}/>
      {/* Leaves pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c0 0-15 20-15 30s8 15 15 20c7-5 15-10 15-20S30 5 30 5z' fill='%23C9A86A'/%3E%3C/svg%3E")` }}/>
      {/* Gold shimmer sweep */}
      <motion.div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ background: `linear-gradient(135deg, transparent 30%, ${TOKENS.color.gold}40 50%, transparent 70%)` }}
        animate={{ x: ["-100%", "200%"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}/>

      <motion.div className="relative z-10 text-center max-w-lg sm:max-w-2xl w-full" style={{ scale }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16,1,0.3,1] }}>

        {/* ─── Premium Floral Wreath Photo ─── */}
        <motion.div className="mb-8 sm:mb-10" initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 60 }}>
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 mx-auto">
            {/* Floral wreath SVG — 4 flower clusters + leaf details */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none" aria-hidden="true">
              {/* Outer decorative rings */}
              <circle cx="100" cy="100" r="98" stroke={TOKENS.color.gold} strokeWidth="0.4" opacity="0.25"/>
              <circle cx="100" cy="100" r="94" stroke={TOKENS.color.gold} strokeWidth="0.8" opacity="0.35"/>
              <circle cx="100" cy="100" r="85" stroke={TOKENS.color.gold} strokeWidth="0.5" opacity="0.2"/>
              <circle cx="100" cy="100" r="78" stroke={TOKENS.color.white} strokeWidth="0.3" opacity="0.12"/>

              {/* 4 Flower clusters at cardinal points */}
              <Flower cx={100} cy={8} r={14} fill={TOKENS.color.gold} opacity={0.3}/>
              <Flower cx={192} cy={100} r={14} fill={TOKENS.color.gold} opacity={0.3}/>
              <Flower cx={100} cy={192} r={14} fill={TOKENS.color.gold} opacity={0.3}/>
              <Flower cx={8} cy={100} r={14} fill={TOKENS.color.gold} opacity={0.3}/>

              {/* 4 Smaller flowers at diagonals */}
              <Flower cx={165} cy={35} r={10} fill={TOKENS.color.gold} opacity={0.22}/>
              <Flower cx={165} cy={165} r={10} fill={TOKENS.color.gold} opacity={0.22}/>
              <Flower cx={35} cy={35} r={10} fill={TOKENS.color.gold} opacity={0.22}/>
              <Flower cx={35} cy={165} r={10} fill={TOKENS.color.gold} opacity={0.22}/>

              {/* Leaf paths between flowers */}
              {[0,60,120,180,240,300].map(a => {
                const r1 = (a*Math.PI)/180;
                const r2 = ((a+55)*Math.PI)/180;
                return <path key={a} d={`M${100+90*Math.cos(r1)} ${100+90*Math.sin(r1)} Q${100+70*Math.cos((r1+r2)/2)} ${100+70*Math.sin((r1+r2)/2)} ${100+90*Math.cos(r2)} ${100+90*Math.sin(r2)}`} stroke={TOKENS.color.gold} strokeWidth="0.4" opacity="0.2" fill="none"/>;
              })}

              {/* Decorative dots ring */}
              {Array.from({length:24}, (_,i) => {
                const a = (i*15*Math.PI)/180;
                return <circle key={i} cx={100+91*Math.cos(a)} cy={100+91*Math.sin(a)} r="1" fill={TOKENS.color.gold} opacity={i%3===0?0.4:0.2}/>;
              })}

              {/* Small white flower highlights */}
              <circle cx="88" cy="15" r="2.5" fill={TOKENS.color.white} opacity="0.3"/>
              <circle cx="112" cy="15" r="2.5" fill={TOKENS.color.white} opacity="0.3"/>
              <circle cx="185" cy="88" r="2.5" fill={TOKENS.color.white} opacity="0.3"/>
              <circle cx="185" cy="112" r="2.5" fill={TOKENS.color.white} opacity="0.3"/>
              <circle cx="88" cy="185" r="2.5" fill={TOKENS.color.white} opacity="0.3"/>
              <circle cx="112" cy="185" r="2.5" fill={TOKENS.color.white} opacity="0.3"/>
              <circle cx="15" cy="88" r="2.5" fill={TOKENS.color.white} opacity="0.3"/>
              <circle cx="15" cy="112" r="2.5" fill={TOKENS.color.white} opacity="0.3"/>
            </svg>

            {/* Photo with elegant border */}
            <div className="absolute inset-[7%] rounded-full overflow-hidden shadow-2xl" style={{ border: `2px solid ${TOKENS.color.gold}35` }}>
              <img src={heroImg} alt="Couple" className="w-full h-full object-cover" loading="eager"/>
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-full" style={{ boxShadow: `inset 0 0 40px rgba(201,168,106,0.15)` }}/>
            </div>

            {/* Gold glow ring behind photo */}
            <div className="absolute inset-[5%] rounded-full opacity-30" style={{ boxShadow: `0 0 60px rgba(201,168,106,0.25)` }}/>
          </div>
        </motion.div>

        {/* Ornament */}
        <div className="flex items-center justify-center gap-3 my-5">
          <motion.div className="h-[1px] w-10 sm:w-14" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}45,transparent)` }}
            initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }} transition={{ duration:0.8, delay:0.4 }}/>
          <motion.span style={{ color: TOKENS.color.gold, fontSize:"20px" }}
            animate={{ rotate: [0, 8, -8, 0] }} transition={{ duration: 5, repeat: Infinity }}>
            🌿
          </motion.span>
          <motion.div className="h-[1px] w-10 sm:w-14" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}45,transparent)` }}
            initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }} transition={{ duration:0.8, delay:0.4 }}/>
        </div>

        {/* "THE WEDDING OF" */}
        <motion.p className="text-[10px] sm:text-[11px] tracking-[0.45em] uppercase mb-3" style={{ color: TOKENS.color.gold }}
          initial={{ opacity:0, y:-8 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.5 }}>
          The Wedding of
        </motion.p>

        {/* Names with animated underline */}
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 leading-tight relative inline-block" style={{ fontFamily: TOKENS.font.display, fontWeight: 300, color: TOKENS.color.text }}
          initial={{ opacity:0, y:15 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, delay:0.6 }}>
          {groomName}{" "}
          <motion.span style={{ color: TOKENS.color.gold }} animate={{ scale:[1,1.05,1] }} transition={{ duration:4, repeat:Infinity }}>
            &amp;
          </motion.span>{" "}
          {brideName}
          {/* Animated gold underline */}
          <motion.span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}80,transparent)` }}
            initial={{ width:0 }} whileInView={{ width:"60%" }} viewport={{ once:true }} transition={{ duration:1.2, delay:1 }}/>
        </motion.h1>

        {/* Date */}
        <motion.p className="text-sm sm:text-base mb-2" style={{ color: TOKENS.color.text, opacity: 0.6 }}
          initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.8 }}>
          {dateStr}
        </motion.p>

        {/* Subtitle */}
        <motion.p className="text-xs sm:text-sm italic max-w-md mx-auto mt-3 mb-9" style={{ color: TOKENS.color.text, opacity: 0.42 }}
          initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.9 }}>
          Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di hari bahagia kami
        </motion.p>

        {/* Action buttons */}
        <motion.div className="flex flex-wrap justify-center gap-3"
          initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:1 }}>
          {[
            { label:"RSVP", target:"rsvp", primary:true },
            { label:"Lihat Acara", target:"events", primary:false },
            { label:"Bagikan", target:"share", primary:false, icon:true },
          ].map((btn,i) => (
            <motion.button
              key={btn.label}
              onClick={() => btn.target === "share" ? navigator.clipboard.writeText(window.location.href) : onScrollTo(btn.target)}
              className="px-6 sm:px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wider transition-all duration-300"
              style={btn.primary ? {
                background: `linear-gradient(135deg,${TOKENS.color.gold},${TOKENS.color.accent})`, color:"white", boxShadow: TOKENS.shadow.button,
              } : {
                background:"rgba(255,255,255,0.8)", backdropFilter:"blur(12px)", border:`1.5px solid ${TOKENS.color.gold}20`, color:TOKENS.color.text, boxShadow:TOKENS.shadow.card,
              }}
              whileHover={{ scale:1.05, y:-2 }}
              whileTap={{ scale:0.96 }}
            >
              {btn.icon && <Heart size={14} className="inline mr-1.5" style={{ color:TOKENS.color.gold }}/>}
              {btn.label}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
