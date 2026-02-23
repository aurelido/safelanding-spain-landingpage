# On-Page SEO Optimization

## Overview

This document describes the on-page SEO improvements implemented to enable and improve search engine indexing of the SafeLanding Spain landing page.

## Core Components

### 1. Build-Time Pre-rendering (SSR → Static HTML)

**Problem:** As a React SPA, the production `index.html` contained an empty `<div id="root"></div>`. Crawlers that don't execute JavaScript (Bing, some social media bots, SEO audit tools) would see no content.

**Solution:** A two-step build process using Vite's native SSR capability:

- `src/entry-server.jsx` — Exports a `render()` function that uses `react-dom/server.renderToString()` to produce the full HTML of the App component.
- `scripts/prerender.mjs` — Post-build script that:
  1. Imports the SSR bundle from `dist/server/entry-server.js`
  2. Calls `render()` to get the static HTML
  3. Injects it into `dist/index.html` replacing the empty root div
  4. Cleans up the temporary server bundle

**Build command** (in `package.json`):
```
vite build && vite build --ssr src/entry-server.jsx --outDir dist/server && node scripts/prerender.mjs
```

The client-side React bundle still hydrates the pre-rendered HTML, so interactivity (mobile nav, contact form) works normally.

### 2. Semantic HTML Improvements

| File | Change |
|------|--------|
| `App.jsx` | Wrapped page sections in `<main>` landmark element |
| `AboutSection.jsx` | `<h4>` → `<h3>` to fix heading hierarchy (H1 → H2 → H3) |
| `ServicesSection.jsx` | `<h4>` → `<h3>` in both service cards |
| `AppFooter.jsx` | Contact details wrapped in `<address>` element; email/phone now use `<a>` with `mailto:` and `tel:` schemes |
| `FinalCtaSection.jsx` | Improved vague `alt="Coffee talk"` to keyword-rich descriptive alt text |

### 3. Enhanced Meta Tags (`index.html`)

New tags added to `<head>`:

- `<meta name="theme-color">` — Brand color for browser chrome
- `<meta name="geo.region">` / `<meta name="geo.placename">` — Geographic targeting signals
- `<meta property="og:locale">` — Language/region for social sharing
- `<meta property="og:site_name">` — Brand name for social cards
- `<meta property="og:image:width">` / `og:image:height` / `og:image:alt` — Complete OG image metadata
- `<link rel="preconnect">` — Google Fonts preconnect for performance (LCP signal)

### 4. Structured Data (JSON-LD) Enrichment

The existing `LocalBusiness` schema was expanded with:

- `telephone` and `email` at the top level
- `availableLanguage` on the `ContactPoint`
- `founder` — `Person` entity for Fabiola
- `makesOffer` — Two `Service` entries:
  - Visa & Document Preparation
  - Concierge Support in Spain

This enables richer search result displays and helps Google understand the service offerings.

### 5. Image Optimization for Core Web Vitals

- **Hero image:** `fetchPriority="high"` for faster LCP; explicit `width`/`height` to prevent CLS
- **Below-fold images** (about, CTA, founder): `loading="lazy"` to defer loading; explicit `width`/`height` attributes
- All images have descriptive, keyword-relevant `alt` text

### 6. Technical SEO

- **`sitemap.xml`:** Added `<lastmod>` date
- **External links:** All Koalendar booking links now have `target="_blank"` and `rel="noopener noreferrer"` (keeps users on-site, signals outbound correctly)

## Component Interactions

The pre-rendering pipeline runs as a post-build step:

```
vite build (client)  →  vite build --ssr (server bundle)  →  prerender.mjs (inject HTML)
                                                                    ↓
                                                            dist/index.html (with full static markup)
                                                                    ↓
                                                            dist/server/ (cleaned up)
```

React hydration on the client side picks up the pre-rendered markup without re-rendering, preserving interactivity.

## Deployment Architecture

No changes to the deployment target. The `dist/` output remains a static site. The SSR build is only used at build time and the temporary `dist/server/` directory is removed automatically.

**Requirements:**
- Node.js (for the prerender script)
- No additional runtime dependencies were added

## Runtime Behavior

- **First paint:** Browser receives fully-rendered HTML with all content visible (no blank flash)
- **Hydration:** React attaches event listeners to the pre-rendered DOM
- **Crawlers:** See complete page content in the initial HTML response without needing JavaScript execution
- **Social sharing:** Enhanced OG/Twitter card metadata with image dimensions ensures correct preview rendering
