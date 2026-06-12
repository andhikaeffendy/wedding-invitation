import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function getClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key || !url.includes('supabase')) return null;
  return createClient(url, key);
}

// Fallback gallery images (used when no custom images are uploaded)
const FALLBACK_GALLERY = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80',
  'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80',
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80'
];

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const slug = url.pathname.split('/').pop() || '';
  const guestToken = url.searchParams.get('guestToken') || url.searchParams.get('guest') || '';

  const client = getClient();

  // ── Supabase path ──
  if (client) {
    try {
      const { data: invitation, error: invError } = await client.from('invitations').select('*').eq('slug', slug).single();
      if (invError || !invitation) {
        console.error('Invitation fetch error:', invError?.message);
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
      }

      const theme = typeof invitation.theme === 'string' ? JSON.parse(invitation.theme) : (invitation.theme || {});
      const settings = typeof invitation.settings === 'string' ? JSON.parse(invitation.settings) : (invitation.settings || {});

      let guest = null;
      if (guestToken) {
        const { data: guests } = await client.from('guests').select('*').eq('invitation_id', invitation.id).eq('guest_token', guestToken).limit(1);
        guest = guests?.[0] || null;
      }

      // Fetch related data with error handling per table
      let galleryImages = FALLBACK_GALLERY;
      try {
        const { data: gallery } = await client.from('gallery').select('*').eq('invitation_id', invitation.id).order('sort_order', { ascending: true });
        if (gallery && gallery.length > 0) {
          galleryImages = gallery.map((g: any) => g.public_url || g.url || g.image_url);
        } else if (settings.galleryImages && settings.galleryImages.length > 0) {
          galleryImages = settings.galleryImages;
        }
      } catch { /* gallery table might not exist yet, use fallback */ }

      let wishes = [];
      try {
        const { data: wishesData } = await client.from('wishes').select('*').eq('invitation_id', invitation.id).eq('is_visible', true).order('created_at', { ascending: false });
        wishes = wishesData || [];
      } catch { /* wishes table might not exist yet */ }

      let bankAccounts = [];
      try {
        const { data: banksData } = await client.from('bank_accounts').select('*').eq('invitation_id', invitation.id);
        bankAccounts = banksData || [];
      } catch { /* bank_accounts might not exist */ }

      let loveStories = [];
      try {
        const { data: storiesData } = await client.from('love_stories').select('*').eq('invitation_id', invitation.id).eq('is_visible', true).order('sort_order', { ascending: true });
        loveStories = storiesData || [];
      } catch { /* love_stories might not exist */ }

      return NextResponse.json({
        invitation: { ...invitation, template_id: invitation.template_id || theme?.id || 'modern-organic-luxury', theme },
        guest,
        guestToken: guest?.guest_token || guestToken,
        gallery: galleryImages,
        wishes,
        bankAccounts,
        loveStories
      });
    } catch (e: any) {
      console.error('GET invitation (supabase) error:', e.message);
      // Fall through to error response
    }
  }

  // No Supabase and no local file system (Vercel serverless)
  return NextResponse.json({ error: 'Service unavailable — Supabase not configured' }, { status: 503 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { guestToken, status, paxConfirmed } = body;
  if (!guestToken) return NextResponse.json({ error: 'guestToken required' }, { status: 400 });

  const client = getClient();
  if (!client) return NextResponse.json({ error: 'RSVP unavailable — Supabase not configured' }, { status: 503 });

  try {
    const updateData: any = {};
    if (status) updateData.rsvp_status = status;
    if (paxConfirmed) updateData.pax_confirmed = paxConfirmed;
    const { data } = await client.from('guests').update(updateData).eq('guest_token', guestToken).select().single();
    return NextResponse.json({ success: true, guest: data });
  } catch (e: any) {
    console.error('POST RSVP error:', e.message);
    return NextResponse.json({ error: 'RSVP failed' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { senderName, text, invitationId } = body;

  const client = getClient();
  if (!client) return NextResponse.json({ error: 'Wish unavailable — Supabase not configured' }, { status: 503 });

  try {
    const invId = invitationId;
    if (!invId) return NextResponse.json({ error: 'invitationId required' }, { status: 400 });
    const { data: wish } = await client.from('wishes').insert({
      invitation_id: invId,
      sender_name: senderName,
      message: text,
      is_visible: true,
    }).select().single();
    return NextResponse.json({ success: true, wish });
  } catch (e: any) {
    console.error('PUT wish error:', e.message);
    return NextResponse.json({ error: 'Wish failed' }, { status: 500 });
  }
}