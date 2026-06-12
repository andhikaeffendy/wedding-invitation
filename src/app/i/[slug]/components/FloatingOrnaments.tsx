"use client";
import { motion } from "framer-motion";

interface FloatingOrnamentsProps {
  icons: string[];
  count?: number;
  color?: string;
  className?: string;
}

/**
 * Floating emoji ornaments that gently drift across the screen.
 * Used on cover sections for premium atmosphere.
 */
export default function FloatingOrnaments({
  icons,
  count = 8,
  color,
  className = "",
}: FloatingOrnamentsProps) {
  if (!icons.length || count === 0) return null;

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden z-[3] ${className}`}
    >
      {[...Array(count)].map((_, i) => {
        const icon = icons[i % icons.length];
        const left = 5 + (i * 90) / count + Math.random() * 5;
        const delay = i * 1.5;
        const duration = 12 + (i % 5) * 3;
        const size = 14 + (i % 3) * 4;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              color,
              opacity: 0,
            }}
            animate={{
              y: ["-5vh", "110vh"],
              opacity: [0, 0.25, 0.25, 0],
              rotate: [0, 180, 360],
              x: [0, i % 2 === 0 ? 30 : -30, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {icon}
          </motion.div>
        );
      })}
    </div>
  );
}
