# GMHAPEX.COM -- Site Architecture
*Context file for Claude sessions. Read this alongside AGENT_BRIEF.md.*

---

## Repository Structure

```
ghull/                              ← project root (GitHub repo root)
│
├── .github/                        ← never published by GitHub Pages
│   └── claude/
│       ├── CLAUDE.md               ← Claude Code instructions (read by Claude Code via root CLAUDE.md)
│       ├── AGENT_BRIEF.md          ← primary agent brief and project history (read this first)
│       └── context/
│           ├── style-guide.md      ← colors, typography, components
│           └── architecture.md     ← this file
│
├── docs/                           ← GitHub Pages source (all published content lives here)
│   │
│   ├── assets/                     ← all static assets
│   │   ├── css/style.css           ← single stylesheet, CSS custom properties
│   │   ├── js/main.js              ← vanilla JS: mobile nav, active links, smooth scroll
│   │   └── img/
│   │       └── geoff-hull.jpg      ← Geoff's headshot (replace placeholder with real photo)
│   │
│   ├── blog/
│   │   ├── index.html              ← blog listing page
│   │   ├── template.html           ← copy this to add a new post
│   │   ├── itsm-transformation.html
│   │   ├── ai-adoption-retail.html
│   │   └── ai-consultant-question.html
│   │
│   ├── index.html                  ← home page
│   ├── about.html
│   ├── consulting.html
│   ├── opportunities.html
│   ├── connect.html
│   ├── 404.html                    ← required for GitHub Pages custom 404
│   ├── robots.txt                  ← allows all crawlers, references sitemap.xml
│   ├── sitemap.xml                 ← all content pages, base URL https://gmhapex.com
│   └── llms.txt                    ← machine-readable site summary for AI agents
│
├── CLAUDE.md                       ← root Claude Code entry point; imports .github/claude/CLAUDE.md via @
├── AGENT_BRIEF.md                  ← pointer only, redirects to .github/claude/AGENT_BRIEF.md
└── .gitignore
```

---

## Path Conventions

### Root-level pages (`docs/*.html`)
- CSS: `href="assets/css/style.css"`
- JS: `src="assets/js/main.js"`
- Images: `src="assets/img/geoff-hull.jpg"`
- Nav links: `href="about.html"`, `href="blog/index.html"`, etc.

### Blog posts (`docs/blog/*.html`)
- CSS: `href="../assets/css/style.css"`
- JS: `src="../assets/js/main.js"`
- Images: `src="../assets/img/geoff-hull.jpg"`
- Nav links: `href="../about.html"`, `href="index.html"` (blog index), etc.

### og:image and twitter:image (all pages)
Always use the full absolute URL:
`https://gmhapex.com/assets/img/geoff-hull.jpg`

**Rule:** Always use relative paths in `href`/`src`. Never use the domain name or absolute paths
in asset references. The only exceptions are og:image and twitter:image, which require
absolute URLs for social crawlers.

---

## GitHub Pages Configuration

- **Hosting:** GitHub Pages
- **Source folder:** `/docs/`
- **Configure in:** Repository Settings → Pages → Source: Deploy from branch → Branch: main, Folder: /docs
- **Behind Cloudflare:** Yes -- full SSL proxy. Cloudflare handles HTTPS at the edge.
- **The `.github/` folder** is never served by GitHub Pages regardless of source configuration.

---

## Page Requirements Checklist

Every HTML page must have:
- [ ] `<meta charset="UTF-8">`
- [ ] `<meta name="viewport" ...>`
- [ ] `<title>` -- unique per page
- [ ] `<meta name="description">` -- unique per page
- [ ] `<link rel="canonical" href="https://gmhapex.com/[path]">`
- [ ] OpenGraph: `og:title`, `og:description`, `og:url`, `og:type`, `og:image`
- [ ] Twitter Card: `twitter:card`, `twitter:site`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] `<script type="application/ld+json">` -- appropriate schema type (see table below)
- [ ] `<link rel="stylesheet" href="[path]/assets/css/style.css">`
- [ ] Standard nav with all six links + mobile toggle button
- [ ] Standard footer with nav links + email placeholder comment
- [ ] `<script src="[path]/assets/js/main.js">` at end of body

---

## Schema Types by Page

| Page | JSON-LD Schema Type |
|---|---|
| index.html | `Person` |
| about.html | `Person` |
| consulting.html | `ProfessionalService` with `hasOfferCatalog` (four service areas) |
| opportunities.html | `WebPage` |
| connect.html | `ContactPage` |
| blog/index.html | `Blog` |
| blog/*.html | `BlogPosting` |
| 404.html | none (`<meta name="robots" content="noindex">`) |

---

## Email Placeholder

`geoffmhull@gmail.com` is temporary. Every HTML file footer has this comment above the email link:

```html
<!-- EMAIL PLACEHOLDER: Replace geoffmhull@gmail.com with geoff@gmhapex.com once Cloudflare email routing is live -->
```

`connect.html` also has the email address in the main body content.

To find all instances: `grep -rn "EMAIL PLACEHOLDER" docs/ --include="*.html"`

---

## Adding a Blog Post

1. `cp docs/blog/template.html docs/blog/your-post-slug.html`
2. Replace all `[PLACEHOLDER]` values in the new file
3. Write content inside `<article class="post-content">` -- 400-900 words
4. Add a card to `docs/blog/index.html` (follow the existing card pattern)
5. Add `<url>` block to `docs/sitemap.xml` (copy existing, update `<loc>` and `<lastmod>`)
6. Add post title and URL to `docs/llms.txt` (Published posts section)
7. Update Current Site State in `.github/claude/AGENT_BRIEF.md`

---

## Updating the Sitemap

`docs/sitemap.xml` uses `https://gmhapex.com` as the base URL.
Update `<lastmod>` dates on changed pages. Add new `<url>` blocks for new pages.
Blog listing uses `changefreq: weekly`. Individual posts use `changefreq: yearly`.

---

## llms.txt

`docs/llms.txt` is a first-class asset. An AI agent reading only this file should be able to
accurately represent: who Geoff is, what his consulting practice covers, what opportunities he
is open to, how to contact him, and what blog posts exist.

Update whenever: a new page is added, a new post is published, a service area changes, or
contact information changes.

---

## Future Build Tool Migration

If a static site generator is ever adopted (Eleventy, Astro, Hugo, etc.):
- The generator's source files go at the project root (alongside `.github/`, `CLAUDE.md`, etc.)
- The generator should output to `docs/` -- GitHub Pages source stays the same
- Update `.gitignore` to exclude build cache and intermediate files
- Update this file and AGENT_BRIEF.md to reflect the new build process
- The `docs/` folder becomes generated output rather than hand-authored source
