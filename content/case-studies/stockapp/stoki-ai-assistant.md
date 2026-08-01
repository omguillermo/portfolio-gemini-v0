# Project Archive

| Field | Value |
| :--- | :--- |
| **Client / Company** | StockApp |
| **Project Title** | Stoki AI Assistant Redesign |
| **Role** | Founding Designer |
| **Duration** | 8 Months (August 2025 – March 2026) |
| **Launch Date** | March 2026 |
| **Project Type** | Web App / B2B AI Assistant |
| **Teams Involved** | Co-Founders, Sales, Engineering |
| **Headline Impact** | Facilitated over $871K in B2B orders by 900+ active users |

---

# Live Portfolio Sidebar

| Attribute | Exact Live Value |
| :--- | :--- |
| **Role** | Founding Designer |
| **Timeline** | August 2025 - March 2026 |
| **Teams** | Co-Founders, Sales, Engineering |
| **Homepage Card Headline** | Redesigning StockApp's AI chat to help with catalog enrichment & sales reports for 900+ B2B users |

---

# StockApp: AI Assistant Redesign

## Redesigning an intrusive B2B AI assistant into a non-blocking, persistent workflow tool.

<!--
Image: /projects/stockapp-ai/stockapp-cover-stoki-temp.png
Caption: Cover image for StockApp Stoki AI Assistant case study
Alt: StockApp Stoki AI Assistant Redesign cover
-->

### Overview

Facilitated over $871K in B2B orders by 900+ active users. Sales teams reported increased satisfaction and more frequent tool adoption after the frictionless redesign.

---

### The Problem Space

The original AI chat interface blocked users from interacting with page content, obscuring critical inventory items. Navigating while chatting also caused new content to load invisibly behind the widget.

![Original AI chat interface blocking interaction with page content.](/projects/stockapp-ai/stoki-ai-before-issue-block-042026.png)

![Navigating while chatting caused new content to load invisibly behind the full page widget.](/projects/stockapp-ai/stoki-ai-before-issue-fptakeove-042026.png)

---

### Hypothesis

By shifting to a dynamic and draggable interface, we could remove friction, allowing users to reference underlying data while utilizing the AI's enrichment tools simultaneously.

---

### Constraints

The AI assistant needed to remain highly visible and accessible from any page, while allowing non-blocking interaction so users could view underlying content.

---

### Design Iterations & Trade-offs (The Messy Middle)

To solve the obstruction issue, I explored several iterations after doing research on industry standard patterns:

#### Exploration 1: Viewport Reduction (Fixed Bottom)

Keeping tools fixed at the bottom cramped the data-heavy screens, reducing the "fold" and forcing unnecessary scrolling for primary inventory tasks.

![Exploration A: Attempting to integrate the AI into a fixed status bar at the bottom.](/projects/stockapp-ai/stoki-ai-proposal-bottom-042026.png)

#### Exploration 2: Persistent Right Panel

Triggered from the right nav bar, this approach significantly reduced the horizontal space available for the product directory, leading to poor readability for SKUs.

![Exploration B: A standard sidebar approach that failed due to extreme data density requirements.](/projects/stockapp-ai/stoki-ai-proposal-sidebar-042026.png)

---

### Solution

I redesigned the entry point into a subtle, non-blocking folder tab anchored at the bottom center of the screen. When activated, the chat opens as a draggable floating window with dynamic width (640px to 1080px) that properly displays complex agent responses, like data tables, without taking over the screen.

![Entry Point: The non-blocking folder tab anchored to the system grid.](/projects/stockapp-ai/stoki-ai-solution-tab-trigger-042026.png)

![After clicking the tab, the composer pill would show alongside options to see previous chats, resume latest one, and prompt suggestions.](/projects/stockapp-ai/stoki-ai-solution-tab-active-042026.png)

![The new popover experience wasn't intrusive and allowed dynamic width based on the response, with additional customization options.](/projects/stockapp-ai/stoki-ai-solution-tab-example-042026.png)

---

### Edge Cases Handled

* **Human-in-the-Loop Safeguards:** For bulk inventory updates, the system presents a 'before and after' diff proposal that requires explicit user confirmation to prevent accidental database changes.
* **Dynamic UI Scaling:** The floating window defaults to 640px but dynamically expands to 1080px to accommodate complex data tables without cutting off information.
* **Implicit Intent Handling:** The agent prompts for confirmation if it detects product data pasted without a command, ensuring intentional actions only.

---

### Outcomes

Facilitated over $871K in B2B orders by 900+ active users. Post-launch surveys showed a significant increase in tool adoption and user satisfaction after shifting to the frictionless floating trigger.

---

### Retrospective

Designing for AI requires anticipating complex outputs and giving users total control over screen real estate. If given more time, I would expand discovery features and improve UI states for handling API errors during high-volume bulk updates.
