"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { dummyWishes, dummyBankAccounts } from "@/lib/dummy-data";
import type { TemplateData, StoryItem } from "@/lib/template-types";

// All 19 templates
const ModernTemplate = dynamic(() => import("@/app/i/[slug]/templates/modern/page"), { ssr: false });
const RoseGoldTemplate = dynamic(() => import("@/app/i/[slug]/templates/rosegold/page"), { ssr: false });
const MinimalTemplate = dynamic(() => import("@/app/i/[slug]/templates/minimal/page"), { ssr: false });
const TropicalTemplate = dynamic(() => import("@/app/i/[slug]/templates/tropical/page"), { ssr: false });
const RoyalTemplate = dynamic(() => import("@/app/i/[slug]/templates/royal/page"), { ssr: false });
const SakuraTemplate = dynamic(() => import("@/app/i/[slug]/templates/sakura/page"), { ssr: false });
const VintageTemplate = dynamic(() => import("@/app/i/[slug]/templates/vintage/page"), { ssr: false });
const AureumTemplate = dynamic(() => import("@/app/i/[slug]/templates/aureum/page"), { ssr: false });
const CelestialTemplate = dynamic(() => import("@/app/i/[slug]/templates/celestial/page"), { ssr: false });
const TerracottaTemplate = dynamic(() => import("@/app/i/[slug]/templates/terracotta/page"), { ssr: false });
const OceanTemplate = dynamic(() => import("@/app/i/[slug]/templates/ocean/page"), { ssr: false });
const JasmineTemplate = dynamic(() => import("@/app/i/[slug]/templates/jasmine/page"), { ssr: false });
const DreamGardenTemplate = dynamic(() => import("@/app/i/[slug]/templates/dreamgarden/page"), { ssr: false });
const JavaneseTemplate = dynamic(() => import("@/app/i/[slug]/templates/javanese/page"), { ssr: false });
const AireRoyaleTemplate = dynamic(() => import("@/app/i/[slug]/templates/aireroyale/page"), { ssr: false });
const PremiumBlushTemplate = dynamic(() => import("@/app/i/[slug]/templates/premium-blush/page"), { ssr: false });
const LuxuryLavenderTemplate = dynamic(() => import("@/app/i/[slug]/templates/luxury-lavender/page"), { ssr: false });
const ExclusiveNoirTemplate = dynamic(() => import("@/app/i/[slug]/templates/exclusive-noir/page"), { ssr: false });
const SageDreamTemplate = dynamic(() => import("@/app/i/[slug]/templates/sage-dream/page"), { ssr: false });
const EternalSageTemplate = dynamic(() => import("@/app/i/[slug]/templates/eternal-sage-luxury/page"), { ssr: false });
const WekitaEleganceTemplate = dynamic(() => import("@/app/i/[slug]/templates/wekita-elegance/page"), { ssr: false });
const BlushRomanceTemplate = dynamic(() => import("@/app/i/[slug]/templates/blush-romance/page"), { ssr: false });

// Template ID mapping
const TEMPLATE_MAP: Record<string, { component: React.ComponentType<{ data: TemplateData }>; name: string }> = {
  'modern-organic-luxury': { component: ModernTemplate, name: 'Modern Organic Luxury' },
  'classic-rose-gold': { component: RoseGoldTemplate, name: 'Classic Rose Gold' },
  'minimal-monochrome': { component: MinimalTemplate, name: 'Minimal Monochrome' },
  'tropical-paradise': { component: TropicalTemplate, name: 'Tropical Paradise' },
  'royal-purple': { component: RoyalTemplate, name: 'Royal Purple' },
  'sakura-pink': { component: SakuraTemplate, name: 'Sakura Pink' },
  'vintage-kraft': { component: VintageTemplate, name: 'Vintage Kraft' },
  'aureum-gold': { component: AureumTemplate, name: 'Aureum Gold' },
  'celestial-night': { component: CelestialTemplate, name: 'Celestial Night' },
  'terracotta-bloom': { component: TerracottaTemplate, name: 'Terracotta Bloom' },
  'ocean-breeze': { component: OceanTemplate, name: 'Ocean Breeze' },
  'jasmine-white': { component: JasmineTemplate, name: 'Jasmine Pure' },
  'dream-garden': { component: DreamGardenTemplate, name: 'Dream Garden' },
  'javanese-elegance': { component: JavaneseTemplate, name: 'Javanese Elegance' },
  'aire-royale': { component: AireRoyaleTemplate, name: 'Aire Royale' },
  'premium-blush': { component: PremiumBlushTemplate, name: 'Premium Blush' },
  'luxury-lavender': { component: LuxuryLavenderTemplate, name: 'Luxury Lavender' },
  'exclusive-noir': { component: ExclusiveNoirTemplate, name: 'Exclusive Noir' },
  'sage-dream': { component: SageDreamTemplate, name: 'Sage Dream' },
  'eternal-sage-luxury': { component: EternalSageTemplate, name: 'Eternal Sage Luxury' },
  'wekita-elegance': { component: WekitaEleganceTemplate, name: 'Wekita Elegance' },
  'blush-romance': { component: BlushRomanceTemplate, name: 'Blush Romance' },
};

// UNIQUE demo data per template — different photos, different names, different stories
// Each template has its own visual identity through data variation

const PHOTO_SETS: Record<string, { cover: string; hero: string; bride: string; groom: string; gallery: string[] }> = {
  'modern-organic-luxury': {
    cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80',
    bride: 'https://images.unsplash.com/photo-1594552073388-6e3f45e83df6?w=400&q=80',
    groom: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80',
      'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80',
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80',
    ],
  },
  'classic-rose-gold': {
    cover: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=1200&q=80',
    bride: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
    groom: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80',
      'https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80',
      'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80',
    ],
  },
  'minimal-monochrome': {
    cover: 'https://images.unsplash.com/photo-1465146633011-14f8e0781093?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1200&q=80',
    bride: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    groom: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1465146633011-14f8e0781093?w=600&q=80',
      'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
    ],
  },
  'tropical-paradise': {
    cover: 'https://images.unsplash.com/photo-1533139143976-30918502365b?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1200&q=80',
    bride: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    groom: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533139143976-30918502365b?w=600&q=80',
      'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80',
    ],
  },
  'royal-purple': {
    cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1507919909716-c82623c6c3f0?w=1200&q=80',
    bride: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    groom: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      'https://images.unsplash.com/photo-1507919909716-c82623c6c3f0?w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    ],
  },
  'sakura-pink': {
    cover: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1490750967868-88aa4e47aa6c?w=1200&q=80',
    bride: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    groom: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&q=80',
      'https://images.unsplash.com/photo-1490750967868-88aa4e47aa6c?w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
    ],
  },
  'vintage-kraft': {
    cover: 'https://images.unsplash.com/photo-1446071103084-c257b5f70672?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=1200&q=80',
    bride: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80',
    groom: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1446071103084-c257b5f70672?w=600&q=80',
      'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    ],
  },
  'aureum-gold': {
    cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80',
    bride: 'https://images.unsplash.com/photo-1554727242-741c14fa561c?w=400&q=80',
    groom: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
    ],
  },
  'celestial-night': {
    cover: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?w=1200&q=80',
    bride: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&q=80',
    groom: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80',
      'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80',
    ],
  },
  'terracotta-bloom': {
    cover: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&q=80',
    bride: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&q=80',
    groom: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80',
      'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    ],
  },
  'ocean-breeze': {
    cover: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80',
    bride: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&q=80',
    groom: 'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
      'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    ],
  },
  'jasmine-white': {
    cover: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=1200&q=80',
    bride: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    groom: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&q=80',
      'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    ],
  },
  'dream-garden': {
    cover: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',
    bride: 'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?w=400&q=80',
    groom: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=600&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80',
    ],
  },
  'javanese-elegance': {
    cover: 'https://images.unsplash.com/photo-1590031905406-f1a5c32f3024?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1527224538127-2104bb71c51b?w=1200&q=80',
    bride: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?w=400&q=80',
    groom: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590031905406-f1a5c32f3024?w=600&q=80',
      'https://images.unsplash.com/photo-1527224538127-2104bb71c51b?w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    ],
  },
  'aire-royale': {
    cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1468657988500-aca2be09f4c5?w=1200&q=80',
    bride: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    groom: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      'https://images.unsplash.com/photo-1468657988500-aca2be09f4c5?w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80',
    ],
  },
};

// Default photo set for templates without specific data
const defaultPhotos = {
  cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
  hero: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80',
  bride: 'https://images.unsplash.com/photo-1594552073388-6e3f45e83df6?w=400&q=80',
  groom: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80',
    'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80',
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80',
  ],
  'eternal-sage-luxury': {
    cover: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&q=80',
    bride: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&q=80',
    groom: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80',
      'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80',
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80',
    ],
  },
  'wekita-elegance': {
    cover: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    bride: 'https://images.unsplash.com/photo-1594552073388-6e3f45e83df6?w=400&q=80',
    groom: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80',
      'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80',
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80',
    ],
  },
};

const COUPLE_NAMES: Record<string, [string, string, string, string]> = {
  'modern-organic-luxury': ['Andhika', 'Laila', 'Andhika Pratama, S.T.', 'Laila Nur Azizah, S.Psi'],
  'classic-rose-gold': ['Alexander', 'Victoria', 'Alexander Wijaya, S.E.', 'Victoria Rose, M.D.'],
  'minimal-monochrome': ['Dimas', 'Sari', 'Dimas Arya', 'Sari Kusuma'],
  'tropical-paradise': ['Bima', 'Kirana', 'Bima Putra', 'Kirana Dewi'],
  'royal-purple': ['Raditya', 'Anindya', 'R. Raditya Perkasa, S.H.', 'R.A. Anindya Paramita'],
  'sakura-pink': ['Kenji', 'Hanami', 'Kenji Nakamura', 'Hanami Yoshida'],
  'vintage-kraft': ['Soerjo', 'Ratna', 'R. Soerjohadikoesoemo', 'R.A. Ratnaningrum'],
  'aureum-gold': ['Maximilian', 'Isabella', 'Maximilian Hartono', 'Isabella Chen'],
  'celestial-night': ['Orion', 'Luna', 'Orion Pradana', 'Luna Maharani'],
  'terracotta-bloom': ['Arjuna', 'Sinta', 'Arjuna Mahendra', 'Sinta Larasati'],
  'ocean-breeze': ['Samudra', 'Marina', 'Samudra Wijaya', 'Marina Biru'],
  'jasmine-white': ['Reza', 'Alya', 'Reza Fahrezi', 'Alya Jasmine'],
  'eternal-sage-luxury': ['Rafael', 'Florence', 'Rafael Adiwangsa, M.Sc.', 'Florence Elara, M.A.'],
};

const defaultNames: [string, string, string, string] = ['Andhika', 'Laila', 'Andhika Pratama, S.T.', 'Laila Nur Azizah, S.Psi'];

function buildDemoData(templateId: string): TemplateData {
  const photos = PHOTO_SETS[templateId] || defaultPhotos;
  const names = COUPLE_NAMES[templateId] || defaultNames;

  return {
    invitation: {
      id: 'demo-' + templateId,
      title: `Wedding ${names[0]} & ${names[1]}`,
      slug: templateId,
      status: 'published',
      groom_name: names[0],
      bride_name: names[1],
      groom_full_name: names[2],
      bride_full_name: names[3],
      groom_parents: 'Putra dari Bpk. Ir. Budi Santoso & Ibu Dewi Kartika',
      bride_parents: 'Putri dari Bpk. H. Ahmad Fauzi & Ibu Hj. Siti Mariam',
      event_date: '2026-08-15',
      timezone: 'Asia/Jakarta',
      template_id: templateId,
      settings: {
        coverImage: photos.cover,
        heroImage: photos.hero,
        bridePhoto: photos.bride,
        groomPhoto: photos.groom,
        musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      },
    },
    guest: {
      guest_name: 'Bapak/Ibu/Saudara/i (Demo)',
      rsvp_status: null,
      pax_confirmed: 1,
    },
    guestToken: 'demo-token',
    gallery: photos.gallery,
    wishes: dummyWishes,
    bankAccounts: dummyBankAccounts,
    loveStories: [
      { id: '1', title: 'Pertama Bertemu', date: 'Januari 2022', description: `Pertama kali ${names[0]} dan ${names[1]} bertemu di sebuah acara kampus. Dari situ, semesta seolah berbisik.`, image_url: photos.gallery[0] || '', is_visible: true },
      { id: '2', title: 'Kencan Pertama', date: 'Maret 2022', description: 'Kencan pertama di kafe kecil di Bandung. Hujan turun, dan mereka berbagi satu payung.', image_url: photos.gallery[1] || '', is_visible: true },
      { id: '3', title: 'Lamaran', date: 'Desember 2025', description: 'Di taman kota penuh lampu natal, dengan cincin sederhana. Jawabannya: "Ya, selamanya."', image_url: photos.gallery[2] || '', is_visible: true },
      { id: '4', title: 'Hari Pernikahan', date: '15 Agustus 2026', description: 'Hari yang dinanti akhirnya tiba. Mengikat janji suci di hadapan Allah dan keluarga tercinta.', image_url: photos.gallery[3] || '', is_visible: true },
    ] as StoryItem[],
  };
}

export default function DemoPage() {
  const params = useParams();
  const templateId = (params.template as string) || 'modern-organic-luxury';
  const template = TEMPLATE_MAP[templateId];

  if (!template) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-2xl mb-4">Template tidak ditemukan</p>
          <div className="mt-6">
            <a href="/demo/modern-organic-luxury" className="text-[#C9A86A] underline text-sm">← Kembali ke demo Modern</a>
          </div>
        </div>
      </div>
    );
  }

  const demoData = buildDemoData(templateId);
  const TemplateComponent = template.component;
  return <TemplateComponent data={demoData} />;
}
