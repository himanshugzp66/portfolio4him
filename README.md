# Himanshu Pandey — Personal Portfolio

A premium, world-class personal portfolio for a Senior DevOps / Cloud / SRE engineer.
Designed to instantly communicate technical depth, reliability and modern engineering
craft to recruiters, hiring managers, CTOs and tech leads.

> Apple × Stripe × Vercel × Linear inspired. Dark, futuristic, glassmorphic, animated, fast.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI**: React 19, Tailwind CSS 3.4, Framer Motion 11
- **Icons**: lucide-react
- **Fonts**: Inter, Space Grotesk, JetBrains Mono (next/font)
- **Hosting-ready**: Vercel / Netlify / any Node host

## Features

- Premium dark mode UI with neon cyan/violet gradients
- Sticky glass navbar with active scroll spy + animated indicator
- Animated hero with rotating roles and live particle network background
- Glassmorphism cards everywhere
- Animated grid + radial glows + soft cursor glow
- Animated stat counters
- Vertical animated experience timeline
- Project cards with hover lift, gradient borders and tag chips
- Certifications grid with badge gradients
- Recruiter testimonial cards
- Working contact form (mailto-based, no backend required)
- Back-to-top button
- Scroll progress bar
- Premium preloader on first paint
- Reduced-motion support
- SEO meta tags, OpenGraph, Twitter card, robots, manifest
- Lighthouse-friendly: minimal JS, no images, semantic HTML

## Sections

1. Hero
2. About
3. Stats (animated counters)
4. Skills (animated grid with proficiency bars)
5. Experience timeline
6. Projects (Problem · Solution · Tools · Impact)
7. Certifications
8. Testimonials
9. Contact (form + LinkedIn / GitHub / Resume)
10. Footer

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind + custom utilities
│   ├── layout.tsx         # Root layout, metadata, fonts, shell
│   ├── loading.tsx        # Route-level loader
│   └── page.tsx           # Composes all sections
├── components/
│   ├── effects/           # Particles, cursor glow, scroll progress, preloader
│   ├── layout/            # Navbar, Footer, BackToTop
│   ├── sections/          # Hero, About, Stats, Skills, Experience, Projects, Certifications, Testimonials, Contact
│   └── ui/                # Button, SectionHeading, RotatingText, Counter
├── data/                  # All content (personal, skills, experience, projects, certs, stats, testimonials)
└── lib/
    └── utils.ts           # cn() helper
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Build for production
npm run build && npm start
```

Open http://localhost:3000.

## Customizing Content

Everything that's editable lives in `src/data/`:

- `personal.ts`     — name, roles, email, phone, GitHub, LinkedIn, resume URL
- `skills.ts`       — skills + icons + proficiency
- `experience.ts`   — timeline entries
- `projects.ts`     — case studies (Problem / Solution / Tools / Impact)
- `certifications.ts` — credentials
- `stats.ts`        — animated counters
- `testimonials.ts` — quotes

## Adding the Resume

Place your resume at `public/resume.pdf`. It's referenced by the Hero, Navbar and Contact buttons.

## Contact Form — Supabase Setup

The contact form persists submissions to a Supabase table via a server-side
Next.js API route (`/api/contact`). The `service_role` key never reaches the
browser — it lives only in `.env.local` and on your hosting provider's env
config.

### 1. Create the table

In your Supabase dashboard → **SQL Editor** → paste the contents of
[`db/schema.sql`](./db/schema.sql) → **Run**.

This creates `public.contact_messages` with:

| column      | type        | notes                                    |
| ----------- | ----------- | ---------------------------------------- |
| `id`        | uuid (pk)   | `gen_random_uuid()`                      |
| `created_at`| timestamptz | default `now()`                          |
| `name`      | text        | 1–120 chars (constraint)                 |
| `email`     | text        | 3–254 chars (constraint)                 |
| `message`   | text        | 5–5000 chars (constraint)                |
| `user_agent`| text        | nullable                                 |
| `ip`        | text        | nullable, captured from `x-forwarded-for`|

Row Level Security is **enabled** with **no** policies — the public anon key
cannot read or write the table. Inserts only happen via the server route using
the `service_role` key.

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in:

```bash
SUPABASE_URL=https://<your-project-ref>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>     # SERVER ONLY
NEXT_PUBLIC_SUPABASE_URL=https://<your-project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>         # safe to expose
```

> Restart `npm run dev` after editing env vars.

### 3. View submissions

Supabase Dashboard → **Table Editor** → `contact_messages`.
You'll see every submission ordered by `created_at`.

### Form behavior

- Server-side input validation (length, email regex)
- Honeypot field (`website`) silently rejects bots
- IP + User-Agent captured for abuse diagnostics
- Inline success / error states with smooth transitions
- Form auto-resets after success
- Submit button disabled while sending

## Tweaking the Theme

Open `tailwind.config.ts` — the brand palette lives under `theme.extend.colors.accent`.
The base background and gradient tokens are defined in `src/app/globals.css`.

## Performance Notes

- All particle / cursor animations honor `prefers-reduced-motion`.
- `experimental.optimizePackageImports` is on for `lucide-react` & `framer-motion`.
- No external images; everything renders with CSS, gradients and SVG icons.

## License

MIT — built for Himanshu Pandey.
