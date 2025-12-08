- In all interactions and commit messages, be extremely concise and sacrifice
  grammar for the sake of concision.

## PR Comments

<pr-comment-rule>
When I say to add a comment to a PR with a TODO on it, use
'checkbox' markdown format to add the TODO. For instance:

<example>
- [ ] A description of the todo goes here
</example>
</pr-comment-rule>

- When tagging Claude in GitHub issues, use '@claude'

## GitHub
- Your primary method for interacting with GitHub should be the GitHub CLI.

## Plans
- At the end of each plan, give me a list of unresolved questions to answer,
  if any. Make the questions extremely concise. Sacrifice grammar for the sake
  of concision.

## Development Workflow

### State Files
- `features.json` - Source of truth for feature status
- `progress.md` - Human-readable completion log

### Execution Loop
1. Read `features.json`, find first `status: false` with met dependencies
2. Implement ONLY that feature
3. Smoke test (server runs, endpoint 200, page renders)
4. If pass: update `features.json` status → true
5. Append to `progress.md`
6. Git commit: `feat(track): description`
7. Stop, ask to continue

### Context Recovery
New session? Read `features.json` + `git log --oneline -20` to resume.

### Commit Convention
```
feat(backend): description
feat(frontend-public): description
feat(frontend-portal): description
```

### Track Priority (for dependency ordering)
1. setup (project foundation)
2. frontend-public (static site)

---

## Project: Future Minds Academy Website

### Overview
Awwwards-level marketing site for FMA, a private school in Mandaluyong (20 years, N-G6, DepEd recognized).

### Tech Stack
- Next.js 14 App Router (static export)
- Tailwind CSS + shadcn/ui
- Framer Motion, Swiper.js
- Formspree (contact), Google Maps Embed
- Vercel deployment

### Design System
- Primary: #0ea5e9 (Sky Blue)
- Secondary: #f59e0b (Amber)
- Fonts: Fraunces (display), DM Sans (body)
- Max width: 1200px, border-radius: 16-24px

### Pages (7)
Home, About, Academics, Admission, Events, Faculty, Contact

### Context Files
- `context/website_content_final.md` - Page copy, SEO
- `context/future_minds_academy_research.md` - History, contact
- `context/additional_findings.md` - Events, CEdNet
- `context/logo_future_minds_academy.jpg` - Logo

### Decisions
- Images: Unsplash education-themed
- Formspree: Placeholder (user configures later)
- Analytics: GA4 with placeholder ID

