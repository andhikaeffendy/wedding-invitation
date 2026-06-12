"use client";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";

const MosqueIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 20v-2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2"></path>
    <path d="M12 16V6"></path>
    <path d="M12 10 9 6"></path>
    <path d="M12 10 15 6"></path>
    <path d="M6 16v-4a6 6 0 0 1 12 0v4"></path>
  </svg>
);

const RingsIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="8" cy="12" r="6"></circle>
    <circle cx="16" cy="12" r="6"></circle>
  </svg>
);

export default function EventDetails({ invitation }: { invitation?: any }) {
  const inv = invitation || {};
  const events = [
    {
      title: "Akad Nikah",
      date: "Sabtu, 30 Januari 2027",
      time: "08.00 - 10.00 WIB",
      location: "Masjid Nurul Iman",
      address: "Jl. Anggrek No. 10, Jakarta Selatan",
      maps: "https://maps.google.com",
      icon: <MosqueIcon size={24} className="text-[#C9A86A]" />
    },
    {
      title: "Resepsi",
      date: "Sabtu, 30 Januari 2027",
      time: "11.00 - 15.00 WIB",
      location: "The Grand Ballroom",
      address: "Jl. Sudirman No. 88, Jakarta Selatan",
      maps: "https://maps.google.com",
      icon: <RingsIcon size={24} className="text-[#C9A86A]" />
    }
  ];

  return (
    <section id="section-events" className="relative py-24 px-6 bg-[#F7F1E6] overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A86A] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4 font-light">
            EVENT DETAILS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1F2E26] mb-4 font-light">
            Acara Spesial
          </h2>
          <div className="w-16 h-[1px] bg-[#C9A86A]/30 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative"
            >
              {/* Card Frame */}
              <div className="absolute -inset-3 border border-[#C9A86A]/10 rounded-[40px] z-0" />
              
              <div className="relative z-10 bg-white/60 backdrop-blur-sm p-10 rounded-[32px] border border-white/40 shadow-xl text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-[#1F2E26] rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-lg">
                    {event.icon}
                  </div>
                  
                  <h3 className="font-serif text-2xl md:text-3xl text-[#1F2E26] mb-8 font-light">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-6 mb-10">
                    <div className="flex flex-col items-center gap-2">
                       <p className="text-[#6F7F55] font-serif text-lg">{event.date}</p>
                       <p className="text-[#A9B89B] text-xs tracking-wider">{event.time}</p>
                    </div>
                    
                    <div className="w-12 h-[1px] bg-[#C9A86A]/20 mx-auto" />
                    
                    <div className="flex flex-col items-center gap-2">
                       <p className="text-[#1F2E26] font-serif text-xl">{event.location}</p>
                       <p className="text-[#6F7F55] text-xs max-w-[200px] leading-relaxed">{event.address}</p>
                    </div>
                  </div>
                </div>

                <motion.a
                  href={event.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Lihat lokasi ${event.title} di Google Maps`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#1F2E26] text-white rounded-full text-xs tracking-[0.2em] font-light transition-all shadow-lg hover:shadow-[#1F2E26]/20"
                >
                  <MapPin size={14} aria-hidden="true" />
                  LIHAT LOKASI
                </motion.a>

                {/* Dress Code Palette */}
                <div className="mt-10 pt-8 border-t border-[#C9A86A]/10">
                  <p className="text-[#C9A86A] text-[9px] tracking-[0.3em] uppercase mb-4 font-light">Dress Code Palette</p>
                  <div className="flex justify-center gap-3">
                    {['#F7F1E6', '#A9B89B', '#6F7F55', '#22382D', '#B86B4B', '#C9A86A'].map((color, idx) => (
                      <div key={idx} className="w-6 h-6 rounded-full border border-white shadow-sm" style={{ background: color }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Corner Ornaments */}
              <div className="absolute top-[-20px] left-[-20px] w-24 h-24 opacity-20 pointer-events-none">
                 <img src="https://i.ibb.co/L5Qx8S5/floral-corner.png" alt="" className="w-full h-full object-contain" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
