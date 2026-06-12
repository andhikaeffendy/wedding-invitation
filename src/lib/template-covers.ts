// Template Cover Configurations — Each template gets a truly unique cover design
// Covers differ in layout, frame style, overlay pattern, monogram style, and animation

export type CoverLayout = 
  | 'fullscreen-photo'      // Photo fills entire screen (Modern Organic, Terracotta)
  | 'split-photo-left'      // Photo left 50%, content right 50% (Rose Gold)
  | 'split-photo-right'     // Photo right 50%, content left 50%
  | 'split-vertical'        // Photo top 55%, content bottom 45% (Dream Garden)
  | 'framed-photo'          // Photo in center with ornate frame (Royal, Javanese)
  | 'typography-only'       // No photo, pure typography design (Minimal, Jasmine)
  | 'letterpress'           // Paper texture background with stamp effect (Vintage)
  | 'art-deco-frame'        // Geometric art deco frame around photo (Aureum, Aire)
  | 'overlay-pattern'       // Photo with strong decorative pattern overlay (Sakura)
  | 'cinematic-dark'        // Dark cinematic with light effects (Celestial, Aire)
  | 'illustrated'           // Illustrated/pattern background (Dream Garden)
  | 'ocean-frame'           // Photo with wave frame bottom (Ocean)
  ;

export type CoverFrame = 
  | 'none'                  // No frame
  | 'thin-gold'             // Single thin gold line border
  | 'double-gold'           // Double gold line border
  | 'ornate-corners'        // Ornate corner decorations only
  | 'ornate-full'           // Full ornate border (traditional)
  | 'floral-wreath'         // Floral wreath framing the content
  | 'geometric'             // Geometric/art deco frame
  | 'batik-pattern'         // Batik-inspired border pattern
  | 'leaf-border'           // Leaf/botanical border corners
  | 'stamp-border'          // Dashed stamp-like border
  | 'wave-bottom'           // Wave pattern at bottom
  | 'diamond-facet'         // Diamond facet geometric pattern
  ;

export type MonogramStyle = 
  | 'circle'                // Circular frame (default)
  | 'diamond'               // Diamond/rhombus shape
  | 'square'                // Square with rounded corners
  | 'hexagon'               // Hexagonal shape
  | 'shield'                // Shield/crest shape
  | 'no-frame'              // Just text, no frame
  | 'double-circle'         // Two concentric circles
  | 'crown-top'             // Crown above monogram
  | 'floral-ring'           // Floral ring around monogram
  | 'geometric'             // Geometric polygon frame
  ;

export type OverlayPattern =
  | 'none'
  | 'dots'                  // Polka dots
  | 'stars'                 // Star/constellation
  | 'confetti'              // Confetti fall
  | 'petals'                // Falling petals
  | 'geometric-lines'       // Geometric line art
  | 'floral'                // Floral pattern
  | 'batik'                 // Batik pattern
  | 'waves'                 // Wave pattern
  | 'diamonds'              // Diamond pattern
  ;

export interface CoverConfig {
  layout: CoverLayout;
  frame: CoverFrame;
  monogram: MonogramStyle;
  overlayPattern: OverlayPattern;
  // Animation
  entryAnimation: 'spring' | 'fade' | 'zoom' | 'slide-up' | 'scale-rotate' | 'letterpress-reveal' | 'split-reveal';
  contentAnimation: 'sequential' | 'simultaneous' | 'staggered';
  // Color treatment
  overlayOpacity: number;
  overlayGradient: string;
  // Frame colors
  frameColor: string;
  frameWidth: number;
  // Monogram
  monogramSize: number; // in px
  monogramBorderWidth: number;
  monogramColor: string;
  monogramBgColor: string;
  // Typography
  nameSize: string;
  dateSize: string;
  guestNameSize: string;
  buttonStyle: 'pill' | 'sharp' | 'rounded' | 'bordered' | 'underline';
  // Special features
  showGoldLines: boolean;
  showOrnament: boolean;
  showGuestName: boolean;
  showDate: boolean;
  showMusicNote: boolean;
  // Background
  photoScale: number;
  hasVideoBackground: boolean;
  // Decorative elements
  decorativeElements: string[];
  particleCount: number;
}

export const TEMPLATE_COVERS: Record<string, CoverConfig> = {
  // ======================== 1. MODERN ORGANIC ========================
  // Inspirasi: The Knot "Botanical Garden" — full-bleed nature photo, leaf corner decorations
  'modern-organic-luxury': {
    layout: 'fullscreen-photo',
    frame: 'leaf-border',
    monogram: 'floral-ring',
    overlayPattern: 'petals',
    entryAnimation: 'spring',
    contentAnimation: 'sequential',
    overlayOpacity: 0.45,
    overlayGradient: 'linear-gradient(180deg, rgba(95,111,82,0.35) 0%, rgba(248,243,234,0.15) 50%, rgba(95,111,82,0.4) 100%)',
    frameColor: '#C8A96A',
    frameWidth: 2,
    monogramSize: 80,
    monogramBorderWidth: 2,
    monogramColor: '#C8A96A',
    monogramBgColor: 'transparent',
    nameSize: 'text-2xl sm:text-3xl md:text-4xl',
    dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-xl sm:text-2xl md:text-3xl',
    buttonStyle: 'pill',
    showGoldLines: true,
    showOrnament: true,
    showGuestName: true,
    showDate: true,
    showMusicNote: true,
    photoScale: 1.05,
    hasVideoBackground: false,
    decorativeElements: ['🌿', '🍃', '🌿', '🍃', '🌾'],
    particleCount: 8,
  },

  // ======================== 2. CLASSIC ROSE GOLD ========================
  // Inspirasi: Zola "Rose Gold Foil" — split layout photo left, rose gold border, elegant
  'classic-rose-gold': {
    layout: 'split-photo-left',
    frame: 'double-gold',
    monogram: 'double-circle',
    overlayPattern: 'none',
    entryAnimation: 'split-reveal',
    contentAnimation: 'staggered',
    overlayOpacity: 0.3,
    overlayGradient: 'linear-gradient(135deg, rgba(139,94,99,0.2) 0%, rgba(254,250,246,0.1) 100%)',
    frameColor: '#D4A9A7',
    frameWidth: 2,
    monogramSize: 70,
    monogramBorderWidth: 2,
    monogramColor: '#D4A9A7',
    monogramBgColor: 'rgba(254,250,246,0.9)',
    nameSize: 'text-xl sm:text-2xl md:text-3xl',
    dateSize: 'text-[10px] sm:text-xs',
    guestNameSize: 'text-lg sm:text-xl md:text-2xl',
    buttonStyle: 'pill',
    showGoldLines: true,
    showOrnament: true,
    showGuestName: true,
    showDate: true,
    showMusicNote: true,
    photoScale: 1,
    hasVideoBackground: false,
    decorativeElements: ['🌹', '🪷', '🌹', '💮'],
    particleCount: 6,
  },

  // ======================== 3. MINIMAL MONOCHROME ========================
  // Inspirasi: Joy "Minimal" — typography-only cover, geometric lines, black & white
  'minimal-monochrome': {
    layout: 'typography-only',
    frame: 'geometric',
    monogram: 'geometric',
    overlayPattern: 'geometric-lines',
    entryAnimation: 'fade',
    contentAnimation: 'sequential',
    overlayOpacity: 0,
    overlayGradient: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.02) 100%)',
    frameColor: '#D4AF37',
    frameWidth: 1,
    monogramSize: 90,
    monogramBorderWidth: 1,
    monogramColor: '#D4AF37',
    monogramBgColor: '#FAFAFA',
    nameSize: 'text-3xl sm:text-4xl md:text-5xl',
    dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-xl sm:text-2xl md:text-3xl',
    buttonStyle: 'sharp',
    showGoldLines: true,
    showOrnament: false,
    showGuestName: true,
    showDate: true,
    showMusicNote: true,
    photoScale: 1,
    hasVideoBackground: false,
    decorativeElements: ['◆', '◇', '◆', '◇'],
    particleCount: 0,
  },

  // ======================== 4. TROPICAL PARADISE ========================
  // Inspirasi: WeddingWire "Tropical" — full-bleed lush photo, palm leaf frame, vibrant
  'tropical-paradise': {
    layout: 'fullscreen-photo',
    frame: 'leaf-border',
    monogram: 'floral-ring',
    overlayPattern: 'floral',
    entryAnimation: 'zoom',
    contentAnimation: 'sequential',
    overlayOpacity: 0.35,
    overlayGradient: 'linear-gradient(180deg, rgba(27,67,50,0.3) 0%, rgba(240,247,244,0.1) 50%, rgba(27,67,50,0.35) 100%)',
    frameColor: '#D4A373',
    frameWidth: 2,
    monogramSize: 80,
    monogramBorderWidth: 2,
    monogramColor: '#D4A373',
    monogramBgColor: 'transparent',
    nameSize: 'text-2xl sm:text-4xl md:text-5xl',
    dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-xl sm:text-2xl md:text-3xl',
    buttonStyle: 'pill',
    showGoldLines: true,
    showOrnament: true,
    showGuestName: true,
    showDate: true,
    showMusicNote: true,
    photoScale: 1.08,
    hasVideoBackground: false,
    decorativeElements: ['🌴', '🍃', '🌿', '🪴'],
    particleCount: 6,
  },

  // ======================== 5. ROYAL PURPLE ========================
  // Inspirasi: Minted "Royal" — ornate gold frame, crown motif, regal purple
  'royal-purple': {
    layout: 'framed-photo',
    frame: 'ornate-full',
    monogram: 'crown-top',
    overlayPattern: 'none',
    entryAnimation: 'scale-rotate',
    contentAnimation: 'staggered',
    overlayOpacity: 0.5,
    overlayGradient: 'linear-gradient(180deg, rgba(45,27,78,0.5) 0%, rgba(248,245,252,0.1) 50%, rgba(45,27,78,0.4) 100%)',
    frameColor: '#D4AF37',
    frameWidth: 3,
    monogramSize: 75,
    monogramBorderWidth: 2,
    monogramColor: '#D4AF37',
    monogramBgColor: 'rgba(45,27,78,0.3)',
    nameSize: 'text-2xl sm:text-3xl md:text-4xl',
    dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-lg sm:text-xl md:text-2xl',
    buttonStyle: 'rounded',
    showGoldLines: true,
    showOrnament: true,
    showGuestName: true,
    showDate: true,
    showMusicNote: true,
    photoScale: 1,
    hasVideoBackground: false,
    decorativeElements: ['💜', '👑', '💜', '✦'],
    particleCount: 0,
  },

  // ======================== 6. SAKURA PINK ========================
  // Inspirasi: Zola "Sakura" — cherry blossom overlay, soft pink gradient frame
  'sakura-pink': {
    layout: 'overlay-pattern',
    frame: 'ornate-corners',
    monogram: 'floral-ring',
    overlayPattern: 'petals',
    entryAnimation: 'spring',
    contentAnimation: 'sequential',
    overlayOpacity: 0.25,
    overlayGradient: 'linear-gradient(180deg, rgba(212,160,167,0.15) 0%, rgba(255,245,247,0.05) 50%, rgba(212,160,167,0.1) 100%)',
    frameColor: '#E8A0A8',
    frameWidth: 2,
    monogramSize: 70,
    monogramBorderWidth: 2,
    monogramColor: '#E8A0A8',
    monogramBgColor: 'rgba(255,245,247,0.5)',
    nameSize: 'text-2xl sm:text-3xl md:text-4xl',
    dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-xl sm:text-2xl md:text-3xl',
    buttonStyle: 'pill',
    showGoldLines: true,
    showOrnament: true,
    showGuestName: true,
    showDate: true,
    showMusicNote: true,
    photoScale: 1.1,
    hasVideoBackground: false,
    decorativeElements: ['🌸', '🌸', '💮', '🌸', '🌸'],
    particleCount: 12,
  },

  // ======================== 7. VINTAGE KRAFT ========================
  // Inspirasi: Greenvelope "Savannah" — letterpress kraft texture, stamp border
  'vintage-kraft': {
    layout: 'letterpress',
    frame: 'stamp-border',
    monogram: 'shield',
    overlayPattern: 'none',
    entryAnimation: 'letterpress-reveal',
    contentAnimation: 'sequential',
    overlayOpacity: 0.6,
    overlayGradient: 'linear-gradient(180deg, rgba(60,36,21,0.5) 0%, rgba(254,250,224,0.1) 50%, rgba(60,36,21,0.4) 100%)',
    frameColor: '#D4A373',
    frameWidth: 2,
    monogramSize: 85,
    monogramBorderWidth: 2,
    monogramColor: '#D4A373',
    monogramBgColor: 'rgba(254,250,224,0.85)',
    nameSize: 'text-2xl sm:text-3xl md:text-4xl',
    dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-lg sm:text-xl md:text-2xl',
    buttonStyle: 'bordered',
    showGoldLines: true,
    showOrnament: true,
    showGuestName: true,
    showDate: true,
    showMusicNote: true,
    photoScale: 1,
    hasVideoBackground: false,
    decorativeElements: ['📜', '🖋️', '📜', '✦'],
    particleCount: 0,
  },

  // ======================== 8. AUREUM GOLD ========================
  // Inspirasi: Minted "Art Deco Gold" — geometric art deco frame, gold foil
  'aureum-gold': {
    layout: 'art-deco-frame',
    frame: 'geometric',
    monogram: 'geometric',
    overlayPattern: 'geometric-lines',
    entryAnimation: 'scale-rotate',
    contentAnimation: 'staggered',
    overlayOpacity: 0.4,
    overlayGradient: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(250,248,242,0.1) 50%, rgba(0,0,0,0.3) 100%)',
    frameColor: '#C9A86A',
    frameWidth: 2,
    monogramSize: 80,
    monogramBorderWidth: 2,
    monogramColor: '#C9A86A',
    monogramBgColor: 'rgba(255,255,255,0.5)',
    nameSize: 'text-2xl sm:text-3xl md:text-4xl',
    dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-lg sm:text-xl md:text-2xl',
    buttonStyle: 'sharp',
    showGoldLines: true,
    showOrnament: true,
    showGuestName: true,
    showDate: true,
    showMusicNote: true,
    photoScale: 1,
    hasVideoBackground: false,
    decorativeElements: ['✨', '✦', '✨', '✦'],
    particleCount: 8,
  },

  // ======================== 9. CELESTIAL NIGHT ========================
  // Inspirasi: The Knot "Starry Night" — dark cinematic, constellation dots, moon
  'celestial-night': {
    layout: 'cinematic-dark',
    frame: 'ornate-corners',
    monogram: 'double-circle',
    overlayPattern: 'stars',
    entryAnimation: 'scale-rotate',
    contentAnimation: 'staggered',
    overlayOpacity: 0.6,
    overlayGradient: 'linear-gradient(180deg, rgba(11,25,48,0.6) 0%, rgba(11,25,48,0.3) 50%, rgba(11,25,48,0.7) 100%)',
    frameColor: '#D4AF37',
    frameWidth: 1,
    monogramSize: 80,
    monogramBorderWidth: 1,
    monogramColor: '#D4AF37',
    monogramBgColor: 'rgba(255,255,255,0.05)',
    nameSize: 'text-2xl sm:text-4xl md:text-5xl',
    dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-lg sm:text-xl md:text-2xl',
    buttonStyle: 'rounded',
    showGoldLines: true,
    showOrnament: true,
    showGuestName: true,
    showDate: true,
    showMusicNote: true,
    photoScale: 1.05,
    hasVideoBackground: false,
    decorativeElements: ['🌙', '✦', '⭐', '✦', '🌙'],
    particleCount: 20,
  },

  // ======================== 10. TERRACOTTA BLOOM ========================
  // Inspirasi: WeddingWire "Terracotta" — warm clay, botanical frame, earthy
  'terracotta-bloom': {
    layout: 'fullscreen-photo',
    frame: 'leaf-border',
    monogram: 'floral-ring',
    overlayPattern: 'petals',
    entryAnimation: 'spring',
    contentAnimation: 'sequential',
    overlayOpacity: 0.4,
    overlayGradient: 'linear-gradient(180deg, rgba(93,64,55,0.35) 0%, rgba(251,247,240,0.1) 50%, rgba(93,64,55,0.3) 100%)',
    frameColor: '#C7734B',
    frameWidth: 2,
    monogramSize: 75,
    monogramBorderWidth: 2,
    monogramColor: '#C7734B',
    monogramBgColor: 'transparent',
    nameSize: 'text-2xl sm:text-3xl md:text-4xl',
    dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-xl sm:text-2xl md:text-3xl',
    buttonStyle: 'pill',
    showGoldLines: true,
    showOrnament: true,
    showGuestName: true,
    showDate: true,
    showMusicNote: true,
    photoScale: 1.05,
    hasVideoBackground: false,
    decorativeElements: ['🌿', '🍂', '🌾', '🍃', '🌿'],
    particleCount: 8,
  },

  // ======================== 11. OCEAN BREEZE ========================
  // Inspirasi: Zola "Coastal" — wave border, light blue overlay, airy
  'ocean-breeze': {
    layout: 'fullscreen-photo',
    frame: 'wave-bottom',
    monogram: 'circle',
    overlayPattern: 'waves',
    entryAnimation: 'fade',
    contentAnimation: 'sequential',
    overlayOpacity: 0.3,
    overlayGradient: 'linear-gradient(180deg, rgba(27,42,74,0.25) 0%, rgba(252,252,252,0.1) 50%, rgba(27,42,74,0.2) 100%)',
    frameColor: '#5DBCD2',
    frameWidth: 2,
    monogramSize: 75,
    monogramBorderWidth: 2,
    monogramColor: '#5DBCD2',
    monogramBgColor: 'rgba(255,255,255,0.3)',
    nameSize: 'text-2xl sm:text-3xl md:text-4xl',
    dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-xl sm:text-2xl md:text-3xl',
    buttonStyle: 'sharp',
    showGoldLines: true,
    showOrnament: true,
    showGuestName: true,
    showDate: true,
    showMusicNote: true,
    photoScale: 1.05,
    hasVideoBackground: false,
    decorativeElements: ['🌊', '💧', '🌊', '💧'],
    particleCount: 6,
  },

  // ======================== 12. JASMINE PURE ========================
  // Inspirasi: Joy "Pure White" — ultra-minimal, editorial, thin gold line
  'jasmine-white': {
    layout: 'typography-only',
    frame: 'thin-gold',
    monogram: 'no-frame',
    overlayPattern: 'none',
    entryAnimation: 'fade',
    contentAnimation: 'sequential',
    overlayOpacity: 0,
    overlayGradient: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
    frameColor: '#E8D5B5',
    frameWidth: 1,
    monogramSize: 100,
    monogramBorderWidth: 0,
    monogramColor: '#1A1A1A',
    monogramBgColor: 'transparent',
    nameSize: 'text-3xl sm:text-4xl md:text-5xl',
    dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-xl sm:text-2xl md:text-3xl',
    buttonStyle: 'underline',
    showGoldLines: false,
    showOrnament: false,
    showGuestName: true,
    showDate: true,
    showMusicNote: false,
    photoScale: 1,
    hasVideoBackground: false,
    decorativeElements: ['🤍', '🤍'],
    particleCount: 0,
  },

  // ======================== 13. DREAM GARDEN ========================
  // Inspirasi: Greenvelope "Willow" — illustrated floral, watercolor feel
  'dream-garden': {
    layout: 'split-vertical',
    frame: 'floral-wreath',
    monogram: 'floral-ring',
    overlayPattern: 'floral',
    entryAnimation: 'spring',
    contentAnimation: 'staggered',
    overlayOpacity: 0.2,
    overlayGradient: 'linear-gradient(180deg, rgba(232,180,200,0.2) 0%, rgba(255,248,245,0.1) 50%, rgba(232,180,200,0.15) 100%)',
    frameColor: '#E8B4C8',
    frameWidth: 2,
    monogramSize: 70,
    monogramBorderWidth: 2,
    monogramColor: '#E8B4C8',
    monogramBgColor: 'rgba(255,255,255,0.5)',
    nameSize: 'text-xl sm:text-2xl md:text-3xl',
    dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-lg sm:text-xl md:text-2xl',
    buttonStyle: 'pill',
    showGoldLines: true,
    showOrnament: true,
    showGuestName: true,
    showDate: true,
    showMusicNote: true,
    photoScale: 1,
    hasVideoBackground: false,
    decorativeElements: ['🌸', '🪷', '💮', '🌺', '🌸'],
    particleCount: 14,
  },

  // ======================== 14. JAVANESE ELEGANCE ========================
  // Inspirasi: Wedding tradisional Jawa — batik border, gold ornaments, wayang-inspired
  'javanese-elegance': {
    layout: 'framed-photo',
    frame: 'batik-pattern',
    monogram: 'shield',
    overlayPattern: 'batik',
    entryAnimation: 'scale-rotate',
    contentAnimation: 'staggered',
    overlayOpacity: 0.5,
    overlayGradient: 'linear-gradient(180deg, rgba(26,10,16,0.5) 0%, rgba(253,248,240,0.1) 50%, rgba(26,10,16,0.4) 100%)',
    frameColor: '#D4AF37',
    frameWidth: 3,
    monogramSize: 80,
    monogramBorderWidth: 2,
    monogramColor: '#D4AF37',
    monogramBgColor: 'rgba(26,10,16,0.4)',
    nameSize: 'text-2xl sm:text-3xl md:text-4xl',
    dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-lg sm:text-xl md:text-2xl',
    buttonStyle: 'rounded',
    showGoldLines: true,
    showOrnament: true,
    showGuestName: true,
    showDate: true,
    showMusicNote: true,
    photoScale: 1,
    hasVideoBackground: false,
    decorativeElements: ['✦', '☸', '✦', 'ꦙ', '✦'],
    particleCount: 0,
  },

  // ======================== 15. AIRE ROYALE ========================
  // Inspirasi: The Knot "Luxury Diamond" — dark with diamond facets, geometric luxury
  'aire-royale': {
    layout: 'cinematic-dark',
    frame: 'diamond-facet',
    monogram: 'diamond',
    overlayPattern: 'diamonds',
    entryAnimation: 'scale-rotate',
    contentAnimation: 'staggered',
    overlayOpacity: 0.6,
    overlayGradient: 'linear-gradient(180deg, rgba(10,10,20,0.6) 0%, rgba(85,9,121,0.2) 50%, rgba(10,10,20,0.6) 100%)',
    frameColor: '#D4AF37',
    frameWidth: 1,
    monogramSize: 85,
    monogramBorderWidth: 1,
    monogramColor: '#D4AF37',
    monogramBgColor: 'rgba(255,255,255,0.03)',
    nameSize: 'text-2xl sm:text-4xl md:text-5xl',
    dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-lg sm:text-xl md:text-2xl',
    buttonStyle: 'sharp',
    showGoldLines: true,
    showOrnament: true,
    showGuestName: true,
    showDate: true,
    showMusicNote: true,
    photoScale: 1.05,
    hasVideoBackground: false,
    decorativeElements: ['💎', '✦', '💎', '✦', '💎'],
    particleCount: 10,
  },

  // ======================== 16. PREMIUM BLUSH ========================
  'premium-blush': {
    layout: 'fullscreen-photo', frame: 'thin-gold', monogram: 'double-circle', overlayPattern: 'petals',
    entryAnimation: 'spring', contentAnimation: 'sequential', overlayOpacity: 0.35,
    overlayGradient: 'linear-gradient(180deg, rgba(246,56,84,0.2) 0%, rgba(255,253,251,0.1) 50%, rgba(246,56,84,0.2) 100%)',
    frameColor: '#FFA0AE', frameWidth: 1, monogramSize: 75, monogramBorderWidth: 2,
    monogramColor: '#FFA0AE', monogramBgColor: 'rgba(255,253,251,0.8)',
    nameSize: 'text-2xl sm:text-3xl md:text-4xl', dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-xl sm:text-2xl', buttonStyle: 'pill',
    showGoldLines: true, showOrnament: true, showGuestName: true, showDate: true, showMusicNote: true,
    photoScale: 1.05, hasVideoBackground: false,
    decorativeElements: ['♡', '🌸', '♡', '💕'], particleCount: 10,
  },
  // ======================== 17. LUXURY LAVENDER ========================
  'luxury-lavender': {
    layout: 'cinematic-dark', frame: 'geometric', monogram: 'geometric', overlayPattern: 'geometric-lines',
    entryAnimation: 'scale-rotate', contentAnimation: 'staggered', overlayOpacity: 0.45,
    overlayGradient: 'linear-gradient(180deg, rgba(107,63,160,0.4) 0%, rgba(249,245,252,0.15) 50%, rgba(107,63,160,0.35) 100%)',
    frameColor: '#D4AF37', frameWidth: 2, monogramSize: 80, monogramBorderWidth: 2,
    monogramColor: '#D4AF37', monogramBgColor: 'rgba(255,255,255,0.4)',
    nameSize: 'text-2xl sm:text-3xl md:text-4xl', dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-lg sm:text-xl', buttonStyle: 'rounded',
    showGoldLines: true, showOrnament: true, showGuestName: true, showDate: true, showMusicNote: true,
    photoScale: 1.05, hasVideoBackground: false,
    decorativeElements: ['🦋', '💜', '🦋', '✨'], particleCount: 8,
  },
  // ======================== 18. EXCLUSIVE NOIR ========================
  'exclusive-noir': {
    layout: 'cinematic-dark', frame: 'ornate-corners', monogram: 'diamond', overlayPattern: 'stars',
    entryAnimation: 'scale-rotate', contentAnimation: 'staggered', overlayOpacity: 0.55,
    overlayGradient: 'linear-gradient(180deg, rgba(26,26,36,0.6) 0%, rgba(73,81,111,0.2) 50%, rgba(26,26,36,0.5) 100%)',
    frameColor: '#D4AF37', frameWidth: 1, monogramSize: 85, monogramBorderWidth: 1,
    monogramColor: '#D4AF37', monogramBgColor: 'rgba(255,255,255,0.04)',
    nameSize: 'text-2xl sm:text-4xl md:text-5xl', dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-lg sm:text-xl', buttonStyle: 'sharp',
    showGoldLines: true, showOrnament: true, showGuestName: true, showDate: true, showMusicNote: true,
    photoScale: 1.05, hasVideoBackground: false,
    decorativeElements: ['✦', '◆', '✦', '◆', '✦'], particleCount: 12,
  },
  // ======================== 19. SAGE DREAM ========================
  'sage-dream': {
    layout: 'cinematic-dark', frame: 'leaf-border', monogram: 'floral-ring', overlayPattern: 'petals',
    entryAnimation: 'spring', contentAnimation: 'sequential', overlayOpacity: 0.35,
    overlayGradient: 'linear-gradient(180deg, rgba(74,103,65,0.3) 0%, rgba(251,249,244,0.1) 50%, rgba(74,103,65,0.25) 100%)',
    frameColor: '#C9A86A', frameWidth: 2, monogramSize: 75, monogramBorderWidth: 2,
    monogramColor: '#C9A86A', monogramBgColor: 'rgba(251,249,244,0.3)',
    nameSize: 'text-2xl sm:text-3xl md:text-4xl', dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-xl sm:text-2xl md:text-3xl', buttonStyle: 'pill',
    showGoldLines: true, showOrnament: true, showGuestName: true, showDate: true, showMusicNote: true,
    photoScale: 1.05, hasVideoBackground: false,
    decorativeElements: ['🌿', '🍃', '🌿', '🌱', '🌿'], particleCount: 10,
  },
  // ======================== 20. ETERNAL SAGE LUXURY ========================
  // Cinematic slow-zoom opening, floral corner ornaments, overlay rgba(34,56,45,0.45)
  'eternal-sage-luxury': {
    layout: 'cinematic-dark', frame: 'leaf-border', monogram: 'floral-ring', overlayPattern: 'petals',
    entryAnimation: 'spring', contentAnimation: 'staggered', overlayOpacity: 0.4,
    overlayGradient: 'linear-gradient(180deg, rgba(34,56,45,0.4) 0%, rgba(34,56,45,0.2) 50%, rgba(34,56,45,0.4) 100%)',
    frameColor: '#C9A86A', frameWidth: 2, monogramSize: 85, monogramBorderWidth: 2,
    monogramColor: '#C9A86A', monogramBgColor: 'rgba(247,241,230,0.25)',
    nameSize: 'text-3xl sm:text-4xl md:text-5xl', dateSize: 'text-xs sm:text-sm',
    guestNameSize: 'text-xl sm:text-2xl md:text-3xl', buttonStyle: 'pill',
    showGoldLines: true, showOrnament: true, showGuestName: true, showDate: true, showMusicNote: true,
    photoScale: 1.1, hasVideoBackground: false,
    decorativeElements: ['🌿', '🍃', '🌱', '🌿', '🍃'], particleCount: 15,
  },
};

export function getCoverConfig(templateId: string): CoverConfig {
  return TEMPLATE_COVERS[templateId] || TEMPLATE_COVERS['modern-organic-luxury'];
}
