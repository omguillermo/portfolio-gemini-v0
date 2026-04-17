"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Lock, RotateCcw, Clover, Star, Trophy, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

type GachaRarity = 'R' | 'SR' | 'SSR' | 'UR';

interface GachaItem {
  label: string;
  rarity: GachaRarity;
}

export default function Portfolio() {
  const [gachaResult, setGachaResult] = useState<GachaItem | null>(null);
  const [isPulling, setIsPulling] = useState(false);

  const handleGachaClick = () => {
    if (isPulling || gachaResult) return;
    setIsPulling(true);
    
    const results: GachaItem[] = [
      { label: "R: RECTANGLE ENTHUSIAST", rarity: 'R' },
      { label: "SR: PIXEL PERFECT", rarity: 'SR' },
      { label: "SR: GRID WARRIOR", rarity: 'SR' },
      { label: "SSR: SYSTEM ARCHITECT", rarity: 'SSR' },
      { label: "SSR: AUTO-LAYOUT MASTER", rarity: 'SSR' },
      { label: "UR: LEGENDARY SYSTEMS DESIGNER", rarity: 'UR' }
    ];

    setTimeout(() => {
      const randomResult = results[Math.floor(Math.random() * results.length)];
      setGachaResult(randomResult);
      setIsPulling(false);
    }, 1000);
  };

  const resetGacha = (e: React.MouseEvent) => {
    e.stopPropagation();
    setGachaResult(null);
  };

  const getGachaIcon = () => {
    if (isPulling) return null;
    if (!gachaResult) return <Clover className="w-3 h-3 text-brand" />;
    
    switch (gachaResult.rarity) {
      case 'UR': return <Trophy className="w-3 h-3 text-accent" />;
      case 'SSR':
      case 'SR': return <Star className="w-3 h-3 text-brand" />;
      case 'R': return <ThumbsUp className="w-3 h-3 text-muted" />;
      default: return <Clover className="w-3 h-3" />;
    }
  };

  return (
    <div className="min-h-screen text-foreground font-sans antialiased selection:bg-selection-bg selection:text-selection-text">
      {/* Optional: Subtle Brand Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_0%_0%,var(--brand),transparent_50%)] opacity-[0.03] pointer-events-none" />
      
      <main className="max-w-6xl mx-auto px-6 pt-40 pb-24 md:px-12 md:pt-48 md:pb-32 relative z-10">
        {/* Hero Section */}
        <header className="mb-32">
          <Reveal width="100%">
            <h1 className="text-hero font-bold tracking-tighter mb-8 leading-tight">
              Senior Product Designer <br className="hidden md:block" />
              & Design System Builder.
            </h1>
            <p className="text-heading text-muted max-w-3xl leading-relaxed font-light tracking-wide">
              Translating complex B2B and eCommerce workflows into scalable, rock-solid interfaces. 
              Focused on component-level problem solving, edge-cases, and AI-powered workflows. 
              Always seeking the useful among the new.
            </p>
          </Reveal>
        </header>


        {/* Feature-Based Case Studies */}
        <section className="mb-32">
          <Reveal width="100%">
            <h2 className="text-mono font-mono text-muted uppercase tracking-widest mb-12 border-b border-border pb-4">
              01 / Highlighted Projects
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Project Card 1 */}
            <Reveal width="100%" delay={0.1} overflow="visible">
              <Link href="/case-studies/stoki-ai" className="group block h-full">
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="bg-surface border border-border p-4 pb-8 rounded-2xl h-full flex flex-col gap-6 group-hover:shadow-xl group-hover:border-brand/20 transition-all shadow-none"
                  style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background flex items-center justify-center border border-border/50">
                    <img 
                      src="/projects/stockapp-ai/stockapp-cover-stoki-temp.png" 
                      alt="Stoki AI Assistant"
                      className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                      style={{ 
                        imageRendering: '-webkit-optimize-contrast',
                        backfaceVisibility: 'hidden'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop";
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md p-2 rounded-full border border-border/50 text-brand">
                      <Lock className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="px-2 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex justify-between items-end">
                        <h3 className="text-heading font-bold tracking-tight">Stoki AI Assistant</h3>
                        <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-brand transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                      <p className="text-body text-muted leading-relaxed line-clamp-2">
                        Redesigning an intrusive AI assistant into a non-blocking, persistent workflow tool.
                      </p>
                    </div>
                    <div className="flex gap-4 pt-4 border-t border-border/50">
                      <span className="text-mono font-mono text-brand uppercase tracking-widest">$871K facilitated</span>
                      <span className="text-mono font-mono text-muted uppercase tracking-widest">Founding Designer</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </Reveal>

            {/* Project Card 2 */}
            <Reveal width="100%" delay={0.2} overflow="visible">
              <Link href="/case-studies/godaddy-shipping" className="group block h-full">
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="bg-surface border border-border p-4 pb-8 rounded-2xl h-full flex flex-col gap-6 group-hover:shadow-xl group-hover:border-brand/20 transition-all shadow-none"
                  style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background flex items-center justify-center border border-border/50">
                    <img 
                      src="/projects/godaddy-labels/godaddy-shippinglabels-cover-temp.png" 
                      alt="Buy Shipping Labels"
                      className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                      style={{ 
                        imageRendering: '-webkit-optimize-contrast',
                        backfaceVisibility: 'hidden'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop";
                      }}
                    />
                  </div>
                  <div className="px-2 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex justify-between items-end">
                        <h3 className="text-heading font-bold tracking-tight">Buy Shipping Labels</h3>
                        <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-brand transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                      <p className="text-body text-muted leading-relaxed line-clamp-2">
                        Streamlining label generation within the existing GoDaddy merchant dashboard.
                      </p>
                    </div>
                    <div className="flex gap-4 pt-4 border-t border-border/50">
                      <span className="text-mono font-mono text-brand uppercase tracking-widest">7.5K Labels</span>
                      <span className="text-mono font-mono text-muted uppercase tracking-widest">Senior Designer</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </Reveal>

            {/* Project Card 3 */}
            <Reveal width="100%" delay={0.3} overflow="visible">
              <Link href="/case-studies/questionpro-signup" className="group block h-full">
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="bg-surface border border-border p-4 pb-8 rounded-2xl h-full flex flex-col gap-6 group-hover:shadow-xl group-hover:border-brand/20 transition-all shadow-none"
                  style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background flex items-center justify-center border border-border/50">
                    <img 
                      src="/projects/questionpro-signup/qp-signup-cover-temp.png" 
                      alt="Sign Up Experience"
                      className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                      style={{ 
                        imageRendering: '-webkit-optimize-contrast',
                        backfaceVisibility: 'hidden'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=2070&auto=format&fit=crop";
                      }}
                    />
                  </div>
                  <div className="px-2 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex justify-between items-end">
                        <h3 className="text-heading font-bold tracking-tight">Sign Up Experience</h3>
                        <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-brand transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                      <p className="text-body text-muted leading-relaxed line-clamp-2">
                        Redesigning the registration flow to increase clarity and guide users to the correct product.
                      </p>
                    </div>
                    <div className="flex gap-4 pt-4 border-t border-border/50">
                      <span className="text-mono font-mono text-brand uppercase tracking-widest">0.31% Bounce</span>
                      <span className="text-mono font-mono text-muted uppercase tracking-widest">Senior Designer</span>
                    </div>
                  </div>
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

          <Reveal width="100%" delay={0.1}>
            <div>
              <h2 className="text-mono font-mono text-muted uppercase tracking-widest mb-8">
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
                  <a href="mailto:hello@example.com" className="flex items-center gap-2 text-body text-foreground/80 hover:text-foreground transition-colors w-fit group">
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

        {/* Footer & Gacha Easter Egg */}
        <footer className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-small text-muted">
            Designed in Figma, built with Next.js & Gemini.
          </p>
          
          {/* Gacha Easter Egg */}
          <div className="flex items-center gap-3">
            <button 
              onClick={handleGachaClick}
              disabled={isPulling || !!gachaResult}
              className={`flex items-center gap-3 text-small text-muted hover:text-foreground transition-colors focus:outline-none group relative h-8 px-4 border border-border rounded-full transition-all ${!gachaResult && !isPulling ? 'hover:border-brand/50' : 'cursor-default'}`}
              title={gachaResult ? "Current Title" : "Feeling lucky?"}
            >
              <div className="relative">
                <AnimatePresence mode="wait">
                  {isPulling ? (
                    <motion.div 
                      key="pulling"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: [1.5, 1], opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-brand/40 rounded-full blur-md"
                    />
                  ) : null}
                </AnimatePresence>
                <motion.div 
                  animate={isPulling ? { rotate: 360, scale: [1, 1.2, 1] } : {}}
                  transition={{ repeat: isPulling ? Infinity : 0, duration: 0.5 }}
                  className={`flex items-center justify-center ${isPulling ? 'w-2 h-2 rounded-full border border-brand bg-brand' : ''}`}
                >
                  {!isPulling && getGachaIcon()}
                </motion.div>
              </div>
              <div className="flex flex-col items-start overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={isPulling ? "pulling" : (gachaResult?.label || "lucky")}
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    exit={{ y: -20 }}
                    className="font-mono uppercase tracking-wider text-[10px]"
                  >
                    {isPulling ? "PULLING..." : (gachaResult?.label || "Feeling lucky?")}
                  </motion.span>
                </AnimatePresence>
              </div>
            </button>
            
            {gachaResult && !isPulling && (
              <button 
                onClick={resetGacha}
                className="p-2 text-muted hover:text-brand transition-colors rounded-full hover:bg-surface"
                title="Pull Again"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            )}
          </div>
        </footer>

      </main>
    </div>
  );
}
