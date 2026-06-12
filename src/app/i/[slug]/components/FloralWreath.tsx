"use client";

interface FloralWreathProps {
  src: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
  className?: string;
}

const SIZES = {
  sm: { container: "w-28 h-28", border: 120 },
  md: { container: "w-36 h-36", border: 140 },
  lg: { container: "w-44 h-44 sm:w-52 sm:h-52", border: 180 },
  xl: { container: "w-56 h-56 sm:w-64 sm:h-64", border: 220 },
};

/**
 * Circular photo with decorative floral wreath border.
 * Matches reference mockup: circular photo frame with gold leaves + flowers.
 */
export default function FloralWreath({
  src,
  alt = "Couple photo",
  size = "lg",
  color = "#C9A86A",
  className = "",
}: FloralWreathProps) {
  const s = SIZES[size];

  return (
    <div className={`relative ${s.container} mx-auto ${className}`}>
      {/* Outer floral wreath SVG ring */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 200"
        fill="none"
      >
        {/* Outer decorative ring */}
        <circle
          cx="100"
          cy="100"
          r="95"
          stroke={color}
          strokeWidth="0.5"
          opacity="0.3"
        />
        <circle
          cx="100"
          cy="100"
          r="90"
          stroke={color}
          strokeWidth="1"
          opacity="0.4"
        />
        {/* Inner ring */}
        <circle
          cx="100"
          cy="100"
          r="82"
          stroke={color}
          strokeWidth="0.5"
          opacity="0.25"
        />

        {/* Top leaf cluster */}
        <path d="M100 8C95 15 90 20 88 28C92 22 96 15 100 8Z" fill={color} opacity="0.3" />
        <path d="M100 8C105 15 110 20 112 28C108 22 104 15 100 8Z" fill={color} opacity="0.25" />
        <circle cx="100" cy="5" r="2" fill={color} opacity="0.4" />
        {/* Small flower top */}
        <circle cx="92" cy="12" r="1.5" fill={color} opacity="0.2" />
        <circle cx="108" cy="12" r="1.5" fill={color} opacity="0.2" />

        {/* Right leaf cluster */}
        <path d="M192 100C185 95 180 90 172 88C178 92 185 96 192 100Z" fill={color} opacity="0.3" />
        <path d="M192 100C185 105 180 110 172 112C178 108 185 104 192 100Z" fill={color} opacity="0.25" />
        <circle cx="195" cy="100" r="2" fill={color} opacity="0.4" />

        {/* Bottom leaf cluster */}
        <path d="M100 192C95 185 90 180 88 172C92 178 96 185 100 192Z" fill={color} opacity="0.3" />
        <path d="M100 192C105 185 110 180 112 172C108 178 104 185 100 192Z" fill={color} opacity="0.25" />
        <circle cx="100" cy="195" r="2" fill={color} opacity="0.4" />

        {/* Left leaf cluster */}
        <path d="M8 100C15 95 20 90 28 88C22 92 15 96 8 100Z" fill={color} opacity="0.3" />
        <path d="M8 100C15 105 20 110 28 112C22 108 15 104 8 100Z" fill={color} opacity="0.25" />
        <circle cx="5" cy="100" r="2" fill={color} opacity="0.4" />

        {/* Diagonal leaf clusters - top-right */}
        <path d="M165 35C158 40 152 46 147 53C153 47 159 41 165 35Z" fill={color} opacity="0.2" />
        <path d="M170 30C163 35 157 41 152 48C158 42 164 36 170 30Z" fill={color} opacity="0.15" />

        {/* Diagonal leaf clusters - bottom-right */}
        <path d="M165 165C158 160 152 154 147 147C153 153 159 159 165 165Z" fill={color} opacity="0.2" />

        {/* Diagonal leaf clusters - top-left */}
        <path d="M35 35C42 40 48 46 53 53C47 47 41 41 35 35Z" fill={color} opacity="0.2" />

        {/* Diagonal leaf clusters - bottom-left */}
        <path d="M35 165C42 160 48 154 53 147C47 153 41 159 35 165Z" fill={color} opacity="0.2" />

        {/* Small decorative dots along ring */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x = 100 + 87 * Math.cos(rad);
          const y = 100 + 87 * Math.sin(rad);
          return (
            <circle
              key={angle}
              cx={x}
              cy={y}
              r="1"
              fill={color}
              opacity="0.3"
            />
          );
        })}
      </svg>

      {/* Photo container with circular mask */}
      <div className="absolute inset-[8%] rounded-full overflow-hidden border-2 border-white/20">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
    </div>
  );
}
