'use client';

import React, { use, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, X, Maximize2, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/components/Reveal';
import ProjectGate from '@/components/ProjectGate';
import { projectsData } from '@/data/projects';

export default function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projectsData[slug as keyof typeof projectsData];
  const [activeImage, setActiveImage] = useState<string | null>(null);

  React.useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeImage]);

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
          <header className="mb-32">
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

        <article className="space-y-32">
          {/* 1. Problem & Hypothesis */}
          <Reveal width="100%">
            <section className="space-y-4">
              <div className="space-y-4">
                <h2 className="text-mono font-mono text-muted uppercase tracking-widest flex items-center gap-4 text-[11px]">
                  The Problem
                </h2>
                <p className="text-body text-foreground/90 leading-relaxed">
                  {project.problem_hypothesis.problem}
                </p>
              </div>
              <div className="bg-surface/50 border border-border p-8 rounded-2xl space-y-4 mt-12">
                <div className="flex items-center gap-2 text-brand">
                  <Lightbulb className="w-4 h-4" />
                  <span className="text-mono font-mono text-[10px] uppercase tracking-widest font-bold">Hypothesis</span>
                </div>
                <p className="text-body text-muted leading-relaxed italic">
                  &quot;{project.problem_hypothesis.hypothesis}&quot;
                </p>
              </div>
            </section>
          </Reveal>

          {/* 2. Design Iteration Section (FAANG "Messy Middle") */}
          <Reveal width="100%">
            <section className="space-y-4">
              <div className="space-y-4">
                <h2 className="text-mono font-mono text-muted uppercase tracking-widest flex items-center gap-4 text-[11px]">
                  Design Iteration & Rationale
                </h2>
                <p className="text-body text-foreground/90 leading-relaxed whitespace-pre-wrap">
                  {project.design_rationale}
                </p>
              </div>

              <div className="space-y-16 mt-16">
                {project.iterations.map((iteration, index) => (

                  <div key={index} className="space-y-8">

                    <div className="space-y-2">
                      <p className="text-mono text-brand font-mono text-[10px] uppercase tracking-widest">Iteration [{index + 1}]</p>
                      <h3 className="text-heading font-bold">{iteration.approach}</h3>
                      <p className="text-body text-muted leading-relaxed pt-2">
                        {iteration.why_it_failed}
                      </p>
                    </div>
                    {iteration.image_url && (
                      <div className="space-y-4">
                        <button 
                          className="w-full aspect-video bg-surface border border-border rounded-2xl overflow-hidden cursor-zoom-in relative group block"
                          onClick={() => setActiveImage(iteration.image_url!)}
                          aria-label={`View full size image of ${iteration.approach}`}
                        >
                           <Image 
                            src={iteration.image_url} 
                            alt={iteration.approach} 
                            fill 
                            className="object-cover" 
                           />
                           <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-border flex items-center gap-2 text-small">
                                <Maximize2 className="w-4 h-4" />
                                Click to Expand
                              </div>
                           </div>
                        </button>
                        {iteration.caption && (
                          <p className="text-small text-muted italic">
                            {iteration.caption}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* 3. Solution Section */}
          <Reveal width="100%">
            <section className="space-y-4">
              <div className="space-y-4">
                <h2 className="text-mono font-mono text-muted uppercase tracking-widest flex items-center gap-4 text-[11px]">
                  The Solution
                </h2>
                <p className="text-body text-foreground/90 leading-relaxed">
                  {project.system_solution}
                </p>
              </div>
              
              {/* Visual Highlights Grid */}
              <div className="space-y-16 mt-16">

                {project.visual_highlights.map((highlight, index) => (
                  <div key={index} className="space-y-4">
                    <button 
                      className="w-full aspect-video bg-surface border border-border rounded-2xl overflow-hidden relative cursor-zoom-in group block"
                      onClick={() => setActiveImage(highlight.image_url)}
                      aria-label={`View full size image: ${highlight.caption}`}
                    >
                      <Image 
                        src={highlight.image_url} 
                        alt={highlight.caption}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-border flex items-center gap-2 text-small">
                            <Maximize2 className="w-4 h-4" />
                            Click to Expand
                         </div>
                      </div>
                    </button>
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
                Edge Cases
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
            <section className="border-t border-border">
              <div className="pt-16 space-y-4">
                <h2 className="text-mono font-mono text-muted uppercase tracking-widest flex items-center gap-4 text-[11px]">
                  Results & Retrospective
                </h2>
                <p className="text-body text-foreground/90 leading-relaxed italic text-muted">
                  &quot;{project.retrospective}&quot;
                </p>
              </div>
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
              aria-label="Close image preview"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
            >
              <Image 
                src={activeImage} 
                alt="High resolution project preview" 
                fill
                className="object-contain"
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
