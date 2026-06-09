import { NextRequest, NextResponse } from 'next/server';

// Lazy Prisma — only loads when API is actually called
async function getPrisma() {
  try {
    if (!process.env.DATABASE_URL) return null;
    const { PrismaClient } = await import('@prisma/client');
    return new PrismaClient();
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const pathParts = url.pathname.split('/');
  const slug = pathParts[pathParts.length - 1];
  const guestName = url.searchParams.get('guestName') || '';

  const prisma = await getPrisma();
  if (!prisma) {
    // Fallback: try reading from shared store
    const fs = await import('fs');
    const path = await import('path');
    const storePath = path.default.join(process.cwd(), '..', 'shared', 'store.json');
    const raw = fs.default.readFileSync(storePath, 'utf-8');
    const store = JSON.parse(raw);
    const invitation = store.invitations.find((i: any) => i.slug === slug);
    if (!invitation) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    
    let guest = null;
    if (guestName) {
      const decoded = decodeURIComponent(guestName).replace(/\+/g, ' ');
      guest = store.guests.find((g: any) => g.invitation_id === invitation.id && g.guest_name.toLowerCase().includes(decoded.toLowerCase()));
    }
    
    return NextResponse.json({
      invitation,
      guest,
      guestToken: guest?.guest_token || '',
      gallery: ['https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80'],
      wishes: store.wishes.filter((w: any) => w.is_visible),
      bankAccounts: store.bank_accounts || [],
    });
  }

  try {
    const invitation = await prisma.invitation.findUnique({ where: { slug } });
    if (!invitation) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    let guest = null;
    if (guestName) {
      const decoded = decodeURIComponent(guestName).replace(/\+/g, ' ');
      guest = await prisma.guest.findFirst({
        where: { invitationId: invitation.id, guestName: { contains: decoded, mode: 'insensitive' } },
      });
    }

    const [wishes, bankAccounts] = await Promise.all([
      prisma.wish.findMany({ where: { invitationId: invitation.id, isVisible: true }, orderBy: { createdAt: 'desc' } }),
      prisma.bankAccount.findMany({ where: { invitationId: invitation.id } }),
    ]);

    return NextResponse.json({
      invitation, guest, guestToken: guest?.guestToken || '',
      gallery: ['https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80'],
      wishes, bankAccounts,
    });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { guestToken, status, paxConfirmed, message } = body;
  if (!guestToken) return NextResponse.json({ error: 'guestToken required' }, { status: 400 });

  const prisma = await getPrisma();
  if (!prisma) return NextResponse.json({ error: 'DB not available' }, { status: 500 });

  try {
    const guest = await prisma.guest.findUnique({ where: { guestToken } });
    if (!guest) return NextResponse.json({ error: 'Guest not found' }, { status: 404 });
    const updated = await prisma.guest.update({
      where: { guestToken },
      data: { rsvpStatus: status, paxConfirmed: paxConfirmed || 0 },
    });
    return NextResponse.json({ success: true, guest: updated });
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { senderName, text } = body;
  const prisma = await getPrisma();
  if (!prisma) return NextResponse.json({ error: 'DB not available' }, { status: 500 });

  try {
    const inv = await prisma.invitation.findFirst();
    if (!inv) return NextResponse.json({ error: 'No invitation' }, { status: 404 });
    const wish = await prisma.wish.create({
      data: { invitationId: inv.id, senderName, message: text, isVisible: true },
    });
    return NextResponse.json({ success: true, wish });
  } finally {
    await prisma.$disconnect();
  }
}
