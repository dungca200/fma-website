# FMA Website - Visuals & Animations Reference Guide

**Based on:** The Online School (Awwwards Winner)
**Color Scheme:** Sky Blue (#0ea5e9) + Amber (#f59e0b)
**Last Updated:** December 9, 2025

---

## 1. Animation Variants (Framer Motion)

### Fade Variants
```typescript
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } }
}

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

export const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

export const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

export const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}
```

### Scale Variants
```typescript
export const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
}

export const scaleUp = {
  initial: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.25 } }
}
```

### Slide Variants (Carousel)
```typescript
export const slideLeft = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] } },
  exit: { x: '-100%', opacity: 0, transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] } }
}

export const slideRight = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] } },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] } }
}
```

### Stagger Container
```typescript
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}
```

### Text Reveal
```typescript
export const textReveal = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}
```

---

## 2. Easing Curves

| Name | Value | Use Case |
|------|-------|----------|
| **easeOut** | `[0.16, 1, 0.3, 1]` | Primary smooth deceleration |
| **easeInOut** | `[0.65, 0, 0.35, 1]` | Page/carousel transitions |
| **spring** | `{ damping: 25, stiffness: 300 }` | Bouncy elements |
| **gentle** | `[0.4, 0, 0.2, 1]` | Subtle movements |

---

## 3. Duration Standards

| Use Case | Duration | CSS Variable |
|----------|----------|--------------|
| Micro-interaction | 150-200ms | `--duration-micro` |
| Hover state | 250-300ms | `--duration-hover` |
| Element transition | 400-500ms | `--duration-transition` |
| Scroll reveal | 600-700ms | `--duration-reveal` |
| Page transition | 400ms | `--duration-page` |
| Carousel slide | 500ms | `--duration-carousel` |

---

## 4. Component Animation Specs

### Hero Carousel
- **Slide transition:** 500ms, easeInOut
- **Text fade:** 400ms, stagger 100ms per line
- **Auto-advance:** 5000ms interval
- **Step indicator:** width morph 300ms
- **Background:** subtle parallax on scroll

### Numbered Cards
- **Scroll reveal:** fadeUp, stagger 100ms between cards
- **Hover:** translateY -6px, shadow increase, 250ms
- **Number:** gradient text (sky-400 to sky-600), slight scale on hover
- **Border:** subtle left border accent on hover

### Process Steps
- **Timeline line:** draws on scroll (SVG stroke-dashoffset)
- **Steps:** fadeRight, stagger 150ms
- **Icons:** scale bounce (1 → 1.1 → 1) on reveal
- **CTA buttons:** slide underline on hover

### Testimonial Carousel
- **Quote mark:** fadeIn with -10deg → 0deg rotation
- **Slide:** slideLeft/slideRight 500ms
- **Navigation dots:** scale 0.6 → 1 for active
- **Swipe gesture:** enabled with momentum

### Team Grid
- **Photo:** grayscale(100%) → grayscale(0%) on hover, 400ms
- **Card:** fadeUp with 80ms stagger
- **Name/role:** slideUp overlay on hover
- **LinkedIn icon:** scale 0 → 1 on card hover

### FAQ Accordion
- **Expand:** Framer Motion layout animation (height: auto)
- **Icon:** rotate 0deg → 180deg, 300ms
- **Content:** fadeIn 200ms after expand starts
- **Border:** accent color on open state

### Mobile Nav Overlay
- **Backdrop:** fadeIn 300ms with blur
- **Menu container:** clipPath circle expand from button
- **Links:** fadeUp with 50ms stagger
- **Close:** reverse animation sequence

### Page Transitions
- **Exit:** fadeOut + slight scale down (0.98)
- **Enter:** fadeIn + scale up (0.98 → 1)
- **Duration:** 400ms total

---

## 5. Color System (The Online School → FMA)

### Primary Palette
| TOS Pattern | FMA Color | HSL | Hex |
|-------------|-----------|-----|-----|
| Black backgrounds | Slate 900 | 222 47% 11% | #0f172a |
| Dark sections | Slate 800 | 217 33% 17% | #1e293b |
| White backgrounds | White/Slate 50 | 210 40% 98% | #f8fafc |
| Primary accent | Sky 500 | 199 89% 48% | #0ea5e9 |
| Secondary accent | Amber 500 | 38 92% 50% | #f59e0b |

### Gradient Usage
```css
/* Hero gradient overlay */
.hero-gradient {
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.9), rgba(2, 132, 199, 0.95));
}

/* Number gradient text */
.number-gradient {
  background: linear-gradient(135deg, #38bdf8, #0284c7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Card hover glow */
.card-glow:hover {
  box-shadow: 0 0 40px rgba(14, 165, 233, 0.15);
}
```

### Dark Mode Adaptations
| Element | Light | Dark |
|---------|-------|------|
| Background | slate-50 | slate-900 |
| Card bg | white | slate-800 |
| Text primary | slate-900 | slate-50 |
| Text muted | slate-500 | slate-400 |
| Border | slate-200 | slate-700 |
| Accent | sky-500 | sky-400 |

---

## 6. Typography Scale

### Display Sizes (Fraunces)
```css
--display-xl: clamp(3rem, 8vw, 5rem);      /* 48-80px - Hero headlines */
--display-lg: clamp(2.5rem, 6vw, 4rem);    /* 40-64px - Section titles */
--display-md: clamp(2rem, 4vw, 3rem);      /* 32-48px - Subsections */
--display-sm: clamp(1.5rem, 3vw, 2rem);    /* 24-32px - Card titles */
```

### Body Sizes (DM Sans)
```css
--text-xl: 1.5rem;     /* 24px - Lead paragraphs */
--text-lg: 1.25rem;    /* 20px - Body large */
--text-base: 1rem;     /* 16px - Body default */
--text-sm: 0.875rem;   /* 14px - Captions, meta */
--text-xs: 0.75rem;    /* 12px - Small labels */
```

### Typography Styles
| Style | Weight | Line Height | Letter Spacing |
|-------|--------|-------------|----------------|
| Display | 600-700 | 1.1-1.2 | -0.02em |
| Heading | 600 | 1.3 | -0.01em |
| Body | 400-500 | 1.6-1.7 | 0 |
| Caption | 400 | 1.5 | 0.01em |

---

## 7. Spacing System

### Section Spacing
```css
--section-py: clamp(80px, 12vw, 120px);     /* Section vertical padding */
--section-py-sm: clamp(60px, 8vw, 80px);    /* Compact sections */
--section-gap: clamp(48px, 8vw, 80px);      /* Between major sections */
```

### Component Spacing
```css
--container-px: clamp(16px, 4vw, 24px);     /* Container horizontal */
--container-max: 1200px;                     /* Max container width */
--gap-xl: 64px;    /* 4rem - Major component gaps */
--gap-lg: 48px;    /* 3rem - Section internal gaps */
--gap-md: 32px;    /* 2rem - Card/element gaps */
--gap-sm: 16px;    /* 1rem - Element spacing */
--gap-xs: 8px;     /* 0.5rem - Tight spacing */
```

### Grid System
```css
/* Desktop: 12-column grid */
.grid-cols-12 { grid-template-columns: repeat(12, 1fr); }

/* Common layouts */
.content-grid { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
.card-grid { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
```

---

## 8. Interaction States

### Buttons
```css
.btn-primary {
  /* Default */
  background: var(--sky-500);
  color: white;
  transform: scale(1);
  box-shadow: 0 4px 14px rgba(14, 165, 233, 0.25);
  transition: all 250ms var(--ease-out);

  /* Hover */
  &:hover {
    background: var(--sky-600);
    transform: scale(1.02);
    box-shadow: 0 6px 20px rgba(14, 165, 233, 0.35);
  }

  /* Active */
  &:active {
    background: var(--sky-700);
    transform: scale(0.98);
  }

  /* Focus */
  &:focus-visible {
    outline: none;
    ring: 2px solid var(--sky-500);
    ring-offset: 2px;
  }
}
```

### Links
```css
.link-animated {
  position: relative;
  color: var(--sky-500);

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: currentColor;
    transition: width 300ms var(--ease-out);
  }

  &:hover::after {
    width: 100%;
  }
}
```

### Cards
```css
.card-interactive {
  /* Default */
  background: white;
  border-radius: var(--radius-card-lg);
  box-shadow: var(--shadow-card);
  transition: all 300ms var(--ease-out);

  /* Hover */
  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-card-hover);
  }
}
```

### Inputs
```css
.input-styled {
  /* Default */
  border: 1px solid var(--slate-300);
  border-radius: var(--radius-md);
  transition: all 200ms ease;

  /* Focus */
  &:focus {
    border-color: var(--sky-500);
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
    outline: none;
  }
}
```

---

## 9. Scroll Behavior

### Reveal Threshold
```javascript
const scrollRevealConfig = {
  threshold: 0.15,        // 15% visible to trigger
  rootMargin: '-50px',    // Trigger slightly before viewport edge
  once: true,             // Animate only once
}
```

### Smooth Scroll
```css
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

### Parallax Speeds
| Element | Speed | Direction |
|---------|-------|-----------|
| Hero background | 0.3 | Slower than scroll |
| Floating shapes | 0.5 | Slower than scroll |
| Content sections | 1.0 | Normal |
| Decorative elements | 0.2-0.4 | Variable |

---

## 10. Performance Guidelines

### Animation Best Practices
- Use `transform` and `opacity` only (GPU-accelerated)
- Apply `will-change` sparingly, remove after animation
- Use Framer Motion's `layout` prop for size changes
- Debounce scroll listeners (passive: true)
- Reduce motion for `prefers-reduced-motion`

### Image Loading
- Use Next.js Image with blur placeholder
- Implement skeleton loading states
- Lazy load below-fold images
- Use WebP format where supported

### Code Splitting
- Dynamic import for carousel components
- Lazy load non-critical animations
- Prefetch linked pages on hover

---

## 11. Component Reference Quick Guide

| Component | File | Animation |
|-----------|------|-----------|
| HeroCarousel | `hero-carousel.tsx` | slideLeft/Right, auto-advance |
| NumberedCard | `numbered-card.tsx` | fadeUp stagger, hover lift |
| ProcessSteps | `process-steps.tsx` | line draw, fadeRight |
| TestimonialCarousel | `testimonial-carousel.tsx` | slide, swipe |
| TeamGrid | `team-grid.tsx` | fadeUp, grayscale hover |
| ScrollAnimation | `scroll-animation.tsx` | whileInView fadeUp |
| Header | `header.tsx` | mobile overlay expand |
| Accordion | `accordion.tsx` | layout height, rotate |

---

## 12. Z-Index Scale

```css
--z-background: -10;    /* Floating shapes, decorations */
--z-default: 0;         /* Normal content */
--z-elevated: 10;       /* Cards on hover */
--z-sticky: 50;         /* Sticky header */
--z-overlay: 100;       /* Mobile nav overlay */
--z-modal: 200;         /* Modals, dialogs */
--z-tooltip: 300;       /* Tooltips, popovers */
```

---

*This reference guide should be used during implementation to ensure consistency across all components and pages.*
