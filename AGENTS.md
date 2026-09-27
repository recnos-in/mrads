# AGENTS.md

Guidance for AI coding agents working in **mrads** — the Mr. Ads marketing site (Next.js App Router + TypeScript + Tailwind CSS), deployed to https://mr-ads.in.

## Commands

Run from the repo root. Node 20+ recommended.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server on **http://localhost:4028** |
| `npm run type-check` | `tsc --noEmit` — always run this before finishing |
| `npm run lint` | `next lint` (Prettier runs as an ESLint rule, so this also checks formatting) |
| `npm run lint:fix` | Auto-fix lint + formatting |
| `npm run format` | Prettier write over `src/**/*.{ts,tsx,css,md,json}` |
| `npm run build` | Production build |
| `npm run serve` | `next start` (production server) |

**Verification checklist for any code change:** `npm run type-check` → `npm run build`. Run `npm run lint` too, but see "Lint baseline" below.

## Lint baseline (read before "fixing" lint)

The repo already has lint **errors and warnings in files unrelated to your change** (Prettier formatting in `src/app/layout.tsx`, `src/components/WhatsAppFloatButton.tsx`, `src/components/hero/HeroCopy.tsx`, `src/lib/site.ts`, `src/app/page.tsx`, `src/app/advertising-on-the-move/layout.tsx`; many `<img>`/unused-var warnings elsewhere).

- Do **not** mass-reformat the repo to make lint green.
- Do make sure the files **you** touched are clean (`npx next lint --file <path>`, or `npm run lint` and confirm no new findings in your files).

## Architecture

- Next.js 15 App Router, React 19, TypeScript strict, Tailwind 3.4. Path alias `@/*` → `./src/*`.
- `next.config.mjs` sets `typescript.ignoreBuildErrors: true` and `eslint.ignoreDuringBuilds: true`, so **`npm run build` will not catch type or lint errors**. `npm run type-check` is mandatory.
- Global styles live in `src/styles/tailwind.css` (imported by `src/app/layout.tsx`). Keyframe animations (marquees, billboard zoom transitions) are defined there; Tailwind config only wires the theme. Long custom class chains like `animate-marquee-ltr` are defined in this CSS file, not generated utilities.
- Remote image hosts are allow-listed in `image-hosts.config.mjs` via `next/image` `remotePatterns`. Add new remote hosts there.
- Site URL / canonical host: `src/lib/site.ts` (`NEXT_PUBLIC_SITE_URL`, default `https://mr-ads.in`). Keep sitemap/robots/canonicals consistent with it.
- Static content is data-first: `src/data/pitchDeckServices.ts` (services + metrics + specs), `src/data/billboardAds.data.ts` (DOOH ad creatives), `src/data/siteNavigation.ts`. Changing copy usually means editing these, not components.
- Icons: `lucide-react`, plus `src/components/ui/AppIcon`/`AppImage`/`AppLogo` wrappers. Prefer existing wrappers over raw `<img>` in new code (lint flags raw `<img>`).
- `deploy.sh` deploys over SSH/PM2 to the production host and needs `GITHUB_TOKEN`. Never run it, and never touch it unless asked.

## Which Hero? (important — there are four)

"Hero" is ambiguous in this repo. Identify the right one before editing:

1. **`src/components/hero/`** — the **live homepage hero** (`src/app/page.tsx` → `Hero.tsx`). Contains `HeroServiceRow` (mobile swipe + auto-rotating card row, desktop CSS marquee), `BillboardScene`/`CampaignDisplay` (DOOH billboard slideshow), `HeroCopy`, `HeroTrustStrip`, `MobileCtaBar`, `ScrollIndicator`, `NetworkIndicator`, `HeroCtaGroup`. Barrel: `src/components/hero/index.ts`.
2. **`src/components/landing/HeroSection.tsx`** — used by `src/components/MrAdsApp.tsx`, an alternate full-page app shell that is **currently not routed anywhere**.
3. **`src/app/components/HeroSection.tsx`** — legacy/unused variant (plain `setInterval` slideshow).
4. **`src/components/home/HomeHero.tsx`** — legacy/unused variant.

If a request says "hero", it almost always means **#1**. Don't "fix" the unused variants to match — mention them instead.

## Working on the hero card carousel (`HeroServiceRow.tsx`)

This is the most bug-prone component in the repo. Its mobile behavior is subtle:

- **Swipe = native horizontal scrolling** (`overflow-x-auto`, `touch-pan-x`, `WebkitOverflowScrolling: touch`). Do not replace it with pointer-drag math unless explicitly asked; momentum scrolling on iOS is the desired feel.
- **Auto-rotation is `requestAnimationFrame` driving `el.scrollLeft`** at ~36px/s. The track renders **two identical copies** of the service list; when `scrollLeft` passes `scrollWidth / 2` it jumps back one copy width (invisible because both copies match). If you change the number of copies, keep the wrap math and the `% PITCH_DECK_SERVICES.length` index mapping in sync.
- **Interaction state must never latch.** iOS Safari routinely fires `pointerdown`/`touchstart` without the matching `up` event (after a swipe, when a tap ends outside the track, or as a ghost touch). The current design therefore resumes unconditionally on a ~1.2s timer and resets the interaction counter inside that timer. Re-introducing a "paused flag cleared only by the up event" will regress the "auto-rotation stops after touch on iOS" bug. See `git log -- src/components/hero/HeroServiceRow.tsx`.
- The row honors `prefers-reduced-motion: reduce` (no auto-rotation).
- Test on a real iPhone/simulator when touching any of this; desktop devtools device emulation does not reproduce iOS touch-event delivery quirks.

## Style and conventions

- Prettier config (`.prettierrc` and mirrored in `.eslintrc.json`): single quotes, semicolons, 2-space indent, `printWidth: 100`, `trailingComma: es5`, `endOfLine: auto`. Run `npm run format` on files you change.
- Design tokens are Tailwind theme colors: `ink` `#080808`, `graphite`, `slate`, `line`, `line-soft`, `paper` `#F4F1EC`, `mute`, `brand` (`#C83A4B` / `hover` `#DE4A5C`). Use these tokens instead of raw hex when a token exists; arbitrary hex is common in the older landing/ files but new code should prefer tokens.
- Components are mostly `'use client'` islands; keep server components where they already are (page metadata, `layout.tsx`, `sitemap.ts`, `robots.ts`).
- Per-route metadata lives in each route's `layout.tsx` (title/description/canonical). Keep these unique per page — recent work fixed exactly this (`git log --grep=seo`).
- Comments: explain *why* on non-obvious behavior (browser quirks, loop/wrap math, timing). The hero carousel comments are the house style.

## Content and brand

- Business: Mr. Ads — hyperlocal advertising network in Bengaluru (DOOH displays, transit/moving media, quick-commerce inserts, print, creative, digital/AI solutions). 30,000+ screens, 20M+ combined reach are the standing figures.
- Facts, phone numbers and WhatsApp deep links (`wa.me/919686544644`) already appear in components — copy them from existing code rather than inventing new ones.
- Business claims come from the data files and existing copy. Do not invent new metrics, clients, or locations.

## Git hygiene

- Never `git reset`, `git checkout --`, `git clean`, or `git stash` unless explicitly asked; the working tree may hold the user's own uncommitted changes (`.gitignore`, `.rolit/`, `tsconfig.json` are currently dirty — leave them alone).
- Small, scoped commits with a short `type(scope): summary` subject (see `git log`).
- Don't commit secrets. `.env` exists locally and contains API keys — never read its values into output, commit it, or echo it.
