# Master Portfolio System Rules & Governance

This document serves as the master specification for building, redesigning, and maintaining the portfolio. Any AI assistant or developer remixing or re-implementing this portfolio MUST follow these three core pillars.

---

## Pillar 1: Design System & Architectural Rules

### 1. Token-Based Architecture (No Hardcoding)
* **Design Tokens:** All layout properties, typography sizes, colors, radiuses, and spacing scales must be driven by design system tokens (CSS Custom Properties / Tailwind theme values).
* **Zero Hardcoded Styles:** Never hardcode raw hex colors (e.g. `#1A9A5E`), magic pixel offsets (e.g. `top-[13px]`), or inline inline typography styling within components. Use defined CSS variables (`var(--brand)`, `var(--surface)`, `var(--radius)`).
* **Theme & Mode Switching:** The UI must support global theme/mode switching (e.g. `data-brand` or dark/light modes) via semantic color aliases (`--background`, `--foreground`, `--surface`, `--border`, `--muted`, `--brand`).

### 2. Standardized Component Library
All pages must be assembled using modular, re-usable components:
* **Inputs & Controls:** Standardized form fields, buttons, switches, chips, and dropdowns.
* **Overlays & Drawers:** Modals, floating drawers, tooltips, and popovers.
* **Containers:** Cards, data tables, accordions, and system banners.
* **Component Encapsulation:** Components must receive data via typed props or parsed markdown, avoiding tight coupling to specific page logic.

### 3. Responsive & Accessible Foundations
* **Fluid Layouts:** Use responsive grid/flex layouts (`grid-cols-1 md:grid-cols-2`) and viewport clamps rather than fixed pixel widths.
* **Keyboard & Screen Reader Support:** All interactive elements (accordions, tabs, modals, terminals) must support keyboard navigation (`Tab`, `Enter`, `Escape`, `Arrow keys`) and proper ARIA labels.

---

## Pillar 2: Content Decoupling & Portability

### 1. Separation of Content and View
* **No Hardcoded Page Copy:** Web pages (`app/page.tsx`, `app/about/page.tsx`, `app/case-studies/[slug]/page.tsx`) must serve as visual layout shells that import and parse data from external sources (`content/*.md` or `data/*.ts`).
* **Portable Markdown Engine:** All narrative content (case studies, bio, career timeline, testimonials, homepage copy) lives in standard Markdown files within `content/`.

### 2. 100% Verbatim Synchronization
* Any structured data object (`data/projects.ts`) and standalone markdown file (`content/case-studies/[slug].md`) **MUST match 100% verbatim, word-for-word** across all corresponding sections (`Overview`, `The Problem Space`, `Hypothesis`, `Constraints`, `Design Iterations`, `Solution`, `Edge Cases`, `Outcomes`, `Retrospective`).

---

## Pillar 3: Voice, Tone & Copywriting Guidelines

### 1. Authentic First-Person Narrative
* **Use "I"** for individual design choices, user research, wireframing, and execution.
* **Use "We"** for cross-functional engineering collaboration, trade-offs, and business decisions made with stakeholders.
* **Active Voice Only:** State actions clearly and directly. Avoid passive corporate phrasing (e.g. *✅ "I interviewed 5 merchants" vs ❌ "User research was conducted"*).

### 2. Banned "AI Tells" & Structural Gimmicks
Do NOT use the following writing crutches:
* ❌ **No "It's not X, it's Y" Antithesis:** Avoid cliché dramatic contrasts (*"It wasn't just about changing colors; it was about reimagining the paradigm"*). State observations plainly.
* ❌ **No Double Em-Dashes:** Avoid double em-dashes (`—`) mid-sentence for philosophical commentary. Use commas, parentheses, or clean period breaks.
* ❌ **No Developer-Cosplay Jargon:** Do not wrap normal UI text in mechanical brackets like `[VALIDATOR: ...]` or use artificial robot phrasing in user-facing copy.

### 3. Banned Vocabulary List
Search and purge these overused filler words:

| Banned Word / Phrase | Why It Fails | Replacement |
| :--- | :--- | :--- |
| **Delve / Deep dive** | Overused academic/AI fluff. | Researched, analyzed, explored, looked at. |
| **Testament** | *"A testament to..."* is pure AI filler. | Proves, demonstrates, shows. |
| **Leverage / Utilize** | Corporate jargon. | Use, apply, build with. |
| **Elevate / Optimize** | Vague marketing speak. | Improve, speed up, increase, refine. |
| **Meticulously / Carefully** | Adverbs forcing quality. | Remove adverb; let results speak. |
| **Furthermore / Moreover** | Heavy, unnatural transitions. | Also, on top of that, or start a new sentence. |

---

## Pre-Flight Checklist Before Publishing/Redesigning
1. **Token Audit:** Are all colors, margins, radiuses, and fonts referencing the design system tokens?
2. **Content Separation:** Is page text sourced from `content/` without hardcoding paragraphs inside JSX?
3. **Fluff & Vocabulary Audit:** Did you run a check for banned words (`delve`, `leverage`, `testament`, `meticulously`)?
4. **Out-Loud Test:** Read paragraphs out loud. If a sentence stumbles in a casual coffee-shop conversation, rewrite it.
