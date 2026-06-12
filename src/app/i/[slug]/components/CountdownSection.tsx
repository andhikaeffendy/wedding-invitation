"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function CountdownSection({ invitation }: { invitation?: any }) {
  const targetDate = new Date(invitation?.event_date || '2027-01-30T00:00:00').getTime();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="section-countdown" className="relative py-16 md:py-24 px-6 bg-[#1F2E26]">
      <div className="max-w-4xl mx-auto relative">
        {/* Decor */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, #C9A86A 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#1F2E26] border border-[#C9A86A]/20 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="text-center mb-8">
            <p className="text-[#A9B89B] text-xs tracking-[0.4em] uppercase mb-4">Save The Date</p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#F7F1E6]">Hitung Mundur</h2>
            <div className="w-20 h-[1px] mx-auto mt-4 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent" />
          </div>

          <div className="flex justify-center gap-4 md:gap-8 mb-10">
            {[
              { value: String(countdown.days).padStart(2, '0'), label: 'Hari' },
              { value: String(countdown.hours).padStart(2, '0'), label: 'Jam' },
              { value: String(countdown.minutes).padStart(2, '0'), label: 'Menit' },
              { value: String(countdown.seconds).padStart(2, '0'), label: 'Detik' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 bg-[#C9A86A]/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-[#C9A86A]/20 mb-3">
                  <span className="font-serif text-3xl md:text-5xl text-[#C9A86A]">{item.value}</span>
                </div>
                <span className="text-[#A9B89B] text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding ${invitation?.groom_name || 'Andhika'} & ${invitation?.bride_name || 'Laila'}&dates=${new Date(invitation?.event_date || '2027-01-30').toISOString().replace(/-|:|\.\d+/g, '')}/${new Date(new Date(invitation?.event_date || '2027-01-30').getTime() + 24*60*60*1000).toISOString().replace(/-|:|\.\d+/g, '')}&location=Bandung`;
                window.open(calendarUrl, '_blank');
              }}
              aria-label="Tambah ke Google Calendar"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A86A] text-[#1F2E26] rounded-full font-serif text-lg font-medium transition-all hover:bg-[#D4AF37] hover:scale-105 active:scale-95 shadow-lg shadow-[#C9A86A]/20"
            >
              <Calendar size={20} aria-hidden="true" />
              Tambah ke Kalender
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
