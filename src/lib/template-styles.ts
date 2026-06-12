// V3 Template Style Configurations — 20 Unique Visual Identities
// Each template has distinct colors, fonts, ornaments, and atmosphere

export interface TemplateStyle {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent: string;
  gold: string;
  muted: string;
  headingFont: string;
  bodyFont: string;
  cardRadius: string;
  buttonRadius: string;
  cardBg: string;
  cardBorder: string;
  overlayStyle: string;
  ornament: string;
  ornamentColor: string;
  hasPetals: boolean;
  petalIcons: string[];
  petalCount: number;
  gradientStart?: string;
  gradientEnd?: string;
  heroOverlay?: string;
  accentGlow?: string;
  borderPattern?: 'none' | 'double' | 'dashed' | 'dotted' | 'ornate';
  shadowIntensity?: 'none' | 'light' | 'medium' | 'heavy';
  // ── Background Enhancement (V3) ──
  heroBgImage?: string;
  darkSectionBgImage?: string;
  signatureBgImage?: string;
  closingBgImage?: string;
  bgPattern?: 'none' | 'dots' | 'grid' | 'leaves' | 'waves' | 'stars' | 'geometric' | 'floral' | 'batik' | 'diamond' | 'organic' | 'crosshatch';
  bgPatternOpacity?: number;
  bgPatternColor?: string;
}

export const TEMPLATE_STYLES: Record<string, TemplateStyle> = {

  // ═══════════════════════════════════════════════════════════════
  // 1. MODERN ORGANIC LUXURY — Earthy greens, warm cream, botanical
  // ═══════════════════════════════════════════════════════════════
  'modern-organic-luxury': {
    id: 'modern-organic-luxury', name: 'Modern Organic',
    primary: '#22382D', secondary: '#6F7F55', background: '#F7F1E6',
    text: '#22382D', accent: '#A9B89B', gold: '#C9A86A', muted: '#8FA07F',
    headingFont: "'Cormorant Garamond','Georgia',serif",
    bodyFont: "'Inter','Poppins',sans-serif",
    cardRadius: '2rem', buttonRadius: '3rem',
    cardBg: 'rgba(255,255,255,0.7)', cardBorder: 'rgba(201,168,106,0.15)',
    overlayStyle: 'from-[#22382D]/45 via-[#22382D]/25 to-[#22382D]/50',
    ornament: '🌿', ornamentColor: '#C9A86A',
    hasPetals: true, petalIcons: ['🌿','🍃','🌱','🌿','🍃'], petalCount: 12,
    gradientStart: '#F7F1E6', gradientEnd: '#E8E0D0',
    heroOverlay: 'linear-gradient(180deg,rgba(34,56,45,0.3) 0%,rgba(247,241,230,0.05) 50%,rgba(34,56,45,0.2) 100%)',
    accentGlow: '0 8px 32px rgba(201,168,106,0.25)',
    borderPattern: 'none', shadowIntensity: 'medium',
    heroBgImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=70',
    bgPattern: 'leaves',
    bgPatternOpacity: 0.04,
    bgPatternColor: '#6F7F55',
  },

  // ═══════════════════════════════════════════════════════════════
  // 2. CLASSIC ROSE GOLD — Dusty pink, rose gold, romantic florals
  // ═══════════════════════════════════════════════════════════════
  'classic-rose-gold': {
    id: 'classic-rose-gold', name: 'Classic Rose Gold',
    primary: '#5C3A3E', secondary: '#D4A9A7', background: '#FEFAF6',
    text: '#4A2E30', accent: '#E8D5C4', gold: '#D4A9A7', muted: '#C4918C',
    headingFont: "'Playfair Display','Georgia',serif",
    bodyFont: "'Inter',sans-serif",
    cardRadius: '1.5rem', buttonRadius: '2.5rem',
    cardBg: 'rgba(255,255,255,0.75)', cardBorder: 'rgba(212,169,167,0.2)',
    overlayStyle: 'from-[#5C3A3E]/50 via-[#8B5E63]/25 to-[#5C3A3E]/50',
    ornament: '🌹', ornamentColor: '#D4A9A7',
    hasPetals: true, petalIcons: ['🌹','🌸','🌷','🌹','💮'], petalCount: 15,
    gradientStart: '#FEFAF6', gradientEnd: '#F5E8E0',
    heroOverlay: 'linear-gradient(135deg,rgba(92,58,62,0.35) 0%,rgba(212,169,167,0.1) 50%,rgba(92,58,62,0.3) 100%)',
    accentGlow: '0 8px 32px rgba(212,169,167,0.3)',
    borderPattern: 'double', shadowIntensity: 'medium',
    heroBgImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=70',
    bgPattern: 'floral',
    bgPatternOpacity: 0.04,
    bgPatternColor: '#D4A9A7',
  },

  // ═══════════════════════════════════════════════════════════════
  // 3. MINIMAL MONOCHROME — Clean greys, bold typography, negative space
  // ═══════════════════════════════════════════════════════════════
  'minimal-monochrome': {
    id: 'minimal-monochrome', name: 'Minimal Monochrome',
    primary: '#1A1A1A', secondary: '#6B6B6B', background: '#FAFAFA',
    text: '#1A1A1A', accent: '#A0A0A0', gold: '#D4AF37', muted: '#9E9E9E',
    headingFont: "'Cormorant Garamond','Georgia',serif",
    bodyFont: "'Inter',sans-serif",
    cardRadius: '0.75rem', buttonRadius: '0.5rem',
    cardBg: 'rgba(255,255,255,0.9)', cardBorder: 'rgba(0,0,0,0.06)',
    overlayStyle: 'from-[#1A1A1A]/60 via-[#1A1A1A]/30 to-[#1A1A1A]/60',
    ornament: '—', ornamentColor: '#D4AF37',
    hasPetals: false, petalIcons: [], petalCount: 0,
    gradientStart: '#FAFAFA', gradientEnd: '#F0F0F0',
    heroOverlay: 'none',
    accentGlow: 'none',
    borderPattern: 'none', shadowIntensity: 'none',
    heroBgImage: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=1920&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=1200&q=70',
    bgPattern: 'grid',
    bgPatternOpacity: 0.03,
    bgPatternColor: '#1A1A1A',
  },

  // ═══════════════════════════════════════════════════════════════
  // 4. TROPICAL PARADISE — Jungle greens, coral, vibrant beach energy
  // ═══════════════════════════════════════════════════════════════
  'tropical-paradise': {
    id: 'tropical-paradise', name: 'Tropical Paradise',
    primary: '#1B4332', secondary: '#40916C', background: '#F0F7F4',
    text: '#1B4332', accent: '#52B788', gold: '#D4A373', muted: '#74C69D',
    headingFont: "'Playfair Display','Georgia',serif",
    bodyFont: "'Inter',sans-serif",
    cardRadius: '1.75rem', buttonRadius: '3rem',
    cardBg: 'rgba(255,255,255,0.7)', cardBorder: 'rgba(64,145,108,0.15)',
    overlayStyle: 'from-[#1B4332]/40 via-[#1B4332]/15 to-[#1B4332]/40',
    ornament: '🌴', ornamentColor: '#40916C',
    hasPetals: true, petalIcons: ['🌴','🌺','🍃','🌴','🌿'], petalCount: 8,
    gradientStart: '#F0F7F4', gradientEnd: '#D8F3DC',
    heroOverlay: 'linear-gradient(180deg,rgba(27,67,50,0.25) 0%,rgba(64,145,108,0.08) 60%,rgba(27,67,50,0.2) 100%)',
    accentGlow: '0 8px 32px rgba(64,145,108,0.25)',
    borderPattern: 'dashed', shadowIntensity: 'light',
    heroBgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=70',
    bgPattern: 'waves',
    bgPatternOpacity: 0.04,
    bgPatternColor: '#40916C',
  },

  // ═══════════════════════════════════════════════════════════════
  // 5. ROYAL PURPLE — Deep amethyst, gold filigree, regal luxury
  // ═══════════════════════════════════════════════════════════════
  'royal-purple': {
    id: 'royal-purple', name: 'Royal Purple',
    primary: '#2D1B4E', secondary: '#6B3FA0', background: '#F8F5FC',
    text: '#1A1030', accent: '#9B7FC1', gold: '#D4AF37', muted: '#9B7FC1',
    headingFont: "'Playfair Display','Georgia',serif",
    bodyFont: "'Inter',sans-serif",
    cardRadius: '1rem', buttonRadius: '2rem',
    cardBg: 'rgba(255,255,255,0.85)', cardBorder: 'rgba(155,127,193,0.2)',
    overlayStyle: 'from-[#2D1B4E]/60 via-[#2D1B4E]/25 to-[#2D1B4E]/60',
    ornament: '💜', ornamentColor: '#D4AF37',
    hasPetals: true, petalIcons: ['💜','✨','💜','✨','👑'], petalCount: 8,
    gradientStart: '#F8F5FC', gradientEnd: '#EDE4F5',
    heroOverlay: 'radial-gradient(ellipse at center,rgba(45,27,78,0.25) 0%,rgba(45,27,78,0.5) 100%)',
    accentGlow: '0 8px 40px rgba(212,175,55,0.35)',
    borderPattern: 'ornate', shadowIntensity: 'heavy',
    heroBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=75',
    bgPattern: 'geometric',
    bgPatternOpacity: 0.03,
    bgPatternColor: '#D4AF37',
  },

  // ═══════════════════════════════════════════════════════════════
  // 6. SAKURA PINK — Cherry blossoms, soft pink, Japanese minimalism
  // ═══════════════════════════════════════════════════════════════
  'sakura-pink': {
    id: 'sakura-pink', name: 'Sakura',
    primary: '#D4A0A7', secondary: '#E8C5CA', background: '#FFF5F7',
    text: '#4A3040', accent: '#F0D5D8', gold: '#D4AF37', muted: '#C4918C',
    headingFont: "'Playfair Display','Georgia',serif",
    bodyFont: "'Inter',sans-serif",
    cardRadius: '1.5rem', buttonRadius: '2.5rem',
    cardBg: 'rgba(255,255,255,0.8)', cardBorder: 'rgba(212,160,167,0.2)',
    overlayStyle: 'from-[#D4A0A7]/30 via-[#FFF5F7]/20 to-[#D4A0A7]/30',
    ornament: '🌸', ornamentColor: '#D4A0A7',
    hasPetals: true, petalIcons: ['🌸','💮','🌸','🏵️','🌸'], petalCount: 20,
    gradientStart: '#FFF5F7', gradientEnd: '#FDE8EC',
    heroOverlay: 'linear-gradient(180deg,rgba(212,160,167,0.15) 0%,rgba(255,245,247,0) 50%,rgba(212,160,167,0.1) 100%)',
    accentGlow: '0 8px 24px rgba(212,160,167,0.3)',
    borderPattern: 'dotted', shadowIntensity: 'light',
    heroBgImage: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1920&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1920&q=75',
    bgPattern: 'floral',
    bgPatternOpacity: 0.05,
    bgPatternColor: '#D4A0A7',
  },

  // ═══════════════════════════════════════════════════════════════
  // 7. VINTAGE KRAFT — Sepia, brown kraft, lace, nostalgia
  // ═══════════════════════════════════════════════════════════════
  'vintage-kraft': {
    id: 'vintage-kraft', name: 'Vintage Kraft',
    primary: '#5C3A21', secondary: '#8B5E3C', background: '#FEFAE0',
    text: '#3C2415', accent: '#D4A373', gold: '#D4A373', muted: '#BC6C25',
    headingFont: "'Playfair Display','Georgia',serif",
    bodyFont: "'Inter',sans-serif",
    cardRadius: '0.75rem', buttonRadius: '2rem',
    cardBg: 'rgba(255,255,255,0.6)', cardBorder: 'rgba(139,94,60,0.2)',
    overlayStyle: 'from-[#5C3A21]/45 via-[#5C3A21]/20 to-[#5C3A21]/45',
    ornament: '📜', ornamentColor: '#8B5E3C',
    hasPetals: true, petalIcons: ['📜','🌾','📜','🌻','📜'], petalCount: 6,
    gradientStart: '#FEFAE0', gradientEnd: '#F5E6CC',
    heroOverlay: 'linear-gradient(180deg,rgba(92,58,33,0.3) 0%,rgba(254,250,224,0) 50%,rgba(92,58,33,0.25) 100%)',
    accentGlow: '0 4px 16px rgba(212,163,115,0.2)',
    borderPattern: 'dashed', shadowIntensity: 'medium',
    heroBgImage: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=1920&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=1920&q=75',
    bgPattern: 'crosshatch',
    bgPatternOpacity: 0.04,
    bgPatternColor: '#8B5E3C',
  },

  // ═══════════════════════════════════════════════════════════════
  // 8. AUREUM GOLD — Pure champagne luxury, clean lines, premium
  // ═══════════════════════════════════════════════════════════════
  'aureum-gold': {
    id: 'aureum-gold', name: 'Aureum Gold',
    primary: '#2D2A24', secondary: '#C9A86A', background: '#FAF8F2',
    text: '#2D2A24', accent: '#E8D5A3', gold: '#C9A86A', muted: '#B8A37A',
    headingFont: "'Cormorant Garamond','Georgia',serif",
    bodyFont: "'Inter',sans-serif",
    cardRadius: '0.5rem', buttonRadius: '1rem',
    cardBg: 'rgba(255,255,255,0.9)', cardBorder: 'rgba(201,168,106,0.12)',
    overlayStyle: 'from-[#2D2A24]/40 via-[#2D2A24]/15 to-[#2D2A24]/40',
    ornament: '👑', ornamentColor: '#C9A86A',
    hasPetals: false, petalIcons: [], petalCount: 0,
    gradientStart: '#FAF8F2', gradientEnd: '#F0ECE0',
    heroOverlay: 'linear-gradient(135deg,rgba(45,42,36,0.2) 0%,rgba(201,168,106,0.05) 50%,rgba(45,42,36,0.15) 100%)',
    accentGlow: '0 4px 24px rgba(201,168,106,0.2)',
    borderPattern: 'none', shadowIntensity: 'light',
    heroBgImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&q=75',
    bgPattern: 'diamond',
    bgPatternOpacity: 0.03,
    bgPatternColor: '#C9A86A',
  },

  // ═══════════════════════════════════════════════════════════════
  // 9. CELESTIAL NIGHT — Deep navy, stars, moon, cosmic magic
  // ═══════════════════════════════════════════════════════════════
  'celestial-night': {
    id: 'celestial-night', name: 'Celestial Night',
    primary: '#0B1930', secondary: '#1A3355', background: '#0B1930',
    text: '#E8EDF2', accent: '#C8D6E5', gold: '#D4AF37', muted: '#7B8CA8',
    headingFont: "'Playfair Display','Georgia',serif",
    bodyFont: "'Inter',sans-serif",
    cardRadius: '1rem', buttonRadius: '2rem',
    cardBg: 'rgba(11,25,48,0.6)', cardBorder: 'rgba(212,175,55,0.15)',
    overlayStyle: 'from-[#0B1930]/70 via-[#0B1930]/40 to-[#0B1930]/70',
    ornament: '🌙', ornamentColor: '#D4AF37',
    hasPetals: true, petalIcons: ['⭐','🌙','✨','⭐','🌙'], petalCount: 0,
    gradientStart: '#0B1930', gradientEnd: '#060E1A',
    heroOverlay: 'radial-gradient(ellipse at center,rgba(11,25,48,0.3) 0%,rgba(11,25,48,0.7) 100%)',
    accentGlow: '0 0 40px rgba(212,175,55,0.2)',
    borderPattern: 'none', shadowIntensity: 'heavy',
    heroBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=75',
    bgPattern: 'stars',
    bgPatternOpacity: 0.06,
    bgPatternColor: '#C8D6E5',
  },

  // ═══════════════════════════════════════════════════════════════
  // 10. TERRACOTTA BLOOM — Warm rust, dried flowers, boho desert
  // ═══════════════════════════════════════════════════════════════
  'terracotta-bloom': {
    id: 'terracotta-bloom', name: 'Terracotta Bloom',
    primary: '#C7734B', secondary: '#8B9D7D', background: '#FBF7F0',
    text: '#5D4037', accent: '#D4956B', gold: '#D4A373', muted: '#A0897C',
    headingFont: "'Playfair Display','Georgia',serif",
    bodyFont: "'Inter',sans-serif",
    cardRadius: '1.25rem', buttonRadius: '2.5rem',
    cardBg: 'rgba(255,255,255,0.65)', cardBorder: 'rgba(199,115,75,0.15)',
    overlayStyle: 'from-[#C7734B]/40 via-[#C7734B]/15 to-[#C7734B]/40',
    ornament: '🏵️', ornamentColor: '#D4956B',
    hasPetals: true, petalIcons: ['🏵️','🌾','🏵️','🌻','🍂'], petalCount: 10,
    gradientStart: '#FBF7F0', gradientEnd: '#F0E6D8',
    heroOverlay: 'linear-gradient(180deg,rgba(199,115,75,0.25) 0%,rgba(251,247,240,0) 50%,rgba(199,115,75,0.2) 100%)',
    accentGlow: '0 8px 32px rgba(199,115,75,0.2)',
    borderPattern: 'none', shadowIntensity: 'medium',
    heroBgImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=75',
    bgPattern: 'organic',
    bgPatternOpacity: 0.04,
    bgPatternColor: '#C7734B',
  },

  // ═══════════════════════════════════════════════════════════════
  // 11. OCEAN BREEZE — Cool blues, aquamarine, coastal serenity
  // ═══════════════════════════════════════════════════════════════
  'ocean-breeze': {
    id: 'ocean-breeze', name: 'Ocean Breeze',
    primary: '#1B2A4A', secondary: '#5DBCD2', background: '#FCFCFC',
    text: '#1B2A4A', accent: '#8FD8E8', gold: '#D4AF37', muted: '#7BA8B8',
    headingFont: "'Playfair Display','Georgia',serif",
    bodyFont: "'Inter',sans-serif",
    cardRadius: '0.75rem', buttonRadius: '2rem',
    cardBg: 'rgba(255,255,255,0.85)', cardBorder: 'rgba(93,188,210,0.15)',
    overlayStyle: 'from-[#1B2A4A]/45 via-[#1B2A4A]/20 to-[#1B2A4A]/45',
    ornament: '🌊', ornamentColor: '#5DBCD2',
    hasPetals: true, petalIcons: ['🌊','🐚','🌊','🪸','🌊'], petalCount: 6,
    gradientStart: '#FCFCFC', gradientEnd: '#E8F4F8',
    heroOverlay: 'linear-gradient(180deg,rgba(27,42,74,0.2) 0%,rgba(93,188,210,0.05) 50%,rgba(27,42,74,0.15) 100%)',
    accentGlow: '0 8px 24px rgba(93,188,210,0.2)',
    borderPattern: 'dotted', shadowIntensity: 'light',
    heroBgImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=75',
    bgPattern: 'waves',
    bgPatternOpacity: 0.04,
    bgPatternColor: '#5DBCD2',
  },

  // ═══════════════════════════════════════════════════════════════
  // 12. JASMINE PURE — All white elegance, clean minimal luxury
  // ═══════════════════════════════════════════════════════════════
  'jasmine-white': {
    id: 'jasmine-white', name: 'Jasmine Pure',
    primary: '#1A1A1A', secondary: '#C0C4CC', background: '#FFFFFF',
    text: '#1A1A1A', accent: '#E8D5B5', gold: '#E8D5B5', muted: '#A0A4AC',
    headingFont: "'Cormorant Garamond','Georgia',serif",
    bodyFont: "'Inter',sans-serif",
    cardRadius: '0.25rem', buttonRadius: '0.25rem',
    cardBg: 'rgba(255,255,255,0.95)', cardBorder: 'rgba(0,0,0,0.05)',
    overlayStyle: 'from-[#1A1A1A]/30 via-transparent to-[#1A1A1A]/30',
    ornament: '🤍', ornamentColor: '#E8D5B5',
    hasPetals: false, petalIcons: [], petalCount: 0,
    gradientStart: '#FFFFFF', gradientEnd: '#F8F8F8',
    heroOverlay: 'none',
    accentGlow: 'none',
    borderPattern: 'none', shadowIntensity: 'none',
    heroBgImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=1200&q=75',
    bgPattern: 'dots',
    bgPatternOpacity: 0.02,
    bgPatternColor: '#000000',
  },

  // ═══════════════════════════════════════════════════════════════
  // 13. DREAM GARDEN — Pastel mauve, butterflies, ethereal fantasy
  // ═══════════════════════════════════════════════════════════════
  'dream-garden': {
    id: 'dream-garden', name: 'Dream Garden',
    primary: '#4A3B4A', secondary: '#E8B4C8', background: '#FFF8F5',
    text: '#4A3B4A', accent: '#C5B9E0', gold: '#E8C5A0', muted: '#B8A0B0',
    headingFont: "'Playfair Display','Georgia',serif",
    bodyFont: "'Poppins',sans-serif",
    cardRadius: '1.5rem', buttonRadius: '2.5rem',
    cardBg: 'rgba(255,255,255,0.7)', cardBorder: 'rgba(232,180,200,0.2)',
    overlayStyle: 'from-[#4A3B4A]/30 via-[#E8B4C8]/15 to-[#4A3B4A]/30',
    ornament: '🪷', ornamentColor: '#C5B9E0',
    hasPetals: true, petalIcons: ['🪷','🦋','🌸','🪷','✨'], petalCount: 14,
    gradientStart: '#FFF8F5', gradientEnd: '#F8EDF2',
    heroOverlay: 'linear-gradient(135deg,rgba(74,59,74,0.15) 0%,rgba(232,180,200,0.08) 50%,rgba(197,185,224,0.12) 100%)',
    accentGlow: '0 8px 32px rgba(197,185,224,0.25)',
    borderPattern: 'dotted', shadowIntensity: 'light',
    heroBgImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=75',
    bgPattern: 'floral',
    bgPatternOpacity: 0.04,
    bgPatternColor: '#C5B9E0',
  },

  // ═══════════════════════════════════════════════════════════════
  // 14. JAVANESE ELEGANCE — Burgundy, gold leaf, batik, keraton
  // ═══════════════════════════════════════════════════════════════
  'javanese-elegance': {
    id: 'javanese-elegance', name: 'Javanese Elegance',
    primary: '#4A0E2E', secondary: '#D4AF37', background: '#FDF8F0',
    text: '#1A0A10', accent: '#C4A882', gold: '#D4AF37', muted: '#8C6A5A',
    headingFont: "'Playfair Display','Georgia',serif",
    bodyFont: "'Poppins',sans-serif",
    cardRadius: '0.5rem', buttonRadius: '1.5rem',
    cardBg: 'rgba(255,255,255,0.85)', cardBorder: 'rgba(212,175,55,0.25)',
    overlayStyle: 'from-[#4A0E2E]/55 via-[#4A0E2E]/20 to-[#4A0E2E]/55',
    ornament: '🏮', ornamentColor: '#D4AF37',
    hasPetals: false, petalIcons: [], petalCount: 0,
    gradientStart: '#FDF8F0', gradientEnd: '#F5E8D5',
    heroOverlay: 'linear-gradient(180deg,rgba(74,14,46,0.35) 0%,rgba(212,175,55,0.05) 50%,rgba(74,14,46,0.3) 100%)',
    accentGlow: '0 8px 40px rgba(212,175,55,0.35)',
    borderPattern: 'ornate', shadowIntensity: 'heavy',
    heroBgImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&q=75',
    bgPattern: 'batik',
    bgPatternOpacity: 0.04,
    bgPatternColor: '#D4AF37',
  },

  // ═══════════════════════════════════════════════════════════════
  // 15. AIRE ROYALE — Dark purple, diamond, boutique luxury
  // ═══════════════════════════════════════════════════════════════
  'aire-royale': {
    id: 'aire-royale', name: 'Aire Royale',
    primary: '#0A0A14', secondary: '#550979', background: '#0A0A14',
    text: '#F5F0EB', accent: '#D4AF37', gold: '#D4AF37', muted: '#8A7FB0',
    headingFont: "'Playfair Display','Georgia',serif",
    bodyFont: "'Cormorant Garamond','Georgia',serif",
    cardRadius: '0.125rem', buttonRadius: '0.25rem',
    cardBg: 'rgba(10,10,20,0.7)', cardBorder: 'rgba(212,175,55,0.15)',
    overlayStyle: 'from-[#0A0A14]/80 via-[#0A0A14]/50 to-[#0A0A14]/80',
    ornament: '💎', ornamentColor: '#D4AF37',
    hasPetals: false, petalIcons: [], petalCount: 0,
    gradientStart: '#0A0A14', gradientEnd: '#050510',
    heroOverlay: 'radial-gradient(ellipse at center,rgba(10,10,20,0.2) 0%,rgba(10,10,20,0.8) 100%)',
    accentGlow: '0 0 60px rgba(212,175,55,0.15)',
    borderPattern: 'none', shadowIntensity: 'heavy',
    heroBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=75',
    bgPattern: 'diamond',
    bgPatternOpacity: 0.06,
    bgPatternColor: '#550979',
  },

  // ═══════════════════════════════════════════════════════════════
  // 16. PREMIUM BLUSH — Sweet dusty rose, romantic hearts, soft glow
  // ═══════════════════════════════════════════════════════════════
  'premium-blush': {
    id: 'premium-blush', name: 'Premium Blush',
    primary: '#D4756B', secondary: '#E8B4B8', background: '#FFF5F5',
    text: '#4A3035', accent: '#F0D5D8', gold: '#D4AF37', muted: '#C4918C',
    headingFont: "'Playfair Display','Georgia',serif",
    bodyFont: "'Inter',sans-serif",
    cardRadius: '1.5rem', buttonRadius: '2.5rem',
    cardBg: 'rgba(255,255,255,0.75)', cardBorder: 'rgba(212,117,107,0.2)',
    overlayStyle: 'from-[#D4756B]/25 via-[#E8B4B8]/15 to-[#D4756B]/25',
    ornament: '💗', ornamentColor: '#E8B4B8',
    hasPetals: true, petalIcons: ['💗','💕','💗','💝','🌸'], petalCount: 16,
    gradientStart: '#FFF5F5', gradientEnd: '#FDE8EA',
    heroOverlay: 'linear-gradient(135deg,rgba(212,117,107,0.12) 0%,rgba(232,180,184,0.06) 50%,rgba(212,117,107,0.1) 100%)',
    accentGlow: '0 8px 24px rgba(212,117,107,0.2)',
    borderPattern: 'dotted', shadowIntensity: 'light',
    heroBgImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&q=75',
    bgPattern: 'dots',
    bgPatternOpacity: 0.03,
    bgPatternColor: '#E8B4B8',
  },

  // ═══════════════════════════════════════════════════════════════
  // 17. LUXURY LAVENDER — Purple royalty, calming elegance
  // ═══════════════════════════════════════════════════════════════
  'luxury-lavender': {
    id: 'luxury-lavender', name: 'Luxury Lavender',
    primary: '#6B3FA0', secondary: '#9B7FC1', background: '#F9F5FD',
    text: '#2D1B4E', accent: '#C5B9E0', gold: '#D4AF37', muted: '#A090C8',
    headingFont: "'Playfair Display','Georgia',serif",
    bodyFont: "'Cormorant Garamond','Georgia',serif",
    cardRadius: '1.25rem', buttonRadius: '2rem',
    cardBg: 'rgba(255,255,255,0.8)', cardBorder: 'rgba(155,127,193,0.2)',
    overlayStyle: 'from-[#6B3FA0]/45 via-[#6B3FA0]/18 to-[#6B3FA0]/45',
    ornament: '🦋', ornamentColor: '#C5B9E0',
    hasPetals: true, petalIcons: ['🦋','💜','🦋','🌸','🦋'], petalCount: 10,
    gradientStart: '#F9F5FD', gradientEnd: '#EDE4F5',
    heroOverlay: 'linear-gradient(180deg,rgba(107,63,160,0.2) 0%,rgba(201,185,224,0.05) 50%,rgba(107,63,160,0.15) 100%)',
    accentGlow: '0 8px 32px rgba(155,127,193,0.25)',
    borderPattern: 'double', shadowIntensity: 'medium',
    heroBgImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=75',
    bgPattern: 'floral',
    bgPatternOpacity: 0.04,
    bgPatternColor: '#9B7FC1',
  },

  // ═══════════════════════════════════════════════════════════════
  // 18. EXCLUSIVE NOIR — Black, white gold, high-contrast drama
  // ═══════════════════════════════════════════════════════════════
  'exclusive-noir': {
    id: 'exclusive-noir', name: 'Exclusive Noir',
    primary: '#1A1A24', secondary: '#2D2D3A', background: '#0F0F12',
    text: '#F0EDE8', accent: '#D4A9A7', gold: '#D4A9A7', muted: '#8A8080',
    headingFont: "'Playfair Display','Georgia',serif",
    bodyFont: "'Inter',sans-serif",
    cardRadius: '0.25rem', buttonRadius: '0.25rem',
    cardBg: 'rgba(15,15,18,0.8)', cardBorder: 'rgba(212,169,167,0.12)',
    overlayStyle: 'from-[#1A1A24]/85 via-[#1A1A24]/55 to-[#1A1A24]/85',
    ornament: '🖤', ornamentColor: '#D4A9A7',
    hasPetals: false, petalIcons: [], petalCount: 0,
    gradientStart: '#0F0F12', gradientEnd: '#050508',
    heroOverlay: 'radial-gradient(ellipse at center,rgba(26,26,36,0.1) 0%,rgba(26,26,36,0.85) 100%)',
    accentGlow: '0 0 30px rgba(212,169,167,0.12)',
    borderPattern: 'none', shadowIntensity: 'heavy',
    heroBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=75',
    bgPattern: 'geometric',
    bgPatternOpacity: 0.06,
    bgPatternColor: '#2D2D3A',
  },

  // ═══════════════════════════════════════════════════════════════
  // 19. SAGE DREAM — Soft sage, botanical watercolor, secret garden
  // ═══════════════════════════════════════════════════════════════
  'sage-dream': {
    id: 'sage-dream', name: 'Sage Dream',
    primary: '#4A6741', secondary: '#7A8B6E', background: '#FBF9F4',
    text: '#2D2E24', accent: '#B8C5A8', gold: '#C9A86A', muted: '#9AA88C',
    headingFont: "'Playfair Display','Georgia',serif",
    bodyFont: "'Poppins',sans-serif",
    cardRadius: '1.25rem', buttonRadius: '2.5rem',
    cardBg: 'rgba(255,255,255,0.7)', cardBorder: 'rgba(122,139,110,0.2)',
    overlayStyle: 'from-[#4A6741]/35 via-[#4A6741]/12 to-[#4A6741]/35',
    ornament: '🌱', ornamentColor: '#7A8B6E',
    hasPetals: true, petalIcons: ['🌱','🌿','🌸','🌱','🍃'], petalCount: 10,
    gradientStart: '#FBF9F4', gradientEnd: '#EDEAE0',
    heroOverlay: 'linear-gradient(135deg,rgba(74,103,65,0.15) 0%,rgba(184,197,168,0.06) 50%,rgba(74,103,65,0.1) 100%)',
    accentGlow: '0 8px 24px rgba(122,139,110,0.2)',
    borderPattern: 'none', shadowIntensity: 'light',
    heroBgImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=75',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=70',
    signatureBgImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=70',
    closingBgImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=75',
    bgPattern: 'leaves',
    bgPatternOpacity: 0.04,
    bgPatternColor: '#7A8B6E',
  },

  // ═══════════════════════════════════════════════════════════════
  // 20. ETERNAL SAGE LUXURY — Cinematic forest, floral, gold standard
  // ═══════════════════════════════════════════════════════════════
  'eternal-sage-luxury': {
    id: 'eternal-sage-luxury', name: 'Eternal Sage Luxury',
    primary: '#1F2E26', secondary: '#6F7F55', background: '#F7F1E6',
    text: '#1F2E26', accent: '#A9B89B', gold: '#C9A86A', muted: '#8FA07F',
    headingFont: "'Cormorant Garamond','Georgia',serif",
    bodyFont: "'Inter','Poppins',sans-serif",
    cardRadius: '1.5rem', buttonRadius: '2.5rem',
    cardBg: 'rgba(247,241,230,0.8)', cardBorder: 'rgba(201,168,106,0.1)',
    overlayStyle: 'from-[#1F2E26]/45 via-[#1F2E26]/30 to-[#1F2E26]/50',
    ornament: '🌿', ornamentColor: '#C9A86A',
    hasPetals: true, petalIcons: ['🌿','🍃','🌱','🌿','🍃'], petalCount: 12,
    gradientStart: '#F7F1E6', gradientEnd: '#EDE6D8',
    heroOverlay: 'linear-gradient(180deg,rgba(31,46,38,0.35) 0%,rgba(247,241,230,0.08) 50%,rgba(31,46,38,0.25) 100%)',
    accentGlow: '0 8px 32px rgba(201,168,106,0.2)',
    borderPattern: 'ornate', shadowIntensity: 'heavy',
    // ── Premium Background Images ──
    heroBgImage: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80',
    darkSectionBgImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920&q=80',
    signatureBgImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80',
    closingBgImage: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1920&q=80',
    bgPattern: 'leaves',
    bgPatternOpacity: 0.04,
    bgPatternColor: '#C9A86A',
  },
};

export function getStyle(templateId: string): TemplateStyle {
  if (!TEMPLATE_STYLES[templateId]) {
    console.warn(`Template ${templateId} not found, falling back to default`);
    return TEMPLATE_STYLES['modern-organic-luxury'];
  }
  return TEMPLATE_STYLES[templateId];
}
