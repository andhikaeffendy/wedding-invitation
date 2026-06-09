import { getSupabase, DATA_MODE } from '../supabase/client';

const BUCKET = 'wedding-media';

export async function uploadFile(file: File, invitationId: string, role: string): Promise<{ url: string; path: string } | null> {
  if (DATA_MODE === 'dummy') {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve({ url: reader.result as string, path: `inv/${invitationId}/${role}/${Date.now()}-${file.name}` });
      reader.readAsDataURL(file);
    });
  }
  const supabase = getSupabase();
  if (!supabase) return null;
  const path = `invitations/${invitationId}/${role}/${Date.now()}-${file.name}`;
  const { data, error } = await supabase.storage.from(BUCKET).upload(path, file, { cacheControl: '3600' });
  if (error) return null;
  const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return { url: urlData.publicUrl, path };
}

export function validateFile(file: File, maxSizeMB = 5): string | null {
  const allowed = ['image/jpeg', 'image/png', 'image/webp', 'audio/mpeg', 'audio/mp3'];
  if (!allowed.includes(file.type)) return 'Format tidak didukung';
  if (file.size > maxSizeMB * 1024 * 1024) return `Maksimal ${maxSizeMB}MB`;
  return null;
}
