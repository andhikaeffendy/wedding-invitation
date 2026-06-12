"use client";

import { motion } from "framer-motion";

interface FloralBorderProps {
  color?: string;
  position?: "left" | "right" | "both";
  variant?: "leaves" | "flowers" | "minimal" | "none";
  className?: string;
}

export default function FloralBorder({
  color = "#C9A86A",
  position = "both",
  variant = "leaves",
  className = "",
}: FloralBorderProps) {
  if (variant === "none") return null;

  const renderSide = (side: "left" | "right") => {
    const isLeft = side === "left";
    const transform = isLeft ? "scaleX(-1)" : "none";

    if (variant === "leaves") {
      return (
        <svg
          className={`absolute top-0 h-full w-12 sm:w-16 pointer-events-none ${
            isLeft ? "left-0" : "right-0"
          }`}
          viewBox="0 0 60 300"
          preserveAspectRatio="xMidYMid slice"
          style={{ transform }}
        >
          {/* Leaf decorations */}
          <path
            d="M 30 20 Q 10 50 30 80 Q 50 110 30 140"
            fill="none"
            stroke={color}
            strokeWidth="0.75"
            opacity="0.25"
          />
          <path
            d="M 30 160 Q 10 190 30 220 Q 50 250 30 280"
            fill="none"
            stroke={color}
            strokeWidth="0.75"
            opacity="0.25"
          />
          <circle cx="30" cy="60" r="3" fill={color} opacity="0.15" />
          <circle cx="30" cy="180" r="3" fill={color} opacity="0.15" />
        </svg>
      );
    }

    if (variant === "flowers") {
      return (
        <svg
          className={`absolute top-0 h-full w-16 sm:w-20 pointer-events-none ${
            isLeft ? "left-0" : "right-0"
          }`}
          viewBox="0 0 80 300"
          preserveAspectRatio="xMidYMid slice"
          style={{ transform }}
        >
          {/* Flower decorations */}
          <g opacity="0.2">
            <circle cx="40" cy="40" r="8" fill="none" stroke={color} strokeWidth="0.5" />
            <circle cx="40" cy="40" r="4" fill={color} opacity="0.3" />
            <circle cx="40" cy="120" r="6" fill="none" stroke={color} strokeWidth="0.5" />
            <circle cx="40" cy="120" r="3" fill={color} opacity="0.3" />
            <circle cx="40" cy="200" r="8" fill="none" stroke={color} strokeWidth="0.5" />
            <circle cx="40" cy="200" r="4" fill={color} opacity="0.3" />
            <circle cx="40" cy="280" r="6" fill="none" stroke={color} strokeWidth="0.5" />
            <circle cx="40" cy="280" r="3" fill={color} opacity="0.3" />
          </g>
        </svg>
      );
    }

    if (variant === "minimal") {
      return (
        <svg
          className={`absolute top-0 h-full w-8 sm:w-10 pointer-events-none ${
            isLeft ? "left-0" : "right-0"
          }`}
          viewBox="0 0 40 300"
          preserveAspectRatio="xMidYMid slice"
          style={{ transform }}
        >
          <line
            x1="20"
            y1="20"
            x2="20"
            y2="280"
            stroke={color}
            strokeWidth="0.5"
            opacity="0.15"
            strokeDasharray="4 4"
          />
        </svg>
      );
    }

    return null;
  };

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {(position === "left" || position === "both") && renderSide("left")}
      {(position === "right" || position === "both") && renderSide("right")}
    </motion.div>
  );
}
