# Project Archive

| Field | Value |
| :--- | :--- |
| **Client / Company** | GoDaddy |
| **Project Title** | Buy Shipping Label Experience |
| **Role** | Senior Product Designer |
| **Duration** | 4 Months (March – June 2022) |
| **Launch Date** | July 5, 2022 |
| **Project Type** | Web App / Core B2B Fulfillment Funnel |
| **Teams Involved** | Product Management, Engineering Lead & Dev Team, ShipEngine Partner Design Team |
| **Headline Impact** | 6,722 active merchants (+236% increase) purchased 7,521 shipping labels in 3 months |

---

# Live Portfolio Sidebar

| Attribute | Exact Live Value |
| :--- | :--- |
| **Role** | Senior Product Designer |
| **Timeline** | 4 Months (Released July 2022) |
| **Teams** | Product Management, Engineering Lead & Dev Team, ShipEngine Partner Design Team |
| **Metric Badge** | 6.7K Merchants |

---

# GoDaddy: Native Shipping Labels Integration

## Improving the order fulfillment process for Power Sellers by natively integrating ShipEngine into the GoDaddy Commerce ecosystem.

### Overview

6,722 active merchants (+236% increase over legacy tool) purchased 7,521 shipping labels in the first 3 months.

---

### The Problem Space

Store owners were losing hours searching externally for rates across carrier portals. A previous integration (Shippo) failed with only an 11.3% adoption rate among 44,000 monthly active merchants due to high setup complexity and lack of platform trust.

---

### Hypothesis

By natively embedding shipping label purchases directly inside the Order Details workflow using GoDaddy's design system, we could build merchant trust and significantly reduce fulfillment time for high-volume Power Sellers.

---

### Constraints

Integrating a third-party partner API (ShipEngine) required navigating a multi-step setup (terms, payment methods, account funding) that carried a high risk of user fatigue and drop-off.

---

### Design Iterations & Trade-offs ("The Messy Middle")

Balancing third-party API requirements with a clean merchant experience required exploring multiple UI architectures and solving critical trust barriers:

#### Exploration 1: 3-Column & Step-by-Step Wizard Layouts
The 3-column layout felt cramped on standard laptop screens (1366x768), while the step-by-step wizard forced merchants to click back and forth between screens when tweaking package weights.

#### Exploration 2: Fragmented View & Print Post-Purchase Confirmation
Treating View and Print as separate actions created awkward layout gaps and forced extra clicks after label purchase.

#### Exploration 3: Unbranded Third-Party ShipEngine Setup
In usability testing with the GoDaddy Customer Council, merchants distrusted unbranded screens ('I don't see any GoDaddy logo... can I trust them?'), threatening feature adoption.

---

### Solution

I designed a structured, 5-step fulfillment flow built on GoDaddy's DeepSee design system. The experience starts on the Order Details page with a non-intrusive promotional modal, routes merchants through an educational Shipping Settings hub, guides them through a co-branded ShipEngine onboarding flow, and lands them in a 2-column Buy Shipping Label hub with live rate calculations and instant 1-click purchasing.

---

### Edge Cases Considered

* Modal Snooze Logic: Selecting 'Maybe Later' suppresses promotional prompts for a set period to prevent modal fatigue for merchants fulfilling dozens of daily orders.
* API Rate Validation Gates: Package dimensions and recipient addresses must pass strict API validation before rate calculation is triggered, preventing rate-limit calls and inaccurate estimates.
* Flexible Carrier Onboarding: Merchants can skip configuring specific carriers during initial setup and finish them later in Shipping Settings without blocking immediate order fulfillment.

---

### Outcomes

Launched in July 2022. 6,722 active merchants (+236% increase over legacy tool) purchased 7,521 shipping labels directly within GoDaddy in the first 3 months. Over 2,000 merchants adopted the feature on Day 1, earning our team a featured shout-out during GoDaddy's company-wide All-Hands meeting.

---

### Retrospective

Enterprise feature adoption is fundamentally about user trust and context preservation. Merchants didn't reject shipping tools because of pricing—they rejected them because leaving their home dashboard felt fragmented. Maintaining strict brand continuity across third-party API boundaries turned a tedious chore into a high-converting tool.
