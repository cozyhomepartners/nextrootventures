# NextRoots Ventures — rebrand and rebuild

Turn the Scale GTM site into **NextRoots Ventures**, a parent brand with two consulting tracks: tech go-to-market and real estate investing. One page, current editorial design kept, typographic wordmark.

## Page structure (single page)

1. **Header** — "NextRoots Ventures" typographic wordmark, anchor links (Services, Experience, Ventures, Contact), Free consultation CTA.
2. **Hero** — NextRoots positioning: two decades building revenue teams plus hands-on real estate investing. Family photo retained. CTAs: Free consultation (Calendly) + LinkedIn.
3. **Two service tracks** — side-by-side cards:
   - *Tech GTM consulting*: V1 playbooks, pricing and packaging, first sales hires, prove the motion before you hire for it.
   - *Real estate consulting*: how to get started in real estate investing — first deal, market and property selection, underwriting basics, financing, self-managing vs. property manager, P&L tracking.
4. **How engagements work** — reuse the existing 4-step process, worded to cover both tracks.
5. **Experience** — pulled from charleshsieh.com: Blind (Advisor to CEO; VP Sales & Product NA, $0→$6M ARR), Switchboard ($4M ARR), Google (Workspace Essentials $0→$8M; Hire by Google $0→$25M, 50-person global team), HackerRank, LinkedIn (President's Club 2010–12, Global Rep of the Year), Agilent, United Technologies. Compact list with company icons.
6. **Ventures** — Roofolio (roofolio.ai), Cozy Home (cozyhomepartners.com), Scale GTM (now the GTM practice inside NextRoots), VacayBug.
7. **About** — Taiwan → Illinois engineering → two decades in revenue → husband and father of two in San Francisco; engineering background, works across cross-functional teams.
8. **Companies I've worked with** — existing single-row logo strip unchanged.
9. **Testimonials** — existing quotes unchanged.
10. **Footer** — NextRoots wordmark, Free consultation + LinkedIn, email.

## Content sourcing

- Experience, about copy and ventures come from charleshsieh.com (already fetched).
- Cozy Home and Roofolio descriptions are sourced from the ventures section of that page plus the snapshots of those two Lovable projects, so the wording matches each product.
- Testimonials and customer logos stay exactly as they are today.

## Technical notes

- Design tokens in `src/styles.css` unchanged (paper / ink / rust, Space Grotesk).
- Rewrite `Hero.tsx`, `Expertise.tsx` (becomes two service tracks), `Process.tsx`, `About.tsx`, `Header.tsx`, `Footer.tsx`; add `Experience.tsx` and `Ventures.tsx`; `Logos.tsx` and `Testimonials.tsx` untouched.
- Header/footer switch from the Scale GTM SVG to a type-set "NextRoots Ventures" wordmark; the SVG asset stays in the repo for later.
- `src/routes/index.tsx`: new title/description/OG for NextRoots Ventures, canonical stays `https://tryscalegtm.com/`, JSON-LD updated to an Organization (NextRoots Ventures) plus Person (Charles Hsieh) and two Service entries (GTM consulting, real estate investing consulting).
- Company logos for the experience section are loaded from the icon URLs on charleshsieh.com, downloaded into `src/assets` so nothing hotlinks.
- Verify with a Playwright screenshot pass at desktop and mobile widths.

## Not included

- No domain change; the site keeps serving tryscalegtm.com until you point a NextRoots domain at it.
- No custom logo artwork (typographic wordmark until you upload one).
