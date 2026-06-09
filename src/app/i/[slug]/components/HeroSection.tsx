"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Volume2, VolumeX, Music } from "lucide-react";

function useCountdown(targetDate: string) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const update = () => {
      const diff = target - Date.now();
      if (diff <= 0) { setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTime({ days: Math.floor(diff / 86400000), hours: Math.floor((diff % 86400000) / 3600000), minutes: Math.floor((diff % 3600000) / 60000), seconds: Math.floor((diff % 60000) / 1000) });
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, [targetDate]);
  return time;
}

export default function HeroSection({ invitation }: { invitation?: any }) {
  const inv = invitation || { groom_name: 'Andhika', bride_name: 'Laila', event_date: '2026-08-15', settings: {} };
  const heroUrl = inv?.settings?.heroImage || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80';
  const countdown = useCountdown(inv.event_date || '2026-08-15');
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    document.getElementById(`section-${id}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  const sections = [
    { id: 'couple', label: 'Mempelai' },
    { id: 'event', label: 'Acara' },
    { id: 'story', label: 'Cerita' },
    { id: 'gallery', label: 'Galeri' },
    { id: 'rsvp', label: 'RSVP' },
    { id: 'gift', label: 'Hadiah' },
    { id: 'wishes', label: 'Ucapan' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with parallax feel */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroUrl})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#22382D]/60 via-[#22382D]/40 to-[#F7F1E6]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-20 pb-36">
        {/* Date */}
        <motion.p
          className="text-[#C9A86A] text-xs tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {inv.event_date}
        </motion.p>

        {/* Names */}
        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F7F1E6] mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {inv.groom_name} <span className="text-[#C9A86A]">&</span> {inv.bride_name}
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          className="w-24 h-[1px] bg-[#C9A86A] mx-auto mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />

        {/* Verse */}
        <motion.p
          className="text-[#A9B89B] text-sm max-w-md mx-auto leading-relaxed italic mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          &ldquo;Dan di antara tanda-tanda kekuasaan-Nya, Dia menciptakan pasangan-pasangan untukmu agar kamu merasa tenteram kepadanya&rdquo;
        </motion.p>

        {/* Countdown */}
        <motion.div
          className="flex justify-center gap-3 md:gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {[
            { value: countdown.days, label: 'Hari' },
            { value: countdown.hours, label: 'Jam' },
            { value: countdown.minutes, label: 'Menit' },
            { value: countdown.seconds, label: 'Detik' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="glass rounded-xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-1">
                <span className="font-display text-2xl md:text-3xl text-[#C9A86A]">
                  {String(item.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-[#A9B89B] text-xs">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Elegant CTA buttons */}
        <motion.div
          className="flex gap-3 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.button
            onClick={copyLink}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C9A86A]/20 border border-[#C9A86A]/40 text-[#F7F1E6] text-sm backdrop-blur-sm hover:bg-[#C9A86A]/30 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Heart size={14} /> {copied ? 'Link Tersalin' : 'Bagikan Undangan'}
          </motion.button>
          <motion.button
            onClick={() => scrollTo('rsvp')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C9A86A] text-white text-sm hover:bg-[#b8974f] transition-all duration-300 shadow-lg shadow-[#C9A86A]/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            RSVP
          </motion.button>
        </motion.div>
      </div>

      {/* Sticky Quick Nav — elegant bottom bar */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 z-40 bg-[#22382D]/90 backdrop-blur-md border-t border-[#C9A86A]/10"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="flex overflow-x-auto gap-0 px-2 py-2 justify-center">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="flex-shrink-0 px-3 py-2 text-xs text-[#A9B89B] hover:text-[#C9A86A] transition-colors"
            >
              {s.label}
            </button>
          ))}
        </div>
      </motion.nav>
    </section>
  );
}
