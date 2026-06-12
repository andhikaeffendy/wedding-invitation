import { Invitation, Guest, MediaAsset, InvitationSection, Wish, BankAccount, EventDetail, LoveStoryMilestone } from './types';

// ==================== DUMMY DATA - ANDHIKA & LAILA WEDDING ====================

export const INVITATION_ID = 'inv-001-andhika-laila';

export const dummyInvitation: Invitation = {
  id: INVITATION_ID,
  owner_id: 'user-001',
  title: 'Wedding Invitation Andhika & Laila',
  slug: 'andhika-laila',
  status: 'published',
  bride_name: 'Laila',
  groom_name: 'Andhika',
  bride_full_name: 'Laila Nur Azizah, S.Psi',
  groom_full_name: 'Andhika Pratama, S.T.',
  bride_parents: 'Putri dari Bpk. H. Ahmad Fauzi & Ibu Hj. Siti Mariam',
  groom_parents: 'Putra dari Bpk. Ir. Budi Santoso & Ibu Dewi Kartika',
  bride_ig: '@lailanurazizah',
  groom_ig: '@andhikapratama',
  event_date: '2026-08-15',
  timezone: 'Asia/Jakarta',
  theme: {
    primaryColor: '#22382D',
    secondaryColor: '#6F7F55',
    accentColor: '#A9B89B',
    bgColor: '#F7F1E6',
    textColor: '#22382D',
    goldColor: '#C9A86A',
    fontHeading: 'Playfair Display',
    fontBody: 'Inter',
    cardRadius: 24,
    ornamentDensity: 'medium',
    animationIntensity: 'medium',
  },
  settings: {
    coverImage: 'https://images.unsplash.com/photo-1606103940244-837cc604f58c?w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80',
    bridePhoto: 'https://images.unsplash.com/photo-1594552073388-6e3f45e83df6?w=400&q=80',
    groomPhoto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    backgroundImage: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80',
    musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    mapAkadUrl: 'https://maps.google.com/?q=Masjid+Agung',
    mapResepsiUrl: 'https://maps.google.com/?q=Gedung+Graha+Wedding',
    mapAkadWaze: 'https://waze.com/ul?q=Masjid+Agung',
    mapResepsiWaze: 'https://waze.com/ul?q=Gedung+Graha+Wedding',
    calendarLink: 'https://calendar.google.com',
  },
  created_at: '2026-01-15T08:00:00Z',
  updated_at: '2026-06-01T10:30:00Z',
};

export const dummySections: InvitationSection[] = [
  {
    id: 'sec-001',
    invitation_id: INVITATION_ID,
    section_key: 'cover',
    title: 'Opening Cover',
    content: {
      monogram: 'A&L',
      greeting: 'Kepada Yth.',
      subtitle: 'Kami mengundang Bapak/Ibu/Saudara/i untuk hadir di hari bahagia kami',
    },
    is_active: true,
    sort_order: 1,
  },
  {
    id: 'sec-002',
    invitation_id: INVITATION_ID,
    section_key: 'hero',
    title: 'Home Hero',
    content: {
      headline: 'Andhika & Laila',
      dateDisplay: '15 Agustus 2026',
      tagline: 'Dan di antara tanda-tanda kekuasaan-Nya, Dia menciptakan pasangan-pasangan untukmu agar kamu merasa tenteram kepadanya',
    },
    is_active: true,
    sort_order: 2,
  },
  {
    id: 'sec-003',
    invitation_id: INVITATION_ID,
    section_key: 'couple',
    title: 'Couple Profile',
    content: {
      brideQuote: '"Wanita yang selalu tersenyum dan mencintai keindahan dalam kesederhanaan"',
      groomQuote: '"Pria yang setia, penuh tanggung jawab, dan mencintai dengan sepenuh hati"',
    },
    is_active: true,
    sort_order: 3,
  },
  {
    id: 'sec-004',
    invitation_id: INVITATION_ID,
    section_key: 'event',
    title: 'Event Details',
    content: {
      akad: {
        title: 'Akad Nikah',
        date: '15 Agustus 2026',
        time: '08:00 - 10:00 WIB',
        venue: 'Masjid Agung Al-Muhajirin',
        address: 'Jl. Ahmad Yani No. 15, Kota Bandung',
        map_url: 'https://maps.google.com/?q=Masjid+Agung+Al+Muhajirin+Bandung',
        waze_url: 'https://waze.com/ul?q=Masjid+Agung+Al+Muhajirin+Bandung',
        dress_code: 'Formal - Bebas Sopan',
        dress_code_colors: ['#22382D', '#C9A86A', '#F7F1E6'],
      },
      resepsi: {
        title: 'Resepsi',
        date: '15 Agustus 2026',
        time: '11:00 - 17:00 WIB',
        venue: 'Gedung Graha Wedding Garden',
        address: 'Jl. Sukajadi No. 200, Kota Bandung',
        map_url: 'https://maps.google.com/?q=Gedung+Graha+Wedding+Bandung',
        waze_url: 'https://waze.com/ul?q=Gedung+Graha+Wedding+Bandung',
        dress_code: 'Formal - Tema Earth Tone',
        dress_code_colors: ['#A9B89B', '#6F7F55', '#C9A86A', '#B86B4B'],
      },
    },
    is_active: true,
    sort_order: 4,
  },
  {
    id: 'sec-005',
    invitation_id: INVITATION_ID,
    section_key: 'story',
    title: 'Love Story',
    content: {
      quote: 'Setiap kisah cinta itu indah, tapi kisah kami adalah favoritku',
    },
    is_active: true,
    sort_order: 5,
  },
  {
    id: 'sec-006',
    invitation_id: INVITATION_ID,
    section_key: 'gallery',
    title: 'Our Gallery',
    content: {
      subtitle: 'Momen-momen berharga perjalanan cinta kami',
    },
    is_active: true,
    sort_order: 6,
  },
  {
    id: 'sec-007',
    invitation_id: INVITATION_ID,
    section_key: 'rsvp',
    title: 'RSVP',
    content: {
      subtitle: 'Konfirmasi kehadiran Anda sangat berarti bagi kami',
      maxPaxMessage: 'Mohon konfirmasi jumlah tamu yang hadir',
    },
    is_active: true,
    sort_order: 7,
  },
  {
    id: 'sec-008',
    invitation_id: INVITATION_ID,
    section_key: 'qrpass',
    title: 'QR Guest Pass',
    content: {
      instruction: 'Tunjukkan QR ini saat hadir di acara kami',
    },
    is_active: true,
    sort_order: 8,
  },
  {
    id: 'sec-009',
    invitation_id: INVITATION_ID,
    section_key: 'gift',
    title: 'Digital Gift',
    content: {
      subtitle: 'Doa restu Anda adalah karunia terindah. Namun jika memberi adalah ungkapan tanda kasih, Anda dapat mengirimkan hadiah melalui:',
    },
    is_active: true,
    sort_order: 9,
  },
  {
    id: 'sec-010',
    invitation_id: INVITATION_ID,
    section_key: 'wishes',
    title: 'Wishes & Doa',
    content: {
      subtitle: 'Berikan ucapan dan doa terbaik untuk kami',
    },
    is_active: true,
    sort_order: 10,
  },
  {
    id: 'sec-011',
    invitation_id: INVITATION_ID,
    section_key: 'closing',
    title: 'Closing',
    content: {
      thankYou: 'Merupakan suatu kehormatan dan kebahagiaan apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu.',
      familyNames: 'Keluarga Besar Bpk. H. Ahmad Fauzi & Keluarga Besar Bpk. Ir. Budi Santoso',
      finalQuote: '"Dan di antara tanda-tanda kekuasaan-Nya, Dia menciptakan pasangan-pasangan untukmu agar kamu merasa tenteram kepadanya. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir."\n— QS. Ar-Rum: 21',
    },
    is_active: true,
    sort_order: 11,
  },
];

export const dummyGuests: Guest[] = [
  { id: 'g-001', invitation_id: INVITATION_ID, guest_name: 'Keluarga Besar Ahmad Dahlan', phone: '081234567890', category: 'Keluarga', pax_allocated: 4, invitation_given_status: 'Sudah Diberikan', guest_token: 'tok-a1b2c3d4e5', qr_hash: 'qr-hash-001', rsvp_status: 'Hadir', pax_confirmed: 4, is_checked_in: true, is_souvenir_claimed: true, created_at: '2026-01-20T08:00:00Z', updated_at: '2026-06-01T10:00:00Z' },
  { id: 'g-002', invitation_id: INVITATION_ID, guest_name: 'Bpk. Rahman & Ibu Siti', phone: '081234567891', category: 'Keluarga', pax_allocated: 2, invitation_given_status: 'Sudah Diberikan', guest_token: 'tok-f6g7h8i9j0', qr_hash: 'qr-hash-002', rsvp_status: 'Hadir', pax_confirmed: 2, is_checked_in: false, is_souvenir_claimed: false, created_at: '2026-01-20T08:00:00Z', updated_at: '2026-01-25T09:00:00Z' },
  { id: 'g-003', invitation_id: INVITATION_ID, guest_name: 'Rizky Hermawan & Partner', phone: '081234567892', category: 'Teman Kantor', pax_allocated: 2, invitation_given_status: 'Sudah Diberikan', guest_token: 'tok-k1l2m3n4o5', qr_hash: 'qr-hash-003', rsvp_status: 'Hadir', pax_confirmed: 2, is_checked_in: false, is_souvenir_claimed: false, created_at: '2026-01-20T08:00:00Z', updated_at: '2026-01-22T11:00:00Z' },
  { id: 'g-004', invitation_id: INVITATION_ID, guest_name: 'Keluarga Pak Budi (4 org)', phone: '081234567893', category: 'Tetangga', pax_allocated: 4, invitation_given_status: 'Sudah Diberikan', guest_token: 'tok-p6q7r8s9t0', qr_hash: 'qr-hash-004', rsvp_status: 'Tidak Hadir', pax_confirmed: 0, is_checked_in: false, is_souvenir_claimed: false, created_at: '2026-01-20T08:00:00Z', updated_at: '2026-02-01T08:00:00Z' },
  { id: 'g-005', invitation_id: INVITATION_ID, guest_name: 'Dewi Sartika, S.E.', phone: '081234567894', category: 'Teman Kuliah', pax_allocated: 1, invitation_given_status: 'Belum Diberikan', guest_token: 'tok-u1v2w3x4y5', qr_hash: 'qr-hash-005', rsvp_status: null, pax_confirmed: 0, is_checked_in: false, is_souvenir_claimed: false, created_at: '2026-01-20T08:00:00Z', updated_at: '2026-01-20T08:00:00Z' },
  { id: 'g-006', invitation_id: INVITATION_ID, guest_name: 'Andi Wirawan & Keluarga', phone: '081234567895', category: 'Keluarga', pax_allocated: 3, invitation_given_status: 'Sudah Diberikan', guest_token: 'tok-z6a7b8c9d0', qr_hash: 'qr-hash-006', rsvp_status: 'Ragu-ragu', pax_confirmed: 2, is_checked_in: false, is_souvenir_claimed: false, created_at: '2026-01-20T08:00:00Z', updated_at: '2026-02-05T08:00:00Z' },
  { id: 'g-007', invitation_id: INVITATION_ID, guest_name: 'Prof. Dr. Hendra Kusuma', phone: '081234567896', category: 'VIP', pax_allocated: 2, invitation_given_status: 'Sudah Diberikan', guest_token: 'tok-e1f2g3h4i5', qr_hash: 'qr-hash-007', rsvp_status: 'Hadir', pax_confirmed: 2, is_checked_in: false, is_souvenir_claimed: false, created_at: '2026-01-20T08:00:00Z', updated_at: '2026-01-28T08:00:00Z' },
  { id: 'g-008', invitation_id: INVITATION_ID, guest_name: 'Sarah Amalia Putri', phone: '081234567897', category: 'Teman Kantor', pax_allocated: 1, invitation_given_status: 'Sudah Diberikan', guest_token: 'tok-j6k7l8m9n0', qr_hash: 'qr-hash-008', rsvp_status: 'Hadir', pax_confirmed: 1, is_checked_in: false, is_souvenir_claimed: false, created_at: '2026-01-20T08:00:00Z', updated_at: '2026-01-30T14:00:00Z' },
];

export const dummyMediaAssets: MediaAsset[] = [
  { id: 'med-001', invitation_id: INVITATION_ID, role: 'cover', bucket: 'wedding-media', path: 'inv/001/cover/cover.jpg', public_url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', alt_text: 'Wedding Cover', sort_order: 0, metadata: {}, created_at: '2026-01-15T08:00:00Z' },
  { id: 'med-002', invitation_id: INVITATION_ID, role: 'hero', bucket: 'wedding-media', path: 'inv/001/hero/hero.jpg', public_url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80', alt_text: 'Hero Image', sort_order: 0, metadata: {}, created_at: '2026-01-15T08:00:00Z' },
  { id: 'med-003', invitation_id: INVITATION_ID, role: 'bride', bucket: 'wedding-media', path: 'inv/001/bride/bride.jpg', public_url: 'https://images.unsplash.com/photo-1594552073388-6e3f45e83df6?w=400&q=80', alt_text: 'Bride Photo', sort_order: 0, metadata: {}, created_at: '2026-01-15T08:00:00Z' },
  { id: 'med-004', invitation_id: INVITATION_ID, role: 'groom', bucket: 'wedding-media', path: 'inv/001/groom/groom.jpg', public_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80', alt_text: 'Groom Photo', sort_order: 0, metadata: {}, created_at: '2026-01-15T08:00:00Z' },
  { id: 'med-005', invitation_id: INVITATION_ID, role: 'gallery', bucket: 'wedding-media', path: 'inv/001/gallery/01.jpg', public_url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', alt_text: 'Prewedding 1', sort_order: 1, metadata: {}, created_at: '2026-01-15T08:00:00Z' },
  { id: 'med-006', invitation_id: INVITATION_ID, role: 'gallery', bucket: 'wedding-media', path: 'inv/001/gallery/02.jpg', public_url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80', alt_text: 'Prewedding 2', sort_order: 2, metadata: {}, created_at: '2026-01-15T08:00:00Z' },
  { id: 'med-007', invitation_id: INVITATION_ID, role: 'gallery', bucket: 'wedding-media', path: 'inv/001/gallery/03.jpg', public_url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80', alt_text: 'Prewedding 3', sort_order: 3, metadata: {}, created_at: '2026-01-15T08:00:00Z' },
  { id: 'med-008', invitation_id: INVITATION_ID, role: 'gallery', bucket: 'wedding-media', path: 'inv/001/gallery/04.jpg', public_url: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80', alt_text: 'Prewedding 4', sort_order: 4, metadata: {}, created_at: '2026-01-15T08:00:00Z' },
  { id: 'med-009', invitation_id: INVITATION_ID, role: 'gallery', bucket: 'wedding-media', path: 'inv/001/gallery/05.jpg', public_url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', alt_text: 'Prewedding 5', sort_order: 5, metadata: {}, created_at: '2026-01-15T08:00:00Z' },
  { id: 'med-010', invitation_id: INVITATION_ID, role: 'gallery', bucket: 'wedding-media', path: 'inv/001/gallery/06.jpg', public_url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80', alt_text: 'Prewedding 6', sort_order: 6, metadata: {}, created_at: '2026-01-15T08:00:00Z' },
  { id: 'med-011', invitation_id: INVITATION_ID, role: 'gallery', bucket: 'wedding-media', path: 'inv/001/gallery/07.jpg', public_url: 'https://images.unsplash.com/photo-1519741343486-eb1a50165ad6?w=600&q=80', alt_text: 'Prewedding 7', sort_order: 7, metadata: {}, created_at: '2026-01-15T08:00:00Z' },
  { id: 'med-012', invitation_id: INVITATION_ID, role: 'gallery', bucket: 'wedding-media', path: 'inv/001/gallery/08.jpg', public_url: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&q=80', alt_text: 'Prewedding 8', sort_order: 8, metadata: {}, created_at: '2026-01-15T08:00:00Z' },
  { id: 'med-013', invitation_id: INVITATION_ID, role: 'background', bucket: 'wedding-media', path: 'inv/001/bg/texture.jpg', public_url: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80', alt_text: 'Background Texture', sort_order: 0, metadata: {}, created_at: '2026-01-15T08:00:00Z' },
];

export const dummyWishes: Wish[] = [
  { id: 'w-001', invitation_id: INVITATION_ID, guest_id: 'g-001', sender_name: 'Keluarga Ahmad Dahlan', message: 'Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Bahagia selalu!', is_visible: true, created_at: '2026-06-01T09:00:00Z' },
  { id: 'w-002', invitation_id: INVITATION_ID, guest_id: 'g-002', sender_name: 'Rahman & Siti', message: 'Barakallah! Semoga langgeng sampai kakek nenek. Doa terbaik selalu untuk kalian berdua.', is_visible: true, created_at: '2026-06-01T10:00:00Z' },
  { id: 'w-003', invitation_id: INVITATION_ID, sender_name: 'Anisa Rahmawati', message: 'Happy wedding day! Kalian pasangan yang serasi banget. Semoga selalu diberkahi. Aamiin.', is_visible: true, created_at: '2026-06-02T08:30:00Z' },
  { id: 'w-004', invitation_id: INVITATION_ID, sender_name: 'Fajar Nugroho', message: 'Selamat ya Andhika & Laila! Semoga selalu rukun dan bahagia dunia akhirat.', is_visible: true, created_at: '2026-06-03T14:20:00Z' },
  { id: 'w-005', invitation_id: INVITATION_ID, guest_id: 'g-003', sender_name: 'Rizky Hermawan', message: 'Congrats bro! Akhirnya nikah juga. Semoga selalu diberi keberkahan. Aamiin!', is_visible: true, created_at: '2026-06-04T11:00:00Z' },
];

export const dummyBankAccounts: BankAccount[] = [
  { bank_name: 'BCA', account_number: '1234567890', account_holder: 'Laila Nur Azizah', logo: '🏦' },
  { bank_name: 'Mandiri', account_number: '0987654321', account_holder: 'Andhika Pratama', logo: '🏦' },
  { bank_name: 'GoPay', account_number: '081234567890', account_holder: 'Andhika Pratama', logo: '📱' },
  { bank_name: 'OVO', account_number: '081234567891', account_holder: 'Laila Nur Azizah', logo: '📱' },
];

export const dummyLoveStories: LoveStoryMilestone[] = [
  {
    id: 'story-001',
    title: 'First Meet',
    date: 'Januari 2022',
    description: 'Pertama kali bertemu di acara seminar kampus. Andhika sebagai pembicara, Laila sebagai peserta. Mata bertemu, dan sejak itu semesta seolah berbisik.',
    image_url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
    position: 'left',
  },
  {
    id: 'story-002',
    title: 'First Date',
    date: 'Februari 2022',
    description: 'Kencan pertama di sebuah kafe kecil di Bandung. Hujan turun, dan kami berbagi satu payung. Dari situ kami tahu, kami ingin selalu bersama.',
    image_url: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400&q=80',
    position: 'right',
  },
  {
    id: 'story-003',
    title: 'The Proposal',
    date: 'Desember 2025',
    description: 'Di taman kota yang penuh lampu natal, Andhika berlutut dengan cincin sederhana. Laila menangis haru dan berkata: "Ya, selamanya ya."',
    image_url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&q=80',
    position: 'left',
  },
  {
    id: 'story-004',
    title: 'The Wedding',
    date: '15 Agustus 2026',
    description: 'Hari yang dinanti akhirnya tiba. Dengan penuh cinta dan doa restu, kami akan mengikat janji suci di hadapan Allah dan seluruh keluarga tercinta.',
    image_url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80',
    position: 'right',
  },
];

// Helper functions
export function getGuestByToken(token: string): Guest | undefined {
  return dummyGuests.find(g => g.guest_token === token);
}

export function getActiveSections(): InvitationSection[] {
  return dummySections.filter(s => s.is_active).sort((a, b) => a.sort_order - b.sort_order);
}

export function getGalleryImages(): MediaAsset[] {
  return dummyMediaAssets.filter(m => m.role === 'gallery').sort((a, b) => a.sort_order - b.sort_order);
}

export function getCoverImage(): MediaAsset | undefined {
  return dummyMediaAssets.find(m => m.role === 'cover');
}

export function getHeroImage(): MediaAsset | undefined {
  return dummyMediaAssets.find(m => m.role === 'hero');
}

export function getWishesForInvitation(): Wish[] {
  return dummyWishes.filter(w => w.is_visible).sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}

// In-memory mutation helpers (simulate API)
let mutableGuests = [...dummyGuests];
let mutableWishes = [...dummyWishes];

export function getMutableGuests(): Guest[] { return mutableGuests; }
export function getMutableWishes(): Wish[] { return mutableWishes.filter(w => w.is_visible); }

export function submitRsvp(guestToken: string, status: 'Hadir' | 'Tidak Hadir' | 'Ragu-ragu', paxConfirmed: number, message: string): Guest | null {
  const idx = mutableGuests.findIndex(g => g.guest_token === guestToken);
  if (idx === -1) return null;
  mutableGuests[idx] = { ...mutableGuests[idx], rsvp_status: status, pax_confirmed: paxConfirmed };
  return mutableGuests[idx];
}

export function addWish(senderName: string, message: string, guestToken?: string): Wish {
  const guest = guestToken ? getGuestByToken(guestToken) : undefined;
  const wish: Wish = {
    id: `w-${Date.now()}`,
    invitation_id: INVITATION_ID,
    guest_id: guest?.id,
    sender_name: senderName,
    message,
    is_visible: true,
    created_at: new Date().toISOString(),
  };
  mutableWishes.unshift(wish);
  return wish;
}

export function addGiftProof(bankName: string, amount: number, senderName: string, notes: string): { success: boolean } {
  return { success: true };
}
