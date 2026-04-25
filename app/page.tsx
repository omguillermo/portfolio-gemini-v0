"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Lock, RotateCcw, Clover, Star, Trophy, ThumbsUp, X, Sparkles, Coins, Egg, Wallet } from 'lucide-react';
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
  const [tokens, setTokens] = useState(50);
  const [shakeKey1x, setShakeKey1x] = useState(0);
  const [shakeKey10x, setShakeKey10x] = useState(0);

  const handleGachaClick = () => {
    if (isPulling) return;
    
    if (tokens < 50) {
      setShakeKey1x(Math.random()); // Force re-animation
      return;
    }

    setIsPulling(true);
    setTokens(prev => prev - 50);
    
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

  const handle10xClick = () => {
    if (isPulling) return;
    setShakeKey10x(Math.random()); // Force re-animation
  };

  const closeGacha = () => {
    if (isPulling) return;
    setIsModalOpen(false);
    setShakeKey1x(0);
    setShakeKey10x(0);
  };

  const resetGacha = (e: React.MouseEvent) => {
    e.stopPropagation();
    setGachaResult(null);
    setTokens(50);
  };

  const getGachaIcon = (rarity?: GachaRarity) => {
    switch (rarity) {
      case 'UR': return <Trophy className="w-16 h-16 text-accent drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />;
      case 'SSR':
      case 'SR': return <Star className="w-16 h-16 text-brand drop-shadow-[0_0_10px_rgba(26,154,94,0.3)]" />;
      case 'R': return <ThumbsUp className="w-16 h-16 text-muted" />;
      default: return <Clover className="w-16 h-16 text-brand" />;
    }
  };

  return (
    <div className="min-h-screen text-foreground font-sans antialiased selection:bg-selection-bg selection:text-selection-text">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_0%_0%,var(--brand),transparent_50%)] opacity-[0.03] pointer-events-none" />
      
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 md:px-12 md:pt-48 md:pb-32 relative z-10">
        <header className="mb-16 md:mb-24">
          <Reveal width="100%">
            <h1 className="text-hero font-bold mb-8 leading-tight">
              Senior Product Designer <br className="hidden md:block" />
              & Design System Builder.
            </h1>
            <p className="text-heading text-muted max-w-3xl leading-relaxed font-light tracking-wide">
              I bridge the gap between design and engineering to build useful B2B and eCommerce products. Focused on sweating the edge cases, scaling design systems, and adopting AI workflows early.
            </p>
          </Reveal>
        </header>

        <section className="mb-24">
          <Reveal width="100%" overflow="visible">
            <h2 className="text-mono font-mono text-muted uppercase tracking-widest mb-12 border-b border-border pb-4">
              01 / Highlighted Projects
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal width="100%" delay={0.1} overflow="visible">
              <Link href="/case-studies/stoki-ai" className="group block h-full">
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="bg-surface border border-border p-6 pb-8 rounded-2xl h-full flex flex-col gap-6 group-hover:shadow-xl group-hover:border-brand/20 shadow-none"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background flex items-center justify-center border border-border/50">
                    <img 
                      src="/projects/stockapp-ai/stockapp-cover-stoki-temp.png" 
                      alt="Stoki AI Assistant"
                      className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                    />
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

            <Reveal width="100%" delay={0.2} overflow="visible">
              <Link href="/case-studies/godaddy-shipping" className="group block h-full">
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="bg-surface border border-border p-6 pb-8 rounded-2xl h-full flex flex-col gap-6 group-hover:shadow-xl group-hover:border-brand/20 shadow-none"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background flex items-center justify-center border border-border/50">
                    <img 
                      src="/projects/godaddy-labels/godaddy-shippinglabels-cover-temp.png" 
                      alt="Buy Shipping Labels"
                      className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
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

            <Reveal width="100%" delay={0.3} overflow="visible">
              <Link href="/case-studies/questionpro-signup" className="group block h-full">
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="bg-surface border border-border p-6 pb-8 rounded-2xl h-full flex flex-col gap-6 group-hover:shadow-xl group-hover:border-brand/20 shadow-none"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background flex items-center justify-center border border-border/50">
                    <img 
                      src="/projects/questionpro-signup/qp-signup-cover-temp.png" 
                      alt="Sign Up Experience"
                      className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
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

        <AnimatePresence>
          {isModalOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-xl flex items-center justify-center p-6"
              onClick={closeGacha}
            >
              <motion.div 
                layout
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-surface border border-border rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl relative overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={closeGacha}
                  className="absolute top-6 right-6 text-muted hover:text-foreground transition-colors z-30"
                  disabled={isPulling}
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col space-y-8">
                  {/* Header */}
                  <div className="space-y-2 text-center pr-8">
                    <h2 className="text-heading font-bold tracking-tight text-foreground">Welcome to The Design Gacha</h2>
                    <p className="text-small text-muted leading-relaxed max-w-sm mx-auto">
                      Use your design tokens to roll the gacha and discover what kind of designer you are today.
                    </p>
                  </div>

                  {/* The Console Section */}
                  <div className="bg-background/40 border border-border/50 rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col items-center">
                    {/* Balance Indicator - True Square Corners */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 bg-surface px-3 py-1.5 rounded-[4px] border border-border/60 z-20">
                      <Coins className="w-3 h-3 text-brand" />
                      <span className="text-mono font-mono text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">
                        {tokens} Design Tokens
                      </span>
                    </div>

                    {/* Illustration Area */}
                    <div className="w-full flex flex-col items-center justify-center pt-10 pb-4">
                      <AnimatePresence mode="wait">
                        {isPulling ? (
                          <motion.div 
                            key="pulling"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="text-brand h-24 flex items-center"
                          >
                            <Sparkles className="w-12 h-12" />
                          </motion.div>
                        ) : (
                          <motion.div 
                            key="result"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", damping: 15 }}
                            className="h-24 flex items-center"
                          >
                            {getGachaIcon(gachaResult?.rarity)}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <AnimatePresence mode="wait">
                        {gachaResult && !isPulling && (
                          <motion.div
                            key="result-text"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-center mt-4"
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
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Buttons Section - NO CSS TRANSITIONS */}
                    <div className="grid grid-cols-2 gap-4 w-full mt-4">
                      <motion.button 
                        onClick={handleGachaClick}
                        key={`shake1x-${shakeKey1x}`}
                        animate={shakeKey1x > 0 ? { 
                          x: [-10, 10, -10, 10, -5, 5, 0],
                          rotate: [-1, 1, -1, 1, 0]

                        } : { x: 0, rotate: 0 }}
                        transition={{ duration: 0.4, ease: "linear" }}
                        disabled={isPulling}
                        className={`flex flex-col items-center gap-1 w-full py-3 rounded-xl ${
                          tokens < 50
                          ? 'bg-surface border border-border text-muted' 
                          : 'bg-brand text-white'
                        }`}
                      >
                        <span className="font-bold text-small">1x Pull</span>
                        <div className="flex items-center gap-1.5">
                          <Coins className="w-2.5 h-2.5" />
                          <span className="text-[11px] uppercase tracking-widest font-mono font-bold">50</span>
                        </div>
                      </motion.button>
                      
                      <motion.button 
                        onClick={handle10xClick}
                        key={`shake10x-${shakeKey10x}`}
                        animate={shakeKey10x > 0 ? { 
                          x: [-10, 10, -10, 10, -5, 5, 0],
                          rotate: [-1, 1, -1, 1, 0]

                        } : { x: 0, rotate: 0 }}
                        transition={{ duration: 0.4, ease: "linear" }}
                        disabled={isPulling}
                        className="flex flex-col items-center gap-1 bg-surface border border-border w-full py-3 rounded-xl"
                      >
                        <span className="font-bold text-muted text-small">10x Pull</span>
                        <div className="flex items-center gap-1.5 text-muted">
                          <Coins className="w-2.5 h-2.5" />
                          <span className="text-[11px] uppercase tracking-widest font-mono font-bold">500</span>
                        </div>
                      </motion.button>
                    </div>
                  </div>

                  {/* Footer Disclaimer */}
                  <div className="text-center pt-2">
                    <p className="text-[10px] text-muted font-mono uppercase tracking-tighter leading-relaxed">
                      No actual micro-transactions in this portfolio. <br />
                      <button 
                        onClick={resetGacha}
                        className="mt-2 text-brand hover:text-brand/80 transition-colors inline-flex items-center gap-1 underline underline-offset-4 decoration-brand/30"
                      >
                        [ <RotateCcw className="w-2.5 h-2.5" /> Reset Gacha ]
                      </button>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  );
}
