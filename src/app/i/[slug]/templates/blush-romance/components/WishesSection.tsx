"use client";import { useState } from "react";import { motion } from "framer-motion";import { Send } from "lucide-react";import { B } from "../styles";
interface Wish { id?:string;sender_name:string;message:string;created_at?:string; }
export default function WishesSection({ wishes }:{wishes:Wish[]}){const[n,setN]=useState("");const[t,setT]=useState("");const[l,setL]=useState<Wish[]>([]);const a=[...l,...wishes].slice(0,20);
const s=()=>{if(!n.trim()||!t.trim())return;setL([{sender_name:n,message:t,created_at:new Date().toISOString()},...l]);setN("");setT("");};
return(<section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden" style={{background:B.color.cream}}>
<div className="max-w-lg mx-auto relative z-10">
<p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3 text-center" style={{color:B.color.secondary}}>Ucapan &amp; Doa</p>
<h2 className="text-2xl sm:text-4xl text-center mb-8" style={{fontFamily:B.font.display,color:B.color.text}}>Wishes</h2>
<div className="space-y-3 mb-8"><input value={n} onChange={e=>setN(e.target.value)} placeholder="Nama Anda" className="w-full p-3 rounded-xl text-xs border focus:outline-none" style={{background:"white",borderColor:`${B.color.secondary}20`}}/>
<textarea value={t} onChange={e=>setT(e.target.value)} placeholder="Tulis ucapan & doa..." className="w-full p-3 rounded-xl text-xs border resize-none focus:outline-none" style={{background:"white",borderColor:`${B.color.secondary}20`}} rows={3}/>
<button onClick={s} className="w-full py-3.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-wider text-white flex items-center justify-center gap-2 transition-all hover:scale-[1.02]" style={{background:`linear-gradient(135deg,${B.color.secondary},${B.color.primary})`,boxShadow:B.shadow.btn}}><Send size={13}/>Kirim Ucapan</button></div>
<div className="space-y-2 max-h-72 overflow-y-auto pr-1">{a.map((w,i)=>(<motion.div key={i} className="flex gap-3 p-3 sm:p-4 rounded-2xl" style={{background:"rgba(255,255,255,0.8)",border:`1px solid ${B.color.secondary}10`,boxShadow:B.shadow.card}} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}>
<div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0" style={{background:B.color.secondary,color:"white"}}>{w.sender_name[0]?.toUpperCase()}</div>
<div className="flex-1 min-w-0"><div className="flex items-center justify-between mb-0.5"><span className="text-xs font-semibold" style={{color:B.color.text}}>{w.sender_name}</span>{w.created_at&&<span className="text-[9px]" style={{opacity:0.4}}>{new Date(w.created_at).toLocaleDateString("id-ID")}</span>}</div>
<p className="text-[11px] sm:text-xs leading-relaxed" style={{opacity:0.7}}>{w.message}</p></div></motion.div>))}
{a.length===0&&<p className="text-center text-xs py-8" style={{opacity:0.4}}>Belum ada ucapan. Jadilah yang pertama ✨</p>}</div></div></section>);
}
