# Case Study Writing & Structural Guidelines

This document serves as the master guide for drafting, refining, and auditing case studies for this portfolio. It enforces a senior-level, narrative-driven structure and a grounded, human voice free of AI writing tropes.

---

## Part 1: Case Study Structural Schema

Every case study must follow this exact sectional hierarchy. Do not omit sections or change heading titles unless explicitly instructed.

### 1. Metadata Schema

Every case study Markdown file begins with two structured metadata tables:

#### Table 1: Project Archive (Full Historical Context)
*This table stores the complete personal record for archiving hygiene.*
* **Client / Company:** [Name]
* **Project Title:** [Name]
* **Role:** [Your exact title/ownership, e.g., Senior Product Designer]
* **Duration:** [Time spent developing the project, e.g., 4 Months (March – June 2022)]
* **Launch Date:** [Exact release date, e.g., July 5, 2022]
* **Project Type:** [e.g., Web App / Core B2B Fulfillment Funnel]
* **Teams Involved:** [e.g., Product Management, Engineering Lead & Dev Team, ShipEngine Partner Design Team]
* **Headline Impact:** [Primary metric and result summary]

#### Table 2: Live Portfolio Sidebar (Exact UI Mapping)
*This table maps 1:1 with the sticky sidebar rendered on the live case study page.*
* **Role:** [Exact role rendered on sidebar]
* **Timeline:** [Combined duration + release date string rendered on sidebar, e.g., 4 Months (Released July 2022)]
* **Teams:** [Teams string rendered on sidebar]

---

### 2. Live Portfolio Title Architecture (3-Tier Title System)

Every case study utilizes three distinct title formats tailored to their specific surface:

1. **Internal Archive Title (`archive_title`):** Generic name for Google Docs / personal tracking (e.g. `Buy Shipping Label Experience`).
2. **Live Case Study H1 Title (`title`):** Clean, professional title displayed at the top of the case study page (e.g. `GoDaddy: Native Shipping Labels Integration`).
3. **Homepage Card Headline (`card_headline`):** Punchy, FAANG-style outcome-driven action sentence rendered on homepage project cards, combining Action + Scale/Metric + Product (e.g. `Facilitating 7.5K shipping label purchases for 6.7K GoDaddy Power Sellers`).

---

### 3. Core Narrative Sections

#### Overview
* **Objective:** Deliver an immediate, high-level snapshot of the project’s core value, key achievement, and strategic scope in 5 seconds.
* **Key Focus:** 1-2 sentence elevator pitch highlighting the primary goal, strategy, and headline result upfront.

#### The Problem
* **Objective:** Outline the existing pain points clearly.
* **Key Focus:** What was actively broken for users? What was hurting the business? Include real-world user feedback or qualitative quotes if available (e.g., *"users thought it was a phishing attempt"*).

#### Hypothesis
* **Objective:** Document your starting assumptions before running into real-world friction.
* **Key Focus:** What did you *think* the solution was going to be, and what standard UX assumption were you relying on? (e.g., *"Shorter forms always equal higher conversion"*).

#### Constraints
* **Objective:** Define the non-negotiable project boundaries.
* **Key Focus:** Technical limitations, inter-departmental data requirements (e.g., Sales pipeline info), or complex routing rules that shaped the final output.

#### Design Iterations & Trade-offs ("The Messy Middle")
* **Objective:** Showcase strategic decision-making over generic wireframe dumps.
* **Key Focus:** Present at least 2-3 distinct explorations or MVPs. Explicitly explain why early ideas failed or were dropped. Focus heavily on business or engineering compromises made along the way.

#### Solution
* **Objective:** Detail the final shipped design and its architectural mechanics.
* **Key Focus:** Break down the layout logically (e.g., Left Column trust elements vs. Right Column form card). Explain how the interface actively solves the problem, hypothesis, and constraints established earlier.

#### Edge Cases
* **Objective:** Demonstrate senior-level thoroughness in edge case & error condition handling.
* **Key Focus:** List 2-3 specific edge cases (e.g., dynamic funneling based on marketing sources, cooldown logic for promos, API validation states before rate calculation).

#### Outcomes
* **Objective:** Expand on concrete business and user impact with hard data.
* **Key Focus:** Bullet points highlighting launch dates, metric lifts, executive validation (e.g., COO endorsement), and downstream team impact (e.g., reduction in support tickets).

#### Retrospective
* **Objective:** A sharp, authentic closing reflection.
* **Key Focus:** Reflect on what this specific project proved regarding standard UX heuristics vs. real-world enterprise constraints (e.g., simple vs. clear interfaces). Avoid generic platitudes.

---

## Part 2: Voice, Tone & Writing Style Guidelines

### 1. Tone and Voice Philosophy
* **Conversational yet Professional:** Write as if speaking to a peer or engineering or design lead during a sync. Be direct, clear, and honest about failures.
* **Active Voice Only:** Own the actions. Avoid passive corporate phrasing.
  * ❌ *Bad (Passive):* "The user research was conducted and a pattern was observed."
  * ✅ *Good (Active):* "I interviewed five users and noticed they all got stuck on the registration page."
* **First-Person Narrative:** Use **"I"** for your individual choices, strategy, and design execution. Use **"We"** when discussing cross-functional collaboration, technical compromises, or business decisions made with stakeholders.

---

### 2. Banned Structural Gimmicks ("AI Tells")
Ban these structural crutches entirely:

1. **No "It's not X, it's Y" Formulas:** Avoid rhetorical antithesis (e.g., *"This wasn't just about changing colors; it was about reimagining the paradigm"*). State observations plainly.
2. **No Dramatic Em Dashes:** Avoid double em dashes (`—`) to insert sweeping philosophical thoughts in the middle of sentences. Use commas, parentheses, or start a new sentence.
3. **No Hyphenated Adjective Overload:** Avoid stacking terms like *context-aware*, *data-driven*, *human-centric*, or *top-of-funnel* sequentially.

---

### 3. Vocabulary Blacklist

| Banned Word / Phrase | Why It Fails | What to Use Instead |
| :--- | :--- | :--- |
| **Delve / Deep dive** | Overused AI marker; academic fluff. | Looked at, researched, analyzed, explored. |
| **Testament** | *"A testament to..."* is pure AI filler. | Proves, shows, demonstrates. |
| **Leverage / Utilize** | Corporate jargon inflating simple actions. | Use, apply, build with. |
| **Elevate / Optimize** | Vague marketing verbs. | Improve, speed up, increase. |
| **Meticulously / Carefully** | Adverbs trying to force quality. | Strip entirely; let data speak. |
| **Psychological safety** | Over-indexing on academic UX terms. | User trust, clarity, confidence. |
| **Furthermore / Moreover** | Heavy, unnatural transition words. | Also, on top of that, or new sentence. |

---

## Part 3: Data Model Mapping & 100% Verbatim Synchronization (`data/projects.ts`)

For developers or AI agents updating `data/projects.ts`, map the schema fields to these exact keys.

> [!IMPORTANT]
> **Rule of 100% Verbatim Parity:**
> The standalone Markdown file (`content/case-studies/[company]/[slug].md`) and the project data object in `data/projects.ts` **MUST match 100% verbatim, word-for-word** across all corresponding sections (`Overview` / `impact`, `The Problem` / `problem`, `Hypothesis` / `hypothesis`, `Constraints` / `constraint`, `iterations`, `system_solution`, `edge_cases_handled`, `outcomes`, `retrospective`). 
> 
> Neither file may contain extra paragraphs, altered metrics, or summary rewrites that differ from the other.

> [!NOTE]
> **Schema & Iteration Flexibility:**
> While verbatim text synchronization between the `.md` file and `data/projects.ts` is mandatory, the **number of items within structured arrays is fully flexible per project**:
> - A complex enterprise project may include 3–4 design iterations (`iterations`), whereas a focused feature redesign may include 1–2.
> - The number of edge cases (`edge_cases_handled`) and visual highlights (`visual_highlights`) can adapt to the scope of the project.

```typescript
export interface ProjectData {
  archive_title?: string;        // [Internal Archive] Generic project title
  title: string;                 // [Case Study Page H1] Clean page title
  card_headline: string;         // [Homepage Card] Punchy FAANG-style outcome headline
  role: string;                  // [Sidebar] Role
  timeline: string;              // [Sidebar] Timeline
  tag: string;                   // [Sidebar] Category Tag
  teams_involved: string;        // [Sidebar] Teams Involved
  thumbnail: string;             // Homepage Thumbnail image path
  hero_image?: string;           // Optional cover hero image
  impact: string;                // [Overview] Section content (Verbatim to .md Overview)
  problem_hypothesis: {
    problem: string;             // [The Problem] Markdown content (Verbatim to .md)
    hypothesis: string;          // [Hypothesis] Markdown content (Verbatim to .md)
  };
  problem_image?: {
    image_url: string;
    caption: string;
  };
  constraint: string;            // [Constraints] Markdown content (Verbatim to .md)
  design_rationale: string;      // Intro text for iterations
  iterations: {
    approach: string;
    why_it_failed: string;
    image_url?: string;
    caption?: string;
  }[];                           // [Design Iterations & Trade-offs] (1 to N items)
  system_solution: string;       // [Solution] Markdown content (Verbatim to .md)
  edge_cases_handled: string[];  // [Edge Cases Handled] Bullet array
  outcomes: string;              // [Outcomes] Markdown content (Verbatim to .md)
  visual_highlights: {
    image_url: string;
    caption: string;
  }[];                           // Solution visual galleries (1 to N items)
  retrospective: string;         // [Retrospective] Markdown content (Verbatim to .md)
}
```

---

## Part 4: Pre-Flight Audit Checklist

Before publishing any case study, complete these 4 checks:
1. **The Verbatim Parity Check:** Compare `content/case-studies/[company]/[slug].md` line-by-line with `data/projects.ts`. Ensure every section's text matches 100% word-for-word.
2. **The Out-Loud Test:** Read every paragraph aloud. If a sentence stumbles or sounds unnatural in coffee-shop conversation, rewrite it.
3. **The Fluff Filter:** Search (`Cmd+F`) for *delve*, *leverage*, *elevate*, *meticulously*, *testament*. Remove them.
4. **The Dash Audit:** Count em dashes (`—`). If there are more than two in the entire case study, replace them with clean punctuation.
