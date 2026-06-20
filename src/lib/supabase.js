import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export const isConfigured = !!(supabaseUrl && supabaseAnonKey)

/*
SQL to set up the leads table in Supabase:

create table leads (
  id          bigserial primary key,
  business    text not null,
  contact     text,
  email       text,
  phone       text,
  industry    text,
  summary     text,
  video       text default 'None',
  spending    text default '$',
  rating      int  default 3,
  status      text default 'New',
  temp        text default 'Cold',
  source      text default 'Manual',
  founded     int,
  fav         boolean default false,
  created_at  timestamptz default now()
);

-- Enable RLS
alter table leads enable row level security;
create policy "public read" on leads for select using (true);
create policy "public write" on leads for all using (true);
*/
