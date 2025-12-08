Use ultrathink and extended thinking

This is the process flow for claude code explained in a video:
<gemini_claude_code_instructions>
Here is a highly detailed analysis of the workflow presented in the video, followed by a specific prompt designed for Claude Code (or a Claude-based agent) to replicate this robust, iterative development process.

### **Detailed Analysis: The "Fixed" Claude Code Workflow**

The video addresses a critical failure mode in AI coding agents: **Context Window Saturation** and **Memory Compaction**. When agents attempt to build complex applications in one go ("one-shot"), they run out of context, "compact" (summarize) their memory, and lose track of specific implementation details, leading to half-finished features and untested code.

The solution proposed is an **Incremental, State-Based Development Workflow** inspired by real-world engineering teams. It shifts the burden of "memory" from the AI's limited context window to persistent external files (`git`, `json`, `markdown`).

#### **1. The Core Philosophy**

  * **Externalized State:** The AI does not rely on its internal conversation history to know what it has done. Instead, it reads the current state from the file system (`git logs`, `progress.md`, `features.json`).
  * **Atomic Feature Implementation:** Features are built strictly one by one. The AI must prove a feature works (via tests) before marking it complete and moving to the next.
  * **Git as a Save Point:** Every completed feature is a "save point." If the AI gets confused or crashes, you can restart a new session, and the AI simply reads the Git history to resume exactly where it left off.

#### **2. Key Infrastructure Components**

The workflow requires setting up four specific "artifacts" before coding begins:

  * **`CLAUDE.md` (The Brain):** A documentation file at the project root. It contains the high-level project overview, architectural decisions, and the "rules of engagement" for the AI.
  * **`features.json` (The Roadmap):** A structured JSON file listing every required feature.
      * **Structure:** Key-value pairs where keys are feature names/descriptions and values include testing steps and a boolean status (`done: false`).
      * **Why JSON?** It is token-efficient and easier for the AI to parse/update programmatically than Markdown checklists.
  * **`progress.md` (The Scoreboard):** A human-readable summary of what has been built, updated after every successful run.
  * **Testing Layer (Puppeteer/Scripts):** Since the AI cannot "see" the browser, a headless browser tool like Puppeteer is connected to allow the AI to verify frontend elements programmatically.

#### **3. The Execution Cycle**

Once the infrastructure is set, the AI enters a strict loop:

1.  **Read:** Check `features.json` for the first feature marked `false`.
2.  **Code:** Implement *only* that feature.
3.  **Test:** Run the specific test or Puppeteer script for that feature.
4.  **Verify:** If the test passes, update `features.json` (`false` $\to$ `true`) and `progress.md`.
5.  **Commit:** `git commit` the changes. This is crucial—it "locks in" the progress.
6.  **Repeat:** The user's next prompt is simply "Implement the next feature."

-----

### **Prompt for Claude Code**

Copy and paste this prompt into Claude Code (or your IDE with Claude integration) to initialize this workflow. This prompt acts as a "System Instruction" that forces Claude to set up the environment and adopt the iterative persona.

-----

**PROMPT:**

````markdown
You are an expert Senior Software Engineer acting as an autonomous coding agent. Your goal is to build a robust, production-ready application by following a strict, iterative development workflow designed to prevent context loss and ensure code quality.

### PHASE 1: INITIALIZATION
Before writing any application code, you must set up the project management infrastructure. Perform the following steps immediately:

1.  **Create `CLAUDE.md`**: In the root directory, create a file named `CLAUDE.md`. This file must contain:
    * **Project Overview**: A summary of what we are building.
    * **Tech Stack**: The languages and frameworks to be used.
    * **Guidelines**: A rule stating "Update `progress.md` and commit to Git after every single feature completion."

2.  **Create `features.json`**: Create a file named `features.json`. This will serve as your source of truth. It must contain a JSON array of objects, where each object represents a feature and follows this schema:
    ```json
    {
      "feature": "Name and brief description of the feature",
      "test_criteria": "Specific steps or automated checks to verify this feature works",
      "status": false
    }
    ```
    *Populate this list now based on the user's project request. Mark all statuses as `false` initially.*

3.  **Create `progress.md`**: Create a file named `progress.md` to track a human-readable history of completed tasks. Initialize it with a "Pending" status.

4.  **Initialize Git**: Run `git init` (if not already done) and create an initial commit with these setup files.

### PHASE 2: THE DEVELOPMENT LOOP
Once initialization is complete, you will adopt the following strict loop for all future interactions. Do not deviate from this process:

1.  **READ STATE**: Look at `features.json`. Find the *first* feature where `"status": false`. This is your ONLY task for the current turn.
2.  **IMPLEMENT**: Write the code necessary to implement this single feature. Do not attempt to build multiple features at once.
3.  **TEST**:
    * If a test script exists, run it.
    * If frontend (e.g., Next.js), use a headless browser script (like Puppeteer) or write a temporary test script to verify the feature works as intended.
    * *Do not mark the feature complete until you have verified it works.*
4.  **UPDATE STATE**:
    * Update `features.json`: Set the current feature's `"status": true`.
    * Update `progress.md`: Append a log entry confirming the feature is done.
5.  **COMMIT**: Run `git add .` and `git commit -m "feat: [Feature Name] - Implemented and Verified"`.
6.  **STOP**: Inform the user the feature is done and ask for permission to proceed to the next one.

**CURRENT TASK:**
Please start **Phase 1** now. Analyze the project request (if provided) or ask me for the project idea so you can generate the `features.json` list.
````
</gemini_claude_code_instructions>

Replicate the process for us on the project that we are working on.
Make sure to create the file needed and update the claude.md

# Notes
Create an Awwwards-level frontend design for Future Minds Academy

## Context
Read all files in `@context/` for school data:
- `website_content_final.md` - Page content, stats, SEO
- `future_minds_academy_research.md` - School data, history
- `additional_findings.md` - Events, affiliations, USPs
- `logo_future_minds_academy.jpg` - Logo of School

## Task
Build an English marketing website with:
- 7 pages: Home, About, Academics, Admission, Events, Faculty, Contact
- Static export (Next.js 14 App Router)
- Responsive design (desktop-first, then mobile)
- Formspree contact form
- Google Maps embed
- Follow `<gemini_claude_code_instructions>` workflow
- Update CLAUDE.md with project specifics

## Design Direction

### Reference Sites (Awwwards Winners)
1. **The Online School** (theonlineschool.com)
   - Minimalist, generous whitespace
   - Card-based modular layouts
   - Carousel-driven progressive disclosure
   - Neutral palette with accent CTAs
   - Testimonial showcases

2. **Learning by Design** (iamlearningbydesign.sg)
   - Soft educational color palette
   - Decorative SVG shapes with hover animations
   - Persona-based navigation
   - 3D card flip interactions
   - Approachable yet professional tone

### Design System

**Colors (School's Sky Blue Theme)**
| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#0ea5e9` Sky Blue | Headers, CTA buttons, links |
| Primary-dark | `#0284c7` Sky Blue Dark | Hover states, active |
| Primary-light | `#7dd3fc` Sky Blue Light | Backgrounds, accents |
| Secondary | `#f59e0b` Amber/Gold | Highlights, icons, badges |
| Background | `#f8fafc` Light gray | Page backgrounds |
| Surface | `#ffffff` White | Cards, panels |
| Text | `#0f172a` Slate 900 | Body text |
| Text-muted | `#64748b` Slate 500 | Secondary text |

**Typography**
| Element | Font | Weight | Size |
|---------|------|--------|------|
| Display | Fraunces | 600-700 | 48-72px |
| Headings | Fraunces | 500-600 | 24-36px |
| Body | DM Sans | 400 | 16-18px |
| Small | DM Sans | 400 | 14px |

### Key Design Patterns

**1. Hero Sections**
- Full-width with animated text rotation ("For future leaders" → "For curious minds" → "For strong foundations")
- Subtle gradient overlay on hero image
- Floating decorative shapes (circles, blobs) with parallax

**2. Card Systems**
- Rounded corners (16-24px radius)
- Soft shadows (`0 4px 20px rgba(0,0,0,0.08)`)
- Hover lift effect (translateY -4px, shadow increase)
- Optional 3D flip for program cards

**3. Whitespace Strategy**
- Section padding: 80-120px vertical
- Card gaps: 24-32px
- Generous line-height (1.6-1.8)
- Max content width: 1200px

**4. Interactive Elements**
- Carousel for testimonials/events (Swiper.js)
- Scroll-triggered fade-in animations (Framer Motion)
- Decorative SVG shapes with hover scale/rotate
- Smooth anchor scrolling

**5. Navigation**
- Sticky header with blur backdrop
- Mobile hamburger with slide-in drawer
- Clean desktop nav with hover dropdowns

**6. Persona-Based Sections**
- "For Parents" / "For Students" quick-link cards
- Icon + heading + short description format
- CTA arrow pointing to relevant page

### Component Library
Use shadcn/ui as base, customize:
- Button (primary/secondary/ghost variants)
- Card (default/interactive/flip)
- Carousel (testimonials, events)
- Accordion (FAQ, requirements)
- Form inputs (contact form)
- Badge (grade levels, status)
- Avatar (faculty photos)

### Animations (Framer Motion)
```tsx
// Fade up on scroll
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

// Stagger children
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

// Decorative shape hover
const shapeHover = {
  scale: 1.1,
  rotate: 15,
  transition: { type: "spring", stiffness: 300 }
}
```

### Page-Specific Notes

**Homepage**
- Hero: "Building Strong Foundations for 20 Years"
- Stats bar: 20+ years, DepEd Recognized, N-G6, 2,783+ community
- Program cards with icons (Preschool, Elementary)
- Testimonial carousel (placeholder testimonials)
- CTA section with Goldenberg Concert highlight

**About**
- Timeline visualization (2005 → 2025)
- Values cards (CEdNet, values-based education)
- School head photo + message section

**Academics**
- Two-column layout: Preschool | Elementary
- Curriculum accordion (K-12, MATATAG, Phonics)
- Grade level cards with progression arrows

**Admission**
- Requirements checklist with icons
- Contact card with map preview
- "Visit Us" CTA with landmark info

**Events**
- News cards in masonry/grid layout
- Featured: Goldenberg Concert with Manila Bulletin badge
- Activity calendar (quarterly events)

**Faculty**
- Grid of avatar cards
- Hover to reveal role/bio
- Placeholder pattern for missing staff

**Contact**
- Full Google Maps embed
- Contact form (Formspree)
- Social links + phone numbers
- Operating hours section

### Quality Checklist
- [ ] Lighthouse score > 90 (Performance, A11y, SEO)
- [ ] WCAG 2.1 AA compliance
- [ ] Responsive: 320px - 1920px+
- [ ] Dark mode ready (CSS variables)
- [ ] Print stylesheet for Admission page
- [ ] Image optimization (next/image, WebP)
- [ ] Proper meta tags for FB/Twitter cards