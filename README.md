# East Valley Mobile RV Repair — Lead-Gen Site

A static, config-driven, SEO-first lead-gen website for **mobile RV repair across the East Valley**
of metro Phoenix, Arizona. Built from [`../SPEC.md`](../SPEC.md) (the single source of truth) using
Astro 5 — no database, no server runtime, no client framework. Output is plain static HTML/CSS for a CDN.

> **Status:** placeholder business identity (company name, phone `(480) 555-0172`, email, domain)
> + generated desert-scene placeholder images. It builds clean and is ready to launch once you swap
> in the real business details, real job photos, and a form backend — **do not edit `src/pages`,
> `src/layouts`, `src/components`, or `src/lib` to rebrand.** The answer is almost always in
> `src/config/`.
>
> No reviews, ratings, or licensed/insured claims are asserted — those are intentionally left out
> until they can be confirmed for the real business (see `Footer.astro` placeholder note).
> A **desert RV favicon** ships (`public/favicon.svg` + PNG fallbacks, wired in `BaseLayout.astro`).

---

## Verified build (Node 22)

- **75 HTML pages** + `robots.txt` + sitemap — matches the SPEC §6 formula:
  - 1 home + 8 service hubs + **56** service×city combos + 8 city hubs + privacy + terms.
- **Lean launch sitemap: 17 URLs** — homepage + 8 service hubs + 8 city hubs only. The 56
  service×city combo pages are `noindex` **and** excluded from the sitemap; legal pages are excluded
  too. (Combos still exist for internal linking / long-tail; they're just kept out of the index.)
- JSON-LD per page type: home → `LocalBusiness + FAQPage`; service hubs → `LocalBusiness +
  Breadcrumb + Service + FAQPage`; combos → localized 3-level breadcrumbs; city hubs → 2-level
  breadcrumb + FAQ.
- Canonicals, `og:`/Twitter tags, `theme-color`, favicon, hero `<link rel=preload fetchpriority=high>`,
  **CSS fully inlined** (0 render-blocking stylesheets), self-hosted Inter.
- Call-only form renders an on-page "we'll call you back" acknowledgement (submit disabled), with
  honeypot + validation already wired for when a backend is connected.

---

## Configuration (current decisions)

| Setting | Value |
|---|---|
| Company | *East Valley Mobile RV Repair* (placeholder) |
| Region | the East Valley (southeast Phoenix metro — Maricopa & Pinal counties) |
| Cities (8) | Mesa, Apache Junction, Gilbert, Chandler, Queen Creek, Tempe, Scottsdale, San Tan Valley |
| Services (8) | `mobile-rv-repair` (hubOnly) + `rv-ac-repair` (urgent), `rv-electrical-repair`, `slide-out-repair`, `water-heater-repair`, `roof-leak-repair`, `generator-repair`, `mobile-rv-inspections` |
| Matrix services | 7 (→ 56 combo pages, all `noindex` + out of sitemap) |
| Styling | Light Sonoran-desert palette: navy bands + **terracotta** accent + warm-sand soft sections (a "desert-rat" curation of the base template) |
| Form backend | **Call-only** (`formEndpoint=""`) — wire to Web3Forms / Formspree / a Worker later |
| Phone / email / domain | Placeholders (`(480) 555-0172`, `eastvalleymobilerv.com`) — replace before launch |

---

## Build & run

The default `node` on this machine is **v15** (too old for Astro 5). Build with **Node 22**:

```bash
nvm use 22          # .nvmrc pins 22; v22.14.0 is installed and builds clean
npm install
npm run dev         # local dev server
npm run check       # astro check (type-check; astro build does NOT type-check)
npm run build       # static output → dist/
npm run preview     # preview the built site
npm run deploy      # astro build && npx wrangler deploy (Cloudflare Workers Static Assets)
```

`SITE_URL` overrides the production domain at build/deploy time (the only env var read).

---

## Where to edit for a rebrand (config-only)

1. **[`src/config/site.ts`](src/config/site.ts)** — drives most titles, descriptions, headings, and
   schema. **Replace the placeholders:** `company`, `phone` / `phoneDisplay`, `email`, `url`. Comments
   show where to wire the lead form (`formEndpoint` + `formAccessKey`).
2. **[`src/config/services.ts`](src/config/services.ts)** — the services offered (keep ~1 `hubOnly`).
3. **[`src/config/cities.ts`](src/config/cities.ts)** — the areas served, with genuinely local copy.
   `nearby` slugs must reference existing cities.
4. **Assets** — see [`src/assets/README.md`](src/assets/README.md). Keep `astro.config.mjs` `site`,
   `wrangler.jsonc` `name`, and `package.json` `name` in sync.

A handful of trade-specific strings live in `src/pages/index.astro` and a few components (the
homepage intro/urgency sections, `ServiceAreaMap.astro` `COUNTIES`) — already written for mobile RV
repair in the East Valley.

---

## ⚠️ Before launch

1. **Replace placeholder business details** in `src/config/site.ts` (real company, phone, email,
   domain) — and keep `astro.config.mjs` `site` in sync.
2. **Swap the placeholder images** for real local job photos (your repairs, your service van, a tech
   working a rig in a Mesa RV park). The current images are generated desert-scene stand-ins; real
   local proof is load-bearing for this kind of site (SPEC §2). See [`src/assets/README.md`](src/assets/README.md).
   Swap `public/og.jpg` and the `public/favicon.*` brand mark for real branded art too.
3. **Only add `ratingValue` / `reviewCount`** in `site.ts` once you have real, verifiable reviews
   (fake counts are a "scammy" signal and break schema validation).
4. **Connect the lead form** by setting `formEndpoint` (Web3Forms / Formspree / a Cloudflare Worker).

---

## Repo map

```
ev-mobile-rv/
├─ astro.config.mjs         # site URL, sitemap (excludes legal + combos), inline CSS
├─ wrangler.jsonc           # Cloudflare deploy (assets.directory = ./dist)
├─ tsconfig.json            # strict + @config/@components/@layouts aliases
├─ package.json             # 3 deps, scripts
├─ .nvmrc                   # 22
├─ public/                  # _headers, .assetsignore, og.jpg, favicon.svg + PNG fallbacks
└─ src/
   ├─ config/               # ◀ EDIT HERE — site.ts, services.ts, cities.ts
   ├─ lib/                  # urls.ts, schema.ts, images.ts
   ├─ layouts/              # BaseLayout.astro (head, SEO, schema, favicon, header+footer)
   ├─ components/           # reusable sections
   ├─ pages/                # routing (index, [service]/, [service]/[city], service-area/[city], legal, robots)
   ├─ styles/global.css     # design system (navy + terracotta + warm sand, light-only)
   └─ assets/               # hero/ services/ (generated desert-scene placeholders)
```
