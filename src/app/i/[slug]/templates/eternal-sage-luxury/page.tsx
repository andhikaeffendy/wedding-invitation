"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music } from "lucide-react";
import CoverSection from "./components/CoverSection";
import BlessingSection from "./components/BlessingSection";
import HeroSection from "./components/HeroSection";
import CoupleSection from "./components/CoupleSection";
import StorySection from "./components/StorySection";
import GallerySection from "./components/GallerySection";
import CountdownSection from "./components/CountdownSection";
import EventsSection from "./components/EventsSection";
import RsvpSection from "./components/RsvpSection";
import GiftSection from "./components/GiftSection";
import WishesSection from "./components/WishesSection";
import ClosingSection from "./components/ClosingSection";
import { TOKENS } from "./styles";
import type { TemplateData } from "@/lib/template-types";

interface Props { data: TemplateData; }

/** Snap page wrapper — each page has ken burns bg, shimmer, section label */
function SnapPage({ id, label, children, minHeight = "80vh", bg, dark = false }: {
  id: string; label: string; children: React.ReactNode; minHeight?: string; bg?: string; dark?: boolean;
}) {
  return (
    <div id={id} className="snap-page relative flex items-center justify-center overflow-hidden"
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always", minHeight, background: bg }}>

      {/* Background ken burns shimmer */}
      {bg && (
        <motion.div className="absolute inset-0 pointer-events-none"
          animate={{ opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: `radial-gradient(ellipse at 30% 40%, ${TOKENS.color.gold}15 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, ${TOKENS.color.gold}10 0%, transparent 50%)`,
          }} />
      )}

      {/* Section label */}
      <div className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="h-[1px] w-6 sm:w-10" style={{ background: `linear-gradient(90deg, transparent, ${TOKENS.color.gold}${dark ? "50" : "30"})` }} />
          <motion.span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase"
            style={{ color: dark ? "rgba(255,255,255,0.6)" : TOKENS.color.gold }}
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
            {label}
          </motion.span>
          <div className="h-[1px] w-6 sm:w-10" style={{ background: `linear-gradient(90deg, ${TOKENS.color.gold}${dark ? "50" : "30"}, transparent)` }} />
        </div>
      </div>

      {children}
    </div>
  );
}

/** Snap dots indicator */
function SnapDots({ sections, activeIndex }: { sections: string[]; activeIndex: number }) {
  return (
    <div className="fixed right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2 pointer-events-auto">
      {sections.map((_, i) => (
        <button key={i}
          onClick={() => {
            const ids = ["hero","couple","countdown","events","rsvp","closing"];
            document.getElementById(ids[i])?.scrollIntoView({ behavior: "smooth" });
          }}
          className="transition-all duration-300 rounded-full hover:opacity-80"
          style={{
            width: i === activeIndex ? 10 : 5, height: i === activeIndex ? 10 : 5,
            background: i === activeIndex ? TOKENS.color.gold : `${TOKENS.color.gold}50`,
            opacity: i === activeIndex ? 1 : 0.45,
            boxShadow: i === activeIndex ? `0 0 8px ${TOKENS.color.gold}40` : "none",
          }}
          aria-label={`Go to section ${i + 1}`} />
      ))}
    </div>
  );
}

export default function EternalSageLuxuryPage({ data }: Props) {
  const inv = data.invitation;
  const settings = (inv?.settings as Record<string, string>) || {};
  const guest = data.guest;

  const coverImg = settings.coverImage || "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80";
  const heroImg = settings.heroImage || coverImg;
  const groomPhoto = settings.groomPhoto || "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80";
  const bridePhoto = settings.bridePhoto || "https://images.unsplash.com/photo-1594552073388-6e3f45e83df6?w=400&q=80";
  const groomName = inv?.groom_name || "Rafael";
  const brideName = inv?.bride_name || "Florence";
  const groomFull = inv?.groom_full_name || "";
  const brideFull = inv?.bride_full_name || "";
  const groomParents = inv?.groom_parents || "Putra dari Bpk. Ir. Budi Santoso & Ibu Dewi Kartika";
  const brideParents = inv?.bride_parents || "Putri dari Bpk. H. Ahmad Fauzi & Ibu Hj. Siti Mariam";
  const eventDate = inv?.event_date || "2026-08-15";
  const guestName = guest?.guest_name || "Bapak/Ibu/Saudara/i";

  const [open, setOpen] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [activeSnap, setActiveSnap] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const snapIds = ["hero", "couple", "countdown", "events", "rsvp", "closing"];

  useEffect(() => {
    const url = settings.musicUrl || "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    const a = new Audio(url); a.loop = true; a.volume = 0.3;
    setAudio(a);
    return () => { a.pause(); a.src = ""; };
  }, [settings.musicUrl]);

  const toggleMusic = useCallback(() => {
    if (!audio) return;
    musicOn ? (audio.pause(), setMusicOn(false)) : (audio.play().catch(() => {}), setMusicOn(true));
  }, [audio, musicOn]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // Track active snap section
  useEffect(() => {
    const handler = () => {
      for (let i = snapIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(snapIds[i]);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.5) { setActiveSnap(i); break; }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { if (open) setTimeout(() => mainRef.current?.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }), 100); }, [open]);

  const galleryImages = (data.gallery || []) as string[];
  const stories = (data.loveStories || []) as any[];
  const wishes = (data.wishes || []) as any[];
  const banks = (data.bankAccounts || []) as any[];

  return (
    <main ref={mainRef} className="relative w-full overflow-x-hidden"
      style={{ background: TOKENS.color.cream, color: TOKENS.color.text, fontFamily: TOKENS.font.body }}>
      <style>{`
        /* SNAP — mobile only, proximity (gentle but guides) */
        @media (max-width: 767px) {
          .snap-page { scroll-snap-align: start; scroll-snap-stop: always; }
        }
        @media (min-width: 768px) {
          .snap-page { scroll-snap-align: unset; }
        }
        /* Smooth scroll */
        html { scroll-behavior: smooth; }
        @keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.15); } }
        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          *,*::before,*::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
          .snap-page { scroll-snap-align: unset !important; }
        }
      `}</style>

      {/* COVER */}
      <AnimatePresence>
        {!open && <CoverSection coverImg={coverImg} groomName={groomName} brideName={brideName} eventDate={eventDate} guestName={guestName} onOpen={() => setOpen(true)} musicOn={musicOn} onToggleMusic={toggleMusic} />}
      </AnimatePresence>

      {/* Music + Dots */}
      {open && <>
        <motion.button onClick={toggleMusic} className="fixed top-4 right-4 z-30 w-10 h-10 rounded-full shadow-xl flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(16px)", border: `1.5px solid ${TOKENS.color.gold}25` }}
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.1 }} aria-label="Music">
          <Music size={15} style={{ color: musicOn ? TOKENS.color.gold : TOKENS.color.muted, animation: musicOn ? "pulse 2.5s ease-in-out infinite" : "none" }} />
        </motion.button>
        <SnapDots sections={snapIds} activeIndex={activeSnap} />
      </>}

      {/* CONTENT */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <SnapPage id="hero" label="✦ The Wedding ✦" minHeight="85vh">
              <HeroSection heroImg={heroImg} groomName={groomName} brideName={brideName} eventDate={eventDate} onScrollTo={scrollTo} />
            </SnapPage>

            <BlessingSection groomName={groomName} brideName={brideName} />

            <SnapPage id="couple" label="✦ Mempelai ✦" minHeight="80vh">
              <CoupleSection groomPhoto={groomPhoto} groomName={groomName} groomFull={groomFull} groomParents={groomParents} bridePhoto={bridePhoto} brideName={brideName} brideFull={brideFull} brideParents={brideParents} />
            </SnapPage>

            <StorySection stories={stories} />

            <SnapPage id="countdown" label="✦ Save the Date ✦" minHeight="70vh" bg="#243B2A" dark>
              <CountdownSection eventDate={eventDate} groomName={groomName} brideName={brideName} />
            </SnapPage>

            <SnapPage id="events" label="✦ Rangkaian Acara ✦" minHeight="80vh">
              <EventsSection />
            </SnapPage>

            {galleryImages.length > 0 && <GallerySection images={galleryImages} />}

            <SnapPage id="rsvp" label="✦ Konfirmasi ✦" minHeight="75vh">
              <RsvpSection guestName={guestName} />
            </SnapPage>

            {banks.length > 0 && <GiftSection banks={banks} />}
            <WishesSection wishes={wishes} />

            <SnapPage id="closing" label="✦ Final Words ✦" minHeight="100vh" bg="#243B2A" dark>
              <ClosingSection groomName={groomName} brideName={brideName} groomFull={groomFull} brideFull={brideFull} groomParents={groomParents} brideParents={brideParents} />
            </SnapPage>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
