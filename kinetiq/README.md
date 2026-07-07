# DXD

Marketing site for **DXD**, an AI-first growth & technology studio.
Built with Next.js 15 (App Router) + TypeScript. No CSS framework — the design
system lives in [`app/globals.css`](app/globals.css).

## Pages

- `/` — Home (hero, stats, services, method, industries, CTA)
- `/services` — Full service catalogue + engagement model
- `/about` — Studio, principles, sectors
- `/contact` — Contact form (opens the visitor's mail client — no backend needed)

## Editing content

Almost everything (brand name, tagline, services, stats, industries) is in one
file: [`lib/content.ts`](lib/content.ts). Rename the brand, swap the email, or
change services there and every page updates.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to Vercel

**Option A — CLI (fastest):**

```bash
npm i -g vercel     # once
cd kinetiq
vercel              # first run: log in + link project (answer the prompts)
vercel --prod       # ship to production
```

**Option B — Git + dashboard:**

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Set **Root Directory** to `kinetiq` (since the app lives in a subfolder).
4. Framework preset auto-detects **Next.js**. Click **Deploy**.

No environment variables are required. The build command (`next build`) and
output are detected automatically.

## Notes

- The contact form uses a `mailto:` handoff so the site is 100% static-friendly
  and needs no server. To collect submissions to a database instead, swap the
  submit handler in [`components/ContactForm.tsx`](components/ContactForm.tsx)
  for a form provider (Formspree, Resend, a Next.js route handler, etc.).
- Fonts are self-hosted at build time via `next/font/google` (Space Grotesk,
  Inter, JetBrains Mono).
