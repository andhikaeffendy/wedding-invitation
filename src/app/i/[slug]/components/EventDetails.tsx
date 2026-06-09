"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, Calendar } from "lucide-react";

export default function EventDetails({ invitation }: { invitation?: any }) {
  const inv = invitation || { groom_name: 'Andhika', bride_name: 'Laila', event_date: '2026-08-15' };

  const akad = {
    title: 'Akad Nikah',
    icon: '🕌',
    date: inv.event_date || '15 Agustus 2026',
    time: '08:00 - 10:00 WIB',
    venue: 'Masjid Agung Al-Muhajirin',
    address: 'Jl. Ahmad Yani No. 15, Kota Bandung',
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9!2d107.6!3d-6.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMasjid%20Agung%20Bandung!5e0!3m2!1sen!2sid!4v1234567890',
    mapsLink: 'https://maps.google.com/?q=Masjid+Agung+Al+Muhajirin+Bandung',
  };

  const resepsi = {
    title: 'Resepsi',
    icon: '🎉',
    date: inv.event_date || '15 Agustus 2026',
    time: '11:00 - 17:00 WIB',
    venue: 'Gedung Graha Wedding Garden',
    address: 'Jl. Sukajadi No. 200, Kota Bandung',
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0!2d107.59!3d-6.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGedung%20Graha%20Bandung!5e0!3m2!1sen!2sid!4v1234567890',
    mapsLink: 'https://maps.google.com/?q=Gedung+Graha+Wedding+Bandung',
  };

  const events = [akad, resepsi];

  const addToCalendar = () => {
    const start = new Date(inv.event_date);
    const startStr = start.toISOString().replace(/-|:|\.\d+/g, '');
    const end = new Date(start.getTime() + 10 * 3600000);
    const endStr = end.toISOString().replace(/-|:|\.\d+/g, '');
    window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+${inv.groom_name}+%26+${inv.bride_name}&dates=${startStr}/${endStr}&location=${encodeURIComponent(akad.venue)}`, '_blank');
  };

  return (
    <section id="section-event" className="relative py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">Dengan Memohon Rahmat Allah</p>
          <h2 className="section-title">Rangkaian Acara</h2>
          <div className="w-16 h-[1px] bg-[#C9A86A] mx-auto mt-4" />
        </motion.div>

        {events.map((event, i) => (
          <motion.div
            key={i}
            className="mb-12 last:mb-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="card p-6 md:p-8">
              <div className="text-center mb-6">
                <span className="text-3xl">{event.icon}</span>
                <h3 className="font-display text-2xl md:text-3xl text-[#22382D] mt-2">{event.title}</h3>
              </div>

              <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 text-sm">
                <div className="flex items-center gap-2"><Calendar size={16} className="text-[#C9A86A]" /><span className="text-[#22382D]">{event.date}</span></div>
                <div className="flex items-center gap-2"><Clock size={16} className="text-[#C9A86A]" /><span className="text-[#22382D]">{event.time}</span></div>
                <div className="flex items-center gap-2"><MapPin size={16} className="text-[#C9A86A]" /><span className="text-[#22382D]">{event.venue}</span></div>
              </div>

              <p className="text-center text-[#6F7F55] text-sm mb-6">{event.address}</p>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden border border-[#C9A86A]/15 shadow-md mb-4">
                <iframe
                  src={event.mapsEmbed}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Lokasi ${event.title}`}
                  className="w-full"
                />
              </div>

              <div className="text-center">
                <a
                  href={event.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#22382D] text-white rounded-full text-sm hover:bg-[#1a2a22] transition-colors"
                >
                  <MapPin size={14} /> Buka di Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <button onClick={addToCalendar} className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#C9A86A] text-[#C9A86A] rounded-full text-sm hover:bg-[#C9A86A] hover:text-white transition-all">
            <Calendar size={14} /> Tambahkan ke Kalender
          </button>
        </motion.div>
      </div>
    </section>
  );
}
