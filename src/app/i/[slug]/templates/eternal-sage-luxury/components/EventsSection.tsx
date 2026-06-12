"use client";
import { motion } from "framer-motion";
import { MapPinned } from "lucide-react";
import { TOKENS } from "../styles";

export default function EventsSection() {
  const events = [
    { icon:"🕌", title:"Akad Nikah", time:"08:00 — 10:00 WIB", venue:"Masjid Agung Al-Muhajirin", addr:"Jl. Ahmad Yani No. 15, Bandung" },
    { icon:"🎉", title:"Resepsi", time:"11:00 — 17:00 WIB", venue:"Gedung Graha Wedding Garden", addr:"Jl. Sukajadi No. 200, Bandung" },
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 overflow-hidden" style={{ background: TOKENS.color.cream }}>
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.05]" style={{ backgroundImage: `url(${TOKENS.bg.signature})` }}/>
      <div className="max-w-xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-12" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}30,transparent)` }}/>
          <span style={{ color: TOKENS.color.gold }}>🌿</span>
          <div className="h-[1px] w-12" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}30,transparent)` }}/>
        </div>
        <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3" style={{ color: TOKENS.color.gold }}>Rangkaian Acara</p>
        <h2 className="text-2xl sm:text-4xl mb-10 sm:mb-14" style={{ fontFamily: TOKENS.font.display, color: TOKENS.color.text }}>Akad &amp; Resepsi</h2>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {events.map((ev,i) => (
            <motion.div key={i} className="p-5 sm:p-6 rounded-2xl text-left" style={{ background:"rgba(255,255,255,0.8)", backdropFilter:"blur(12px)", border:`1px solid ${TOKENS.color.gold}10`, boxShadow:TOKENS.shadow.card }}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.15 }}>
              <div className="text-3xl mb-3">{ev.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ fontFamily:TOKENS.font.display, color:TOKENS.color.text }}>{ev.title}</h3>
              <p className="text-xs sm:text-sm mb-1" style={{ color:TOKENS.color.text, opacity:0.7 }}>{ev.time}</p>
              <p className="text-xs sm:text-sm font-medium mb-0.5" style={{ color:TOKENS.color.text }}>{ev.venue}</p>
              <p className="text-[10px] sm:text-xs" style={{ color:TOKENS.color.text, opacity:0.5 }}>{ev.addr}</p>
            </motion.div>
          ))}
        </div>
        <a href="https://maps.google.com" target="_blank" className="inline-flex items-center gap-1.5 mt-6 px-5 py-2.5 rounded-full text-xs font-medium transition-all hover:scale-105"
          style={{ background:"rgba(255,255,255,0.8)", backdropFilter:"blur(12px)", border:`1px solid ${TOKENS.color.gold}20`, color:TOKENS.color.gold, boxShadow:TOKENS.shadow.card }}>
          <MapPinned size={13}/> Buka Google Maps
        </a>
      </div>
    </section>
  );
}
