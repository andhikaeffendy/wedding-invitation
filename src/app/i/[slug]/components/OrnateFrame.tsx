"use client";

import { motion } from "framer-motion";

interface OrnateFrameProps {
  children: React.ReactNode;
  color?: string;
  variant?: "ornate-corners" | "ornate-full" | "floral-wreath" | "geometric" | "leaf-border" | "batik-pattern" | "thin-gold" | "double-gold";
  className?: string;
}

export default function OrnateFrame({
  children,
  color = "#C9A86A",
  variant = "ornate-corners",
  className = "",
}: OrnateFrameProps) {
  const renderFrame = () => {
    switch (variant) {
      case "ornate-corners":
        return (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
          >
            {/* Top-left corner */}
            <path
              d="M 0 40 Q 0 0 40 0 L 80 0"
              fill="none"
              stroke={color}
              strokeWidth="1.5"
              opacity="0.6"
            />
            <path
              d="M 0 60 Q 0 0 60 0"
              fill="none"
              stroke={color}
              strokeWidth="0.5"
              opacity="0.3"
            />
            {/* Top-right corner */}
            <path
              d="M 320 0 L 360 0 Q 400 0 400 40"
              fill="none"
              stroke={color}
              strokeWidth="1.5"
              opacity="0.6"
            />
            <path
              d="M 340 0 L 400 0 Q 400 0 400 60"
              fill="none"
              stroke={color}
              strokeWidth="0.5"
              opacity="0.3"
            />
            {/* Bottom-left corner */}
            <path
              d="M 0 260 Q 0 300 40 300 L 80 300"
              fill="none"
              stroke={color}
              strokeWidth="1.5"
              opacity="0.6"
            />
            <path
              d="M 0 240 Q 0 300 60 300"
              fill="none"
              stroke={color}
              strokeWidth="0.5"
              opacity="0.3"
            />
            {/* Bottom-right corner */}
            <path
              d="M 320 300 L 360 300 Q 400 300 400 260"
              fill="none"
              stroke={color}
              strokeWidth="1.5"
              opacity="0.6"
            />
            <path
              d="M 340 300 L 400 300 Q 400 300 400 240"
              fill="none"
              stroke={color}
              strokeWidth="0.5"
              opacity="0.3"
            />
          </svg>
        );

      case "ornate-full":
        return (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
          >
            <rect
              x="2"
              y="2"
              width="396"
              height="296"
              rx="8"
              fill="none"
              stroke={color}
              strokeWidth="1"
              opacity="0.5"
            />
            <rect
              x="8"
              y="8"
              width="384"
              height="284"
              rx="6"
              fill="none"
              stroke={color}
              strokeWidth="0.5"
              opacity="0.3"
            />
            {/* Corner decorations */}
            <circle cx="8" cy="8" r="3" fill={color} opacity="0.4" />
            <circle cx="392" cy="8" r="3" fill={color} opacity="0.4" />
            <circle cx="8" cy="292" r="3" fill={color} opacity="0.4" />
            <circle cx="392" cy="292" r="3" fill={color} opacity="0.4" />
          </svg>
        );

      case "floral-wreath":
        return (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
          >
            {/* Wreath-like decorative corners */}
            <path
              d="M 20 20 Q 50 5 80 20"
              fill="none"
              stroke={color}
              strokeWidth="1"
              opacity="0.4"
            />
            <path
              d="M 320 20 Q 350 5 380 20"
              fill="none"
              stroke={color}
              strokeWidth="1"
              opacity="0.4"
            />
            <path
              d="M 20 280 Q 50 295 80 280"
              fill="none"
              stroke={color}
              strokeWidth="1"
              opacity="0.4"
            />
            <path
              d="M 320 280 Q 350 295 380 280"
              fill="none"
              stroke={color}
              strokeWidth="1"
              opacity="0.4"
            />
          </svg>
        );

      case "geometric":
        return (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
          >
            {/* Art deco geometric lines */}
            <path
              d="M 0 20 L 40 20 L 40 0"
              fill="none"
              stroke={color}
              strokeWidth="1.5"
              opacity="0.5"
            />
            <path
              d="M 400 20 L 360 20 L 360 0"
              fill="none"
              stroke={color}
              strokeWidth="1.5"
              opacity="0.5"
            />
            <path
              d="M 0 280 L 40 280 L 40 300"
              fill="none"
              stroke={color}
              strokeWidth="1.5"
              opacity="0.5"
            />
            <path
              d="M 400 280 L 360 280 L 360 300"
              fill="none"
              stroke={color}
              strokeWidth="1.5"
              opacity="0.5"
            />
          </svg>
        );

      case "thin-gold":
        return (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
          >
            <rect
              x="1"
              y="1"
              width="398"
              height="298"
              rx="4"
              fill="none"
              stroke={color}
              strokeWidth="0.75"
              opacity="0.4"
            />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {renderFrame()}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
