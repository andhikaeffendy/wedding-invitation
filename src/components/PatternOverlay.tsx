"use client";
import type { TemplateStyle } from "@/lib/template-styles";

interface PatternOverlayProps {
  style: TemplateStyle;
  className?: string;
}

/** Renders a decorative SVG pattern overlay using design tokens from TemplateStyle */
export default function PatternOverlay({ style, className = "" }: PatternOverlayProps) {
  const pattern = style.bgPattern || "none";
  if (pattern === "none") return null;

  const opacity = style.bgPatternOpacity || 0.04;
  const color = style.bgPatternColor || style.gold;
  const encodedColor = encodeURIComponent(color);

  const svgPatterns: Record<string, string> = {
    dots: `<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="1" fill="${encodedColor}"/></svg>`,
    grid: `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M0 20h40M20 0v40" stroke="${encodedColor}" stroke-width="0.5" fill="none"/></svg>`,
    leaves: `<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><path d="M30 5c0 0-15 20-15 30s8 15 15 20c7-5 15-10 15-20S30 5 30 5z" fill="${encodedColor}" opacity="0.6"/></svg>`,
    waves: `<svg width="120" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 10c20-10 40-10 60 0s40 10 60 0" stroke="${encodedColor}" fill="none" stroke-width="0.8"/></svg>`,
    stars: `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="1" fill="${encodedColor}"/><circle cx="10" cy="5" r="0.5" fill="${encodedColor}"/><circle cx="30" cy="35" r="0.7" fill="${encodedColor}"/></svg>`,
    geometric: `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M0 0l40 40M40 0L0 40" stroke="${encodedColor}" stroke-width="0.3" fill="none"/></svg>`,
    floral: `<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="8" fill="none" stroke="${encodedColor}" stroke-width="0.5"/><circle cx="30" cy="22" r="3" fill="${encodedColor}" opacity="0.4"/><circle cx="38" cy="30" r="3" fill="${encodedColor}" opacity="0.4"/><circle cx="30" cy="38" r="3" fill="${encodedColor}" opacity="0.4"/><circle cx="22" cy="30" r="3" fill="${encodedColor}" opacity="0.4"/></svg>`,
    batik: `<svg width="80" height="80" xmlns="http://www.w3.org/2000/svg"><path d="M40 5L55 25L75 40L55 55L40 75L25 55L5 40L25 25Z" fill="none" stroke="${encodedColor}" stroke-width="0.5"/></svg>`,
    diamond: `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M20 5L35 20L20 35L5 20Z" fill="none" stroke="${encodedColor}" stroke-width="0.3"/></svg>`,
    organic: `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M50 10c20 0 40 15 40 40s-20 40-40 40-40-15-40-40 20-40 40-40z" fill="none" stroke="${encodedColor}" stroke-width="0.5"/></svg>`,
    crosshatch: `<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0l20 20M20 0L0 20" stroke="${encodedColor}" stroke-width="0.3" fill="none"/></svg>`,
  };

  const svg = svgPatterns[pattern];
  if (!svg) return null;

  const bgSizes: Record<string, string> = {
    batik: "80px 80px",
    waves: "120px 20px",
    organic: "100px 100px",
    leaves: "60px 60px",
    floral: "60px 60px",
  };

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none z-[1] ${className}`}
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,${svg}")`,
        backgroundRepeat: "repeat",
        backgroundSize: bgSizes[pattern] || "40px 40px",
      }}
    />
  );
}
