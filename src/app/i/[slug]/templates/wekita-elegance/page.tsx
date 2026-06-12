"use client";import { useState,useEffect,useCallback,useRef } from "react";import { motion,AnimatePresence } from "framer-motion";import CoverSection from "./components/CoverSection";import { V,VineTopLeft,VineBottomRight,FloralSvg } from "./styles";import type { TemplateData } from "@/lib/template-types";

interface Props { data:TemplateData; }

// ═══ SHARED COMPONENTS ═══
const GoldDivider = () => (<div className="w-[154px] h-[18px] mx-auto my-[18px] opacity-90" style={{background:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='154' height='18' viewBox='0 0 154 18'%3E%3Cg fill='none' stroke='%23c6a461' stroke-width='1'%3E%3Cpath d='M0 9h58M96 9h58M58 9c8-9 30-9 38 0M58 9c8 9 30 9 38 0'/%3E%3Ccircle cx='77' cy='9' r='4' fill='%23c6a461'/%3E%3C/g%3E%3C/svg%3E") center/contain no-repeat`}}/>);
const ST = ({ children,dark }: { children:React.ReactNode;dark?:boolean }) => (<div className="self-start mb-5 font-bold tracking-[.08em] uppercase" style={{fontFamily:V.font.display,fontSize:15,color:dark?V.color.gold2:V.color.goldDark}}>{children}</div>);
const OT = ({ children,dark }: { children:React.ReactNode;dark?:boolean }) => (<h2 style={{fontFamily:V.font.display,fontSize:"clamp(33px,8vw,48px)",lineHeight:1.05,fontWeight:500,color:dark?"#fff8df":V.color.ink}}>{children}</h2>);

// ═══ SECTION WRAPPERS with IntersectionObserver ═══
function Section({ id,className="",children,floral,floralPos }: { id?:string;className?:string;children:React.ReactNode;floral?:boolean;floralPos?:string }) {
  const [vis,setVis]=useState(false);const ref=useRef<HTMLElement>(null);
  useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setVis(true);io.disconnect();}},{threshold:.18});if(ref.current)io.observe(ref.current);return()=>io.disconnect();},[]);
  return(<section ref={ref} id={id} className={`relative mx-auto mb-[18px] p-[30px_18px] sm:p-[34px_24px] rounded-[28px] overflow-hidden border transition-all duration-[800ms] ${vis?"opacity-100 translate-y-0 scale-100":"opacity-0 translate-y-7 scale-[.985]"} ${className}`}
    style={{background:"radial-gradient(circle at 15% 8%,rgba(255,255,255,.95),transparent 20%),radial-gradient(circle at 90% 92%,rgba(198,164,97,.14),transparent 24%),linear-gradient(145deg,rgba(255,252,244,.96),rgba(250,243,228,.98))",borderColor:"rgba(198,164,97,.32)",boxShadow:V.shadowSoft}}>
    <div className="absolute inset-3 rounded-[22px] border pointer-events-none z-[1]" style={{borderColor:"rgba(198,164,97,.18)"}}/>
    <div className="absolute inset-0 pointer-events-none z-0 opacity-[.22]" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg width='90' height='90' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c6a461' stroke-opacity='.12' stroke-width='.7'%3E%3Cpath d='M20 70c16-25 34-35 50-50M26 66c12 0 24-8 30-20M38 56c-10-2-16-8-18-18'/%3E%3C/g%3E%3C/svg%3E")`}}/>
    {floral&&<div className={`absolute z-[2] pointer-events-none opacity-[.86] ${floralPos==="bl"?"left-[-38px] bottom-[-32px] w-[210px]":floralPos==="tr"?"right-[-44px] top-[-30px] w-[188px] rotate-180":floralPos==="br"?"right-[-36px] bottom-[-30px] w-[190px] rotate-[190deg]":floralPos==="tl"?"left-[-38px] top-[-28px] w-[190px] rotate-[8deg]":""}`}><FloralSvg/></div>}
    <div className="relative z-[3] h-full flex flex-col justify-center items-center text-center">{children}</div></section>);
}
function DarkSection({ id,children }: { id?:string;children:React.ReactNode }) {
  const [vis,setVis]=useState(false);const ref=useRef<HTMLElement>(null);
  useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setVis(true);io.disconnect();}},{threshold:.18});if(ref.current)io.observe(ref.current);return()=>io.disconnect();},[]);
  return(<section ref={ref} id={id} className={`relative mx-auto mb-[18px] p-[30px_18px] sm:p-[34px_24px] rounded-[28px] overflow-hidden border transition-all duration-[800ms] ${vis?"opacity-100 translate-y-0 scale-100":"opacity-0 translate-y-7 scale-[.985]"}`}
    style={{background:"linear-gradient(160deg,#06160f,#102c1d 58%,#071b11)",color:"#fff8df",borderColor:"rgba(226,201,130,.42)",boxShadow:"0 26px 70px rgba(4,18,11,.32)"}}>
    <div className="absolute inset-3 rounded-[22px] border pointer-events-none z-[1]" style={{borderColor:"rgba(226,201,130,.35)"}}/>
    <div className="relative z-[3] h-full flex flex-col justify-center items-center text-center">{children}</div></section>);
}

// ═══ COUNTDOWN HOOK ═══
function useCountdown(target:string){const[t,setT]=useState({d:0,h:0,m:0,s:0,passed:false});
  useEffect(()=>{const tick=()=>{const n=Date.now(),g=new Date(target).getTime(),x=g-n;if(x<=0){setT({d:0,h:0,m:0,s:0,passed:true});return;}setT({d:Math.floor(x/864e5),h:Math.floor((x%864e5)/36e5),m:Math.floor((x%36e5)/6e4),s:Math.floor((x%6e4)/1e3),passed:false});};tick();const i=setInterval(tick,1e3);return()=>clearInterval(i);},[target]);return t;}

// ═══ MAIN PAGE ═══
export default function WekitaElegancePage({ data }: Props) {
  const inv=data.invitation;const s=(inv?.settings as Record<string,string>)||{};const g=data.guest;
  const gn=inv?.groom_name||"Andhika";const bn=inv?.bride_name||"Laila";
  const gf=inv?.groom_full_name||"Andhika Pratama";const bf=inv?.bride_full_name||"Laila Putri";
  const gpr=inv?.groom_parents||"Putra dari Bapak Seto Santoso & Ibu Ruma Sari";
  const bpr=inv?.bride_parents||"Putri dari Bapak Hadi Santoso & Ibu Sri Wahyuni";
  const ed=inv?.event_date||"2027-01-10";const gsn=g?.guest_name||"Nama Tamu";

  const [open,setOpen]=useState(false);const [mu,setMu]=useState(false);const [a,setA]=useState<HTMLAudioElement|null>(null);
  const [toast,setToast]=useState("");const [lb,setLb]=useState<string|null>(null);
  const [activeNav,setActiveNav]=useState("blessing");
  const ct=useCountdown(ed);

  useEffect(()=>{const url=s.musicUrl||"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";const x=new Audio(url);x.loop=true;x.volume=0.3;setA(x);return()=>{x.pause();x.src="";};},[s.musicUrl]);
  const tm=useCallback(()=>{if(!a)return;mu?(a.pause(),setMu(false)):(a.play().catch(()=>{}),setMu(true));},[a,mu]);
  const showToast=(t:string)=>{setToast(t);setTimeout(()=>setToast(""),2200);};

  const [att,setAtt]=useState("Hadir");const [pax,setPax]=useState(2);const [wn,setWn]=useState("");const [wt,setWt]=useState("");
  const wishesData=(data.wishes||[])as any[];const banks=(data.bankAccounts||[])as any[];
  const gi=(data.gallery||[])as string[];

  // RSVP submission
  const submitRsvp = async () => {
    const slug = inv?.slug; const token = data.guestToken || 'demo-token';
    try {
      await fetch(`/api/public/invitation/${slug}`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ guestToken:token, status:att, paxConfirmed:pax, message:'' }) });
    } catch {} finally { showToast("Konfirmasi berhasil dikirim ✨"); }
  };

  // Wishes submission
  const submitWish = async () => {
    if(!wn.trim()||!wt.trim())return;
    const invId = inv?.id;
    try { await fetch(`/api/public/invitation/${inv?.slug}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ senderName:wn, text:wt, invitationId:invId }) }); } catch {}
    showToast("Ucapan berhasil dikirim ✨"); setWn(""); setWt("");
  };

  // Bottom nav tracking
  useEffect(()=>{if(!open)return;const ids=["blessing","hero","couple","story","gallery","date","event","rsvp","qrpass","gift","wishes","closing"];
    const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)setActiveNav(e.target.id);})},{threshold:.42});
    ids.forEach(id=>{const el=document.getElementById(id);if(el)io.observe(el);});return()=>io.disconnect();},[open]);

  const d=new Date(ed).toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"});

  return(<div className="relative w-full overflow-x-hidden min-h-screen" style={{fontFamily:V.font.body,color:V.color.ink,background:"radial-gradient(circle at 10% 0%,rgba(198,164,97,.18),transparent 30%),radial-gradient(circle at 90% 10%,rgba(143,155,115,.20),transparent 35%),linear-gradient(135deg,#f4ead8,#fffaf0 48%,#efe2c8)"}}>
    {/* Grain */}
    <div className="fixed inset-0 pointer-events-none opacity-[.28] -z-[1]" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.22'/%3E%3C/svg%3E")`,mixBlendMode:"multiply"}}/>

    {/* COVER + TRANSITION */}
    <AnimatePresence>{!open&&<CoverSection groomName={gn} brideName={bn} eventDate={ed} guestName={gsn} onOpen={()=>setOpen(true)}/>}</AnimatePresence>

    {/* Music toggle */}
    {open&&<button onClick={tm} className="fixed right-[calc(50%-min(240px,50vw)+18px)] bottom-6 w-12 h-12 rounded-full z-50 grid place-items-center backdrop-blur-[10px] max-[480px]:!right-[18px]" style={{background:"rgba(13,37,24,.92)",color:V.color.gold2,border:"1px solid rgba(226,201,130,.58)",boxShadow:"0 12px 30px rgba(0,0,0,.24)"}} aria-label="Music">♪</button>}

    {/* APP SHELL */}
    <AnimatePresence>{open&&<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.6,delay:.2}}
      className="app-shell-resp mx-auto min-h-screen relative overflow-hidden md:my-8 md:rounded-[38px] md:min-h-[calc(100vh-64px)]"
      style={{width:"min(100%,480px)",background:"radial-gradient(circle at top,rgba(255,255,255,.52),transparent 34%),linear-gradient(180deg,rgba(255,250,240,.82),rgba(251,246,234,.94))",boxShadow:"0 0 0 1px rgba(198,164,97,.12),0 30px 120px rgba(12,20,12,.22)"}}>
      <main className="p-[22px_14px_94px] max-[380px]:!p-[22px_10px_94px]" style={{["--olive" as any]:"#4f5f38",["--gold" as any]:"#c6a461"}}>

        {/* 1. BLESSING */}
        <Section id="blessing" floral floralPos="bl">
          <div className="absolute right-[-44px] top-[-30px] w-[188px] z-[2] pointer-events-none opacity-[.86] rotate-180"><FloralSvg/></div>
          <ST>✦ Intro / Blessing</ST>
          <div className="w-full p-[38px_22px_78px] rounded-3xl relative" style={{background:"rgba(255,250,240,.62)",border:"1px solid rgba(198,164,97,.18)"}}>
            <p className="text-[29px] leading-[1.4] mb-[22px]" style={{color:"#b99658",fontFamily:V.font.serif}}>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
            <p className="text-base leading-[1.68] max-w-[330px] mx-auto" style={{fontFamily:V.font.serif,color:"#4a4030"}}>"Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya."</p>
            <p className="mt-[18px] font-semibold" style={{fontFamily:V.font.serif,color:"#8c774d"}}>QS. Ar-Rum : 21</p><GoldDivider/>
          </div></Section>

        {/* 2. HERO */}
        <Section id="hero" floral floralPos="tl">
          <div className="absolute right-[-36px] bottom-[-30px] w-[190px] z-[2] pointer-events-none opacity-[.86] rotate-[190deg]"><FloralSvg/></div>
          <ST>✦ Hero — The Wedding Of</ST>
          <div className="relative w-[180px] h-[180px] sm:w-[214px] sm:h-[214px] my-[14px_auto_26px] grid place-items-center">
            <div className="absolute inset-[-12px] rounded-full border animate-[slowSpin_28s_linear_infinite]" style={{borderColor:"rgba(198,164,97,.8)",boxShadow:"0 0 0 9px rgba(198,164,97,.08)"}}/>
            <div className="absolute inset-[-30px] opacity-95" style={{background:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 260 260'%3E%3Cg fill='none' stroke='%237d8d63' stroke-width='3' stroke-linecap='round'%3E%3Cpath d='M48 158C28 95 68 45 128 34M212 100c16 64-35 114-92 124'/%3E%3Cpath d='M58 142c-18-18-16-38-6-56M196 116c20 18 20 40 8 58'/%3E%3C/g%3E%3Cg fill='%23f8f1df'%3E%3Ccircle cx='58' cy='82' r='13'/%3E%3Ccircle cx='199' cy='181' r='15'/%3E%3Ccircle cx='82' cy='51' r='9'/%3E%3Ccircle cx='178' cy='213' r='8'/%3E%3C/g%3E%3Cg fill='%23c6a461'%3E%3Ccircle cx='69' cy='112' r='4'/%3E%3Ccircle cx='194' cy='145' r='4'/%3E%3C/g%3E%3C/svg%3E") center/contain no-repeat`}}/>
            <div className="relative w-[160px] h-[160px] sm:w-[188px] sm:h-[188px] rounded-full border-[8px] z-[2]" style={{backgroundImage:`url('https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=700&q=80')`,backgroundSize:"cover",backgroundPosition:"center",borderColor:"rgba(255,250,240,.9)",boxShadow:"0 20px 46px rgba(60,45,20,.24)"}}/></div>
          <div className="text-[10px] font-semibold tracking-[.26em] uppercase" style={{color:V.color.goldDark}}>The Wedding of</div>
          <OT>{gn} & {bn}</OT>
          <p className="text-[18px] mt-[18px]" style={{fontFamily:V.font.serif,color:"#6d5a3c"}}>{d}</p><GoldDivider/>
        </Section>

        {/* 3. COUPLE */}
        <Section id="couple" floral floralPos="bl">
          <ST>✦ Couple Profile</ST>
          <div className="w-full grid grid-cols-[1fr_auto_1fr] gap-3 items-center max-[500px]:grid-cols-1 max-[500px]:gap-4">
            {[{name:bn,full:bf,parents:bpr,photo:"https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=500&q=80",ig:"@lailaputri",bio:"Wanita yang sabar dan mencintai bunga dan senja."},{name:gn,full:gf,parents:gpr,photo:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",ig:"@andhikaprt",bio:"Pria yang mencintai kopi dan perjalanan."}].map((p,i)=>(
              <article key={i} className="min-h-[280px] p-[22px_14px_18px] rounded-[22px] relative overflow-hidden" style={{background:"rgba(255,252,244,.74)",border:"1px solid rgba(198,164,97,.38)",boxShadow:"0 14px 34px rgba(74,58,26,.1)"}}>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 text-lg" style={{color:V.color.gold}}>✦</div>
                <div className="w-[112px] h-[112px] rounded-full mx-auto my-3 border-[6px]" style={{backgroundImage:`url(${p.photo})`,backgroundSize:"cover",borderColor:"#fff8e8",boxShadow:"0 12px 26px rgba(52,41,18,.16)"}}/>
                <h3 style={{fontFamily:V.font.display,fontSize:25,color:"#4b3f2d"}}>{p.name}</h3>
                <p className="text-[10.5px] leading-[1.55]" style={{color:"#645b4d"}}>{p.parents}</p>
                <span className="inline-flex gap-[5px] items-center my-3 text-[11px]" style={{color:"#a88648"}}>◎ {p.ig}</span>
                <p className="text-[10.5px] leading-[1.55]" style={{color:"#645b4d"}}>{p.bio}</p></article>))}
            <div className="text-[48px] sm:text-[60px] md:text-[72px] leading-none max-[500px]:!text-[42px] max-[500px]:leading-[.6] max-[500px]:rotate-90" style={{fontFamily:V.font.script,color:"rgba(198,164,97,.9)",textShadow:"0 8px 20px rgba(198,164,97,.16)"}}>&</div></div>
        </Section>

        {/* 4. STORY */}
        <Section id="story"><ST>✦ Our Story — Timeline</ST>
          <div className="w-full relative mt-2 pl-[74px] max-[380px]:pl-[58px]">
            <div className="absolute left-[90px] top-1.5 bottom-1.5 w-px max-[380px]:!left-[74px]" style={{background:`linear-gradient(${V.color.gold},rgba(198,164,97,.1))`}}/>
            {[{y:"2018",t:"First Meet",d:"Kami pertama kali bertemu di sebuah acara kampus.",img:"https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=500&q=80"},{y:"2020",t:"Relationship",d:"Menjalin hubungan dan saling mengenal lebih dalam.",img:"https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=500&q=80"},{y:"2023",t:"Engagement",d:"Kami memutuskan untuk melangkah ke jenjang serius.",img:"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=500&q=80"},{y:"2027",t:"Wedding Day",d:"Hari bahagia yang sudah kami nantikan.",img:"https://images.unsplash.com/photo-1460364157752-926555421a7e?auto=format&fit=crop&w=500&q=80"}].map((s,i)=>(
              <div key={i} className="relative min-h-[92px] grid grid-cols-[1fr_92px] gap-[14px] text-left mb-3 items-center max-[380px]:grid-cols-[1fr_74px]">
                <span className="absolute left-[-72px] top-[14px] font-bold max-[380px]:!left-[-58px]" style={{fontFamily:V.font.serif,color:"#6b604c"}}>{s.y}</span>
                <div className="absolute left-[11px] top-[19px] w-[13px] h-[13px] rounded-full border-[3px]" style={{background:V.color.olive,borderColor:V.color.gold2,boxShadow:"0 0 0 5px rgba(198,164,97,.1)"}}/>
                <div className="pl-[34px] max-[380px]:!pl-7"><h3 style={{fontFamily:V.font.display,fontSize:17,color:"#4b3f2d",marginBottom:3}}>{s.t}</h3><p className="text-[11px] leading-[1.55]" style={{color:"#6a6258"}}>{s.d}</p></div>
                <div className="h-[72px] rounded-xl border-[3px] transition-transform duration-500 hover:scale-105 cursor-pointer" style={{backgroundImage:`url(${s.img})`,backgroundSize:"cover",backgroundPosition:"center",borderColor:"rgba(255,250,240,.9)",boxShadow:"0 10px 20px rgba(42,33,14,.14)"}}/></div>))}</div>
        </Section>

        {/* 5. GALLERY */}
        <Section id="gallery"><ST>✦ Gallery</ST>
          <div className="w-full grid grid-cols-[1.1fr_.9fr] gap-[9px] mt-2 max-[500px]:grid-cols-1">
            <div className="grid gap-[9px]">
              {[gi[0]||"https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",gi[1]||"https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80"].map((src,i)=>(
                <div key={i} className={`rounded-[14px] border-[3px] overflow-hidden transition-all duration-[450ms] hover:-translate-y-[3px] hover:scale-[1.015] hover:saturate-[1.08] cursor-pointer ${i===0?"min-h-[180px] sm:min-h-[220px] md:min-h-[250px]":"min-h-[100px] sm:min-h-[116px]"}`}
                  style={{backgroundImage:`url(${src})`,backgroundSize:"cover",backgroundPosition:"center",borderColor:"rgba(255,250,240,.9)",boxShadow:"0 10px 22px rgba(40,30,10,.12)"}} onClick={()=>setLb(src)}/>))}</div>
            <div className="grid gap-[9px]">
              {(gi.slice(2,5).length?gi.slice(2,5):["https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1460364157752-926555421a7e?auto=format&fit=crop&w=900&q=80"]).map((src,i)=>(
                <div key={i} className="min-h-[116px] rounded-[14px] border-[3px] overflow-hidden transition-all duration-[450ms] hover:-translate-y-[3px] hover:scale-[1.015] hover:saturate-[1.08] cursor-pointer"
                  style={{backgroundImage:`url(${src})`,backgroundSize:"cover",backgroundPosition:"center",borderColor:"rgba(255,250,240,.9)",boxShadow:"0 10px 22px rgba(40,30,10,.12)"}} onClick={()=>setLb(src)}/>))}</div></div>
          <button className="mt-4 min-h-[46px] px-6 rounded-full inline-flex items-center gap-2.5 justify-center text-white transition-all hover:-translate-y-0.5" style={{background:"linear-gradient(135deg,var(--olive),#27371f 58%,#8d7139)",border:"1px solid rgba(226,201,130,.64)",boxShadow:"0 12px 35px rgba(0,0,0,.24),inset 0 1px 0 rgba(255,255,255,.16)"}} onClick={()=>{if(gi.length>0)setLb(gi[0])}}>Lihat Semua Foto ✦</button></Section>

        {/* LIGHTBOX with carousel */}
        <AnimatePresence>{lb&&<motion.div className="fixed inset-0 z-[70] flex flex-col items-center justify-center backdrop-blur-[10px] p-5" style={{background:"rgba(4,18,11,.92)"}} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setLb(null)}>
          <button className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl z-10" onClick={()=>setLb(null)} aria-label="Close">✕</button>
          <p className="text-white/60 text-xs mb-3">{gi.indexOf(lb)+1} / {gi.length}</p>
          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={e=>{e.stopPropagation();const idx=gi.indexOf(lb);setLb(gi[idx===0?gi.length-1:idx-1]);}} className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all text-2xl" aria-label="Previous">‹</button>
            <div className="w-[min(78vw,420px)] h-[min(55vh,480px)] rounded-2xl border" style={{backgroundImage:`url(${lb})`,backgroundSize:"cover",backgroundPosition:"center",borderColor:"rgba(226,201,130,.5)",boxShadow:"0 28px 80px rgba(0,0,0,.44)"}} onClick={e=>e.stopPropagation()}/>
            <button onClick={e=>{e.stopPropagation();const idx=gi.indexOf(lb);setLb(gi[idx===gi.length-1?0:idx+1]);}} className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all text-2xl" aria-label="Next">›</button>
          </div>
          <div className="flex gap-1.5 mt-4">{gi.map((_,i)=>(<button key={i} onClick={e=>{e.stopPropagation();setLb(gi[i]);}} className={`rounded-full transition-all ${gi[i]===lb?"w-5 bg-[var(--we-gold,#c6a461)]":"w-2 bg-white/30"}`} style={{height:6}}/>))}</div>
        </motion.div>}</AnimatePresence>

        {/* 6. COUNTDOWN (LIVE) */}
        <DarkSection id="date"><ST dark>✦ Save The Date</ST>
          <div className="w-full p-[44px_18px] rounded-3xl relative overflow-hidden" style={{background:`linear-gradient(150deg,rgba(6,22,15,.92),rgba(18,44,30,.98)),url('https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?auto=format&fit=crop&w=900&q=70') center/cover`,color:"#fff8df",border:"1px solid rgba(226,201,130,.45)",boxShadow:"0 20px 48px rgba(4,18,11,.28)"}}>
            <div className="absolute inset-[14px] rounded-[18px] border pointer-events-none" style={{borderColor:"rgba(226,201,130,.38)"}}/>
            <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(circle at 40% 15%,rgba(226,201,130,.18),transparent 28%)"}}/>
            <div className="relative z-[2]">
              <div className="text-[10px] font-semibold tracking-[.26em] uppercase" style={{color:V.color.gold2}}>Save The Date</div>
              <h2 className="mt-2.5" style={{fontFamily:V.font.display,fontSize:"clamp(33px,8vw,48px)",fontWeight:500}}>{d}</h2>
              {ct.passed?(<p style={{fontFamily:V.font.display,fontSize:20,marginTop:16}}>Alhamdulillah, hari bahagia telah tiba!</p>):(<>
              <div className="grid grid-cols-4 gap-2 my-[26px] mx-0">
                {[{v:ct.d,l:"Days"},{v:ct.h,l:"Hours"},{v:ct.m,l:"Minutes"},{v:ct.s,l:"Seconds"}].map(it=>(<div key={it.l} className="border rounded-xl p-3 max-[380px]:gap-[5px]" style={{background:"rgba(3,14,9,.22)",borderColor:"rgba(226,201,130,.5)",boxShadow:"inset 0 1px 0 rgba(255,255,255,.08)"}}>
                  <b className="block text-[23px] sm:text-[28px]" style={{fontFamily:V.font.display,color:V.color.gold2}}>{String(it.v).padStart(2,"0")}</b>
                  <span className="text-[11px]" style={{fontFamily:V.font.serif,color:"#efe5cc"}}>{it.l}</span></div>))}</div>
              <button className="h-[45px] rounded-full w-[min(250px,88%)] mx-auto text-white" style={{background:"linear-gradient(135deg,rgba(198,164,97,.32),rgba(143,155,115,.48))",border:"1px solid rgba(226,201,130,.58)"}} onClick={()=>window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Wedding of ${gn}&${bn}`)}&dates=${new Date(ed).toISOString().replace(/[-:]/g,"").split(".")[0]}Z`,"_blank")}>Add to Calendar ⎋</button></>)}</div></div>
        </DarkSection>

        {/* 7. EVENTS */}
        <Section id="event" floral floralPos="br"><ST>✦ Event Details</ST>
          <div className="grid grid-cols-2 gap-2.5 w-full max-[450px]:grid-cols-1">
            {[{icon:"♜",title:"Akad Nikah",time:"Sabtu, 10 Januari 2027\n08.00 WIB - Selesai",venue:"Masjid Nurul Iman",addr:"Jl. Anggrek No.10, Jakarta Selatan"},{icon:"∞",title:"Resepsi",time:"Sabtu, 10 Januari 2027\n11.00 - 15.00 WIB",venue:"The Grand Ballroom",addr:"Jl. Sudirman No.88, Jakarta Selatan"}].map((e,i)=>(
              <article key={i} className="p-[24px_12px_18px] rounded-[18px] min-h-[292px] flex flex-col items-center justify-center" style={{background:"rgba(255,252,244,.78)",border:"1px solid rgba(198,164,97,.38)",boxShadow:"0 12px 28px rgba(74,58,26,.1)"}}>
                <div className="text-4xl mb-2.5" style={{color:V.color.goldDark}}>{e.icon}</div><h3 style={{fontFamily:V.font.display,fontSize:24,marginBottom:8,color:"#4b3f2d"}}>{e.title}</h3>
                <p className="text-[11px] leading-[1.7] text-center whitespace-pre-line" style={{color:"#5f574b"}}>{e.time}</p><p className="text-[11px] leading-[1.7] text-center" style={{color:"#5f574b"}}><b>{e.venue}</b><br/>{e.addr}</p>
                <button className="mt-4 h-[38px] px-4 rounded-full text-white text-xs" style={{background:"linear-gradient(135deg,var(--olive),#24361f)",border:"1px solid rgba(198,164,97,.5)"}}>Lihat Lokasi ↗</button></article>))}</div>
        </Section>

        {/* 8. RSVP */}
        <Section id="rsvp"><ST>✦ RSVP</ST>
          <form className="w-full p-[22px] rounded-[20px] text-left" style={{background:"rgba(255,252,244,.74)",border:"1px solid rgba(198,164,97,.36)",boxShadow:"0 14px 34px rgba(74,58,26,.1)"}} onSubmit={e=>{e.preventDefault();submitRsvp()}}>
            <h3 style={{fontFamily:V.font.display,fontSize:24,marginBottom:14,color:"#4b3f2d"}}>Konfirmasi Kehadiran</h3>
            <div className="mb-[13px]"><label className="block font-bold mb-1.5 text-sm" style={{fontFamily:V.font.serif,color:"#6d5a3c"}}>Nama Tamu</label><input placeholder="Bapak/Ibu/Saudara/i" defaultValue={gsn} required className="w-full border rounded-[10px] min-h-[42px] px-3 py-2.5 outline-none transition-all focus:border-[var(--gold)] focus:shadow-[0_0_0_4px_rgba(198,164,97,.12)]" style={{background:"rgba(255,255,255,.58)",borderColor:"rgba(198,164,97,.28)",color:V.color.ink}}/></div>
            <div className="mb-[13px]"><label className="block font-bold mb-1.5 text-sm" style={{fontFamily:V.font.serif,color:"#6d5a3c"}}>Kehadiran</label><div className="grid grid-cols-2 gap-2">{["Hadir","Tidak Hadir"].map(o=>(<button type="button" key={o} onClick={()=>setAtt(o)} className={`h-10 rounded-[10px] border transition-all text-[#62543c] ${att===o?"bg-[linear-gradient(135deg,rgba(198,164,97,.26),rgba(143,155,115,.24))] border-[var(--gold)] text-[#3c331f]":"bg-[rgba(255,250,240,.8)]"}`} style={{borderColor:"rgba(198,164,97,.32)"}}>{o}</button>))}</div></div>
            <div className="mb-[13px]"><label className="block font-bold mb-1.5 text-sm" style={{fontFamily:V.font.serif,color:"#6d5a3c"}}>Ucapan</label><textarea placeholder="Tulis ucapan..." className="w-full border rounded-[10px] min-h-[88px] px-3 py-2.5 outline-none resize-y transition-all focus:border-[var(--gold)] focus:shadow-[0_0_0_4px_rgba(198,164,97,.12)]" style={{background:"rgba(255,255,255,.58)",borderColor:"rgba(198,164,97,.28)",color:V.color.ink}}/></div>
            <button type="submit" className="w-full h-[46px] mt-2 rounded-full text-white" style={{background:"linear-gradient(135deg,var(--olive),#24361f)",border:"1px solid rgba(198,164,97,.55)",boxShadow:"0 12px 26px rgba(31,48,24,.18)"}}>Kirim Konfirmasi ✈</button></form></Section>

        {/* QR GUEST PASS */}
        {data.guestToken && data.guestToken !== 'demo-token' && (
        <Section id="qrpass">
          <div className="absolute right-[-44px] top-[-30px] w-[188px] z-[2] pointer-events-none opacity-[.86] rotate-180"><FloralSvg/></div>
          <ST>✦ QR Guest Pass</ST>
          <div className="w-full p-[28px] rounded-[20px] text-center" style={{background:"rgba(255,252,244,.74)",border:"1px solid rgba(198,164,97,.36)",boxShadow:"0 14px 34px rgba(74,58,26,.1)"}}>
            <p className="text-[13px] mb-4" style={{color:V.color.muted}}>Tunjukkan QR code ini saat hadir di acara untuk check-in</p>
            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(data.guestToken)}`} alt="Guest QR Code" className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] mx-auto rounded-xl border-[6px]" style={{borderColor:"#fff",boxShadow:"0 8px 24px rgba(0,0,0,.1)"}} loading="lazy"/>
            <p className="mt-3 text-xs font-semibold" style={{color:V.color.textDark}}>{gsn}</p>
            <p className="text-[10px] mt-1" style={{color:V.color.muted}}>Kode: {data.guestToken?.substring(0,8)}...</p>
          </div>
        </Section>)}

        {/* 9. GIFT */}
        <Section id="gift" floral floralPos="bl"><ST>✦ Digital Gift</ST>
          <div className="w-full p-[22px] rounded-[20px] text-center" style={{background:"rgba(255,252,244,.74)",border:"1px solid rgba(198,164,97,.36)",boxShadow:"0 14px 34px rgba(74,58,26,.1)"}}>
            <h3 style={{fontFamily:V.font.display,fontSize:25,color:"#4b3f2d"}}>Kirim Hadiah Digital</h3><p className="text-[13px] leading-[1.75]" style={{color:V.color.muted}}>Doa restu Anda adalah hadiah terbaik bagi kami.</p>
            {(banks.length>0?banks:[{bank_name:"BCA",account_number:"123456789101",account_holder:`${gn} ${bn}`}]).map((b:any,i:number)=>(<div key={i} className="border-t pt-3 mt-3 first:border-t-0 first:pt-0 first:mt-0" style={{borderColor:"rgba(198,164,97,.18)"}}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-[10px] sm:gap-[14px] my-2.5 mx-0"><div className="w-[56px] sm:w-[76px] h-[36px] sm:h-[46px] rounded-[10px] grid place-items-center font-extrabold text-[15px] sm:text-[23px] shadow-[inset_0_0_0_1px_rgba(0,0,0,.06)]" style={{background:"#fff",color:"#2167b1"}}>{b.bank_name?.substring(0,4)||"BCA"}</div>
                <div className="flex-1 text-center sm:text-left"><b className="text-[16px] sm:text-[22px] break-all" style={{fontFamily:V.font.display,color:"#4b3f2d"}}>{b.account_number}</b><p className="text-[11px] sm:text-[13px] leading-[1.75]" style={{color:V.color.muted}}>a.n {b.account_holder}</p></div>
                <button onClick={()=>{navigator.clipboard?.writeText(b.account_number);showToast("Nomor rekening berhasil disalin")}} className="h-[34px] sm:h-[38px] px-[12px] sm:px-[14px] rounded-full text-[11px] sm:text-[12px]" style={{background:"rgba(198,164,97,.13)",border:"1px solid rgba(198,164,97,.34)",color:"#6d5a3c"}}>Salin</button></div>
              <img src={`https://api.qrserver.com/v1/create-qr-code/?size=132x132&data=${encodeURIComponent(b.account_number)}`} alt="QR Code" className="w-[132px] h-[132px] rounded-xl border-[8px] mx-auto my-[14px]" style={{borderColor:"#fff",boxShadow:"0 10px 20px rgba(0,0,0,.12)"}} loading="lazy"/></div>))}
          </div></Section>

        {/* 10. WISHES */}
        <Section id="wishes"><ST>✦ Wishes & Ucapan</ST>
          <div className="w-full grid grid-cols-1 gap-3">
            <div className="p-[22px] rounded-[20px] text-left" style={{background:"rgba(255,252,244,.74)",border:"1px solid rgba(198,164,97,.36)",boxShadow:"0 14px 34px rgba(74,58,26,.1)"}}>
              <h3 style={{fontFamily:V.font.display,fontSize:22,marginBottom:12,color:"#4b3f2d"}}>Ucapan Tamu</h3>
              <div className="grid gap-2.5">{wishesData.slice(0,4).map((w:any,i:number)=>(<div key={i} className="p-3 rounded-[14px] grid grid-cols-[36px_1fr] gap-2.5" style={{background:"rgba(255,255,255,.5)",border:"1px solid rgba(198,164,97,.22)"}}>
                <div className="w-9 h-9 rounded-full grid place-items-center text-white font-bold" style={{background:"linear-gradient(135deg,#d9c9a8,#7d8d63)"}}>{w.sender_name?.[0]||"T"}</div>
                <div><b className="text-xs">{w.sender_name||"Tamu"}</b><p className="text-[11px] leading-[1.5] mt-[3px]" style={{color:"#6d6254"}}>{w.message||""}</p><small className="text-[9px]" style={{color:"#9a8c75"}}>Baru saja</small></div></div>))}
                {wishesData.length===0&&<p className="text-[13px]" style={{color:V.color.muted}}>Belum ada ucapan. Jadilah yang pertama ✨</p>}</div></div>
            <form className="p-[22px] rounded-[20px] text-left" style={{background:"rgba(255,252,244,.74)",border:"1px solid rgba(198,164,97,.36)",boxShadow:"0 14px 34px rgba(74,58,26,.1)"}} onSubmit={e=>{e.preventDefault();submitWish()}}>
              <h3 style={{fontFamily:V.font.display,fontSize:22,marginBottom:12,color:"#4b3f2d"}}>Tinggalkan Ucapan</h3>
              <div className="mb-[13px]"><label className="block font-bold mb-1.5 text-sm" style={{fontFamily:V.font.serif,color:"#6d5a3c"}}>Nama</label><input value={wn} onChange={e=>setWn(e.target.value)} placeholder="Nama Anda" required className="w-full border rounded-[10px] min-h-[42px] px-3 py-2.5 outline-none" style={{background:"rgba(255,255,255,.58)",borderColor:"rgba(198,164,97,.28)",color:V.color.ink}}/></div>
              <div className="mb-[13px]"><label className="block font-bold mb-1.5 text-sm" style={{fontFamily:V.font.serif,color:"#6d5a3c"}}>Ucapan</label><textarea value={wt} onChange={e=>setWt(e.target.value)} placeholder="Tulis ucapan..." required className="w-full border rounded-[10px] min-h-[88px] px-3 py-2.5 outline-none resize-y" style={{background:"rgba(255,255,255,.58)",borderColor:"rgba(198,164,97,.28)",color:V.color.ink}}/></div>
              <button type="submit" className="w-full h-[46px] mt-2 rounded-full text-white" style={{background:"linear-gradient(135deg,var(--olive),#24361f)",border:"1px solid rgba(198,164,97,.55)",boxShadow:"0 12px 26px rgba(31,48,24,.18)"}}>Kirim Ucapan ✈</button></form></div></Section>

        {/* 11. CLOSING */}
        <DarkSection id="closing">
          <div className="w-full min-h-[520px] rounded-3xl relative overflow-hidden grid place-items-center p-[32px_22px] border animate-[closingZoom_18s_ease-in-out_infinite_alternate]" style={{background:`linear-gradient(180deg,rgba(6,22,15,.42),rgba(6,22,15,.78)),url('https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=70') center/cover`,borderColor:"rgba(226,201,130,.38)"}}>
            <div className="absolute inset-[14px] rounded-[18px] border pointer-events-none" style={{borderColor:"rgba(226,201,130,.38)"}}/>
            <div className="relative z-[3] flex flex-col justify-center items-center text-center">
              <p className="max-w-[330px] text-[13px] leading-[1.75]" style={{color:"#e6dcc8"}}>Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.</p>
              <p className="mt-7 text-[30px]" style={{fontFamily:V.font.script,color:V.color.gold2}}>With love,</p>
              <OT dark>{gn} & {bn}</OT><GoldDivider/>
              <div className="flex gap-2.5 mt-[22px] justify-center">{["◎","f","𝕏","♥"].map((c,i)=>(<span key={i} className="w-[31px] h-[31px] rounded-full grid place-items-center" style={{border:"1px solid rgba(226,201,130,.52)",color:V.color.gold2,background:"rgba(0,0,0,.15)"}}>{c}</span>))}</div>
              <p className="text-[10px] mt-[26px]" style={{color:"#d8c9a9"}}>© 2027 {gn} & {bn}. All rights reserved.</p></div></div>
        </DarkSection></main>

      {/* Bottom Nav */}
      <nav className="fixed left-1/2 bottom-[22px] -translate-x-1/2 z-[45] h-12 rounded-full flex items-center justify-around backdrop-blur-[18px]" role="navigation" aria-label="Navigasi undangan" style={{width:"min(420px,calc(100% - 78px))",background:"rgba(255,250,240,.72)",border:"1px solid rgba(198,164,97,.36)",boxShadow:"0 16px 34px rgba(65,45,18,.16)"}}>
        {[{id:"blessing",icon:"✦",label:"Blessing"},{id:"couple",icon:"♡",label:"Couple"},{id:"story",icon:"⌁",label:"Story"},{id:"event",icon:"⌖",label:"Events"},{id:"rsvp",icon:"✉",label:"RSVP"}].map(l=>(
          <a key={l.id} href={`#${l.id}`} onClick={e=>{e.preventDefault();document.getElementById(l.id)?.scrollIntoView({behavior:"smooth"});}} aria-label={l.label}
            className={`w-11 h-11 grid place-items-center rounded-full text-[16px] transition-all ${activeNav===l.id?"bg-[rgba(198,164,97,.2)]":""}`} style={{color:"#6a604b"}}>{l.icon}</a>))}</nav>

      </motion.div>}</AnimatePresence>

      {/* Toast */}
      <div className={`fixed left-1/2 bottom-[92px] -translate-x-1/2 z-[60] rounded-full px-[18px] py-3 shadow-[0_14px_30px_rgba(0,0,0,.25)] pointer-events-none transition-all duration-[350ms] ${toast?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}
        style={{background:"rgba(13,37,24,.94)",color:"#fff8df",border:"1px solid rgba(226,201,130,.5)"}}
        role="status" aria-live="polite">{toast}</div>

      <style>{`
        /* ═══ DARK MODE ═══ */
        :root {
          --we-forest: #0d2518; --we-forest2: #102c1d; --we-deep: #06160f;
          --we-sage: #8f9b73; --we-olive: #4f5f38;
          --we-gold: #b8933a; --we-gold2: #e2c982; --we-goldDark: #8d7139;
          --we-ivory: #fbf6ea; --we-cream: #f4ead8;
          --we-ink: #2f2a22; --we-muted: #746b5d; --we-white: #fffef8;
          --we-textDark: #4b3f2d; --we-textMuted: #645b4d;
          --we-shadow-soft: 0 12px 34px rgba(44,35,20,.12);
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --we-ink: #fff8df; --we-muted: #c8ceb0;
            --we-textDark: #e6dcc8; --we-textMuted: #b8ae98;
            --we-cream: #1a2a1a; --we-ivory: #0d2518;
            --we-shadow-soft: 0 12px 34px rgba(0,0,0,.30);
          }
        }
        /* ═══ RESPONSIVE DESKTOP ═══ */
        @media (min-width: 768px) {
          .app-shell-resp { width: min(100%, 640px) !important; }
          .section-card { padding: 38px 32px !important; }
        }
        @media (min-width: 1024px) {
          .app-shell-resp { width: min(100%, 720px) !important; }
        }
        @media (min-width: 1280px) {
          .app-shell-resp { width: min(100%, 780px) !important; }
        }
        :focus-visible { outline: 3px solid var(--we-gold, #b8933a) !important; outline-offset: 2px; }
        @media (prefers-reduced-motion: reduce) {
          *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}
        }
        /* ═══ ANIMATIONS ═══ */
        @keyframes slowSpin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
        @keyframes closingZoom{from{background-size:auto,105%}to{background-size:auto,116%}}
        html{scroll-behavior:smooth}
      `}</style>
    </div>);
}
