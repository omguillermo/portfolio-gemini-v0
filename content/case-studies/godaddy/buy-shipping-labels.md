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
| **Homepage Card Headline** | Facilitating 7.5K shipping label purchases for 6.7K GoDaddy Power Sellers |

---

# GoDaddy: Native Shipping Labels Integration

## Improving the order fulfillment process for Power Sellers by natively integrating ShipEngine into the GoDaddy Commerce ecosystem.

<!--
Image: gd-bsl-hero.png  
Caption: N/A 
Alt: GoDaddy Buy Shipping Label hero image
-->

### Overview

6,722 active merchants (+236% increase over legacy tool) purchased 7,521 shipping labels in the first 3 months.

---

### The Problem Space

Store owners were losing hours searching externally for rates across carrier portals. A previous integration (Shippo) failed with only an 11.3% adoption rate among 44,000 monthly active merchants due to high setup complexity and lack of platform trust.

<!--
Image: gd-bsl-problem.png  
Caption: Shippo was a decent integration, but users weren’t using it enough. A lot of label fulfillment was still done externally. Note: C1 in GoDaddy’s context refers to GoDaddy Commerce users.
Alt: Shippo’s user research results
-->

---

### Hypothesis

By natively embedding shipping label purchases directly inside the Order Details workflow using GoDaddy's design system, we could build merchant trust and significantly reduce fulfillment time for high-volume Power Sellers (merchants generating $100k+ in annual volume).

---

### Constraints

ShipEngine setup required users to navigate a multi-step flow: accepting terms, adding payment methods, and funding their account. This carried a high risk of user fatigue and drop off.

The order fulfillment flow also had the user click through a couple of screens: orders list, then order details, then the new purchase label experience, and lastly confirmation and print pages.

We were dealing with a multiple step flow within a multiple step flow basically.

---

### Design Iteration & Trade-offs (The Messy Middle)

Balancing ShipEngine’s requirements with the need for a smooth order fulfillment experience required exploring different UI approaches to attempt simplifying the parts of the process that were under the project’s scope and GoDaddy’s control.

My first approach was sketching some wireframes, where I explored layouts with 2 columns, 3 columns, and a step by step wizard for the purchase label page.

<!--
Image: gd-bsl-sketches.png
Caption: For this project I started with a pencil to avoid getting bias from existing components. Some proposals shown here like the step by step wizard didn’t make it to the higher fidelity mocks at all.
Alt: GoDaddy Buy Shipping Labels initial sketch wireframes
-->

#### Exploration 1: 2-column layout
The concept was simple: one column for filling all the information required for the label purchase and another to review and confirm.

The downside of this proposal is that it required a lot of scrolling to even reach the pick rates card and then you had to scroll back up to the summary card to purchase. I tried to set the summary card to “sticky” position but that wasn’t a standard GoDaddy pattern.

<!-- 
Image: gd-bsl-2col-early.png
Caption: The first two-column layout for the buy label interface. A bit unbalanced, with too much visual weight on the left. 
Alt: GoDaddy shipping labels early two-column proposal
-->

#### Exploration 2: 3 column layout
To try to balance things a bit more, I tried to think of each column as a step in the label creation process:
* **First column:** for reviewing existing information such as items in order, and addresses
* **Second column:** to input required package information and shipment details so ShipEngine API can return accurate rates
* **Third column:** Summary and rates card

However, the 3-column layout felt cramped on standard laptop screens (1366x768) and was therefore discarded.

<!-- 
Image: gd-bsl-3col-early.png
Caption: A three-column layout that had better information architecture (so to speak) but failed to provide decent UX at smaller breakpoints
Alt: GoDaddy shipping labels early three-column proposal
-->

#### Other Explorations: Post-purchase experience and Setup
As mentioned before, the buy shipping label page was only one of multiple pages involved in the purchase flow. We also explored a couple of layouts for the view and print label page. The goal here is being a place where users could always return to print their label or simply to refund it.

In the end we realized that the download option was unnecessary since the PDF would open anyways with the view and print option.

<!-- 
Image: gd-bsl-viewprint-proposals.png
Caption: Two of the view and print label designs. Three cards side by side and three horizontal cards vertically aligned for easier access to the CTA
Alt: GoDaddy shipping labels view and print proposals
-->

For the setup, we leveraged the existing shipping settings page and added a dedicated tab for the ShipEngine integration. Initially it required an API key but thankfully the engineering team was able to set that up automatically for the user.

<!-- 
Image: gd-bsl-shipping-settings.png
Caption: The dedicated ShipEngine tab inside GoDaddy shipping settings. The version shown here is after the devs removed the API key field so merchants never had to copy-paste tokens.
Alt: GoDaddy shipping settings page with shipengine tab active
-->

#### Results from early user interviews
We presented the initial designs to real users from the GoDaddy Customer Council. On the positive side, the feedback highlighted how easy it was to setup and the value it provided:
> “I’ve used a fair share of shipping tools, and this one was pretty easy to setup compared to others”  
> “It’s valuable to keep me within the GoDaddy ecosystem.”

However, we uncovered a critical insight: users didn’t know what ShipEngine was and felt they couldn’t trust the unbranded setup screens.
> “I don’t see any GoDaddy logo in this ShipEngine, can I trust them?”  
> “I prefer Shopify because it doesn’t require integrations. The fewer integrations I have to set up, the better.”

This feedback led us to request ShipEngine to incorporate the GoDaddy logo in their flow to mitigate these worries.

---

### Solution

I designed a structured, end to end fulfillment flow utilizing GoDaddy's "DeepSee" design system and all the gathered data from previous iterations and usability tests.

<!-- 
Image: gd-bsl-deepsee.png
Caption: GoDaddy’s design system at the time was called DeepSee. It featured standardized form fields, cards, badges, and modals.
Alt: Snapshot of GoDaddy’s design system at the time
-->

The user journey goes through the following steps:
1. **Order List:** The user selects an order
2. **Order Details:** When the user clicks on the “Buy Shipping Label” button on Unfulfilled shipping-type orders, they are prompted to set up the integration
3. **Shipping Settings:** The user can learn more about the integration and kickstart the setup flow
4. **ShipEngine:** This happens entirely on ShipEngine’s side, but we provided them with the right content and logo assets
5. **Buy Shipping Label:** The dedicated purchase interface in a 2-column layout where they could calculate rates, pick a label and purchase it with the funds in their ShipEngine account
6. **View and Print:** Once processed, users were able to immediately print their label or refund if needed

<!-- 
Image: gd-bsl-solution-fallback.png
Caption: The E2E flow. Users start in an unfulfilled order, set up ShipEngine, fill package and shipping details, calculate rates, buy a label, print it, and then fulfill it.
Alt: This actually is a carousel… therefore each img has alt
gd-bsl-solution-fallback-1: Order details page for an unfulfilled order
gd-bsl-solution-fallback-2: Modal prompting user to setup ShipEngine
gd-bsl-solution-fallback-3: Shipping settings page on ShipEngine tab
gd-bsl-solution-fallback-4: Snapshot of ShipEngine setup flow, carrier step
gd-bsl-solution-fallback-5: Buy shipping label page
gd-bsl-solution-fallback-6: View and print label page with success growl
gd-bsl-solution-fallback-7: Order details page for a now fulfilled order
-->

[Or try the Prototype!](https://www.figma.com/proto/LVRMJQgIyX1IYZ9Xc8NHUR/-GoDaddy--Create-a-Shipping-Label---Shipping-Settings-Backup?node-id=2683-141709&viewport=610%2C-698%2C0.06&t=I4ksuMmluDavXO4p-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2683%3A141709&show-proto-sidebar=1&page-id=9%3A246564&hide-ui=1)

---

### Trade-offs

* **Design System Compliance vs. Custom Sticky Layout:** In Exploration 1 (2-column layout), a sticky summary card would have prevented scrolling back and forth between rates and summary card. However, sticky cards were not a standard DeepSee pattern. This limitation is the reason why the rates card was moved to the right column. Thankfully, the rates returned usually feature the cheapest rate at the top - this rate is usually the most picked by merchants.
* **Third-Party Partner Speed vs. Pure In-House Control:** Partnering with ShipEngine meant accepting an external partner setup flow rather than spending years building a carrier engine from scratch.

---

### Edge Cases Considered

* **Modal Snooze Logic:** Selecting 'Maybe Later' suppresses promotional prompts for a set period to prevent modal fatigue for merchants fulfilling dozens of daily orders.
* **Flexible Carrier Onboarding:** Merchants can skip configuring specific carriers during initial setup and finish them later in Shipping Settings without blocking immediate order fulfillment.
* **API Rate Validation Gates:** Package dimensions and recipient addresses must pass strict API validation before rate calculation is triggered, preventing rate-limit calls and inaccurate estimates.

---

### Outcomes

Launched in July 2022. 6,722 active merchants (+236% increase over legacy tool) purchased 7,521 shipping labels directly within GoDaddy in the first 3 months.

Over 2,000 merchants adopted the feature on Day 1, earning our team a featured shout-out during GoDaddy's company-wide All-Hands meeting.

---

### Retrospective

The success of this project proves that maintaining brand presence is critical for third-party feature adoption and user trust. Business owners can be sensitive to price, of course, but the most important thing for them was knowing GoDaddy had their backs when connecting ShipEngine.

From a design perspective, I learned the importance of considering the end to end flow including external touchpoints where we couldn’t control the experience. In the end, I had to learn how ecommerce order fulfillment worked, collaboration between teams, and the importance of real customer feedback.

The UI even got an overhaul at a later point, but the core UX remained the same, reinforcing the strength of the decisions taken during this project.
