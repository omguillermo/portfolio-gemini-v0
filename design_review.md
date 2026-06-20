# Portfolio Design Review — Homepage

> [!NOTE]
> This review covers structure, layout hierarchy, missing sections, and actionable improvements. I'm reviewing the **design logic**, not just the code.

---

## The Verdict on your Hero

Your hero layout is **structurally sound but emotionally under-delivering** for someone of your caliber. Let me break down why.

### What's Working

| Element | Assessment |
|---|---|
| **HUD Data Grid** (Location / Time / Status / Visa / Mobility) | 🟢 Excellent. This is the single most distinctive design decision on the page. It immediately signals "I'm a systems thinker" before anyone reads a word. The live clock is a great touch. |
| **System Console Aesthetic** | 🟢 The dot grid background, monospaced section labels (`01 / Highlighted Projects`), and the overall information density are coherent and well-executed. |
| **InteractiveDoodle** | 🟢 Personality injection without kitsch. The morphing SVG with the metalhead easter egg is clever progressive disclosure. |
| **Project Cards** | 🟢 The spotlight border effect is premium. The metric badges ($871K, 7.5K Labels, 0.31% Bounce) are killer — they let the work speak in numbers. |

### What's Not Working

#### 1. The Hero Feels "Headless" — No Emotional Anchor

Your hero is currently:

```
[doodle 64px]

Senior Product Designer
& Design System Builder

[subtitle paragraph]
```

The doodle is too small (64×64) and sits alone on its own row, creating an orphaned element that doesn't form a strong visual unit with the heading. The `h1` is excellent copy, but it lands on a relatively flat stage. There's **no spatial tension** — everything just stacks downward with uniform gravity.

**The fix:** Create a **hero "unit"** where the doodle and the heading share the same horizontal row (at least on desktop). Make the doodle larger (~96-112px). This creates a visual anchor point — the eye reads left-to-right: personality (doodle) → authority (title). On mobile, the stack is fine.

```
┌─────────────────────────────────────────────┐
│  [DOODLE 96px]   Senior Product Designer    │
│                  & Design System Builder     │
│                  [subtitle]                  │
└─────────────────────────────────────────────┘
```

#### 2. The Hero Has No Call-to-Action

After reading your title and subtitle, the visitor's eye falls off a cliff into the project grid. There's no directional nudge. No scroll cue. No "View my work ↓" or "Let's talk →". This is a missed micro-conversion opportunity.

**The fix:** Add 1-2 inline text-button CTAs directly under the subtitle:

```
View selected work ↓     Get in touch →
```

Styled in your `text-mono` aesthetic to keep it on-brand. These aren't decorative — they're **information architecture**. They tell recruiters "here's what to do next."

#### 3. The Subtitle Copy is Good But Passive

> *"I bridge the gap between design and engineering to build useful B2B and eCommerce products."*

This is a fine positioning statement, but "useful" is underselling. Your case studies show you generated **$871K in orders** and dropped bounce rates to **0.31%**. Consider embedding one hard number directly in the hero subtitle to create immediate credibility tension:

> *"I bridge design and engineering to ship B2B and eCommerce products — my last three projects generated $871K in orders, 7.5K shipping labels, and a 0.31% bounce rate."*

Or keep it shorter and let the metrics breathe:

> *"I build the products that move numbers. Design systems, AI workflows, and B2B tools — from concept to production."*

---

## Missing Sections from the Homepage

Your current homepage has **3 blocks**:

| # | Section | Content |
|---|---|---|
| 01 | Highlighted Projects | 4 project cards (2×2 grid) |
| 02 | Background | 2-paragraph bio |
| 03 | Index | Resume download, Email, LinkedIn |

Here's what's **missing** to make this a complete, recruiter-converting homepage:

### ❌ Missing: Skills / Toolkit Marquee or Grid

Recruiters and hiring managers **scan for keywords**. Your about page has experience details, but the homepage doesn't show a single tool name. A compact, monospace-styled skill/tool strip would immediately answer "Does this person know Figma? React? Design tokens?"

**Suggestion:** A horizontal marquee or a compact grid between projects and background:

```
04 / Stack
──────────────────────────
FIGMA  ·  REACT  ·  NEXT.JS  ·  TAILWIND  ·  FRAMER MOTION
STYLE DICTIONARY  ·  STORYBOOK  ·  GIT  ·  VERCEL  ·  AI WORKFLOWS
```

This fits your console aesthetic perfectly. No logos needed — just monospaced text.

### ❌ Missing: Social Proof / Testimonials

Your [roadmap.md](file:///Users/omarguillermo/Developer/personal%20projects/portfolio-gemini-v0/roadmap.md) already plans this (Section 2: "System Validation Log"). It's the **highest-impact missing section**. Even one strong quote from a cross-functional peer (an engineer or PM you've worked with) would dramatically increase trust.

**Suggestion for V1:** A single featured testimonial block:

```
05 / Validation
──────────────────────────
"Omar's Figma files are cleaner than most codebases."
— [VERIFIED BY: Lead Engineer @ GoDaddy]
```

You don't need a carousel for V1. One testimonial > zero testimonials.

### ❌ Missing: A Proper CTA / Contact Section

Your current "03 / Index" section is a **link dump** at the bottom of the page. It works functionally, but it has zero emotional pull. After seeing 4 impressive case studies with hard metrics, the page just... ends with three small arrows.

**Suggestion:** Replace or augment "03 / Index" with a full-width CTA block:

```
06 / Initiate Contact
──────────────────────────
┌──────────────────────────────────────────┐
│  Let's build something together.         │
│                                          │
│  [ESTABLISH CONTACT →]  [DOWNLOAD CV ↓]  │
│                                          │
│  omguillermo90@gmail.com                 │
│  Mérida, MX · TN Eligible · Open to     │
│  relocation                              │
└──────────────────────────────────────────┘
```

This echoes the HUD data grid's tone but creates a clear **conversion moment** at the end of the scroll.

---

## Layout Improvements

### 1. Project Grid: Consider Asymmetric Layout for the Lead Case Study

Right now all 4 projects share equal weight in a 2×2 grid. But your **Stoki AI** case study is clearly your flagship piece ($871K, most detailed case study, most visual highlights). Consider making it a **full-width featured card** at the top, with the remaining 3 in a row below:

```
┌─────────────────────────────────────────┐
│           STOKI AI (FULL WIDTH)         │
│           [16:9 cover image]            │
│           $871K facilitated             │
└─────────────────────────────────────────┘
┌───────────┐  ┌───────────┐  ┌───────────┐
│  GoDaddy  │  │ QP Signup │  │  DS Scale │
└───────────┘  └───────────┘  └───────────┘
```

This creates **visual hierarchy within the portfolio itself** — telling the visitor "start here."

### 2. Background Section: The 2-Column Split Feels Unbalanced

Currently, "02 / Background" (bio text) and "03 / Index" (links) sit side by side in a `grid-cols-2`. The left column has ~120 words of body text. The right column has 3 links. The **visual weight is massively asymmetric** — the left side is dense, the right side is a tiny cluster floating in whitespace.

**Options:**
- **A)** Move Index links into the footer or a dedicated CTA section (see above), and let the Background section span full width with a tighter `max-w-2xl`.
- **B)** Add more content to the right column (skills grid, certifications, or the testimonial quote) to balance the visual weight.

### 3. Section Numbering Gap

Your sections go `01 → 02 → 03`, but there's a conceptual gap between "Projects" and "Background." The page reads:

> "Here's my work. Here's who I am. Here are some links."

It should read:

> "Here's my work. Here's what I know. Here's who I am. Here's what people say about me. Here's how to reach me."

The missing nodes (skills, testimonials, CTA) would create a much more complete narrative arc.

### 4. The Footer Marquee is Doing Heavy Lifting

Your footer ticker is charming and well-built, but it's currently the **only place** where personality phrases like "DESIGNED WITH LOTS OF COFFEE" and the Gacha easter egg live. Consider distributing personality moments more evenly across the page. A micro-interaction on the project cards (a playful tooltip on hover that shows a one-liner about the project) or a subtle animation on section transitions would spread the delight.

---

## Proposed Section Order (Revised Homepage)

Here's the narrative arc I'd recommend:

| Order | Section | Purpose |
|---|---|---|
| — | **HUD Data Grid** | Contextual metadata (location, status, visa) |
| — | **Hero** | Name, title, subtitle with CTAs |
| 01 | **Featured Project** (full-width) | Flagship case study |
| 02 | **More Projects** (3-col grid) | Remaining work |
| 03 | **Stack / Toolkit** | Skills keywords for scanning |
| 04 | **Background** | Career summary narrative |
| 05 | **Validation** | 1 testimonial quote |
| 06 | **Initiate Contact** | CTA + email + resume download |

This gives the page a **complete conversion funnel**: credibility (HUD) → authority (hero) → proof (projects) → competence (skills) → trust (testimonial) → action (CTA).

---

## Summary

> [!IMPORTANT]
> Your design system, visual language, and component quality are genuinely strong. The console metaphor is distinctive and well-executed. The main gap is **page-level narrative structure** — the homepage currently reads like a well-designed dashboard without a conversion story. Adding 3 sections (Skills, Testimonial, CTA) and restructuring the hero unit would elevate this from "impressive portfolio" to "recruiter-converting machine."

### Priority Actions

1. **🔴 High:** Restructure the hero — doodle + heading on one row, add inline CTAs
2. **🔴 High:** Add a proper CTA section at the bottom (replace current Index)
3. **🟡 Medium:** Add a skills/toolkit strip section
4. **🟡 Medium:** Add at least 1 testimonial
5. **🟢 Low:** Consider asymmetric project grid (featured + 3-col)
6. **🟢 Low:** Sharpen subtitle copy with a hard metric
