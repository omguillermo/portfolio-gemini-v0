"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import InteractiveDoodle from '@/components/InteractiveDoodle';
import StatusTerminal from '@/components/StatusTerminal';
import { projectsData } from '@/data/projects';
import { ArrowRight, Copy, Check } from 'lucide-react';

export default function Portfolio() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('omguillermo90@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen text-primary font-sans antialiased selection:bg-selection-bg selection:text-selection-text">
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

        {/* Highlighted Projects — Uncarded */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {['stoki-ai', 'godaddy-shipping', 'questionpro-signup'].map((slug, idx) => {
              const project = projectsData[slug];
              if (!project) return null;

              return (
                <Reveal key={project.title} width="100%" delay={0.1 * (idx + 1)} overflow="visible" className="h-full flex flex-col items-stretch">
                  <Link href={`/case-studies/${slug}`} className="group w-full h-full flex flex-col">
                    <div className="w-full h-full flex flex-col">
                      {/* Clean Image Frame */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-surface-inset/50 border border-border/40 group-hover:border-border transition-colors duration-300">
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          loading={idx === 0 ? 'eager' : 'lazy'}
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>

                      {/* Content Section below image */}
                      <div className="pt-4 flex flex-col justify-between flex-grow gap-2">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-base font-semibold tracking-tight text-primary leading-snug group-hover:text-brand transition-colors">
                            {project.card_headline}
                          </h3>
                          <span className="text-secondary/60 group-hover:text-brand transition-colors duration-200 shrink-0 mt-0.5">
                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 -rotate-45" />
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-mono font-mono text-xxs text-secondary">
                          {project.tag.split(/[,•]/).map((tagText, tIdx, arr) => (
                            <span key={tIdx} className="inline-flex items-center gap-2">
                              <span>{tagText.trim()}</span>
                              {tIdx < arr.length - 1 && <span className="opacity-30">•</span>}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Technical Skills & Toolkit — Columns of Text without Tags */}
        <section className="mb-24">
          <Reveal width="100%" delay={0.1} overflow="visible">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
              <div>
                <h3 className="text-mono font-mono text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                  Systems & Design
                </h3>
                <ul className="space-y-2.5 text-sm text-secondary font-light">
                  <li className="hover:text-primary transition-colors">Design Systems & Tokens</li>
                  <li className="hover:text-primary transition-colors">Figma Variables</li>
                  <li className="hover:text-primary transition-colors">UI/UX & Visual Design</li>
                  <li className="hover:text-primary transition-colors">Interaction Design</li>
                  <li className="hover:text-primary transition-colors">Documentation & Storybook</li>
                  <li className="hover:text-primary transition-colors">Design Audits</li>
                </ul>
              </div>
              <div>
                <h3 className="text-mono font-mono text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                  Frontend & Code
                </h3>
                <ul className="space-y-2.5 text-sm text-secondary font-light">
                  <li className="hover:text-primary transition-colors">React & Next.js</li>
                  <li className="hover:text-primary transition-colors">TypeScript</li>
                  <li className="hover:text-primary transition-colors">TailwindCSS</li>
                  <li className="hover:text-primary transition-colors">Framer Motion</li>
                  <li className="hover:text-primary transition-colors">HTML & CSS</li>
                  <li className="hover:text-primary transition-colors">Git & GitHub</li>
                </ul>
              </div>
              <div>
                <h3 className="text-mono font-mono text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                  Strategy & Research
                </h3>
                <ul className="space-y-2.5 text-sm text-secondary font-light">
                  <li className="hover:text-primary transition-colors">User Research & Usability</li>
                  <li className="hover:text-primary transition-colors">A/B Testing</li>
                  <li className="hover:text-primary transition-colors">AI Workflows</li>
                  <li className="hover:text-primary transition-colors">B2B & Enterprise</li>
                  <li className="hover:text-primary transition-colors">eCommerce & SaaS</li>
                  <li className="hover:text-primary transition-colors">Product Strategy</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Testimonials — Uncarded, no item dividers */}
        <section className="mb-24">
          <Reveal width="100%" delay={0.1} overflow="visible">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {/* Testimonial 1 */}
              <div className="flex flex-col justify-between space-y-4">
                <p className="text-sm text-primary leading-relaxed font-light">
                  &ldquo;Omar took full ownership of the Catalog, Inventory, Orders and Fulfillment space as lead designer E2E. Decisions were grounded in real data and edge cases got accounted for. He brought a level of care and craft that raised the bar for everyone around.&rdquo;
                </p>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-medium text-primary">Adelina Green</h4>
                  <p className="text-xs text-secondary font-normal">Senior UX Manager, GoDaddy Commerce</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col justify-between space-y-4">
                <p className="text-sm text-primary leading-relaxed font-light">
                  &ldquo;The frontend buy label experience is looking really good! Huge shoutout to Omar Guillermo for his outstanding design work, responsiveness, and frontend collaboration.&rdquo;
                </p>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-medium text-primary">John Newcomb</h4>
                  <p className="text-xs text-secondary font-normal">Engineering Lead, GoDaddy Commerce</p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex flex-col justify-between space-y-4">
                <p className="text-sm text-primary leading-relaxed font-light">
                  &ldquo;Omar has a highly creative, out-of-the-box mind. His profound knowledge in graphic design and openness to learn new things every day, paired with his integrity, makes him a valuable asset on any team.&rdquo;
                </p>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-medium text-primary">Paulina Rodríguez</h4>
                  <p className="text-xs text-secondary font-normal">Marketing Delivery Manager, QuestionPro CX</p>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="flex flex-col justify-between space-y-4">
                <p className="text-sm text-primary leading-relaxed font-light">
                  &ldquo;Omar has been a diligent, intelligent and proficient designer. My favorite trait is how he&apos;s not one to shy away from a challenge, putting in the time and effort to learn whatever he needs to get things done.&rdquo;
                </p>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-medium text-primary">Gerardo Vázquez</h4>
                  <p className="text-xs text-secondary font-normal">UX Director, QuestionPro</p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Closing CTA Strip — Cleaned up with Copy Email, no top border */}
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
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background text-sm font-sans font-medium tracking-wide hover:opacity-90 transition-all duration-200"
                >
                  About me
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <button
                  type="button"
                  onClick={copyEmail}
                  className={`group inline-flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-sans font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                    copied
                      ? 'border-brand text-brand bg-brand/5'
                      : 'border-border/60 text-secondary hover:border-brand/40 hover:text-brand'
                  }`}
                  aria-label={copied ? "Email copied to clipboard" : "Copy email address to clipboard"}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-brand" />
                      <span>Email copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-secondary group-hover:text-brand transition-colors" />
                      <span>Copy email</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </Reveal>

      </main>
    </div>
  );
}
