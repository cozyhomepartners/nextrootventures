# Rebuild in the charleshsieh.com editorial style

Adopt the copy, structure and visual language of the fractional-sales-leadership page, while keeping your existing customer logos, testimonials and headshot.

## Design direction (taken from the reference page)

- Warm off-white paper background, near-black ink text, muted rust/terracotta accent used only for eyebrows, step numbers and small marks.
- Geometric grotesk typography (heading + body from the same family), large tight headline, generous line-height body at readable measure.
- No cards, shadows or gradients. Structure comes from hairline rules between sections, wide left-aligned columns and lots of whitespace.
- Simple sticky top bar: name on the left, "Home" + "Book a call ↗" on the right. Filled black primary button, outlined secondary.

This replaces the current navy/mint dark theme.

## Page structure

1. Header — "Charles Hsieh", nav, Book a call.
2. Hero — eyebrow "Fractional sales leadership", headline "A revenue leader who has done it four times, without the full-time hire", subhead, paragraph, two buttons (Calendly + Scale GTM).
3. Where I help — 2x2 text grid: First revenue from zero / Founder-led sales handoff / Pricing and packaging / Stalled growth reset.
4. How an engagement runs — four numbered steps 01–04: Diagnostic, Build, Hire and ramp, Hand off.
5. Track record — bulleted list of the five achievement lines.
6. Kept from current site: customer logo row (Coding Dojo, GrowingIO, Byteboard) and testimonials, restyled as quiet editorial quotes with no carousel chrome; headshot used in a short about block.
7. Footer — name, email/LinkedIn links, Calendly CTA, copyright.

## Technical notes

- Retheme `src/styles.css`: new oklch tokens for paper/ink/rust/rule, load the grotesk font family via `<link>` in `src/routes/__root.tsx`, drop navy/mint gradient utilities that are no longer used.
- Rewrite `Header.tsx`, `Hero.tsx`, `Expertise.tsx` (→ Where I help), `About.tsx` (→ Track record + about), `Footer.tsx`; simplify `Testimonials.tsx` to a static grid and drop the carousel dependency usage.
- Add a `Process.tsx` for the four-step engagement section and a `Logos.tsx` for the retained customer logos.
- Reuse existing `.asset.json` pointers for logos and headshot; retire the navy-specific decorative arrow/circuit images.
- Update the route `head()` title/description/OG tags to the fractional sales leadership positioning.
