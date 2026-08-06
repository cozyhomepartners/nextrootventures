# Logos, footer heading, hero image, hero headline

## 1. Replace three logos
Swap the current Pebblous, Welcome, and Zabal Media marks for the newly uploaded files (uploaded as CDN assets). Zabal's upload is white-on-dark, so it renders on a small dark chip so it stays legible on the paper background; Pebblous and Welcome are monochromed like the rest of the row.

## 2. Footer heading spans the page
"Prove the motion before you hire for it." currently wraps at roughly half width. Widen its max width so it runs across the content column as one confident line (wrapping only on narrow screens).

## 3. Family photo in the hero
Add the uploaded family portrait to the hero as a two-column layout on desktop: copy and CTAs left, photo right (portrait crop, subtle rounded/rule treatment to match the editorial style). On mobile it stacks below the copy. Uploaded via the assets CDN.

## 4. Simpler hero headline
Drop the "four times" callout and shorten. Proposed:

- H1: "Sales leadership for founders, without the full-time hire"
- Sub: "Fractional VP of Sales and GTM leadership for seed to Series B."
- The longer "Most startups hire a VP of Sales too early..." paragraph stays as supporting copy.

If you'd rather have a different headline, say the words and I'll use them verbatim.

## Technical notes
- `src/components/site/Hero.tsx`: grid layout, new headline copy, image import.
- `src/components/site/Footer.tsx`: heading max-width.
- `src/components/site/Logos.tsx`: point Zabal/Welcome/Pebblous at new asset pointers; per-logo styling flag for the dark Zabal mark.
- New `.asset.json` pointers in `src/assets`; old unused pointers removed.
