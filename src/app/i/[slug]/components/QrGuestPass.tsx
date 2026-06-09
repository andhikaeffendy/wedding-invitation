"use client";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Download, CheckCircle } from "lucide-react";

export default function QrGuestPass({ guestToken, guest, invitation }: { guestToken: string; guest?: any; invitation?: any }) {
  const inv = invitation || { groom_name: 'Andhika', bride_name: 'Laila', event_date: '2026-08-15', id: 'inv-001' };

  if (!guest || !guest.rsvp_status) return null;

  const qrPayload = JSON.stringify({
    invitation_id: inv.id,
    guest_token: guest.guest_token,
    guest_name: guest.guest_name,
  });

  return (
    <section id="section-qrpass" className="relative py-20 md:py-32 px-6 bg-[#22382D]/3">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">Tiket Masuk</p>
          <h2 className="section-title">QR Guest Pass</h2>
          <p className="text-[#6F7F55] text-sm mt-2">Tunjukkan QR ini saat hadir di acara kami</p>
          <div className="w-16 h-[1px] bg-[#C9A86A] mx-auto mt-4" />
        </motion.div>

        {/* QR Card */}
        <motion.div
          className="card relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Gold Border Glow */}
          <div className="absolute inset-0 rounded-2xl border-2 border-[#C9A86A]/30 animate-pulse-gold pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full border-2 border-[#C9A86A] flex items-center justify-center bg-[#C9A86A]/5">
                <CheckCircle size={28} className="text-[#C9A86A]" />
              </div>
              <h3 className="font-display text-xl text-[#22382D]">Guest Pass</h3>
              <p className="text-xs text-[#C9A86A] mt-1">
                {inv.groom_name} & {inv.bride_name} • {inv.event_date}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-[#C9A86A]/20 my-4" />

            {/* Guest Info */}
            <div className="grid grid-cols-2 gap-3 text-sm mb-6">
              <div>
                <p className="text-[#A9B89B] text-xs">Nama Tamu</p>
                <p className="text-[#22382D] font-medium">{guest.guest_name}</p>
              </div>
              <div>
                <p className="text-[#A9B89B] text-xs">Kategori</p>
                <p className="text-[#22382D] font-medium">{guest.category}</p>
              </div>
              <div>
                <p className="text-[#A9B89B] text-xs">Jumlah Tamu</p>
                <p className="text-[#22382D] font-medium">{guest.pax_confirmed || guest.pax_allocated} orang</p>
              </div>
              <div>
                <p className="text-[#A9B89B] text-xs">Status RSVP</p>
                <p className={`font-medium ${guest.rsvp_status === 'Hadir' ? 'text-[#6F7F55]' : 'text-[#B86B4B]'}`}>
                  {guest.rsvp_status}
                </p>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white rounded-xl shadow-inner">
                <QRCodeSVG
                  value={qrPayload}
                  size={180}
                  level="H"
                  fgColor="#22382D"
                  bgColor="#FFFFFF"
                />
              </div>
            </div>

            {/* Instructions */}
            <p className="text-center text-[#A9B89B] text-xs mb-4">
              Tunjukkan QR ini kepada petugas saat check-in dan pengambilan souvenir
            </p>

            {/* Download Button */}
            <button
              onClick={() => {
                const svg = document.querySelector('#section-qrpass svg');
                if (svg) {
                  const svgData = new XMLSerializer().serializeToString(svg);
                  const canvas = document.createElement('canvas');
                  const ctx = canvas.getContext('2d');
                  const img = new Image();
                  img.onload = () => {
                    canvas.width = 200;
                    canvas.height = 200;
                    ctx?.drawImage(img, 0, 0);
                    const link = document.createElement('a');
                    link.download = `QR-Pass-${guest.guest_name}.png`;
                    link.href = canvas.toDataURL();
                    link.click();
                  };
                  img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
                }
              }}
              className="btn-outline w-full flex items-center justify-center gap-2 text-sm"
            >
              <Download size={16} /> Download QR Pass
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
