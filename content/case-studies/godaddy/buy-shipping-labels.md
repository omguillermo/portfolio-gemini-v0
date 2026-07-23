# Archive Metadata

| Field | Value |
| :--- | :--- |
| **Client / Company** | GoDaddy |
| **Project Title** | Buy Shipping Label Experience |
| **Year & Launch Date** | Released July 5th, 2022 (Q3 2022) |
| **Timeline** | 4 months (March – June 2022) |
| **Project Type** | Web App / Core B2B Fulfillment Funnel |
| **Teams Involved** | Senior Product Designer (Omar Guillermo), Product Management, Engineering Lead & Dev Team, ShipEngine Partner Design Team |

---

# Live Portfolio Metadata

| Attribute | Detail |
| :--- | :--- |
| **Role** | Senior Product Designer |
| **Timeline** | 4 Months (March – June 2022, Released July 2022) |
| **Impact** | 6,722 active merchants (+236% increase over legacy tool) purchased 7,521 shipping labels in the first 3 months. |

---

# GoDaddy: Native Shipping Labels Integration

## Improving the order fulfillment process for Power Sellers by natively integrating ShipEngine into the GoDaddy Commerce ecosystem.

### Overview

When store owners spend hours hunting for discounted shipping label rates across external carrier portals, they lose time they should be spending growing their business. I led the end-to-end UX/UI design to integrate native shipping label purchasing directly inside GoDaddy Commerce via ShipEngine®. In the first 3 months post-launch, 6,722 active merchants purchased 7,521 shipping labels without ever leaving their GoDaddy dashboard.

---

### The Problem Space

GoDaddy Commerce merchants were losing valuable time copying order details into external carrier websites just to buy shipping labels. 

GoDaddy previously offered a third-party shipping tool called Shippo, but adoption was abysmal. Out of 44,000 monthly active sellers, only 11.3% used it. Through merchant interviews and analytics, we identified three core reasons for this failure:

1. **Lack of Platform Trust:** Merchants felt uneasy handing sensitive customer data to unbranded third-party modals.
2. **Workflow Fragmentation:** Power Sellers (merchants making $100K+ in gross payment volume) batch their fulfillment at the end of the day. Forcing them into separate tools broke their mental model.
3. **High Setup Complexity:** Navigating external carrier agreements and pricing tiers felt like a chore rather than a convenience.

---

### Hypothesis

We hypothesized that by natively embedding the shipping label purchase flow directly inside the Order Details context using GoDaddy's native design system, we could significantly reduce fulfillment time and build merchant trust—driving higher adoption among high-volume Power Sellers.

---

### Constraints

* **Third-Party Onboarding Friction:** The integration relied on ShipEngine’s API. To initialize an account, merchants had to agree to terms, add payment methods, and fund a starting balance. This multi-step onboarding carried a high risk of user fatigue and drop-off.
* **API Validation Requirements:** Rates could not be calculated until package dimensions and recipient addresses were strictly validated by ShipEngine's API, requiring rigid error and validation state handling.
* **Design System Transitions:** The project had to be built using GoDaddy's legacy "DeepSee" design system, while keeping component structures clean enough for future migration to the newer "Antares" system.

---

### Design Iterations & Trade-offs ("The Messy Middle")

Balancing third-party technical requirements with a clean merchant experience required navigating several key trade-offs during design explorations.

#### Exploration 1: Layout Structure for the "Buy Label" Hub
I explored three different layout architectures for the main label creation screen:
* **3-Column Layout:** Placed package info on the left, rate comparisons in the center, and a summary receipt on the right. While comprehensive, it felt cramped and overwhelmed merchants on smaller laptop screens (1366x768).
* **Step-by-Step Wizard:** Bounded setup into sequential screens. This failed in testing because Power Sellers wanted to compare live carrier rates while tweaking package weights without constantly clicking "Back" and "Next".
* **2-Column Split View (Selected):** Placed all inputs (Package Details, Carrier Presets, Ship-To Address) in a wide left column and live rate calculations with purchase actions on the right. This layout won in architectural reviews because it kept critical rate decisions above the fold while maintaining scannable input fields.

#### Exploration 2: Consolidating View & Print Post-Purchase Actions
In early iterations, "View Label" and "Print Label" were designed as two separate confirmation steps, leaving an awkward empty card state on the screen post-purchase. During a mid-project sprint, I refactored this into a unified 3-card horizontal layout (**Print Label**, **Customize Packing Slip**, and **Request Refund**) which eliminated dead space and gave merchants immediate post-purchase control.

#### Exploration 3: Overcoming the Brand Trust Barrier in Usability Testing
During usability testing with the GoDaddy Customer Council (interviewing both SMBs and Power Sellers), we hit an alarming blocker: when merchants were routed into unbranded ShipEngine setup screens, multiple users hesitated.
> *"I don't see any GoDaddy logo here... can I trust this with my credit card?"*

This feedback proved that third-party friction was killing adoption. I collaborated with the ShipEngine partner design team to inject GoDaddy brand elements, security badges, and clear explanatory copy directly into the setup flow, bridging the trust gap before final handoff.

---

### Solution

I designed a structured, 5-step end-to-end fulfillment flow inside GoDaddy's DeepSee design system:

1. **Order Details & Smart Modal Trigger:** Merchants viewing an unfulfilled order see a prominent "Buy Shipping Label" action. Clicking it triggers an educational modal introducing native rates.
2. **Educational Shipping Settings:** Directs merchants to a dedicated settings page explaining carrier benefits and how account balances work before setup begins.
3. **Streamlined ShipEngine Setup:** A guided onboarding flow where merchants accept terms, add payment details, and fund their shipping balance.
4. **2-Column Buy Shipping Label Hub:** Merchants enter package dimensions, validate addresses, calculate discounted carrier rates in real time, and purchase labels in one click.
5. **View, Print & Fulfillment Confirmation:** Instant confirmation with direct actions to print shipping labels, customize packing slips, or request label refunds, alongside toast notifications.

---

### Edge Cases Considered

* **Snooze Logic for Promo Modals:** To prevent modal fatigue for merchants fulfilling dozens of orders daily, selecting "Maybe Later" suppresses the promotional modal across all orders for a set period.
* **API Rate Validation Gates:** The UI prevents rate calculations until both package weight/dimensions and the "Ship-To" address pass strict API validation, protecting GoDaddy from unnecessary rate-limit calls and inaccurate rate estimates.
* **Flexible Carrier Onboarding:** Merchants can skip configuring specific carriers (like UPS or FedEx) during initial setup and finish them later in Shipping Settings without blocking their immediate shipment.

---

### Outcomes

* **Massive Merchant Adoption:** Reached **6,722 active merchants** in the first 3 months—a **236% increase** in adoption compared to the legacy Shippo tool.
* **7,521 Shipping Labels Purchased:** Generated over 7.5K labels directly within the GoDaddy dashboard during the initial 90-day window.
* **Day 1 Tractions & All-Hands Recognition:** Over **2,000 merchants** adopted the feature on launch day, earning our cross-functional team a featured shout-out in GoDaddy's company-wide All-Hands meeting.
* **Support Ticket Reduction:** By keeping fulfillment native and automating tracking number syncs back to buyers, support inquiries regarding lost tracking numbers dropped significantly.

---

### Retrospective

This project proved that enterprise feature adoption is fundamentally about **user trust and context preservation**. 

Merchants didn't reject our previous shipping tool because they disliked discounted shipping—they rejected it because leaving their core dashboard felt fragmented and untrustworthy. As one Power Seller noted during testing:
> *"I trust GoDaddy. It's valuable to keep me within my home ecosystem."*

By respecting the merchant's workflow and maintaining strict brand continuity across third-party API boundaries, we transformed a tedious daily task into an essential, high-performing tool.
