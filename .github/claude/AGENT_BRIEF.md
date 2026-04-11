# GMHAPEX.COM -- COWORK AGENT BRIEF
**Version:** 1.0  
**Last Updated:** April 2026  
**Site:** gmhapex.com  
**Owner:** Geoff Hull

---

## AGENT INSTRUCTIONS -- FILE LOCATION

This file lives at `.github/claude/AGENT_BRIEF.md`. The `.github/` folder is never published by GitHub Pages, so this file is safe to keep in the repository without it being publicly accessible.

At the start of every Cowork session, read this file in full before taking any action. It is your source of truth for all decisions about this site. After each session, update the **Current Site State** section to reflect what was built, changed, or deferred.

Additional context files live alongside this one in `.github/claude/context/`:
- `style-guide.md` -- Visual style rules, color tokens, typography
- `architecture.md` -- File structure, path conventions, technical decisions

---

## AGENT CONTINUITY INSTRUCTIONS

You are the ongoing development and content agent for Geoff Hull's professional website at gmhapex.com. This is a static site hosted on GitHub Pages behind Cloudflare.

Your role across sessions is to extend and improve this site without regressing on decisions already made. This brief is your source of truth. Do not alter the visual style, code conventions, information architecture, or brand voice without being explicitly instructed to do so by Geoff.

At the start of every session:
1. Read this file in full before taking any action.
2. Note the Current Site State section so you understand what has already been built.
3. Clarify with Geoff if the session goal conflicts with any standing decision recorded here.
4. After completing the session, update the Current Site State section to reflect changes made.

---

## CURRENT SITE STATE

- **Version:** 1.2 -- moved served content into docs/, assets into docs/assets/; added .gitignore, CLAUDE.md
- **Last session:** April 2026 -- restructured to docs/ (GitHub Pages source); css/js/img moved to docs/assets/; added .gitignore, root CLAUDE.md (@ import), .github/claude/CLAUDE.md for Claude Code
- **GitHub Pages source:** `/docs/` folder (configure in repo Settings → Pages)
- **Pages live (all under docs/):**
  - `docs/index.html` -- Home / hero with value proposition, stat strip, service overview, about teaser, blog teaser
  - `docs/about.html` -- Full narrative bio with aside card and social links
  - `docs/consulting.html` -- Four service areas with full narratives, problem statements, and tag sets
  - `docs/opportunities.html` -- Three opportunity types: consulting, senior leadership, partnerships
  - `docs/connect.html` -- Social links (LinkedIn, email, Twitter/X) and contact guidance
  - `docs/blog/index.html` -- Blog listing page
  - `docs/blog/itsm-transformation.html` -- Post: "Why your ITSM transformation probably isn't an ITSM problem"
  - `docs/blog/ai-adoption-retail.html` -- Post: "What I learned about AI adoption from a retail operation with 40,000 employees"
  - `docs/blog/ai-consultant-question.html` -- Post: "The question every hiring manager should ask an AI consultant"
  - `docs/blog/template.html` -- Commented template for new blog posts
  - `docs/404.html` -- Custom GitHub Pages error page
- **Supporting files (all under docs/):**
  - `docs/assets/css/style.css` -- Full stylesheet (colors, layout, nav, cards, blog, footer)
  - `docs/assets/js/main.js` -- Vanilla JS (mobile nav, active link, smooth scroll)
  - `docs/assets/img/geoff-hull.jpg` -- Geoff's headshot; replace placeholder with real photo
  - `docs/robots.txt` -- All crawlers allowed, references sitemap
  - `docs/sitemap.xml` -- All 9 content pages indexed at https://gmhapex.com
  - `docs/llms.txt` -- Full machine-readable site summary for AI agents
- **Agent files (never published by GitHub Pages):**
  - `.github/claude/CLAUDE.md` -- Claude Code instructions (structured for Claude Code format)
  - `.github/claude/AGENT_BRIEF.md` -- This file; full project brief and history
  - `.github/claude/context/style-guide.md` -- Visual style reference
  - `.github/claude/context/architecture.md` -- File structure and technical conventions
- **Known issues:** None.
- **Roadmap / next session goals:** 
  - Configure GitHub Pages in repo Settings → Pages → Source: Deploy from branch, folder: /docs
  - Set up Cloudflare proxy for gmhapex.com pointing to GitHub Pages
  - Add new blog posts as Geoff writes them

---

## STANDING TECHNICAL RULES

These rules apply to every session without exception:

- All output must be static HTML, CSS, and vanilla JavaScript only. No frameworks, no build tools, no package managers.
- The site must work correctly on GitHub Pages and behind Cloudflare's proxy with full SSL.
- Use relative paths throughout. Base domain is gmhapex.com.
- Every page must include: a canonical URL tag, OpenGraph meta tags (og:title, og:description, og:url, og:type, og:image), and Twitter Card meta tags (summary_large_image).
- Every page must include JSON-LD structured data. Home and About use Person schema. The Consulting page uses ProfessionalService schema with the four service areas represented as hasOfferCatalog entries.
- robots.txt must allow all crawlers and reference sitemap.xml.
- sitemap.xml must include all pages and use https://gmhapex.com as the base URL. Update it whenever a new page is added.
- llms.txt is a first-class asset. It must be updated whenever new content, pages, or service areas are added. It should be substantive enough that an AI agent reading it could accurately represent Geoff's identity, background, and consulting offer without visiting any other page.
- A 404.html page must exist for GitHub Pages compatibility.
- Blog posts must be addable by duplicating a template HTML file and editing the content -- no build process required.
- Code must be clean, well-commented, and maintainable by a non-developer.

---

## GEOFF'S BRAND VOICE

Apply these rules to all content generated across every session -- pages, blog posts, meta descriptions, llms.txt, social copy, and any other text.

**Do:**
- Write in plain language that makes complex ideas feel approachable. This is the entire premise of Geoff's consulting practice.
- Use short sentences and active voice.
- Be confident and direct without being boastful.
- Be warm and human. Geoff is a collaborator, not a broadcaster.
- Ground claims in experience. Specificity earns trust.
- Write in second person when addressing the reader directly ("you", "your organization").
- Write in first person when Geoff is speaking ("I", "my approach", "what I've found").

**Do not:**
- Use corporate jargon or consultant-speak.
- Use hype words: revolutionary, cutting-edge, game-changing, world-class, synergize, leverage (as a verb), robust, seamlessly, holistic, unlock (overused -- use sparingly).
- Write in third person on pages addressed to the reader.
- Make claims that cannot be substantiated by Geoff's actual experience.
- Use em dashes. Use a double hyphen ( -- ) or restructure the sentence instead.
- Use bullet points as a substitute for real prose in narrative sections.

---

## AUDIENCE

The site serves three audiences. Content decisions should always specify which audience they are serving.

**Primary -- Hiring managers and enterprise clients**  
Evaluating Geoff for consulting engagements or senior technology leadership roles. They are busy, skeptical of hype, and looking for evidence of real experience and measurable outcomes. Copy for this audience should be specific, credible, and outcome-focused.

**Secondary -- Peer professionals and potential collaborators**  
IT and AI professionals who may want to partner with Geoff, refer work to him, or engage him in joint ventures. Copy for this audience can be more technical and collegial.

**Tertiary -- General professional network**  
Arriving via LinkedIn, social shares, or search. They may not know Geoff and need a fast, clear impression of who he is and what he offers. The Home and About pages are primarily for this audience.

---

## SITE ARCHITECTURE

### Pages and Their Purpose

| Page | Primary Audience | Purpose |
|---|---|---|
| Home / Hero | Tertiary, Primary | Fast value proposition. Who Geoff is and what he offers in under 10 seconds. |
| About | Tertiary | Full narrative bio. Warm, human, experience-led. |
| Consulting Services | Primary | Commercial heart of the site. Four service areas. |
| Opportunities | Primary, Secondary | Open invitation to engage -- hiring, consulting, collaboration. |
| Blog | All | Thought leadership. Extends reach to LinkedIn and social. |
| Connect | All | Social links and contact. |

---

## ABOUT GEOFF

Geoff Hull is a senior technology leader with 26 years of IT experience, 18 of those in management and the last 14 as a senior technology leader in large corporate companies spanning software, finance, and retail. He has extensive experience in M&A and large-scale innovation projects.

His passion is growing talent, leading automation initiatives, and unlocking business value. His current focus is building a consulting practice that removes the fear from AI and mechanization -- delivering easy, rapid, and sustainable business value to clients.

Geoff is a collaborator at heart. He takes pride in working with people who bring synergy and passion, and works fearlessly toward unlocking value. He is a proud father of two boys and a lover of sports and any competition that brings people together.

---

## CONSULTING SERVICES -- FOUR SERVICE AREAS

These four service areas are the core commercial offer. Each has a narrative, a problem statement, and a value proposition. Preserve this structure. New service areas can be added but existing ones should not be rewritten without Geoff's explicit direction.

---

### 1. IT Operations Transformation

**Problem this solves:**  
Most large enterprises are not short of technology. They are short of the operational leadership to make it work at scale -- sustainably, without disruption, and with outcomes that actually land on the bottom line.

**Geoff's narrative:**  
Geoff brings 26 years of hands-on IT leadership to organizations struggling to modernize their operations. He has navigated operational transformation from the inside -- across software, finance, and retail at global scale -- and through M&A environments where keeping operations stable while fundamentally changing them is a non-negotiable requirement.

AI-driven operations are no longer a future state. Enterprises are using generative models to power knowledge management, produce compliant documentation at scale, and run multi-agent systems that autonomously gather data, assess risk, and generate outputs. The gap is not the technology -- it is the operational leadership to adopt it responsibly and at pace.

Geoff's approach is built on what actually works: not pilots that never leave the lab, but sustainable operational change that delivers measurable outcomes. His engagements are grounded in honest assessment, workflow redesign before automation, and governance that makes the change stick.

**Emphasis:** Operational resilience, AI-native workflow design, automation that sticks, outcome-based delivery.

---

### 2. IT Service Management (ITSM)

**Problem this solves:**  
Organizations have the ITSM platform. What they lack is the leadership to transform it correctly -- and most are automating broken processes rather than redesigning for the new era of agentic AI.

**Geoff's narrative:**  
ITSM is at an inflection point. In 2026, it is no longer a ticket management function -- it is becoming a strategic discipline defined by AI, governance automation, and outcome-based service delivery. The platforms have caught up. The organizational maturity has not.

The results of getting this wrong are significant. Over 40% of agentic AI projects are expected to fail, primarily because organizations layer AI on top of processes that were never designed for it. The technology gets the blame. The real issue is process and leadership.

Geoff's ITSM consulting practice is built on a core principle: you cannot automate your way out of a process problem. He brings senior-level discipline to ITSM transformations -- assessing the current state honestly, redesigning workflows before applying AI, and building governance frameworks that make automation sustainable and auditable. His retail and financial services background means he has operated in high-volume, high-stakes service environments where downtime and poor service directly impact revenue.

**Emphasis:** ITSM maturity assessment, agentic AI readiness, governance-first automation, outcome-based service delivery.

---

### 3. Customer Service Transformation

**Problem this solves:**  
Customer service is where AI hype and business reality collide most visibly. The technology is moving faster than most organizations can absorb -- and the human and organizational dimensions are almost always underestimated.

**Geoff's narrative:**  
Geoff has led customer service operations at global scale in environments where the intersection of technology, people, and process determines whether customers stay or leave. He has seen what happens when AI is deployed into a customer service function without the change management to support it -- and he has seen what it looks like when it is done well.

The winning approach is not about deflection rates and ticket automation. It is about redesigning the entire service experience around what humans and AI each do best -- building complementary partnerships where the combined output exceeds what either could achieve alone. That requires honest workforce planning, real change management, and a leadership team willing to make difficult calls about roles and responsibilities.

Geoff helps organizations move from reactive service delivery to intelligent, proactive CX -- without losing the human quality that customers still demand.

**Emphasis:** AI-augmented agent design, customer journey redesign, change management, workforce transition planning, measurable CX outcomes.

---

### 4. Business Process Improvement

**Problem this solves:**  
Business process improvement is the foundation that all technology change rests on -- and it is the area most often skipped in the rush to deploy AI. Bad processes automated at scale are just bad processes running faster.

**Geoff's narrative:**  
Geoff's career has been built on finding value where others see friction. From M&A integrations -- where two sets of processes, systems, and cultures must be reconciled under time and commercial pressure -- to large-scale innovation programs in retail and financial services, he has consistently delivered measurable business outcomes by combining process rigor with pragmatic technology adoption.

His process consulting practice starts with honest discovery. Not a framework imposed from outside, but a genuine mapping of how work actually gets done, where value leaks, and where automation will accelerate outcomes versus where it will accelerate problems. The result is a clear roadmap: sequenced, resourced, and built for sustained delivery rather than a one-off improvement spike.

In an environment where clients increasingly expect partners who can implement, not just advise, Geoff brings both -- the strategic clarity to define the right path and the operational experience to walk it alongside his clients.

**Emphasis:** Process discovery and mapping, automation ROI assessment, M&A integration experience, change management, full cycle from diagnosis to sustained value delivery.

---

## CONTACT AND SOCIAL

- **LinkedIn:** https://www.linkedin.com/in/gmhull2025
- **Twitter/X:** @geoffmhull
- **Email:** geoff@gmhapex.com
- **Domain:** gmhapex.com *(registered with Cloudflare)*

---

## VISUAL STYLE GUIDE

| Property | Specification |
|---|---|
| Color palette | Greens and blues, light tones, professional |
| Primary font | Arial or clean Arial-family sans-serif |
| Weight | Light -- not bold or heavy |
| Theme | Light only. No dark mode. |
| Density | Just above minimal. Clean whitespace, subtle color accents. Not sparse, not loud. |
| Impression | Trustworthy, modern, approachable senior professional |

**Implemented colors (do not change without explicit direction):**
- Primary blue: `#3a7ca5` (--blue)
- Dark blue: `#2a5f82` (--blue-dark)
- Blue tint: `#e8f2f9` (--blue-light)
- Primary green: `#4a9b78` (--green)
- Dark green: `#357a5d` (--green-dark)
- Green tint: `#e8f5ee` (--green-light)
- Body text: `#2d3748` (--text)
- Muted text: `#64748b` (--text-muted)
- Heading: `#1a2e3a` (--heading)
- Background: `#f8fafb` (--bg)

Do not introduce new fonts, color palettes, or layout patterns without Geoff's explicit direction. Consistency across sessions is a priority.

---

## BLOG CONTENT STRATEGY

The blog is Geoff's primary thought leadership channel. Content generated here should be designed to share directly to LinkedIn and social media.

**Core themes -- use these to guide any blog content generated:**
- Taking the fear out of AI for enterprise leaders
- Practical lessons from IT operations and ITSM transformations
- The human side of automation -- workforce, change management, talent
- M&A technology integration war stories and lessons
- What good AI consulting actually looks like (vs. the hype)
- Leadership in technology -- growing talent, building teams, navigating complexity

**Format guidelines:**
- Posts should be 400-900 words. Geoff's audience is busy.
- Open with a specific observation or situation, not a broad statement.
- End with a clear point of view or practical takeaway.
- Avoid listicles as the primary format. Prose with occasional structure is preferred.
- Each post should naturally reinforce one of the four consulting service areas.

**To add a new blog post:**
1. Duplicate `blog/template.html` and rename it.
2. Fill in all [PLACEHOLDER] values.
3. Write post content inside `<article class="post-content">`.
4. Add a card for the post to `blog/index.html`.
5. Add the URL to `sitemap.xml`.
6. Update `llms.txt` with the new post title and URL.

---

## DECISION LOG

*(Record significant decisions here so future sessions do not relitigate them)*

| Decision | Rationale | Date |
|---|---|---|
| Static site only (HTML/CSS/JS) | GitHub Pages compatibility, no maintenance overhead, Cloudflare-friendly | April 2026 |
| Four consulting service areas | Covers Geoff's core experience: IT Ops, ITSM, Customer Service, BPI | April 2026 |
| llms.txt as first-class asset | Geoff's practice is AI consulting -- AI discoverability is on-brand and strategically important | April 2026 |
| No dark mode | Keeps scope clean for v1. Can be added later. | April 2026 |
| Blog via template HTML duplication | No build tools. Geoff can self-maintain without a developer. | April 2026 |
| Email placeholder strategy | geoff@gmhapex.com not yet active -- Cloudflare email routing pending | April 2026 |
| Color tokens in CSS custom properties | Single location to update palette if ever needed. All in css/style.css :root block. | April 2026 |
| Profile photo added | img/geoff-hull.jpg -- used in hero, bio aside, and og:image. Circle-cropped via CSS object-fit. | April 2026 |
| Agent brief moved to .github/claude/ | .github/ folder is never published by GitHub Pages regardless of Pages source setting. Context files split into context/ subdirectory. | April 2026 |

---

*End of GMHAPEX Agent Brief v1.0*
