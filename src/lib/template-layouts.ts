// Template Layout Configurations — Unique section ordering, animation variants, layout patterns per template
// Each template gets a distinct visual identity beyond just colors/fonts

export type SectionLayout = 'card' | 'full-bleed' | 'split' | 'minimal' | 'elegant' | 'editorial' | 'masonry' | 'overlay';
export type AnimationStyle = 'fade-up' | 'fade-in' | 'scale-in' | 'slide-left' | 'slide-right' | 'zoom-in' | 'parallax' | 'stagger' | 'flip' | 'none';
export type NavStyle = 'bottom-bar' | 'side-dots' | 'top-minimal' | 'hidden' | 'floating-chip';
export type CoverStyle = 'fullscreen' | 'minimal' | 'split' | 'letterpress' | 'cinematic' | 'editorial';

export interface SectionConfig {
  id: string;
  visible: boolean;
  layout: SectionLayout;
  animation: AnimationStyle;
  order: number;
  fullWidth?: boolean;
  noPadding?: boolean;
}

export interface TemplateLayout {
  id: string;
  name: string;
  description: string;
  // Section configuration
  sections: SectionConfig[];
  // Cover configuration
  coverStyle: CoverStyle;
  coverAnimation: 'spring' | 'fade' | 'zoom' | 'slide-up' | 'scale-rotate';
  // Navigation
  navStyle: NavStyle;
  navPosition: 'bottom' | 'side' | 'top';
  // Hero
  heroLayout: 'centered' | 'split-left' | 'split-right' | 'full-image' | 'minimal';
  heroAnimation: AnimationStyle;
  // Countdown
  countdownLayout: 'grid' | 'row' | 'columns' | 'circle';
  countdownSize: 'sm' | 'md' | 'lg';
  // Event cards
  eventLayout: 'stacked' | 'side-by-side' | 'timeline' | 'cards';
  // Gallery
  galleryLayout: 'masonry' | 'grid' | 'carousel' | 'collage';
  galleryColumns: number;
  // Story
  storyLayout: 'timeline' | 'cards' | 'alternating' | 'compact';
  // Couple section
  coupleLayout: 'side-by-side' | 'stacked' | 'overlay' | 'cards';
  // Gift
  giftLayout: 'list' | 'cards' | 'grid';
  // Wishes
  wishLayout: 'list' | 'cards' | 'wall';
  // Close section
  closeLayout: 'centered' | 'full-bleed' | 'minimal';
  // Extra visual features
  parallaxEnabled: boolean;
  particleEffects: boolean;
  revealOnScroll: boolean;
  smoothTransitions: boolean;
  hasDividerLines: boolean;
  hasSectionIcons: boolean;
  sectionSpacing: 'compact' | 'normal' | 'generous';
  // Typography scale
  headingScale: 'sm' | 'md' | 'lg';
  bodyWidth: 'narrow' | 'normal' | 'wide';
}

const defaultSectionOrder = ['hero', 'quote', 'couple', 'story', 'countdown', 'events', 'location', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'];

function createSections(visible: string[], layout: SectionLayout, anim: AnimationStyle): SectionConfig[] {
  return defaultSectionOrder.map((id, i) => ({
    id,
    visible: visible.includes(id),
    layout: id === 'hero' ? 'full-bleed' : id === 'gallery' ? 'masonry' : id === 'closing' ? 'full-bleed' : layout,
    animation: anim,
    order: visible.indexOf(id) >= 0 ? visible.indexOf(id) + 1 : 99,
    fullWidth: ['hero', 'gallery', 'closing', 'location'].includes(id),
    noPadding: ['hero', 'closing'].includes(id),
  }));
}

export const TEMPLATE_LAYOUTS: Record<string, TemplateLayout> = {

  // ======================== 1. MODERN ORGANIC ========================
  'modern-organic-luxury': {
    id: 'modern-organic-luxury', name: 'Modern Organic', description: 'Earthy, natural elegance with soft botanical accents and fluid animations',
    sections: createSections(['hero', 'quote', 'couple', 'story', 'countdown', 'events', 'location', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'], 'card', 'fade-up'),
    coverStyle: 'fullscreen', coverAnimation: 'spring',
    navStyle: 'bottom-bar', navPosition: 'bottom',
    heroLayout: 'centered', heroAnimation: 'fade-up',
    countdownLayout: 'grid', countdownSize: 'md',
    eventLayout: 'stacked', galleryLayout: 'masonry', galleryColumns: 3,
    storyLayout: 'timeline', coupleLayout: 'side-by-side',
    giftLayout: 'list', wishLayout: 'cards',
    closeLayout: 'centered',
    parallaxEnabled: true, particleEffects: true, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: true, hasSectionIcons: true, sectionSpacing: 'generous',
    headingScale: 'lg', bodyWidth: 'normal',
  },

  // ======================== 2. CLASSIC ROSE GOLD ========================
  'classic-rose-gold': {
    id: 'classic-rose-gold', name: 'Classic Rose Gold', description: 'Romantic, blush-toned luxury with soft feminine curves and rose accents',
    sections: createSections(['hero', 'quote', 'couple', 'story', 'countdown', 'events', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'], 'elegant', 'scale-in'),
    coverStyle: 'fullscreen', coverAnimation: 'fade',
    navStyle: 'floating-chip', navPosition: 'bottom',
    heroLayout: 'centered', heroAnimation: 'scale-in',
    countdownLayout: 'circle', countdownSize: 'sm',
    eventLayout: 'side-by-side', galleryLayout: 'collage', galleryColumns: 2,
    storyLayout: 'alternating', coupleLayout: 'cards',
    giftLayout: 'cards', wishLayout: 'wall',
    closeLayout: 'centered',
    parallaxEnabled: true, particleEffects: true, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: true, hasSectionIcons: true, sectionSpacing: 'generous',
    headingScale: 'md', bodyWidth: 'narrow',
  },

  // ======================== 3. MINIMAL MONOCHROME ========================
  'minimal-monochrome': {
    id: 'minimal-monochrome', name: 'Minimal Monochrome', description: 'Ultra-clean, geometric precision with sharp lines and monochrome palette',
    sections: createSections(['hero', 'couple', 'countdown', 'events', 'gallery', 'rsvp', 'wishes', 'closing'], 'minimal', 'fade-in'),
    coverStyle: 'minimal', coverAnimation: 'fade',
    navStyle: 'top-minimal', navPosition: 'top',
    heroLayout: 'minimal', heroAnimation: 'fade-in',
    countdownLayout: 'row', countdownSize: 'sm',
    eventLayout: 'cards', galleryLayout: 'grid', galleryColumns: 3,
    storyLayout: 'compact', coupleLayout: 'stacked',
    giftLayout: 'list', wishLayout: 'list',
    closeLayout: 'minimal',
    parallaxEnabled: false, particleEffects: false, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: false, hasSectionIcons: false, sectionSpacing: 'compact',
    headingScale: 'sm', bodyWidth: 'narrow',
  },

  // ======================== 4. TROPICAL PARADISE ========================
  'tropical-paradise': {
    id: 'tropical-paradise', name: 'Tropical Paradise', description: 'Lush, vibrant greens with lively animations and tropical palm accents',
    sections: createSections(['hero', 'couple', 'story', 'countdown', 'events', 'location', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'], 'card', 'slide-left'),
    coverStyle: 'fullscreen', coverAnimation: 'zoom',
    navStyle: 'bottom-bar', navPosition: 'bottom',
    heroLayout: 'full-image', heroAnimation: 'parallax',
    countdownLayout: 'grid', countdownSize: 'md',
    eventLayout: 'stacked', galleryLayout: 'masonry', galleryColumns: 3,
    storyLayout: 'timeline', coupleLayout: 'side-by-side',
    giftLayout: 'list', wishLayout: 'cards',
    closeLayout: 'centered',
    parallaxEnabled: true, particleEffects: true, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: true, hasSectionIcons: true, sectionSpacing: 'generous',
    headingScale: 'lg', bodyWidth: 'normal',
  },

  // ======================== 5. ROYAL PURPLE ========================
  'royal-purple': {
    id: 'royal-purple', name: 'Royal Purple', description: 'Regal majesty with deep purples, ornate gold borders, and dramatic reveals',
    sections: createSections(['hero', 'quote', 'couple', 'story', 'countdown', 'events', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'], 'elegant', 'zoom-in'),
    coverStyle: 'cinematic', coverAnimation: 'scale-rotate',
    navStyle: 'side-dots', navPosition: 'side',
    heroLayout: 'centered', heroAnimation: 'zoom-in',
    countdownLayout: 'circle', countdownSize: 'lg',
    eventLayout: 'side-by-side', galleryLayout: 'collage', galleryColumns: 2,
    storyLayout: 'alternating', coupleLayout: 'cards',
    giftLayout: 'cards', wishLayout: 'wall',
    closeLayout: 'full-bleed',
    parallaxEnabled: true, particleEffects: true, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: true, hasSectionIcons: true, sectionSpacing: 'generous',
    headingScale: 'lg', bodyWidth: 'narrow',
  },

  // ======================== 6. SAKURA PINK ========================
  'sakura-pink': {
    id: 'sakura-pink', name: 'Sakura Pink', description: 'Japanese-inspired delicate pink with cherry blossom petals and soft transitions',
    sections: createSections(['hero', 'couple', 'story', 'countdown', 'events', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'], 'card', 'slide-right'),
    coverStyle: 'fullscreen', coverAnimation: 'spring',
    navStyle: 'floating-chip', navPosition: 'bottom',
    heroLayout: 'centered', heroAnimation: 'stagger',
    countdownLayout: 'circle', countdownSize: 'sm',
    eventLayout: 'stacked', galleryLayout: 'masonry', galleryColumns: 2,
    storyLayout: 'timeline', coupleLayout: 'side-by-side',
    giftLayout: 'list', wishLayout: 'cards',
    closeLayout: 'centered',
    parallaxEnabled: true, particleEffects: true, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: true, hasSectionIcons: true, sectionSpacing: 'normal',
    headingScale: 'md', bodyWidth: 'normal',
  },

  // ======================== 7. VINTAGE KRAFT ========================
  'vintage-kraft': {
    id: 'vintage-kraft', name: 'Vintage Kraft', description: 'Old-world charm with kraft paper texture, letterpress feel, and sepia tones',
    sections: createSections(['hero', 'quote', 'couple', 'story', 'events', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'], 'minimal', 'fade-in'),
    coverStyle: 'letterpress', coverAnimation: 'fade',
    navStyle: 'top-minimal', navPosition: 'top',
    heroLayout: 'minimal', heroAnimation: 'fade-in',
    countdownLayout: 'row', countdownSize: 'sm',
    eventLayout: 'timeline', galleryLayout: 'grid', galleryColumns: 2,
    storyLayout: 'compact', coupleLayout: 'side-by-side',
    giftLayout: 'list', wishLayout: 'list',
    closeLayout: 'minimal',
    parallaxEnabled: false, particleEffects: false, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: true, hasSectionIcons: false, sectionSpacing: 'normal',
    headingScale: 'md', bodyWidth: 'narrow',
  },

  // ======================== 8. AUREUM GOLD ========================
  'aureum-gold': {
    id: 'aureum-gold', name: 'Aureum Gold', description: 'Opulent art deco luxury with geometric gold patterns and dramatic elegance',
    sections: createSections(['hero', 'quote', 'couple', 'countdown', 'events', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'], 'elegant', 'zoom-in'),
    coverStyle: 'cinematic', coverAnimation: 'scale-rotate',
    navStyle: 'side-dots', navPosition: 'side',
    heroLayout: 'centered', heroAnimation: 'zoom-in',
    countdownLayout: 'columns', countdownSize: 'lg',
    eventLayout: 'side-by-side', galleryLayout: 'grid', galleryColumns: 3,
    storyLayout: 'alternating', coupleLayout: 'cards',
    giftLayout: 'cards', wishLayout: 'cards',
    closeLayout: 'full-bleed',
    parallaxEnabled: true, particleEffects: true, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: true, hasSectionIcons: true, sectionSpacing: 'generous',
    headingScale: 'lg', bodyWidth: 'narrow',
  },

  // ======================== 9. CELESTIAL NIGHT ========================
  'celestial-night': {
    id: 'celestial-night', name: 'Celestial Night', description: 'Dark starry night with constellation effects, ethereal glow, and cosmic animations',
    sections: createSections(['hero', 'quote', 'couple', 'story', 'countdown', 'events', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'], 'full-bleed', 'parallax'),
    coverStyle: 'cinematic', coverAnimation: 'scale-rotate',
    navStyle: 'side-dots', navPosition: 'side',
    heroLayout: 'full-image', heroAnimation: 'parallax',
    countdownLayout: 'circle', countdownSize: 'lg',
    eventLayout: 'cards', galleryLayout: 'collage', galleryColumns: 2,
    storyLayout: 'alternating', coupleLayout: 'overlay',
    giftLayout: 'cards', wishLayout: 'cards',
    closeLayout: 'full-bleed',
    parallaxEnabled: true, particleEffects: true, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: true, hasSectionIcons: true, sectionSpacing: 'generous',
    headingScale: 'lg', bodyWidth: 'narrow',
  },

  // ======================== 10. TERRACOTTA BLOOM ========================
  'terracotta-bloom': {
    id: 'terracotta-bloom', name: 'Terracotta Bloom', description: 'Warm Mediterranean clay with botanical illustrations and sun-baked elegance',
    sections: createSections(['hero', 'couple', 'story', 'countdown', 'events', 'location', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'], 'card', 'fade-up'),
    coverStyle: 'fullscreen', coverAnimation: 'spring',
    navStyle: 'bottom-bar', navPosition: 'bottom',
    heroLayout: 'split-left', heroAnimation: 'slide-left',
    countdownLayout: 'grid', countdownSize: 'md',
    eventLayout: 'stacked', galleryLayout: 'masonry', galleryColumns: 3,
    storyLayout: 'timeline', coupleLayout: 'side-by-side',
    giftLayout: 'list', wishLayout: 'cards',
    closeLayout: 'centered',
    parallaxEnabled: true, particleEffects: true, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: true, hasSectionIcons: true, sectionSpacing: 'generous',
    headingScale: 'lg', bodyWidth: 'normal',
  },

  // ======================== 11. OCEAN BREEZE ========================
  'ocean-breeze': {
    id: 'ocean-breeze', name: 'Ocean Breeze', description: 'Coastal serenity with ocean blues, wave animations, and airy floating elements',
    sections: createSections(['hero', 'couple', 'story', 'countdown', 'events', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'], 'card', 'slide-left'),
    coverStyle: 'fullscreen', coverAnimation: 'fade',
    navStyle: 'floating-chip', navPosition: 'bottom',
    heroLayout: 'centered', heroAnimation: 'stagger',
    countdownLayout: 'row', countdownSize: 'md',
    eventLayout: 'side-by-side', galleryLayout: 'grid', galleryColumns: 3,
    storyLayout: 'timeline', coupleLayout: 'side-by-side',
    giftLayout: 'list', wishLayout: 'cards',
    closeLayout: 'centered',
    parallaxEnabled: true, particleEffects: true, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: true, hasSectionIcons: true, sectionSpacing: 'normal',
    headingScale: 'md', bodyWidth: 'wide',
  },

  // ======================== 12. JASMINE PURE ========================
  'jasmine-white': {
    id: 'jasmine-white', name: 'Jasmine Pure', description: 'Crisp white editorial luxury with airy layouts and minimalist sophistication',
    sections: createSections(['hero', 'couple', 'story', 'events', 'gallery', 'rsvp', 'wishes', 'closing'], 'editorial', 'fade-in'),
    coverStyle: 'editorial', coverAnimation: 'fade',
    navStyle: 'top-minimal', navPosition: 'top',
    heroLayout: 'minimal', heroAnimation: 'fade-in',
    countdownLayout: 'row', countdownSize: 'sm',
    eventLayout: 'cards', galleryLayout: 'grid', galleryColumns: 4,
    storyLayout: 'compact', coupleLayout: 'stacked',
    giftLayout: 'list', wishLayout: 'list',
    closeLayout: 'minimal',
    parallaxEnabled: false, particleEffects: false, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: false, hasSectionIcons: false, sectionSpacing: 'compact',
    headingScale: 'sm', bodyWidth: 'narrow',
  },

  // ======================== 13. DREAM GARDEN ========================
  'dream-garden': {
    id: 'dream-garden', name: 'Dream Garden', description: 'Whimsical fairy tale garden with pastel tones, floating elements, and dreamy transitions',
    sections: createSections(['hero', 'quote', 'couple', 'story', 'countdown', 'events', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'], 'elegant', 'scale-in'),
    coverStyle: 'fullscreen', coverAnimation: 'spring',
    navStyle: 'floating-chip', navPosition: 'bottom',
    heroLayout: 'centered', heroAnimation: 'stagger',
    countdownLayout: 'circle', countdownSize: 'sm',
    eventLayout: 'stacked', galleryLayout: 'masonry', galleryColumns: 2,
    storyLayout: 'alternating', coupleLayout: 'cards',
    giftLayout: 'cards', wishLayout: 'wall',
    closeLayout: 'centered',
    parallaxEnabled: true, particleEffects: true, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: true, hasSectionIcons: true, sectionSpacing: 'generous',
    headingScale: 'md', bodyWidth: 'normal',
  },

  // ======================== 14. JAVANESE ELEGANCE ========================
  'javanese-elegance': {
    id: 'javanese-elegance', name: 'Javanese Elegance', description: 'Indonesian heritage-inspired with batik motifs, traditional gold, and cultural grace',
    sections: createSections(['hero', 'quote', 'couple', 'story', 'events', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'], 'elegant', 'fade-up'),
    coverStyle: 'cinematic', coverAnimation: 'scale-rotate',
    navStyle: 'side-dots', navPosition: 'side',
    heroLayout: 'centered', heroAnimation: 'zoom-in',
    countdownLayout: 'columns', countdownSize: 'md',
    eventLayout: 'timeline', galleryLayout: 'grid', galleryColumns: 3,
    storyLayout: 'alternating', coupleLayout: 'cards',
    giftLayout: 'cards', wishLayout: 'cards',
    closeLayout: 'full-bleed',
    parallaxEnabled: true, particleEffects: true, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: true, hasSectionIcons: true, sectionSpacing: 'generous',
    headingScale: 'md', bodyWidth: 'narrow',
  },

  // ======================== 15. AIRE ROYALE ========================
  'aire-royale': {
    id: 'aire-royale', name: 'Aire Royale', description: 'Ultra-luxury dark mode with diamond facets, serif elegance, and dramatic contrast',
    sections: createSections(['hero', 'quote', 'couple', 'story', 'countdown', 'events', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'], 'full-bleed', 'parallax'),
    coverStyle: 'cinematic', coverAnimation: 'scale-rotate',
    navStyle: 'side-dots', navPosition: 'side',
    heroLayout: 'full-image', heroAnimation: 'parallax',
    countdownLayout: 'circle', countdownSize: 'lg',
    eventLayout: 'cards', galleryLayout: 'collage', galleryColumns: 2,
    storyLayout: 'alternating', coupleLayout: 'overlay',
    giftLayout: 'cards', wishLayout: 'cards',
    closeLayout: 'full-bleed',
    parallaxEnabled: true, particleEffects: true, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: true, hasSectionIcons: false, sectionSpacing: 'generous',
    headingScale: 'lg', bodyWidth: 'narrow',
  },

  // ======================== 16. PREMIUM BLUSH ========================
  'premium-blush': {
    id: 'premium-blush', name: 'Premium Blush',
    description: 'Rose pink elegance inspired by our-wedding.link premium design system',
    sections: createSections(['hero', 'quote', 'couple', 'story', 'countdown', 'events', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'], 'elegant', 'scale-in'),
    coverStyle: 'fullscreen', coverAnimation: 'spring',
    navStyle: 'floating-chip', navPosition: 'bottom',
    heroLayout: 'centered', heroAnimation: 'stagger',
    countdownLayout: 'circle', countdownSize: 'sm',
    eventLayout: 'side-by-side', galleryLayout: 'masonry', galleryColumns: 2,
    storyLayout: 'alternating', coupleLayout: 'cards',
    giftLayout: 'cards', wishLayout: 'wall',
    closeLayout: 'centered',
    parallaxEnabled: true, particleEffects: true, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: true, hasSectionIcons: true, sectionSpacing: 'generous',
    headingScale: 'md', bodyWidth: 'normal',
  },
  // ======================== 17. LUXURY LAVENDER ========================
  'luxury-lavender': {
    id: 'luxury-lavender', name: 'Luxury Lavender',
    description: 'Rich purple premium wedding inspired by our-wedding.link luxury palette',
    sections: createSections(['hero', 'couple', 'story', 'countdown', 'events', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'], 'elegant', 'zoom-in'),
    coverStyle: 'cinematic', coverAnimation: 'scale-rotate',
    navStyle: 'side-dots', navPosition: 'side',
    heroLayout: 'centered', heroAnimation: 'zoom-in',
    countdownLayout: 'columns', countdownSize: 'md',
    eventLayout: 'cards', galleryLayout: 'grid', galleryColumns: 3,
    storyLayout: 'alternating', coupleLayout: 'side-by-side',
    giftLayout: 'cards', wishLayout: 'wall',
    closeLayout: 'full-bleed',
    parallaxEnabled: true, particleEffects: true, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: true, hasSectionIcons: true, sectionSpacing: 'generous',
    headingScale: 'md', bodyWidth: 'narrow',
  },
  // ======================== 18. EXCLUSIVE NOIR ========================
  'exclusive-noir': {
    id: 'exclusive-noir', name: 'Exclusive Noir',
    description: 'Ultra-exclusive dark luxury inspired by our-wedding.link exclusive tier',
    sections: createSections(['hero', 'couple', 'story', 'countdown', 'events', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'], 'full-bleed', 'parallax'),
    coverStyle: 'cinematic', coverAnimation: 'scale-rotate',
    navStyle: 'side-dots', navPosition: 'side',
    heroLayout: 'full-image', heroAnimation: 'parallax',
    countdownLayout: 'circle', countdownSize: 'lg',
    eventLayout: 'cards', galleryLayout: 'collage', galleryColumns: 2,
    storyLayout: 'alternating', coupleLayout: 'overlay',
    giftLayout: 'cards', wishLayout: 'cards',
    closeLayout: 'full-bleed',
    parallaxEnabled: true, particleEffects: true, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: true, hasSectionIcons: false, sectionSpacing: 'generous',
    headingScale: 'lg', bodyWidth: 'narrow',
  },
  // ======================== 19. SAGE DREAM ========================
  'sage-dream': {
    id: 'sage-dream', name: 'Sage Dream',
    description: 'Exclusive dreamy wedding with sage green, ivory warmth, and soft gold luxury',
    sections: createSections(['hero', 'quote', 'couple', 'story', 'countdown', 'events', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'], 'elegant', 'scale-in'),
    coverStyle: 'cinematic', coverAnimation: 'fade',
    navStyle: 'floating-chip', navPosition: 'bottom',
    heroLayout: 'centered', heroAnimation: 'stagger',
    countdownLayout: 'circle', countdownSize: 'sm',
    eventLayout: 'side-by-side', galleryLayout: 'masonry', galleryColumns: 2,
    storyLayout: 'alternating', coupleLayout: 'cards',
    giftLayout: 'cards', wishLayout: 'wall',
    closeLayout: 'centered',
    parallaxEnabled: true, particleEffects: true, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: true, hasSectionIcons: true, sectionSpacing: 'generous',
    headingScale: 'md', bodyWidth: 'normal',
  },
  // ======================== 20. ETERNAL SAGE LUXURY ========================
  'eternal-sage-luxury': {
    id: 'eternal-sage-luxury', name: 'Eternal Sage Luxury',
    description: 'Cinematic slow-zoom opening, botanical luxury, Forest Green + Ivory + Soft Gold. Mobile-first, 100dvh cover.',
    sections: createSections(['hero', 'quote', 'couple', 'story', 'countdown', 'events', 'gallery', 'rsvp', 'wishes', 'gift', 'closing'], 'elegant', 'fade-up'),
    coverStyle: 'cinematic', coverAnimation: 'fade',
    navStyle: 'floating-chip', navPosition: 'bottom',
    heroLayout: 'centered', heroAnimation: 'stagger',
    countdownLayout: 'grid', countdownSize: 'md',
    eventLayout: 'side-by-side', galleryLayout: 'masonry', galleryColumns: 2,
    storyLayout: 'alternating', coupleLayout: 'side-by-side',
    giftLayout: 'cards', wishLayout: 'wall',
    closeLayout: 'full-bleed',
    parallaxEnabled: true, particleEffects: true, revealOnScroll: true, smoothTransitions: true,
    hasDividerLines: true, hasSectionIcons: true, sectionSpacing: 'generous',
    headingScale: 'lg', bodyWidth: 'normal',
  },
};

export function getLayout(templateId: string): TemplateLayout {
  return TEMPLATE_LAYOUTS[templateId] || TEMPLATE_LAYOUTS['modern-organic-luxury'];
}
