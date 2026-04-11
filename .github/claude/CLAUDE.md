# CLAUDE.md -- gmhapex.com
# Instructions for Claude Code sessions on this project.
# Owner: Geoff Hull | Site: gmhapex.com

## Start of session

Read `.github/claude/AGENT_BRIEF.md` before doing anything else. It is the source of truth
for all decisions about this site. After completing work, update the **Current Site State**
section of that file to reflect what changed.

Also available for reference:
- `.github/claude/context/style-guide.md` -- colors, typography, component rules
- `.github/claude/context/architecture.md` -- file structure, path conventions, page checklist


## What this project is

Static HTML/CSS/JS site for Geoff Hull, IT and AI consultant. Hosted on GitHub Pages
(source: `/docs/` folder), behind Cloudflare. No build tools, no frameworks, no package managers.
The site may eventually be generated (Eleventy, Astro, etc.) but is hand-authored for now.


## File structure

```
docs/                        ← GitHub Pages source (everything served lives here)
├── index.html
├── about.html
├── consulting.html
├── opportunities.html
├── connect.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── llms.txt
├── assets/
│   ├── css/style.css        ← all styles, single file
│   ├── js/main.js           ← vanilla JS only
│   └── img/geoff-hull.jpg   ← Geoff's headshot
└── blog/
    ├── index.html
    ├── template.html        ← duplicate this for new posts
    └── *.html               ← individual posts

.github/claude/              ← never published by GitHub Pages
├── CLAUDE.md                ← this file
├── AGENT_BRIEF.md           ← full project brief and history
└── context/
    ├── style-guide.md
    └── architecture.md

.gitignore
CLAUDE.md                    ← root pointer: imports this file via @
AGENT_BRIEF.md               ← root pointer only, redirects to .github/claude/
```


## Path rules

Root pages (`docs/*.html`):
- CSS: `assets/css/style.css`
- JS: `assets/js/main.js`
- Images: `assets/img/geoff-hull.jpg`

Blog pages (`docs/blog/*.html`):
- CSS: `../assets/css/style.css`
- JS: `../assets/js/main.js`
- Images: `../assets/img/geoff-hull.jpg`

Never use absolute paths in `href` or `src`. og:image and twitter:image use
`https://gmhapex.com/assets/img/geoff-hull.jpg` (absolute, for social crawlers).


## Technical rules -- no exceptions

- Static HTML, CSS, and vanilla JavaScript only. No frameworks, no build tools, no npm.
- Every page must have: canonical tag, OpenGraph tags (title/description/url/type/image),
  Twitter Card tags, and JSON-LD structured data. See architecture.md for schema types per page.
- `robots.txt` allows all crawlers and references `sitemap.xml`.
- `sitemap.xml` uses `https://gmhapex.com` base URL. Add new pages here when created.
- `llms.txt` is a first-class asset -- update it whenever new content or pages are added.
- `404.html` must exist (GitHub Pages requirement).
- Blog posts are added by duplicating `docs/blog/template.html`. No build process.
- Code must be clean, well-commented, and maintainable by a non-developer.


## Email placeholder

`geoffmhull@gmail.com` is a temporary address. Every HTML footer and the connect page body
has this comment directly above the email link:

```html
<!-- EMAIL PLACEHOLDER: Replace geoffmhull@gmail.com with geoff@gmhapex.com once Cloudflare email routing is live -->
```

To find all instances: `grep -rn "EMAIL PLACEHOLDER" docs/ --include="*.html"`


## Brand voice -- apply to all content

**Do:** Plain language. Short sentences. Active voice. Confident but not boastful. Warm and human.
First person when Geoff is speaking ("I", "my approach"). Second person when addressing the reader
("you", "your organisation"). Ground claims in specific experience.

**Do not:** Jargon. Hype words (revolutionary, cutting-edge, game-changing, world-class, seamlessly,
holistic). Third person on reader-addressed pages. Em dashes (use double hyphen -- instead).
Bullet points in narrative/prose sections.


## Visual style -- do not change without explicit direction

- Font: Arial (system font, no imports)
- Colors: defined as CSS custom properties in `docs/assets/css/style.css` `:root` block
- Primary blue `#3a7ca5`, secondary green `#4a9b78`, light backgrounds, dark heading `#1a2e3a`
- Light theme only. No dark mode.
- No external fonts, icon fonts, or CSS frameworks.


## Adding a blog post

1. `cp docs/blog/template.html docs/blog/your-post-slug.html`
2. Replace all `[PLACEHOLDER]` values
3. Write content inside `<article class="post-content">`
4. Add card to `docs/blog/index.html`
5. Add URL to `docs/sitemap.xml`
6. Update `docs/llms.txt` (Published posts section)
7. Update Current Site State in `.github/claude/AGENT_BRIEF.md`


## Consulting service anchors (consulting.html)

`#it-ops` | `#itsm` | `#cx` | `#bpi`


## Key audiences (affects tone/content decisions)

- **Primary:** Hiring managers and enterprise clients -- specific, credible, outcome-focused
- **Secondary:** Peer professionals and collaborators -- more technical, collegial
- **Tertiary:** General professional network (LinkedIn traffic) -- fast, clear first impression
