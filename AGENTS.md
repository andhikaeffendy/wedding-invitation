<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Wedding Public Invitation — V3 Agent Rules

> **App:** `wedding-invitation` · Port 3000  
> **Role:** Public-facing wedding invitation landing page  
> **Audit Score:** 4.9/10 🔴 (see monorepo AGENTS.md for CRITICAL findings)

### Tech Stack (Detected)

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.2.7 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | v4 |
| Animation | Framer Motion | ^12.40 |
| Icons | Lucide React | ^1.17 |
| Validation | Zod + react-hook-form | ^4.4 / ^7.78 |
| QR | qrcode.react + html5-qrcode | ^4.2 / ^2.3 |
| Database (prod) | Supabase Postgres + Prisma | ^5.22 |
| Database (dev) | JSON file | `../shared/store.json` |

### Design System (In Place)

| Token Category | Location |
|---------------|----------|
| Color scales (5 × 11 steps) | `src/app/globals.css` `@theme inline` |
| Semantic + dark mode tokens | `src/app/globals.css` `:root` + `@media dark` |
| Typography (clamp responsive) | `--text-display` through `--text-caption` |
| Spacing / Radius / Elevation / Motion | All in `:root` |
| Component classes (9-state) | `.btn-primary`, `.btn-outline`, `.card`, `.input-field`, `.skeleton`, `.toast` |
| AriaLive region | `src/components/AriaLiveRegion.tsx` |
| Focus styles | Global `:focus-visible` 3px gold ring |
| Skip navigation | `.skip-to-content` in `layout.tsx` |

### File Structure (Exact)

```
src/
├── app/
│   ├── layout.tsx              ← Root layout (skip-to-content + <main>)
│   ├── page.tsx                ← Landing/home page
│   ├── globals.css             ← V3 design tokens (25KB)
│   ├── error.tsx               ← Error boundary
│   ├── loading.tsx             ← Loading spinner
│   ├── api/public/invitation/[slug]/route.ts  ← Public API (GET/POST/PUT)
│   ├── demo/[template]/page.tsx ← Template demo pages
│   └── i/[slug]/
│       ├── page.tsx            ← Invitation page (template router)
│       ├── error.tsx           ← Error boundary
│       ├── loading.tsx         ← Loading state
│       ├── not-found.tsx       ← 404 state
│       ├── components/         ← 11 section components
│       │   ├── OpeningCover.tsx     (ARIA: ❌ pending)
│       │   ├── HeroSection.tsx      (ARIA: ✅ aria-labelledby)
│       │   ├── CoupleProfile.tsx    (ARIA: ✅ aria-labelledby)
│       │   ├── CountdownSection.tsx (ARIA: ✅ aria-label on buttons)
│       │   ├── EventDetails.tsx     (ARIA: ✅ aria-label on map links)
│       │   ├── LoveStory.tsx        (ARIA: ✅ aria-labelledby)
│       │   ├── GallerySection.tsx   (ARIA: ✅ buttons, dialog, lazy)
│       │   ├── RsvpSection.tsx      (ARIA: ✅ radiogroup, live region)
│       │   ├── QrGuestPass.tsx      (ARIA: ✅ aria-label on download)
│       │   ├── GiftSection.tsx      (ARIA: ✅ copy buttons, list)
│       │   ├── WishesSection.tsx    (ARIA: ✅ form labels, live region)
│       │   ├── ClosingSection.tsx   (ARIA: ❌ pending)
│       │   └── MusicPlayer.tsx
│       └── templates/          ← 20 template wrappers
│           ├── modern/page.tsx
│           ├── eternal-sage-luxury/page.tsx
│           └── ... (18 more)
├── components/
│   ├── WeddingTemplateShell.tsx  ← Main renderer (3137 lines, 15 cover + 5 nav variants)
│   └── AriaLiveRegion.tsx        ← Screen reader announcement hook
└── lib/
    ├── types.ts                  ← All TypeScript interfaces
    ├── dummy-data.ts             ← Default invitation/guest data
    ├── template-styles.ts        ← 20 color/font/ornament configs
    ├── template-layouts.ts       ← Section order + visibility
    ├── template-covers.ts        ← 15 cover layout variants
    ├── template-section-styles.ts ← Per-section styling overrides
    ├── template-types.ts         ← Template data interfaces
    ├── template-covers.ts        ← Cover configurations
    ├── animations.ts             ← Framer Motion variants
    ├── clipboard.ts              ← Copy-to-clipboard utility
    ├── whatsapp-share.ts         ← WhatsApp sharing
    ├── supabase/client.ts        ← Supabase client (fallback to null)
    ├── prisma/client.ts          ← Prisma client
    └── storage/upload.ts         ← File upload utility
```

### 11 Sections (Ordered)

| # | Section | Component | ARIA |
|---|---------|-----------|------|
| 1 | Opening Cover | `OpeningCover.tsx` | ❌ |
| 2 | Hero + Countdown | `HeroSection.tsx` + `CountdownSection.tsx` | ✅ |
| 3 | Couple Profile | `CoupleProfile.tsx` | ✅ |
| 4 | Event Details | `EventDetails.tsx` | ✅ |
| 5 | Love Story | `LoveStory.tsx` | ✅ |
| 6 | Gallery | `GallerySection.tsx` | ✅ |
| 7 | RSVP | `RsvpSection.tsx` | ✅ |
| 8 | QR Guest Pass | `QrGuestPass.tsx` | ✅ |
| 9 | Digital Gift | `GiftSection.tsx` | ✅ |
| 10 | Wishes | `WishesSection.tsx` | ✅ |
| 11 | Closing | `ClosingSection.tsx` | ❌ |

### 20 Templates

`modern-organic-luxury`, `classic-rose-gold`, `minimal-monochrome`, `tropical-paradise`, `royal-purple`, `sakura-pink`, `vintage-kraft`, `aureum-gold`, `celestial-night`, `terracotta-bloom`, `ocean-breeze`, `jasmine-white`, `dream-garden`, `javanese-elegance`, `aire-royale`, `premium-blush`, `luxury-lavender`, `exclusive-noir`, `sage-dream`, `eternal-sage-luxury`

All templates are thin wrappers (7 lines) that pass `data` + `templateId` to `WeddingTemplateShell.tsx`.

### 15 Cover Layout Variants

`cinematic-dark`, `split-photo-left`, `split-vertical`, `typography-only`, `letterpress`, `art-deco-frame`, `framed-photo` + monogram/frame/button sub-variants

### Data Flow

```
User → /i/[slug]?guest=TOKEN
  → page.tsx (fetch /api/public/invitation/[slug])
  → API route reads shared/store.json or Supabase
  → Returns TemplateData { invitation, guest, gallery, bankAccounts, wishes, loveStories }
  → Template selector (switch on template_id)
  → WeddingTemplateShell renders 11 sections
```

### Agent Routing (App-Specific)

| Task | Route |
|------|-------|
| Simple question | Main only |
| Feature implementation | Planner → Architect → Data → Imager → Coder → Tester → Reviewer |
| Bug/error | Debugger → Coder → Tester → Reviewer |
| UI/UX improvement | Imager → Planner → Coder → Tester → Reviewer |
| Template design | Scout → Imager → Planner → Coder → Tester → Reviewer |
| Database change | Data → Security → Reviewer |
| Audit | Architect → Imager/Data/Security → Reviewer |
| Documentation | Docs → Reviewer |

### Execution Rules

- Always read existing files before making changes
- Follow existing naming: camelCase (TS/JS), kebab-case (folders)
- Invitation sections → `src/app/i/[slug]/components/`
- Templates → `src/app/i/[slug]/templates/[name]/`
- Shared components → `src/components/`
- All data reads via `src/app/api/public/invitation/[slug]/route.ts`
- **DO NOT** delete invitation sections or templates without human approval
- **DO NOT** change the core invitation data flow
- **ALWAYS** use design tokens — ZERO hardcoded values
- Wedding templates must feel premium, romantic, culturally appropriate

### UI/UX Quality Mode

Activate when: UI, UX, design, redesign, layout, responsive, modern, premium, elegant, wedding, invitation, template, polished.

- Imager defines design direction BEFORE Coder implements
- All 9 component states required
- All 6 responsive breakpoints required
- WCAG 2.2 AA minimum (75% coverage achieved, pending: WeddingTemplateShell, OpeningCover, ClosingSection)
- Dark mode supported via `prefers-color-scheme`

### Human Approval Gate

Require explicit approval before:
- Deleting files or invitation sections
- Changing template structure or count
- Changing production config
- Adding external UI libraries/packages
- Removing existing invitation sections
- Changing the core invitation data flow
- Large refactor outside requested scope

### Final Review Checklist

- [ ] Read the actual user task
- [ ] Preserved existing project rules
- [ ] Used smallest effective workflow
- [ ] No hallucination (invented files/APIs/schema)
- [ ] Assumptions labeled
- [ ] Design tokens used (ZERO hardcoded values)
- [ ] Component states covered (9 if UI)
- [ ] WCAG 2.2 AA verified
- [ ] Build + TypeScript pass
- [ ] Validation steps included
