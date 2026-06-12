"use client";

interface BotanicalFrameProps {
  color?: string;
  className?: string;
}

/**
 * Ornate botanical gold frame overlay for cover section.
 * Creates an elegant border with leaf and flower SVG decorations.
 * Matches the reference mockup design.
 */
export default function BotanicalFrame({
  color = "#C9A86A",
  className = "",
}: BotanicalFrameProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none z-[2] ${className}`}
    >
      {/* Top-left corner leaf cluster */}
      <svg
        className="absolute top-4 left-4 w-20 h-20 sm:w-28 sm:h-28"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M10 60C10 30 30 10 60 10C40 15 25 30 20 50C18 55 15 58 10 60Z"
          fill={color}
          opacity="0.15"
        />
        <path
          d="M5 50C5 25 25 5 50 5"
          stroke={color}
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M10 35Q20 20 40 15"
          stroke={color}
          strokeWidth="0.8"
          opacity="0.3"
        />
        <circle cx="15" cy="15" r="2" fill={color} opacity="0.5" />
        <circle cx="25" cy="8" r="1.5" fill={color} opacity="0.3" />
        {/* Leaf shapes */}
        <path
          d="M30 40C25 35 20 25 30 20C35 25 35 35 30 40Z"
          fill={color}
          opacity="0.2"
        />
        <path
          d="M45 30C40 25 35 15 45 10C50 15 50 25 45 30Z"
          fill={color}
          opacity="0.15"
        />
        {/* Gold line border segments */}
        <line x1="0" y1="0" x2="50" y2="0" stroke={color} strokeWidth="1.5" opacity="0.3" />
        <line x1="0" y1="0" x2="0" y2="50" stroke={color} strokeWidth="1.5" opacity="0.3" />
        {/* Corner ornament */}
        <path d="M5 5L15 5M5 5L5 15" stroke={color} strokeWidth="2" opacity="0.6" />
      </svg>

      {/* Top-right corner leaf cluster (mirrored) */}
      <svg
        className="absolute top-4 right-4 w-20 h-20 sm:w-28 sm:h-28"
        viewBox="0 0 120 120"
        fill="none"
        style={{ transform: "scaleX(-1)" }}
      >
        <path
          d="M10 60C10 30 30 10 60 10C40 15 25 30 20 50C18 55 15 58 10 60Z"
          fill={color}
          opacity="0.15"
        />
        <path
          d="M5 50C5 25 25 5 50 5"
          stroke={color}
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M10 35Q20 20 40 15"
          stroke={color}
          strokeWidth="0.8"
          opacity="0.3"
        />
        <circle cx="15" cy="15" r="2" fill={color} opacity="0.5" />
        <path
          d="M30 40C25 35 20 25 30 20C35 25 35 35 30 40Z"
          fill={color}
          opacity="0.2"
        />
        <line x1="0" y1="0" x2="50" y2="0" stroke={color} strokeWidth="1.5" opacity="0.3" />
        <line x1="0" y1="0" x2="0" y2="50" stroke={color} strokeWidth="1.5" opacity="0.3" />
        <path d="M5 5L15 5M5 5L5 15" stroke={color} strokeWidth="2" opacity="0.6" />
      </svg>

      {/* Bottom-left corner leaf cluster */}
      <svg
        className="absolute bottom-4 left-4 w-20 h-20 sm:w-28 sm:h-28"
        viewBox="0 0 120 120"
        fill="none"
        style={{ transform: "scaleY(-1)" }}
      >
        <path
          d="M10 60C10 30 30 10 60 10C40 15 25 30 20 50C18 55 15 58 10 60Z"
          fill={color}
          opacity="0.15"
        />
        <path
          d="M5 50C5 25 25 5 50 5"
          stroke={color}
          strokeWidth="1"
          opacity="0.4"
        />
        <circle cx="15" cy="15" r="2" fill={color} opacity="0.5" />
        <path
          d="M30 40C25 35 20 25 30 20C35 25 35 35 30 40Z"
          fill={color}
          opacity="0.2"
        />
        <line x1="0" y1="0" x2="50" y2="0" stroke={color} strokeWidth="1.5" opacity="0.3" />
        <line x1="0" y1="0" x2="0" y2="50" stroke={color} strokeWidth="1.5" opacity="0.3" />
        <path d="M5 5L15 5M5 5L5 15" stroke={color} strokeWidth="2" opacity="0.6" />
      </svg>

      {/* Bottom-right corner leaf cluster (mirrored) */}
      <svg
        className="absolute bottom-4 right-4 w-20 h-20 sm:w-28 sm:h-28"
        viewBox="0 0 120 120"
        fill="none"
        style={{ transform: "scale(-1,-1)" }}
      >
        <path
          d="M10 60C10 30 30 10 60 10C40 15 25 30 20 50C18 55 15 58 10 60Z"
          fill={color}
          opacity="0.15"
        />
        <path
          d="M5 50C5 25 25 5 50 5"
          stroke={color}
          strokeWidth="1"
          opacity="0.4"
        />
        <circle cx="15" cy="15" r="2" fill={color} opacity="0.5" />
        <path
          d="M30 40C25 35 20 25 30 20C35 25 35 35 30 40Z"
          fill={color}
          opacity="0.2"
        />
        <line x1="0" y1="0" x2="50" y2="0" stroke={color} strokeWidth="1.5" opacity="0.3" />
        <line x1="0" y1="0" x2="0" y2="50" stroke={color} strokeWidth="1.5" opacity="0.3" />
        <path d="M5 5L15 5M5 5L5 15" stroke={color} strokeWidth="2" opacity="0.6" />
      </svg>

      {/* Top center decorative line */}
      <div
        className="absolute top-0 left-[20%] right-[20%] h-[1px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}40, ${color}60, ${color}40, transparent)`,
        }}
      />
      {/* Bottom center decorative line */}
      <div
        className="absolute bottom-0 left-[20%] right-[20%] h-[1px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}40, ${color}60, ${color}40, transparent)`,
        }}
      />
      {/* Left center decorative line */}
      <div
        className="absolute top-[20%] bottom-[20%] left-0 w-[1px]"
        style={{
          background: `linear-gradient(180deg, transparent, ${color}30, ${color}50, ${color}30, transparent)`,
        }}
      />
      {/* Right center decorative line */}
      <div
        className="absolute top-[20%] bottom-[20%] right-0 w-[1px]"
        style={{
          background: `linear-gradient(180deg, transparent, ${color}30, ${color}50, ${color}30, transparent)`,
        }}
      />
    </div>
  );
}
