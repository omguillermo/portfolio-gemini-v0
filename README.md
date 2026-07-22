# Portfolio — Omar Guillermo

Personal portfolio built as a high-density **Designer-Engineer Console**. Next.js 16 / React 19 / Tailwind CSS 4 / Framer Motion.

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16.2 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS 4 (`@tailwindcss/postcss`) |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Analytics | Vercel Analytics |
| Language | TypeScript 5 |

> **Note:** This uses Next.js 16 — APIs and conventions may differ significantly from the Next.js you know. Read `node_modules/next/dist/docs/` before touching framework-level code.

---

## Dev

```bash
npm run dev    # starts dev server (webpack mode)
npm run build  # production build
npm run lint   # eslint
```

Opens at [http://localhost:3000](http://localhost:3000).

---

## Routes

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Homepage — hero, projects, skills, testimonials, CTA strip |
| `/about` | `app/about/page.tsx` | Web resume — career timeline with expandable accordions |
| `/case-studies/[slug]` | `app/case-studies/[slug]/page.tsx` | Dynamic case study pages |

---

## Data Layer

All project/case study content lives in a single source of truth:

**`data/projects.ts`** — exports `projectsData`, an array of `ProjectData` objects.

To add a case study:
1. Add a new entry to `projectsData` in `data/projects.ts`.
2. Set a unique `slug` — this becomes the URL (`/case-studies/[slug]`).
3. Add any supporting images to `public/`.
4. The dynamic route `app/case-studies/[slug]/page.tsx` will pick it up automatically.

---

## Theme System

Themes are applied via a `data-brand` attribute on `<html>`. The initializer script runs before hydration (in `app/layout.tsx` via `<Script strategy="beforeInteractive">`) to prevent flash.

| `data-brand` value | Name | Accent |
|---|---|---|
| *(default)* | Forest | `#1A9A5E` (green) |
| `crimson` | Crimson | `#D92626` (red) |
| `electric-blue` | Electric Blue | `#2667D9` (blue) |
| `royal-purple` | Royal Purple | `#8A26D9` (purple) |

All color tokens are CSS custom properties defined in `app/globals.css`. See `color_system.md` for the full token reference and usage rules.

---

## Key Design Rules

- **No transparent surfaces** on cards/widgets — always use solid `bg-surface-inset` or `bg-surface`.
- **Dot grid** background (`radial-gradient`) is intentionally **disabled** in `globals.css`. Kept commented as a reference; do not re-enable.
- **`/` heading separators** (`01 / Projects`) only on major homepage section headings — never in nav, tags, or case study subheadings.
- See `design.md` for the full design system reference and `color_system.md` for token usage.
