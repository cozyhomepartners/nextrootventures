# NextRoots Ventures — section ordering and track layout

Tighten the homepage: remove the track header, add a CTA under each track, limit each track to 5 bullets, move the social proof up, and halve section vertical spacing.

## Changes

1. **Expertise (tracks)** — `src/components/site/Expertise.tsx`
   - Remove the top eyebrow heading "Two practices, one operator" and the introductory paragraph.
   - Keep only the two track cards.
   - Trim the real estate track to 5 bullets by dropping the last item: "Tracking P&L and performance so you know if the portfolio is working" (let me know if a different bullet should be cut).
   - Add a "Free consultation" primary button below each track's bullet list, linking to the existing Calendly URL (`src/components/site/Header.tsx` CALENDLY constant).

2. **Section order** — `src/routes/index.tsx`
   - Reorder to: `Hero`, `Expertise`, `Logos`, `Testimonials`, `Process`, `Experience`, `Ventures`, `About`, `Footer`.

3. **Halve section vertical spacing** — all sections that use `py-20` become `py-10`; `Logos` (`py-14`) becomes `py-7`; `Hero` (`pt-24 pb-24`) becomes `pt-12 pb-12`. Inner card gaps stay as-is so the content doesn't crowd itself.

4. **Verify** — Playwright screenshots at desktop (1280px) and mobile (375px) widths.

## Unchanged

- Header navigation, footer, SEO metadata, JSON-LD, and favicon stay as they are now.
- Testimonial copy and company logos remain untouched.
