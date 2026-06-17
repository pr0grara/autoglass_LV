# Assets

Source images, re-optimized at build by `astro:assets` (large source files are fine).

```
assets/
├─ hero/          # full-bleed hero backgrounds (CSS background-image, optimized to WebP)
├─ services/      # one photo per service (slug-named); used on cards + service pages
└─ maps/          # static map art if you ever drop the live embeds
```

Service photos are best at **3:2 landscape** (they're cropped to 3:2 on city-page cards and
shown at natural ratio on the homepage rows). Drop in large files freely — `astro:assets`
resizes/compresses them at build; only the optimized variants ship.

## ⚠️ These are PLACEHOLDERS

The current images are flat, on-brand illustrations generated so the build resolves and the site
doesn't look broken. **Replace them with real job photos before launch** — real local proof
(actual windshields, real broken windows, the service van) is load-bearing for this kind of site
(see SPEC §2). Keep the same filenames (or update the `import`s) so nothing breaks.

### Where each image is referenced

| File | Used by |
|---|---|
| `hero/hero.jpg` | site-wide default hero (`src/lib/images.ts` → `defaultHero`) |
| `services/mobile-auto-glass.jpg` | `mobile-auto-glass` service (hub) |
| `services/windshield-replacement.jpg` | `windshield-replacement` service |
| `services/windshield-repair.jpg` | `windshield-repair` service (chip repair) |
| `services/side-window-replacement.jpg` | `side-window-replacement` service |
| `services/rear-window-replacement.jpg` | `rear-window-replacement` service |
| `services/power-window-repair.jpg` | `power-window-repair` service |
| `services/window-regulator-repair.jpg` | `window-regulator-repair` service |
| `services/emergency-auto-glass.jpg` | `emergency-auto-glass` service (emergency) |

Service photos are imported at the top of `src/config/services.ts`. Per-city overrides go in
`city.serviceImages` / `city.heroImage` in `src/config/cities.ts`.

### Favicons

Favicons live in `public/` (`favicon.ico`, `favicon.png`, `favicon-32.png`,
`apple-touch-icon.png`) and are also placeholders — swap them for the real brand mark.
