// ════════════════════════════════════════════════════════
// Eternal Sage Luxury — Design Tokens
// Derived from reference images 1.png - 4.png
// ════════════════════════════════════════════════════════

export const TOKENS = {
  color: {
    primary: '#1F2E26',
    secondary: '#6F7F55',
    accent: '#A9B89B',
    background: '#F7F1E6',
    cream: '#F7F1E6',
    white: '#FFFFFF',
    gold: '#C9A86A',
    goldLight: '#D4AF37',
    text: '#1F2E26',
    textLight: '#F7F1E6',
    muted: '#8FA07F',
    darkBg: '#243B2A',
    overlay: 'rgba(31, 46, 38, 0.4)',
  },
  font: {
    display: "'Cormorant Garamond', 'Georgia', serif",
    body: "'Inter', 'Poppins', sans-serif",
  },
  text: {
    display: 'clamp(2.5rem, 6vw, 4.5rem)',
    h1: 'clamp(1.75rem, 4vw, 3rem)',
    h2: 'clamp(1.5rem, 3vw, 2.25rem)',
    h3: 'clamp(1.25rem, 2.5vw, 1.75rem)',
    body: 'clamp(0.875rem, 1.5vw, 1rem)',
    caption: 'clamp(0.75rem, 1vw, 0.875rem)',
    label: 'clamp(0.625rem, 1vw, 0.75rem)',
  },
  spacing: {
    xs: 4, sm: 8, md: 16, lg: 24, xl: 32, '2xl': 48, '3xl': 64, '4xl': 96,
    section: 'py-20 sm:py-28',
    card: 'p-5 sm:p-6',
  },
  radius: {
    xs: 2, sm: 4, md: 8, lg: 12, xl: 16, '2xl': 24, full: 9999,
    card: '1.5rem',
    button: '2.5rem',
    photo: '50%',
  },
  shadow: {
    card: '0 4px 20px rgba(0,0,0,0.08)',
    cardHover: '0 8px 32px rgba(201,168,106,0.25)',
    button: '0 4px 16px rgba(201,168,106,0.3)',
    glow: '0 0 30px rgba(201,168,106,0.2)',
  },
  motion: {
    fast: 150,
    normal: 300,
    slow: 500,
    dramatic: 800,
    easeOut: [0.16, 1, 0.3, 1],
  },
  // Background images (Unsplash high quality)
  bg: {
    hero: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80',
    dark: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920&q=80',
    signature: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80',
    closing: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1920&q=80',
  },
} as const;
