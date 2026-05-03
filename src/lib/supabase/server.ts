import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cached: SupabaseClient | null = null;

/**
 * Returns a singleton Supabase admin client that uses the SERVICE_ROLE key.
 *
 * IMPORTANT: This module imports `server-only`, which causes a build-time
 * error if it is ever imported into a client component. The service role key
 * MUST never reach the browser.
 */
export function getSupabaseAdmin(): SupabaseClient {
  if (cached) return cached;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. " +
        "Add them to .env.local (and your hosting provider's env vars in production).",
    );
  }

  cached = createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
    global: {
      headers: { "x-client-info": "himanshu-portfolio/contact" },
    },
  });

  return cached;
}
