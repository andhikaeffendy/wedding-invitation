"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Gift, Upload, Building } from "lucide-react";

export default function GiftSection({ bankAccounts }: { guestToken?: string; bankAccounts?: any[] }) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const banks = bankAccounts || [
    { bank_name: 'BCA', account_number: '1234567890', account_holder: 'Laila Nur Azizah' },
    { bank_name: 'Mandiri', account_number: '0987654321', account_holder: 'Andhika Pratama' },
    { bank_name: 'OVO', account_number: '081234567891', account_holder: 'Laila Nur Azizah' },
  ];

  const copyAccount = (text: string, i: number) => {
    navigator.clipboard.writeText(text); setCopiedIndex(i);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <section id="section-gift" className="relative py-20 md:py-32 px-6" aria-labelledby="gift-heading">
      <div className="max-w-lg mx-auto">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-subtitle">Kirim Hadiah</p>
          <h2 className="section-title" id="gift-heading">Digital Gift</h2>
          <p className="text-[#6F7F55] text-sm mt-2 max-w-sm mx-auto leading-relaxed">Doa restu Anda adalah karunia terindah.</p>
          <div className="w-16 h-[1px] bg-[#C9A86A] mx-auto mt-4" aria-hidden="true" />
        </motion.div>
        <ul className="space-y-4 mb-8" aria-label="Daftar rekening hadiah">
          {banks.map((bank: any, i: number) => (
            <motion.li key={i} className="card flex items-center justify-between" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#22382D]/5 flex items-center justify-center" aria-hidden="true"><Building size={24} className="text-[#6F7F55]" /></div>
                <div>
                  <p className="font-semibold text-[#22382D] text-sm">{bank.bank_name}</p>
                  <p className="text-[#C9A86A] font-mono text-lg">{bank.account_number}</p>
                  <p className="text-[#A9B89B] text-xs">a.n. {bank.account_holder}</p>
                </div>
              </div>
              <motion.button
                onClick={() => copyAccount(bank.account_number, i)}
                aria-label={copiedIndex === i ? `Nomor ${bank.bank_name} tersalin` : `Salin nomor rekening ${bank.bank_name}`}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium ${copiedIndex === i ? 'bg-[#6F7F55] text-white' : 'bg-[#C9A86A]/10 text-[#C9A86A]'}`}
                whileTap={{ scale: 0.95 }}
              >
                {copiedIndex === i ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}{copiedIndex === i ? 'Tersalin' : 'Salin'}
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
