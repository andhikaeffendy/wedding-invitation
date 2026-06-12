"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";
import { TOKENS } from "../styles";

interface CountdownSectionProps { eventDate: string; groomName: string; brideName: string; }

export default function CountdownSection({ eventDate, groomName, brideName }: CountdownSectionProps) {
  const [time, setTime] = useState({ d:0, h:0, m:0, s:0, passed:false });
  useEffect(() => {
    const t = () => {
      const now = Date.now();
      const target = new Date(eventDate).getTime();
      const diff = target - now;
      if (diff <= 0) { setTime({ d:0,h:0,m:0,s:0,passed:true }); return; }
      setTime({ d:Math.floor(diff/86400000), h:Math.floor((diff%86400000)/3600000), m:Math.floor((diff%3600000)/60000), s:Math.floor((diff%60000)/1000), passed:false });
    };
    t();
    const i = setInterval(t, 1000);
    return () => clearInterval(i);
  }, [eventDate]);

  const items = [{ v:time.d, l:"Days" },{ v:time.h, l:"Hours" },{ v:time.m, l:"Minutes" },{ v:time.s, l:"Seconds" }];
  const dateStr = new Date(eventDate).toLocaleDateString("id-ID", { day:"numeric", month:"long", year:"numeric" });

  return (
    <section className="relative py-20 sm:py-28 px-4 overflow-hidden" style={{ background: TOKENS.color.darkBg, color: TOKENS.color.textLight }}>
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.15]" style={{ backgroundImage: `url(${TOKENS.bg.dark})` }}/>
      {/* Leaves pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c0 0-15 20-15 30s8 15 15 20c7-5 15-10 15-20S30 5 30 5z' fill='%23C9A86A'/%3E%3C/svg%3E")` }}/>

      {/* Gold border frame */}
      <div className="absolute inset-4 sm:inset-6 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl" style={{ border: `1px solid ${TOKENS.color.gold}25` }}/>
        <div className="absolute inset-2 rounded-xl" style={{ border: `1px solid ${TOKENS.color.gold}15` }}/>
      </div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        {time.passed ? (
          <div className="p-8 rounded-2xl" style={{ background:"rgba(255,255,255,0.05)", backdropFilter:"blur(12px)" }}>
            <Sparkles size={32} className="mx-auto mb-3" style={{ color: TOKENS.color.gold }}/>
            <p className="text-xl sm:text-2xl" style={{ fontFamily: TOKENS.font.display }}>Alhamdulillah, hari bahagia telah tiba!</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}40,transparent)` }}/>
              <span style={{ color: TOKENS.color.gold }}>🌿</span>
              <div className="h-[1px] w-12" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}40,transparent)` }}/>
            </div>
            <p className="text-[10px] sm:text-xs tracking-[0.5em] uppercase mb-3" style={{ color: TOKENS.color.gold }}>Save the Date</p>
            <h2 className="text-xl sm:text-2xl mb-8" style={{ fontFamily: TOKENS.font.display, color: TOKENS.color.gold }}>{dateStr}</h2>

            {/* Tiles */}
            <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap mb-8">
              {items.map((it) => (
                <motion.div key={it.l} className="w-[72px] sm:w-[88px] py-4 sm:py-5 rounded-xl text-center"
                  style={{ background:"rgba(31,46,38,0.4)", backdropFilter:"blur(8px)", border:`1px solid ${TOKENS.color.gold}30` }}
                  whileHover={{ scale:1.05 }}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-light" style={{ fontFamily:TOKENS.font.display, color:TOKENS.color.gold }}>{String(it.v).padStart(2,"0")}</div>
                  <div className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color:TOKENS.color.textLight, opacity:0.5 }}>{it.l}</div>
                </motion.div>
              ))}
            </div>

            {/* Add to Calendar */}
            <motion.button className="mt-4 px-6 py-3 rounded-full text-xs font-medium tracking-wider text-white flex items-center gap-2 mx-auto transition-all hover:scale-105"
              style={{ background: `linear-gradient(135deg,${TOKENS.color.gold},${TOKENS.color.accent})`, boxShadow: TOKENS.shadow.button }}
              whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
              onClick={() => { window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Wedding of ${groomName} & ${brideName}`)}&dates=${new Date(eventDate).toISOString().replace(/[-:]/g,"").split(".")[0]}Z`, "_blank"); }}>
              <Calendar size={14}/> Add to Calendar
            </motion.button>
          </>
        )}
      </div>
    </section>
  );
}
