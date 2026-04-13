'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ProjectGate from '@/components/ProjectGate';

// 1. This is our "Figma Component Properties" (The Data)
const projectsData = {
  'global-checkout': {
    title: 'Global Checkout Flow',
    subtitle: 'Re-architecting the payment rendering engine to support 42 localized gateways.',
    role: 'Lead Systems Designer',
    timeline: 'Q3 2025 (12 Weeks)',
    impact: '+14.2% Conversion',
    constraint: '< 1.2s Load Time',
    problem: 'The legacy checkout component was deeply coupled to a single payment gateway. Expanding to new regions required hardcoding new logic, resulting in a fragile system that broke under edge cases.',
    solution: 'Abstracted the payment methods into a modular token system. Designed a dynamic rendering engine that ingested gateway requirements and auto-generated the correct UI inputs without developer intervention.',
  },
  'data-engine': {
    title: 'Data Visualization Engine',
    subtitle: 'Establishing a robust token system for real-time financial dashboards.',
    role: 'Design Systems Architect',
    timeline: 'Q1 2026 (8 Weeks)',
    impact: '10M+ Data Points',
    constraint: 'WCAG 2.1 AAA',
    problem: 'Financial analysts were overwhelmed by data density. Existing charts were inaccessible to colorblind users and failed to render smoothly when handling over 10,000 nodes.',
    solution: 'Engineered a specialized charting library. Implemented strict spacing tokens, high-contrast accessible color palettes, and a progressive disclosure interaction model to handle extreme data density gracefully.',
  },
  'neo-banking': {
    title: 'Neo-Banking Core',
    subtitle: 'Designing the foundational ledger interface for a high-growth fintech startup.',
    role: 'Senior Product Designer',
    timeline: 'Q4 2025 (16 Weeks)',
    impact: '$2B+ Transacted',
    constraint: 'Zero Latency UI',
    problem: 'The core banking ledger was performing poorly under high transaction volumes. Users reported "phantom" balances and slow refresh rates, leading to a loss of trust in the platform.',
    solution: 'Redesigned the ledger from the ground up using a stream-based architecture. Implemented optimistic UI updates and a robust state management system to ensure users always saw real-time, accurate data.',
    password: 'DESIGN_SYSTEMS'
  },
  'smart-grid': {
    title: 'Smart Grid Monitor',
    subtitle: 'Visualizing energy distribution across municipal infrastructure.',
    role: 'Senior Product Designer',
    timeline: 'Q2 2025 (10 Weeks)',
    impact: '-18% Energy Waste',
    constraint: 'Multi-device Sync',
    problem: 'Grid operators were using outdated, desktop-only software to monitor city-wide energy spikes. Critical decisions were being delayed because the data wasnt accessible in the field.',
    solution: 'Developed a responsive, web-based monitoring dashboard. Designed a specialized mobile view with high-visibility "Action Alerts" for field engineers to respond to grid failures in real-time.',
  }
};

// 2. This is the "Master Component" Layout
export default function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projectsData[slug as keyof typeof projectsData];

  // If someone types a bad URL, show a fallback
  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <p className="text-heading">System Error: Case study not found.</p>
      </div>
    );
  }

  const content = (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased pb-32 selection:bg-selection-bg selection:text-selection-text">
      
      {/* Minimal Navigation */}
      <nav className="max-w-4xl mx-auto px-6 pt-32 pb-12 md:px-12">
        <Link href="/" className="inline-flex items-center gap-2 text-small font-mono text-muted hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Return to Index
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Case Study Header */}
        <Reveal width="100%">
          <header className="mb-24">
            <h1 className="text-display font-bold tracking-tighter mb-6">
              {project.title}
            </h1>
            <p className="text-heading text-muted leading-relaxed font-light tracking-wide mb-12">
              {project.subtitle}
            </p>

            {/* Project Meta Data (Stat Blocks) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border">
              <div>
                <p className="text-mono text-muted font-mono uppercase mb-2">Role</p>
                <p className="text-small font-medium tracking-tight">{project.role}</p>
              </div>
              <div>
                <p className="text-mono text-muted font-mono uppercase mb-2">Timeline</p>
                <p className="text-small font-medium tracking-tight">{project.timeline}</p>
              </div>
              <div className="border-l-2 border-brand/50 pl-4 md:border-l-0 md:pl-0">
                <p className="text-mono text-muted font-mono uppercase mb-2">Impact</p>
                <p className="text-small font-medium tracking-tight">{project.impact}</p>
              </div>
              <div className="border-l-2 border-brand/50 pl-4 md:border-l-0 md:pl-0">
                <p className="text-mono text-muted font-mono uppercase mb-2">Constraint</p>
                <p className="text-small font-medium tracking-tight">{project.constraint}</p>
              </div>
            </div>
          </header>
        </Reveal>

        {/* Component & Impact Structure */}
        <article className="space-y-24">
          
          <Reveal width="100%">
            <section>
              <h2 className="text-mono font-mono text-muted uppercase tracking-widest mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-border"></span>
                The System Failure
              </h2>
              <p className="text-body text-foreground/90 leading-relaxed mb-12">
                {project.problem}
              </p>
              
              {/* "Before" Visual Placeholder */}
              <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-surface border border-border flex flex-col items-center justify-center text-muted relative overflow-hidden group hover:border-brand/50 transition-colors">
                <img 
                  src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" 
                  alt="Legacy System Mockup" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity transition-opacity duration-500 group-hover:opacity-60"
                />
                <div className="absolute top-6 left-6 bg-brand/80 text-white px-3 py-1.5 text-mono font-mono uppercase border border-brand/50 tracking-wider z-10 backdrop-blur-sm shadow-xl">
                  State: Before
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal width="100%">
            <section>
              <h2 className="text-mono font-mono text-muted uppercase tracking-widest mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-border"></span>
                The Component Intervention
              </h2>
              <p className="text-body text-foreground/90 leading-relaxed mb-12">
                {project.solution}
              </p>

              {/* "After" Visual Placeholder */}
              <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-surface border border-border flex flex-col items-center justify-center text-muted relative overflow-hidden group hover:border-brand/50 transition-colors">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Redesigned System Mockup" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity transition-opacity duration-500 group-hover:opacity-60"
                />
                <div className="absolute top-6 left-6 bg-green-900/80 text-green-100 px-3 py-1.5 text-mono font-mono uppercase border border-green-700/50 tracking-wider z-10 backdrop-blur-sm shadow-xl">
                  State: After
                </div>
              </div>
            </section>
          </Reveal>

        </article>
      </main>
    </div>
  );

  if ('password' in project && project.password) {
    return (
      <ProjectGate password={project.password} projectSlug={slug}>
        {content}
      </ProjectGate>
    );
  }

  return content;
}
