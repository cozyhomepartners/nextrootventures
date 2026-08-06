# Copy and layout refinements

## 1. CTAs (Hero + Footer)
- Primary button label: "Book a 30-minute call" -> "Free consultation" (same Calendly link).
- Secondary button: "Scale GTM ↗" -> "LinkedIn ↗", linking to https://www.linkedin.com/in/charleschsieh/.
- Header nav "Book a call ↗" stays as-is unless you want it renamed too.

## 2. Bigger section headers
Each section keeps its small uppercase eyebrow but gains a real, larger heading treatment:
- Eyebrow labels move up in size/weight slightly.
- Section titles ("Where I help", "How an engagement runs", "Track record", "What founders say", "Companies I have worked with") render as prominent h2-scale headings in ink, so sections read clearly when scanning.

## 3. Move the bio, drop the photo
- Remove the profile picture from Track record; that section becomes a single full-width list.
- The "I am Charles Hsieh, a four-time revenue leader..." paragraph moves into the "Where I help" section as an intro paragraph above the 2x2 grid.

## 4. + 5. Track record wording
- "President's Club and Global Rep of the Year at LinkedIn" -> "Consistent President's Club recipient as both an IC and a manager"
- "Engineering background, fluent with product and technical buyers" -> "Engineering background: fluent with technical buyers and effective across cross-functional teams"

## 6. Testimonial attribution
- "Wilian Iralzabal — Founder" -> "Wilian Iralzabal — Founder, Zabal Media"

## 7. Favicon and description
- Keep the existing favicon (public/favicon.png) wired in the root head.
- Confirm/tighten the meta description used for search and link previews: "Charles Hsieh — fractional VP of Sales for seed to Series B founders. Prove the motion, build the playbook, hire the team, hand it over."

## Technical notes
- Files touched: `src/components/site/Hero.tsx`, `Footer.tsx`, `About.tsx`, `Expertise.tsx`, `Process.tsx`, `Logos.tsx`, `Testimonials.tsx`, `src/styles.css` (heading/eyebrow utilities), `src/routes/index.tsx` + `__root.tsx` (meta description).
- The now-unused profile image asset stays in `src/assets` but is no longer imported.
