// WhatsApp Share helper for public invitation
import { dummyInvitation } from './dummy-data';

const invitation = dummyInvitation;

export function generateWhatsAppLink(guestName: string, guestToken: string): string {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://wedding.example.com';
  const inviteUrl = `${baseUrl}/i/${invitation.slug}?guest=${guestToken}`;

  const message = encodeURIComponent(
    `Assalamualaikum Wr. Wb.\n\n` +
    `Kepada Yth. ${guestName}\n\n` +
    `Kami mengundang Bapak/Ibu/Saudara/i untuk hadir di hari bahagia kami:\n\n` +
    `💍 ${invitation.groom_name} & ${invitation.bride_name}\n` +
    `📅 ${invitation.event_date}\n\n` +
    `Berikut link undangan digital:\n${inviteUrl}\n\n` +
    `Terima kasih. Wassalamualaikum Wr. Wb.\n` +
    `— ${invitation.groom_name} & ${invitation.bride_name}`
  );
  return `https://wa.me/?text=${message}`;
}

export function shareGenericInvitation() {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://wedding.example.com';
  const inviteUrl = `${baseUrl}/i/${invitation.slug}`;
  const message = encodeURIComponent(
    `🤵👰 Wedding Invitation\n\n${invitation.groom_name} & ${invitation.bride_name}\n📅 ${invitation.event_date}\n\nBuka undangan: ${inviteUrl}`
  );
  window.open(`https://wa.me/?text=${message}`, '_blank');
}
