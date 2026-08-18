# Plan: readability & polish fixes

## Goal
Make the Experience section easier to scan, fix the track-section spacing, restore logo colors, and align the footer heading color with the other section headers.

## Changes

### 1. Redesign Experience as a vertical timeline
- Replace the current stacked list of companies with a vertical timeline.
- Left rail: company logo (original color) and date range.
- Right rail: company name, role title, and bullet points.
- Connect entries with a subtle vertical line using the `--rule` color.
- Keep all roles visible (no collapse/accordion) as requested.
- Tighten the vertical spacing between roles so the section feels shorter but still readable.
- Files: `src/components/site/Experience.tsx`

### 2. Balance track section top/bottom spacing
- The track cards currently have `pt-6`, which makes the top space larger than the bottom space.
- Remove the extra top padding from each track card so the top and bottom margins of the services section match.
- Files: `src/components/site/Expertise.tsx`

### 3. Restore original company logo colors in Experience
- The company logos are currently rendered with the `grayscale` utility.
- Remove `grayscale` so the original logo colors appear in the Experience section.
- Files: `src/components/site/Experience.tsx`

### 4. Match footer heading color to other section headers
- Change the "Let's figure out your next move." heading from `text-ink` to `text-rust` so it matches the rust-colored eyebrow headers used elsewhere.
- Files: `src/components/site/Footer.tsx`

## Verification
- Build the project and capture desktop + mobile screenshots of the Experience, services, and footer sections to confirm the changes.