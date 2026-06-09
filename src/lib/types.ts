// ==================== Core Types for Wedding Invitation System ====================

export interface Invitation {
  id: string;
  owner_id: string;
  title: string;
  slug: string;
  status: 'draft' | 'published' | 'archived';
  bride_name: string;
  groom_name: string;
  bride_full_name: string;
  groom_full_name: string;
  bride_parents: string;
  groom_parents: string;
  bride_ig?: string;
  groom_ig?: string;
  event_date: string;
  timezone: string;
  theme: ThemeConfig;
  settings: InvitationSettings;
  created_at: string;
  updated_at: string;
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  bgColor: string;
  textColor: string;
  goldColor: string;
  fontHeading: string;
  fontBody: string;
  cardRadius: number;
  ornamentDensity: 'low' | 'medium' | 'high';
  animationIntensity: 'subtle' | 'medium' | 'vibrant';
}

export interface InvitationSettings {
  coverImage?: string;
  heroImage?: string;
  bridePhoto?: string;
  groomPhoto?: string;
  backgroundImage?: string;
  musicUrl?: string;
  mapAkadUrl?: string;
  mapResepsiUrl?: string;
  mapAkadWaze?: string;
  mapResepsiWaze?: string;
  calendarLink?: string;
}

export interface InvitationSection {
  id: string;
  invitation_id: string;
  section_key: SectionKey;
  title: string;
  content: Record<string, any>;
  is_active: boolean;
  sort_order: number;
}

export type SectionKey =
  | 'cover'
  | 'hero'
  | 'couple'
  | 'event'
  | 'story'
  | 'gallery'
  | 'rsvp'
  | 'qrpass'
  | 'gift'
  | 'wishes'
  | 'closing';

export interface MediaAsset {
  id: string;
  invitation_id: string;
  role: MediaRole;
  bucket: string;
  path: string;
  public_url: string;
  alt_text: string;
  sort_order: number;
  metadata: Record<string, any>;
  created_at: string;
}

export type MediaRole =
  | 'cover'
  | 'hero'
  | 'bride'
  | 'groom'
  | 'gallery'
  | 'story'
  | 'background'
  | 'music'
  | 'gift_proof'
  | 'map_thumbnail';

export interface Guest {
  id: string;
  invitation_id: string;
  guest_name: string;
  phone?: string;
  category: string;
  pax_allocated: number;
  address?: string;
  invitation_given_status: 'Belum Diberikan' | 'Sudah Diberikan';
  invitation_given_at?: string;
  guest_token: string;
  qr_hash: string;
  notes?: string;
  created_at: string;
  updated_at: string;
  // Joined fields
  rsvp_status?: 'Hadir' | 'Tidak Hadir' | 'Ragu-ragu' | null;
  pax_confirmed?: number;
  is_checked_in?: boolean;
  is_souvenir_claimed?: boolean;
}

export interface RSVP {
  id: string;
  guest_id: string;
  invitation_id: string;
  status: 'Hadir' | 'Tidak Hadir' | 'Ragu-ragu';
  pax_confirmed: number;
  message?: string;
  submitted_at: string;
}

export interface AttendanceScan {
  id: string;
  guest_id: string;
  invitation_id: string;
  scan_type: 'checkin' | 'souvenir' | 'blocked';
  scanned_by?: string;
  scanned_at: string;
  device_info?: Record<string, any>;
  notes?: string;
}

export interface Wish {
  id: string;
  invitation_id: string;
  guest_id?: string;
  sender_name: string;
  message: string;
  is_visible: boolean;
  created_at: string;
}

export interface Gift {
  id: string;
  invitation_id: string;
  guest_id?: string;
  sender_name: string;
  bank_name: string;
  amount?: number;
  proof_asset_id?: string;
  notes?: string;
  created_at: string;
}

export interface BankAccount {
  bank_name: string;
  account_number: string;
  account_holder: string;
  logo?: string;
}

export interface EventDetail {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  map_url?: string;
  waze_url?: string;
  dress_code?: string;
  dress_code_colors?: string[];
}

export interface LoveStoryMilestone {
  id: string;
  title: string;
  date: string;
  description: string;
  image_url?: string;
  position: 'left' | 'right';
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface User {
  id: string;
  full_name: string;
  role: 'super_admin' | 'editor' | 'scanner' | 'viewer';
}

export interface ScanResult {
  status: 'SUCCESS_CHECKIN' | 'SUCCESS_SOUVENIR' | 'ALREADY_COMPLETED' | 'INVALID_QR';
  guest_name: string;
  category: string;
  pax: number;
  message: string;
}

// ==================== Dashboard Types ====================

export interface DashboardStats {
  totalInvitations: number;
  totalGuests: number;
  totalRsvpYes: number;
  totalCheckedIn: number;
  totalSouvenir: number;
  totalPax: number;
  paxCheckedIn: number;
  progressPercent: number;
}
