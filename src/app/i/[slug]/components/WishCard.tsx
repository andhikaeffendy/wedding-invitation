"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface WishCardProps {
  name: string;
  message: string;
  time?: string;
  color?: string;
  goldColor?: string;
  cardBg?: string;
  borderColor?: string;
  index?: number;
  className?: string;
}

export default function WishCard({
  name,
  message,
  time,
  color = "#1F2E26",
  goldColor = "#C9A86A",
  cardBg = "rgba(255, 255, 255, 0.8)",
  borderColor = "rgba(201, 168, 106, 0.15)",
  index = 0,
  className = "",
}: WishCardProps) {
  return (
    <motion.div
      className={`p-4 sm:p-5 rounded-xl ${className}`}
      style={{
        background: cardBg,
        backdropFilter: "blur(12px)",
        border: `1px solid ${borderColor}`,
        boxShadow: `0 2px 12px rgba(0,0,0,0.04)`,
      }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="flex items-start gap-3">
        {/* Avatar — initial letter */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-semibold"
          style={{ background: goldColor, color: "white" }}
        >
          {name[0]?.toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-semibold" style={{ color: goldColor }}>
            {name}
          </p>
          <p className="text-[11px] sm:text-xs mt-1 opacity-70 leading-relaxed">
            {message}
          </p>
          {time && (
            <p className="text-[10px] mt-2 opacity-40">{time}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
