"use client";import { useState,useEffect } from "react";import { motion } from "framer-motion";import { B } from "../styles";

interface Props { coverImg:string;groomName:string;brideName:string;eventDate:string;guestName?:string;onOpen:()=>void; }

const hearts = ["💗","💕","💖","💝","🌸"];

export default function CoverSection({ coverImg,groomName,brideName,eventDate,guestName,onOpen }: Props) {
  const [r,setR]=useState(false);const [m,setM]=useState(false);
  useEffect(()=>{setTimeout(()=>setR(true),200);setM(window.innerWidth<640);},[]);
  const d=new Date(eventDate).toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"});

  return(
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden" style={{minHeight:"100dvh",background:"linear-gradient(180deg,#FFF5F5 0%,#FEF0F0 40%,#FFF5F5 100%)"}}
      exit={{opacity:0,scale:1.08,filter:"blur(8px)"}} transition={{duration:1.2,ease:[0.32,0.72,0,1]}}>

      {/* Background image — subtle, no vignette, light overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[-5%] soft-float">
          <img src={coverImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover"
            style={{objectPosition:m?"center 25%":"center 30%",opacity:0.55}}/>
        </div>
      </div>

      {/* Soft pink gradient overlay — LIGHT, no dark vignette */}
      <div className="absolute inset-0" style={{background:"linear-gradient(180deg,rgba(255,245,245,0.4) 0%,rgba(255,240,240,0.2) 50%,rgba(255,245,245,0.5) 100%)"}}/>

      {/* Decorative rose gold frame — thin, elegant */}
      <svg className="absolute inset-[6%] w-[88%] h-[88%] pointer-events-none z-[2]" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <rect x="0" y="0" width="100" height="100" rx="4" stroke={B.color.secondary} strokeWidth="0.4" opacity="0.4"/>
        <rect x="2" y="2" width="96" height="96" rx="3" stroke={B.color.secondary} strokeWidth="0.2" opacity="0.25"/>
        {[{x:0,y:0},{x:100,y:0},{x:0,y:100},{x:100,y:100}].map((c,i)=>(<g key={i}>
          <path d={`M${c.x+3} ${c.y+3}L${c.x+12} ${c.y+3}M${c.x+3} ${c.y+3}L${c.x+3} ${c.y+12}`} stroke={B.color.secondary} strokeWidth="0.8" opacity="0.5"/>
          <circle cx={c.x+3} cy={c.y+3} r="1.2" fill={B.color.secondary} opacity="0.4"/>
        </g>))}
      </svg>

      {/* Floating hearts — romantic, soft */}
      {[...Array(m?6:10)].map((_,i)=>(
        <motion.div key={i} className="absolute pointer-events-none z-[3]"
          style={{left:`${5+i*(m?16:9)}%`,fontSize:`${12+(i%3)*4}px`}}
          animate={{y:["-2vh","108vh"],x:[0,i%2===0?20:-20,0],opacity:[0,0.22,0.25,0],rotate:[0,i%2===0?90:-90,180],scale:[1,i%3===0?1.2:1,1]}}
          transition={{duration:16+(i%4)*4,delay:i*2,repeat:Infinity,ease:"linear"}}>
          {hearts[i%hearts.length]}
        </motion.div>
      ))}

      {/* Content */}
      <motion.div className="relative z-10 text-center px-6 sm:px-8 max-w-md w-full"
        initial={{opacity:0,y:30}} animate={{opacity:r?1:0,y:r?0:30}} transition={{delay:0.4,duration:1.2}}>

        {/* Date first (different order!) */}
        <motion.p className="text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-3" style={{color:B.color.secondary,fontFamily:B.font.body}} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.8}}>{d}</motion.p>

        {/* Decorative line */}
        <motion.div className="flex items-center justify-center gap-3 mb-4" initial={{opacity:0,scaleX:0}} animate={{opacity:1,scaleX:1}} transition={{delay:0.5,duration:0.8}}>
          <div className="h-[1px] w-8 sm:w-12" style={{background:`linear-gradient(90deg,transparent,${B.color.secondary}60)`}}/>
          <span style={{fontSize:"14px"}}>💕</span>
          <div className="h-[1px] w-8 sm:w-12" style={{background:`linear-gradient(90deg,${B.color.secondary}60,transparent)`}}/>
        </motion.div>

        {/* Names — Great Vibes script font */}
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 leading-tight"
          style={{fontFamily:B.font.script,color:B.color.primary,fontWeight:400,lineHeight:1.4}}
          initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.6,duration:1}}>
          {groomName}<br/>
          <motion.span style={{color:B.color.secondary,fontSize:"0.5em",display:"inline-block",marginTop:"-4px"}} animate={{opacity:[0.6,1,0.6]}} transition={{duration:3,repeat:Infinity}}>&amp;</motion.span><br/>
          {brideName}
        </motion.h1>

        {/* "The Wedding of" */}
        <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-5" style={{color:B.color.secondary,fontFamily:B.font.body}}>The Wedding of</p>

        {guestName&&<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8,duration:0.8}}>
          <p className="text-[10px] sm:text-xs mb-1" style={{color:B.color.primary,opacity:0.7}}>Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-7 sm:mb-9" style={{fontFamily:B.font.display,color:B.color.primary}}>{guestName}</h2>
        </motion.div>}

        {/* CTA — rose gold button */}
        <motion.div className="relative inline-block" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:1,duration:0.7}}>
          <motion.button onClick={onOpen}
            className="relative px-8 sm:px-12 py-3 sm:py-3.5 rounded-full font-medium text-xs sm:text-sm tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
            style={{background:`linear-gradient(135deg,${B.color.secondary},${B.color.primary})`,boxShadow:`0 4px 24px rgba(212,169,167,0.4)`}}
            whileHover={{scale:1.04}} whileTap={{scale:0.97}}>
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <motion.span className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
                animate={{left:["-30%","130%"]}} transition={{duration:2.5,repeat:Infinity,ease:"easeInOut",repeatDelay:1.5}}/>
            </span>
            <motion.span className="inline-block mr-1" animate={{scale:[1,1.3,1]}} transition={{duration:2,repeat:Infinity}}>💌</motion.span>
            Buka Undangan
          </motion.button>
        </motion.div>

        <motion.p className="text-[8px] mt-6 tracking-widest uppercase" style={{color:B.color.secondary,opacity:0.5,fontFamily:B.font.body}}
          animate={{opacity:[0.2,0.5,0.2]}} transition={{duration:2.5,repeat:Infinity}}>Tap to open invitation</motion.p>
      </motion.div>

      <style jsx>{`
        @keyframes softFloat{0%{transform:scale(1.02)}50%{transform:scale(1.06)}100%{transform:scale(1.02)}}
        .soft-float{animation:softFloat 20s ease-in-out infinite alternate;transform-origin:center}
        @media(prefers-reduced-motion:reduce){.soft-float{animation-duration:.01ms!important}}
      `}</style>
    </motion.div>
  );
}
