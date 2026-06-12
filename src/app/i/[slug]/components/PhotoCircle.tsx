"use client";

import { motion } from "framer-motion";

interface PhotoCircleProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  borderColor?: string;
  borderWidth?: number;
  decorativeBorder?: boolean;
  shadow?: boolean;
  className?: string;
}

export default function PhotoCircle({
  src,
  alt,
  size = "lg",
  borderColor = "#C9A86A",
  borderWidth = 3,
  decorativeBorder = true,
  shadow = true,
  className = "",
}: PhotoCircleProps) {
  const sizeClasses = {
    sm: "w-20 h-20 sm:w-24 sm:h-24",
    md: "w-28 h-28 sm:w-32 sm:h-32",
    lg: "w-36 h-36 sm:w-44 sm:h-44",
    xl: "w-44 h-44 sm:w-52 sm:h-52",
  };

  const borderWidthPx = borderWidth;
  const outerPadding = decorativeBorder ? 8 : 0;

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Decorative border SVG */}
      {decorativeBorder && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          style={{
            transform: "scale(1.12)",
            transformOrigin: "center",
          }}
        >
          {/* Outer decorative circle */}
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke={borderColor}
            strokeWidth="0.5"
            opacity="0.3"
            strokeDasharray="4 4"
          />
          {/* Small decorative dots */}
          <circle cx="50" cy="2" r="1.5" fill={borderColor} opacity="0.4" />
          <circle cx="50" cy="98" r="1.5" fill={borderColor} opacity="0.4" />
          <circle cx="2" cy="50" r="1.5" fill={borderColor} opacity="0.4" />
          <circle cx="98" cy="50" r="1.5" fill={borderColor} opacity="0.4" />
        </svg>
      )}

      {/* Photo container */}
      <div
        className={`${sizeClasses[size]} rounded-full overflow-hidden relative`}
        style={{
          border: `${borderWidthPx}px solid ${borderColor}50`,
          boxShadow: shadow
            ? `0 16px 48px rgba(0,0,0,0.15), 0 0 0 4px ${borderColor}15`
            : "none",
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}
