-- =============================================================================
-- Contact form schema for Himanshu Pandey portfolio
-- Run this once in Supabase Dashboard → SQL Editor → New query → Run
-- =============================================================================

-- 1. The table that stores every contact form submission.
create table if not exists public.contact_messages (
  id          uuid        primary key default gen_random_uuid(),
  created_at  timestamptz not null    default now(),
  name        text        not null,
  email       text        not null,
  message     text        not null,
  user_agent  text,
  ip          text,
  -- soft constraints (defense in depth — server-side already validates)
  constraint contact_messages_name_len    check (char_length(name)    between 1 and 120),
  constraint contact_messages_email_len   check (char_length(email)   between 3 and 254),
  constraint contact_messages_message_len check (char_length(message) between 5 and 5000)
);

-- 2. Helpful index for browsing submissions newest-first.
create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

-- 3. Lock the table down with Row Level Security.
--    No SELECT/INSERT/UPDATE/DELETE policies are defined for `anon` / `authenticated`,
--    which means the public anon key CANNOT read or write anything here.
--    Our Next.js API route uses the SERVICE_ROLE key, which bypasses RLS.
alter table public.contact_messages enable row level security;

-- =============================================================================
-- Optional: allow yourself to read submissions in the Supabase dashboard.
-- The dashboard auth uses your project owner credentials, which already bypass
-- RLS, so no extra policy is needed there. To query from a client app later,
-- create an authenticated-only SELECT policy here.
-- =============================================================================
