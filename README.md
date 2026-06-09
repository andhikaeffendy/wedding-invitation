# 🌿 Wedding Invitation — Digital Wedding Platform

> Undangan pernikahan digital premium dengan tema **Modern Organic Luxury**.  
> Dibangun dengan Next.js 16, Tailwind CSS, dan Framer Motion.

**[🔗 Live Demo](https://wedding-invitation.vercel.app)** — **[📂 GitHub](https://github.com/andhikaeffendy/wedding-invitation)**

---

## 📸 Preview

| Opening Cover | Hero Section | Gallery |
|:---:|:---:|:---:|
| Golden monogram, nama tamu personal, floating petals | Countdown realtime, parallax, share button | Masonry grid, lightbox zoom, lazy loading |

---

## 🚀 Quick Deploy (Vercel)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/andhikaeffendy/wedding-invitation)

### Manual Deploy

```bash
# 1. Clone
git clone https://github.com/andhikaeffendy/wedding-invitation.git
cd wedding-invitation

# 2. Install
npm install

# 3. Run dev
npm run dev
# → http://localhost:3000

# 4. Build
npm run build

# 5. Deploy to Vercel
vercel --prod
```

---

## 🔗 URL Patterns

| URL | Deskripsi |
|-----|-----------|
| `/i/andhika-laila` | Undangan generic (tanpa nama tamu) |
| `/i/andhika-laila/Keluarga+Besar+Ahmad+Dahlan` | Undangan personal (nama tamu di URL) |

---

## 🎨 Fitur Undangan (11 Section)

| Section | Fitur |
|---------|-------|
| **Opening Cover** | Monogram A&L, nama tamu personal, floating petals, tombol buka undangan, musik consent |
| **Hero** | Countdown realtime, nama pasangan, parallax background, share & copy link, sticky navigation |
| **Couple Profile** | Foto bride/groom, nama lengkap, orang tua, social link |
| **Event Details** | Akad + Resepsi, **Google Maps embed interactive**, dress code, add to calendar |
| **Love Story** | Vertical timeline 4 milestone dengan foto |
| **Gallery** | Masonry grid 8 foto, lightbox zoom, lazy loading blur-up |
| **RSVP** | Hadir/Tidak/Ragu, pax selector, pesan, konfirmasi dengan animasi |
| **QR Guest Pass** | QR code unik per guest, info tamu, download PNG |
| **Digital Gift** | Bank & e-wallet, copy account, upload bukti |
| **Wishes** | Form ucapan + list doa realtime |
| **Closing** | Thank you, Quran quote (Ar-Rum: 21), family names |

---

## 🎨 Color Palette — Modern Organic Luxury

| Name | Hex | Tailwind |
|------|-----|----------|
| Forest Green | `#22382D` | `forest` |
| Olive | `#6F7F55` | `olive` |
| Sage | `#A9B89B` | `sage` |
| Cream | `#F7F1E6` | `cream` |
| Gold | `#C9A86A` | `gold` |
| Terracotta | `#B86B4B` | `terracotta` |

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
| Deployment | Vercel |

---

## 📂 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout + metadata
│   ├── loading.tsx           # Route loading state
│   ├── error.tsx             # Route error boundary
│   ├── globals.css           # Theme + animations
│   ├── i/[slug]/page.tsx     # Invitation page
│   │   └── components/       # 11 section components
│   └── api/public/           # Public API routes
│       └── invitation/[slug]/route.ts  # GET invitation data
├── lib/
│   ├── types.ts              # TypeScript interfaces
│   ├── whatsapp-share.ts     # WhatsApp share helper
│   └── supabase/client.ts    # Supabase client (optional)
└── shared/                   # Shared data (linked to admin)
    └── store.json            # Single source of truth
```

---

## 🔗 System Architecture

```
┌─────────────────┐     read (API)       ┌──────────────────┐
│  wedding-invite  │ ◄────────────────── │  shared/store.json│
│  (public)        │                     │  (single source)  │
│  port 3000       │                     └────────┬─────────┘
└─────────────────┘                               │ write (API)
                                           ┌──────┴──────────┐
                                           │  wedding-admin  │
                                           │  (CMS)           │
                                           │  port 3001       │
                                           └─────────────────┘
```

> **Kedua project harus berjalan bersamaan.** Admin menulis ke `shared/store.json`, undangan publik membaca dari file yang sama.

---

## 📝 Environment Variables

Copy `.env.example` ke `.env.local`:

```env
# Optional: Supabase (jika ingin persistent database)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Tanpa Supabase → auto pakai shared/store.json
```

---

## 📄 License

MIT — © 2026 Andhika Effendy
