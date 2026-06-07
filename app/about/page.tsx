'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import TooltipFollower from '@/components/TooltipFollower';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouch = () => {
    // If it's a touch event or we're on mobile, just toggle
    if (window.matchMedia('(max-width: 1024px)').matches) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <div className="min-h-screen text-foreground font-sans antialiased pb-32 selection:bg-selection-bg selection:text-selection-text">
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-16 md:px-12 md:pt-40 md:pb-24 relative z-10">

        <Reveal width="100%">
          <h1 className="text-display font-bold tracking-tighter mb-8 leading-tight">
            Wanna learn more about me? <br />
            I feel honored.
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 mt-12">
          <Reveal width="100%">
            <div className="space-y-8">
              {/* Photo Easter Egg Container */}
              <div
                ref={containerRef}
                className="relative aspect-square bg-surface border border-border rounded-xl shadow-none overflow-hidden group cursor-none"
                onMouseEnter={() => !window.matchMedia('(max-width: 1024px)').matches && setIsHovered(true)}
                onMouseLeave={() => !window.matchMedia('(max-width: 1024px)').matches && setIsHovered(false)}
                onClick={handleTouch}
              >
                {/* Professional Photo */}
                <motion.div
                  className="absolute inset-0 w-full h-full grayscale"
                  animate={{
                    opacity: isHovered ? 0 : 1,
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src="/about/oguillermo-edit-about.jpg"
                    alt="Omar Guillermo - Professional"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>

                {/* Metalhead Easter Egg Photo with Periodic Headbang Shake */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    // 0.5s rhythm: quick jitter, brief pause
                    x: isHovered ? [0, -1.5, 1.5, -1.5, 0, 0] : 0,
                    y: isHovered ? [0, 1.5, -1.5, 1.5, 0, 0] : 0,
                  }}
                  transition={{
                    opacity: { duration: 0.4 },
                    x: {
                      repeat: Infinity,
                      duration: 0.5,
                      times: [0, 0.1, 0.2, 0.3, 0.4, 1]
                    },
                    y: {
                      repeat: Infinity,
                      duration: 0.5,
                      times: [0, 0.1, 0.2, 0.3, 0.4, 1]
                    }
                  }}
                >
                  <Image
                    src="/about/oguillermo-metalhead.png"
                    alt="Omar Guillermo - Nightwish Concert"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>

                {/* Extracted Design System Component */}
                <TooltipFollower
                  text="🤘 @ 2022 Nightwish Concert"
                  isVisible={isHovered}
                  containerRef={containerRef}
                />
              </div>

              <div className="space-y-2">
                <p className="text-mono text-muted uppercase tracking-widest">Location</p>
                <p className="text-body font-medium">Mérida, México 🇲🇽</p>
              </div>
              <div className="space-y-2">
                <p className="text-mono text-muted uppercase tracking-widest">Favorite Fuel</p>
                <p className="text-body font-medium">Chilaquiles & Coffee ☕️</p>
              </div>
            </div>
          </Reveal>

          <Reveal width="100%" delay={0.1}>
            <div className="space-y-12">
              <section className="space-y-4 text-body text-muted leading-relaxed font-light">
                <p>
                  Hello! I&apos;m Omar Guillermo, a Senior Product Designer with over 14 years of experience.
                </p>
                <p>
                  I started my career with a strong foundation in traditional graphic design and advertising before discovering my true passion: UI/UX and product design.
                </p>
                <p>
                  Over the years, I&apos;ve worked across very different environments. From local creative studios, to in-house corporate design teams, then navigating the complexities of large scale enterprise platforms at global companies, and more recently at early-stage startups.
                </p>
                <p>
                  My professional philosophy is &quot;Always Be Learning.&quot; I enjoy sweating the edge cases, working closely with developers, and playing around with new tech (like AI workflows) to improve my design process.
                </p>
                <p>
                  And while I love the technical side of product design, my graphic design roots always keep me honest, ensuring I never lose sight of color harmony and pixel-perfect precision.
                </p>
                <p>
                  Outside of work, I&apos;m based in sunny Mérida, México. You can usually find me drinking coffee, listening to heavy metal, or watching anime (Go Beyond, Plus Ultra!).
                </p>
                <p className="pt-4 font-medium text-foreground">
                  Feel free to reach out at any time, even just for a quick chat. Looking forward to meeting you!
                </p>
              </section>

              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-border">
                <div className="space-y-4">
                  <h3 className="text-mono text-muted uppercase tracking-widest">Capabilities</h3>
                  <ul className="space-y-2 text-body">
                    <li>Systems Design</li>
                    <li>UI/UX Architecture</li>
                    <li>AI Workflows</li>
                    <li>Frontend Strategy</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-mono text-muted uppercase tracking-widest">Stack</h3>
                  <ul className="space-y-2 text-body">
                    <li>HTML and CSS</li>
                    <li>Vibe Coding</li>
                    <li>Design Tokens</li>
                    <li>Figma</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Career Timeline Section (Full Width Breakout) */}
        <div className="mt-20 space-y-6">
          <Reveal width="100%" overflow="visible">
            <h2 className="text-mono text-muted uppercase tracking-widest border-b border-border pb-3 mb-6">
              Career History Timeline
            </h2>
          </Reveal>

          <div className="relative pl-8 ml-3 space-y-12">
            {experiences.map((exp, idx) => {
              const isExpanded = expandedJob === idx;
              return (
                <div key={idx} className="relative group">
                  {/* Vertical Line Segment - connects current dot to next dot */}
                  {idx < experiences.length - 1 && (
                    <div className="absolute -left-[18px] top-[13px] bottom-[-61px] w-[1px] bg-border/40" />
                  )}

                  {/* Timeline Node */}
                  <div className={`absolute -left-[25px] top-1.5 h-3.5 w-3.5 rounded-full border transition-all duration-300 z-10 ${isExpanded
                    ? 'bg-brand border-brand scale-110 shadow-[0_0_8px_rgba(26,154,94,0.4)]'
                    : 'bg-background border-muted/50 group-hover:border-brand group-hover:bg-brand/10'
                    }`} />

                  <div className="space-y-3">
                    {/* Header Row */}
                    <div
                      onClick={() => setExpandedJob(isExpanded ? null : idx)}
                      className="flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <div className="space-y-1">
                        <span className="text-mono font-mono text-muted text-[10px] tracking-wider block">
                          {exp.period}
                        </span>
                        <h3 className="text-body font-bold text-foreground group-hover:text-brand transition-colors block leading-tight">
                          {exp.role} <span className="text-muted font-normal">@</span> {exp.company}
                        </h3>
                      </div>

                      <div className="flex items-center pt-1">
                        <motion.svg
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="w-4 h-4 text-muted/60 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </motion.svg>
                      </div>
                    </div>

                    <p className="text-[13px] text-muted font-light leading-relaxed max-w-2xl">
                      {exp.description}
                    </p>

                    {/* Expandable Accordion */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? 'auto' : 0,
                        opacity: isExpanded ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 space-y-4 border-t border-border/10">
                        {/* Achievements List */}
                        <div className="space-y-3">
                          {exp.achievements.map((ach, aIdx) => (
                            <div key={aIdx} className="flex items-start gap-3 text-[13px] leading-relaxed">
                              <span className="text-mono font-mono text-brand font-bold text-[9px] tracking-wider uppercase shrink-0 mt-0.5 w-[85px] text-right">
                                [{ach.tag}]
                              </span>
                              <span className="text-foreground/80 font-light">
                                {ach.text}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Stack Details */}
                        <div className="pt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-mono font-mono text-[10px] text-muted">
                          <span className="text-muted/50 uppercase tracking-wider">Stack:</span>
                          <span className="text-foreground/70">{exp.stack}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Prior Experience Section */}
        <div className="mt-16 space-y-6">
          <Reveal width="100%" overflow="visible">
            <h2 className="text-mono text-muted uppercase tracking-widest border-b border-border pb-3 mb-6">
              Past Graphic Design Experience
            </h2>
          </Reveal>

          <Reveal width="100%">
            <div className="font-mono text-mono text-muted/80 bg-surface border border-border/40 rounded-xl p-6 space-y-2.5">
              {priorExperiences.map((exp, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] hover:text-foreground transition-colors py-1 border-b border-border/5 last:border-0">
                  <div className="flex items-center gap-2">
                    <span className="text-foreground/80 font-medium">{exp.role}</span>
                    <span className="text-muted/40">@</span>
                    <span className="text-muted">{exp.company}</span>
                  </div>
                  <div className="text-muted/50 tabular-nums">
                    [{exp.period}]
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Certifications and Training */}
        <div className="mt-16 space-y-6">
          <Reveal width="100%" overflow="visible">
            <h2 className="text-mono text-muted uppercase tracking-widest border-b border-border pb-3 mb-6">
              Verified Credentials & Education
            </h2>
          </Reveal>

          <Reveal width="100%">
            <div className="overflow-x-auto border border-border/40 rounded-xl bg-surface">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border/40 text-mono font-mono text-[9px] uppercase tracking-wider text-muted/60 bg-muted/8">
                    <th className="px-6 py-3 font-semibold w-20">Year</th>
                    <th className="px-6 py-3 font-semibold">Credential / Program</th>
                    <th className="px-6 py-3 font-semibold text-right">Issuer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-[13px] font-light">
                  {educationAndCerts.map((cert, idx) => (
                    <tr key={idx} className="hover:bg-border/30 transition-colors">
                      <td className="px-6 py-3.5 font-mono text-[10px] text-muted tabular-nums">{cert.year}</td>
                      <td className="px-6 py-3.5 text-foreground/80 font-normal">{cert.title}</td>
                      <td className="px-6 py-3.5 text-muted text-right text-[12px]">{cert.issuer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>

      </main>
    </div>
  );
}

// Data Models
const experiences = [
  {
    company: 'StockApp',
    role: 'Founding Designer',
    period: 'Aug 2025 – Mar 2026',
    description: 'An early-stage B2B commerce platform for global trade networks, backed by the StartX/Stanford accelerator. Closed in March 2026 following an investor decision to wind down operations.',
    stack: 'Next.js, React, TailwindCSS, Framer Motion, Figma, JSON Tokens, VS Code, Claude Code',
    achievements: [
      { tag: 'SYS-BUILD', text: 'Created StockApp’s Design System built on top of shadcn, managing Figma variables, components, and exportable JSON tokens.' },
      { tag: 'AI-ASSIST', text: 'Redesigned Stoki (AI Assistant) from a full-screen blocking overlay to a persistent floating widget that adapts to content dynamically.' },
      { tag: 'UX-LEAD', text: 'Led UX for connection management, purchasing permissions, payment terms, and buyer identity validation (BPID).' },
      { tag: 'CATALOG', text: 'Enhanced catalog experience: optimized layouts, integrated performance metrics, and designed a 3D network ecosystem visualization.' },
      { tag: 'DEV-PR', text: 'Submitted pull requests directly to the production codebase for UI fixes and feature implementations using VS Code.' }
    ]
  },
  {
    company: 'FullStack Labs (Client: GoDaddy)',
    role: 'Senior Product Designer',
    period: 'Jan 2022 – Jul 2025',
    description: 'Assigned to GoDaddy Commerce within the Orders & Fulfillment and Unified Commerce teams, designing merchant dashboards and toolkits.',
    stack: 'GoDaddy Commerce Design System, React, UsabilityHub, Figma, Agile/Scrum',
    achievements: [
      { tag: 'SHIPPING', text: 'Designed and tested a shipping label purchase flow — 7,500 labels purchased by 6,000+ merchants within 3 months of launch.' },
      { tag: 'CATALOG', text: 'Shipped 10+ core features for Unified Catalog, enabling merchants to manage products, categories, and tax variations.' },
      { tag: 'UX-MOBILE', text: 'Increased mobile usability for the Orders dashboard by introducing a Compact View data table, validated by a 70% user preference rate.' },
      { tag: 'ORDER-UI', text: 'Redesigned Order Details UI with history timeline, customer notes, and clear status visualizations.' },
      { tag: 'SYS-CONTRIB', text: 'Contributed Empty State component to Commerce’s design system, used by 50+ designers across the organization.' },
      { tag: 'DESIGN-QA', text: 'Conducted QA on Unified Catalog — identified 39 issues and drove the resolution of 17 of them within two weeks.' }
    ]
  },
  {
    company: 'QuestionPro',
    role: 'Senior Digital Designer',
    period: 'Jan 2019 – Dec 2021',
    description: 'Promoted to the global team. Owned web design for QuestionPro US and brand/marketing design across LATAM, MENA, APAC, and GmbH regions.',
    stack: 'Framer Motion, HTML/CSS, Web Design System, Figma, Adobe Suite',
    achievements: [
      { tag: 'CHECKOUT', text: 'Redesigned credit card checkout experience, reducing the bounce rate by 9.52% within one quarter.' },
      { tag: 'SYS-BUILD', text: 'Built a web design system translated into templates, cutting page production time by 66% (from 3 months to 1 month).' },
      { tag: 'SIGNUP', text: 'Updated signup flow to guide users to correct product channels, leading to higher quality qualified sales leads.' },
      { tag: 'IDENTITY', text: 'Designed brand identity for all product lines and full marketing/responsive assets for Xday event.' },
      { tag: 'LEADERSHIP', text: 'Led a team of 2 designers for web, marketing, and sales assets.' }
    ]
  },
  {
    company: 'QuestionPro LATAM',
    role: 'Senior Graphic Designer',
    period: 'Feb 2017 – Dec 2018',
    description: 'Lead graphic designer within the marketing team. Designed region-specific web assets and email campaigns.',
    stack: 'HTML/CSS, Email Marketing, Mascot Design, Brand Asset Management',
    achievements: [
      { tag: 'MARKETING', text: 'Designed web contents, HTML/CSS email campaigns, event materials, slides, and the corporate mascot (still in use).' }
    ]
  }
];

const priorExperiences = [
  { company: 'VenadosFC', role: 'Freelance Graphic Designer', period: 'Aug 2016 – Jan 2017' },
  { company: 'Leembal', role: 'Graphic Designer', period: 'Oct 2015 – May 2016' },
  { company: 'Honda Sureste', role: 'Graphic Designer', period: 'Mar 2013 – Sep 2015' },
  { company: 'Pulsem', role: 'Jr. Graphic Designer', period: 'May 2012 – Feb 2013' }
];

const educationAndCerts = [
  { year: '2023', title: 'AI-Powered UX Design: How to Elevate Your UX Career', issuer: 'Interaction Design Foundation' },
  { year: '2023', title: 'Agile Methods for UX Design', issuer: 'Interaction Design Foundation' },
  { year: '2022', title: 'Accessibility: How to Design for All', issuer: 'Interaction Design Foundation' },
  { year: '2022', title: 'Design Thinking: The Ultimate Guide', issuer: 'Interaction Design Foundation' },
  { year: '2022', title: 'User Experience: The Beginner’s Guide', issuer: 'Interaction Design Foundation' },
  { year: '2022', title: 'Foundations of User Experience (UX) Design', issuer: 'Google' },
  { year: '2013', title: 'Bachelor’s Degree in Graphic and Advertising Design', issuer: 'Centro de Estudios de Las Americas (CELA)' }
];

