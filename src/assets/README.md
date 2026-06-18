# Assets

Source images, re-optimized at build by `astro:assets` (large source files are fine).

```
assets/
├─ hero/          # full-bleed hero background (CSS background-image, optimized to WebP)
├─ services/      # one photo per service (slug-named); used on cards + service pages
└─ maps/          # static map art if you ever drop the live embeds
```

Service photos are best at **3:2 landscape** (they're cropped to 3:2 on city-page cards and
shown at natural ratio on the homepage rows). Drop in large files freely — `astro:assets`
resizes/compresses them at build; only the optimized variants ship.

## ⚠️ These are PLACEHOLDERS

The current images are **generated desert-scene placeholders** (a warm Sonoran-sunset graphic with
an RV silhouette, made so the build resolves and the site reads as a real East Valley RV business,
not broken). They are not photographs. **Replace them with real job photos before launch** — real
local proof (your actual repairs, your service van, a tech working a rig in a Mesa RV park) is
load-bearing for this kind of site (see SPEC §2). Keep the same filenames (or update the `import`s
in `src/config/services.ts`) so nothing breaks.

> `public/og.jpg` (1200×630 social-share image) is the same generated desert scene with the company
> wordmark — swap it for a real branded image before launch.

### Where each image is referenced

| File | Used by |
|---|---|
| `hero/hero.jpg` | site-wide default hero (`src/lib/images.ts` → `defaultHero`) |
| `services/mobile-rv-repair.jpg` | `mobile-rv-repair` service (hub) |
| `services/rv-ac-repair.jpg` | `rv-ac-repair` service (urgent) |
| `services/rv-electrical-repair.jpg` | `rv-electrical-repair` service |
| `services/slide-out-repair.jpg` | `slide-out-repair` service |
| `services/water-heater-repair.jpg` | `water-heater-repair` service |
| `services/roof-leak-repair.jpg` | `roof-leak-repair` service |
| `services/generator-repair.jpg` | `generator-repair` service |
| `services/mobile-rv-inspections.jpg` | `mobile-rv-inspections` service |

Service photos are imported at the top of `src/config/services.ts`. Per-city overrides go in
`city.serviceImages` / `city.heroImage` in `src/config/cities.ts`.

### Favicon & brand mark

This site **ships a favicon**: `public/favicon.svg` (a navy desert badge with an RV silhouette and a
gold sun), with `favicon-32.png`, `favicon.png`, and `apple-touch-icon.png` as raster fallbacks, all
wired in `BaseLayout.astro`. If you change the brand mark, keep the SVG and the PNG fallbacks in sync.
