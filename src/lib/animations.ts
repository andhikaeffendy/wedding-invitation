// Shared animation primitives for all wedding templates
// Modern, smooth, premium feel — inspired by top wedding invitation websites

import type { Variants, Transition } from "framer-motion";
import type { Easing } from "framer-motion";

// Spring presets — smooth, natural feel
export const SPRING = {
  gentle: { type: "spring" as const, stiffness: 120, damping: 14, mass: 0.8 },
  snappy: { type: "spring" as const, stiffness: 300, damping: 25, mass: 0.5 },
  bouncy: { type: "spring" as const, stiffness: 200, damping: 10, mass: 1 },
  smooth: { type: "spring" as const, stiffness: 100, damping: 20, mass: 1 },
} as const;

// Scroll-triggered reveal variants
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

// Hero text reveal
export const heroText: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

// Cover opening animation
export const coverReveal: Variants = {
  hidden: { opacity: 0, scale: 1.15, filter: "brightness(1.5)" },
  visible: { opacity: 1, scale: 1, filter: "brightness(1)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, scale: 1.05, filter: "blur(4px)", transition: { duration: 0.8 } },
};

// Card hover effect
export const cardHover = {
  whileHover: { y: -4, scale: 1.01, transition: SPRING.gentle },
  whileTap: { y: 0, scale: 0.98 },
};

// Button interactions
export const btnHover = {
  whileHover: { scale: 1.03, transition: SPRING.snappy },
  whileTap: { scale: 0.96 },
};

// Image gallery reveal
export const galleryItem: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// Countdown number flip
export const countdownFlip: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  animate: { rotateX: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// Floating animation for decorative elements
export const float = {
  animate: {
    y: [0, -12, 0] as number[],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as Easing },
  },
};

// Scale-in with bounce for modals/lightbox
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 400, damping: 25 } },
};

// Section divider reveal
export const dividerReveal: Variants = {
  hidden: { width: 0, opacity: 0 },
  visible: { width: "auto", opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};
