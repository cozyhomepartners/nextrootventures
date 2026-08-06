# Section headers back to eyebrow style + more customer logos

## 1. Section headers
- Revert every section header to the previous small uppercase eyebrow treatment (muted ink color, wide letter-spacing) instead of the large h2 headline.
- Bump the size slightly so it reads at roughly h3 scale rather than caption scale, keeping the same font, weight, uppercase styling and color.
- Applies to: Where I help, How an engagement runs, Track record, Companies I have worked with, What founders say.

## 2. More logos in "Companies I have worked with"
Add four logos alongside the existing GrowingIO, Byteboard and Coding Dojo marks:
- Zabal Media
- Pathrise
- Welcome (experiencewelcome.com)
- Pebblous.ai (pebblous.ai)

Approach: pull each company's official logo from its website, upload it as a CDN-hosted asset in the project, and render it in the same monochrome row treatment so all seven marks look consistent in size and weight. If a usable logo file cannot be retrieved for one of them, that company renders as a clean wordmark in the site's own type instead, and I will say which ones fell back.

## Technical notes
- `src/styles.css`: restore/adjust the eyebrow utility sizing; remove the `section-title` utility.
- `src/components/site/Expertise.tsx`, `Process.tsx`, `About.tsx`, `Logos.tsx`, `Testimonials.tsx`: swap the h2 back to the eyebrow element (kept as an `h2` tag for document structure, styled as an eyebrow).
- New logo files uploaded via the assets CLI into `src/assets/*.asset.json` and wired into the `Logos` array.
