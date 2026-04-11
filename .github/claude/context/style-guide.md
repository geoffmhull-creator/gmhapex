# GMHAPEX.COM -- Style Guide
*Context file for Claude sessions. Read this alongside AGENT_BRIEF.md.*

---

## Color Palette

All colors are defined as CSS custom properties in `css/style.css` inside the `:root` block.
**Do not hardcode color values in HTML. Always use the CSS variable.**

| Variable | Hex | Usage |
|---|---|---|
| `--blue` | `#3a7ca5` | Primary accent, buttons, links |
| `--blue-dark` | `#2a5f82` | Hover states for blue elements |
| `--blue-light` | `#e8f2f9` | Background tints, card highlights, tags |
| `--green` | `#4a9b78` | Secondary accent, section labels, badge outlines |
| `--green-dark` | `#357a5d` | Hover states for green elements |
| `--green-light` | `#e8f5ee` | Problem statement backgrounds, green tints |
| `--text` | `#2d3748` | Primary body text |
| `--text-muted` | `#64748b` | Secondary text, captions, meta |
| `--text-light` | `#94a3b8` | Dates, tertiary labels |
| `--bg` | `#f8fafb` | Page background |
| `--bg-white` | `#ffffff` | Card and panel backgrounds |
| `--border` | `#e2e8f0` | All borders and dividers |
| `--heading` | `#1a2e3a` | All heading text, footer background |

**Standing rule:** Do not introduce new colors or modify these values without Geoff's explicit direction.

---

## Typography

- **Font family:** Arial, Helvetica, sans-serif (system font, no external dependencies)
- **Body weight:** 400 (regular)
- **Heading weight:** 600
- **Body line-height:** 1.7
- **Heading line-height:** 1.25
- **Letter spacing:** `-0.01em` on headings

### Type scale

| Element | Size |
|---|---|
| h1 | 2.5rem (hero h1: 2.75rem) |
| h2 | 1.875rem (section: 2rem) |
| h3 | 1.375rem |
| h4 | 1.125rem |
| Body | 1rem (16px base) |
| Meta / small | 0.8–0.875rem |
| Tags / labels | 0.75–0.8rem |

---

## Layout

- **Max content width:** 1080px (`.container`)
- **Narrow content width:** 740px (`.container--narrow`) -- used for all page bodies and blog posts
- **Section padding:** `4rem 0`
- **Card border-radius:** `8px`
- **Button border-radius:** `5px`

---

## Components

### Buttons
Three variants: `.btn--primary` (blue fill), `.btn--outline` (blue border), `.btn--green` (green fill).
Never create new button variants -- use these three.

### Cards
Base class: `.card`. Hover state adds blue border and soft shadow. Card icons are 44px squares with `--blue-light` background.

### Section headers
Use `.section-label` (small green uppercase text) above `.section-heading`. Add `.section-intro` for the lead paragraph.

### Tags
`.tag` class -- small blue pill. Used on blog cards and service blocks.

### Service blocks
`.service-block` -- used on consulting.html. Contains number badge, title, problem statement (blockquote styled), body text, and tag row. Do not change this structure without direction.

---

## Profile photo

- **File:** `img/geoff-hull.jpg`
- **Usage:** Hero (index.html), bio aside (about.html)
- **Shape:** Circle crop via `border-radius: 50%` and `object-fit: cover`
- **Hero size:** 220px diameter
- **Aside size:** fills the 180px header area of the bio card
- **Alt text:** "Geoff Hull"
- **og:image:** `https://gmhapex.com/img/geoff-hull.jpg` -- used on all pages

---

## Rules that never change

- Light theme only. No dark mode.
- No external fonts or font CDN imports.
- No framework CSS (no Bootstrap, Tailwind, etc.).
- Arial is the only font.
- All icons are Unicode characters or CSS shapes -- no icon fonts or SVG sprite sheets.
