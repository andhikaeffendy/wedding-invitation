"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Check } from "lucide-react";
import { TOKENS } from "../styles";

interface RsvpSectionProps { guestName?: string; }

export default function RsvpSection({ guestName }: RsvpSectionProps) {
  const [rsvp, setRsvp] = useState("");
  const [pax, setPax] = useState(1);
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sub, setSub] = useState(false);

  const submit = () => { setSub(true); setTimeout(() => { setSub(false); setSubmitted(true); }, 800); };

  return (
    <section id="rsvp" className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden" style={{ background: TOKENS.color.cream }}>
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.05]" style={{ backgroundImage: `url(${TOKENS.bg.signature})` }}/>
      <div className="max-w-md mx-auto relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-12" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}30,transparent)` }}/>
          <span style={{ color: TOKENS.color.gold }}>🌿</span>
          <div className="h-[1px] w-12" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}30,transparent)` }}/>
        </div>
        <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3 text-center" style={{ color: TOKENS.color.gold }}>Konfirmasi Kehadiran</p>
        <h2 className="text-2xl sm:text-4xl text-center mb-8 sm:mb-10" style={{ fontFamily: TOKENS.font.display, color: TOKENS.color.text }}>RSVP</h2>

        <AnimatePresence>
          {submitted ? (
            <motion.div className="p-8 sm:p-10 rounded-2xl text-center" style={{ background:"rgba(255,255,255,0.9)", backdropFilter:"blur(12px)", border:`1px solid ${TOKENS.color.gold}20`, boxShadow:TOKENS.shadow.card }}
              initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.5 }}>
              <Heart size={48} className="mx-auto mb-4" style={{ color: TOKENS.color.gold }}/>
              <p className="text-xl sm:text-2xl mb-2" style={{ fontFamily: TOKENS.font.display, color: TOKENS.color.text }}>Terima Kasih!</p>
              <p className="text-xs sm:text-sm" style={{ color: TOKENS.color.text, opacity:0.6 }}>Konfirmasi Anda telah diterima ✨</p>
              {/* Confetti */}
              {[...Array(15)].map((_,i) => (
                <motion.div key={i} className="absolute pointer-events-none" style={{ left:`${10+Math.random()*80}%`, top:`${20+Math.random()*60}%`, width:6+Math.random()*6, height:6+Math.random()*6, background:TOKENS.color.gold, borderRadius:2 }}
                  animate={{ y:[0,-40- Math.random()*60], opacity:[1,0], rotate:[0,360] }} transition={{ duration:1+Math.random()*2, delay:i*0.05 }}/>
              ))}
            </motion.div>
          ) : (
            <motion.div className="p-6 sm:p-8 rounded-2xl space-y-4" style={{ background:"rgba(255,255,255,0.9)", backdropFilter:"blur(12px)", border:`1px solid ${TOKENS.color.gold}20`, boxShadow:TOKENS.shadow.card }}
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
              {guestName && <p className="text-sm text-center" style={{ color:TOKENS.color.text, opacity:0.7 }}>Atas nama: <strong>{guestName}</strong></p>}
              <div className="grid grid-cols-3 gap-2">
                {[{ v:"Hadir", l:"Hadir" },{ v:"Tidak Hadir", l:"Tdk Hadir" },{ v:"Ragu-ragu", l:"Ragu" }].map(o => (
                  <button key={o.v} onClick={() => setRsvp(o.v)}
                    className="p-3 sm:p-4 rounded-xl text-xs sm:text-sm font-medium transition-all min-h-[44px]"
                    style={{ background: rsvp===o.v ? TOKENS.color.primary : "white", color: rsvp===o.v ? "white" : TOKENS.color.text, border: `1px solid ${rsvp===o.v ? TOKENS.color.primary : TOKENS.color.gold}20` }}>
                    {o.l}
                  </button>
                ))}
              </div>
              {rsvp==="Hadir" && (
                <div className="flex items-center justify-center gap-4">
                  <button onClick={() => setPax(Math.max(1,pax-1))} className="w-9 h-9 rounded-full border flex items-center justify-center" style={{ borderColor:`${TOKENS.color.gold}30`, color:TOKENS.color.text }}>−</button>
                  <span className="text-xl min-w-[40px] text-center" style={{ fontFamily:TOKENS.font.display, color:TOKENS.color.text }}>{pax}</span>
                  <button onClick={() => setPax(pax+1)} className="w-9 h-9 rounded-full border flex items-center justify-center" style={{ borderColor:`${TOKENS.color.gold}30`, color:TOKENS.color.text }}>+</button>
                  <span className="text-[10px] sm:text-xs" style={{ color:TOKENS.color.text, opacity:0.4 }}>orang</span>
                </div>
              )}
              {rsvp && <textarea value={msg} onChange={e => setMsg(e.target.value)} placeholder="Pesan untuk kedua mempelai" className="w-full p-3 rounded-xl text-xs border resize-none focus:outline-none" style={{ background:"white", borderColor:`${TOKENS.color.gold}20`, color:TOKENS.color.text }} rows={2}/>}
              {rsvp && (
                <button onClick={submit} disabled={sub} className="w-full py-3.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-wider text-white transition-all hover:scale-[1.02]"
                  style={{ background: `linear-gradient(135deg,${TOKENS.color.gold},${TOKENS.color.accent})`, boxShadow: TOKENS.shadow.button }}>
                  {sub ? "Mengirim..." : "✨ Konfirmasi Kehadiran"}
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
