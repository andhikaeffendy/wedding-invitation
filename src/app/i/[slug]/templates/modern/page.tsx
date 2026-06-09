"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MapPin, Clock, Calendar, ChevronLeft, ChevronRight, X, Copy, Check, Gift, Send, Music } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

// ===== MODERN ORGANIC LUXURY TEMPLATE =====
// Forest green, sage, gold, cream palette
// Elegant, warm, organic feel

interface Props { data: any; }

function Countdown({ date }: { date: string }) {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const target = new Date(date).getTime();
    const u = () => {
      const d = target - Date.now();
      if (d <= 0) { setT({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setT({ days: Math.floor(d / 86400000), hours: Math.floor((d % 86400000) / 3600000), minutes: Math.floor((d % 3600000) / 60000), seconds: Math.floor((d % 60000) / 1000) });
    };
    u(); const i = setInterval(u, 1000); return () => clearInterval(i);
  }, [date]);
  return t;
}

export default function ModernTemplate({ data }: Props) {
  const { invitation: inv, guest, gallery, wishes: initialWishes, bankAccounts } = data;
  const guestToken = data.guestToken || '';
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const countdown = Countdown({ date: inv?.event_date || '2026-08-15' });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // RSVP state
  const [rsvpStatus, setRsvpStatus] = useState(guest?.rsvp_status || null);
  const [pax, setPax] = useState(guest?.pax_confirmed || 1);
  const [rsvpMsg, setRsvpMsg] = useState("");
  const [rsvpDone, setRsvpDone] = useState(!!guest?.rsvp_status);
  const [submitting, setSubmitting] = useState(false);

  // Wishes
  const [wishes, setWishes] = useState(initialWishes || []);
  const [wishName, setWishName] = useState("");
  const [wishText, setWishText] = useState("");

  // Copy
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const images = gallery || Array(6).fill('https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80');
  const banks = bankAccounts?.length ? bankAccounts : [
    { bank_name: 'BCA', account_number: '1234567890', account_holder: 'Laila Nur Azizah' },
    { bank_name: 'Mandiri', account_number: '0987654321', account_holder: 'Andhika Pratama' },
  ];

  const toggleMusic = () => {
    if (!audioRef.current) { audioRef.current = new Audio(inv?.settings?.musicUrl || 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); audioRef.current.loop = true; audioRef.current.volume = 0.3; }
    musicOn ? audioRef.current.pause() : audioRef.current.play().catch(() => {});
    setMusicOn(!musicOn);
  };

  const submitRsvp = async () => {
    if (!rsvpStatus) return;
    setSubmitting(true);
    await fetch('/api/public/invitation/andhika-laila', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ guestToken, status: rsvpStatus, paxConfirmed: pax, message: rsvpMsg }) });
    setRsvpDone(true); setSubmitting(false);
  };

  const submitWish = async () => {
    if (!wishName.trim() || !wishText.trim()) return;
    const res = await fetch('/api/public/invitation/andhika-laila', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ senderName: wishName, text: wishText }) });
    const d = await res.json();
    if (d.success) { setWishes([d.wish, ...wishes]); setWishText(''); }
  };

  if (!visible) return null;

  return (
    <main className="relative w-full overflow-x-hidden bg-[#F7F1E6] text-[#22382D] font-sans">
      {/* ===== OPENING COVER ===== */}
      <AnimatePresence>
        {!open && (
          <motion.section className="fixed inset-0 z-50 flex items-center justify-center" exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 1.2 }}>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${inv?.settings?.coverImage || 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80'})` }} />
            <div className="absolute inset-0 bg-[#22382D]/50" />
            <motion.div className="relative z-10 text-center px-6" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <motion.div className="w-24 h-24 mx-auto rounded-full border-2 border-[#C9A86A] flex items-center justify-center mb-8" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 1.2, type: "spring" }}>
                <span className="font-display text-3xl text-[#C9A86A]">{inv?.groom_name?.[0] || 'A'}<span className="text-2xl">&</span>{inv?.bride_name?.[0] || 'L'}</span>
              </motion.div>
              <p className="text-[#C9A86A] text-sm tracking-[0.3em] uppercase mb-4">Kepada Yth.</p>
              <h1 className="font-display text-3xl md:text-4xl text-[#F7F1E6] mb-3">{guest?.guest_name || 'Bapak/Ibu/Saudara/i'}</h1>
              <p className="text-[#A9B89B]/80 text-sm mb-10">Kami mengundang Anda di hari bahagia kami</p>
              <motion.button onClick={() => { setOpen(true); setTimeout(() => setVisible(false), 1200); }} className="px-10 py-3.5 bg-[#C9A86A] text-white rounded-full font-medium hover:bg-[#b8974f] transition-colors" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                🖐️ Buka Undangan
              </motion.button>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${inv?.settings?.heroImage || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80'})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#22382D]/60 via-[#22382D]/40 to-[#F7F1E6]" />
        <button onClick={toggleMusic} className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <Music size={20} className={musicOn ? "text-[#C9A86A]" : "text-[#A9B89B]"} />
        </button>
        <div className="relative z-10 text-center px-6 pt-20 pb-36">
          <p className="text-[#C9A86A] text-xs tracking-[0.3em] uppercase mb-4">{inv?.event_date}</p>
          <h1 className="font-display text-5xl md:text-7xl text-[#F7F1E6] mb-6">{inv?.groom_name} <span className="text-[#C9A86A]">&</span> {inv?.bride_name}</h1>
          <div className="w-24 h-[1px] bg-[#C9A86A] mx-auto mb-6" />
          <p className="text-[#A9B89B] text-sm max-w-md mx-auto italic mb-8">&ldquo;Dan di antara tanda-tanda kekuasaan-Nya, Dia menciptakan pasangan-pasangan untukmu&rdquo;</p>
          <div className="flex justify-center gap-3 mb-8">
            {[{ v: countdown.days, l: 'Hari' }, { v: countdown.hours, l: 'Jam' }, { v: countdown.minutes, l: 'Menit' }, { v: countdown.seconds, l: 'Detik' }].map(item => (
              <div key={item.l} className="text-center">
                <div className="glass rounded-xl w-16 h-16 flex items-center justify-center mb-1"><span className="font-display text-2xl text-[#C9A86A]">{String(item.v).padStart(2, '0')}</span></div>
                <span className="text-[#A9B89B] text-xs">{item.l}</span>
              </div>
            ))}
          </div>
          <button onClick={() => { navigator.clipboard.writeText(window.location.href); }} className="px-6 py-3 rounded-full bg-[#C9A86A]/20 border border-[#C9A86A]/40 text-[#F7F1E6] text-sm backdrop-blur-sm hover:bg-[#C9A86A]/30 transition-all"><Heart size={14} className="inline mr-2" />Bagikan Undangan</button>
        </div>
      </section>

      {/* ===== COUPLE ===== */}
      <section className="py-20 px-6 text-center">
        <p className="text-[#C9A86A] text-xs tracking-[0.2em] uppercase mb-2">Assalamualaikum Wr. Wb.</p>
        <h2 className="font-display text-3xl text-[#22382D] mb-8">Yang Berbahagia</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div>
            <div className="w-40 h-40 mx-auto rounded-full bg-cover bg-center shadow-lg mb-4" style={{ backgroundImage: `url(${inv?.settings?.groomPhoto || 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80'})` }} />
            <h3 className="font-display text-2xl text-[#22382D]">{inv?.groom_name || 'Andhika'}</h3>
            <p className="text-[#6F7F55] text-sm">{inv?.groom_full_name}</p>
            <p className="text-[#A9B89B] text-xs mt-1">{inv?.groom_parents}</p>
          </div>
          <div>
            <div className="w-40 h-40 mx-auto rounded-full bg-cover bg-center shadow-lg mb-4" style={{ backgroundImage: `url(${inv?.settings?.bridePhoto || 'https://images.unsplash.com/photo-1594552073388-6e3f45e83df6?w=400&q=80'})` }} />
            <h3 className="font-display text-2xl text-[#22382D]">{inv?.bride_name || 'Laila'}</h3>
            <p className="text-[#6F7F55] text-sm">{inv?.bride_full_name}</p>
            <p className="text-[#A9B89B] text-xs mt-1">{inv?.bride_parents}</p>
          </div>
        </div>
      </section>

      {/* ===== EVENT ===== */}
      <section className="py-20 px-4 bg-[#22382D]/3">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#C9A86A] text-xs tracking-[0.2em] uppercase mb-2">Rangkaian Acara</p>
          <h2 className="font-display text-3xl text-[#22382D] mb-10">Akad & Resepsi</h2>
          {[{ icon: '🕌', title: 'Akad Nikah', time: '08:00 - 10:00 WIB', venue: 'Masjid Agung Al-Muhajirin', addr: 'Jl. Ahmad Yani No. 15, Bandung' }, { icon: '🎉', title: 'Resepsi', time: '11:00 - 17:00 WIB', venue: 'Gedung Graha Wedding Garden', addr: 'Jl. Sukajadi No. 200, Bandung' }].map((ev, i) => (
            <motion.div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-lg border border-[#C9A86A]/10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-3xl">{ev.icon}</span>
              <h3 className="font-display text-xl mt-2">{ev.title}</h3>
              <div className="flex justify-center gap-6 mt-3 text-sm text-[#6F7F55]">
                <span><Clock size={14} className="inline mr-1 text-[#C9A86A]" />{ev.time}</span>
                <span><MapPin size={14} className="inline mr-1 text-[#C9A86A]" />{ev.venue}</span>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9!2d107.6!3d-6.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMasjid%20Agung%20Bandung!5e0!3m2!1sen!2sid!4v1234567890" width="100%" height="200" style={{ border: 0 }} className="rounded-xl mt-4" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A86A] text-xs tracking-[0.2em] uppercase mb-2">Momen Berharga</p>
          <h2 className="font-display text-3xl text-[#22382D] mb-8">Our Gallery</h2>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {images.map((img: any, i: number) => (
              <motion.div key={i} className="break-inside-avoid cursor-pointer rounded-xl overflow-hidden" onClick={() => setLightbox(i)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <img src={typeof img === 'string' ? img : img.url || img.public_url} alt={`Gallery ${i}`} className="w-full hover:scale-105 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
        {lightbox !== null && (
          <div className="fixed inset-0 z-50 bg-[#22382D]/95 flex items-center justify-center" onClick={() => setLightbox(null)}>
            <button className="absolute top-6 right-6 text-white"><X size={28} /></button>
            <img src={typeof images[lightbox] === 'string' ? images[lightbox] : images[lightbox]?.url} alt="Lightbox" className="max-h-[85vh] max-w-[90vw] object-contain" onClick={e => e.stopPropagation()} />
            <p className="absolute bottom-8 text-white/60 text-sm">{lightbox + 1}/{images.length}</p>
          </div>
        )}
      </section>

      {/* ===== RSVP ===== */}
      <section className="py-20 px-6 bg-[#F7F1E6]">
        <div className="max-w-md mx-auto text-center">
          <p className="text-[#C9A86A] text-xs tracking-[0.2em] uppercase mb-2">Konfirmasi Kehadiran</p>
          <h2 className="font-display text-3xl text-[#22382D] mb-8">RSVP</h2>
          {rsvpDone ? (
            <div className="p-8 bg-white/80 rounded-2xl shadow-lg">
              <Heart size={36} className="text-[#6F7F55] mx-auto mb-4" />
              <p className="text-[#22382D] font-display text-xl">Terima Kasih!</p>
              <p className="text-[#6F7F55] text-sm mt-2">Konfirmasi Anda telah diterima.</p>
            </div>
          ) : (
            <div className="p-6 bg-white/80 rounded-2xl shadow-lg space-y-4">
              <div className="grid grid-cols-3 gap-2">
                {[{ v: 'Hadir', l: 'Hadir', c: 'bg-[#6F7F55] text-white' }, { v: 'Tidak Hadir', l: 'Tdk Hadir', c: 'bg-[#B86B4B] text-white' }, { v: 'Ragu-ragu', l: 'Ragu', c: 'bg-[#C9A86A] text-white' }].map(o => (
                  <button key={o.v} onClick={() => setRsvpStatus(o.v as any)} className={`p-3 rounded-xl text-sm font-medium border-2 transition-all ${rsvpStatus === o.v ? o.c + ' border-transparent' : 'border-[#C9A86A]/20 text-[#6F7F55]'}`}>{o.l}</button>
                ))}
              </div>
              {rsvpStatus === 'Hadir' && (
                <div className="flex items-center justify-center gap-2">
                  <button onClick={() => setPax(Math.max(1, pax - 1))} className="w-8 h-8 rounded-full border">-</button>
                  <span className="w-10 text-xl font-display">{pax}</span>
                  <button onClick={() => setPax(pax + 1)} className="w-8 h-8 rounded-full border">+</button>
                  <span className="text-xs text-[#A9B89B]">orang</span>
                </div>
              )}
              {rsvpStatus && <textarea value={rsvpMsg} onChange={e => setRsvpMsg(e.target.value)} placeholder="Pesan (opsional)" className="w-full p-3 rounded-xl border text-sm" rows={2} />}
              {rsvpStatus && <button onClick={submitRsvp} disabled={submitting} className="w-full py-3 bg-[#C9A86A] text-white rounded-full font-medium">{submitting ? '...' : 'Konfirmasi'}</button>}
            </div>
          )}
        </div>
      </section>

      {/* ===== GIFT ===== */}
      <section className="py-20 px-6">
        <div className="max-w-md mx-auto text-center">
          <p className="text-[#C9A86A] text-xs tracking-[0.2em] uppercase mb-2">Kirim Hadiah</p>
          <h2 className="font-display text-3xl text-[#22382D] mb-8">Digital Gift</h2>
          <div className="space-y-3">
            {banks.map((bank: any, i: number) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/80 rounded-2xl shadow-sm">
                <div className="text-left"><p className="font-semibold text-sm text-[#22382D]">{bank.bank_name}</p><p className="text-[#C9A86A] font-mono">{bank.account_number}</p><p className="text-[#A9B89B] text-xs">a.n. {bank.account_holder}</p></div>
                <button onClick={() => { navigator.clipboard.writeText(bank.account_number); setCopiedIdx(i); setTimeout(() => setCopiedIdx(null), 1500); }} className={`px-3 py-2 rounded-full text-xs font-medium ${copiedIdx === i ? 'bg-[#6F7F55] text-white' : 'bg-[#C9A86A]/10 text-[#C9A86A]'}`}>{copiedIdx === i ? '✓ Tersalin' : 'Salin'}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WISHES ===== */}
      <section className="py-20 px-6 bg-[#22382D]/3">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8"><p className="text-[#C9A86A] text-xs tracking-[0.2em] uppercase mb-2">Ucapan & Doa</p><h2 className="font-display text-3xl text-[#22382D]">Wishes</h2></div>
          <div className="space-y-3 mb-8">
            <input value={wishName} onChange={e => setWishName(e.target.value)} placeholder="Nama Anda" className="w-full p-3 rounded-xl border text-sm" />
            <textarea value={wishText} onChange={e => setWishText(e.target.value)} placeholder="Tulis ucapan..." className="w-full p-3 rounded-xl border text-sm" rows={3} />
            <button onClick={submitWish} className="w-full py-3 bg-[#C9A86A] text-white rounded-full font-medium flex items-center justify-center gap-2"><Send size={14} /> Kirim Ucapan</button>
          </div>
          <div className="space-y-3">
            {wishes.map((w: any, i: number) => (
              <div key={i} className="p-4 bg-white/80 rounded-xl">
                <p className="font-semibold text-sm text-[#22382D]">{w.sender_name}</p>
                <p className="text-[#6F7F55] text-sm">{w.message}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLOSING ===== */}
      <section className="py-24 px-6 text-center">
        <div className="w-12 h-[1px] bg-[#C9A86A]/40 mx-auto mb-8" />
        <h2 className="font-display text-4xl text-[#22382D] mb-4">Terima Kasih</h2>
        <p className="text-[#6F7F55] text-sm mb-6">Merupakan kehormatan apabila Anda berkenan hadir.</p>
        <p className="font-display text-2xl text-[#22382D] mb-2">{inv?.groom_name} <span className="text-[#C9A86A]">&</span> {inv?.bride_name}</p>
        <div className="p-6 bg-[#22382D]/5 rounded-2xl mt-8 mb-8 max-w-md mx-auto">
          <Heart size={16} className="text-[#C9A86A]/50 mx-auto mb-2" />
          <p className="text-[#6F7F55] text-xs italic">&ldquo;Dan di antara tanda-tanda kekuasaan-Nya, Dia menciptakan pasangan-pasangan untukmu agar kamu merasa tenteram kepadanya.&rdquo;<br /><span className="text-[#C9A86A] mt-2 block">— QS. Ar-Rum: 21</span></p>
        </div>
        <div className="w-12 h-[1px] bg-[#C9A86A]/40 mx-auto" />
      </section>
    </main>
  );
}
