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

export interface ProjectData {
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  impact: string;
  constraint: string;
  problem_hypothesis: {
    problem: string;
    hypothesis: string;
  };
  design_rationale: string;
  iterations: Iteration[];
  system_solution: string;
  edge_cases_handled: string[];
  visual_highlights: VisualHighlight[];
  retrospective: string;
  prototype_link?: string;
  password?: string;
}

export const projectsData: Record<string, ProjectData> = {
  'stoki-ai': {
    title: "Stoki AI Assistant Redesign",
    subtitle: "Redesigning an intrusive B2B AI assistant into a non-blocking, persistent workflow tool.",
    role: "Founding Designer",
    timeline: "August 2025 - March 2026",
    impact: "Facilitated over $871K in B2B orders by 900+ active users. Sales teams reported increased satisfaction and more frequent tool adoption after the frictionless redesign.",
    constraint: "The AI assistant needed to remain highly visible and accessible from any page, while allowing non-blocking interaction so users could view underlying content.",
    problem_hypothesis: {
      problem: "The original AI chat interface blocked users from interacting with page content, obscuring critical inventory items. Navigating while chatting also caused new content to load invisibly behind the widget.",
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
    title: "Buy Shipping Labels Integration",
    subtitle: "Streamlining label generation within the existing GoDaddy merchant dashboard.",
    role: "Senior Product Designer",
    timeline: "Q3 2022",
    impact: "7,521 labels purchased by 6,722 active merchants in the first 3 months.",
    constraint: "Must keep users inside the GoDaddy ecosystem without external redirects.",
    problem_hypothesis: {
      problem: "Merchants were wasting time searching for rates externally. A previous integration (Shippo) failed with only an 11.3% adoption rate because of trust issues and complexity.",
      hypothesis: "By engineering a seamless multi-step integration using the ShipEngine API, we could increase trust and reduce time-to-label."
    },
    design_rationale: "I streamlined the complex setup process to avoid information overload and implemented a 2-column layout to handle extreme data density during checkout.",
    iterations: [
      {
        approach: "Single-page Linear Wizard",
        why_it_failed: "The vertical scroll became unmanageable when multiple packages were involved. Users lost context of their order total while configuring dimensions.",
      }
    ],
    system_solution: "Engineered a seamless multi-step integration using the ShipEngine API. I streamlined the complex setup process to avoid information overload and implemented a 2-column layout to handle extreme data density during checkout.",
    edge_cases_handled: [
      "Designed cooldown logic for the promo modal: if a user clicks 'Maybe Later', the prompt hides for a set period to prevent annoyance on every order.",
      "Mapped out API validation states: Package and 'Ship To' info must be strictly validated by the API before the UI allows returning available rates."
    ],
    visual_highlights: [
      {
         "image_url": "/projects/godaddy-labels/godaddy-shippinglabels-cover-temp.png",
         "caption": "Order Details Page with the new Buy Shipping Label entry point."
      }
    ],
    retrospective: "The success of this integration was driven by trust. By exposing live API validation states early, we reduced merchant anxiety and significantly increased the 'Buy' conversion rate.",
    prototype_link: "https://www.figma.com/proto/jS9lpzXQorkkrfDoTYYFeO/Create-a-Shipping-Label"
  },
  'questionpro-signup': {
    title: "Sign Up Experience Redesign",
    subtitle: "Redesigning the registration flow to increase clarity and guide users to the correct product.",
    role: "Senior UI/UX Designer",
    timeline: "2021",
    impact: "Reduced bounce rate from 1.51% to 0.31% and generated significantly better-qualified sales leads.",
    constraint: "Had to accommodate multiple distinct software products within a single entry point without overwhelming the user.",
    problem_hypothesis: {
      problem: "The original Sign Up process was a long, bland form that didn’t fit on a single screen. It featured an outdated UI, an unnecessary captcha, and the form looked identical regardless of which specific QuestionPro product the user was signing up for.",
      hypothesis: "By transitioning to a high-clarity 2-column layout, we could separate product value from the technical sign-up requirements."
    },
    design_rationale: "I designed a single-screen, 2-column layout that clearly separated the informative content from the actual form, highlighting exactly what the user was signing up for.",
    iterations: [
      {
        approach: "3-Step Personalized Flow",
        why_it_failed: "A/B testing showed that asking users 'What do you want to build?' upfront actually increased friction. Users wanted to see the form immediately to feel 'safe' that the process wouldn't take long.",
      }
    ],
    system_solution: "After an initial 3-step A/B test failed, I pivoted to a strategy of extreme clarity over personalization. I designed a single-screen, 2-column layout that clearly separated the informative content from the actual form, highlighting exactly what the user was signing up for.",
    edge_cases_handled: [
      "Designed localized variations of the 2-column layout to seamlessly accommodate different regional requirements and copy lengths.",
      "Analyzed failure states from the initial A/B test to pivot the design strategy, ensuring the final layout prioritized data clarity over gamification."
    ],
    visual_highlights: [
      {
         "image_url": "/projects/questionpro-signup/qp-signup-cover-temp.png",
         "caption": "The new single-screen, 2-column layout providing extreme clarity on the product."
      }
    ],
    retrospective: "This project proved that 'Personalization' isn't always the answer. Sometimes, raw data clarity and a reduced time-to-value are more powerful drivers for conversion than a fancy tailored onboarding."
  }
};
