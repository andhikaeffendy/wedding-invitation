"use client";import { useState } from "react";import { motion } from "framer-motion";import { Copy,Check,QrCode } from "lucide-react";import { B } from "../styles";
interface Bank { bank_name:string;account_number:string;account_holder:string; }
export default function GiftSection({ banks }:{banks:Bank[]}){const[c,setC]=useState<string|null>(null);const[q,setQ]=useState<Record<number,boolean>>({});const cp=async(n:string)=>{await navigator.clipboard.writeText(n);setC(n);setTimeout(()=>setC(null),2e3);};
if(!banks.length)return null;
return(<section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden" style={{background:B.color.background}}>
<div className="max-w-md mx-auto text-center relative z-10">
<p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3" style={{color:B.color.secondary}}>Kirim Hadiah</p>
<h2 className="text-2xl sm:text-4xl mb-3" style={{fontFamily:B.font.display,color:B.color.text}}>Wedding Gift</h2>
<p className="text-xs sm:text-sm mb-8" style={{opacity:0.5}}>Doa restu Anda adalah karunia terindah</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{banks.map((b,i)=>(<motion.div key={i} className="p-4 sm:p-5 rounded-3xl text-left" style={{background:"rgba(255,255,255,0.9)",border:`1px solid ${B.color.secondary}15`,boxShadow:B.shadow.card}} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}>
<h4 className="text-xs sm:text-sm font-semibold mb-2" style={{color:B.color.text}}>{b.bank_name}</h4>
<p className="text-xs sm:text-sm font-mono tracking-wider mb-1" style={{color:B.color.text}}>{b.account_number}</p>
<p className="text-[10px] sm:text-xs mb-3" style={{opacity:0.6}}>a.n. {b.account_holder}</p>
{q[i]&&<motion.div className="mb-3 flex justify-center" initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}}><div className="bg-white p-2 rounded-xl" style={{border:`1px solid ${B.color.secondary}20`}}><img src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(b.account_number)}`} alt="QR" className="w-[100px] h-[100px]" loading="lazy"/></div></motion.div>}
<div className="flex gap-1.5"><button onClick={()=>cp(b.account_number)} className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] font-medium transition-all hover:scale-105" style={{background:`${B.color.secondary}15`,color:B.color.secondary}}>{c===b.account_number?<><Check size={11}/>Tersalin</>:<><Copy size={11}/>Salin</>}</button>
<button onClick={()=>setQ(p=>({...p,[i]:!p[i]}))} className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] font-medium transition-all hover:scale-105" style={{background:`${B.color.secondary}15`,color:B.color.secondary}}><QrCode size={11}/>QRIS</button></div></motion.div>))}</div></div></section>);
}
