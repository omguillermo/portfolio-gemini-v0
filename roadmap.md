# Portfolio Expansion Roadmap

This document outlines the strategic expansion of the portfolio, transitioning from a basic showcase into a high-density, system-inspired designer-engineer console.

---

## ✅ 1. Web Resume (Career Spec Sheet) — **DONE**
*   **Shipped:** `app/about/page.tsx` — chronological timeline with expandable role details.

---

## ✅ 2. Testimonials (System Validation Log) — **DONE**
*   **Shipped:** `03 / Testimonials` section on homepage (`app/page.tsx`) — 3 cards from GoDaddy, StockApp, and QuestionPro.

---

## ✅ 3. Contact / CTA (Initiate Session) — **DONE (V1)**
*   **Shipped:** Closing CTA strip at the bottom of `app/page.tsx` — "There's more to the story" with About + LinkedIn buttons. Replaced the old `05 / Index` link-dump.
*   **Future V2 (Optional):** A dedicated `/contact` page with a console-styled form (`[READY]`, `[VALIDATING...]`, `[TRANSMITTED]` states) if direct contact volume warrants it.

---

## 4. The Changelog / Notes (Micro-Blog) — *Pending*
*   **Target Location:** `/log` or `/notes`
*   **Goal:** Add a human touch and share design-engineering findings without the pressure of maintaining a traditional "long-form" blog.
*   **Visual Direction:**
    *   **Release Notes Style:** Chronological entries sorted by date (e.g., `LOG_001: Adopting Tailwind 4`, `LOG_002: Dynamic Composer Layouts`).
    *   **Technical Density:** Code syntax highlighting and Figma-to-code workflow diagrams.

---

## Next Steps
Remaining open work:
1.  **Hero CTAs:** Add inline text-button CTAs under the hero subtitle ("View selected work ↓ / Get in touch →") — still not shipped as of 2026-07-20.
2.  **Featured Project Layout:** Consider making Stoki AI a full-width featured card above a 3-col grid for the remaining projects.
3.  **Changelog Route:** Scaffold `/log` page when ready to start writing.

---

## 🪵 Session Logs

### July 17, 2026 Session
*   **Case Study Layout Refactoring ([page.tsx](file:///Users/omarguillermo/Developer/personal%20projects/portfolio-gemini-v0/app/case-studies/%5Bslug%5D/page.tsx)):**
    *   Consolidated 8 individual `<Reveal>` wrappers into a single parent `<Reveal>` container around the right-side content column. This resolves the Framer Motion viewport-intersection bug that was hiding the Constraints section on GoDaddy.
    *   Removed nested `space-y-4` layout wrappers on parsed markdown fields to prevent spacing doubling. Spacing between paragraphs is now handled natively via standard block bottom margins (`mb-4`).
    *   Reduced global section gap from `space-y-16` (64px) to `space-y-12` (48px) to make short sections sit tighter.
    *   Restructured the **Retrospective** block to remove its top border and double padding, aligning it with other sections.
*   **Markdown Parsing Engine ([page.tsx](file:///Users/omarguillermo/Developer/personal%20projects/portfolio-gemini-v0/app/case-studies/%5Bslug%5D/page.tsx)):**
    *   Integrated a lightweight client-side markdown parsing function to compile headers (`###`), lists (`*` / `-`), and bold text (`**bold**`), preventing syntax characters from rendering as raw text.
*   **Database Schema & Content Porting ([projects.ts](file:///Users/omarguillermo/Developer/personal%20projects/portfolio-gemini-v0/data/projects.ts)):**
    *   **Schema Extension (Resolving Template Rigidness):** Extended the centralized `ProjectData` schema with optional/flexible fields (such as `hero_image`, `problem_image`, `teams_involved`, and split `outcomes` lists) to accommodate the rich media layout of the **QuestionPro** redesign, resolving our struggles with rigid layout constraints without breaking compilation on legacy projects.
    *   **Verbatim Copy Migration:** Ported the **QuestionPro Sign Up** case study text verbatim from the draft ([Case Study Sign Up Experience.md](file:///Users/omarguillermo/Developer/personal%20projects/portfolio-gemini-v0/content/case-studies/questionpro/Case%20Study%20Sign%20Up%20Experience.md)) using JavaScript backtick literals. This guarantees your original layout, newlines, lists, and copy styling are preserved.
    *   **Custom Markdown Compiler:** Built native text parsers inside [page.tsx](file:///Users/omarguillermo/Developer/personal%20projects/portfolio-gemini-v0/app/case-studies/%5Bslug%5D/page.tsx) to compile headers (`###`), lists (`*` / `-`), and bold text (`**`) into HTML, resolving visual bugs where raw markdown syntax was displaying as plain text in the browser.
*   **React 19 Warning & Dev Cache Resolution ([layout.tsx](file:///Users/omarguillermo/Developer/personal%20projects/portfolio-gemini-v0/app/layout.tsx)):**
    *   Imported and utilized Next.js's `<Script>` component with the `beforeInteractive` strategy to run the theme initializer script, resolving the React 19 client-side script tag warning.
    *   Reverted the QuestionPro hero image name back to `qp-signup-hero.png` and documented Next.js dev server image caching behaviors.
*   **Project Health:** Verified that all TypeScript compilation and lint checks are 100% clean with zero warnings or errors.

---
*Created on 2026-05-19. Updated 2026-07-17.* ☕️
