"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import InteractiveDoodle from '@/components/InteractiveDoodle';
import StatusTerminal from '@/components/StatusTerminal';
import { projectsData } from '@/data/projects';
import { ArrowRight, ExternalLink } from 'lucide-react';

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
                  <p className="text-sm text-secondary max-w-2xl leading-relaxed font-light tracking-wide text-pretty">
                    Started in Photoshop. Today I think, design, prototype, and build - with AI as a sparring partner.
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
            <h2 className="text-mono font-mono text-secondary font-medium tracking-wide mb-6 border-b border-border pb-3 text-xs uppercase">
              01 / Highlighted Projects
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {['stoki-ai', 'godaddy-shipping', 'questionpro-signup'].map((slug, idx) => {
              const project = projectsData[slug];
              if (!project) return null;

              return (
                <Reveal key={project.title} width="100%" delay={0.1 * (idx + 1)} overflow="visible" className="h-full flex flex-col items-stretch">
                  <Link href={`/case-studies/${slug}`} className="group w-full h-full flex flex-col">
                    <div className="h-full flex flex-col p-4 pb-5 rounded-2xl bg-surface-inset border-0 transition-all duration-300 group-hover:brightness-[0.98] dark:group-hover:brightness-[1.03]">
                      {/* Nested image frame */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-background border border-border/10">
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          loading={idx === 0 ? 'eager' : 'lazy'}
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      </div>

                      {/* Content section */}
                      <div className="pt-6 flex flex-col justify-between flex-grow gap-2">
                        <div className="px-1">
                          <h3 className="text-base font-semibold tracking-tight text-primary leading-snug group-hover:text-brand transition-colors">
                            {project.card_headline}
                          </h3>
                        </div>

                        <div className="pt-2 flex items-center justify-between mt-auto px-1">
                          <div className="flex flex-wrap items-center gap-1.5 min-w-0 flex-1">
                            {project.tag.split(/[,•]/).map((tagText, tIdx) => (
                              <span
                                key={tIdx}
                                className="inline-flex items-center px-2 py-0.5 rounded-md text-mono font-mono text-xxs uppercase tracking-wider text-secondary bg-foreground/5 border border-border/20"
                              >
                                {tagText.trim()}
                              </span>
                            ))}
                          </div>
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-foreground text-background opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0 ml-2">
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
            <h2 className="text-mono font-mono text-secondary font-medium tracking-wide mb-6 border-b border-border pb-3 text-xs uppercase">
              02 / Technical Skills & Toolkit
            </h2>
          </Reveal>

          <Reveal width="100%" delay={0.1} overflow="visible">
            <div className="flex flex-wrap gap-2.5 max-w-4xl">
              {[
                'Design Systems', 'Design Tokens', 'Figma Variables', 'Storybook',
                'React', 'Next.js', 'TailwindCSS', 'Framer Motion', 'TypeScript', 'HTML & CSS', 'Git & GitHub',
                'UI/UX', 'B2B', 'eCommerce', 'Documentation', 'SaaS', 'Visual Design', 'Interaction Design',
                'Usability Testing', 'A/B Testing', 'AI Workflows', 'Design Audits', 'User Research'
              ].map(s => (
                <span key={s} className="text-mono font-mono text-xs tracking-wider bg-surface-inset border border-transparent rounded-lg px-3.5 py-1.5 text-primary hover:border-brand/30 hover:bg-brand/5 hover:text-brand transition-all duration-300">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 03 / Testimonials */}
        <section className="mb-20">
          <Reveal width="100%" overflow="visible">
            <h2 className="text-mono font-mono text-secondary font-medium tracking-wide mb-6 border-b border-border pb-3 text-xs uppercase">
              03 / Testimonials
            </h2>
          </Reveal>

          <Reveal width="100%" delay={0.1} overflow="visible">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Senior UX Manager (GoDaddy) */}
              <div className="bg-surface-inset border-0 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                <p className="text-sm text-primary leading-relaxed font-light">
                  &quot;Omar took full ownership of the Catalog, Inventory, Orders and Fulfillment space as lead designer E2E. Decisions were grounded in real data and edge cases got accounted for. He brought a level of care and craft that raised the bar for everyone around.&quot;
                </p>
                <div className="pt-4 border-t border-border/10 space-y-0.5">
                  <h4 className="text-sm font-medium text-primary">Adelina Green</h4>
                  <p className="text-xs text-secondary font-normal">Senior UX Manager, GoDaddy Commerce</p>
                </div>
              </div>

              {/* Card 2: Engineering Lead (GoDaddy) */}
              <div className="bg-surface-inset border-0 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                <p className="text-sm text-primary leading-relaxed font-light">
                  &quot;The frontend buy label experience is looking really good! Huge shoutout to Omar Guillermo for his outstanding design work, responsiveness, and frontend collaboration.&quot;
                </p>
                <div className="pt-4 border-t border-border/10 space-y-0.5">
                  <h4 className="text-sm font-medium text-primary">John Newcomb</h4>
                  <p className="text-xs text-secondary font-normal">Engineering Lead, GoDaddy Commerce</p>
                </div>
              </div>

              {/* Card 3: Marketing Delivery Manager (QuestionPro) */}
              <div className="bg-surface-inset border-0 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                <p className="text-sm text-primary leading-relaxed font-light">
                  &quot;Omar has a highly creative, out-of-the-box mind. His profound knowledge in graphic design and openness to learn new things every day, paired with his integrity, makes him a valuable asset on any team.&quot;
                </p>
                <div className="pt-4 border-t border-border/10 space-y-0.5">
                  <h4 className="text-sm font-medium text-primary">Paulina Rodríguez</h4>
                  <p className="text-xs text-secondary font-normal">Marketing Delivery Manager, QuestionPro CX</p>
                </div>
              </div>

              {/* Card 4: UX Director (QuestionPro) */}
              <div className="bg-surface-inset border-0 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                <p className="text-sm text-primary leading-relaxed font-light">
                  &quot;Omar has been a diligent, intelligent and proficient designer. My favorite trait is how he's not one to shy away from a challenge, putting in the time and effort to learn whatever he needs to get things done.&quot;
                </p>
                <div className="pt-4 border-t border-border/10 space-y-0.5">
                  <h4 className="text-sm font-medium text-primary">Gerardo Vázquez</h4>
                  <p className="text-xs text-secondary font-normal">UX Director, QuestionPro</p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Closing CTA Strip */}
        <Reveal width="100%" overflow="visible">
          <div className="mt-20 mb-0 pt-12 pb-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              {/* Left: copy */}
              <div className="space-y-3 max-w-lg">
                <p className="text-mono font-mono text-secondary text-xs font-medium tracking-wider">
                  Still here?
                </p>
                <h2 className="text-2xl font-bold tracking-tighter">
                  There&apos;s more to the story.
                </h2>
                <p className="text-sm text-secondary leading-relaxed">
                  14 years of experience, a full career timeline, and a few credentials that might surprise you.
                </p>
              </div>

              {/* Right: actions */}
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand text-white text-sm font-sans font-medium tracking-wide hover:bg-brand/90 transition-all duration-200"
                >
                  About me
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="https://www.linkedin.com/in/omar-guillermo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn profile (opens in new tab)"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border/50 text-secondary text-sm font-sans font-medium tracking-wide hover:border-brand/40 hover:text-brand transition-all duration-200"
                >
                  LinkedIn
                  <ExternalLink className="w-3.5 h-3.5 transition-colors duration-200" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

      </main>
    </div>
  );
}
