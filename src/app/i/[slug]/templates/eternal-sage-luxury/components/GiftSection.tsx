"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, QrCode, Check } from "lucide-react";
import { TOKENS } from "../styles";

interface Bank { bank_name: string; account_number: string; account_holder: string; }

interface GiftSectionProps { banks: Bank[]; }

export default function GiftSection({ banks }: GiftSectionProps) {
  const [copied, setCopied] = useState<string | null>(null);
  const [qrVisible, setQrVisible] = useState<Record<number,boolean>>({});

  const copyAccount = async (num: string) => {
    await navigator.clipboard.writeText(num);
    setCopied(num);
    setTimeout(() => setCopied(null), 2000);
  };

  if (!banks.length) return null;

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden" style={{ background: TOKENS.color.cream }}>
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.05]" style={{ backgroundImage: `url(${TOKENS.bg.signature})` }}/>
      <div className="max-w-md mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-12" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}30,transparent)` }}/>
          <span style={{ color: TOKENS.color.gold }}>🌿</span>
          <div className="h-[1px] w-12" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}30,transparent)` }}/>
        </div>
        <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3" style={{ color: TOKENS.color.gold }}>Kirim Hadiah</p>
        <h2 className="text-2xl sm:text-4xl mb-3" style={{ fontFamily: TOKENS.font.display, color: TOKENS.color.text }}>Wedding Gift</h2>
        <p className="text-xs sm:text-sm mb-8" style={{ color: TOKENS.color.text, opacity: 0.5 }}>Doa restu Anda adalah karunia terindah</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {banks.map((b,i) => (
            <motion.div key={i} className="p-4 sm:p-5 rounded-2xl text-left" style={{ background:"rgba(255,255,255,0.9)", backdropFilter:"blur(12px)", border:`1px solid ${TOKENS.color.gold}15`, boxShadow:TOKENS.shadow.card }}
              initial={{ opacity:0, y:15 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}>
              <h4 className="text-xs sm:text-sm font-semibold mb-2" style={{ color: TOKENS.color.text }}>{b.bank_name}</h4>
              <p className="text-xs sm:text-sm font-mono tracking-wider mb-1" style={{ color: TOKENS.color.text }}>{b.account_number}</p>
              <p className="text-[10px] sm:text-xs mb-3" style={{ color: TOKENS.color.text, opacity: 0.6 }}>a.n. {b.account_holder}</p>

              {/* QR Code toggle */}
              {qrVisible[i] && (
                <motion.div className="mb-3 flex justify-center" initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:"auto" }}>
                  <div className="bg-white p-2 rounded-lg" style={{ border:`1px solid ${TOKENS.color.gold}20` }}>
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(b.account_number)}`} alt="QR Code" className="w-[100px] h-[100px]" loading="lazy"/>
                  </div>
                </motion.div>
              )}

              <div className="flex gap-1.5">
                <button onClick={() => copyAccount(b.account_number)} className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] font-medium transition-all hover:scale-105"
                  style={{ background:`${TOKENS.color.gold}15`, color:TOKENS.color.gold }}>
                  {copied === b.account_number ? <Check size={11}/> : <Copy size={11}/>} {copied === b.account_number ? "Tersalin" : "Salin"}
                </button>
                <button onClick={() => setQrVisible(prev => ({...prev, [i]:!prev[i]}))} className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] font-medium transition-all hover:scale-105"
                  style={{ background:`${TOKENS.color.gold}15`, color:TOKENS.color.gold }}>
                  <QrCode size={11}/> QRIS
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
