"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Download, Lock } from 'lucide-react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function Portfolio() {
  const [systemPing, setSystemPing] = useState(false);

  const handleSystemClick = () => {
    setSystemPing(true);
    setTimeout(() => setSystemPing(false), 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-selection-bg selection:text-selection-text">
      {/* Optional: Subtle Brand Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_0%_0%,var(--brand),transparent_50%)] opacity-[0.03] pointer-events-none" />
      
      <main className="max-w-6xl mx-auto px-6 pt-40 pb-24 md:px-12 md:pt-48 md:pb-32 relative z-10">
        {/* Hero Section */}
        <header className="mb-32">
          <Reveal width="100%">
            <h1 className="text-hero font-bold tracking-tighter mb-8 leading-tight">
              Senior Product Designer <br className="hidden md:block" />
              & Systems Architect.
            </h1>
            <p className="text-heading text-muted max-w-3xl leading-relaxed font-light tracking-wide">
              Translating complex ecosystem constraints into scalable, rock-solid interfaces. 
              Focused on component-level problem solving, edge-cases, and unbreakable grid systems.
            </p>
          </Reveal>
        </header>


        {/* Feature-Based Case Studies */}
        <section className="mb-32">
          <Reveal width="100%">
            <h2 className="text-mono font-mono text-muted uppercase tracking-widest mb-12 border-b border-border pb-4">
              01 / System Interventions
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Project Card 1 */}
            <Reveal width="100%" delay={0.1} overflow="visible">
              <Link href="/case-studies/global-checkout">
                <motion.div 
                  whileHover={{ y: -4, borderColor: 'var(--brand)' }}
                  transition={{ duration: 0.2 }}
                  className="group cursor-pointer bg-surface border border-border p-8 flex flex-col justify-between h-full min-h-[400px] transition-colors"
                >
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <h3 className="text-heading font-semibold tracking-tight">Global Checkout Flow</h3>
                    <ArrowUpRight className="text-muted group-hover:text-foreground transition-colors" />
                  </div>
                  
                  {/* Front-and-center Stat Blocks */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="border-l-2 border-brand/50 pl-4">
                      <p className="text-mono text-muted font-mono uppercase mb-1">Impact</p>
                      <p className="text-body font-medium">+14.2% Conversion</p>
                    </div>
                    <div className="border-l-2 border-brand/50 pl-4">
                      <p className="text-mono text-muted font-mono uppercase mb-1">Constraint</p>
                      <p className="text-body font-medium">&lt; 1.2s Load Time</p>
                    </div>
                  </div>
                </div>

                <p className="text-body text-muted leading-relaxed group-hover:text-foreground/80 transition-colors">
                  Re-architecting the payment rendering engine to support 42 localized gateways without compromising the core component library.
                </p>
                </motion.div>
              </Link>
            </Reveal>

            {/* Project Card 2 */}
            <Reveal width="100%" delay={0.2} overflow="visible">
              <Link href="/case-studies/data-engine">
                <motion.div 
                  whileHover={{ y: -4, borderColor: 'var(--brand)' }}
                  transition={{ duration: 0.2 }}
                  className="group cursor-pointer bg-surface border border-border p-8 flex flex-col justify-between h-full min-h-[400px] transition-colors"
                >
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <h3 className="text-heading font-semibold tracking-tight">Data Visualization Engine</h3>
                    <ArrowUpRight className="text-muted group-hover:text-foreground transition-colors" />
                  </div>
                  
                  {/* Front-and-center Stat Blocks */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="border-l-2 border-brand/50 pl-4">
                      <p className="text-mono text-muted font-mono uppercase mb-1">Scale</p>
                      <p className="text-body font-medium">10M+ Data Points</p>
                    </div>
                    <div className="border-l-2 border-brand/50 pl-4">
                      <p className="text-mono text-muted font-mono uppercase mb-1">Accessibility</p>
                      <p className="text-body font-medium">WCAG 2.1 AAA</p>
                    </div>
                  </div>
                </div>

                <p className="text-body text-muted leading-relaxed group-hover:text-foreground/80 transition-colors">
                  Establishing a robust, accessible token system for real-time financial dashboards navigating extreme data density.
                </p>
                </motion.div>
              </Link>
            </Reveal>

            {/* Project Card 3 - PROTECTED */}
            <Reveal width="100%" delay={0.3} overflow="visible">
              <Link href="/case-studies/neo-banking">
                <motion.div 
                  whileHover={{ y: -4, borderColor: 'var(--brand)' }}
                  transition={{ duration: 0.2 }}
                  className="group cursor-pointer bg-surface border border-border p-8 flex flex-col justify-between h-full min-h-[400px] transition-colors"
                >
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <div className="flex items-center gap-3">
                      <h3 className="text-heading font-semibold tracking-tight">Neo-Banking Core</h3>
                      <Lock className="w-4 h-4 text-brand" />
                    </div>
                    <ArrowUpRight className="text-muted group-hover:text-foreground transition-colors" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="border-l-2 border-brand/50 pl-4">
                      <p className="text-mono text-muted font-mono uppercase mb-1">Impact</p>
                      <p className="text-body font-medium">$2B+ Transacted</p>
                    </div>
                    <div className="border-l-2 border-brand/50 pl-4">
                      <p className="text-mono text-muted font-mono uppercase mb-1">Constraint</p>
                      <p className="text-body font-medium">Zero Latency UI</p>
                    </div>
                  </div>
                </div>

                <p className="text-body text-muted leading-relaxed group-hover:text-foreground/80 transition-colors">
                  Designing the foundational ledger interface for a high-growth fintech startup, focusing on real-time data accuracy and user trust.
                </p>
                </motion.div>
              </Link>
            </Reveal>

            {/* Project Card 4 */}
            <Reveal width="100%" delay={0.4} overflow="visible">
              <Link href="/case-studies/smart-grid">
                <motion.div 
                  whileHover={{ y: -4, borderColor: 'var(--brand)' }}
                  transition={{ duration: 0.2 }}
                  className="group cursor-pointer bg-surface border border-border p-8 flex flex-col justify-between h-full min-h-[400px] transition-colors"
                >
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <h3 className="text-heading font-semibold tracking-tight">Smart Grid Monitor</h3>
                    <ArrowUpRight className="text-muted group-hover:text-foreground transition-colors" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="border-l-2 border-brand/50 pl-4">
                      <p className="text-mono text-muted font-mono uppercase mb-1">Impact</p>
                      <p className="text-body font-medium">-18% Waste</p>
                    </div>
                    <div className="border-l-2 border-brand/50 pl-4">
                      <p className="text-mono text-muted font-mono uppercase mb-1">Constraint</p>
                      <p className="text-body font-medium">Multi-device Sync</p>
                    </div>
                  </div>
                </div>

                <p className="text-body text-muted leading-relaxed group-hover:text-foreground/80 transition-colors">
                  Visualizing energy distribution across municipal infrastructure with a responsive, high-performance monitoring dashboard.
                </p>
                </motion.div>
              </Link>
            </Reveal>

          </div>
        </section>

        {/* About & Contact */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-border pt-16">
          <Reveal width="100%">
            <div>
              <h2 className="text-mono font-mono text-muted uppercase tracking-widest mb-8">
                02 / Background
              </h2>
              <p className="text-body text-foreground/80 leading-relaxed max-w-md">
                With 15 years of deep UI/UX experience, my practice revolves around consistency, organization, and treating design as a highly technical discipline. I build systems that scale across organizations and withstand the friction of edge cases.
              </p>
            </div>
          </Reveal>

          <Reveal width="100%" delay={0.1}>
            <div>
              <h2 className="text-mono font-mono text-muted uppercase tracking-widest mb-8">
                03 / Index
              </h2>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center gap-2 text-body text-foreground/80 hover:text-foreground transition-colors w-fit group">
                    <Download className="w-5 h-5 text-muted group-hover:text-foreground transition-colors" />
                    Download Resume.pdf
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@example.com" className="flex items-center gap-2 text-body text-foreground/80 hover:text-foreground transition-colors w-fit group">
                    <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-foreground transition-colors" />
                    Email Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-body text-foreground/80 hover:text-foreground transition-colors w-fit group">
                    <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-foreground transition-colors" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </section>

        {/* Footer & Easter Egg */}
        <footer className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-small text-muted">
            Designed in Figma, built with Next.js & Tailwind using AI.
          </p>
          
          {/* System Status Easter Egg */}
          <button 
            onClick={handleSystemClick}
            className="flex items-center gap-2 text-small text-muted hover:text-foreground transition-colors focus:outline-none"
            title="System Status"
          >
            <AnimatePresence>
              {systemPing && (
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: [1.5, 1], opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute w-2 h-2 bg-green-400 rounded-full blur-sm"
                />
              )}
            </AnimatePresence>
            <motion.div 
              animate={systemPing ? { scale: [1, 1.5, 1], backgroundColor: ["#22c55e", "#4ade80", "#22c55e"] } : {}}
              className="w-2 h-2 bg-green-500 rounded-full"
            />
            <span className="font-mono uppercase tracking-wider text-mono">All Systems Nominal</span>
          </button>
        </footer>

      </main>
    </div>
  );
}
