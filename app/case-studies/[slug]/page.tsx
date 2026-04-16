'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ProjectGate from '@/components/ProjectGate';

interface VisualHighlight {
  image_url: string;
  caption: string;
}

interface ProjectData {
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  impact: string;
  constraint: string;
  problem: string;
  system_solution: string;
  edge_cases_handled: string[];
  visual_highlights: VisualHighlight[];
  prototype_link?: string;
  password?: string;
}

const projectsData: Record<string, ProjectData> = {
  'stoki-ai': {
    title: "Stoki AI Assistant Redesign",
    subtitle: "Redesigning an intrusive B2B AI assistant into a non-blocking, persistent workflow tool.",
    role: "Founding Designer",
    timeline: "Aug 2025 - Mar 2026",
    impact: "Increased sales team satisfaction and facilitated over $871K in B2B orders by 900+ active users.",
    constraint: "The AI assistant needed to remain highly visible and accessible from any page, while allowing non-blocking interaction so users could view underlying content.",
    problem: "The initial AI chat interface blocked users from interacting with the underlying page content. During beta testing, users found the widget highly intrusive because it obscured critical inventory items at the bottom of the screen, rendering the last items completely inaccessible.",
    system_solution: "I redesigned the entry point into a subtle, non-blocking folder tab anchored at the bottom center of the screen. When activated, the chat opens as a draggable floating window with dynamic width (640px to 1080px) that properly displays complex agent responses, like data tables, without taking over the screen.",
    edge_cases_handled: [
      "Designed Human-in-the-Loop safeguards: when executing natural language bulk inventory updates, the system presents a 'before and after' diff proposal that the user must explicitly confirm or reject.",
      "Configured implicit intent handling: if a user pastes product data without a clear command, the agent prompts for confirmation before adding the item to the inventory to prevent accidental database changes."
    ],
    visual_highlights: [
      {
         "image_url": "/projects/stockapp-ai/stockapp-cover-stoki-temp.png",
         "caption": "The new persistent folder tab with hover state showing quick actions."
      }
    ],
    password: 'DESIGN_SYSTEMS'
  },
  'godaddy-shipping': {
    title: "Buy Shipping Labels Integration",
    subtitle: "Streamlining label generation within the existing GoDaddy merchant dashboard.",
    role: "Senior Product Designer",
    timeline: "Q3 2022",
    impact: "7,521 labels purchased by 6,722 active merchants in the first 3 months.",
    constraint: "Must keep users inside the GoDaddy ecosystem without external redirects.",
    problem: "Merchants were wasting time searching for rates externally. A previous integration (Shippo) failed with only an 11.3% adoption rate because of trust issues and complexity.",
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
    prototype_link: "https://www.figma.com/proto/jS9lpzXQorkkrfDoTYYFeO/Create-a-Shipping-Label"
  },
  'questionpro-signup': {
    title: "Sign Up Experience Redesign",
    subtitle: "Redesigning the registration flow to increase clarity and guide users to the correct product.",
    role: "Senior UI/UX Designer",
    timeline: "2021",
    impact: "Reduced bounce rate from 1.51% to 0.31% and generated significantly better-qualified sales leads.",
    constraint: "Had to accommodate multiple distinct software products within a single entry point without overwhelming the user.",
    problem: "The original Sign Up process was a long, bland form that didn’t fit on a single screen. It featured an outdated UI, an unnecessary captcha, and the form looked identical regardless of which specific QuestionPro product the user was signing up for.",
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
    ]
  }
};

export default function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <p className="text-heading">System Error: Case study not found.</p>
      </div>
    );
  }

  const content = (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased pb-32 selection:bg-selection-bg selection:text-selection-text">
      <nav className="max-w-4xl mx-auto px-6 pt-32 pb-12 md:px-12">
        <Link href="/" className="inline-flex items-center gap-2 text-small font-mono text-muted hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Return to Index
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-6 md:px-12">
        <Reveal width="100%">
          <header className="mb-24">
            <h1 className="text-display font-bold tracking-tighter mb-6">
              {project.title}
            </h1>
            <p className="text-heading text-muted leading-relaxed font-light tracking-wide mb-12">
              {project.subtitle}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border">
              <div>
                <p className="text-mono text-muted font-mono uppercase mb-2">Role</p>
                <p className="text-small font-medium tracking-tight">{project.role}</p>
              </div>
              <div>
                <p className="text-mono text-muted font-mono uppercase mb-2">Timeline</p>
                <p className="text-small font-medium tracking-tight">{project.timeline}</p>
              </div>
              <div>
                <p className="text-mono text-muted font-mono uppercase mb-2">Impact</p>
                <p className="text-small font-medium tracking-tight">{project.impact}</p>
              </div>
              <div>
                <p className="text-mono text-muted font-mono uppercase mb-2">Constraint</p>
                <p className="text-small font-medium tracking-tight">{project.constraint}</p>
              </div>
            </div>
          </header>
        </Reveal>

        <article className="space-y-32">
          {/* Problem Section */}
          <Reveal width="100%">
            <section>
              <h2 className="text-mono font-mono text-muted uppercase tracking-widest mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-brand"></span>
                The System Failure
              </h2>
              <p className="text-body text-foreground/90 leading-relaxed max-w-2xl">
                {project.problem}
              </p>
            </section>
          </Reveal>

          {/* Solution Section */}
          <Reveal width="100%">
            <section>
              <h2 className="text-mono font-mono text-muted uppercase tracking-widest mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-brand"></span>
                The Component Intervention
              </h2>
              <p className="text-body text-foreground/90 leading-relaxed max-w-2xl mb-16">
                {project.system_solution}
              </p>
              
              {/* Visual Highlights Grid */}
              <div className="space-y-16">
                {project.visual_highlights.map((highlight, index) => (
                  <div key={index} className="space-y-4">
                    <div className="w-full aspect-video bg-surface border border-border rounded-2xl overflow-hidden shadow-sm relative group">
                      <img 
                        src={highlight.image_url} 
                        alt={highlight.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop";
                          target.className = "w-full h-full object-cover opacity-20 grayscale";
                        }}
                      />
                    </div>
                    <p className="text-small text-muted italic pl-4 border-l border-border/50">
                      {highlight.caption}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Edge Cases Section */}
          <Reveal width="100%">
            <section className="bg-surface border border-border rounded-2xl p-8 md:p-12">
              <h2 className="text-mono font-mono text-brand uppercase tracking-widest mb-8 flex items-center gap-4">
                <CheckCircle2 className="w-4 h-4" />
                Edge-Cases & Systems Logic
              </h2>
              <ul className="space-y-6">
                {project.edge_cases_handled.map((edgeCase, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="text-brand font-mono text-small mt-1">[{index + 1}]</span>
                    <p className="text-body text-foreground/80 leading-relaxed">
                      {edgeCase}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          {/* Prototype Link */}
          {project.prototype_link && (
            <Reveal width="100%">
              <section className="flex flex-col items-center py-16 border-t border-border">
                <h3 className="text-heading font-bold mb-8">Ready to explore the logic?</h3>
                <a 
                  href={project.prototype_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-brand text-white px-8 py-4 rounded-full font-medium hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 group"
                >
                  Interact with Prototype
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </section>
            </Reveal>
          )}

          {/* Footer Navigation */}
          <Reveal width="100%">
            <footer className="pt-16 border-t border-border flex justify-between items-center">
              <Link href="/" className="text-small font-mono text-muted hover:text-brand transition-colors">
                ← INDEX
              </Link>
              <div className="flex gap-8">
                <span className="text-mono text-tertiary uppercase">Next Project: Coming Soon</span>
              </div>
            </footer>
          </Reveal>
        </article>
      </main>
    </div>
  );

  if (project.password) {
    return (
      <ProjectGate password={project.password} projectSlug={slug}>
        {content}
      </ProjectGate>
    );
  }

  return content;
}
