"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

interface GiftCardProps {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  color?: string;
  goldColor?: string;
  cardBg?: string;
  borderColor?: string;
  index?: number;
  className?: string;
}

export default function GiftCard({
  bankName,
  accountNumber,
  accountHolder,
  color = "#1F2E26",
  goldColor = "#C9A86A",
  cardBg = "rgba(255, 255, 255, 0.8)",
  borderColor = "rgba(201, 168, 106, 0.15)",
  index = 0,
  className = "",
}: GiftCardProps) {
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.div
      className={`p-5 sm:p-6 rounded-2xl relative ${className}`}
      style={{
        background: cardBg,
        backdropFilter: "blur(12px)",
        border: `1px solid ${borderColor}`,
        boxShadow: `0 4px 20px rgba(0,0,0,0.05)`,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-semibold" style={{ color }}>
            {bankName}
          </p>
          <p
            className="font-mono text-base sm:text-lg tracking-wider mt-1"
            style={{ color: goldColor }}
          >
            {accountNumber}
          </p>
          <p className="text-[10px] sm:text-xs opacity-40 truncate">
            a.n. {accountHolder}
          </p>
        </div>
        <motion.button
          onClick={handleCopy}
          className="px-4 sm:px-5 py-2 text-[10px] sm:text-xs font-medium rounded-full transition-all shrink-0 min-h-[40px] flex items-center gap-1.5"
          style={{
            background: copied ? goldColor : "transparent",
            color: copied ? "white" : goldColor,
            border: `1px solid ${goldColor}40`,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {copied ? (
            <>
              <Check size={12} /> Tersalin
            </>
          ) : (
            <>
              <Copy size={12} /> Salin
            </>
          )}
        </motion.button>
      </div>
      {/* QR Code toggle */}
      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={() => setShowQr(!showQr)}
          className="text-[10px] px-3 py-1.5 rounded-lg font-medium transition-all hover:scale-105"
          style={{ background: `${goldColor}12`, color: goldColor, border: `1px solid ${goldColor}25` }}
        >
          {showQr ? "Sembunyikan QR" : "Tampilkan QRIS"}
        </button>
      </div>
      {/* QR Code */}
      {showQr && (
        <motion.div
          className="mt-3 flex justify-center"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white p-2 rounded-lg" style={{ border: `1px solid ${goldColor}20` }}>
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(accountNumber)}`}
              alt="QR Code"
              className="w-[100px] h-[100px]"
              loading="lazy"
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
