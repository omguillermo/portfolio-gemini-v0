'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-selection-bg selection:text-selection-text">
      <main className="max-w-4xl mx-auto px-6 pt-40 pb-24 md:px-12 md:pt-48 md:pb-32 relative z-10">
        
        <Reveal width="100%">
          <h1 className="text-display font-bold tracking-tighter mb-12 leading-tight">
            I build systems for <br />
            digital-first products.
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 mt-24">
          <Reveal width="100%">
            <div className="space-y-8">
              <div className="aspect-square bg-surface border border-border grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                  alt="Omar Guillermo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <p className="text-mono font-mono text-muted uppercase tracking-widest">Location</p>
                <p className="text-body">San Francisco, CA</p>
              </div>
            </div>
          </Reveal>

          <Reveal width="100%" delay={0.1}>
            <div className="space-y-12">
              <section className="space-y-6 text-heading text-muted leading-relaxed font-light">
                <p>
                  I'm Omar Guillermo, a Senior Product Designer and Systems Architect focused on bridging the gap between high-level design strategy and robust engineering implementation.
                </p>
                <p>
                  With over 15 years in the field, I've spent the majority of my career at startups where I've led the design of complex dashboard environments, visualization engines, and cross-platform design systems.
                </p>
                <p>
                  I believe that the best products are built when designers understand the technical constraints and possibilities of the medium. My approach is rooted in code-literate design—treating components not just as visual elements, but as functional parts of a larger machine.
                </p>
              </section>

              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-border">
                <div className="space-y-4">
                  <h3 className="text-mono font-mono text-muted uppercase tracking-widest">Capabilities</h3>
                  <ul className="space-y-2 text-body">
                    <li>Systems Design</li>
                    <li>UI/UX Architecture</li>
                    <li>Prototyping</li>
                    <li>Frontend Strategy</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-mono font-mono text-muted uppercase tracking-widest">Stack</h3>
                  <ul className="space-y-2 text-body">
                    <li>Next.js / React</li>
                    <li>TailwindCSS</li>
                    <li>Framer Motion</li>
                    <li>TypeScript</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </main>
    </div>
  );
}
