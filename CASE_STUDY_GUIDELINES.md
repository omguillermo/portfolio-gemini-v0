# Case Study Writing & Structural Guidelines

This document serves as the master guide for drafting, refining, and auditing case studies for this portfolio. It enforces a senior-level, narrative-driven structure and a grounded, human voice free of AI writing tropes.

---

## Part 1: Case Study Structural Schema

Every case study must follow this exact sectional hierarchy. Do not omit sections or change heading titles unless explicitly instructed.

### 1. Archive Metadata (Internal Use Only)
*This section is for project archiving hygiene and is hidden on the live portfolio site.*
* **Client / Company:** [Name]
* **Project Title:** [Name]
* **Year & Launch Date:** [e.g., Nov 2021]
* **Project Type:** [e.g., Web App, Core B2B Funnel]
* **Cross-Functional Teams Involved:** [e.g., Inbound Sales, Engineering, Executive Stakeholders]

---

### 2. Live Portfolio Header & Sidebar

#### [H1] One-Sentence Narrative Title (Action Title)
* **Format:** A single high-impact sentence designed for skim-reading recruiters to immediately understand the project's entire scope, action, and business result.
* **Example:** *"Redesigning QuestionPro's B2B Onboarding to Balance Trust & Lead Quality"*

#### [Sidebar] Metadata
* **Role:** [Your exact ownership, e.g., Senior Product Designer / Founding Designer]
* **Timeline:** [Duration & dates, e.g., Q3-Q4 2021, Released Nov 2021]
* **Teams Involved:** [e.g., COO, VP of Engineering, Inbound Sales, Design]
* **Primary Metric Badge:** [e.g., +5% Conversion Lift, $871K Facilitated]

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

#### Solution & Architecture
* **Objective:** Detail the final shipped design and its architectural mechanics.
* **Key Focus:** Break down the layout logically (e.g., Left Column trust elements vs. Right Column form card). Explain how the interface actively solves the problem, hypothesis, and constraints established earlier.

#### Edge Cases Handled
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
* **Conversational yet Professional:** Write as if speaking to a peer or engineering lead during a sync. Be direct, clear, and honest about failures.
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

## Part 3: Data Model Mapping (`data/projects.ts`)

For developers or AI agents updating `data/projects.ts`, map the schema fields to these exact keys:

```typescript
export interface ProjectData {
  title: string;                 // [H1] One-Sentence Action Title
  role: string;                  // [Sidebar] Role
  timeline: string;              // [Sidebar] Timeline
  tag: string;                   // [Sidebar] Category Tag
  metric: string;                // [Sidebar] Primary Metric Badge
  teams_involved: string;        // [Sidebar] Teams Involved
  thumbnail: string;             // Homepage Thumbnail image path
  hero_image?: string;           // Optional cover hero image
  impact: string;                // [Overview] Section content
  problem_hypothesis: {
    problem: string;             // [The Problem] Markdown content
    hypothesis: string;          // [Hypothesis] Markdown content
  };
  problem_image?: {
    image_url: string;
    caption: string;
  };
  constraint: string;            // [Constraints] Markdown content
  design_rationale: string;      // Intro text for iterations
  iterations: {
    approach: string;
    why_it_failed: string;
    image_url?: string;
    caption?: string;
  }[];                           // [Design Iterations & Trade-offs]
  system_solution: string;       // [Solution] Markdown content
  edge_cases_handled: string[];  // [Edge Cases Handled] Bullet array
  outcomes: string;              // [Outcomes] Markdown content
  visual_highlights: {
    image_url: string;
    caption: string;
  }[];                           // Solution visual galleries
  retrospective: string;         // [Retrospective] Markdown content
}
```

---

## Part 4: Pre-Flight Audit Checklist

Before publishing any case study, complete these 3 checks:
1. **The Out-Loud Test:** Read every paragraph aloud. If a sentence stumbles or sounds unnatural in coffee-shop conversation, rewrite it.
2. **The Fluff Filter:** Search (`Cmd+F`) for *delve*, *leverage*, *elevate*, *meticulously*, *testament*. Remove them.
3. **The Dash Audit:** Count em dashes (`—`). If there are more than two in the entire case study, replace them with clean punctuation.
