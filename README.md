# 🌿 Wedding Invitation — Digital Wedding Platform

> Undangan pernikahan digital premium dengan **15 template unik**.  
> Dibangun dengan Next.js 16, Tailwind CSS v4, Framer Motion.

**[🔗 Live Demo](https://wedding-invitation-liart-alpha.vercel.app)** — **[🔗 Admin Panel](https://wedding-admin-eight.vercel.app)**

---

## 🎭 15 Template Unik — Satu Per Satu

Setiap template memiliki **karakteristik layout, animasi, section order, dan visual identity yang berbeda**.

| # | Template | ID | Karakteristik Unik |
|---|----------|----|-------------------|
| 1 | **🌿 Modern Organic** | `modern-organic-luxury` | Earthy natural, botanical accents, soft fade-up, card sections |
| 2 | **🌹 Classic Rose Gold** | `classic-rose-gold` | Romantic blush, scale-in animasi, circle countdown, alternating story |
| 3 | **⬜ Minimal Monochrome** | `minimal-monochrome` | Ultra-clean geometric, fade-in, row countdown, compact spacing |
| 4 | **🌴 Tropical Paradise** | `tropical-paradise` | Lush greens, slide-left, parallax hero, generous spacing |
| 5 | **💜 Royal Purple** | `royal-purple` | Regal purple, zoom-in, ornate gold, side-dots nav, dramatic reveal |
| 6 | **🌸 Sakura Pink** | `sakura-pink` | Japanese-inspired, slide-right, 12 cherry petals, floating chip nav |
| 7 | **📜 Vintage Kraft** | `vintage-kraft` | Old-world sepia, letterpress feel, timeline events, dotted border |
| 8 | **✨ Aureum Gold** | `aureum-gold` | Art deco opulence, zoom-in, column countdown, double border |
| 9 | **🌙 Celestial Night** | `celestial-night` | Dark starry night, parallax, 20 star particles, ethereal glow |
| 10 | **🏵️ Terracotta Bloom** | `terracotta-bloom` | Mediterranean clay, fade-up, split hero, botanical ornaments |
| 11 | **🌊 Ocean Breeze** | `ocean-breeze` | Coastal blue, slide-left, staggered hero, wide body layout |
| 12 | **🤍 Jasmine Pure** | `jasmine-white` | Crisp editorial white, fade-in, 4-column grid, sharp corners |
| 13 | **🌸 Dream Garden** | `dream-garden` | Whimsical pastel, scale-in, 14 floating petals, dreamy transitions |
| 14 | **✦ Javanese Elegance** | `javanese-elegance` | Indonesian batik-inspired, ornate gold, side-dots, cultural grace |
| 15 | **💎 Aire Royale** | `aire-royale` | Ultra-luxury dark mode, serif body, diamond facets, dramatic contrast |

> **Demo:** `https://wedding-invitation-liart-alpha.vercel.app/demo/[template-id]`

---

## 🎨 Perbedaan Layout Per Template

| Fitur | Variasi |
|-------|---------|
| **Section Order** | Quote, story, location, countdown — berbeda per template |
| **Animasi** | fade-up, fade-in, scale-in, slide-left, slide-right, zoom-in, parallax, stagger |
| **Navigation** | Bottom bar, floating chip, side dots, top minimal |
| **Countdown** | Grid, row, columns, circle — ukuran sm/md/lg |
| **Event Cards** | Stacked, side-by-side, cards, timeline |
| **Gallery** | Masonry 2-3 col, grid 2-4 col, collage |
| **Couple Layout** | Side-by-side, stacked, cards, overlay |
| **Wishes** | List, cards, wall (2-column grid) |
| **Heading Scale** | sm/md/lg |
| **Body Width** | Narrow / normal / wide |

---

## 🚀 Quick Deploy (Vercel)

```bash
# 1. Install
npm install

# 2. Run dev
npm run dev
# → http://localhost:3000

# 3. Build
npm run build

# 4. Deploy
vercel --prod
```

---

## 🔗 URL Patterns

| URL | Deskripsi |
|-----|-----------|
| `/i/andhika-laila` | Undangan generic (tanpa nama tamu) |
| `/i/andhika-laila?guest=token` | Undangan personal (guest token) |
| `/demo/[template-id]` | Preview template tertentu |

---

## 📸 Fitur Undangan (11 Section)

| Section | Fitur |
|---------|-------|
| **Opening Cover** | Monogram animasi, nama tamu personal, floating petals/particles, musik consent |
| **Hero** | Nama pasangan, countdown realtime, parallax, share link, WhatsApp share |
| **Couple Profile** | Foto bride/groom, nama lengkap, orang tua |
| **Event Details** | Akad + Resepsi, Google Maps embed, Waze, dress code |
| **Love Story** | Vertical timeline / alternating, 4 milestone dengan foto |
| **Gallery** | Masonry/grid/collage, lightbox zoom, lazy loading |
| **RSVP** | Hadir/Tidak/Ragu, pax selector, pesan, konfirmasi async |
| **QR Guest Pass** | QR code unik per guest, download PNG |
| **Digital Gift** | Bank & e-wallet, copy account |
| **Wishes** | Form ucapan + list doa realtime |
| **Closing** | Thank you, Quran quote, family names |

---

## 🏗️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| QR Code | qrcode.react |
| Database | Supabase / JSON file |
| Deployment | Vercel |

---

## 📂 Project Structure

```
src/
├── app/
│   ├── i/[slug]/page.tsx              # Invitation page
│   │   ├── components/                # 11 section components
│   │   └── templates/                 # 15 template wrappers
│   └── api/public/invitation/         # Public API
├── components/
│   └── WeddingTemplateShell.tsx       # Main template renderer
├── lib/
│   ├── template-styles.ts             # Style configs (colors, fonts)
│   ├── template-layouts.ts            # Layout configs (order, anims)
│   └── template-types.ts              # TypeScript types
└── shared/store.json                  # Database
```

---

## 📝 Environment Variables

```env
# Optional: Supabase (fallback ke store.json)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

---

## 📄 License

MIT — © 2026 Andhika Effendy
