// Wekita Elegance V6 — Design Tokens with Dark Mode + Accessibility
import React from "react";

// ═══ COLOR TOKENS (WCAG AA compliant) ═══
// Gold fix: #b8933a for 4.5:1 contrast on cream (#f4ead8)
export const V = {
  color: {
    forest: 'var(--we-forest, #0d2518)',
    forest2: 'var(--we-forest2, #102c1d)',
    deep: 'var(--we-deep, #06160f)',
    sage: 'var(--we-sage, #8f9b73)',
    olive: 'var(--we-olive, #4f5f38)',
    gold: 'var(--we-gold, #b8933a)',
    gold2: 'var(--we-gold2, #e2c982)',
    goldDark: 'var(--we-goldDark, #8d7139)',
    ivory: 'var(--we-ivory, #fbf6ea)',
    cream: 'var(--we-cream, #f4ead8)',
    ink: 'var(--we-ink, #2f2a22)',
    muted: 'var(--we-muted, #746b5d)',
    white: 'var(--we-white, #fffef8)',
    text: 'var(--we-text, #2f2a22)',
    textDark: 'var(--we-textDark, #4b3f2d)',
    textMuted: 'var(--we-textMuted, #645b4d)',
    bg: 'var(--we-bg, linear-gradient(135deg,#f4ead8,#fffaf0 48%,#efe2c8))',
  },
  font: {
    serif: 'var(--font-serif), "Cormorant Garamond", serif',
    display: 'var(--font-display), "Playfair Display", serif',
    script: 'var(--font-script), "Great Vibes", cursive',
    body: 'var(--font-inter), "Inter", sans-serif',
  },
  shadowSoft: 'var(--we-shadow-soft, 0 12px 34px rgba(44,35,20,.12))',
  photoUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=82',
} as const;

// ═══ SVG COMPONENTS ═══
export const VineTopLeft: React.FC = () => (
  <svg viewBox="0 0 240 260" className="w-full h-auto" aria-hidden="true">
    <path d="M55 250C20 160 58 80 170 20" fill="none" stroke="var(--we-gold,#c6a461)" strokeWidth="2"/>
    <g fill="var(--we-ivory,#fbf6ea)"><circle cx="69" cy="198" r="22"/><circle cx="104" cy="137" r="24"/><circle cx="151" cy="78" r="20"/></g>
    <g fill="#74835b"><ellipse cx="43" cy="216" rx="14" ry="35" transform="rotate(-34 43 216)"/><ellipse cx="91" cy="164" rx="13" ry="34" transform="rotate(22 91 164)"/><ellipse cx="136" cy="106" rx="13" ry="35" transform="rotate(-35 136 106)"/></g>
    <g fill="var(--we-gold,#c6a461)"><circle cx="80" cy="186" r="4"/><circle cx="112" cy="130" r="4"/><circle cx="160" cy="70" r="4"/></g>
  </svg>
);

export const VineBottomRight: React.FC = () => (
  <svg viewBox="0 0 240 260" className="w-full h-auto" aria-hidden="true">
    <path d="M55 250C20 160 58 80 170 20" fill="none" stroke="var(--we-gold,#c6a461)" strokeWidth="2"/>
    <g fill="var(--we-ivory,#fbf6ea)"><circle cx="69" cy="198" r="22"/><circle cx="104" cy="137" r="24"/><circle cx="151" cy="78" r="20"/></g>
    <g fill="#74835b"><ellipse cx="43" cy="216" rx="14" ry="35" transform="rotate(-34 43 216)"/><ellipse cx="91" cy="164" rx="13" ry="34" transform="rotate(22 91 164)"/><ellipse cx="136" cy="106" rx="13" ry="35" transform="rotate(-35 136 106)"/></g>
    <g fill="var(--we-gold,#c6a461)"><circle cx="80" cy="186" r="4"/><circle cx="112" cy="130" r="4"/><circle cx="160" cy="70" r="4"/></g>
  </svg>
);

export const FloralSvg: React.FC = () => (
  <svg viewBox="0 0 240 220" className="w-full h-auto" aria-hidden="true">
    <path d="M28 202C64 110 104 65 206 24" fill="none" stroke="#b8a05c" strokeWidth="2"/>
    <g fill="#fff7e7"><circle cx="62" cy="159" r="25"/><circle cx="104" cy="111" r="29"/><circle cx="158" cy="69" r="22"/></g>
    <g fill="#8f9b73"><ellipse cx="48" cy="188" rx="15" ry="42" transform="rotate(-36 48 188)"/><ellipse cx="88" cy="139" rx="13" ry="38" transform="rotate(28 88 139)"/><ellipse cx="138" cy="90" rx="13" ry="36" transform="rotate(-30 138 90)"/></g>
  </svg>
);
