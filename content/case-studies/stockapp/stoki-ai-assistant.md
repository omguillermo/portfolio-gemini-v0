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
| **Headline Impact** | Non-Blocking AI Workflow |

---

# Live Portfolio Sidebar

| Attribute | Exact Live Value |
| :--- | :--- |
| **Role** | Founding Designer |
| **Timeline** | August 2025 - March 2026 |
| **Teams** | Co-Founders, Sales, Engineering |
| **Homepage Card Headline** | Redesigning StockApp's AI chat for 900+ B2B users managing inventory |

---

# StockApp: AI Assistant Redesign

## Moving StockApp's AI assistant out of the way so B2B sellers and sales reps could work on their catalogs without losing context.

<!--
Image: /projects/stockapp-ai/stockapp-cover-stoki-temp.png
Caption: Cover image for StockApp Stoki AI Assistant case study
Alt: StockApp Stoki AI Assistant Redesign cover
-->

### Overview

StockApp's original AI assistant covered the product catalog and triggered a full-screen takeover on every reply. After our sales team flagged the friction, we redesigned it into a compact bottom tab and draggable popover so users could manage inventory and chat simultaneously.

---

### The Problem Space

During a team offsite in Miami in February, our sales team raised a major frustration: they hated where the AI chat lived. When browsing the catalog, a large floating input bar sat permanently at the bottom of the viewport, covering the last rows of inventory. Worse, starting a conversation triggered a full-page takeover. If a rep or seller needed to check SKU details or add products, they couldn't see their catalog and talk to Stoki at the same time.

![Original AI chat interface blocking interaction with page content.](/projects/stockapp-ai/stoki-ai-before-issue-block-042026.png)

![Navigating while chatting caused new content to load invisibly behind the full page widget.](/projects/stockapp-ai/stoki-ai-before-issue-fptakeove-042026.png)

---

### Hypothesis

If we reduced the default trigger to a minimal edge tab and moved active conversations into a movable, resizable popover, users could review their catalog with zero obstruction and only bring the AI into view when adding SKUs or running queries.

---

### Constraints

The AI assistant needed to remain highly visible and accessible from any page, while allowing non-blocking interaction so users could view underlying content.

---

### Design Iterations & Trade-offs (The Messy Middle)

Working remotely while the team was at the offsite, I explored multiple layout patterns to get the assistant out of the way without burying it:

#### Exploration 1: Viewport Reduction (Fixed Bottom)

Keeping tools fixed at the bottom cramped the data-heavy screens, reducing the "fold" and forcing unnecessary scrolling for primary inventory tasks.

![Exploration A: Attempting to integrate the AI into a fixed status bar at the bottom.](/projects/stockapp-ai/stoki-ai-proposal-bottom-042026.png)

#### Exploration 2: Persistent Right Panel

Triggered from the right nav bar, this approach significantly reduced the horizontal space available for the product directory, leading to poor readability for SKUs.

![Exploration B: A standard sidebar approach that failed due to extreme data density requirements.](/projects/stockapp-ai/stoki-ai-proposal-sidebar-042026.png)

---

### Solution

Engineering and I converged on the same core direction: anchoring the entry point as a small folder-style tab (Ask AI...) at the bottom center of the screen. I focused on fleshing out the states and interaction details around that pattern. When reviewing the catalog, the tab stays out of the way. Clicking it reveals the input bar, starter prompts, and a quick button to resume the last chat. Once a conversation starts, it opens in a floating popover that users can drag by the header, keeping the underlying catalog visible while they work.

![Entry Point: The non-blocking folder tab anchored to the system grid.](/projects/stockapp-ai/stoki-ai-solution-tab-trigger-042026.png)

![After clicking the tab, the composer pill would show alongside options to see previous chats, resume latest one, and prompt suggestions.](/projects/stockapp-ai/stoki-ai-solution-tab-active-042026.png)

![The new popover experience wasn't intrusive and allowed dynamic width based on the response, with additional customization options.](/projects/stockapp-ai/stoki-ai-solution-tab-example-042026.png)

---

### Edge Cases Handled

* **Adaptive Width & Fullscreen Toggle:** The popover stays compact (640px) for simple text and product replies, automatically widens up to 1080px when rendering data tables, and includes a header toggle to expand to fullscreen when needed.
* **Draggable Popover Header:** Because B2B catalogs are dense, even a floating window can cover a row someone needs to read. Making the popover draggable from its top bar let users move the chat anywhere on screen while cross-checking SKUs.
* **Quick Thread Recovery:** Added a one-click 'Resume' action and a 'Previous chats' dropdown right in the active bar so users could close the popover to inspect their catalog and jump right back into an ongoing task without losing context.

---

### Outcomes

This redesign shipped across a platform serving 900+ active users and over $871K in B2B order volume. Because the update went live shortly before StockApp wound down operations in March 2026, we didn't have the runway to track long-term adoption metrics. However, immediate validation came directly from our heaviest daily power users: our CEO and CTO shared on Slack that the sales team loved the update and found it much less blocking. When reviewing an existing catalog, the bottom tab stayed out of the way; when adding new SKUs, they could summon the popover and work with the AI while keeping their inventory context right behind it.

---

### Retrospective

AI interfaces in B2B tools shouldn't demand center stage when the user's real job is managing dense data. Even when engineering and design arrive at the same high-level pattern in parallel, sweating the state transitions, sizing rules, and recovery flows is what makes the UI hold up in daily use.
