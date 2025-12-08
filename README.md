# Future Minds Academy Website

Marketing website for Future Minds Academy, a DepEd-recognized private preschool and elementary school in Mandaluyong City, Philippines. Celebrating 20 years of quality education (2005-2025).

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **Fonts:** Fraunces (display) + DM Sans (body)
- **Deployment:** Static export for Vercel

## Features

- 7 pages: Home, About, Academics, Admission, Events, Faculty, Contact
- Dark mode support
- Scroll animations
- 3D flip cards for programs
- Google Maps integration
- SEO optimized (sitemap, robots.txt, JSON-LD schema)
- Fully responsive (mobile, tablet, desktop)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npx serve out
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── page.tsx         # Home
│   ├── about/
│   ├── academics/
│   ├── admission/
│   ├── events/
│   ├── faculty/
│   └── contact/
├── components/
│   ├── layout/          # Header, Footer, Container
│   ├── shared/          # Reusable components
│   ├── ui/              # shadcn/ui components
│   └── providers/       # Theme, transitions
└── lib/
    ├── constants.ts     # School data
    └── utils.ts         # Utilities
```

## Design System

| Token | Value |
|-------|-------|
| Primary | Sky Blue `#0ea5e9` |
| Secondary | Amber `#f59e0b` |
| Background | `#f8fafc` |
| Border Radius | 16px |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Deploy automatically

### Manual

```bash
npm run build
# Upload `out/` folder to any static host
```

## License

Private - Future Minds Academy
