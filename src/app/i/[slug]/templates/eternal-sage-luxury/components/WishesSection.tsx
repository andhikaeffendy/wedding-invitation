"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { TOKENS } from "../styles";

interface Wish { id?: string; sender_name: string; message: string; created_at?: string; }

interface WishesSectionProps { wishes: Wish[]; }

export default function WishesSection({ wishes }: WishesSectionProps) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [localWishes, setLocalWishes] = useState<Wish[]>([]);
  const all = [...localWishes, ...wishes].slice(0, 20);

  const submit = () => {
    if (!name.trim() || !text.trim()) return;
    setLocalWishes([{ sender_name:name, message:text, created_at:new Date().toISOString() }, ...localWishes]);
    setName(""); setText("");
  };

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden" style={{ background: TOKENS.color.cream }}>
      <div className="max-w-lg mx-auto relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-12" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}30,transparent)` }}/>
          <span style={{ color: TOKENS.color.gold }}>🌿</span>
          <div className="h-[1px] w-12" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}30,transparent)` }}/>
        </div>
        <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3 text-center" style={{ color: TOKENS.color.gold }}>Ucapan &amp; Doa</p>
        <h2 className="text-2xl sm:text-4xl text-center mb-8 sm:mb-10" style={{ fontFamily: TOKENS.font.display, color: TOKENS.color.text }}>Wishes</h2>

        {/* Form */}
        <div className="space-y-3 mb-8">
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Nama Anda" className="w-full p-3 rounded-xl text-xs border focus:outline-none" style={{ background:"white", borderColor:`${TOKENS.color.gold}20`, color:TOKENS.color.text }}/>
          <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Tulis ucapan & doa..." className="w-full p-3 rounded-xl text-xs border resize-none focus:outline-none" style={{ background:"white", borderColor:`${TOKENS.color.gold}20`, color:TOKENS.color.text }} rows={3}/>
          <button onClick={submit} className="w-full py-3.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-wider text-white flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            style={{ background: `linear-gradient(135deg,${TOKENS.color.gold},${TOKENS.color.accent})`, boxShadow: TOKENS.shadow.button }}>
            <Send size={13}/> Kirim Ucapan
          </button>
        </div>

        {/* Wish Cards */}
        <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
          {all.map((w,i) => (
            <motion.div key={i} className="flex gap-3 p-3 sm:p-4 rounded-xl" style={{ background:"rgba(255,255,255,0.8)", backdropFilter:"blur(12px)", border:`1px solid ${TOKENS.color.gold}10`, boxShadow:TOKENS.shadow.card }}
              initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.05 }}>
              {/* Avatar — initial letter */}
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0" style={{ background: TOKENS.color.gold, color:"white" }}>
                {w.sender_name[0]?.toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-xs font-semibold" style={{ color: TOKENS.color.text }}>{w.sender_name}</span>
                  {w.created_at && <span className="text-[9px]" style={{ color: TOKENS.color.text, opacity:0.4 }}>{new Date(w.created_at).toLocaleDateString("id-ID")}</span>}
                </div>
                <p className="text-[11px] sm:text-xs leading-relaxed" style={{ color: TOKENS.color.text, opacity:0.7 }}>{w.message}</p>
              </div>
            </motion.div>
          ))}
          {all.length===0 && <p className="text-center text-xs py-8" style={{ color:TOKENS.color.text, opacity:0.4 }}>Belum ada ucapan. Jadilah yang pertama ✨</p>}
        </div>
      </div>
    </section>
  );
}
