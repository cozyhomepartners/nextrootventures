# Page cleanup, new logo, education, and tighter copy

## Brand
- Add the uploaded NextRoot Ventures horizontal SVG as the navbar logo (navy mark + wordmark), replacing the typographic "NextRoots Ventures" text lockup. Height ~28px desktop / 24px mobile. Footer keeps the same logo image instead of the text wordmark.

## Hero (more compact)
- Remove the "Two decades building and scaling revenue teams..." paragraph.
- Keep eyebrow, headline, one short intro line, and the two buttons.
- Shrink the photo: narrower column (about 0.6fr) with a max width ~320px, and reduce top/bottom padding.

## Experience section (layout + education)
- Move the date range out from under the logo: each company row becomes logo (left rail, timeline line through it) + right column with company name and the date range on the same baseline as the name, so dates stay on one line.
- Vertically center the right-hand text block against the logo so nothing floats above it.
- Add an "Education" block at the end of the timeline: University of Illinois Urbana-Champaign — BS, Electrical & Computer Engineering. Exact degree wording/years can be adjusted on request.

## Navigation
- Links: Services, Testimonials, Experience, Roofolio (external), Cozy Home (external). Remove Contact.
- "Testimonials" points to the combined logos/quotes section.
- Every in-page link scrolls so the section heading lands at the top (scroll-margin offset for the sticky header).

## Section order and structure
- New order: Hero, Tracks (Services), How an engagement runs, Companies I have worked with + What founders say, Experience, About.
- Recommended revisions for coherence:
  - Merge "Companies I have worked with" and "What founders say" into one Proof section (logos row on top, quotes below) so the Testimonials nav link has one target.
  - Cut testimonials shown from 4 to 3 strongest, and About down to two sentences, since About repeats what Experience already proves.

## Copy pass (tighter, no meaning lost)
- Tracks: trim each bullet to a single short line, drop redundant qualifiers.
- Engagement steps: one sentence per step.
- Footer: keep the rust heading, shorten the subline to one sentence.
- Hero, About, and section headings edited for concision throughout.

## Technical notes
- Files touched: `src/components/site/Header.tsx`, `Hero.tsx`, `Expertise.tsx`, `Process.tsx`, `Logos.tsx`, `Testimonials.tsx`, `Experience.tsx`, `About.tsx`, `Footer.tsx`, `src/routes/index.tsx`, `src/styles.css` (scroll-margin utility).
- Logo added via the asset pipeline and imported as an image; no layout library changes.
- Verify with desktop and mobile screenshots after the edits.
