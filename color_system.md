# Portfolio Color System & Design Tokens Reference

This document serves as a quick-reference guide for the typography and layout color tokens utilized across the portfolio codebase.

## 1. Typography Hierarchy (The Hybrid Triad)

We utilize a **Hybrid Triad** system (`primary` → `secondary` → `muted`) to organize text contrast levels semantically without introducing transparent opacity levels.

| Utility Class | CSS Target Variable | Forest Light | Forest Dark | Intended Use Cases |
| :--- | :--- | :--- | :--- | :--- |
| **`text-primary`** | `var(--foreground)` | `#1A1F1C` | `#F2F7F4` | Headings, titles, and main content reading paragraphs. |
| **`text-secondary`** | `var(--muted)` | `#4A5450` | `#8A9E98` | Secondary labels, section headers, metadata titles (e.g. `Role`, `Timeline`), and subtitles. |
| **`text-muted`** | `var(--tertiary)` | `#8A9E98` | `#4A5450` | Faint decorative labels, low-priority timestamps, placeholder states, or "Next Project: Coming Soon" blocks. |

*Note: Avoid using transparency modifiers (e.g., `text-primary/80` or `text-secondary/50`) on body copy to ensure accessible contrast ratios and crisp subpixel font rendering.*

---

## 2. Layout & Surfaces

To prevent semantic confusion (such as using text tokens like `bg-primary` for panels), layout background fills and card surfaces use their own dedicated semantic classes:

| Utility Class | CSS Target Variable | Forest Light | Forest Dark | Intended Use Cases |
| :--- | :--- | :--- | :--- | :--- |
| **`bg-background`** | `var(--background)` | `#FAFBFB` | `#081A16` | The main global canvas/viewport backdrop. |
| **`bg-surface`** | `var(--surface)` | `#ffffff` | `#0D2621` | Floating dialogs, dropdowns, and card borders if card structure is layered. |
| **`bg-surface-inset`** | `var(--surface-inset)` | `#F1F4F3` | `#040D0B` | Solid, borderless card containers, badges, callout cards, and code block sections (Flat Land aesthetic). |
| **`border-border`** | `var(--border)` | `#D1DED8` | `#1A2E28` | Default thin dividers, borders, and system lines. |

---

## 3. Brand Accent

| Utility Class | CSS Target Variable | Forest Light / Dark | Intended Use Cases |
| :--- | :--- | :--- | :--- |
| **`text-brand`** / **`bg-brand`** | `var(--brand)` | `#1A9A5E` (Green) | Focus states, active indicators (e.g. `❯`), buttons, and links. |

---

## Example Usage in Code

### Context Sidebar Card:
```tsx
<div className="bg-surface-inset rounded-2xl p-5 space-y-4">
  <p className="text-mono font-mono text-[9px] uppercase text-secondary">
    Project Context
  </p>
  <div>
    <p className="text-mono font-mono text-[9px] uppercase text-secondary">
      Role
    </p>
    <p className="font-semibold text-primary">
      Lead Designer
    </p>
  </div>
</div>
```

### Main Heading & Content:
```tsx
<section className="space-y-4">
  <h2 className="text-mono text-secondary uppercase tracking-widest">
    The Problem
  </h2>
  <p className="text-body text-primary leading-relaxed">
    Detailed description of the problem hypothesis...
  </p>
</section>
```
