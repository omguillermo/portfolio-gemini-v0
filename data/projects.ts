export interface VisualHighlight {
  image_url: string;
  caption: string;
}

export interface Iteration {
  approach: string;
  why_it_failed: string;
  image_url?: string;
  caption?: string;
}

export interface CarouselSlide {
  title: string;
  image_url: string;
  caption: string;
}

export interface ProjectData {
  archive_title?: string;
  title: string;
  card_headline: string;
  subtitle: string;
  role: string;
  timeline: string;
  impact: string;
  constraint: string;
  teams_involved: string;
  problem_hypothesis: {
    problem: string;
    hypothesis: string;
  };
  problem_image?: {
    image_url: string;
    caption: string;
  };
  design_rationale: string;
  iterations: Iteration[];
  system_solution: string;
  carousel_slides?: CarouselSlide[];
  edge_cases_handled: string[];
  outcomes: string;
  visual_highlights: VisualHighlight[];
  retrospective: string;
  tag: string;
  metric: string;
  thumbnail: string;
  hero_image?: string;
  prototype_url?: string;
  password?: string;
}

export const projectsData: Record<string, ProjectData> = {
  'stoki-ai': {
    archive_title: "Stoki AI Assistant Redesign",
    title: "Stoki AI Assistant Redesign",
    card_headline: "Redesigning StockApp's AI chat to help with catalog enrichment & sales reports for 900+ B2B users",
    subtitle: "Redesigning an intrusive B2B AI assistant into a non-blocking, persistent workflow tool.",
    role: "Founding Designer",
    timeline: "August 2025 - March 2026",
    tag: "B2B, AI Chat, Wholesale",
    metric: "$871K Facilitated",
    thumbnail: "/projects/stockapp-ai/stockapp-cover-stoki-temp.png",
    impact: "Facilitated over $871K in B2B orders by 900+ active users. Sales teams reported increased satisfaction and more frequent tool adoption after the frictionless redesign.",
    constraint: "The AI assistant needed to remain highly visible and accessible from any page, while allowing non-blocking interaction so users could view underlying content.",
    teams_involved: "Co-Founders, Sales, Engineering",
    problem_hypothesis: {
      problem: "The original AI chat interface blocked users from interacting with page content, obscuring critical inventory items. Navigating while chatting also caused new content to load invisibly behind the widget.\n\n![Original AI chat interface blocking interaction with page content.](/projects/stockapp-ai/stoki-ai-before-issue-block-042026.png)\n\n![Navigating while chatting caused new content to load invisibly behind the full page widget.](/projects/stockapp-ai/stoki-ai-before-issue-fptakeove-042026.png)",
      hypothesis: "By shifting to a dynamic and draggable interface, we could remove friction, allowing users to reference underlying data while utilizing the AI's enrichment tools simultaneously."
    },
    design_rationale: "To solve the obstruction issue, I explored several iterations after doing research on industry standard patterns:",
    iterations: [
      {
        approach: "Viewport Reduction (Fixed Bottom)",
        why_it_failed: "Keeping tools fixed at the bottom cramped the data-heavy screens, reducing the 'fold' and forcing unnecessary scrolling for primary inventory tasks.",
        image_url: "/projects/stockapp-ai/stoki-ai-proposal-bottom-042026.png",
        caption: "Exploration A: Attempting to integrate the AI into a fixed status bar at the bottom."
      },
      {
        approach: "Persistent Right Panel",
        why_it_failed: "Triggered from the right nav bar, this approach significantly reduced the horizontal space available for the product directory, leading to poor readability for SKUs.",
        image_url: "/projects/stockapp-ai/stoki-ai-proposal-sidebar-042026.png",
        caption: "Exploration B: A standard sidebar approach that failed due to extreme data density requirements."
      }
    ],
    system_solution: "I redesigned the entry point into a subtle, non-blocking folder tab anchored at the bottom center of the screen. When activated, the chat opens as a draggable floating window with dynamic width (640px to 1080px) that properly displays complex agent responses, like data tables, without taking over the screen.",
    edge_cases_handled: [
      "Human-in-the-Loop Safeguards: For bulk inventory updates, the system presents a 'before and after' diff proposal that requires explicit user confirmation to prevent accidental database changes.",
      "Dynamic UI Scaling: The floating window defaults to 640px but dynamically expands to 1080px to accommodate complex data tables without cutting off information.",
      "Implicit Intent Handling: The agent prompts for confirmation if it detects product data pasted without a command, ensuring intentional actions only."
    ],
    outcomes: "Facilitated over $871K in B2B orders by 900+ active users. Post-launch surveys showed a significant increase in tool adoption and user satisfaction after shifting to the frictionless floating trigger.",
    visual_highlights: [
      {
        "image_url": "/projects/stockapp-ai/stoki-ai-solution-tab-trigger-042026.png",
        "caption": "Entry Point: The non-blocking folder tab anchored to the system grid."
      },
      {
        "image_url": "/projects/stockapp-ai/stoki-ai-solution-tab-active-042026.png",
        "caption": "After clicking the tab, the composer pill would show alongside options to see previous chats, resume latest one, and prompt suggestions."
      },
      {
        "image_url": "/projects/stockapp-ai/stoki-ai-solution-tab-example-042026.png",
        "caption": "The new popover experience wasn't intrusive and allowed dynamic width based on the response, with additional customization options."
      }
    ],
    retrospective: "Designing for AI requires anticipating complex outputs and giving users total control over screen real estate. If given more time, I would expand discovery features and improve UI states for handling API errors during high-volume bulk updates."
  },
  'godaddy-shipping': {
    archive_title: "Buy Shipping Label Experience",
    title: "GoDaddy: Native Shipping Labels Integration",
    card_headline: "Facilitating 7.5K shipping label purchases for 6.7K GoDaddy Power Sellers",
    subtitle: "Improving the order fulfillment process for Power Sellers by natively integrating ShipEngine into the GoDaddy Commerce ecosystem.",
    role: "Senior Product Designer",
    timeline: "4 Months (Released July 2022)",
    tag: "B2C, Fulfillment, eCommerce",
    metric: "6.7K Merchants",
    thumbnail: "/projects/godaddy-labels/godaddy-shippinglabels-cover-temp.png",
    hero_image: "/projects/godaddy-labels/gd-bsl-hero.png",
    impact: "6,722 active merchants (+236% increase over legacy tool) purchased 7,521 shipping labels in the first 3 months.",
    constraint: "ShipEngine setup required users to navigate a multi-step flow: accepting terms, adding payment methods, and funding their account. This carried a high risk of user fatigue and drop off.\n\nThe order fulfillment flow also had the user click through a couple of screens: orders list, then order details, then the new purchase label experience, and lastly confirmation and print pages.\n\nWe were dealing with a multiple step flow within a multiple step flow basically.",
    teams_involved: "Product Management, Engineering Lead & Dev Team, ShipEngine Partner Design Team",
    problem_hypothesis: {
      problem: "Store owners were losing hours searching externally for rates across carrier portals. A previous integration (Shippo) failed with only an 11.3% adoption rate among 44,000 monthly active merchants due to high setup complexity and lack of platform trust.\n\n![Shippo was a decent integration, but users weren’t using it enough. A lot of label fulfillment was still done externally. Note: C1 in GoDaddy’s context refers to GoDaddy Commerce users.](/projects/godaddy-labels/gd-bsl-problem.png)",
      hypothesis: "By natively embedding shipping label purchases directly inside the Order Details workflow using GoDaddy's design system, we could build merchant trust and significantly reduce fulfillment time for high-volume Power Sellers (merchants generating $100k+ in annual volume)."
    },
    design_rationale: "Balancing ShipEngine’s requirements with the need for a smooth order fulfillment experience required exploring different UI approaches to attempt simplifying the parts of the process that were under the project’s scope and GoDaddy’s control.\n\nMy first approach was sketching some wireframes, where I explored layouts with 2 columns, 3 columns, and a step by step wizard for the purchase label page.\n\n![For this project I started with a pencil to avoid getting bias from existing components. Some proposals shown here like the step by step wizard didn’t make it to the higher fidelity mocks at all.](/projects/godaddy-labels/gd-bsl-sketches.png)\n\n#### Exploration 1: 2-column layout\n\nThe concept was simple: one column for filling all the information required for the label purchase and another to review and confirm.\n\nThe downside of this proposal is that it required a lot of scrolling to even reach the pick rates card and then you had to scroll back up to the summary card to purchase. I tried to set the summary card to “sticky” position but that wasn’t a standard GoDaddy pattern.\n\n![The first two-column layout for the buy label interface. A bit unbalanced, with too much visual weight on the left.](/projects/godaddy-labels/gd-bsl-2col-early.png)\n\n#### Exploration 2: 3 column layout\n\nTo try to balance things a bit more, I tried to think of each column as a step in the label creation process:\n* **First column:** for reviewing existing information such as items in order, and addresses\n* **Second column:** to input required package information and shipment details so ShipEngine API can return accurate rates\n* **Third column:** Summary and rates card\n\nHowever, the 3-column layout felt cramped on standard laptop screens (1366x768) and was therefore discarded.\n\n![A three-column layout that had better information architecture (so to speak) but failed to provide decent UX at smaller breakpoints](/projects/godaddy-labels/gd-bsl-3col-early.png)\n\n#### Other Explorations: Post-purchase experience and Setup\n\nAs mentioned before, the buy shipping label page was only one of multiple pages involved in the purchase flow. We also explored a couple of layouts for the view and print label page. The goal here is being a place where users could always return to print their label or simply to refund it.\n\nIn the end we realized that the download option was unnecessary since the PDF would open anyways with the view and print option.\n\n![Two of the view and print label designs. Three cards side by side and three horizontal cards vertically aligned for easier access to the CTA](/projects/godaddy-labels/gd-bsl-viewprint-proposals.png)\n\nFor the setup, we leveraged the existing shipping settings page and added a dedicated tab for the ShipEngine integration. Initially it required an API key but thankfully the engineering team was able to set that up automatically for the user.\n\n![The dedicated ShipEngine tab inside GoDaddy shipping settings. The version shown here is after the devs removed the API key field so merchants never had to copy-paste tokens.](/projects/godaddy-labels/gd-bsl-shipping-settings.png)\n\n#### Results from early user interviews\n\nWe presented the initial designs to real users from the GoDaddy Customer Council. On the positive side, the feedback highlighted how easy it was to setup and the value it provided:\n> “I’ve used a fair share of shipping tools, and this one was pretty easy to setup compared to others”\n> “It’s valuable to keep me within the GoDaddy ecosystem.”\n\nHowever, we uncovered a critical insight: users didn’t know what ShipEngine was and felt they couldn’t trust the unbranded setup screens.\n> “I don’t see any GoDaddy logo in this ShipEngine, can I trust them?”\n> “I prefer Shopify because it doesn’t require integrations. The fewer integrations I have to set up, the better.”\n\nThis feedback led us to request ShipEngine to incorporate the GoDaddy logo in their flow to mitigate these worries.",
    iterations: [],
    system_solution: "I designed a structured, end to end fulfillment flow utilizing GoDaddy's \"DeepSee\" design system and all the gathered data from previous iterations and usability tests.\n\n![GoDaddy’s design system at the time was called DeepSee. It featured standardized form fields, cards, badges, and modals.](/projects/godaddy-labels/gd-bsl-deepsee.png)\n\nThe user journey goes through the following steps:\n1. **Order List:** The user selects an order\n2. **Order Details:** When the user clicks on the “Buy Shipping Label” button on Unfulfilled shipping-type orders, they are prompted to set up the integration\n3. **Shipping Settings:** The user can learn more about the integration and kickstart the setup flow\n4. **ShipEngine:** This happens entirely on ShipEngine’s side, but we provided them with the right content and logo assets\n5. **Buy Shipping Label:** The dedicated purchase interface in a 2-column layout where they could calculate rates, pick a label and purchase it with the funds in their ShipEngine account\n6. **View and Print:** Once processed, users were able to immediately print their label or refund if needed",
    carousel_slides: [
      {
        title: "Order Details",
        image_url: "/projects/godaddy-labels/gd-bsl-solution-fallback-1.png",
        caption: "Order details page for an unfulfilled order"
      },
      {
        title: "Setup Modal",
        image_url: "/projects/godaddy-labels/gd-bsl-solution-fallback-2.png",
        caption: "Modal prompting user to setup ShipEngine"
      },
      {
        title: "Shipping Settings",
        image_url: "/projects/godaddy-labels/gd-bsl-solution-fallback-3.png",
        caption: "Shipping settings page on ShipEngine tab"
      },
      {
        title: "ShipEngine Setup",
        image_url: "/projects/godaddy-labels/gd-bsl-solution-fallback-4.png",
        caption: "Snapshot of ShipEngine setup flow, carrier step"
      },
      {
        title: "Buy Shipping Label",
        image_url: "/projects/godaddy-labels/gd-bsl-solution-fallback-5.png",
        caption: "Buy shipping label page"
      },
      {
        title: "View & Print",
        image_url: "/projects/godaddy-labels/gd-bsl-solution-fallback-6.png",
        caption: "View and print label page with success growl"
      },
      {
        title: "Order Fulfilled",
        image_url: "/projects/godaddy-labels/gd-bsl-solution-fallback-7.png",
        caption: "Order details page for a now fulfilled order"
      }
    ],
    prototype_url: "https://www.figma.com/proto/LVRMJQgIyX1IYZ9Xc8NHUR/-GoDaddy--Create-a-Shipping-Label---Shipping-Settings-Backup?node-id=2683-141709&viewport=610%2C-698%2C0.06&t=I4ksuMmluDavXO4p-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2683%3A141709&show-proto-sidebar=1&page-id=9%3A246564&hide-ui=1",
    edge_cases_handled: [
      "Modal Snooze Logic: Selecting 'Maybe Later' suppresses promotional prompts for a set period to prevent modal fatigue for merchants fulfilling dozens of daily orders.",
      "Flexible Carrier Onboarding: Merchants can skip configuring specific carriers during initial setup and finish them later in Shipping Settings without blocking immediate order fulfillment.",
      "API Rate Validation Gates: Package dimensions and recipient addresses must pass strict API validation before rate calculation is triggered, preventing rate-limit calls and inaccurate estimates."
    ],
    outcomes: "Launched in July 2022. 6,722 active merchants (+236% increase over legacy tool) purchased 7,521 shipping labels directly within GoDaddy in the first 3 months.\n\nOver 2,000 merchants adopted the feature on Day 1, earning our team a featured shout-out during GoDaddy's company-wide All-Hands meeting.",
    visual_highlights: [],
    retrospective: "The success of this project proves that maintaining brand presence is critical for third-party feature adoption and user trust. Business owners can be sensitive to price, of course, but the most important thing for them was knowing GoDaddy had their backs when connecting ShipEngine.\n\nFrom a design perspective, I learned the importance of considering the end to end flow including external touchpoints where we couldn’t control the experience. In the end, I had to learn how ecommerce order fulfillment worked, collaboration between teams, and the importance of real customer feedback.\n\nThe UI even got an overhaul at a later point, but the core UX remained the same, reinforcing the strength of the decisions taken during this project."
  },
  'questionpro-signup': {
    archive_title: "Sign Up Experience Redesign",
    title: "Sign Up Experience Redesign",
    card_headline: "Redesigning QuestionPro's SignUp UI to increase lead quality by 5%",
    subtitle: "How we improved lead quality and boosted conversion rates by replacing an outdated, generic registration form with a clear, targeted layout.",
    role: "Senior UI/UX Designer",
    timeline: "Q3-Q4 2021, Released Nov 2021",
    tag: "B2B, Sign Up, Surveys",
    metric: "0.31% Bounce",
    thumbnail: "/projects/questionpro-signup/qp-signup-cover-temp.png",
    hero_image: "/projects/questionpro-signup/qp-signup-hero.png",
    impact: "Increased overall conversion rate by 5% and significantly improved lead quality by dynamically aligning the onboarding flow with marketing entry points.",
    constraint: `* **The Inbound Sales Dilemma:** Standard UX guidelines say fewer fields mean higher conversion. But our Inbound Sales team fiercely pushed back. They needed first names, last names, and phone numbers to qualify leads. Removing those fields would just force sales reps to chase down contact info manually later. We compromised: Sales agreed to let me test a shorter flow, but only if the data proved it was better for business.  
* **Routing Traffic:** The new design had to look at where a user came from, like a specific marketing page, and automatically send them to the right product experience.`,
    teams_involved: "COO, VP of Engineering, Developer Team and Design",
    problem_hypothesis: {
      problem: `Our old sign-up form was hurting conversions. The UI hadn't been updated in years and looked incredibly outdated. In fact, it looked so unprofessional that some users literally told us they thought it was a phishing attempt or a fake site.

To make matters worse, QuestionPro offers multiple distinct product lines like Research, CX, and Employee Experience. Because we used a single generic form for everything, users constantly signed up for the wrong product type. This created a massive wave of support tickets and account deletion requests right at the start of their experience.`,
      hypothesis: "I thought the solution was simply to remove friction and update the visuals. I stripped the form down to just email and password, moved our security badges to the top of the page, and cleaned up the SSO buttons. My goal was to make account creation as fast as possible."
    },
    problem_image: {
      image_url: "/projects/questionpro-signup/qp-signup-before.png",
      caption: "The previous sign up UI. Note how SSO options, login and trust badges are below the fold on a standard 1366x768 screen."
    },
    design_rationale: "Balancing form length with layout took some trial and error.\n\nI started by testing different structures to see what made users feel secure:",
    iterations: [
      {
        approach: "Single Column Layouts",
        why_it_failed: "I tried centered forms. One had a corporate mascot waving, and another just used a clean headline. We dropped both. The mascot felt too casual for an enterprise tool, and the text version felt empty and untrustworthy.",
        image_url: "/projects/questionpro-signup/qp-signup-exp1-single.png",
        caption: "Two first single column proposals. One featuring the QuestionPro mascot waving and the other just a heading and a subheading."
      },
      {
        approach: "Two Column Layouts",
        why_it_failed: "I switched to a split view, placing product context on the left and the actual form on the right. This felt much more robust. It allowed us to keep everything above the fold without cluttering the input fields. An alternate version without the list of features and graphics used the second column to highlight the SSO options.\n\nIn review meetings with our COO and VP of Engineering, the two column layout won because it displayed essential info without forcing users to scroll. We also tried using specific product illustrations here, but they turned out to be too distracting, so we swapped them for scannable bullet points instead.",
        image_url: "/projects/questionpro-signup/qp-signup-exp1-2col.png",
        caption: "Two column designs. The illustrations added delight but started to add visual clutter. The SSO options felt floaty on the right, creating an unbalanced layout."
      },
      {
        approach: "Minimalist Short Form MVP",
        why_it_failed: "Leaning into the rule of thumb that shorter is better, we launched an MVP with just Email and Password. It did work for conversion, giving us a 5.8% lift. But it broke our sales pipeline. Because we weren't collecting names or phone numbers, lead quality plummeted, and the sales team was left flying blind.",
        image_url: "/projects/questionpro-signup/qp-signup-exp2-min.png",
        caption: "Initial test where we attempted to skip the name and phone fields. It was promising although later feedback would prove it problematic."
      }
    ],
    system_solution: `We pivoted away from pure minimalism and moved forward with a targeted, two column layout that balanced user confidence with business requirements.

* **Left Column (Trust and Clarity):** This side handles security and context. It features dynamic messaging tailored to the user ("Get started with your free CX account!") alongside three clear value propositions, backed by highly visible BBB and GoDaddy security badges to eliminate the phishing anxieties.  
* **Right Column (The Form Card):** We brought back the First Name, Last Name, and Phone Number fields. The SSO buttons were made much larger, used original logos, and placed a clear "OR" separator to show they were instant alternatives. To add some depth to the page, we wrapped the form in a white card container.  
* **Dynamic Funneling:** The page now adapts to the user's entry point. If you come from a CX marketing page, you get a CX trial. General traffic lands on our free Essentials tier, leaving room for the business to upsell them inside the app later.

**The Trade-off:** Reintroducing the name and phone fields did cause a 3% dip in conversion compared to our ultra-short MVP. However, the trade-off was worth it because it gave Sales the high-quality data they needed to actually close deals.`,
    edge_cases_handled: [
      "Dynamic Funneling: Automatically routing users to CX, Research, or Employee Experience based on their marketing entry points.",
      "The Sales Data Trade-off: Restructuring the layout to include Name and Phone fields despite a 3% conversion dip compared to the short MVP, preserving critical downstream sales pipeline health.",
      "Phishing Anxiety Safeguards: Integrating highly visible BBB and GoDaddy security badges to eliminate user trust barriers."
    ],
    outcomes: `* **The Launch:** The new flow went live on November 13, 2021.  
* **Stable Conversion:** We maintained a steady 20% conversion rate across our core B2B funnels.  
* **Executive Validation:** Our COO, Erik Koto, confirmed that this new flow delivered a 5% total uplift in conversion compared to the legacy form.  
* **Happier Teams:** By routing traffic dynamically, we stopped users from signing up for the wrong accounts. Support tickets for accidental sign-ups plummeted, and Inbound Sales got the high-quality leads they asked for.

The design struck such a good balance between user trust and business data needs that the foundational UI is still live in production today.`,
    visual_highlights: [
      {
        image_url: "/projects/questionpro-signup/qp-signup-final-min.png",
        caption: "The final design features a two column layout, with contextual information on the left, and a clear form on the right."
      },
      {
        image_url: "/projects/questionpro-signup/qp-signup-final-bento.png",
        caption: "UI details. Left side with plan name bolded, key plan features, login, close up of input, close up of main CTA, SSO buttons, trust badges."
      }
    ],
    retrospective: `This project taught me the difference between a simple form and a clear one. The failure of our ultra-short MVP proved that users want context and safety just as much as they want fewer fields. Designing for enterprise growth means realizing that standard UX patterns sometimes have to take a back seat to building trust and supporting internal business operations.`
  },
  'design-system-scale': {
    archive_title: "Scaling a Multi-Brand Design System",
    title: "Scaling a Multi-Brand Design System",
    card_headline: "Unifying design tokens & component libraries to speed up handoff by 42%",
    subtitle: "Creating a unified token pipeline and component library to align design and engineering teams across 4 distinct products.",
    role: "Design Systems Lead",
    timeline: "September 2024 - April 2025",
    tag: "DESIGN SYSTEMS • TOOLING",
    metric: "42% Faster Handoff",
    thumbnail: "/projects/design-system/ds-cover-temp.png",
    impact: "Reduced design-to-development handoff time by 42% and saved ~120 hours per sprint.",
    constraint: "Must support multiple sub-brands with a single source of truth, without code duplication or performance bloat.",
    teams_involved: "Design & Frontend Development teams",
    problem_hypothesis: {
      problem: "Product teams were designing and coding in silos, leading to severe visual inconsistency across product lines and duplicate engineering effort.",
      hypothesis: "By establishing a single token pipeline from Figma to Style Dictionary and building a React-based component library, we could automate design updates and unify the user experience."
    },
    design_rationale: "To construct a highly scalable system, I set up a multi-tier design token architecture (global, alias, component) and developed a workflow to build and export tokens automatically.",
    iterations: [
      {
        approach: "Component-First Library (No Tokens)",
        why_it_failed: "Changing styling or branding required editing the component source code itself, making it impossible to support separate brand themes.",
        image_url: "/projects/design-system/ds-cover-temp.png",
        caption: "Iteration A: Initial component-first layout that suffered from strict styling and hardcoded values."
      }
    ],
    system_solution: "I designed a token architecture that maps brand values to semantic aliases, which are then referenced by React components. We automated this using Style Dictionary to compile tokens for CSS, Tailwind, and JS config files simultaneously.",
    edge_cases_handled: [
      "Dynamic Theming shifts: Engineered run-time theme switching for dark/light mode and brand changes without layout thrashing.",
      "Automated A11y verification: Integrated color contrast checking in the build pipeline to reject component combinations that violate WCAG AA standards.",
      "Legacy integration pathways: Provided semantic-to-legacy mapping tables for teams migrating older UI components incrementally."
    ],
    outcomes: "Successfully established a single token pipeline from Figma to Style Dictionary. This reduced design-to-development handoff time by 42% and saved approximately 120 hours per sprint across four product lines.",
    visual_highlights: [
      {
        "image_url": "/projects/design-system/ds-details-temp.png",
        "caption": "Pipeline View: The style dictionary configuration mapping source JSON tokens directly to production-ready UI components."
      }
    ],
    retrospective: "A design system is 20% code and 80% communication. The technical pipeline solved our scaling issues, but success was only realized after we conducted cross-team workshops and established clear governance models."
  }
};
