"use client";import { motion } from "framer-motion";import { MapPinned } from "lucide-react";import { B } from "../styles";

export default function EventsSection() {
  const e=[{icon:"🕌",title:"Akad Nikah",time:"08:00 — 10:00 WIB",venue:"Masjid Agung Al-Muhajirin",addr:"Jl. Ahmad Yani No. 15, Bandung"},{icon:"🎉",title:"Resepsi",time:"11:00 — 17:00 WIB",venue:"Gedung Graha Wedding Garden",addr:"Jl. Sukajadi No. 200, Bandung"}];
  return(<section id="events" className="relative py-20 sm:py-28 px-4 overflow-hidden" style={{background:B.color.background}}>
<div className="max-w-xl mx-auto text-center relative z-10">
<p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3" style={{color:B.color.secondary}}>Rangkaian Acara</p>
<h2 className="text-2xl sm:text-4xl mb-10" style={{fontFamily:B.font.display,color:B.color.text}}>Akad &amp; Resepsi</h2>
<div className="grid md:grid-cols-2 gap-4 sm:gap-6">{e.map((v,i)=>(<motion.div key={i} className="p-5 sm:p-6 rounded-3xl text-left" style={{background:"rgba(255,255,255,0.8)",border:`1px solid ${B.color.secondary}15`,boxShadow:B.shadow.card}} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.15}}>
<div className="text-3xl mb-3">{v.icon}</div><h3 className="text-base sm:text-lg font-semibold mb-2" style={{fontFamily:B.font.display,color:B.color.text}}>{v.title}</h3>
<p className="text-xs sm:text-sm mb-1" style={{opacity:0.7}}>{v.time}</p><p className="text-xs sm:text-sm font-medium mb-0.5" style={{color:B.color.text}}>{v.venue}</p>
<p className="text-[10px] sm:text-xs" style={{opacity:0.5}}>{v.addr}</p></motion.div>))}</div>
<a href="https://maps.google.com" target="_blank" className="inline-flex items-center gap-1.5 mt-6 px-5 py-2.5 rounded-full text-xs font-medium transition-all hover:scale-105"
  style={{background:"rgba(255,255,255,0.9)",border:`1px solid ${B.color.secondary}20`,color:B.color.secondary}}><MapPinned size={13}/> Buka Google Maps</a></div></section>);
}
