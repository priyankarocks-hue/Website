# Lessons

Patterns learned from corrections during this project. Review at the start of a
session; add a new entry any time the user corrects a mistake.

- **Vercel Root Directory must be the repo root (`./`).** A misconfigured Root
  Directory (pointed at a subfolder) causes a silent 404 at the Middleware/routing
  layer with no build error — the deployment "succeeds" but serves nothing. Check
  this first on any fresh Vercel 404.
- **This sandbox's outbound proxy blocks `*.vercel.app` and `api.vercel.com`
  entirely.** No Vercel CLI/API access is possible from inside this environment —
  deployment debugging has to go through the user's own dashboard screenshots/logs,
  not direct HTTP checks from here.
- **Full-page Playwright screenshots don't reliably trigger Framer Motion
  `whileInView` animations.** A fullPage capture resizes the viewport rather than
  scrolling it, so IntersectionObserver-gated content can appear missing in the
  screenshot even though it renders fine for real users. Verify with an
  incremental `window.scrollTo` loop before treating an empty-looking section as
  a bug.
- **Next.js dev server / Turbopack HMR can serve stale CSS after a large
  Tailwind token rename.** If a browser check looks broken immediately after a
  big CSS/theme-token change, rebuild and check against `next build && next
  start` (production) before concluding it's a real bug — the dev server's
  incremental compile isn't always trustworthy for that kind of change.
- **Don't lead marketing copy with tenure framing** ("20+ years", "veteran") for
  a startup/SaaS buyer audience — lead with specific, current proof (recent real
  numbers, named systems, concrete wins) instead. Tenure reads as "safe/legacy,"
  not "cutting edge."
- **Never publish current-employer performance metrics, even anonymized.**
  Numbers like "4M+ acquisitions, 300% DOAS, $1M+/month across 15+ markets" are
  confidential and trivially traceable to the employer via LinkedIn even with
  the name removed. Same for identifying descriptors ("live FX platform").
  Substitute an economics argument the person can own outright (tool cost vs.
  system leverage) — it sells capability without disclosing anyone's data.
- **Positioning: consultant/orchestrator, never engineer.** Priyanka does not
  personally build technical systems — she designs them, brings AI engineers
  (or works with the client's), and supplies the judgment that runs them.
  Never write "I build the pipeline/system" as a hands-on-keyboard claim.
  Courses and insights are for NON-TECHNICAL marketers: every promise must be
  doable without code ("you write the brief, not the code"), progressively
  pushing what a marketer can do with AI.
