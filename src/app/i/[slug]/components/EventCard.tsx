"use client";

import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

interface EventCardProps {
  icon: string;
  title: string;
  time: string;
  venue: string;
  address: string;
  color?: string;
  goldColor?: string;
  cardBg?: string;
  borderColor?: string;
  index?: number;
  className?: string;
}

export default function EventCard({
  icon,
  title,
  time,
  venue,
  address,
  color = "#1F2E26",
  goldColor = "#C9A86A",
  cardBg = "rgba(255, 255, 255, 0.8)",
  borderColor = "rgba(201, 168, 106, 0.15)",
  index = 0,
  className = "",
}: EventCardProps) {
  return (
    <motion.div
      className={`p-6 sm:p-8 rounded-2xl text-center relative overflow-hidden ${className}`}
      style={{
        background: cardBg,
        backdropFilter: "blur(12px)",
        border: `1px solid ${borderColor}`,
        boxShadow: `0 4px 20px rgba(0,0,0,0.05)`,
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Decorative corner */}
      <div
        className="absolute top-3 right-3 w-6 h-6"
        style={{
          borderTop: `1px solid ${goldColor}30`,
          borderRight: `1px solid ${goldColor}30`,
        }}
      />
      <div
        className="absolute bottom-3 left-3 w-6 h-6"
        style={{
          borderBottom: `1px solid ${goldColor}30`,
          borderLeft: `1px solid ${goldColor}30`,
        }}
      />

      <motion.span
        className="text-3xl sm:text-4xl mb-4 block"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
      >
        {icon}
      </motion.span>

      <h3
        className="text-lg sm:text-xl mb-3"
        style={{ color: goldColor, fontFamily: "'Cormorant Garamond', serif" }}
      >
        {title}
      </h3>

      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 text-xs sm:text-sm opacity-60 mb-2">
        <span className="flex items-center justify-center gap-1.5">
          <Clock size={13} style={{ color: goldColor }} />
          {time}
        </span>
        <span className="flex items-center justify-center gap-1.5">
          <MapPin size={13} style={{ color: goldColor }} />
          {venue}
        </span>
      </div>

      <p className="text-[11px] sm:text-xs opacity-40">{address}</p>
    </motion.div>
  );
}
