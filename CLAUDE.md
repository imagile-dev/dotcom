# CLAUDE.md

Astro static site for imagile.dev (marketing site, deployed to GitHub Pages).

## Commands

```bash
npm run dev
```

```bash
npm run build
```

The dev server usually already runs on `localhost:4321` — attach rather than spawning a second one (`.claude/launch.json` has a url-only "dotcom" config).

## Blog (hidden)

The blog is retired from the site as of Nov 2026: `/blog`, its posts and
`/rss.xml` still build and load at their URLs, but nothing links to them —
no nav item, footer link, home or service-page post lists, or RSS `<link>`.
Don't add those back. Blog writing now lives in Notion (Content Calendar,
Channel: Blog; archive of these posts in Marketing Workspace › Blog Archive).

Social links come from `src/data/socials.ts`, in this order: LinkedIn
(Imagile company page only), X, YouTube, Instagram, TikTok. Edit that list,
not the pages that render it.

## Copy rules

**Pricing: no dollar figures in site copy. Anywhere.** No hourly rate, day rate,
workshop fee, cohort fee, sprint fee, pilot range, or retainer minimum — not on
the services pages, not on the service cards, not in structured data.

Describe the *shape* of the pricing instead of the number: "hourly, rate quoted up
front", "flat fee per session", "fixed fee against a written scope", "scoped after
discovery", "monthly retainer". The promise is that the number is agreed in writing
before work starts and doesn't move mid-engagement — not that it's posted publicly.
Avoid "real numbers, not a contact form" style headings, and avoid `priceRange`
figures in JSON-LD (`src/layouts/Layout.astro` uses `$$$`).

The internal rate card in `docs/rebrand/implementation-notes.md` is a reference for
quoting engagements, not published copy — keep it out of the site.

Blog posts may cite third-party costs (cloud bills, tool budgets) as illustration;
those are not Imagile's prices and are exempt from this rule.

**Audience voice.** Only the developer-training path reads technical. The
business-owner and founder paths stay plain-English — no jargon, no stack names
unless they're doing work in the sentence.

## Theming

Light/dark follows `prefers-color-scheme` until the visitor uses the header
toggle, which writes `light` or `dark` to `localStorage.theme` and to
`<html data-theme>`. No attribute means the system is still in charge, so the
default state and the no-JS state both track the OS.

Two consequences when touching theme CSS:

- `src/styles/global.css` declares the dark palette **twice** — once under
  `@media (prefers-color-scheme: dark) :root:not([data-theme='light'])` and once
  under `:root[data-theme='dark']`. Edit both or the toggle and the system path
  drift apart.
- Components must not add their own `prefers-color-scheme` queries, and media
  attributes on `<picture><source>` can't see `data-theme` at all. Anything that
  swaps per theme reads a token instead: `--when-light` / `--when-dark` for
  display switching (see the header logomark and the toggle glyph), or a
  purpose-built token like `--clock-face-filter` for the hero dial.
