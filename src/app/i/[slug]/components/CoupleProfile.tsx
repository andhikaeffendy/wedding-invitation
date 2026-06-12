"use client";
import { motion } from "framer-motion";
import { dummyInvitation } from "@/lib/dummy-data";

// Custom SVG Icons to avoid lucide-react version issues
const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function CoupleProfile({ invitation }: { invitation?: any }) {
  const inv = invitation || dummyInvitation;

  return (
    <section id="section-couple" className="relative py-24 px-6 bg-[#F7F1E6]" aria-labelledby="couple-heading">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A86A] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4 font-light">
            PENGANTIN
          </p>
          <h2 id="couple-heading" className="font-serif text-3xl md:text-5xl text-[#1F2E26] mb-4 font-light">
            The Couple
          </h2>
          <div className="w-16 h-[1px] bg-[#C9A86A]/30 mx-auto" aria-hidden="true" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-right"
          >
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 border border-[#C9A86A]/20 rounded-full" />
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto">
                <img
                  src={
                    inv.settings?.groomPhoto ||
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80"
                  }
                  alt={inv.groom_name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-[#1F2E26] mb-2 font-light">
              {inv.groom_name}
            </h3>
            <p className="text-[#6F7F55] font-serif text-lg mb-3 italic">
              {inv.groom_full_name}
            </p>
            <p className="text-[#A9B89B] text-xs mb-6 max-w-[250px] mx-auto md:ml-auto md:mr-0 leading-relaxed uppercase tracking-wider">
              {inv.groom_parents}
            </p>
            {inv.groom_ig && (
              <a
                href={`https://instagram.com/${inv.groom_ig.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C9A86A] hover:text-[#6F7F55] transition-colors group"
              >
                <InstagramIcon
                  size={14}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] tracking-[0.2em] uppercase font-light">
                  {inv.groom_ig}
                </span>
              </a>
            )}
          </motion.div>

          {/* Ampersand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 z-10"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#1F2E26] flex items-center justify-center border-4 border-white shadow-xl">
              <span className="text-[#C9A86A] font-serif text-4xl md:text-5xl">
                &
              </span>
            </div>
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 border border-[#C9A86A]/20 rounded-full" />
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto">
                <img
                  src={
                    inv.settings?.bridePhoto ||
                    "https://images.unsplash.com/photo-1594552073388-6e3f45e83df6?w=400&q=80"
                  }
                  alt={inv.bride_name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-[#1F2E26] mb-2 font-light">
              {inv.bride_name}
            </h3>
            <p className="text-[#6F7F55] font-serif text-lg mb-3 italic">
              {inv.bride_full_name}
            </p>
            <p className="text-[#A9B89B] text-xs mb-6 max-w-[250px] mx-auto md:mr-auto md:ml-0 leading-relaxed uppercase tracking-wider">
              {inv.bride_parents}
            </p>
            {inv.bride_ig && (
              <a
                href={`https://instagram.com/${inv.bride_ig.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C9A86A] hover:text-[#6F7F55] transition-colors group"
              >
                <InstagramIcon
                  size={14}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] tracking-[0.2em] uppercase font-light">
                  {inv.bride_ig}
                </span>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
