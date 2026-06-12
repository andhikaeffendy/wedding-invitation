"use client";import { useState } from "react";import { motion,AnimatePresence } from "framer-motion";import { Heart } from "lucide-react";import { B } from "../styles";

export default function RsvpSection({ guestName,slug,guestToken }:{guestName?:string;slug?:string;guestToken?:string}){const[r,setR]=useState("");const[x,setX]=useState(1);const[m,setM]=useState("");const[s,setS]=useState(false);const[l,setL]=useState(false);
const sub=()=>{setL(true);
  if(slug){fetch(`/api/public/invitation/${slug}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({guestToken:guestToken||'demo-token',status:r,paxConfirmed:x})}).catch(()=>{});}
  setTimeout(()=>{setL(false);setS(true);},800);};
return(<section id="rsvp" className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden" style={{background:B.color.cream}}>
<div className="max-w-md mx-auto relative z-10">
<p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3 text-center" style={{color:B.color.secondary}}>Konfirmasi Kehadiran</p>
<h2 className="text-2xl sm:text-4xl text-center mb-8" style={{fontFamily:B.font.display,color:B.color.text}}>RSVP</h2>
<AnimatePresence>{s?(
<motion.div className="p-8 sm:p-10 rounded-3xl text-center relative overflow-hidden" style={{background:"rgba(255,255,255,0.9)",border:`1px solid ${B.color.secondary}20`,boxShadow:B.shadow.soft}} initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}}>
{[...Array(20)].map((_,i)=>(<motion.div key={i} className="absolute pointer-events-none rounded-sm" style={{left:`${10+Math.random()*80}%`,top:`${20+Math.random()*60}%`,width:5+Math.random()*6,height:5+Math.random()*6,background:i%2===0?B.color.secondary:B.color.primary}} animate={{y:[0,-30-Math.random()*50],opacity:[1,0],rotate:[0,360]}} transition={{duration:1+Math.random()*2,delay:i*0.04}}/>))}
<Heart size={48} className="mx-auto mb-4" style={{color:B.color.secondary}}/><p className="text-xl sm:text-2xl mb-2" style={{fontFamily:B.font.display}}>Terima Kasih!</p><p className="text-xs sm:text-sm" style={{opacity:0.6}}>Konfirmasi Anda telah diterima ✨</p></motion.div>
):(
<motion.div className="p-6 sm:p-8 rounded-3xl space-y-4" style={{background:"rgba(255,255,255,0.9)",border:`1px solid ${B.color.secondary}20`,boxShadow:B.shadow.soft}} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
{guestName&&<p className="text-sm text-center" style={{opacity:0.7}}>Atas nama: <strong>{guestName}</strong></p>}
<div className="grid grid-cols-3 gap-2">{[{v:"Hadir",l:"Hadir"},{v:"Tidak Hadir",l:"Tdk Hadir"},{v:"Ragu-ragu",l:"Ragu"}].map(o=>(<button key={o.v} onClick={()=>setR(o.v)} className="p-3 sm:p-4 rounded-2xl text-xs sm:text-sm font-medium transition-all min-h-[44px]" style={{background:r===o.v?B.color.primary:"white",color:r===o.v?"white":B.color.text,border:`1px solid ${r===o.v?B.color.primary:B.color.secondary}20`}}>{o.l}</button>))}</div>
{r==="Hadir"&&(<div className="flex items-center justify-center gap-4"><button onClick={()=>setX(Math.max(1,x-1))} className="w-9 h-9 rounded-full border flex items-center justify-center" style={{borderColor:`${B.color.secondary}30`}}>−</button><span className="text-xl min-w-[40px] text-center" style={{fontFamily:B.font.display}}>{x}</span><button onClick={()=>setX(x+1)} className="w-9 h-9 rounded-full border flex items-center justify-center" style={{borderColor:`${B.color.secondary}30`}}>+</button><span className="text-[10px] sm:text-xs" style={{opacity:0.4}}>orang</span></div>)}
{r&&<textarea value={m} onChange={e=>setM(e.target.value)} placeholder="Pesan untuk kedua mempelai" className="w-full p-3 rounded-xl text-xs border resize-none focus:outline-none" style={{background:"white",borderColor:`${B.color.secondary}20`}} rows={2}/>}
{r&&<button onClick={sub} disabled={l} className="w-full py-3.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-wider text-white transition-all hover:scale-[1.02]" style={{background:`linear-gradient(135deg,${B.color.secondary},${B.color.primary})`,boxShadow:B.shadow.btn}}>{l?"Mengirim...":"✨ Konfirmasi Kehadiran"}</button>}</motion.div>)}</AnimatePresence></div></section>);
}
