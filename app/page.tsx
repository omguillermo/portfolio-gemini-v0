"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Egg } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import InteractiveDoodle from '@/components/InteractiveDoodle';
import GachaModal from '@/components/GachaModal';

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen text-foreground font-sans antialiased selection:bg-selection-bg selection:text-selection-text">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_0%_0%,var(--brand),transparent_50%)] opacity-[0.03] pointer-events-none" />
      
      <main className="max-w-6xl mx-auto px-6 pt-40 pb-24 md:px-12 md:pt-64 md:pb-32 relative z-10">
        <header className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <Reveal width="100%" overflow="visible">
            <div className="relative inline-block">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-20 h-20 z-20">
                <InteractiveDoodle />
              </div>
              <h1 className="text-hero font-bold mb-4 leading-tight relative mt-4 md:mt-0">
                Senior Product Designer <br className="hidden md:block" />
                & Design System Builder
              </h1>
            </div>
            <p className="text-heading text-muted max-w-3xl mx-auto leading-relaxed font-light tracking-wide mb-8 mt-4 md:mt-0">
              I bridge the gap between design and engineering to build useful B2B and eCommerce products. Focused on sweating the edge cases, scaling design systems, and adopting AI workflows early.
            </p>

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/50 group cursor-default transition-all duration-500 md:hover:pr-4 mx-auto max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              <span className="text-mono font-mono text-[10px] uppercase tracking-widest text-foreground flex items-center overflow-hidden">
                Open to new roles
                <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 md:group-hover:max-w-[300px] md:group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <span className="mx-1">•</span> TN Visa Eligible <span className="mx-1">•</span> Open to relocate
                </span>
              </span>
            </div>
          </Reveal>
        </header>

        <section className="mb-32">
          <Reveal width="100%" overflow="visible">
            <h2 className="text-mono font-mono text-muted uppercase tracking-widest mb-8 border-b border-border pb-4">
              01 / Highlighted Projects
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal width="100%" delay={0.1} overflow="visible">
              <Link href="/case-studies/stoki-ai" className="group block h-full">
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="bg-surface border border-border p-6 rounded-2xl h-full flex flex-col gap-6 group-hover:shadow-xl group-hover:border-brand/20 shadow-none transition-all"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background flex items-center justify-center border border-border/50">
                    <Image 
                      src="/projects/stockapp-ai/stockapp-cover-stoki-temp.png" 
                      alt="Stoki AI Assistant"
                      fill
                      className="object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="px-2 space-y-2 flex-grow flex flex-col justify-between">
                    <h3 className="text-heading font-bold tracking-tight text-foreground group-hover:text-brand transition-colors">
                      Stoki AI Assistant
                    </h3>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-mono font-mono text-brand uppercase tracking-widest text-[10px] font-bold">$871K facilitated</span>
                      <span className="text-muted/40">•</span>
                      <span className="text-mono font-mono text-muted uppercase tracking-widest text-[10px]">Founding Designer</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </Reveal>

            <Reveal width="100%" delay={0.2} overflow="visible">
              <Link href="/case-studies/godaddy-shipping" className="group block h-full">
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="bg-surface border border-border p-6 rounded-2xl h-full flex flex-col gap-6 group-hover:shadow-xl group-hover:border-brand/20 shadow-none transition-all"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background flex items-center justify-center border border-border/50">
                    <Image 
                      src="/projects/godaddy-labels/godaddy-shippinglabels-cover-temp.png" 
                      alt="Buy Shipping Labels"
                      fill
                      className="object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="px-2 space-y-2 flex-grow flex flex-col justify-between">
                    <h3 className="text-heading font-bold tracking-tight text-foreground group-hover:text-brand transition-colors">
                      Buy Shipping Labels
                    </h3>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-mono font-mono text-brand uppercase tracking-widest text-[10px] font-bold">7.5K Labels</span>
                      <span className="text-muted/40">•</span>
                      <span className="text-mono font-mono text-muted uppercase tracking-widest text-[10px]">Senior Designer</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </Reveal>

            <Reveal width="100%" delay={0.3} overflow="visible">
              <Link href="/case-studies/questionpro-signup" className="group block h-full">
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="bg-surface border border-border p-6 rounded-2xl h-full flex flex-col gap-6 group-hover:shadow-xl group-hover:border-brand/20 shadow-none transition-all"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background flex items-center justify-center border border-border/50">
                    <Image 
                      src="/projects/questionpro-signup/qp-signup-cover-temp.png" 
                      alt="Sign Up Experience"
                      fill
                      className="object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="px-2 space-y-2 flex-grow flex flex-col justify-between">
                    <h3 className="text-heading font-bold tracking-tight text-foreground group-hover:text-brand transition-colors">
                      Sign Up Experience
                    </h3>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-mono font-mono text-brand uppercase tracking-widest text-[10px] font-bold">0.31% Bounce</span>
                      <span className="text-muted/40">•</span>
                      <span className="text-mono font-mono text-muted uppercase tracking-widest text-[10px]">Senior Designer</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <Reveal width="100%" overflow="visible">
            <div>
              <h2 className="text-mono font-mono text-muted uppercase tracking-widest mb-8 border-b border-border pb-4">
                02 / Background
              </h2>
              <div className="space-y-6 text-body text-foreground/80 leading-relaxed max-w-md">
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
              <h2 className="text-mono font-mono text-muted uppercase tracking-widest mb-8 border-b border-border pb-4">
                03 / Index
              </h2>
              <ul className="space-y-4">
                <li>
                  <a href="/Omar Guillermo Resume 2026 - Custom.docx" download className="flex items-center gap-2 text-body text-foreground/80 hover:text-foreground transition-colors w-fit group">
                    <span className="text-muted group-hover:text-brand transition-colors">↗</span>
                    Download Resume
                  </a>
                </li>
                <li>
                  <a href="mailto:omguillermo90@gmail.com" className="flex items-center gap-2 text-body text-foreground/80 hover:text-foreground transition-colors w-fit group">
                    <span className="text-muted group-hover:text-brand transition-colors">↗</span>
                    Email Contact
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/omar-guillermo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-body text-foreground/80 hover:text-foreground transition-colors w-fit group">
                    <span className="text-muted group-hover:text-brand transition-colors">↗</span>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </section>

        <footer className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-small text-muted">
            Designed in Figma, built with Next.js & Gemini.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-3 text-small text-muted hover:text-foreground transition-colors focus:outline-none group relative h-8 px-4 border border-border rounded-full hover:border-brand/50 transition-all"
            title="Oh, an easter egg!"
          >
            <Egg className="w-3 h-3 text-brand" />
            <span className="font-mono uppercase tracking-wider text-[10px]">Oh, an easter egg!</span>
          </button>
        </footer>
      </main>

      <GachaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
