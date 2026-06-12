"use client";
import { useState } from "react";
import PatternOverlay from "./PatternOverlay";
import type { TemplateStyle } from "@/lib/template-styles";

interface SectionBackgroundProps {
  /** Background image URL */
  bgImage?: string | null;
  /** Overlay color (rgba) for text readability */
  overlayColor?: string;
  /** Opacity of the background image (0-1) */
  imageOpacity?: number;
  /** Template style for pattern rendering */
  style: TemplateStyle;
  /** Whether this is a hero section (eager loading) */
  priority?: boolean;
  /** Additional class names */
  className?: string;
  /** Children rendered above the background */
  children: React.ReactNode;
}

/**
 * Layered section background: image → overlay → pattern → content
 *
 * States:
 * - Default: static bg image with overlay + pattern, content above
 * - Loading: skeleton pulse while image loads (CSS-only)
 * - Error: image hidden, pattern + bg color remain
 * - Empty: no bgImage → only pattern + section bg color
 */
export default function SectionBackground({
  bgImage,
  overlayColor = "rgba(0,0,0,0.45)",
  imageOpacity = 0.25,
  style,
  priority = false,
  className = "",
  children,
}: SectionBackgroundProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background image layer */}
      {bgImage && !imgError && (
        <>
          {/* Skeleton pulse while loading */}
          {!imgLoaded && (
            <div
              aria-hidden="true"
              className="absolute inset-0 animate-pulse"
              style={{ background: style.primary + "08" }}
            />
          )}
          <img
            src={bgImage}
            alt=""
            aria-hidden="true"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ opacity: imgLoaded ? imageOpacity : 0 }}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        </>
      )}

      {/* Overlay for text readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[0]"
        style={{ background: overlayColor }}
      />

      {/* Pattern overlay */}
      <PatternOverlay style={style} />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
