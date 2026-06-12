"use client";import { useState,useEffect } from "react";import { motion } from "framer-motion";import { Sparkles,Calendar } from "lucide-react";import { B } from "../styles";

interface Props { eventDate:string;groomName:string;brideName:string; }

export default function CountdownSection({ eventDate,groomName,brideName }: Props) {
  const [t,setT]=useState({d:0,h:0,m:0,s:0,p:false});
  useEffect(()=>{const f=()=>{const n=Date.now(),g=new Date(eventDate).getTime(),x=g-n;if(x<=0){setT({d:0,h:0,m:0,s:0,p:true});return;}setT({d:Math.floor(x/864e5),h:Math.floor((x%864e5)/36e5),m:Math.floor((x%36e5)/6e4),s:Math.floor((x%6e4)/1e3),p:false});};f();const i=setInterval(f,1e3);return()=>clearInterval(i);},[eventDate]);
  const items=[{v:t.d,l:"Days"},{v:t.h,l:"Hours"},{v:t.m,l:"Minutes"},{v:t.s,l:"Seconds"}];
  const d=new Date(eventDate).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"});

  return(
    <section className="relative py-20 sm:py-28 px-4 overflow-hidden" style={{background:`linear-gradient(180deg,${B.color.darkBg} 0%,${B.color.primary} 100%)`,color:B.color.textLight}}>
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{backgroundImage:`url(${B.bg.dark})`}}/>
      <div className="max-w-lg mx-auto text-center relative z-10">
        {t.p?(
          <div className="p-8 rounded-3xl" style={{background:"rgba(255,255,255,0.06)",backdropFilter:"blur(12px)",border:`1px solid ${B.color.secondary}20`}}>
            <Sparkles size={32} className="mx-auto mb-3" style={{color:B.color.secondary}}/>
            <p className="text-xl sm:text-2xl" style={{fontFamily:B.font.display}}>Alhamdulillah, hari bahagia telah tiba!</p></div>
        ):(
          <>
            <motion.p className="text-sm sm:text-base mb-2" style={{color:B.color.secondary,fontFamily:B.font.body}} animate={{opacity:[0.6,1,0.6]}} transition={{duration:3,repeat:Infinity}}>{d}</motion.p>
            {/* CIRCLE COUNTDOWN — visibly different from tiles */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-8">
              {/* Outer ring */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 120" aria-hidden="true">
                <circle cx="60" cy="60" r="55" stroke={B.color.secondary} strokeWidth="1.5" fill="none" opacity="0.3"/>
                <circle cx="60" cy="60" r="48" stroke={B.color.secondary} strokeWidth="0.5" fill="none" opacity="0.15"/>
              </svg>
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl sm:text-5xl font-light" style={{fontFamily:B.font.display,color:B.color.secondary}}>{String(t.d).padStart(2,"0")}</span>
                <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase mt-1" style={{color:B.color.textLight,opacity:0.6}}>Days</span>
              </div>
            </div>
            {/* Small tiles for H:M:S */}
            <div className="flex justify-center gap-3 mb-8">
              {items.slice(1).map(it=>(<div key={it.l} className="w-[72px] sm:w-[80px] py-3 rounded-xl text-center" style={{background:"rgba(255,255,255,0.06)",backdropFilter:"blur(8px)",border:`1px solid ${B.color.secondary}20`}}>
                <span className="text-xl sm:text-2xl font-light" style={{fontFamily:B.font.display,color:B.color.secondary}}>{String(it.v).padStart(2,"0")}</span>
                <p className="text-[9px] tracking-[0.15em] uppercase mt-0.5" style={{opacity:0.5}}>{it.l}</p></div>))}
            </div>
            <motion.button className="px-5 py-2.5 rounded-full text-xs font-medium tracking-wider flex items-center gap-2 mx-auto transition-all hover:scale-105"
              style={{background:`linear-gradient(135deg,${B.color.secondary},${B.color.primary})`,color:"white"}} whileHover={{scale:1.05}} whileTap={{scale:0.95}}
              onClick={()=>window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Wedding of ${groomName}&${brideName}`)}&dates=${new Date(eventDate).toISOString().replace(/[-:]/g,"").split(".")[0]}Z`,"_blank")}>
              <Calendar size={13}/> Add to Calendar</motion.button>
          </>
        )}
      </div>
    </section>
  );
}
