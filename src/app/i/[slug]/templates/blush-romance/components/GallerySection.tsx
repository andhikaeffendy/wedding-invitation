"use client";import { useState } from "react";import { motion,AnimatePresence } from "framer-motion";import { ChevronLeft,ChevronRight,X } from "lucide-react";import { B } from "../styles";

export default function GallerySection({ images }:{images:string[]}){const[i,setI]=useState(0);const[lb,setLb]=useState(false);const prev=()=>setI(p=>(p===0?images.length-1:p-1));const next=()=>setI(p=>(p===images.length-1?0:p+1));
return(<section className="relative py-20 sm:py-28 px-3 sm:px-4 overflow-hidden" style={{background:B.color.cream}}>
<div className="max-w-2xl mx-auto text-center">
<p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3" style={{color:B.color.secondary}}>Momen Berharga</p>
<h2 className="text-2xl sm:text-4xl mb-8" style={{fontFamily:B.font.display,color:B.color.text}}>Gallery</h2>
{/* SWIPE CAROUSEL */}
<div className="relative mx-auto max-w-xs sm:max-w-sm">
<div className="overflow-hidden rounded-3xl" style={{border:`2px solid ${B.color.secondary}20`,boxShadow:B.shadow.soft}}>
<motion.div className="flex" animate={{x:`-${i*100}%`}} transition={{duration:0.5,ease:[0.32,0.72,0,1]}}>
{images.map((s,j)=>(<div key={j} className="w-full shrink-0 aspect-[3/4] cursor-pointer" onClick={()=>setLb(true)}><img src={s} alt={`Gallery ${j+1}`} className="w-full h-full object-cover" loading="lazy"/></div>))}
</motion.div></div>
{/* Nav buttons */}
<button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all hover:scale-110"
  style={{background:"rgba(255,255,255,0.9)",backdropFilter:"blur(8px)",boxShadow:B.shadow.card}}><ChevronLeft size={16} style={{color:B.color.primary}}/></button>
<button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all hover:scale-110"
  style={{background:"rgba(255,255,255,0.9)",backdropFilter:"blur(8px)",boxShadow:B.shadow.card}}><ChevronRight size={16} style={{color:B.color.primary}}/></button>
{/* Dots */}
<div className="flex justify-center gap-1.5 mt-4">{images.map((_,j)=>(<button key={j} onClick={()=>setI(j)} className="rounded-full transition-all"
  style={{width:j===i?20:6,height:6,background:j===i?B.color.secondary:`${B.color.secondary}40`}}/>))}</div>
</div></div>
{/* Lightbox */}
<AnimatePresence>{lb&&<motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setLb(false)}>
<button className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white/60 p-2 hover:text-white" onClick={()=>setLb(false)}><X size={24}/></button>
<img src={images[i]} alt="Preview" className="max-h-[85vh] max-w-[94vw] object-contain rounded-lg" onClick={e=>e.stopPropagation()}/></motion.div>}</AnimatePresence></section>);
}
