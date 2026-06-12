"use client";import { motion } from "framer-motion";import { B } from "../styles";

interface Props { groomPhoto:string;groomName:string;groomFull?:string;groomParents?:string;bridePhoto:string;brideName:string;brideFull?:string;brideParents?:string; }

export default function CoupleSection({ groomPhoto,groomName,groomFull,groomParents,bridePhoto,brideName,brideFull,brideParents }: Props) {
  return(
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden" style={{background:B.color.cream}}>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-2" style={{color:B.color.secondary}}>Bismillahirrahmanirrahim</p>
        <p className="text-xs sm:text-sm mb-8" style={{color:B.color.text,opacity:0.5}}>Dengan memohon rahmat dan ridho Allah SWT</p>
        <div className="relative grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {[{photo:groomPhoto,name:groomName,full:groomFull,parents:groomParents},{photo:bridePhoto,name:brideName,full:brideFull,parents:brideParents}].map((p,i)=>(
            <motion.div key={i} className="flex flex-col items-center p-6 sm:p-8 rounded-3xl" style={{background:"rgba(255,255,255,0.7)",backdropFilter:"blur(8px)",border:`1px solid ${B.color.secondary}10`,boxShadow:B.shadow.card}}
              initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:i*0.15}}>
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-4" style={{border:`3px solid ${B.color.secondary}30`}}>
                <img src={p.photo} alt={p.name} className="w-full h-full object-cover"/></div>
              <h3 className="text-2xl sm:text-3xl mb-1" style={{fontFamily:B.font.script,color:B.color.primary}}>{p.name}</h3>
              {p.full&&<p className="text-xs sm:text-sm" style={{color:B.color.text,opacity:0.6,fontFamily:B.font.body}}>{p.full}</p>}
              {p.parents&&<p className="text-[11px] sm:text-xs mt-2 max-w-xs" style={{color:B.color.text,opacity:0.5}}>{p.parents}</p>}
            </motion.div>
          ))}
          <motion.div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.6,delay:0.4,type:"spring"}}>
            <span className="text-3xl sm:text-4xl font-light" style={{color:B.color.secondary,fontFamily:B.font.script}}>&amp;</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
