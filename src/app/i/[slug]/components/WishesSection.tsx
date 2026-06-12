"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Heart, Clock } from "lucide-react";

export default function WishesSection({ guestToken, wishes: initialWishes, invitation }: { guestToken: string; wishes?: any[]; invitation?: any }) {
  const [wishes, setWishes] = useState<any[]>(initialWishes || []);
  const [senderName, setSenderName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    if (!senderName.trim() || !message.trim()) return;
    setIsSubmitting(true);
    const res = await fetch('/api/public/invitation/andhika-laila', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ invitationId: invitation?.id || 'inv-001', senderName, text: message, guestToken: guestToken || undefined }),
    });
    const data = await res.json();
    if (data.success) {
      setWishes([data.wish, ...wishes]);
      setMessage("");
      setSent(true);
      setTimeout(() => setSent(false), 2000);
    }
    setIsSubmitting(false);
  };

  return (
    <section id="section-wishes" className="relative py-20 md:py-32 px-6" aria-labelledby="wishes-heading">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">Ucapan & Doa</p>
          <h2 className="section-title" id="wishes-heading">Wishes</h2>
          <p className="text-[#6F7F55] text-sm mt-2">Berikan ucapan dan doa terbaik untuk kami</p>
          <div className="w-16 h-[1px] bg-[#C9A86A] mx-auto mt-4" aria-hidden="true" />
        </motion.div>

        {/* Form */}
        <motion.div
          className="card mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-4" aria-label="Form ucapan">
            <div>
              <label htmlFor="wish-sender-name" className="sr-only">Nama Anda</label>
              <input
                id="wish-sender-name"
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Nama Anda"
                required
                className="w-full px-4 py-3 rounded-xl border border-[#C9A86A]/20 bg-white/50 text-sm text-[#22382D] placeholder:text-[#A9B89B] focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/30"
              />
            </div>
            <div>
              <label htmlFor="wish-message" className="sr-only">Ucapan dan doa</label>
              <textarea
                id="wish-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tulis ucapan dan doa terbaik..."
                required
                className="w-full px-4 py-3 rounded-xl border border-[#C9A86A]/20 bg-white/50 text-sm text-[#22382D] placeholder:text-[#A9B89B] focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/30 resize-none"
                rows={3}
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting || !senderName.trim() || !message.trim()}
              aria-label={isSubmitting ? 'Mengirim ucapan...' : 'Kirim ucapan'}
              aria-busy={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileTap={{ scale: 0.97 }}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
              ) : (
                <>
                  <Send size={16} aria-hidden="true" /> Kirim Ucapan
                </>
              )}
            </motion.button>
          </form>

          {/* Success */}
          <AnimatePresence>
            {sent && (
              <motion.div
                className="mt-4 p-3 bg-[#6F7F55]/10 rounded-xl text-center"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                role="status"
                aria-live="polite"
              >
                <Heart size={16} className="text-[#6F7F55] mx-auto mb-1" aria-hidden="true" />
                <p className="text-[#6F7F55] text-xs">Ucapan terkirim! Terima kasih 🙏</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Wishes List */}
        <ul className="space-y-4" aria-label="Daftar ucapan">
          {wishes.map((w, i) => (
            <motion.li
              key={w.id}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#6F7F55] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span className="text-white text-sm font-display">{w.sender_name?.charAt(0)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-[#22382D] text-sm">{w.sender_name}</p>
                    <span className="flex items-center gap-1 text-[#A9B89B] text-xs">
                      <Clock size={10} aria-hidden="true" />
                      {new Date(w.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                  <p className="text-[#6F7F55] text-sm leading-relaxed">{w.message}</p>
                </div>
              </div>
            </motion.li>
          ))}

          {wishes.length === 0 && (
            <li className="text-center py-8">
              <Heart size={32} className="text-[#C9A86A]/30 mx-auto mb-3" aria-hidden="true" />
              <p className="text-[#A9B89B] text-sm">Belum ada ucapan. Jadilah yang pertama!</p>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
