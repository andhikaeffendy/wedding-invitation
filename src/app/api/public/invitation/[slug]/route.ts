// Public API — reads from shared store.json
import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

const STORE_PATH = path.join(process.cwd(), '..', 'shared', 'store.json');

function readStore() {
  try {
    return JSON.parse(fs.readFileSync(STORE_PATH, 'utf-8'));
  } catch {
    return { invitations: [], guests: [], wishes: [], bank_accounts: [] };
  }
}

function writeStore(data: any) {
  const dir = path.dirname(STORE_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(STORE_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

// GET /api/public/invitation/[slug]?guest=TOKEN
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const pathParts = url.pathname.split('/');
  const slug = pathParts[pathParts.length - 1];
  const guestName = url.searchParams.get('guestName') || '';

  const store = readStore();
  const invitation = store.invitations.find((i: any) => i.slug === slug);
  if (!invitation) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  // Find guest by name (URL pattern: /i/[slug]/Nama+Tamu)
  let guest = null;
  if (guestName) {
    const decoded = decodeURIComponent(guestName).replace(/\+/g, ' ');
    guest = store.guests.find((g: any) =>
      g.invitation_id === invitation.id &&
      g.guest_name.toLowerCase().includes(decoded.toLowerCase())
    ) || null;
  }

  const gallery = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80',
    'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80',
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80',
    'https://images.unsplash.com/photo-1519741343486-eb1a50165ad6?w=600&q=80',
    'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&q=80',
  ];

  return NextResponse.json({
    invitation,
    guest,
    guestToken: guest?.guest_token || '',
    gallery,
    wishes: store.wishes.filter((w: any) => w.is_visible && w.invitation_id === invitation.id),
    bankAccounts: store.bank_accounts,
  });
}

// POST /api/public/rsvp — submit RSVP
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { guestToken, status, paxConfirmed, message } = body;

  const store = readStore();
  const idx = store.guests.findIndex((g: any) => g.guest_token === guestToken);
  if (idx === -1) return NextResponse.json({ error: 'Guest not found' }, { status: 404 });

  store.guests[idx].rsvp_status = status;
  store.guests[idx].pax_confirmed = paxConfirmed || 0;
  writeStore(store);

  return NextResponse.json({ success: true, guest: store.guests[idx] });
}

// PUT /api/public/wish — add wish
export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { invitationId, senderName, text, guestToken } = body;

  const store = readStore();
  const guest = guestToken ? store.guests.find((g: any) => g.guest_token === guestToken) : null;

  const wish = {
    id: `w-${Date.now()}`,
    invitation_id: invitationId || 'inv-001',
    guest_id: guest?.id || null,
    sender_name: senderName,
    message: text,
    is_visible: true,
    created_at: new Date().toISOString(),
  };
  store.wishes.unshift(wish);
  writeStore(store);

  return NextResponse.json({ success: true, wish });
}
