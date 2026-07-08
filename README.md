# AI Marketing Advisor & Speaker — Personal Site

A Next.js site for a personal AI marketing advisory + speaking brand, built around four
goals: booking advisory calls, booking speaking engagements, growing an email list, and
selling a course.

## Stack

- **Next.js 16 (App Router) + TypeScript**
- **Tailwind CSS v4** — design tokens live in `app/globals.css` (`@theme` block)
- **React Three Fiber + drei** — decorative particle/floating-geometry background (`components/three/`)
- **Framer Motion** — UI entrance/hover motion
- **next-mdx-remote** — Insights articles (`content/posts/*.mdx`)
- **Cal.com embed**, **Resend** (contact form), **Stripe Payment Links**, newsletter form — see integrations below

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before launch — replace these placeholders

Everything below works out of the box with placeholder content/links so the site is fully
functional in development, but needs real values before going live:

| What | Where | Replace with |
|---|---|---|
| Bio copy | `content/bio.ts` | Adjust as positioning evolves (headshot: `public/images/headshot.jpg`) |
| Speaking topics, past engagements | `content/speakingTopics.ts` | Your real talks and event history |
| Speaker reel | `public/video/reel-poster-placeholder.svg`, `app/speaking/page.tsx` | Embed your real reel |
| Advisory service tiers | `content/serviceTiers.ts` | Your real offers/pricing |
| Testimonials | `content/testimonials.ts` | Real client quotes (with permission) |
| Course offer | `content/productOffer.ts` | Your real curriculum, price, Stripe link |
| Client logos | `public/images/logos/*.svg` | Real logos (with permission) |
| Cal.com booking | `components/embeds/CalEmbed.tsx` | Your real Cal.com (or Calendly) event slug |
| Contact form email | `app/api/contact/route.ts` | Set `RESEND_API_KEY` and `CONTACT_TO_EMAIL` env vars |
| Newsletter signup | `components/embeds/NewsletterForm.tsx` | Wire up your real beehiiv/ConvertKit endpoint |
| Stripe checkout | `components/embeds/StripeCheckoutButton.tsx`, `content/productOffer.ts` | Your real Stripe Payment Link |

## Architecture note: the WebGL background

The particle/floating-geometry visuals (`components/three/`) are a decorative layer only —
mounted client-side behind server-rendered content, never a replacement for it. This keeps
the site SEO-crawlable and accessible even though it looks like a full 3D "experience":

- `components/three/BackgroundLayer.tsx` lazy-mounts the canvas once its section scrolls
  into view (eager only on the Home hero), skips rendering entirely under
  `prefers-reduced-motion`, and falls back to a static gradient if WebGL isn't available.
- All real copy, CTAs, and forms are ordinary server-rendered HTML in `app/*/page.tsx`.

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run lint    # ESLint
```
