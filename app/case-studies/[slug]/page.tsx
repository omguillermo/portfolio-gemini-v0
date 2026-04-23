'use client';

import React, { use, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle2, FlaskConical, Trophy, X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/components/Reveal';
import ProjectGate from '@/components/ProjectGate';

interface VisualHighlight {
  image_url: string;
  caption: string;
}

interface Iteration {
  approach: string;
  why_it_failed: string;
  image_url?: string;
}

interface ProjectData {
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  impact: string;
  constraint: string;
  problem: string;
  iterations: Iteration[];
  system_solution: string;
  edge_cases_handled: string[];
  visual_highlights: VisualHighlight[];
  retrospective: string;
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
    iterations: [
      {
        approach: "Standard Side-Panel Sidebar",
        why_it_failed: "Reducing the main content width to accommodate a persistent sidebar made the complex data tables unreadable. It solved the blocking issue but created a massive data-density failure.",
        image_url: "" 
      },
      {
        approach: "Floating Action Button (FAB) with Bottom Sheet",
        why_it_failed: "The FAB covered the very inventory items users needed to reference while chatting. The bottom sheet also lacked the necessary width to display AI-generated data comparisons effectively.",
        image_url: ""
      }
    ],
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
    retrospective: "This project taught me that for AI-driven tools, 'visibility' doesn't have to mean 'size.' By making the UI smaller but more responsive to context, we increased engagement without frustrating the user's primary workflow.",
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
    problem: "The original Sign Up process was a long, bland form that didn’t fit on a single screen. It featured an outdated UI, an unnecessary captcha, and the form looked identical regardless of which specific QuestionPro product the user was signing up for.",
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

export default function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projectsData[slug as keyof typeof projectsData];
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <p className="text-heading">System Error: Case study not found.</p>
      </div>
    );
  }

  const content = (
    <div className="min-h-screen text-foreground font-sans antialiased pb-32 selection:bg-selection-bg selection:text-selection-text">
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
                <p className="text-mono text-muted font-mono uppercase mb-2 text-[10px] tracking-widest">Role</p>
                <p className="text-small font-medium tracking-tight">{project.role}</p>
              </div>
              <div>
                <p className="text-mono text-muted font-mono uppercase mb-2 text-[10px] tracking-widest">Timeline</p>
                <p className="text-small font-medium tracking-tight">{project.timeline}</p>
              </div>
              <div>
                <p className="text-mono text-muted font-mono uppercase mb-2 text-[10px] tracking-widest">Impact</p>
                <p className="text-small font-medium tracking-tight text-brand font-bold">{project.impact}</p>
              </div>
              <div>
                <p className="text-mono text-muted font-mono uppercase mb-2 text-[10px] tracking-widest">Constraint</p>
                <p className="text-small font-medium tracking-tight">{project.constraint}</p>
              </div>
            </div>
          </header>
        </Reveal>

        <article className="space-y-24">
          {/* 1. Problem Section */}
          <Reveal width="100%">
            <section>
              <h2 className="text-mono font-mono text-muted uppercase tracking-widest mb-8 flex items-center gap-4 text-[11px]">
                The System Failure
              </h2>
              <p className="text-body text-foreground/90 leading-relaxed max-w-2xl">
                {project.problem}
              </p>
            </section>
          </Reveal>

          {/* 2. Design Iteration Section (FAANG "Messy Middle") */}
          <Reveal width="100%">
            <section className="space-y-16">
              <h2 className="text-mono font-mono text-muted uppercase tracking-widest mb-8 flex items-center gap-4 text-[11px]">
                Design Iteration & Trade-offs
              </h2>
              <div className="space-y-24">
                {project.iterations.map((iteration, index) => (
                  <div key={index} className="space-y-8 max-w-2xl">
                    <div className="space-y-2">
                      <p className="text-mono text-brand font-mono text-[10px] uppercase">Approach [{index + 1}]</p>
                      <h3 className="text-heading font-bold">{iteration.approach}</h3>
                    </div>
                    <p className="text-body text-muted leading-relaxed">
                      {iteration.why_it_failed}
                    </p>
                    {iteration.image_url && (
                      <div 
                        className="w-full aspect-video bg-surface border border-border rounded-2xl overflow-hidden cursor-zoom-in relative group"
                        onClick={() => setActiveImage(iteration.image_url!)}
                      >
                         <img src={iteration.image_url} alt={iteration.approach} className="w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-border flex items-center gap-2 text-small">
                              <Maximize2 className="w-4 h-4" />
                              Click to Expand
                            </div>
                         </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* 3. Solution Section */}
          <Reveal width="100%">
            <section>
              <h2 className="text-mono font-mono text-muted uppercase tracking-widest mb-8 flex items-center gap-4 text-[11px]">
                The Component Intervention
              </h2>
              <p className="text-body text-foreground/90 leading-relaxed max-w-2xl mb-16">
                {project.system_solution}
              </p>
              
              {/* Visual Highlights Grid */}
              <div className="space-y-16">
                {project.visual_highlights.map((highlight, index) => (
                  <div key={index} className="space-y-4">
                    <div 
                      className="w-full aspect-video bg-surface border border-border rounded-2xl overflow-hidden relative cursor-zoom-in group"
                      onClick={() => setActiveImage(highlight.image_url)}
                    >
                      <img 
                        src={highlight.image_url} 
                        alt={highlight.caption}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop";
                          target.className = "w-full h-full object-cover opacity-20 grayscale";
                        }}
                      />
                      <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-border flex items-center gap-2 text-small">
                            <Maximize2 className="w-4 h-4" />
                            Click to Expand
                         </div>
                      </div>
                    </div>
                    <p className="text-small text-muted italic">
                      {highlight.caption}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* 4. Edge Cases Section */}
          <Reveal width="100%">
            <section className="bg-surface border border-border rounded-2xl p-8 md:p-12">
              <h2 className="text-mono font-mono text-brand uppercase tracking-widest mb-8 flex items-center gap-4 text-[11px]">
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

          {/* 5. Retrospective Section */}
          <Reveal width="100%">
            <section className="border-t border-border pt-16">
              <h2 className="text-mono font-mono text-muted uppercase tracking-widest mb-8 flex items-center gap-4 text-[11px]">
                Results & Retrospective
              </h2>
              <p className="text-body text-foreground/90 leading-relaxed max-w-2xl italic">
                &quot;{project.retrospective}&quot;
              </p>
            </section>
          </Reveal>

          {/* Prototype Link */}
          {project.prototype_link && (
            <Reveal width="100%">
              <section className="flex flex-col items-center py-16">
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
                <span className="text-mono text-tertiary uppercase text-[10px]">Next Project: Coming Soon</span>
              </div>
            </footer>
          </Reveal>
        </article>
      </main>

      {/* High-Res Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setActiveImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-foreground/60 hover:text-foreground transition-colors"
              onClick={() => setActiveImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
            >
              <img 
                src={activeImage} 
                alt="High resolution project preview" 
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
