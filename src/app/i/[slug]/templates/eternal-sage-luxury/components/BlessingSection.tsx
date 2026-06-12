"use client";
import { motion } from "framer-motion";
import { TOKENS } from "../styles";

interface BlessingSectionProps {
  groomName: string;
  brideName: string;
}

export default function BlessingSection({ groomName, brideName }: BlessingSectionProps) {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden" style={{ background: TOKENS.color.cream }}>
      {/* Background image subtle */}
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: `url(${TOKENS.bg.signature})` }} />

      {/* Ornate Frame Container */}
      <div className="relative max-w-xl mx-auto">
        {/* Corner ornaments SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <line x1="5" y1="5" x2="25" y2="5" stroke={TOKENS.color.gold} strokeWidth="0.5" opacity="0.4"/>
          <line x1="5" y1="5" x2="5" y2="25" stroke={TOKENS.color.gold} strokeWidth="0.5" opacity="0.4"/>
          <path d="M8 8L15 8M8 8L8 15" stroke={TOKENS.color.gold} strokeWidth="1.2" opacity="0.6"/>
          <circle cx="6" cy="6" r="1" fill={TOKENS.color.gold} opacity="0.5"/>

          <line x1="95" y1="5" x2="75" y2="5" stroke={TOKENS.color.gold} strokeWidth="0.5" opacity="0.4"/>
          <line x1="95" y1="5" x2="95" y2="25" stroke={TOKENS.color.gold} strokeWidth="0.5" opacity="0.4"/>
          <path d="M92 8L85 8M92 8L92 15" stroke={TOKENS.color.gold} strokeWidth="1.2" opacity="0.6"/>
          <circle cx="94" cy="6" r="1" fill={TOKENS.color.gold} opacity="0.5"/>

          <line x1="5" y1="95" x2="25" y2="95" stroke={TOKENS.color.gold} strokeWidth="0.5" opacity="0.4"/>
          <line x1="5" y1="95" x2="5" y2="75" stroke={TOKENS.color.gold} strokeWidth="0.5" opacity="0.4"/>
          <path d="M8 92L15 92M8 92L8 85" stroke={TOKENS.color.gold} strokeWidth="1.2" opacity="0.6"/>

          <line x1="95" y1="95" x2="75" y2="95" stroke={TOKENS.color.gold} strokeWidth="0.5" opacity="0.4"/>
          <line x1="95" y1="95" x2="95" y2="75" stroke={TOKENS.color.gold} strokeWidth="0.5" opacity="0.4"/>
          <path d="M92 92L85 92M92 92L92 85" stroke={TOKENS.color.gold} strokeWidth="1.2" opacity="0.6"/>

          {/* Floral side decorations */}
          <g transform="translate(7,40)" opacity="0.15">
            <path d="M0 10C-3 5 2 0 6 2C3 4 2 8 0 10Z" fill={TOKENS.color.gold}/>
            <path d="M0 20C-2 25 2 28 4 25C2 23 0 21 0 20Z" fill={TOKENS.color.gold}/>
          </g>
          <g transform="translate(93,60) scale(-1,1)" opacity="0.15">
            <path d="M0 10C-3 5 2 0 6 2C3 4 2 8 0 10Z" fill={TOKENS.color.gold}/>
            <path d="M0 20C-2 25 2 28 4 25C2 23 0 21 0 20Z" fill={TOKENS.color.gold}/>
          </g>
        </svg>

        <div className="p-6 sm:p-10">
          <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            {/* Arabic Bismillah */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6"
              style={{ fontFamily: TOKENS.font.display, color: TOKENS.color.gold }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
            </motion.p>

            {/* Ornament */}
            <div className="flex items-center justify-center gap-2 my-4 sm:my-6">
              <div className="h-[1px] w-8 sm:w-12" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}40,transparent)` }}/>
              <span style={{ color: TOKENS.color.gold }}>🌿</span>
              <div className="h-[1px] w-8 sm:w-12" style={{ background: `linear-gradient(90deg,transparent,${TOKENS.color.gold}40,transparent)` }}/>
            </div>

            {/* Quran Quote */}
            <p className="text-sm sm:text-base italic leading-relaxed max-w-lg mx-auto" style={{ color: TOKENS.color.text, opacity: 0.7, fontFamily: TOKENS.font.display }}>
              &ldquo;Dan di antara tanda-tanda kekuasaan-Nya, Dia menciptakan pasangan-pasangan untukmu agar kamu merasa tenteram kepadanya. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.&rdquo;
            </p>
            <p className="text-xs mt-4 tracking-wide" style={{ color: TOKENS.color.gold }}>
              — QS. Ar-Rum: 21
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
