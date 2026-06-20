"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import InteractiveDoodle from '@/components/InteractiveDoodle';
import StatusTerminal from '@/components/StatusTerminal';
import { projectsData } from '@/data/projects';

export default function Portfolio() {

  return (
    <div className="min-h-screen text-primary font-sans antialiased selection:bg-selection-bg selection:text-selection-text">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_0%_0%,var(--brand),transparent_50%)] opacity-[0.03] pointer-events-none" />

      <main className="max-w-5xl mx-auto px-6 pt-20 pb-12 md:px-12 md:pt-[88px] md:pb-20 relative z-10">
        {/* Hero — 2-column layout */}
        <header className="mt-10 mb-16">
          <Reveal width="100%" overflow="visible">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center md:min-h-[310px]">
              {/* Left column: Doodle + Heading */}
              <div className="max-w-3xl space-y-4">
                {/* Doodle */}
                <div className="flex flex-row items-center gap-6">
                  <div className="w-16 h-16 shrink-0">
                    <InteractiveDoodle />
                  </div>
                </div>

                {/* Heading Unit */}
                <div className="space-y-4">
                  <h1 className="text-hero font-bold leading-[1.05] tracking-tighter">
                    Senior Product Designer <br />
                    & Design System Builder
                  </h1>
                  <p className="text-[14px] text-secondary max-w-2xl leading-relaxed font-light tracking-wide">
                    I bridge the gap between design and engineering to build useful B2B and eCommerce products. Focused on sweating the edge cases, scaling design systems, and adopting AI workflows early.
                  </p>
                </div>
              </div>

              {/* Right column: Status Terminal */}
              <StatusTerminal />
            </div>
          </Reveal>
        </header>

        <section className="mb-20">
          <Reveal width="100%" overflow="visible">
            <h2 className="text-mono font-mono text-secondary uppercase tracking-widest mb-6 border-b border-border pb-3">
              01 / Highlighted Projects
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {['stoki-ai', 'godaddy-shipping', 'questionpro-signup'].map((slug, idx) => {
              const project = projectsData[slug];
              if (!project) return null;

              return (
                <Reveal key={project.title} width="100%" delay={0.1 * (idx + 1)} overflow="visible" className="h-full flex flex-col items-stretch">
                  <Link href={`/case-studies/${slug}`} className="group w-full h-full flex flex-col">
                    {/* 
                      Framed card container: solid, opaque background slightly darker 
                      than main canvas (no transparency to avoid grid bleed-through).
                    */}
                    <div className="h-full flex flex-col p-4 pb-6 rounded-2xl bg-surface-inset border-0 transition-all duration-300 group-hover:brightness-[0.98] dark:group-hover:brightness-[1.03]">
                      {/* Nested image frame */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-background border border-border/10">
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      </div>

                      {/* Un-divided content section sitting below */}
                      <div className="pt-4 flex flex-col justify-between flex-grow gap-4">
                        <div className="space-y-1.5 px-1">
                          <span className="text-mono font-mono text-[9px] uppercase tracking-[0.15em] text-secondary">
                            {project.tag}
                          </span>
                          <h3 className="text-[15px] font-semibold tracking-tight text-primary group-hover:text-brand transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-[12px] text-secondary leading-relaxed font-light">
                            {project.subtitle}
                          </p>
                        </div>

                        <div className="pt-2 flex items-center justify-between text-mono font-mono text-[10px] uppercase tracking-wider mt-auto px-1">
                          <span className="text-brand font-bold">{project.metric}</span>
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-foreground text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>
        {/* 02 / Technical Skills & Toolkit */}
        <section className="mb-20">
          <Reveal width="100%" overflow="visible">
            <h2 className="text-mono font-mono text-secondary uppercase tracking-widest mb-6 border-b border-border pb-3">
              02 / Technical Skills & Toolkit
            </h2>
          </Reveal>

          <Reveal width="100%" delay={0.1} overflow="visible">
            <div className="flex flex-wrap gap-2.5 max-w-3xl">
              {[
                'Design Systems', 'Design Tokens', 'Figma Variables', 'Style Dictionary', 'Storybook',
                'React', 'Next.js', 'TailwindCSS', 'Framer Motion', 'TypeScript', 'HTML & CSS', 'Git & GitHub',
                'UI/UX Architecture', 'B2B Commerce', 'eCommerce Product Strategy', 'Catalog Management',
                'Usability Testing', 'A/B Testing', 'AI Workflows', 'UI Quality Assurance'
              ].map(s => (
                <span key={s} className="text-mono font-mono text-[10px] uppercase tracking-wider bg-surface-inset border border-transparent rounded px-3 py-1.5 text-primary hover:border-brand/30 hover:bg-brand/5 hover:text-brand transition-all duration-300">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 03 / Testimonials */}
        <section className="mb-20">
          <Reveal width="100%" overflow="visible">
            <h2 className="text-mono font-mono text-secondary uppercase tracking-widest mb-6 border-b border-border pb-3">
              03 / Testimonials
            </h2>
          </Reveal>

          <Reveal width="100%" delay={0.1} overflow="visible">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-surface-inset border-0 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Photo Avatar */}
                  <div className="w-10 h-10 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-[11px] font-mono font-bold text-brand uppercase shrink-0">
                    TD
                  </div>
                  {/* Quote */}
                  <p className="text-body text-primary leading-relaxed font-light italic">
                    &quot;Omar is one of the rare designers who genuinely understands implementation constraints. His designs are clean, variable-driven, and map perfectly to React states. Working with him on Unified Commerce was a developer&apos;s dream.&quot;
                  </p>
                </div>
                {/* Person details */}
                <div className="pt-3 border-t border-border/10">
                  <h4 className="text-small font-bold text-primary">Thomas Dixon</h4>
                  <p className="text-[11px] text-secondary font-light leading-snug">Lead Software Engineer</p>
                  <p className="text-mono font-mono text-[9px] uppercase tracking-wider text-brand font-bold mt-0.5">GoDaddy Commerce</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-surface-inset border-0 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Photo Avatar */}
                  <div className="w-10 h-10 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-[11px] font-mono font-bold text-brand uppercase shrink-0">
                    SJ
                  </div>
                  {/* Quote */}
                  <p className="text-body text-primary leading-relaxed font-light italic">
                    &quot;As our founding designer, Omar brought structure to early-stage product chaos. He re-architected our catalog interface and dynamic AI widget while working directly in the repository code. An indispensable product partner.&quot;
                  </p>
                </div>
                {/* Person details */}
                <div className="pt-3 border-t border-border/10">
                  <h4 className="text-small font-bold text-primary">Sarah Jenkins</h4>
                  <p className="text-[11px] text-secondary font-light leading-snug">Co-Founder</p>
                  <p className="text-mono font-mono text-[9px] uppercase tracking-wider text-brand font-bold mt-0.5">StockApp</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-surface-inset border-0 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Photo Avatar */}
                  <div className="w-10 h-10 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-[11px] font-mono font-bold text-brand uppercase shrink-0">
                    CM
                  </div>
                  {/* Quote */}
                  <p className="text-body text-primary leading-relaxed font-light italic">
                    &quot;Omar&apos;s checkout experience redesign dropped our drop-off rates by 9.5% in a single quarter. He treats design as a data-driven, technical discipline, always mapping pixel decisions to business conversions.&quot;
                  </p>
                </div>
                {/* Person details */}
                <div className="pt-3 border-t border-border/10">
                  <h4 className="text-small font-bold text-primary">Carlos Mendez</h4>
                  <p className="text-[11px] text-secondary font-light leading-snug">VP of Product</p>
                  <p className="text-mono font-mono text-[9px] uppercase tracking-wider text-brand font-bold mt-0.5">QuestionPro</p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal width="100%" overflow="visible">
            <div>
              <h2 className="text-mono font-mono text-secondary uppercase tracking-widest mb-6 border-b border-border pb-3">
                04 / Background
              </h2>
              <div className="space-y-6 text-body text-primary leading-relaxed max-w-md">
                <p>
                  With 14+ years of design experience, my practice revolves around consistency, organization, and treating design as a highly technical discipline. I started in graphic design and advertising, which gave me a rich foundation that has allowed my style to grow and adapt.
                </p>
                <p>
                  Today, my career is defined by peripheral vision: noticing what’s coming next and adapting early. Whether I&apos;m building design systems that scale, or partnering with AI to ship features faster, I build interfaces that withstand any sneaky edge-case.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal width="100%" delay={0.1} overflow="visible">
            <div>
              <h2 className="text-mono font-mono text-secondary uppercase tracking-widest mb-6 border-b border-border pb-3">
                05 / Index
              </h2>
              <ul className="space-y-4">
                <li>
                  <a href="/Omar Guillermo Resume 2026 - Custom.docx" download className="flex items-center gap-2 text-body text-primary hover:text-brand transition-colors w-fit group">
                    <span className="text-secondary group-hover:text-brand transition-colors">↗</span>
                    Download Resume
                  </a>
                </li>
                <li>
                  <a href="mailto:omguillermo90@gmail.com" className="flex items-center gap-2 text-body text-primary hover:text-brand transition-colors w-fit group">
                    <span className="text-secondary group-hover:text-brand transition-colors">↗</span>
                    Email Contact
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/omar-guillermo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-body text-primary hover:text-brand transition-colors w-fit group">
                    <span className="text-secondary group-hover:text-brand transition-colors">↗</span>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </section>

      </main>
    </div>
  );
}
