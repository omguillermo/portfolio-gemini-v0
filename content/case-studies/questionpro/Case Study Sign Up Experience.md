# Sign Up Redesign

![][image1]

# Metadata

| Client | QuestionPro |
| :---- | :---- |
| **Project Title** | Sign Up Experience |
| **Year** | 2021 |
| **Launch** | November 13, 2021 |
| **Timeline** | Q3 \- Q4 2021 |
| **Role** | UX Designer |
| **Project type** | Web App / B2B SaaS |
| **Teams Involved** | COO, VP of Engineering, Developer Team and Design |

# Website case study metadata

| Role | UX Designer |
| :---- | :---- |
| Timeline | Q3-Q4 2021, Released Nov 2021 |
| Impact | Increased overall conversion rate by 5% and significantly improved lead quality by dynamically aligning the onboarding flow with marketing entry points. |

# Content v2

By Gemini with guardrails

## **QuestionPro: Fixing a Broken Sign-Up Flow**

**How we improved lead quality and boosted conversion rates by replacing an outdated, generic registration form with a clear, targeted layout.**

## The Problem Space

Our old sign-up form was hurting conversions. The UI hadn't been updated in years and looked incredibly outdated. In fact, it looked so unprofessional that some users literally told us they thought it was a phishing attempt or a fake site.

<!--   
Image: qp-signup-before.png  
Caption: The previous sign up UI. Note how SSO options, login and trust badges are below the fold on a standard 1366x768 screen.  
Alt: Screenshot of the previous QuestionPro sign up page  
-->

To make matters worse, QuestionPro offers multiple distinct product lines like Research, CX, and Employee Experience. Because we used a single generic form for everything, users constantly signed up for the wrong product type. This created a massive wave of support tickets and account deletion requests right at the start of their experience.

## Hypothesis

I thought the solution was simply to remove friction and update the visuals. I stripped the form down to just email and password, moved our security badges to the top of the page, and cleaned up the SSO buttons. My goal was to make account creation as fast as possible.

## Constraints

* **The Inbound Sales Dilemma:** Standard UX guidelines say fewer fields mean higher conversion. But our Inbound Sales team fiercely pushed back. They needed first names, last names, and phone numbers to qualify leads. Removing those fields would just force sales reps to chase down contact info manually later. We compromised: Sales agreed to let me test a shorter flow, but only if the data proved it was better for business.  
* **Routing Traffic:** The new design had to look at where a user came from, like a specific marketing page, and automatically send them to the right product experience.

## Design Iterations & Trade-offs

Balancing form length with layout took some trial and error.

### Exploration 1: Layout and Trust

I started by testing different structures to see what made users feel secure:

* **Single Column Layouts:** I tried centered forms. One had a corporate mascot waving, and another just used a clean headline. We dropped both. The mascot felt too casual for an enterprise tool, and the text version felt empty and untrustworthy.  
  * <!-- Image: qp-signup-exp1-single.png Caption: Two first single column proposals. One featuring the QuestionPro mascot waving and the other just a heading and a subheading. Alt: Discarded single column proposals -->
  
* **Two Column Layouts:** I switched to a split view, placing product context on the left and the actual form on the right. This felt much more robust. It allowed us to keep everything above the fold without cluttering the input fields. An alternate version without the list of features and graphics used the second column to highlight the SSO options.  
  * <!-- Image: qp-signup-exp1-2col.png Caption: Two column designs. The illustrations added delight but started to add visual clutter. The SSO options felt floaty on the right, creating an unbalanced layout. Alt: Discarded two column proposals -->

In review meetings with our COO and VP of Engineering, the two column layout won because it displayed essential info without forcing users to scroll. We also tried using specific product illustrations here, but they turned out to be too distracting, so we swapped them for scannable bullet points instead.

### Exploration 2: The Short Form Backfire

Leaning into the rule of thumb that shorter is better, we launched an MVP with just Email and Password.

<!--   
Image: qp-signup-exp2-min.png  
Caption: Initial test where we attempted to skip the name and phone fields. It was promising although later feedback would prove it problematic.   
Alt: Two column design proposal with reduced form length  
-->

It did work for conversion, giving us a 5.8% lift. But it broke our sales pipeline. Because we weren't collecting names or phone numbers, lead quality plummeted, and the sales team was left flying blind.

## Solution

We pivoted away from pure minimalism and moved forward with a targeted, two column layout that balanced user confidence with business requirements.

<!--   
Image: qp-signup-final-min.png  
Caption: The final design features a two column layout, with contextual information on the left, and a clear form on the right.  
Alt: Final signup design
-->

* **Left Column (Trust and Clarity):** This side handles security and context. It features dynamic messaging tailored to the user ("Get started with your free CX account\!") alongside three clear value propositions, backed by highly visible BBB and GoDaddy security badges to eliminate the phishing anxieties.  
* **Right Column (The Form Card):** We brought back the First Name, Last Name, and Phone Number fields. The SSO buttons were made much larger, used original logos, and placed a clear "OR" separator to show they were instant alternatives. To add some depth to the page, we wrapped the form in a white card container.  
* **Dynamic Funneling:** The page now adapts to the user's entry point. If you come from a CX marketing page, you get a CX trial. General traffic lands on our free Essentials tier, leaving room for the business to upsell them inside the app later.

<!--   
Image: qp-signup-final-bento.png  
Caption: UI details. Left side with plan name bolded, key plan features, login, close up of input, close up of main CTA, SSO buttons, trust badges.  
Alt: Bento style grid of UI element closeups  
-->

**The Trade-off:** Reintroducing the name and phone fields did cause a 3% dip in conversion compared to our ultra-short MVP. However, the trade-off was worth it because it gave Sales the high-quality data they needed to actually close deals.

## Outcomes

* **The Launch:** The new flow went live on November 13, 2021\.  
* **Stable Conversion:** We maintained a steady 20% conversion rate across our core B2B funnels.  
* **Executive Validation:** Our COO, Erik Koto, confirmed that this new flow delivered a 5% total uplift in conversion compared to the legacy form.  
* **Happier Teams:** By routing traffic dynamically, we stopped users from signing up for the wrong accounts. Support tickets for accidental sign-ups plummeted, and Inbound Sales got the high-quality leads they asked for.

The design struck such a good balance between user trust and business data needs that the foundational UI is still live in production today.

### **What I Learned**

This project taught me the difference between a simple form and a clear one. The failure of our ultra-short MVP proved that users want context and safety just as much as they want fewer fields. Designing for enterprise growth means realizing that standard UX patterns sometimes have to take a back seat to building trust and supporting internal business operations.