// Shared types for template data props — avoids `any` in all templates

export interface WishItem {
  id?: string;
  sender_name: string;
  message: string;
  created_at?: string;
}

export interface BankItem {
  bank_name: string;
  account_number: string;
  account_holder: string;
  logo?: string;
}

export interface GalleryItem {
  url?: string;
  public_url?: string;
}

export interface StoryItem {
  id: string;
  title: string;
  date: string;
  description: string;
  image_url?: string;
  sort_order?: number;
  is_visible?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type InvData = Record<string, any>;

export interface TemplateData {
  invitation: InvData | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  guest: Record<string, any> | null;
  guestToken: string;
  gallery: (string | GalleryItem)[];
  wishes: WishItem[];
  bankAccounts: BankItem[];
  loveStories: StoryItem[];
}
