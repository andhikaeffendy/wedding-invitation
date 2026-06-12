"use client";import { motion } from "framer-motion";import { Heart,Calendar,MapPin } from "lucide-react";import { B } from "../styles";

interface Props { heroImg:string;groomName:string;brideName:string;eventDate:string;onScrollTo:(id:string)=>void; }

export default function HeroSection({ heroImg,groomName,brideName,eventDate,onScrollTo }: Props) {
  const d=new Date(eventDate).toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
  return(
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6 overflow-hidden" style={{background:`linear-gradient(180deg,${B.color.background} 0%,${B.color.cream} 100%)`}}>
      {/* Subtle pattern bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='0.8' fill='%23D4A9A7'/%3E%3C/svg%3E")`}}/>
      {/* Soft shimmer */}
      <motion.div className="absolute inset-0 pointer-events-none opacity-30" animate={{x:["-100%","200%"]}} transition={{duration:15,repeat:Infinity,ease:"linear"}}
        style={{background:`linear-gradient(135deg,transparent 40%,rgba(255,255,255,0.3) 50%,transparent 60%)`}}/>

      <motion.div className="relative z-10 text-center max-w-lg sm:max-w-2xl w-full" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.9}}>

        {/* Photo — rounded rectangle, NOT circular (VISIBLY DIFFERENT) */}
        <motion.div className="mb-8 sm:mb-10" initial={{opacity:0,scale:0.85}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.8,delay:0.2}}>
          <div className="relative w-56 h-72 sm:w-64 sm:h-80 mx-auto rounded-3xl overflow-hidden shadow-xl" style={{border:`3px solid ${B.color.secondary}25`,boxShadow:B.shadow.soft}}>
            <img src={heroImg} alt="Couple" className="w-full h-full object-cover" loading="eager"/>
            {/* Gold corner accents */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 rounded-tl-lg" style={{borderColor:B.color.secondary,opacity:0.6}}/>
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 rounded-tr-lg" style={{borderColor:B.color.secondary,opacity:0.6}}/>
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 rounded-bl-lg" style={{borderColor:B.color.secondary,opacity:0.6}}/>
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 rounded-br-lg" style={{borderColor:B.color.secondary,opacity:0.6}}/>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-5">
          <div className="h-[1px] w-10 sm:w-14" style={{background:`linear-gradient(90deg,transparent,${B.color.secondary}40,transparent)`}}/>
          <motion.span style={{color:B.color.secondary,fontSize:"16px"}} animate={{scale:[1,1.15,1]}} transition={{duration:3,repeat:Infinity}}>💕</motion.span>
          <div className="h-[1px] w-10 sm:w-14" style={{background:`linear-gradient(90deg,transparent,${B.color.secondary}40,transparent)`}}/>
        </div>

        <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-3" style={{color:B.color.secondary,fontFamily:B.font.body}}>The Wedding of</p>
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl mb-3 leading-tight" style={{fontFamily:B.font.script,color:B.color.primary,lineHeight:1.4}}
          initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.6}}>
          {groomName} <span style={{color:B.color.secondary,fontSize:"0.7em"}}>&amp;</span> {brideName}
        </motion.h1>
        <motion.p className="text-sm sm:text-base mb-1" style={{color:B.color.text,opacity:0.6,fontFamily:B.font.body}} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.8}}>{d}</motion.p>
        <motion.p className="text-xs sm:text-sm italic max-w-md mx-auto mt-3 mb-9" style={{color:B.color.text,opacity:0.4}} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.9}}>
          Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di hari bahagia kami
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-3" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:1}}>
          {[{label:"RSVP",icon:Heart,target:"rsvp"},{label:"Acara",icon:Calendar,target:"events"},{label:"Lokasi",icon:MapPin,target:"location"}].map(b=>(
            <motion.button key={b.label} onClick={()=>onScrollTo(b.target)} className="px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wider transition-all duration-300 flex items-center gap-1.5"
              style={{background:"rgba(255,255,255,0.9)",backdropFilter:"blur(8px)",border:`1.5px solid ${B.color.secondary}25`,color:B.color.primary,boxShadow:B.shadow.card}}
              whileHover={{scale:1.05,y:-2}} whileTap={{scale:0.96}}>
              <b.icon size={13} style={{color:B.color.secondary}}/>{b.label}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
