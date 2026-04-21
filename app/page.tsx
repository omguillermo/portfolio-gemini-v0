"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Lock, RotateCcw, Clover, Star, Trophy, ThumbsUp, X, Sparkles, Coins } from 'lucide-react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGachaClick = () => {
    if (isPulling) return;
    setIsPulling(true);
    setGachaResult(null); // Clear previous result to show "Pulling" state
    
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
    }, 1500);
  };

  const resetGacha = (e: React.MouseEvent) => {
    // Reset gacha state to allow new pulls
    e.stopPropagation();
    setGachaResult(null);
  };

  const getGachaIcon = (rarity?: GachaRarity) => {
    switch (rarity) {
      case 'UR': return <Trophy className="w-12 h-12 text-accent drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />;
      case 'SSR':
      case 'SR': return <Star className="w-12 h-12 text-brand drop-shadow-[0_0_10px_rgba(26,154,94,0.3)]" />;
      case 'R': return <ThumbsUp className="w-12 h-12 text-muted" />;
      default: return <Clover className="w-12 h-12 text-brand" />;
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

        {/* Footer & Gacha Easter Egg */}
        <footer className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-small text-muted">
            Designed in Figma, built with Next.js & Gemini.
          </p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-3 text-small text-muted hover:text-foreground transition-colors focus:outline-none group relative h-8 px-4 border border-border rounded-full hover:border-brand/50 transition-all"
            title="Feeling lucky?"
          >
            <Clover className="w-3 h-3 text-brand" />
            <span className="font-mono uppercase tracking-wider text-[10px]">Feeling lucky?</span>
          </button>
        </footer>

        {/* Gacha Modal Overlay */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-xl flex items-center justify-center p-6"
              onClick={() => !isPulling && setIsModalOpen(false)}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-surface border border-border rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 text-muted hover:text-foreground transition-colors"
                  disabled={isPulling}
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col items-center text-center space-y-8">
                  {/* Visual Result Placeholder */}
                  <div className="w-48 h-48 rounded-2xl bg-background border border-border/50 flex items-center justify-center relative group">
                    <AnimatePresence mode="wait">
                      {isPulling ? (
                        <motion.div 
                          key="pulling"
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="text-brand"
                        >
                          <Sparkles className="w-12 h-12" />
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="result"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", damping: 15 }}
                        >
                          {getGachaIcon(gachaResult?.rarity)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Result Text */}
                  <div className="space-y-2 h-16">
                    <AnimatePresence mode="wait">
                      {gachaResult ? (
                        <motion.div
                          key="result-text"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                        >
                          <p className={`text-mono font-mono text-[10px] uppercase tracking-[0.2em] mb-1 ${
                            gachaResult.rarity === 'UR' ? 'text-accent' : 'text-brand'
                          }`}>
                            {gachaResult.rarity} Rarity Acquired
                          </p>
                          <h2 className="text-heading font-bold tracking-tight">
                            {gachaResult.label}
                          </h2>
                        </motion.div>
                      ) : (
                        <p className="text-muted font-light italic">
                          {isPulling ? "Analyzing system nodes..." : "Test your luck in the design engine."}
                        </p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-4 w-full pt-4">
                    <button 
                      onClick={handleGachaClick}
                      disabled={isPulling || !!gachaResult}
                      className="flex flex-col items-center gap-1 bg-brand text-white py-4 rounded-2xl hover:bg-brand/90 transition-all shadow-lg shadow-brand/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="font-bold">1x Pull</span>
                      <span className="text-[10px] opacity-80 uppercase tracking-widest font-mono">
                        {gachaResult ? "$4.99" : "Free"}
                      </span>
                    </button>
                    
                    <div className="relative group">
                      <button 
                        disabled
                        className="flex flex-col items-center gap-1 bg-surface border border-border w-full py-4 rounded-2xl cursor-not-allowed opacity-60"
                      >
                        <span className="font-bold text-muted">10x Pull</span>
                        <div className="flex items-center gap-1 text-[10px] text-muted font-mono uppercase tracking-widest">
                          <Coins className="w-3 h-3" />
                          $49.99
                        </div>
                      </button>
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-mono">
                        JUST KIDDING!
                      </div>
                    </div>
                  </div>

                  {gachaResult && !isPulling && (
                    <button 
                      onClick={resetGacha}
                      className="text-muted hover:text-foreground text-[10px] font-mono uppercase tracking-widest flex items-center gap-2 transition-colors pt-4"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Clear Result
                    </button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  );
}
