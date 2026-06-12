"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { TOKENS } from "../styles";

interface Story { id?: string; title: string; date: string; description: string; image_url?: string; }

interface StorySectionProps { stories: Story[]; }

export default function StorySection({ stories }: StorySectionProps) {
  if (!stories.length) return null;
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden" style={{ background: TOKENS.color.cream }}>
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.05]" style={{ backgroundImage: `url(${TOKENS.bg.signature})` }}/>
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3 text-center" style={{ color: TOKENS.color.gold }} initial={{ opacity:0,y:-10 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}>Kisah Cinta</motion.p>
        <h2 className="text-2xl sm:text-4xl text-center mb-12 sm:mb-16" style={{ fontFamily:TOKENS.font.display, color:TOKENS.color.text }}>Our Story</h2>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] hidden md:block" style={{ background: `linear-gradient(180deg,transparent,${TOKENS.color.gold}40,${TOKENS.color.gold}60,${TOKENS.color.gold}40,transparent)` }}/>

          {stories.map((s,i) => {
            const isLeft = i%2===0;
            return (
              <motion.div key={s.id||i} className={`relative mb-12 sm:mb-16 md:w-1/2 ${isLeft?"md:pr-12 md:mr-auto":"md:pl-12 md:ml-auto"}`}
                initial={{ opacity:0,x:isLeft?-30:30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true,margin:"-60px" }} transition={{ duration:0.7,delay:i*0.15 }}>
                {/* Timeline dot */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 hidden md:block z-10" style={{ background:TOKENS.color.cream, borderColor:TOKENS.color.gold, boxShadow:`0 0 0 4px ${TOKENS.color.gold}20` }}>
                  <motion.div className="w-2 h-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background:TOKENS.color.gold }} animate={{ scale:[1,1.3,1] }} transition={{ duration:2,repeat:Infinity,delay:i*0.5 }}/>
                </div>
                {/* Card */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start p-5 sm:p-6 rounded-2xl" style={{ background:"rgba(255,255,255,0.8)", backdropFilter:"blur(12px)", border:`1px solid ${TOKENS.color.gold}10`, boxShadow:TOKENS.shadow.card }}>
                  {s.image_url && (
                    <div className="w-full sm:w-28 h-40 sm:h-28 rounded-xl bg-cover bg-center shrink-0" style={{ backgroundImage:`url(${s.image_url})` }}/>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span style={{ color:TOKENS.color.gold }}>🌿</span>
                      <h4 className="text-sm sm:text-base font-semibold" style={{ color:TOKENS.color.gold }}>{s.title}</h4>
                    </div>
                    <p className="text-[10px] sm:text-xs opacity-40 mb-1.5 tracking-wider" style={{ color:TOKENS.color.text }}>— {s.date} —</p>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color:TOKENS.color.text, opacity:0.65 }}>{s.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
          {/* End marker */}
          <motion.div className="text-center pt-4" initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}>
            <motion.div className="w-8 h-8 mx-auto rounded-full border-2 flex items-center justify-center" style={{ borderColor:`${TOKENS.color.gold}40` }} animate={{ scale:[1,1.1,1] }} transition={{ duration:3,repeat:Infinity }}>
              <Heart size={12} style={{ color:TOKENS.color.gold }}/>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
