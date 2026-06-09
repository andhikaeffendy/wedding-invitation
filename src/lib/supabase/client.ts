import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const isConfigured = supabaseUrl && supabaseAnonKey && supabaseUrl !== 'your-project-url';

export const supabase = isConfigured ? createClient(supabaseUrl, supabaseAnonKey) : null;
export function getSupabase() { return supabase; }
export const DATA_MODE: 'supabase' | 'dummy' = isConfigured ? 'supabase' : 'dummy';
