"use client";

import { motion } from "framer-motion";

interface CountdownTileProps {
  value: number;
  label: string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  className?: string;
}

export default function CountdownTile({
  value,
  label,
  color = "#C9A86A",
  bgColor = "rgba(31, 46, 38, 0.6)",
  borderColor = "rgba(201, 168, 106, 0.3)",
  className = "",
}: CountdownTileProps) {
  return (
    <motion.div
      className={`flex flex-col items-center justify-center ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm"
        style={{
          background: bgColor,
          border: `1px solid ${borderColor}`,
          boxShadow: `0 4px 20px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)`,
        }}
      >
        <motion.span
          className="text-2xl sm:text-3xl md:text-4xl font-light tabular-nums"
          style={{ color, fontFamily: "'Cormorant Garamond', serif" }}
          key={value}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {String(value).padStart(2, "0")}
        </motion.span>
        <span
          className="text-[10px] sm:text-xs mt-1 uppercase tracking-wider"
          style={{ color: `${color}80` }}
        >
          {label}
        </span>
      </div>
    </motion.div>
  );
}
