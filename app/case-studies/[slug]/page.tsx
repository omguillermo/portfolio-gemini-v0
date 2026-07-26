'use client';

import React, { use, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/components/Reveal';
import ProjectGate from '@/components/ProjectGate';
import { projectsData } from '@/data/projects';

function parseInlineMarkdown(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const combinedRegex = /(\*\*(.*?)\*\*)|(\[(.*?)\]\((.*?)\))/g;
  let lastIndex = 0;
  let match;
  
  while ((match = combinedRegex.exec(text)) !== null) {
    const matchIndex = match.index;
    
    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }
    
    if (match[1]) {
      parts.push(
        <strong key={matchIndex} className="font-bold text-primary">
          {match[2]}
        </strong>
      );
    } else if (match[3]) {
      const linkText = match[4];
      const linkUrl = match[5];
      const isButton = linkText.toLowerCase().includes('prototype');
      if (isButton) {
        parts.push(
          <a 
            key={matchIndex} 
            href={linkUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="my-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-foreground text-background font-medium text-xs hover:opacity-90 transition-opacity"
          >
            {linkText} <ArrowUpRight className="w-4 h-4" />
          </a>
        );
      } else {
        parts.push(
          <a 
            key={matchIndex} 
            href={linkUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 font-medium text-brand hover:underline"
          >
            {linkText} <ArrowUpRight className="w-3 h-3" />
          </a>
        );
      }
    }
    
    lastIndex = combinedRegex.lastIndex;
  }
  
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts.length > 0 ? parts : [text];
}

function parseMarkdown(text: string, onExpandImage?: (url: string) => void): React.ReactNode {
  if (!text) return null;
  
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  
  let paragraphBuffer: string[] = [];
  let listBuffer: { type: 'ul' | 'ol'; items: string[] } | null = null;
  let quoteBuffer: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length === 0) return;
    const content = paragraphBuffer.join('\n').trim();
    if (content) {
      elements.push(
        <p key={`p-${elements.length}`} className="text-body text-primary leading-relaxed mb-4">
          {parseInlineMarkdown(content)}
        </p>
      );
    }
    paragraphBuffer = [];
  };

  const flushList = () => {
    if (!listBuffer) return;
    const ListTag = listBuffer.type === 'ul' ? 'ul' : 'ol';
    const listClass = listBuffer.type === 'ul' ? 'list-disc pl-5 space-y-2 my-4 text-primary' : 'list-decimal pl-5 space-y-2 my-4 text-primary';
    elements.push(
      <ListTag key={`list-${elements.length}`} className={listClass}>
        {listBuffer.items.map((item, idx) => (
          <li key={idx} className="leading-relaxed text-body">
            {parseInlineMarkdown(item)}
          </li>
        ))}
      </ListTag>
    );
    listBuffer = null;
  };

  const flushQuote = () => {
    if (quoteBuffer.length === 0) return;
    elements.push(
      <div key={`quote-${elements.length}`} className="my-4 border-l-2 border-brand/50 pl-4 py-2 space-y-2 bg-brand/5 rounded-r-lg">
        {quoteBuffer.map((q, idx) => (
          <p key={idx} className="text-body text-secondary italic leading-relaxed">
            {parseInlineMarkdown(q)}
          </p>
        ))}
      </div>
    );
    quoteBuffer = [];
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      flushQuote();
      return;
    }

    const imgMatch = /^!\[(.*?)\]\((.*?)\)$/.exec(trimmed);
    if (imgMatch) {
      flushParagraph();
      flushList();
      flushQuote();
      const caption = imgMatch[1];
      const imgUrl = imgMatch[2];
      elements.push(
        <div key={`img-${elements.length}`} className="my-6">
          <SafeImage
            src={imgUrl}
            alt={caption}
            caption={caption}
            onClick={() => onExpandImage && onExpandImage(imgUrl)}
          />
        </div>
      );
      return;
    }

    if (trimmed.startsWith('#### ')) {
      flushParagraph();
      flushList();
      flushQuote();
      elements.push(
        <h4 key={`h4-${elements.length}`} className="text-body font-bold mt-6 mb-3 text-primary font-mono text-xs uppercase tracking-wider">
          {parseInlineMarkdown(trimmed.substring(5))}
        </h4>
      );
      return;
    }

    if (trimmed.startsWith('### ')) {
      flushParagraph();
      flushList();
      flushQuote();
      elements.push(
        <h3 key={`h3-${elements.length}`} className="text-body font-bold mt-8 mb-4 text-primary font-mono text-xs">
          {parseInlineMarkdown(trimmed.substring(4))}
        </h3>
      );
      return;
    }

    if (trimmed.startsWith('## ')) {
      flushParagraph();
      flushList();
      flushQuote();
      elements.push(
        <h2 key={`h2-${elements.length}`} className="text-heading font-bold mt-10 mb-4 text-primary">
          {parseInlineMarkdown(trimmed.substring(3))}
        </h2>
      );
      return;
    }

    if (trimmed.startsWith('>')) {
      flushParagraph();
      flushList();
      quoteBuffer.push(trimmed.replace(/^>\s*/, ''));
      return;
    }

    if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
      flushParagraph();
      flushQuote();
      if (!listBuffer || listBuffer.type !== 'ul') {
        flushList();
        listBuffer = { type: 'ul', items: [] };
      }
      listBuffer.items.push(trimmed.substring(2));
      return;
    }

    if (/^\d+\.\s/.test(trimmed)) {
      flushParagraph();
      flushQuote();
      if (!listBuffer || listBuffer.type !== 'ol') {
        flushList();
        listBuffer = { type: 'ol', items: [] };
      }
      listBuffer.items.push(trimmed.replace(/^\d+\.\s*/, ''));
      return;
    }

    flushList();
    flushQuote();
    paragraphBuffer.push(trimmed);
  });

  flushParagraph();
  flushList();
  flushQuote();

  return elements;
}

function SafeImage({ 
  src, 
  alt, 
  caption, 
  onClick, 
  aspectRatio = 'aspect-video' 
}: { 
  src: string; 
  alt: string; 
  caption?: string; 
  onClick?: () => void; 
  aspectRatio?: string; 
}) {
  return (
    <div className="space-y-3">
      <button 
        className={`w-full ${aspectRatio} bg-surface-inset border-0 rounded-2xl overflow-hidden cursor-zoom-in relative group block`}
        onClick={onClick}
        aria-label={`View full size image: ${alt}`}
      >
        <Image 
          src={src} 
          alt={alt} 
          fill 
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover object-top" 
        />
        <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-border flex items-center gap-2 text-small">
            <Maximize2 className="w-4 h-4" />
            Click to Expand
          </div>
        </div>
      </button>
      {caption && (
        <p className="text-small text-secondary italic">
          {caption}
        </p>
      )}
    </div>
  );
}

function SolutionCarousel({ slides, onExpand }: { slides: Array<{ title: string; image_url: string; caption: string }>; onExpand: (url: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="my-8 space-y-4">
      <div className="relative aspect-video bg-surface-inset border-0 rounded-2xl overflow-hidden group">
        <SafeImage
          src={currentSlide.image_url}
          alt={currentSlide.title}
          caption={currentSlide.caption}
          onClick={() => onExpand(currentSlide.image_url)}
        />
        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
          <div className="bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/20 text-mono font-mono text-xxs uppercase tracking-wider text-primary pointer-events-auto">
            {currentIndex + 1} / {slides.length} • {currentSlide.title}
          </div>
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="w-8 h-8 rounded-full bg-background/90 backdrop-blur-md border border-border/20 flex items-center justify-center text-primary hover:bg-background transition-colors"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="w-8 h-8 rounded-full bg-background/90 backdrop-blur-md border border-border/20 flex items-center justify-center text-primary hover:bg-background transition-colors"
              aria-label="Next slide"
            >
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </button>
          </div>
        </div>
      </div>
      <p className="text-small text-secondary italic">
        {currentSlide.caption}
      </p>
    </div>
  );
}

export default function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projectsData[slug as keyof typeof projectsData];
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const [activeSection, setActiveSection] = useState('overview');

  // Refs to control click-to-scroll spy locks
  const isScrollingRef = React.useRef(false);
  const scrollTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

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
    let ticking = false;

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const targetIds = ['overview', 'problem', 'hypothesis', 'constraint', 'iteration', 'solution', 'edge-cases', 'outcomes', 'retrospective'];
          
          // Special case: if scrolled to the absolute bottom, select the last section
          const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
          if (isAtBottom) {
            setActiveSection('retrospective');
            ticking = false;
            return;
          }

          let minDistance = Infinity;
          let activeId = 'overview';

          targetIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              // Calculate absolute distance of the section's top from a line 150px down from viewport top
              const distance = Math.abs(rect.top - 150);
              if (distance < minDistance) {
                minDistance = distance;
                activeId = id;
              }
            }
          });

          setActiveSection(activeId);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
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
    { id: 'hypothesis', label: 'Hypothesis' },
    { id: 'constraint', label: 'Constraints' },
    { id: 'iteration', label: 'Design Iterations' },
    { id: 'solution', label: 'The Solution' },
    { id: 'edge-cases', label: 'Edge Cases' },
    { id: 'outcomes', label: 'Outcomes' },
    { id: 'retrospective', label: 'Retrospective' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Set section active immediately to prevent lag/bugs at bottom scroll boundaries
      setActiveSection(id);
      
      // Lock scroll spy updates during smooth scroll animation
      isScrollingRef.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      
      el.scrollIntoView({ behavior: 'smooth' });
      
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };

  const content = (
    <div className="min-h-screen text-primary font-sans antialiased pb-12 md:pb-20 selection:bg-selection-bg selection:text-selection-text">
      {/* Full-width Page Header */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-20 md:pt-24 pb-8 border-b border-border/10">
        {/* Return link */}
        <Link href="/" className="inline-flex items-center gap-2 text-small font-mono text-secondary hover:text-brand transition-colors mt-8 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>
        
        {/* Project Tag Pills */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tag.split(/[,•]/).map((t) => (
            <span key={t.trim()} className="inline-flex items-center px-2.5 py-1 rounded-md text-mono font-mono text-xxs uppercase tracking-wider text-secondary bg-foreground/[0.07] border-0 font-medium">
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
        {project.hero_image && (
          <div className="mt-8">
            <SafeImage
              src={project.hero_image}
              alt={`${project.title} Hero Cover`}
              onClick={() => setActiveImage(project.hero_image!)}
              aspectRatio="aspect-[16/10]"
            />
          </div>
        )}
      </div>

      {/* Two-Column Layout Split */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 pt-12">
        
        {/* Sticky Left Sidebar */}
        <aside className="w-full md:w-[220px] shrink-0 md:sticky md:top-28 h-fit space-y-8 z-30 pb-6 md:pb-0">
          {/* Project Context Box: flat, solid surface-inset */}
          <div className="bg-surface-inset border-0 rounded-2xl p-5 space-y-3.5 text-xs leading-relaxed">
            <div>
              <p className="text-mono font-mono text-xxs text-secondary font-medium uppercase tracking-wider">Role</p>
              <p className="font-semibold text-primary mt-0.5">{project.role}</p>
            </div>
            <div>
              <p className="text-mono font-mono text-xxs text-secondary font-medium uppercase tracking-wider">Timeline</p>
              <p className="font-semibold text-primary mt-0.5">{project.timeline}</p>
            </div>
            <div>
              <p className="text-mono font-mono text-xxs text-secondary font-medium uppercase tracking-wider">Teams Involved</p>
              <p className="font-semibold text-primary mt-0.5">{project.teams_involved}</p>
            </div>
          </div>

          {/* Table of Contents */}
          <ul className="space-y-2 text-xs">
            {sections.map((sec) => (
              <li key={sec.id}>
                <button
                  onClick={() => scrollTo(sec.id)}
                  className={`block w-full text-left font-mono transition-colors py-0.5 ${
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


        </aside>

        {/* Right Content Area */}
        <main className="flex-grow min-w-0 max-w-3xl">
          <Reveal width="100%">
            <div className="space-y-12">
              <header className="scroll-mt-28" id="overview">
                <h2 className="text-mono text-secondary font-medium tracking-wide flex items-center gap-4 mb-6">
                  Overview
                </h2>
                <p className="text-body font-semibold text-primary leading-relaxed">
                  {project.impact}
                </p>
              </header>

              <article className="space-y-12">
                {/* 1. The Problem */}
                <section id="problem" className="space-y-4 scroll-mt-24">
                  <div className="space-y-4">
                    <h2 className="text-mono text-secondary font-medium tracking-wide flex items-center gap-4">
                      The Problem
                    </h2>
                    <div>
                      {parseMarkdown(project.problem_hypothesis.problem, setActiveImage)}
                    </div>
                  </div>

                  {project.problem_image && (
                    <div className="pt-2">
                      <SafeImage
                        src={project.problem_image.image_url}
                        alt={project.problem_image.caption}
                        caption={project.problem_image.caption}
                        onClick={() => setActiveImage(project.problem_image!.image_url)}
                      />
                    </div>
                  )}
                </section>

                {/* 1.5 Hypothesis */}
                <section id="hypothesis" className="space-y-4 scroll-mt-24">
                  <h2 className="text-mono text-secondary font-medium tracking-wide">
                    Hypothesis
                  </h2>
                  <div>
                    {parseMarkdown(project.problem_hypothesis.hypothesis, setActiveImage)}
                  </div>
                </section>

                {/* 1.6 Constraints */}
                <section id="constraint" className="space-y-4 scroll-mt-24">
                  <h2 className="text-mono text-secondary font-medium tracking-wide">
                    Constraints
                  </h2>
                  <div className="text-secondary">
                    {parseMarkdown(project.constraint, setActiveImage)}
                  </div>
                </section>

                {/* 2. Design Iterations */}
                <section id="iteration" className="space-y-4 scroll-mt-24">
                  <div className="space-y-4">
                    <h2 className="text-mono text-secondary font-medium tracking-wide flex items-center gap-4">
                      Design Iterations
                    </h2>
                    <div>
                      {parseMarkdown(project.design_rationale, setActiveImage)}
                    </div>
                  </div>

                  {project.iterations && project.iterations.length > 0 && (
                    <div className="space-y-12 mt-12">
                      {project.iterations.map((iteration, index) => (
                        <div key={index} className="space-y-8">
                          <div className="space-y-2">
                            <p className="text-mono text-secondary font-medium tracking-wide">Iteration 0{index + 1}</p>
                            <h3 className="text-heading font-bold">{iteration.approach}</h3>
                            <div className="pt-2 space-y-4">
                              {parseMarkdown(iteration.why_it_failed, setActiveImage)}
                            </div>
                          </div>
                          {iteration.image_url && (
                            <div>
                              <SafeImage
                                src={iteration.image_url}
                                alt={iteration.approach}
                                caption={iteration.caption}
                                onClick={() => setActiveImage(iteration.image_url!)}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </section>

                {/* 3. The Solution */}
                <section id="solution" className="space-y-4 scroll-mt-24">
                  <div className="space-y-4">
                    <h2 className="text-mono text-secondary font-medium tracking-wide flex items-center gap-4">
                      The Solution
                    </h2>
                    <div>
                      {parseMarkdown(project.system_solution, setActiveImage)}
                    </div>
                  </div>

                  {/* Interactive E2E Flow Solution Carousel */}
                  {project.carousel_slides && project.carousel_slides.length > 0 && (
                    <SolutionCarousel slides={project.carousel_slides} onExpand={setActiveImage} />
                  )}

                  {/* Try Prototype CTA Button */}
                  {project.prototype_url && (
                    <div className="pt-2 pb-6">
                      <a 
                        href={project.prototype_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background font-medium text-xs hover:opacity-90 transition-opacity"
                      >
                        Or try the Prototype! <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                  
                  {/* Visual Highlights Grid (if any) */}
                  {project.visual_highlights && project.visual_highlights.length > 0 && (
                    <div className="space-y-12 mt-8">
                      {project.visual_highlights.map((highlight, index) => (
                        <div key={index}>
                          <SafeImage
                            src={highlight.image_url}
                            alt={highlight.caption}
                            caption={highlight.caption}
                            onClick={() => setActiveImage(highlight.image_url)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </section>

                {/* 4. Edge Cases Section */}
                <section id="edge-cases" className="space-y-4 scroll-mt-24">
                  <h2 className="text-mono text-secondary font-medium tracking-wide flex items-center gap-4">
                    Edge Cases
                  </h2>
                  <ul className="space-y-6">
                    {project.edge_cases_handled.map((edgeCase, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="text-brand font-mono text-small mt-1">[{index + 1}]</span>
                        <div className="space-y-2">
                          {parseMarkdown(edgeCase)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* 4.5 Outcomes Section */}
                <section id="outcomes" className="space-y-4 scroll-mt-24">
                  <h2 className="text-mono text-secondary font-medium tracking-wide flex items-center gap-4">
                    Outcomes
                  </h2>
                  <div>
                    {parseMarkdown(project.outcomes)}
                  </div>
                </section>

                {/* 5. Retrospective Section */}
                <section id="retrospective" className="space-y-4 scroll-mt-24">
                  <h2 className="text-mono text-secondary font-medium tracking-wide flex items-center gap-4">
                    Retrospective
                  </h2>
                  <div>
                    {parseMarkdown(project.retrospective)}
                  </div>
                </section>
              </article>



              {/* Footer Navigation */}
              <footer className="pt-12 border-t border-border flex justify-between items-center">
                <Link href="/" className="text-small font-mono text-secondary hover:text-brand transition-colors">
                  ← Back to index
                </Link>
                <span className="text-mono font-mono text-xs text-muted">Next Project: Coming Soon</span>
              </footer>
            </div>
          </Reveal>
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
