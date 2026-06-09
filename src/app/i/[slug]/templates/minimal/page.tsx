"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MapPin, Clock, Calendar, X, Copy, Check, Gift, Send, Music } from "lucide-react";

// ===== MINIMAL DARK TEMPLATE =====
// Dark background, bold white/champagne typography, zero ornaments
// Clean lines, large images, brutalist layout, progressive reveal
// Inspired by modern luxury fashion websites — NOT a traditional wedding invite

interface Props { data: any; }

export default function MinimalTemplate({ data }: Props) {
  const { invitation: inv, guest, gallery, wishes: initialWishes, bankAccounts } = data;
  const guestToken = data.guestToken || '';
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [page, setPage] = useState(0);

  const [rsvpStatus, setRsvpStatus] = useState(guest?.rsvp_status || null);
  const [pax, setPax] = useState(guest?.pax_confirmed || 1);
  const [rsvpDone, setRsvpDone] = useState(!!guest?.rsvp_status);
  const [wishes, setWishes] = useState(initialWishes || []);
  const [wishName, setWishName] = useState("");
  const [wishText, setWishText] = useState("");
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const images = gallery || Array(6).fill('https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80');
  const banks = bankAccounts?.length ? bankAccounts : [{ bank_name: 'BCA', account_number: '1234567890', account_holder: 'Laila Nur Azizah' }];

  const toggleMusic = () => {
    if (!audioRef.current) { audioRef.current = new Audio(inv?.settings?.musicUrl || 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); audioRef.current.loop = true; audioRef.current.volume = 0.2; }
    musicOn ? audioRef.current.pause() : audioRef.current.play().catch(() => {});
    setMusicOn(!musicOn);
  };

  const submitRsvp = async () => {
    if (!rsvpStatus) return;
    await fetch('/api/public/invitation/andhika-laila', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ guestToken, status: rsvpStatus, paxConfirmed: pax }) });
    setRsvpDone(true);
  };

  const submitWish = async () => {
    if (!wishName.trim() || !wishText.trim()) return;
    const res = await fetch('/api/public/invitation/andhika-laila', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ senderName: wishName, text: wishText }) });
    const d = await res.json(); if (d.success) { setWishes([d.wish, ...wishes]); setWishText(''); }
  };

  // Countdown
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const target = new Date(inv?.event_date || '2026-08-15').getTime();
    const u = () => {
      const d = target - Date.now();
      if (d <= 0) return setT({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setT({ days: Math.floor(d / 86400000), hours: Math.floor((d % 86400000) / 3600000), minutes: Math.floor((d % 3600000) / 60000), seconds: Math.floor((d % 60000) / 1000) });
    };
    u(); const i = setInterval(u, 1000); return () => clearInterval(i);
  }, [inv?.event_date]);

  if (!visible) return null;

  const pages = [
    // Page 0: Opening
    <motion.section key={0} className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#111] text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="text-center max-w-lg">
        <motion.p className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-6" initial={{ y: 20 }} animate={{ y: 0 }}>{inv?.event_date}</motion.p>
        <motion.h1 className="text-5xl md:text-8xl font-light tracking-tight leading-none mb-8" initial={{ y: 30 }} animate={{ y: 0 }} transition={{ delay: 0.2 }}>
          {inv?.groom_name}<br /><span className="text-[#D4AF37]">&</span><br />{inv?.bride_name}
        </motion.h1>
        <motion.p className="text-gray-400 text-sm mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Kepada</motion.p>
        <motion.p className="text-2xl font-light mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>{guest?.guest_name || 'Bapak/Ibu/Saudara/i'}</motion.p>
        <motion.button onClick={() => setPage(1)} className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 text-sm tracking-wider" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          BUKA UNDANGAN
        </motion.button>
      </div>
    </motion.section>,

    // Page 1: Hero + Countdown
    <motion.section key={1} className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#111] text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="text-center">
        <div className="flex justify-center gap-4 md:gap-8 mb-12">
          {[{ v: t.days, l: 'HARI' }, { v: t.hours, l: 'JAM' }, { v: t.minutes, l: 'MENIT' }, { v: t.seconds, l: 'DETIK' }].map(item => (
            <div key={item.l} className="text-center"><div className="w-16 h-16 md:w-20 md:h-20 border border-[#D4AF37]/30 flex items-center justify-center"><span className="text-2xl md:text-3xl font-light text-[#D4AF37]">{String(item.v).padStart(2, '0')}</span></div><span className="text-gray-500 text-xs tracking-wider mt-2 block">{item.l}</span></div>
          ))}
        </div>
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-4">{inv?.groom_name} <span className="text-[#D4AF37]">&</span> {inv?.bride_name}</h2>
        <p className="text-gray-500 text-sm mb-8">{inv?.event_date}</p>
        <div className="flex gap-3 justify-center">
          <button onClick={() => setPage(2)} className="px-6 py-3 border border-white/20 text-white hover:border-[#D4AF37] transition-colors text-sm tracking-wider">ACARA</button>
          <button onClick={() => setPage(3)} className="px-6 py-3 bg-[#D4AF37] text-black text-sm tracking-wider">RSVP</button>
        </div>
      </div>
    </motion.section>,

    // Page 2: Event
    <motion.section key={2} className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#111] text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="max-w-lg w-full">
        <h2 className="text-3xl font-light tracking-wide mb-10 text-center">ACARA</h2>
        {[{ title: 'AKAD NIKAH', time: '08:00 — 10:00 WIB', venue: 'Masjid Agung Al-Muhajirin', addr: 'Jl. Ahmad Yani No. 15, Bandung' }, { title: 'RESEPSI', time: '11:00 — 17:00 WIB', venue: 'Gedung Graha Wedding Garden', addr: 'Jl. Sukajadi No. 200, Bandung' }].map((ev, i) => (
          <div key={i} className="border border-white/10 p-6 mb-4">
            <p className="text-[#D4AF37] text-xs tracking-wider mb-2">{ev.title}</p>
            <p className="text-lg font-light mb-1">{ev.time}</p>
            <p className="text-gray-400 text-sm">{ev.venue}</p>
            <p className="text-gray-600 text-xs">{ev.addr}</p>
          </div>
        ))}
        <div className="flex gap-3 justify-center mt-8">
          <button onClick={() => setPage(1)} className="px-6 py-3 border border-white/20 text-white text-sm tracking-wider">← KEMBALI</button>
          <button onClick={() => setPage(3)} className="px-6 py-3 bg-[#D4AF37] text-black text-sm tracking-wider">RSVP →</button>
        </div>
      </div>
    </motion.section>,

    // Page 3: RSVP
    <motion.section key={3} className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#111] text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-light tracking-wide mb-10 text-center">RSVP</h2>
        {rsvpDone ? (
          <div className="text-center p-8 border border-[#D4AF37]/30"><p className="text-2xl font-light text-[#D4AF37]">TERIMA KASIH</p></div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {[{ v: 'Hadir', l: 'Hadir' }, { v: 'Tidak Hadir', l: 'Tidak Hadir' }].map(o => (
                <button key={o.v} onClick={() => setRsvpStatus(o.v as any)} className={`p-4 border text-sm tracking-wider transition-all ${rsvpStatus === o.v ? 'border-[#D4AF37] bg-[#D4AF37] text-black' : 'border-white/20 hover:border-white/50'}`}>{o.l}</button>
              ))}
            </div>
            {rsvpStatus === 'Hadir' && (
              <div className="flex items-center justify-center gap-3 p-3 border border-white/10">
                <button onClick={() => setPax(Math.max(1, pax - 1))} className="w-8 h-8 border border-white/20 text-white">-</button>
                <span className="text-xl font-light w-10 text-center">{pax}</span>
                <button onClick={() => setPax(pax + 1)} className="w-8 h-8 border border-white/20 text-white">+</button>
                <span className="text-gray-500 text-xs">pax</span>
              </div>
            )}
            {rsvpStatus && <button onClick={submitRsvp} className="w-full py-4 bg-[#D4AF37] text-black text-sm tracking-wider">KONFIRMASI</button>}
          </div>
        )}
        <div className="flex justify-center mt-8 gap-3">
          <button onClick={() => setPage(2)} className="px-6 py-3 border border-white/20 text-white text-sm tracking-wider">← KEMBALI</button>
          <button onClick={() => setPage(4)} className="px-6 py-3 border border-white/20 text-white text-sm tracking-wider">GALERI →</button>
        </div>
      </div>
    </motion.section>,

    // Page 4: Gallery
    <motion.section key={4} className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#111] text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl font-light tracking-wide mb-10 text-center">GALERI</h2>
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          {images.map((img: any, i: number) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img src={typeof img === 'string' ? img : img.url || img.public_url} alt={`Gallery ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 gap-3">
          <button onClick={() => setPage(3)} className="px-6 py-3 border border-white/20 text-white text-sm">← KEMBALI</button>
          <button onClick={() => setPage(5)} className="px-6 py-3 border border-white/20 text-white text-sm">UCAPAN →</button>
        </div>
      </div>
    </motion.section>,

    // Page 5: Wishes
    <motion.section key={5} className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#111] text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-light tracking-wide mb-10 text-center">UCAPAN</h2>
        <div className="space-y-3 mb-8">
          <input value={wishName} onChange={e => setWishName(e.target.value)} placeholder="NAMA" className="w-full p-4 bg-transparent border border-white/20 text-white placeholder-gray-600 text-sm tracking-wider" />
          <textarea value={wishText} onChange={e => setWishText(e.target.value)} placeholder="UCAPAN & DOA" className="w-full p-4 bg-transparent border border-white/20 text-white placeholder-gray-600 text-sm tracking-wider" rows={3} />
          <button onClick={submitWish} className="w-full py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all text-sm tracking-wider flex items-center justify-center gap-2"><Send size={14} /> KIRIM</button>
        </div>
        <div className="space-y-2">
          {wishes.map((w: any, i: number) => (
            <div key={i} className="border border-white/10 p-4"><p className="text-[#D4AF37] text-xs tracking-wider mb-1">{w.sender_name}</p><p className="text-gray-400 text-sm">{w.message}</p></div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button onClick={() => setPage(4)} className="px-6 py-3 border border-white/20 text-white text-sm">← GALERI</button>
        </div>
      </div>
    </motion.section>,

    // Page 6: Gift + Closing
    <motion.section key={6} className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[#111] text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-light tracking-wide mb-10 text-center">HADIAH</h2>
        <div className="space-y-3 mb-16">
          {banks.map((bank: any, i: number) => (
            <div key={i} className="flex items-center justify-between p-4 border border-white/10">
              <div><p className="text-sm tracking-wider">{bank.bank_name}</p><p className="text-[#D4AF37] font-mono">{bank.account_number}</p></div>
              <button onClick={() => { navigator.clipboard.writeText(bank.account_number); setCopiedIdx(i); setTimeout(() => setCopiedIdx(null), 1500); }} className={`px-3 py-2 border text-xs tracking-wider ${copiedIdx === i ? 'border-[#D4AF37] text-[#D4AF37]' : 'border-white/20 text-gray-500'}`}>{copiedIdx === i ? 'COPIED' : 'COPY'}</button>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-4xl font-light mb-4 tracking-wider">TERIMA KASIH</p>
          <p className="text-2xl font-light text-[#D4AF37]">{inv?.groom_name} & {inv?.bride_name}</p>
        </div>
      </div>
    </motion.section>,
  ];

  return (
    <main className="relative w-full overflow-x-hidden bg-[#111]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Music button */}
      <button onClick={toggleMusic} className="fixed top-6 right-6 z-20 w-10 h-10 border border-[#D4AF37]/30 flex items-center justify-center">
        <Music size={16} className={musicOn ? "text-[#D4AF37]" : "text-gray-600"} />
      </button>

      {/* Page indicator */}
      {page > 0 && (
        <div className="fixed bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
          {pages.map((_, i) => (
            <button key={i} onClick={() => setPage(i)} className={`w-2 h-2 rounded-full transition-all ${i === page ? 'bg-[#D4AF37] scale-125' : 'bg-white/20'}`} />
          ))}
        </div>
      )}

      {pages[page]}
    </main>
  );
}
