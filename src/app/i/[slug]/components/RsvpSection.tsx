"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, HelpCircle, Users, MessageCircle, Heart } from "lucide-react";
import { getGuestByToken, submitRsvp } from "@/lib/dummy-data";

export default function RsvpSection({ guestToken, guest, invitation }: { guestToken: string; guest?: any; invitation?: any }) {
  const maxPax = guest?.pax_allocated || 5;
  const [status, setStatus] = useState<'Hadir' | 'Tidak Hadir' | 'Ragu-ragu' | null>(guest?.rsvp_status || null);
  const [pax, setPax] = useState(guest?.pax_confirmed || 1);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(!!guest?.rsvp_status);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!status || !guestToken) return;
    setIsSubmitting(true);
    await fetch('/api/public/invitation/andhika-laila', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guestToken, status, paxConfirmed: pax, message }),
    });
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const options = [
    { value: 'Hadir' as const, label: 'Hadir', icon: Check, color: 'bg-[#6F7F55]', activeColor: 'ring-[#6F7F55] bg-[#6F7F55] text-white' },
    { value: 'Tidak Hadir' as const, label: 'Tidak Hadir', icon: X, color: 'bg-[#B86B4B]', activeColor: 'ring-[#B86B4B] bg-[#B86B4B] text-white' },
    { value: 'Ragu-ragu' as const, label: 'Ragu-ragu', icon: HelpCircle, color: 'bg-[#C9A86A]', activeColor: 'ring-[#C9A86A] bg-[#C9A86A] text-white' },
  ];

  return (
    <section id="section-rsvp" className="relative py-20 md:py-32 px-6">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">Konfirmasi Kehadiran</p>
          <h2 className="section-title">RSVP</h2>
          <p className="text-[#6F7F55] text-sm mt-2">Konfirmasi kehadiran Anda sangat berarti bagi kami</p>
          <div className="w-16 h-[1px] bg-[#C9A86A] mx-auto mt-4" />
        </motion.div>

        {submitted ? (
          <motion.div
            className="card text-center py-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-20 h-20 rounded-full bg-[#6F7F55]/10 flex items-center justify-center mx-auto mb-6">
              <Heart size={36} className="text-[#6F7F55]" />
            </div>
            <h3 className="font-display text-2xl text-[#22382D] mb-2">Terima Kasih!</h3>
            <p className="text-[#6F7F55] text-sm">
              {status === 'Hadir' ? `Konfirmasi kehadiran Anda untuk ${pax} orang telah diterima.` :
               status === 'Tidak Hadir' ? 'Mohon maaf Anda tidak dapat hadir. Doa tetap kami harapkan.' :
               'Konfirmasi Anda telah diterima. Sampai jumpa!'}
            </p>
            {guest?.rsvp_status === 'Hadir' && (
              <p className="text-xs text-[#C9A86A] mt-4 animate-pulse">
                ⬇️ QR Pass Anda tersedia di bawah ⬇️
              </p>
            )}
          </motion.div>
        ) : (
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Guest Name */}
            {guest && (
              <div className="text-center mb-6">
                <p className="text-[#A9B89B] text-sm">Kepada:</p>
                <p className="font-display text-xl text-[#22382D]">{guest.guest_name}</p>
                <p className="text-[#6F7F55] text-xs">Alokasi: {guest.pax_allocated} orang</p>
              </div>
            )}

            {/* Status Selection */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {options.map((opt) => (
                <motion.button
                  key={opt.value}
                  onClick={() => setStatus(opt.value)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-300 ${
                    status === opt.value
                      ? `${opt.activeColor} border-transparent shadow-lg`
                      : `border-[#C9A86A]/20 text-[#6F7F55] hover:border-[#C9A86A]/50`
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <opt.icon size={24} />
                  <span className="text-xs font-medium">{opt.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Pax Selection */}
            {status === 'Hadir' && (
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <label className="flex items-center gap-2 text-sm text-[#22382D] mb-3">
                  <Users size={16} className="text-[#C9A86A]" /> Jumlah Tamu Hadir
                </label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPax(Math.max(1, pax - 1))}
                    className="w-10 h-10 rounded-full border border-[#C9A86A]/30 flex items-center justify-center text-[#C9A86A] hover:bg-[#C9A86A]/10"
                  >
                    -
                  </button>
                  <span className="w-14 text-center font-display text-xl text-[#22382D]">{pax}</span>
                  <button
                    onClick={() => setPax(Math.min(guest?.pax_allocated || 5, pax + 1))}
                    className="w-10 h-10 rounded-full border border-[#C9A86A]/30 flex items-center justify-center text-[#C9A86A] hover:bg-[#C9A86A]/10"
                  >
                    +
                  </button>
                  {guest && <span className="text-xs text-[#A9B89B]">/ max {guest.pax_allocated}</span>}
                </div>
              </motion.div>
            )}

            {/* Message */}
            {status && (
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <label className="flex items-center gap-2 text-sm text-[#22382D] mb-2">
                  <MessageCircle size={16} className="text-[#C9A86A]" /> Pesan (opsional)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tulis pesan untuk kedua mempelai..."
                  className="w-full px-4 py-3 rounded-xl border border-[#C9A86A]/20 bg-white/50 text-sm text-[#22382D] placeholder:text-[#A9B89B] focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/30 resize-none"
                  rows={3}
                />
              </motion.div>
            )}

            {/* Submit */}
            {status && (
              <motion.button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileTap={{ scale: 0.97 }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Check size={18} /> Konfirmasi Kehadiran
                  </>
                )}
              </motion.button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
