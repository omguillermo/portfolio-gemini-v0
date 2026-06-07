# Portfolio Design System & Aesthetic Reference

This document outlines the design principles, visual decisions, and implementation rules for the **Designer-Engineer Console** portfolio theme. It serves as a guide for keeping layouts, typography, and interactive components cohesive.

---

## 1. Core Visual Paradigm: "The System Console"
The portfolio mimics a high-density developer console or system terminal. It represents design as a technical, precise discipline.
*   **High Information Density**: Present metrics, timelines, metadata, and status logs cleanly without wasting space.
*   **Minimalist Framing**: Rely on clear typography hierarchy and structural layout containers rather than heavy visual decoration.
*   **Personality Easter Eggs**: Introduce playful interactions (like the metalhead photo switch on `/about`) as subtle progressive disclosures.

---

## 2. Color System & Environment Themes
Colors are defined globally in `app/globals.css` using CSS custom properties. 

### Core Custom Properties
*   `--background`: Global page backdrop.
*   `--foreground`: Main text color (contrast-tuned for readability).
*   `--brand`: The signature highlight color (default green).
*   `--surface`: Solid surface color used for cards, tables, and buttons.
*   `--border`: Dividers and container boundaries.
*   `--muted`: Secondary metadata, labels, and descriptions.

### Theme Shifting
Themes are applied globally using the `data-brand` attribute on `<html>`. Currently supported:
1.  **Forest (Default)**: Deep greens (`#081A16`) and signal forest tones.
2.  **Crimson**: A warmer, editorial layout with wine reds (`#120808` / `#D92626`).
3.  **Electric Blue**: Cold, technical cold blue shades (`#080D12` / `#2667D9`).
4.  **Royal Purple**: Deep purples (`#8A26D9`).

---

## 3. Spacing & Container Rules

### Layout Structure
*   **Homepage Width**: `max-w-5xl` for visual projects and multi-column grid layouts.
*   **About Page Width**: `max-w-3xl` for optimal reading width and focused vertical timeline scanning.
*   **Radius Token**: `--radius` is set to `1.5rem` (24px) for cards, case study covers, and tables to soften the otherwise rigid grid.

### Section Spacing
*   Section containers use `mt-16` and a inner vertical spacing of `space-y-6` (or `space-y-8`) to maintain consistent gaps.
*   Avoid adding top padding (`pt-10` / `pt-16`) together with large margins to prevent sections from floating too far apart.

---

## 4. Card System (Crucial Design Rules)

To mimic a dashboard system and maintain a premium, unified visual aesthetic:

### Rule 1: Always Use Solid Backgrounds
*   **Never** use transparent surface colors (e.g. `bg-surface/30` or `bg-surface/50`) for container widgets, tables, or cards.
*   **Why**: The page utilizes a global technical dot grid background (`radial-gradient` in `body`). Transparent backgrounds let the dot grid show through, making the text inside the card noisy and unreadable.
*   **Correct**: Use solid `bg-surface` to fully block out the background dot grid.

### Rule 2: Heading Borders & Card Integration
*   Section headings always maintain their bottom border (`border-b border-border pb-3 mb-6`) to anchor the section visually.
*   To prevent a visual clash with the cards' borders, keep a clear space between the heading line and the cards (using `space-y-6`).

### Rule 3: Timeline & Accordions
*   In Section 02, the vertical timeline line runs down the left with nodes indicating each milestone.
*   The date period always renders on its own block line directly above the role/company to ensure consistent vertical layout.
*   Expandable accordion headers use custom SVG chevrons (animated using Framer Motion) instead of default triangles.

---

## 5. Typography Hierarchy
Typography is tailored for high-precision layouts:
*   `--fs-hero`: clamp (large, bold hero text).
*   `--fs-heading` / `--fs-body`: `0.875rem` (14px) for high readability.
*   `--fs-small`: `0.75rem` (12px) for secondary descriptions.
*   `--fs-mono`: `0.625rem` (10px) in a monospace font for system labels, logs, tags, and dates.

### Monospace Best Practices
Monospace is used as a functional tool:
*   Git-style ticket accomplishments: `[SYS-BUILD]`, `[AI-ASSIST]`, `[SHIPPING]`.
*   System labels: `STACK:`.
*   Dates, time zones, visa states, and metric logs.

---

## 6. Motion & Animation Standards

We use `framer-motion` for subtle, fluid micro-interactions:
*   **Reveal / Scroll Animations**: Use the custom `<Reveal>` wrapper. 
    *   *Warning*: For section headers, always set `<Reveal overflow="visible">`. Otherwise, the initial `y: 75` animation offset will push the text outside its container and clip it to invisible.
*   **Accordion Animations**: Animate heights from `0` to `"auto"` using standard ease curves:
    ```typescript
    transition={{ duration: 0.3, ease: 'easeInOut' }}
    ```

---

## 7. Copywriting & Tone Standards
To avoid a cliché "AI" or developer-cosplay appearance:
*   **Write like a human**: Avoid wrapping user-facing labels or text elements in square brackets (e.g., `[VALIDATOR: ...]`, `[ORG: ...]`) unless specifically requested (like git-style ticket achievements on the career timeline).
*   **Aesthetic over gimmicks**: Let the layout, borders, font weights, and color system convey the "technical console" vibe. Do not use mechanical/system jargon or developer-cosplay keywords in copywriting. Keep headers, quotes, and descriptions clean, professional, and clear.
*   **Slash (`/`) Heading Separators**: The `/` character (e.g. `01 / Projects`) should *only* be used for major index section headings on the homepage to maintain indexing cues. Never use slashes in category tags, navigation headers, about subheadings, or case study details. Group items should instead be separated by commas (e.g., `B2B, AI`) to indicate flat, non-nested categorizations.

