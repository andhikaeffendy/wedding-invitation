"use client";import { useState,useEffect } from "react";import { motion,AnimatePresence } from "framer-motion";import { V,VineTopLeft,VineBottomRight } from "../styles";

interface Props { groomName:string;brideName:string;eventDate:string;guestName?:string;onOpen:()=>void; }

export default function CoverSection({ groomName,brideName,eventDate,guestName,onOpen }: Props) {
  const [phase,setPhase]=useState<"cover"|"transition"|"done">("cover");
  const d=new Date(eventDate).toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"});

  const handleOpen = () => {
    setPhase("transition");
    // Match HTML timing: transition shows → 480ms → cover fades → 1250ms → content appears
    setTimeout(() => setPhase("done"), 1250);
    setTimeout(() => onOpen(), 1350);
  };

  if(phase==="done") return null;

  return(
    <>
      {/* COVER */}
      <motion.div
        className="fixed inset-0 z-50 grid place-items-center overflow-hidden"
        style={{background:V.color.deep}}
        animate={phase==="transition"?{opacity:0,scale:1.08,filter:"blur(12px)"}:{opacity:1,scale:1,filter:"blur(0px)"}}
        transition={{duration:.9,ease:[.2,.8,.2,1],delay:phase==="transition"?.48:0}}
      >
        <div className="relative w-full max-w-[480px] min-h-screen flex items-center justify-center p-7 overflow-hidden">
          {/* Photo BG + Zoom */}
          <div className="absolute inset-0 z-0 cover-zoom-bg" style={{backgroundImage:`url(${V.photoUrl})`,backgroundSize:"cover",backgroundPosition:"center 42%",filter:"saturate(.82) contrast(.96) brightness(.88)"}}/>
          {/* Overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none" style={{background:`linear-gradient(180deg,rgba(5,18,12,.48),rgba(5,18,12,.20) 28%,rgba(5,18,12,.30) 56%,rgba(5,18,12,.76)),radial-gradient(circle at 50% 39%,rgba(255,244,210,.18),transparent 24%),radial-gradient(circle at 50% 52%,rgba(4,16,10,.08),rgba(4,16,10,.60) 78%)`}}/>
          {/* Frame borders */}
          <div className="absolute inset-4 rounded-[30px] border z-[4] pointer-events-none" style={{borderColor:"rgba(226,201,130,.62)",boxShadow:"inset 0 0 0 1px rgba(255,250,230,.06),inset 0 0 80px rgba(0,0,0,.22)"}}/>
          <div className="absolute inset-[26px] rounded-[23px] border z-[4] pointer-events-none" style={{borderColor:"rgba(255,250,230,.20)"}}/>
          {/* Vines */}
          <div className="absolute z-[3] pointer-events-none opacity-70" style={{left:-52,top:-44,width:178,transform:"rotate(4deg)",filter:"drop-shadow(0 10px 18px rgba(0,0,0,.18))"}}><VineTopLeft/></div>
          <div className="absolute z-[3] pointer-events-none opacity-70" style={{right:-72,bottom:-56,width:214,transform:"rotate(187deg)",filter:"drop-shadow(0 10px 18px rgba(0,0,0,.18))"}}><VineBottomRight/></div>
          {/* Pollen/petals */}
          <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none">
            {[...Array(6)].map((_,i)=>(<span key={i} className="absolute w-[7px] h-[7px] rounded-[70%_30%_70%_30%] bg-[rgba(226,201,130,.75)] animate-pollen" style={{left:`${14+i*14}%`,animationDelay:`${i*2}s`,animationDuration:`${9+(i%3)*2}s`}}/>))}
          </div>
          {/* Content */}
          <div className="relative z-[5] text-center w-full flex flex-col items-center justify-center px-6 sm:px-[26px] max-[380px]:!px-[22px]" style={{color:V.color.white,minHeight:"100svh",paddingTop:"16svh",paddingBottom:"12svh",textShadow:"0 2px 14px rgba(0,0,0,.56)"}}>
            <div className="max-w-[260px] mx-auto mb-3" style={{color:"rgba(255,247,223,.86)",fontFamily:V.font.serif,fontSize:10,fontWeight:600,letterSpacing:".20em",lineHeight:1.65}}>
              You are invited to the wedding of
              <div className="w-[86px] h-px mx-auto mt-[14px]" style={{background:"linear-gradient(90deg,transparent,rgba(226,201,130,.82),transparent)"}}/>
            </div>
            <h1 className="mb-0" style={{color:"#fff8e6",fontFamily:V.font.display,fontSize:"clamp(42px,13.2vw,72px)",lineHeight:.9,fontWeight:500,letterSpacing:"-.035em",textShadow:"0 3px 18px rgba(0,0,0,.62)"}}>
              {groomName}<span className="block" style={{margin:".05em 0 .08em",color:"#ead491",fontFamily:V.font.script,fontSize:".68em",lineHeight:".68"}}>&</span>{brideName}
            </h1>
            <div className="mt-[18px]" style={{color:"rgba(255,247,223,.94)",fontFamily:V.font.serif,fontSize:16,fontWeight:600,letterSpacing:".02em"}}>{d}
              <div className="w-[118px] h-px mx-auto mt-[18px]" style={{background:"linear-gradient(90deg,transparent,rgba(226,201,130,.70),transparent)"}}/>
            </div>
            {guestName&&(<div className="mt-7 mx-auto" style={{color:"#fff7df"}}>
              <small className="block mb-1" style={{color:"rgba(255,247,223,.80)",fontFamily:V.font.serif,fontSize:10,fontWeight:600,letterSpacing:".12em"}}>Kepada Yth.</small>
              <b className="block" style={{color:"#fff8e6",fontFamily:V.font.script,fontSize:34,lineHeight:1,fontWeight:400,textShadow:"0 3px 16px rgba(0,0,0,.56)"}}>{guestName}</b></div>)}
            <button onClick={handleOpen} className="relative mt-[22px] min-h-[44px] px-[25px] rounded-full inline-flex items-center gap-2.5 justify-center transition-all hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-2"
              style={{color:"#fff8df",fontFamily:V.font.serif,fontSize:15,fontWeight:600,background:"linear-gradient(135deg,rgba(143,155,115,.84),rgba(79,95,56,.88))",border:"1px solid rgba(226,201,130,.70)",boxShadow:"0 12px 28px rgba(0,0,0,.30),inset 0 1px 0 rgba(255,255,255,.18)",outlineColor:V.color.gold}}
              aria-label="Buka undangan pernikahan">
              Buka Undangan <span>↗</span></button>
          </div>
          {/* Scroll mark + animated dot */}
          <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 z-[6] w-[34px] h-[34px] rounded-full grid place-items-center" style={{background:"rgba(6,22,15,.30)",backdropFilter:"blur(8px)",border:"1px solid rgba(226,201,130,.52)"}}>
            <span className="text-lg leading-none" style={{fontFamily:V.font.serif,color:"#ead491"}}>↓</span>
          </div>
        </div>
      </motion.div>

      {/* TRANSITION LAYER — monogram circle */}
      <AnimatePresence>
        {phase==="transition"&&(
          <motion.div className="fixed inset-0 z-[75] grid place-items-center backdrop-blur-[12px]" style={{background:"rgba(4,18,11,.92)"}}
            initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0,transition:{delay:.6,duration:.4}}}>
            <motion.div className="w-[124px] h-[124px] rounded-full grid place-items-center text-[46px]" style={{border:"1px solid rgba(226,201,130,.78)",color:V.color.gold2,fontFamily:V.font.display,letterSpacing:"-.08em",boxShadow:"0 0 0 12px rgba(198,164,97,.07),0 0 60px rgba(226,201,130,.24)"}}
              initial={{scale:.72,rotate:-12,opacity:0}} animate={{scale:1,rotate:0,opacity:1}} transition={{duration:.95,ease:[.2,.8,.2,1]}}>
              <span className="-translate-x-[3px]">{groomName[0]}<br/>{brideName[0]}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes coverZoom{from{background-size:105%}to{background-size:118%}}
        .cover-zoom-bg{animation:coverZoom 16s ease-in-out infinite alternate}
        @keyframes pollen{0%{top:-8%;opacity:0;transform:translateX(0) rotate(0deg)}12%{opacity:.75}100%{top:108%;opacity:0;transform:translateX(-70px) rotate(280deg)}}
        .animate-pollen{animation:pollen 10s linear infinite}
        @media (min-width:720px){.cover-zoom-bg{background-position:center 40%!important}}
        @media (prefers-reduced-motion:reduce){.cover-zoom-bg,.animate-pollen{animation-duration:.01ms!important}}
      `}</style>
    </>
  );
}
