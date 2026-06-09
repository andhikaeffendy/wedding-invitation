"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MapPin, Clock, Calendar, X, Copy, Check, Gift, Send, Music, ChevronRight } from "lucide-react";

// ===== CLASSIC ROSE GOLD TEMPLATE =====
// Dusty pink, rose gold, cream palette
// Romantic, elegant, floral feel with side-swipe opening
// Different layout: side-by-side cards, horizontal scroll gallery, envelope-style RSVP

interface Props { data: any; }

export default function RoseGoldTemplate({ data }: Props) {
  const { invitation: inv, guest, gallery, wishes: initialWishes, bankAccounts } = data;
  const guestToken = data.guestToken || '';
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [rsvpStatus, setRsvpStatus] = useState(guest?.rsvp_status || null);
  const [pax, setPax] = useState(guest?.pax_confirmed || 1);
  const [rsvpDone, setRsvpDone] = useState(!!guest?.rsvp_status);
  const [wishes, setWishes] = useState(initialWishes || []);
  const [wishName, setWishName] = useState("");
  const [wishText, setWishText] = useState("");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const images = gallery || Array(6).fill('https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80');
  const banks = bankAccounts?.length ? bankAccounts : [{ bank_name: 'BCA', account_number: '1234567890', account_holder: 'Laila Nur Azizah' }];

  const toggleMusic = () => {
    if (!audioRef.current) { audioRef.current = new Audio(inv?.settings?.musicUrl || 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); audioRef.current.loop = true; audioRef.current.volume = 0.3; }
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
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0 });
  useEffect(() => {
    const target = new Date(inv?.event_date || '2026-08-15').getTime();
    const u = () => {
      const d = target - Date.now();
      if (d <= 0) return setT({ days: 0, hours: 0, minutes: 0 });
      setT({ days: Math.floor(d / 86400000), hours: Math.floor((d % 86400000) / 3600000), minutes: Math.floor((d % 3600000) / 60000) });
    };
    u(); const i = setInterval(u, 1000); return () => clearInterval(i);
  }, [inv?.event_date]);

  if (!visible) return null;

  // Rose gold color palette
  const primary = '#8B5E63';
  const secondary = '#D4A9A7';
  const accent = '#E8D5C4';
  const bg = '#FEFAF6';
  const gold = '#D4A9A7';

  return (
    <main className="relative w-full overflow-x-hidden" style={{ background: `linear-gradient(180deg, ${bg} 0%, ${accent}50 100%)`, color: primary, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
      <style>{`.rose-btn { background: linear-gradient(135deg, ${gold}, ${secondary}); color: white; border: none; } .rose-card { background: rgba(255,255,255,0.7); backdrop-filter: blur(10px); border: 1px solid ${gold}30; border-radius: 1.5rem; box-shadow: 0 4px 20px rgba(139,94,99,0.08); } .rose-text { color: ${primary}; } .rose-sub { color: ${secondary}; }`}</style>

      {/* ===== SIDE-SWIPE OPENING ===== */}
      <AnimatePresence>
        {!open && (
          <motion.section className="fixed inset-0 z-50 flex" exit={{ x: '-100%' }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}>
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-cover bg-center relative" style={{ backgroundImage: `url(${inv?.settings?.coverImage || 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80'})` }}>
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center p-8" style={{ backgroundColor: bg }}>
              <div className="text-center max-w-sm">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <span className="text-5xl">💐</span>
                  <p className="rose-sub text-xs tracking-[0.3em] uppercase mt-4">The Wedding Of</p>
                  <h1 className="text-4xl md:text-5xl mt-2" style={{ color: primary, fontFamily: "'Playfair Display', serif" }}>{inv?.groom_name} <span className="rose-sub">&</span> {inv?.bride_name}</h1>
                  <div className="w-12 h-[1px] mx-auto my-4" style={{ background: gold }} />
                  <p className="text-sm rose-sub mb-2">Kepada Yth.</p>
                  <p className="text-2xl italic" style={{ color: primary }}>{guest?.guest_name || 'Bapak/Ibu/Saudara/i'}</p>
                  <motion.button onClick={() => { setOpen(true); setTimeout(() => setVisible(false), 1000); }} className="mt-8 px-10 py-3 rounded-full rose-btn flex items-center gap-2 mx-auto" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    Buka Undangan <ChevronRight size={14} />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative">
        {/* Music */}
        <button onClick={toggleMusic} className="fixed top-6 right-6 z-20 w-10 h-10 rounded-full rose-card flex items-center justify-center">
          <Music size={18} className={musicOn ? "text-rose-400" : "rose-sub"} />
        </button>

        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <motion.div className="text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <p className="rose-sub text-xs tracking-[0.3em] uppercase">{inv?.event_date}</p>
            <h1 className="text-5xl md:text-7xl mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>{inv?.groom_name} <span className="rose-sub">&</span> {inv?.bride_name}</h1>
            <div className="flex justify-center gap-6 mt-10">
              {[{ v: t.days, l: 'Hari' }, { v: t.hours, l: 'Jam' }, { v: t.minutes, l: 'Menit' }].map(item => (
                <div key={item.l} className="text-center"><div className="rose-card w-16 h-16 flex items-center justify-center"><span className="text-2xl" style={{ color: secondary, fontFamily: "'Playfair Display', serif" }}>{String(item.v).padStart(2, '0')}</span></div><span className="rose-sub text-xs">{item.l}</span></div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Couple — side by side */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-right">
              <div className="w-48 h-48 mx-auto md:mr-0 rounded-2xl bg-cover bg-center shadow-lg" style={{ backgroundImage: `url(${inv?.settings?.groomPhoto || 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80'})` }} />
              <h3 className="text-3xl mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>{inv?.groom_name}</h3>
              <p className="rose-sub text-xs mt-1">{inv?.groom_full_name}</p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-48 h-48 mx-auto md:ml-0 rounded-2xl bg-cover bg-center shadow-lg" style={{ backgroundImage: `url(${inv?.settings?.bridePhoto || 'https://images.unsplash.com/photo-1594552073388-6e3f45e83df6?w=400&q=80'})` }} />
              <h3 className="text-3xl mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>{inv?.bride_name}</h3>
              <p className="rose-sub text-xs mt-1">{inv?.bride_full_name}</p>
            </div>
          </div>
        </section>

        {/* Event — horizontal cards */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="rose-sub text-xs tracking-[0.2em] uppercase">Rangkaian Acara</p>
            <h2 className="text-3xl mt-2 mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Akad & Resepsi</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[{ icon: '🕌', title: 'Akad Nikah', time: '08:00 - 10:00', venue: 'Masjid Agung', addr: 'Jl. Ahmad Yani No. 15' }, { icon: '🥂', title: 'Resepsi', time: '11:00 - 17:00', venue: 'Gedung Graha', addr: 'Jl. Sukajadi No. 200' }].map((ev, i) => (
                <motion.div key={i} className="rose-card p-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
                  <span className="text-4xl">{ev.icon}</span>
                  <h3 className="text-2xl mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>{ev.title}</h3>
                  <p className="rose-sub text-sm mt-2">{ev.time}</p>
                  <p className="text-sm mt-1">{ev.venue}</p>
                  <p className="rose-sub text-xs">{ev.addr}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery — horizontal scroll */}
        <section className="py-20 px-4">
          <div className="text-center mb-8">
            <p className="rose-sub text-xs tracking-[0.2em] uppercase">Momen</p>
            <h2 className="text-3xl mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>Gallery</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory">
            {images.map((img: any, i: number) => (
              <motion.div key={i} className="flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden cursor-pointer snap-center" onClick={() => setLightbox(i)} whileHover={{ scale: 1.02 }}>
                <img src={typeof img === 'string' ? img : img.url || img.public_url} alt={`Gallery ${i}`} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </section>
        {lightbox !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={() => setLightbox(null)}>
            <button className="absolute top-6 right-6 text-white"><X size={28} /></button>
            <img src={typeof images[lightbox] === 'string' ? images[lightbox] : images[lightbox]?.url} alt="Lightbox" className="max-h-[85vh] max-w-[90vw] object-contain" onClick={e => e.stopPropagation()} />
          </div>
        )}

        {/* RSVP — envelope style */}
        <section className="py-20 px-6">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8"><p className="rose-sub text-xs tracking-[0.2em] uppercase">Konfirmasi</p><h2 className="text-3xl mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>RSVP</h2></div>
            {rsvpDone ? (
              <div className="rose-card p-8 text-center"><span className="text-4xl">💌</span><p className="text-xl mt-4">Terima Kasih!</p></div>
            ) : (
              <div className="rose-card p-6 space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {[{ v: 'Hadir', l: 'Hadir' }, { v: 'Tidak Hadir', l: 'Tdk Hadir' }].map(o => (
                    <button key={o.v} onClick={() => setRsvpStatus(o.v as any)} className={`p-3 rounded-xl text-sm border-2 transition-all ${rsvpStatus === o.v ? 'rose-btn border-transparent' : 'border-rose-200 text-rose-400'}`}>{o.l}</button>
                  ))}
                </div>
                {rsvpStatus && <button onClick={submitRsvp} className="w-full py-3 rounded-full rose-btn">Konfirmasi</button>}
              </div>
            )}
          </div>
        </section>

        {/* Gift — elegant */}
        <section className="py-20 px-6">
          <div className="max-w-md mx-auto text-center">
            <p className="rose-sub text-xs tracking-[0.2em] uppercase">Hadiah</p>
            <h2 className="text-3xl mt-2 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Digital Gift</h2>
            <div className="space-y-3">
              {banks.map((bank: any, i: number) => (
                <div key={i} className="rose-card flex items-center justify-between p-4">
                  <div className="text-left"><p className="font-semibold text-sm">{bank.bank_name}</p><p className="rose-sub font-mono">{bank.account_number}</p></div>
                  <button onClick={() => { navigator.clipboard.writeText(bank.account_number); setCopiedIdx(i); setTimeout(() => setCopiedIdx(null), 1500); }} className={`px-3 py-2 rounded-full text-xs ${copiedIdx === i ? 'rose-btn' : 'border border-rose-200 text-rose-400'}`}>{copiedIdx === i ? '✓' : 'Copy'}</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wishes */}
        <section className="py-20 px-6">
          <div className="max-w-md mx-auto text-center">
            <p className="rose-sub text-xs tracking-[0.2em] uppercase">Ucapan</p>
            <h2 className="text-3xl mt-2 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Wishes</h2>
            <div className="space-y-3 mb-8">
              <input value={wishName} onChange={e => setWishName(e.target.value)} placeholder="Nama" className="w-full p-3 rounded-xl border border-rose-200 bg-white text-sm" />
              <textarea value={wishText} onChange={e => setWishText(e.target.value)} placeholder="Ucapan..." className="w-full p-3 rounded-xl border border-rose-200 bg-white text-sm" rows={3} />
              <button onClick={submitWish} className="w-full py-3 rounded-full rose-btn flex items-center justify-center gap-2"><Send size={14} /> Kirim</button>
            </div>
            {wishes.map((w: any, i: number) => (
              <div key={i} className="rose-card p-4 mb-3 text-left"><p className="font-semibold text-sm">{w.sender_name}</p><p className="rose-sub text-sm">{w.message}</p></div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="py-24 px-6 text-center">
          <span className="text-5xl">💐</span>
          <h2 className="text-4xl mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>Terima Kasih</h2>
          <p className="rose-sub text-sm mt-4">Merupakan kehormatan apabila Anda berkenan hadir</p>
          <p className="text-2xl mt-6" style={{ fontFamily: "'Playfair Display', serif" }}>{inv?.groom_name} <span className="rose-sub">&</span> {inv?.bride_name}</p>
        </section>
      </div>
    </main>
  );
}
