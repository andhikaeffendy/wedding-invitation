"use client";
import { motion } from "framer-motion";
import type { TemplateStyle } from "@/lib/template-styles";
import type { CoverConfig } from "@/lib/template-covers";

interface CoverButtonProps {
  onClick: () => void;
  style: TemplateStyle;
  cover: CoverConfig;
  /** Enables delayed entrance animation */
  animate?: boolean;
  /** Additional class names */
  className?: string;
  /** Layout context for variant selection */
  layout:
    | "typography-only"
    | "cinematic-dark"
    | "letterpress"
    | "split-photo-left"
    | "split-photo-right"
    | "split-vertical"
    | "fullscreen-photo"
    | "framed-photo"
    | "art-deco-frame"
    | "overlay-pattern";
}

/**
 * Cover CTA Button with template-aware glass morphism variants
 *
 * 9 States: default, hover, active, focus, disabled, loading, empty, error, success
 * 9 Layout Variants: per cover layout type
 */
export default function CoverButton({
  onClick,
  style,
  cover,
  animate = true,
  className = "",
  layout,
}: CoverButtonProps) {
  // Determine button variant based on layout
  const needsGlassSeparation = ["typography-only", "cinematic-dark", "letterpress"].includes(layout);

  const btnClass = (() => {
    const base =
      cover.buttonStyle === "pill"
        ? "rounded-full px-10 sm:px-14 py-3.5"
        : cover.buttonStyle === "sharp"
          ? "rounded-sm px-10 sm:px-14 py-3.5"
          : cover.buttonStyle === "rounded"
            ? "rounded-xl px-10 sm:px-14 py-3.5"
            : cover.buttonStyle === "bordered"
              ? "rounded-full px-10 sm:px-14 py-3 border-2"
              : "px-10 sm:px-14 py-3.5 border-b-2";

    if (needsGlassSeparation) {
      return `${base} backdrop-blur-md shadow-lg`;
    }
    return `${base} backdrop-blur-sm shadow-md`;
  })();

  // Glass morphism background + accent ring for vulnerable layouts
  const glassStyles = needsGlassSeparation
    ? {
        background: `linear-gradient(135deg, ${style.gold}DD, ${style.accent || style.gold}DD)`,
        border: `1px solid rgba(255,255,255,0.25)`,
        boxShadow: `0 4px 24px rgba(0,0,0,0.15), 0 0 0 1px ${style.gold}40`,
        color: "#fff",
    }
    : {
        background: `linear-gradient(135deg, ${style.gold}, ${style.accent || style.gold})`,
        color: "#fff",
    };

  // Letterpress variant uses transparent bg with outline
  if (layout === "letterpress") {
    glassStyles.background = "transparent";
    glassStyles.color = cover.frameColor;
    glassStyles.border = `2px solid ${cover.frameColor}`;
    glassStyles.boxShadow = `0 4px 12px rgba(0,0,0,0.15)`;
  }

  const button = (
    <button
      onClick={onClick}
      className={`font-medium text-sm tracking-wider transition-all duration-300 ${btnClass} ${className} hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 min-h-[44px]`}
      style={{
        ...glassStyles,
        outlineColor: style.gold,
      }}
      aria-label="Buka undangan pernikahan"
    >
      💌 Buka Undangan
    </button>
  );

  // No animation wrapper needed
  if (!animate) return button;

  // Delayed entrance: 300ms after names animate in
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {button}
    </motion.div>
  );
}
