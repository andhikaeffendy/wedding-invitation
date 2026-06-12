"use client";import { useState,useEffect,useCallback,useRef } from "react";import { motion,AnimatePresence } from "framer-motion";import { Music } from "lucide-react";
import CoverSection from "./components/CoverSection";
import HeroSection from "./components/HeroSection";
import CoupleSection from "./components/CoupleSection";
import GallerySection from "./components/GallerySection";
import CountdownSection from "./components/CountdownSection";
import EventsSection from "./components/EventsSection";
import RsvpSection from "./components/RsvpSection";
import GiftSection from "./components/GiftSection";
import WishesSection from "./components/WishesSection";
import ClosingSection from "./components/ClosingSection";
import { B } from "./styles";
import type { TemplateData } from "@/lib/template-types";

interface Props { data:TemplateData; }

export default function BlushRomancePage({ data }: Props) {
  const inv=data.invitation;const s=(inv?.settings as Record<string,string>)||{};const g=data.guest;
  const ci=s.coverImage||"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80";
  const hi=s.heroImage||ci;const gp=s.groomPhoto||"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80";
  const bp=s.bridePhoto||"https://images.unsplash.com/photo-1594552073388-6e3f45e83df6?w=400&q=80";
  const gn=inv?.groom_name||"Alexander";const bn=inv?.bride_name||"Victoria";
  const gf=inv?.groom_full_name||"Alexander Wijaya, S.E.";const bf=inv?.bride_full_name||"Victoria Rose, M.D.";
  const gpr=inv?.groom_parents||"Putra dari Bpk. Ir. Budi Santoso & Ibu Dewi Kartika";
  const bpr=inv?.bride_parents||"Putri dari Bpk. H. Ahmad Fauzi & Ibu Hj. Siti Mariam";
  const ed=inv?.event_date||"2026-08-15";const gsn=g?.guest_name||"Bapak/Ibu/Saudara/i";

  const [open,setOpen]=useState(false);const [mu,setMu]=useState(false);const [a,setA]=useState<HTMLAudioElement|null>(null);
  const mr=useRef<HTMLDivElement>(null);
  useEffect(()=>{const u=s.musicUrl||"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";const x=new Audio(u);x.loop=true;x.volume=0.3;setA(x);return()=>{x.pause();x.src="";};},[s.musicUrl]);
  const tm=useCallback(()=>{if(!a)return;mu?(a.pause(),setMu(false)):(a.play().catch(()=>{}),setMu(true));},[a,mu]);
  const ss=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
  useEffect(()=>{if(open)setTimeout(()=>mr.current?.scrollTo({top:0,behavior:"instant" as ScrollBehavior}),100);},[open]);
  const gi=(data.gallery||[])as string[];const wi=(data.wishes||[])as any[];const bk=(data.bankAccounts||[])as any[];
  const stories=(data.loveStories||[])as any[];

  return(
    <main ref={mr} className="relative w-full overflow-x-hidden" style={{background:B.color.background,color:B.color.text,fontFamily:B.font.body}}>
      <style>{`html{scroll-behavior:smooth}@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}`}</style>
      <AnimatePresence>{!open&&<CoverSection coverImg={ci} groomName={gn} brideName={bn} eventDate={ed} guestName={gsn} onOpen={()=>setOpen(true)}/>}</AnimatePresence>
      {open&&<motion.button onClick={tm} className="fixed top-4 right-4 z-30 w-10 h-10 rounded-full shadow-lg flex items-center justify-center"
        style={{background:"rgba(255,255,255,0.9)",backdropFilter:"blur(12px)",border:`1.5px solid ${B.color.secondary}25`}} initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} whileHover={{scale:1.1}}>
        <Music size={15} style={{color:mu?B.color.secondary:B.color.muted,animation:mu?"pulse 2.5s ease-in-out infinite":"none"}}/></motion.button>}
      <AnimatePresence>{open&&<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:0.3}}>
        <HeroSection heroImg={hi} groomName={gn} brideName={bn} eventDate={ed} onScrollTo={ss}/>
        <CoupleSection groomPhoto={gp} groomName={gn} groomFull={gf} groomParents={gpr} bridePhoto={bp} brideName={bn} brideFull={bf} brideParents={bpr}/>
        {/* Our Story */}
        {stories.length>0&&(
        <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden" style={{background:B.color.cream}}>
          <div className="max-w-xl mx-auto text-center relative z-10">
            <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3" style={{color:B.color.secondary}}>Kisah Cinta</p>
            <h2 className="text-2xl sm:text-4xl mb-10" style={{fontFamily:B.font.display,color:B.color.text}}>Our Story</h2>
            <div className="relative space-y-6">{stories.map((s:any,i:number)=>(<motion.div key={i} className="flex flex-col sm:flex-row gap-4 items-center p-5 rounded-2xl" style={{background:"rgba(255,255,255,0.8)",border:`1px solid ${B.color.secondary}15`,boxShadow:B.shadow.card}} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}>
              <div className="text-center sm:text-left shrink-0"><span className="text-2xl sm:text-3xl font-light" style={{fontFamily:B.font.script,color:B.color.secondary}}>{s.date||s.title}</span></div>
              <div className="flex-1 text-center sm:text-left"><h4 className="text-sm font-semibold mb-1" style={{color:B.color.text}}>{s.title}</h4><p className="text-[11px] sm:text-xs leading-relaxed" style={{color:B.color.text,opacity:0.6}}>{s.description}</p></div>
              {s.image_url&&<div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-cover bg-center shrink-0" style={{backgroundImage:`url(${s.image_url})`}}/>}
            </motion.div>))}</div></div></section>)}
        <CountdownSection eventDate={ed} groomName={gn} brideName={bn}/>
        <EventsSection/>
        {gi.length>0&&<GallerySection images={gi}/>}
        <RsvpSection guestName={gsn} slug={inv?.slug} guestToken={data.guestToken}/>
        {bk.length>0&&<GiftSection banks={bk}/>}
        <WishesSection wishes={wi}/>
        <ClosingSection groomName={gn} brideName={bn} groomFull={gf} brideFull={bf} groomParents={gpr} brideParents={bpr}/>
      </motion.div>}</AnimatePresence>
    </main>
  );
}
