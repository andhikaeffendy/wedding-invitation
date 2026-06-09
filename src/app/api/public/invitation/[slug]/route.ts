import { NextRequest, NextResponse } from 'next/server';

function getClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key || !url.includes('supabase')) return null;
  const { createClient } = require('@supabase/supabase-js');
  return createClient(url, key);
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const slug = url.pathname.split('/').pop() || '';
  const guestName = url.searchParams.get('guestName') || '';

  const client = getClient();
  if (!client) {
    // Fallback: read from shared store.json
    try {
      const fs = require('fs');
      const path = require('path');
      const store = JSON.parse(fs.readFileSync(path.join(process.cwd(), '..', 'shared', 'store.json'), 'utf-8'));
      const inv = store.invitations.find((i: any) => i.slug === slug);
      if (!inv) return NextResponse.json({ error: 'Not found' }, { status: 404 });
      let guest = null;
      if (guestName) {
        const decoded = decodeURIComponent(guestName).replace(/\+/g, ' ');
        guest = store.guests.find((g: any) => g.invitation_id === inv.id && g.guest_name.toLowerCase().includes(decoded.toLowerCase()));
      }
      return NextResponse.json({ invitation: inv, guest, guestToken: guest?.guest_token || '', gallery: ['https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80'], wishes: store.wishes?.filter((w: any) => w.is_visible) || [], bankAccounts: store.bank_accounts || [] });
    } catch {
      return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
    }
  }

  try {
    const { data: invitation } = await client.from('invitations').select('*').eq('slug', slug).single();
    if (!invitation) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    let guest = null;
    if (guestName) {
      const decoded = decodeURIComponent(guestName).replace(/\+/g, ' ');
      const { data: guests } = await client.from('guests').select('*').eq('invitation_id', invitation.id).ilike('guest_name', `%${decoded}%`).limit(1);
      guest = guests?.[0] || null;
    }

    const { data: wishes } = await client.from('wishes').select('*').eq('invitation_id', invitation.id).eq('is_visible', true).order('created_at', { ascending: false });
    const { data: bankAccounts } = await client.from('bank_accounts').select('*').eq('invitation_id', invitation.id);

    return NextResponse.json({
      invitation, guest, guestToken: guest?.guest_token || '',
      gallery: ['https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80'],
      wishes: wishes || [], bankAccounts: bankAccounts || [],
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { guestToken, status, paxConfirmed } = body;
  if (!guestToken) return NextResponse.json({ error: 'guestToken required' }, { status: 400 });
  const client = getClient();
  if (!client) return NextResponse.json({ error: 'DB unavailable' }, { status: 503 });

  try {
    const { data } = await client.from('guests').update({ rsvp_status: status, pax_confirmed: paxConfirmed || 0 }).eq('guest_token', guestToken).select().single();
    return NextResponse.json({ success: true, guest: data });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { senderName, text } = body;
  const client = getClient();
  if (!client) return NextResponse.json({ error: 'DB unavailable' }, { status: 503 });

  try {
    const { data: inv } = await client.from('invitations').select('id').limit(1).single();
    if (!inv) return NextResponse.json({ error: 'No invitation' }, { status: 404 });
    const { data: wish } = await client.from('wishes').insert({ invitation_id: inv.id, sender_name: senderName, message: text, is_visible: true }).select().single();
    return NextResponse.json({ success: true, wish });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
