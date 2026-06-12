// Template Section Styles — Per-section unique visual treatments per template
// KEY CONCEPT from reference images: Dark-Light-Dark rhythm creates visual drama
// Dark sections: hero (some), countdown, closing
// Light sections: couple, gallery, wishes, rsvp
// Mid sections: quote, story, events — vary per template

export interface SectionStyle {
  bg?: string;
  bgImage?: string;
  spacing?: string;
  divider?: 'none' | 'gradient' | 'ornament' | 'double' | 'dots' | 'solid' | 'floral';
  cardStyle?: 'glass' | 'solid' | 'bordered' | 'minimal' | 'floating' | 'dark-glass';
  photoTreatment?: 'circle' | 'rounded' | 'square' | 'framed' | 'overlay' | 'hexagon';
  titleAlign?: 'left' | 'center';
  textColor?: string;
  decorativeOverlay?: string;
  maxWidth?: string;
  showOrnament?: boolean;
}

export interface TemplateSectionStyles {
  hero?: SectionStyle; quote?: SectionStyle; couple?: SectionStyle; story?: SectionStyle;
  countdown?: SectionStyle; events?: SectionStyle; location?: SectionStyle;
  gallery?: SectionStyle; rsvp?: SectionStyle; wishes?: SectionStyle;
  gift?: SectionStyle; closing?: SectionStyle;
}

export const SECTION_STYLES: Record<string, TemplateSectionStyles> = {

  // ==================== 1. MODERN ORGANIC ====================
  'modern-organic-luxury': {
    hero: { divider: 'gradient', cardStyle: 'glass' },
    quote: { bg: 'rgba(248,243,234,0.5)', cardStyle: 'solid', divider: 'gradient' },
    couple: { bg: '#F8F3EA', photoTreatment: 'circle', divider: 'ornament', cardStyle: 'solid' },
    story: { bg: 'rgba(248,243,234,0.5)', cardStyle: 'glass', divider: 'floral' },
    countdown: { bg: '#5F6F52', textColor: '#F8F3EA', cardStyle: 'dark-glass', divider: 'none' },
    events: { bg: '#F8F3EA', cardStyle: 'solid', divider: 'gradient' },
    location: { bg: 'rgba(248,243,234,0.5)' },
    gallery: { bg: '#F8F3EA' },
    rsvp: { bg: 'rgba(248,243,234,0.5)', cardStyle: 'solid', divider: 'ornament' },
    wishes: { bg: '#F8F3EA', cardStyle: 'glass' },
    gift: { bg: 'rgba(248,243,234,0.5)' },
    closing: { bg: '#5F6F52', textColor: '#F8F3EA', divider: 'none' },
  },

  // ==================== 2. CLASSIC ROSE GOLD ====================
  'classic-rose-gold': {
    hero: { divider: 'double', cardStyle: 'bordered' },
    quote: { bg: '#FEFAF6', divider: 'dots' },
    couple: { bg: '#FEFAF6', photoTreatment: 'framed', divider: 'ornament', cardStyle: 'solid' },
    story: { bg: 'rgba(254,250,246,0.5)', cardStyle: 'solid', divider: 'floral' },
    countdown: { bg: '#8B5E63', textColor: '#FEFAF6', cardStyle: 'dark-glass', divider: 'none' },
    events: { bg: '#FEFAF6', cardStyle: 'bordered', divider: 'double' },
    gallery: { bg: 'rgba(254,250,246,0.5)' },
    rsvp: { bg: '#FEFAF6', cardStyle: 'solid', divider: 'ornament' },
    wishes: { bg: 'rgba(254,250,246,0.5)', cardStyle: 'bordered' },
    gift: { bg: '#FEFAF6' },
    closing: { bg: '#8B5E63', textColor: '#FEFAF6', divider: 'none' },
  },

  // ==================== 3. MINIMAL MONOCHROME ====================
  'minimal-monochrome': {
    hero: { divider: 'none', cardStyle: 'minimal', spacing: 'py-12 sm:py-16' },
    couple: { bg: '#FFFFFF', photoTreatment: 'square', divider: 'none', cardStyle: 'minimal' },
    story: { bg: '#F5F5F5', cardStyle: 'minimal', divider: 'solid' },
    countdown: { bg: '#2D2D2D', textColor: '#FFFFFF', cardStyle: 'dark-glass', divider: 'none' },
    events: { bg: '#FFFFFF', cardStyle: 'minimal', divider: 'none' },
    gallery: { bg: '#F5F5F5' },
    rsvp: { bg: '#FFFFFF', cardStyle: 'minimal', divider: 'solid' },
    wishes: { bg: '#F5F5F5', cardStyle: 'minimal' },
    gift: { bg: '#FFFFFF' },
    closing: { bg: '#2D2D2D', textColor: '#FFFFFF', divider: 'none' },
  },

  // ==================== 4. TROPICAL PARADISE ====================
  'tropical-paradise': {
    hero: { divider: 'floral', cardStyle: 'glass' },
    couple: { bg: '#F0F7F4', photoTreatment: 'rounded', divider: 'ornament', cardStyle: 'solid' },
    story: { bg: 'rgba(240,247,244,0.5)', cardStyle: 'solid', divider: 'floral' },
    countdown: { bg: '#1B4332', textColor: '#F0F7F4', cardStyle: 'dark-glass', divider: 'none' },
    events: { bg: '#F0F7F4', cardStyle: 'solid', divider: 'gradient' },
    gallery: { bg: 'rgba(240,247,244,0.5)' },
    rsvp: { bg: '#F0F7F4', cardStyle: 'glass', divider: 'floral' },
    wishes: { bg: 'rgba(240,247,244,0.5)', cardStyle: 'glass' },
    gift: { bg: '#F0F7F4' },
    closing: { bg: '#1B4332', textColor: '#F0F7F4', divider: 'none' },
  },

  // ==================== 5. ROYAL PURPLE ====================
  'royal-purple': {
    hero: { divider: 'double', cardStyle: 'bordered' },
    quote: { bg: '#F8F5FC', divider: 'ornament' },
    couple: { bg: '#F8F5FC', photoTreatment: 'framed', divider: 'ornament', cardStyle: 'solid' },
    story: { bg: 'rgba(248,245,252,0.5)', cardStyle: 'solid', divider: 'double' },
    countdown: { bg: '#2D1B4E', textColor: '#F8F5FC', cardStyle: 'dark-glass', divider: 'none' },
    events: { bg: '#F8F5FC', cardStyle: 'bordered', divider: 'double' },
    gallery: { bg: 'rgba(248,245,252,0.5)' },
    rsvp: { bg: '#F8F5FC', cardStyle: 'solid', divider: 'ornament' },
    wishes: { bg: 'rgba(248,245,252,0.5)', cardStyle: 'solid' },
    gift: { bg: '#F8F5FC' },
    closing: { bg: '#2D1B4E', textColor: '#F8F5FC', divider: 'none' },
  },

  // ==================== 6. SAKURA PINK ====================
  'sakura-pink': {
    hero: { divider: 'floral', cardStyle: 'glass' },
    couple: { bg: '#FFF5F7', photoTreatment: 'circle', divider: 'ornament', cardStyle: 'solid' },
    story: { bg: 'rgba(255,245,247,0.5)', cardStyle: 'solid', divider: 'floral' },
    countdown: { bg: '#D4A0A7', textColor: '#FFFFFF', cardStyle: 'dark-glass', divider: 'none' },
    events: { bg: '#FFF5F7', cardStyle: 'glass', divider: 'dots' },
    gallery: { bg: 'rgba(255,245,247,0.5)' },
    rsvp: { bg: '#FFF5F7', cardStyle: 'solid', divider: 'floral' },
    wishes: { bg: 'rgba(255,245,247,0.5)', cardStyle: 'glass' },
    gift: { bg: '#FFF5F7' },
    closing: { bg: '#D4A0A7', textColor: '#FFFFFF', divider: 'none' },
  },

  // ==================== 7. VINTAGE KRAFT ====================
  'vintage-kraft': {
    hero: { divider: 'dots', cardStyle: 'solid' },
    couple: { bg: '#FEFAE0', photoTreatment: 'square', divider: 'solid', cardStyle: 'minimal' },
    story: { bg: 'rgba(254,250,224,0.5)', cardStyle: 'minimal', divider: 'dots' },
    countdown: { bg: '#6B4226', textColor: '#FEFAE0', cardStyle: 'dark-glass', divider: 'none' },
    events: { bg: '#FEFAE0', cardStyle: 'solid', divider: 'solid' },
    gallery: { bg: 'rgba(254,250,224,0.5)' },
    rsvp: { bg: '#FEFAE0', cardStyle: 'minimal', divider: 'dots' },
    wishes: { bg: 'rgba(254,250,224,0.5)', cardStyle: 'solid' },
    gift: { bg: '#FEFAE0' },
    closing: { bg: '#6B4226', textColor: '#FEFAE0', divider: 'none' },
  },

  // ==================== 8. AUREUM GOLD ====================
  'aureum-gold': {
    hero: { divider: 'double', cardStyle: 'bordered' },
    quote: { bg: '#FAF8F2', divider: 'ornament' },
    couple: { bg: '#FAF8F2', photoTreatment: 'framed', divider: 'ornament', cardStyle: 'solid' },
    story: { bg: 'rgba(250,248,242,0.5)', cardStyle: 'solid', divider: 'double' },
    countdown: { bg: '#2D2A24', textColor: '#FAF8F2', cardStyle: 'dark-glass', divider: 'none' },
    events: { bg: '#FAF8F2', cardStyle: 'bordered', divider: 'double' },
    gallery: { bg: 'rgba(250,248,242,0.5)' },
    rsvp: { bg: '#FAF8F2', cardStyle: 'solid', divider: 'ornament' },
    wishes: { bg: 'rgba(250,248,242,0.5)', cardStyle: 'solid' },
    gift: { bg: '#FAF8F2' },
    closing: { bg: '#2D2A24', textColor: '#FAF8F2', divider: 'none' },
  },

  // ==================== 9. CELESTIAL NIGHT ====================
  'celestial-night': {
    hero: { divider: 'gradient', cardStyle: 'dark-glass' },
    quote: { bg: '#0B1930', cardStyle: 'dark-glass', textColor: '#E8EDF2', divider: 'gradient' },
    couple: { bg: '#0B1930', photoTreatment: 'circle', divider: 'ornament', textColor: '#E8EDF2', cardStyle: 'dark-glass' },
    story: { bg: '#0D1E38', cardStyle: 'dark-glass', divider: 'gradient', textColor: '#E8EDF2' },
    countdown: { bg: '#0B1930', cardStyle: 'dark-glass', textColor: '#E8EDF2', divider: 'none' },
    events: { bg: '#0D1E38', cardStyle: 'dark-glass', textColor: '#E8EDF2', divider: 'gradient' },
    gallery: { bg: '#0B1930', textColor: '#E8EDF2' },
    rsvp: { bg: '#0D1E38', cardStyle: 'dark-glass', textColor: '#E8EDF2', divider: 'ornament' },
    wishes: { bg: '#0B1930', cardStyle: 'dark-glass', textColor: '#E8EDF2' },
    gift: { bg: '#0D1E38', textColor: '#E8EDF2' },
    closing: { bg: '#060E1C', textColor: '#E8EDF2', divider: 'none' },
  },

  // ==================== 10. TERRACOTTA BLOOM ====================
  'terracotta-bloom': {
    hero: { divider: 'gradient', cardStyle: 'glass' },
    couple: { bg: '#FBF7F0', photoTreatment: 'circle', divider: 'ornament', cardStyle: 'solid' },
    story: { bg: 'rgba(251,247,240,0.5)', cardStyle: 'solid', divider: 'floral' },
    countdown: { bg: '#C7734B', textColor: '#FBF7F0', cardStyle: 'dark-glass', divider: 'none' },
    events: { bg: '#FBF7F0', cardStyle: 'glass', divider: 'gradient' },
    gallery: { bg: 'rgba(251,247,240,0.5)' },
    rsvp: { bg: '#FBF7F0', cardStyle: 'solid', divider: 'floral' },
    wishes: { bg: 'rgba(251,247,240,0.5)', cardStyle: 'glass' },
    gift: { bg: '#FBF7F0' },
    closing: { bg: '#C7734B', textColor: '#FBF7F0', divider: 'none' },
  },

  // ==================== 11. OCEAN BREEZE ====================
  'ocean-breeze': {
    hero: { divider: 'gradient', cardStyle: 'glass' },
    couple: { bg: '#FCFCFC', photoTreatment: 'rounded', divider: 'solid', cardStyle: 'solid' },
    story: { bg: '#F0F7FA', cardStyle: 'solid', divider: 'floral' },
    countdown: { bg: '#1B2A4A', textColor: '#FCFCFC', cardStyle: 'dark-glass', divider: 'none' },
    events: { bg: '#FCFCFC', cardStyle: 'glass', divider: 'gradient' },
    gallery: { bg: '#F0F7FA' },
    rsvp: { bg: '#FCFCFC', cardStyle: 'solid', divider: 'solid' },
    wishes: { bg: '#F0F7FA', cardStyle: 'glass' },
    gift: { bg: '#FCFCFC' },
    closing: { bg: '#1B2A4A', textColor: '#FCFCFC', divider: 'none' },
  },

  // ==================== 12. JASMINE PURE ====================
  'jasmine-white': {
    hero: { divider: 'none', cardStyle: 'minimal', spacing: 'py-10 sm:py-14' },
    couple: { bg: '#FFFFFF', photoTreatment: 'square', divider: 'none', cardStyle: 'minimal' },
    story: { bg: '#F8F8F8', cardStyle: 'minimal', divider: 'solid' },
    countdown: { bg: '#1A1A1A', textColor: '#FFFFFF', cardStyle: 'dark-glass', divider: 'none' },
    events: { bg: '#FFFFFF', cardStyle: 'minimal', divider: 'none' },
    gallery: { bg: '#F8F8F8' },
    rsvp: { bg: '#FFFFFF', cardStyle: 'minimal', divider: 'solid' },
    wishes: { bg: '#F8F8F8', cardStyle: 'minimal' },
    gift: { bg: '#FFFFFF' },
    closing: { bg: '#1A1A1A', textColor: '#FFFFFF', divider: 'none' },
  },

  // ==================== 13. DREAM GARDEN ====================
  'dream-garden': {
    hero: { divider: 'floral', cardStyle: 'glass' },
    couple: { bg: '#FFF8F5', photoTreatment: 'circle', divider: 'ornament', cardStyle: 'solid' },
    story: { bg: 'rgba(255,248,245,0.5)', cardStyle: 'solid', divider: 'floral' },
    countdown: { bg: '#E8B4C8', textColor: '#FFFFFF', cardStyle: 'dark-glass', divider: 'none' },
    events: { bg: '#FFF8F5', cardStyle: 'glass', divider: 'gradient' },
    gallery: { bg: 'rgba(255,248,245,0.5)' },
    rsvp: { bg: '#FFF8F5', cardStyle: 'solid', divider: 'floral' },
    wishes: { bg: 'rgba(255,248,245,0.5)', cardStyle: 'glass' },
    gift: { bg: '#FFF8F5' },
    closing: { bg: '#E8B4C8', textColor: '#FFFFFF', divider: 'none' },
  },

  // ==================== 14. JAVANESE ELEGANCE ====================
  'javanese-elegance': {
    hero: { divider: 'double', cardStyle: 'bordered' },
    quote: { bg: '#FDF8F0', divider: 'ornament' },
    couple: { bg: '#FDF8F0', photoTreatment: 'framed', divider: 'ornament', cardStyle: 'solid' },
    story: { bg: 'rgba(253,248,240,0.5)', cardStyle: 'solid', divider: 'double' },
    countdown: { bg: '#4A0E2E', textColor: '#FDF8F0', cardStyle: 'dark-glass', divider: 'none' },
    events: { bg: '#FDF8F0', cardStyle: 'bordered', divider: 'double' },
    gallery: { bg: 'rgba(253,248,240,0.5)' },
    rsvp: { bg: '#FDF8F0', cardStyle: 'solid', divider: 'ornament' },
    wishes: { bg: 'rgba(253,248,240,0.5)', cardStyle: 'solid' },
    gift: { bg: '#FDF8F0' },
    closing: { bg: '#4A0E2E', textColor: '#FDF8F0', divider: 'none' },
  },

  // ==================== 15. AIRE ROYALE ====================
  'aire-royale': {
    hero: { divider: 'gradient', cardStyle: 'dark-glass', spacing: 'py-20 sm:py-28' },
    quote: { cardStyle: 'dark-glass', divider: 'gradient' },
    couple: { bg: '#0A0A14', photoTreatment: 'overlay', divider: 'ornament', textColor: '#F5F0EB', cardStyle: 'dark-glass' },
    story: { bg: '#0E0E1A', cardStyle: 'dark-glass', divider: 'gradient', textColor: '#F5F0EB' },
    countdown: { bg: '#0A0A14', cardStyle: 'dark-glass', textColor: '#F5F0EB', divider: 'none' },
    events: { bg: '#0E0E1A', cardStyle: 'dark-glass', textColor: '#F5F0EB', divider: 'gradient' },
    gallery: { bg: '#0A0A14', textColor: '#F5F0EB' },
    rsvp: { bg: '#0E0E1A', cardStyle: 'dark-glass', textColor: '#F5F0EB', divider: 'ornament' },
    wishes: { bg: '#0A0A14', cardStyle: 'dark-glass', textColor: '#F5F0EB' },
    gift: { bg: '#0E0E1A', textColor: '#F5F0EB' },
    closing: { bg: '#550979', textColor: '#F5F0EB', divider: 'none' },
  },

  // ==================== 16. PREMIUM BLUSH ====================
  'premium-blush': {
    hero: { divider: 'gradient', cardStyle: 'glass' },
    couple: { bg: '#FFFDFB', photoTreatment: 'circle', divider: 'ornament', cardStyle: 'solid' },
    story: { bg: '#FFF0F2', cardStyle: 'solid', divider: 'floral' },
    countdown: { bg: '#F63854', textColor: '#FFFFFF', cardStyle: 'dark-glass', divider: 'none' },
    events: { bg: '#FFFDFB', cardStyle: 'glass', divider: 'gradient' },
    gallery: { bg: '#FFF0F2' },
    rsvp: { bg: '#FFFDFB', cardStyle: 'solid', divider: 'floral' },
    wishes: { bg: '#FFF0F2', cardStyle: 'glass' },
    gift: { bg: '#FFFDFB' },
    closing: { bg: '#F63854', textColor: '#FFFFFF', divider: 'none' },
  },

  // ==================== 17. LUXURY LAVENDER ====================
  'luxury-lavender': {
    hero: { divider: 'double', cardStyle: 'bordered' },
    quote: { bg: '#F9F5FC', divider: 'ornament' },
    couple: { bg: '#F9F5FC', photoTreatment: 'framed', divider: 'ornament', cardStyle: 'solid' },
    story: { bg: '#EDE0F5', cardStyle: 'solid', divider: 'double' },
    countdown: { bg: '#6B3FA0', textColor: '#F9F5FC', cardStyle: 'dark-glass', divider: 'none' },
    events: { bg: '#F9F5FC', cardStyle: 'bordered', divider: 'double' },
    gallery: { bg: '#EDE0F5' },
    rsvp: { bg: '#F9F5FC', cardStyle: 'solid', divider: 'ornament' },
    wishes: { bg: '#EDE0F5', cardStyle: 'solid' },
    gift: { bg: '#F9F5FC' },
    closing: { bg: '#6B3FA0', textColor: '#F9F5FC', divider: 'none' },
  },

  // ==================== 18. EXCLUSIVE NOIR ====================
  'exclusive-noir': {
    hero: { divider: 'none', cardStyle: 'dark-glass', spacing: 'py-20 sm:py-28' },
    couple: { bg: '#1A1A24', photoTreatment: 'overlay', divider: 'gradient', textColor: '#F0EEFA', cardStyle: 'dark-glass' },
    story: { bg: '#1E1E2A', cardStyle: 'dark-glass', divider: 'none', textColor: '#F0EEFA' },
    countdown: { bg: '#1A1A24', cardStyle: 'dark-glass', textColor: '#F0EEFA', divider: 'gradient' },
    events: { bg: '#1E1E2A', cardStyle: 'dark-glass', textColor: '#F0EEFA', divider: 'none' },
    gallery: { bg: '#1A1A24', textColor: '#F0EEFA' },
    rsvp: { bg: '#1E1E2A', cardStyle: 'dark-glass', textColor: '#F0EEFA', divider: 'gradient' },
    wishes: { bg: '#1A1A24', cardStyle: 'dark-glass', textColor: '#F0EEFA' },
    gift: { bg: '#1E1E2A', textColor: '#F0EEFA' },
    closing: { bg: '#0D0D15', textColor: '#F0EEFA', divider: 'none' },
  },

  // ==================== 19. SAGE DREAM ====================
  'sage-dream': {
    hero: { divider: 'floral', cardStyle: 'glass' },
    quote: { bg: '#FBF9F4', cardStyle: 'solid', divider: 'gradient' },
    couple: { bg: '#FBF9F4', photoTreatment: 'circle', divider: 'ornament', cardStyle: 'solid' },
    story: { bg: 'rgba(251,249,244,0.5)', cardStyle: 'glass', divider: 'floral' },
    countdown: { bg: '#4A6741', textColor: '#FBF9F4', cardStyle: 'dark-glass', divider: 'none' },
    events: { bg: '#FBF9F4', cardStyle: 'glass', divider: 'gradient' },
    gallery: { bg: 'rgba(251,249,244,0.5)' },
    rsvp: { bg: '#FBF9F4', cardStyle: 'solid', divider: 'floral' },
    wishes: { bg: 'rgba(251,249,244,0.5)', cardStyle: 'glass' },
    gift: { bg: '#FBF9F4' },
    closing: { bg: '#4A6741', textColor: '#FBF9F4', divider: 'none' },
  },

  // ==================== 20. ETERNAL SAGE LUXURY ====================
  'eternal-sage-luxury': {
    hero: { divider: 'floral', cardStyle: 'glass', bgImage: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80' },
    quote: { bg: '#F8F3EA', cardStyle: 'solid', divider: 'gradient', bgImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80' },
    couple: { bg: '#FFFDF8', photoTreatment: 'circle', divider: 'ornament', cardStyle: 'solid', bgImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80' },
    story: { bg: '#F8F3EA', cardStyle: 'glass', divider: 'floral', bgImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=80' },
    countdown: { bg: '#243B2A', textColor: '#F8F3EA', cardStyle: 'dark-glass', divider: 'none', bgImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80' },
    events: { bg: '#FFFDF8', cardStyle: 'solid', divider: 'gradient', bgImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=80' },
    gallery: { bg: '#F8F3EA', bgImage: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200&q=80' },
    rsvp: { bg: '#FFFDF8', cardStyle: 'solid', divider: 'ornament', bgImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80' },
    wishes: { bg: '#F8F3EA', cardStyle: 'glass', bgImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80' },
    gift: { bg: '#FFFDF8', bgImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80' },
    closing: { bg: '#243B2A', textColor: '#F8F3EA', divider: 'none', bgImage: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200&q=80' },
  },
};

export function getSectionStyles(templateId: string): TemplateSectionStyles {
  return SECTION_STYLES[templateId] || SECTION_STYLES['modern-organic-luxury'];
}
