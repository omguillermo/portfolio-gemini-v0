# Portfolio Versioning & Expansion Roadmap

This document outlines the strategic evolution of the portfolio, structured across release epochs as it transitions from a high-density spec sheet console into a fully interactive design-engineering showcase.

---

## 🚀 v1.0 — Core Console & Career Spec Sheet (**SHIPPED**)
*   **Web Resume (Career Spec Sheet):** `app/about/page.tsx` — Chronological timeline with expandable role details, achievements, and credentials.
*   **Case Studies Engine:** `app/case-studies/[slug]/page.tsx` — Structured design system layouts for GoDaddy Commerce, QuestionPro, and Stoki AI.
*   **Dynamic Theme & Token Engine:** Live brand switching (Forest Green, Crimson Red, Electric Blue, Royal Purple) + full light/dark mode support.
*   **Interactive System Controls:** `StatusTerminal` (CLI status widget), `InteractiveDoodle` (vector morphing SVG easter egg), and `GachaModal` (retro design gacha).
*   **Keyboard Accessibility System:** Full WCAG-compliant high-contrast `focus-visible` focus rings, clean DOM tab order, and offscreen marquee trap prevention.

---

## 📦 v2.0 — Content & Micro-Blog Expansion (**PLANNED - V2**)
*   **Hero CTAs & Refinements:** Inline action buttons under the hero subtitle (*"View selected work ↓ / Get in touch →"*).
*   **Featured Project Grid:** Highlight Stoki AI as a lead featured card above a 3-column project grid.
*   **The Changelog / Micro-Blog (`/log` or `/notes`):**
    *   **Goal:** Share lightweight design-engineering findings, Figma-to-code workflows, and system updates without traditional long-form blog overhead.
    *   **Visual Direction:** Release-notes format sorted by date (e.g., `LOG_001: Adopting Tailwind 4`, `LOG_002: Dynamic Composer Layouts`).
*   **Interactive Contact Console (`/contact`):** Console-styled form with state feedback (`[READY]`, `[VALIDATING...]`, `[TRANSMITTED]`).

---

## 🧪 v3.0 — Interactive Feature Playgrounds (**PLANNED - V3**)
*   **Concept:** Recreate functional, code-based UI features of past products directly inside case studies, outperforming static Figma embeds.
*   **Live Component Sandboxes:**
    *   **GoDaddy Shipping Label Builder:** Live interactive label purchase wizard component with rate toggles and package spec inputs.
    *   **Stoki AI Assistant Sandbox:** Interactive composer pill with simulated AI responses and prompt suggestions.
    *   **QuestionPro Signup Flow:** Interactive multi-step onboarding wizard with live input validation states.
*   **Encapsulated Architecture:**
    *   Self-contained React components (`components/prototypes/[Project]Demo.tsx`).
    *   Scoped CSS / CSS Modules for isolated brand themes (mimicking GoDaddy, QuestionPro, or Stoki UI styles without global theme pollution).
    *   Responsive container queries (`@container`) for flawless mobile & desktop inline rendering.

---

## 🪵 Session Logs

### July 31 - August 1, 2026 Session
*   **Resume PDF Update:** Replaced legacy resume links across `Navbar.tsx` with `/Omar-Guillermo-Senior-Product-Designer-Resume.pdf`. Cleaned up deprecated PDF/DOCX files.
*   **Comprehensive Accessibility Audit & Fixes:**
    *   Added high-contrast `focus-visible:ring-2 focus-visible:ring-brand` focus indicators across `Navbar`, `ThemeSwitcher`, `BrandSwitcher`, `GachaModal`, and `StatusTerminal`.
    *   Converted `InteractiveDoodle` to an interactive `<button>` with `aria-label`, `Enter`/`Space` key event listeners, and visible focus outline.
    *   Resolved marquee ticker glitch in `Footer.tsx` by assigning `tabIndex={-1}` to cloned track elements, preventing offscreen viewport focus jumping.
*   **Roadmap Restructuring:** Updated `roadmap.md` into release epochs (v1.0 Shipped, v2.0 Extensions, v3.0 Interactive Playgrounds).

---
*Created on 2026-05-19. Updated 2026-08-01.* ☕️
