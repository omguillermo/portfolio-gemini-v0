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

  const [activeSection, setActiveSection] = useState('overview');

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

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    const targetIds = ['overview', 'problem', 'iteration', 'solution', 'edge-cases', 'retrospective'];
    targetIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-primary flex items-center justify-center">
        <p className="text-heading">System Error: Case study not found.</p>
      </div>
    );
  }

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'The Problem' },
    { id: 'iteration', label: 'Design Iteration' },
    { id: 'solution', label: 'The Solution' },
    { id: 'edge-cases', label: 'Edge Cases' },
    { id: 'retrospective', label: 'Retrospective' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = (
    <div className="min-h-screen text-primary font-sans antialiased pb-12 md:pb-20 selection:bg-selection-bg selection:text-selection-text">
      {/* Full-width Page Header */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 pt-20 md:pt-24 pb-8 border-b border-border/10">
        {/* Return link */}
        <Link href="/" className="inline-flex items-center gap-2 text-small font-mono text-secondary hover:text-brand transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>
        
        {/* Project Tag Pills */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tag.split('•').map((t) => (
            <span key={t.trim()} className="inline-flex items-center px-3 py-1 rounded-full text-mono font-mono text-[9px] uppercase tracking-wider text-brand bg-brand/5 border border-brand/20">
              {t.trim()}
            </span>
          ))}
        </div>

        <h1 className="text-display font-bold tracking-tighter mb-4 max-w-4xl">
          {project.title}
        </h1>
        <p className="text-heading text-secondary leading-relaxed font-light tracking-wide max-w-3xl">
          {project.subtitle}
        </p>
      </div>

      {/* Two-Column Layout Split */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 pt-12">
        
        {/* Sticky Left Sidebar */}
        <aside className="w-full md:w-[220px] shrink-0 md:sticky md:top-28 h-fit space-y-8 z-30 pb-6 md:pb-0">
          {/* Project Context Box: flat, solid surface-inset */}
          <div className="bg-surface-inset border-0 rounded-2xl p-5 space-y-3.5 text-[11px] leading-relaxed">
            <div>
              <p className="text-mono font-mono text-[9px] uppercase text-secondary tracking-wider">Role</p>
              <p className="font-semibold text-primary mt-0.5">{project.role}</p>
            </div>
            <div>
              <p className="text-mono font-mono text-[9px] uppercase text-secondary tracking-wider">Timeline</p>
              <p className="font-semibold text-primary mt-0.5">{project.timeline}</p>
            </div>
            <div>
              <p className="text-mono font-mono text-[9px] uppercase text-secondary tracking-wider">Constraint</p>
              <p className="text-primary mt-0.5">{project.constraint}</p>
            </div>
          </div>

          {/* Table of Contents */}
          <ul className="space-y-2 text-[10px]">
            {sections.map((sec) => (
              <li key={sec.id}>
                <button
                  onClick={() => scrollTo(sec.id)}
                  className={`block w-full text-left font-mono uppercase tracking-wider transition-colors py-0.5 ${
                    activeSection === sec.id
                      ? 'text-brand font-bold'
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  <span className={`inline-block w-2.5 mr-0.5 transition-opacity ${activeSection === sec.id ? 'opacity-100' : 'opacity-0'}`}>❯</span>
                  {sec.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Try Prototype CTA */}
          {project.prototype_link && (
            <a 
              href={project.prototype_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-foreground text-background px-4 py-3 rounded-xl text-mono font-mono text-[9px] uppercase tracking-wider hover:bg-brand hover:text-white transition-all duration-300 shadow-sm"
            >
              Try prototype
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </aside>

        {/* Right Content Area */}
        <main className="flex-grow min-w-0 max-w-3xl">
          <Reveal width="100%">
            <header className="mb-12 scroll-mt-28" id="overview">
              <h2 className="text-mono text-secondary uppercase tracking-widest flex items-center gap-4 mb-6">
                Overview
              </h2>
              <p className="text-body font-semibold text-primary leading-relaxed">
                {project.impact}
              </p>
            </header>
          </Reveal>

          <article className="space-y-16">
            {/* 1. Problem & Hypothesis */}
            <Reveal width="100%">
              <section id="problem" className="space-y-4 scroll-mt-24">
                <div className="space-y-4">
                  <h2 className="text-mono text-secondary uppercase tracking-widest flex items-center gap-4">
                    The Problem
                  </h2>
                  <p className="text-body text-primary leading-relaxed">
                    {project.problem_hypothesis.problem}
                  </p>
                </div>
                <div className="bg-surface-inset border-0 p-6 rounded-2xl space-y-4 mt-8">
                  <div className="flex items-center gap-2 text-brand">
                    <Lightbulb className="w-4 h-4" />
                    <span className="text-mono uppercase tracking-widest font-bold">Hypothesis</span>
                  </div>
                  <p className="text-body text-secondary leading-relaxed">
                    &quot;{project.problem_hypothesis.hypothesis}&quot;
                  </p>
                </div>
              </section>
            </Reveal>

            {/* 2. Design Iteration Section */}
            <Reveal width="100%">
              <section id="iteration" className="space-y-4 scroll-mt-24">
                <div className="space-y-4">
                  <h2 className="text-mono text-secondary uppercase tracking-widest flex items-center gap-4">
                    Design Iteration & Rationale
                  </h2>
                  <p className="text-body text-primary leading-relaxed whitespace-pre-wrap">
                    {project.design_rationale}
                  </p>
                </div>

                <div className="space-y-12 mt-12">
                  {project.iterations.map((iteration, index) => (
                    <div key={index} className="space-y-8">
                      <div className="space-y-2">
                        <p className="text-mono text-secondary uppercase tracking-widest">Iteration 0{index + 1}</p>
                        <h3 className="text-heading font-bold">{iteration.approach}</h3>
                        <p className="text-body text-primary leading-relaxed pt-2">
                          {iteration.why_it_failed}
                        </p>
                      </div>
                      {iteration.image_url && (
                        <div className="space-y-4">
                          <button 
                            className="w-full aspect-video bg-surface-inset border-0 rounded-2xl overflow-hidden cursor-zoom-in relative group block"
                            onClick={() => setActiveImage(iteration.image_url!)}
                            aria-label={`View full size image of ${iteration.approach}`}
                          >
                            <Image 
                              src={iteration.image_url} 
                              alt={iteration.approach} 
                              fill 
                              sizes="(max-width: 1024px) 100vw, 896px"
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
                            <p className="text-small text-secondary italic">
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
              <section id="solution" className="space-y-4 scroll-mt-24">
                <div className="space-y-4">
                  <h2 className="text-mono text-secondary uppercase tracking-widest flex items-center gap-4">
                    The Solution
                  </h2>
                  <p className="text-body text-primary leading-relaxed">
                    {project.system_solution}
                  </p>
                </div>
                
                {/* Visual Highlights Grid */}
                <div className="space-y-12 mt-12">
                  {project.visual_highlights.map((highlight, index) => (
                    <div key={index} className="space-y-4">
                      <button 
                        className="w-full aspect-video bg-surface-inset border-0 rounded-2xl overflow-hidden relative cursor-zoom-in group block"
                        onClick={() => setActiveImage(highlight.image_url)}
                        aria-label={`View full size image: ${highlight.caption}`}
                      >
                        <Image 
                          src={highlight.image_url} 
                          alt={highlight.caption}
                          fill
                          sizes="(max-width: 1024px) 100vw, 896px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-border flex items-center gap-2 text-small">
                            <Maximize2 className="w-4 h-4" />
                            Click to Expand
                          </div>
                        </div>
                      </button>
                      <p className="text-small text-secondary italic">
                        {highlight.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 4. Edge Cases Section */}
            <Reveal width="100%">
              <section id="edge-cases" className="bg-surface-inset border-0 rounded-2xl p-6 md:p-8 scroll-mt-24">
                <h2 className="text-mono text-brand uppercase tracking-widest mb-8 flex items-center gap-4">
                  Edge Cases
                </h2>
                <ul className="space-y-6">
                  {project.edge_cases_handled.map((edgeCase, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="text-brand font-mono text-small mt-1">[{index + 1}]</span>
                      <p className="text-body text-primary leading-relaxed">
                        {edgeCase}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            {/* 5. Retrospective Section */}
            <Reveal width="100%">
              <section id="retrospective" className="border-t border-border scroll-mt-24">
                <div className="pt-12 space-y-4">
                  <h2 className="text-mono text-secondary uppercase tracking-widest flex items-center gap-4">
                    Results & Retrospective
                  </h2>
                  <p className="text-body text-primary leading-relaxed">
                    &quot;{project.retrospective}&quot;
                  </p>
                </div>
              </section>
            </Reveal>

            {/* Prototype Link (Centred under main article if needed, but sticky CTA is also on left) */}
            {project.prototype_link && (
              <Reveal width="100%">
                <section className="flex flex-col items-center py-16">
                  <h3 className="text-heading font-bold mb-8">Ready to explore the logic?</h3>
                  <a 
                    href={project.prototype_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-brand hover:text-white transition-all shadow-xl shadow-brand/10 group"
                  >
                    Interact with Prototype
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </section>
              </Reveal>
            )}

            {/* Footer Navigation */}
            <Reveal width="100%">
              <footer className="pt-12 border-t border-border flex justify-between items-center">
                <Link href="/" className="text-small font-mono text-secondary hover:text-brand transition-colors">
                  ← INDEX
                </Link>
                <div className="flex gap-8">
                  <span className="text-mono text-muted uppercase">Next Project: Coming Soon</span>
                </div>
              </footer>
            </Reveal>
          </article>
        </main>
      </div>

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
              className="absolute top-8 right-8 text-secondary hover:text-primary transition-colors"
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
                sizes="100vw"
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
