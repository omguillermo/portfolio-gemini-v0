"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw, Clover, Star, Trophy, ThumbsUp, Sparkles, Coins } from 'lucide-react';

export type GachaRarity = 'R' | 'SR' | 'SSR' | 'UR';

export interface GachaItem {
  label: string;
  rarity: GachaRarity;
}

interface GachaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GachaModal: React.FC<GachaModalProps> = ({ isOpen, onClose }) => {
  const [gachaResult, setGachaResult] = useState<GachaItem | null>(null);
  const [isPulling, setIsPulling] = useState(false);
  const [tokens, setTokens] = useState(50);
  const [shakeKey1x, setShakeKey1x] = useState(0);
  const [shakeKey10x, setShakeKey10x] = useState(0);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
    onClose();
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
      case 'UR': return <Trophy className="w-16 h-16 text-accent" />;
      case 'SSR':
      case 'SR': return <Star className="w-16 h-16 text-brand" />;
      case 'R': return <ThumbsUp className="w-16 h-16 text-muted" />;
      default: return <Clover className="w-16 h-16 text-brand" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-background/80 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={closeGacha}
        >
          <motion.div 
            layout
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-surface border-4 border-foreground p-8 md:p-12 max-w-lg w-full shadow-[8px_8px_0px_var(--color-foreground)] relative overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeGacha}
              className="absolute top-6 right-6 text-muted hover:text-foreground transition-colors z-30 bg-background border-2 border-foreground p-1 shadow-[2px_2px_0px_var(--color-foreground)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_var(--color-foreground)]"
              disabled={isPulling}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col space-y-8">
              {/* Header */}
              <div className="space-y-2 text-center pr-8 relative z-10">
                <h2 className="text-heading font-black tracking-tight text-foreground uppercase italic">Welcome to The Design Gacha</h2>
                <p className="text-small text-muted leading-relaxed max-w-sm mx-auto font-medium">
                  Use your design tokens to roll the gacha and discover what kind of designer you are today.
                </p>
              </div>

              {/* The Console Section */}
              <div className="bg-background border-4 border-foreground p-6 md:p-8 relative overflow-hidden flex flex-col items-center group">
                {/* Game-like Scanline / Grid overlay */}
                <motion.div 
                  className="absolute inset-0 opacity-[0.04] pointer-events-none transition-opacity group-hover:opacity-[0.06]" 
                  style={{ 
                    backgroundImage: 'linear-gradient(0deg, transparent 50%, var(--foreground) 50%)',
                    backgroundSize: '100% 4px'
                  }} 
                  animate={{ backgroundPosition: ["0px 0px", "0px -40px"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />

                {/* Slanted Token Balance Indicator */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-surface px-4 py-1.5 border-4 border-foreground -skew-x-12 shadow-[4px_4px_0_var(--color-foreground)] transition-transform hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 skew-x-12">
                    <Coins className="w-3.5 h-3.5 text-brand" />
                    <span className="text-mono font-mono text-[11px] uppercase tracking-widest font-black whitespace-nowrap text-foreground">
                      {tokens} Tokens
                    </span>
                  </div>
                </div>

                {/* Illustration Area */}
                <div className="w-full flex flex-col items-center justify-center pt-10 pb-4 relative z-10">
                  <AnimatePresence mode="wait">
                    {isPulling ? (
                      <motion.div 
                        key="pulling"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="text-brand h-24 flex items-center relative"
                      >
                        <Sparkles className="w-12 h-12" />
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="result"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", damping: 15 }}
                        className="h-24 flex items-center relative"
                      >
                        {getGachaIcon(gachaResult?.rarity)}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    {gachaResult && !isPulling && (
                      <motion.div
                        key="result-text"
                        style={{ transform: "skewX(-12deg)" }}
                        initial={{ y: 10, opacity: 0, skewX: -12 }}
                        animate={{ y: 0, opacity: 1, skewX: -12 }}
                        className="text-center mt-4 bg-surface px-6 py-3 border-4 border-foreground shadow-[4px_4px_0_var(--color-foreground)]"
                      >
                        <div className="skew-x-12">
                          <p className={`text-mono font-mono text-[10px] uppercase tracking-[0.2em] mb-1 font-black ${
                            gachaResult.rarity === 'UR' ? 'text-accent' : 'text-brand'
                          }`}>
                            {gachaResult.rarity} Rarity Acquired
                          </p>
                          <h2 className="text-heading font-black tracking-tight uppercase italic">
                            {gachaResult.label}
                          </h2>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Slanted Game-like Buttons Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-6 z-10 px-2">
                  <div className="relative w-full">
                    <motion.button 
                      onClick={handleGachaClick}
                      key={`shake1x-${shakeKey1x}`}
                      style={{ transform: "skewX(-12deg)" }}
                      animate={shakeKey1x > 0 ? { 
                        x: [-5, 5, -5, 5, -2, 2, 0],
                        rotate: [-1, 1, -1, 1, 0],
                        skewX: -12
                      } : { x: 0, rotate: 0, skewX: -12 }}
                      transition={{ duration: 0.3, ease: "linear" }}
                      disabled={isPulling}
                      className={`w-full relative transition-all duration-100 ease-in-out active:translate-y-[4px] active:shadow-none py-3 px-2 border-4 outline-none focus-visible:ring-2 focus-visible:ring-brand/50 ${
                        tokens < 50
                        ? 'bg-surface border-border text-muted shadow-[4px_4px_0_var(--color-border)]' 
                        : 'bg-brand border-foreground text-white shadow-[4px_4px_0_var(--color-foreground)] hover:brightness-110'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1" style={{ transform: "skewX(12deg)" }}>
                        <span className="font-black text-small uppercase tracking-wide">1x Pull</span>
                        <div className="flex items-center gap-1.5 bg-black/20 px-2 py-0.5 rounded text-white/90">
                          <Coins className="w-2.5 h-2.5" />
                          <span className="text-[11px] uppercase tracking-widest font-mono font-bold">50</span>
                        </div>
                      </div>
                    </motion.button>
                  </div>
                  
                  <div className="relative w-full">
                    <motion.button 
                      onClick={handle10xClick}
                      key={`shake10x-${shakeKey10x}`}
                      style={{ transform: "skewX(-12deg)" }}
                      animate={shakeKey10x > 0 ? { 
                        x: [-5, 5, -5, 5, -2, 2, 0],
                        rotate: [-1, 1, -1, 1, 0],
                        skewX: -12
                      } : { x: 0, rotate: 0, skewX: -12 }}
                      transition={{ duration: 0.3, ease: "linear" }}
                      disabled={isPulling}
                      className="w-full relative transition-all duration-100 ease-in-out active:translate-y-[4px] active:shadow-none py-3 px-2 border-4 outline-none bg-surface border-foreground text-foreground shadow-[4px_4px_0_var(--color-foreground)] hover:bg-surface/80"
                    >
                      <div className="flex flex-col items-center gap-1" style={{ transform: "skewX(12deg)" }}>
                        <span className="font-black text-muted text-small uppercase tracking-wide">10x Pull</span>
                        <div className="flex items-center gap-1.5 bg-foreground/10 px-2 py-0.5 rounded text-muted">
                          <Coins className="w-2.5 h-2.5" />
                          <span className="text-[11px] uppercase tracking-widest font-mono font-bold">500</span>
                        </div>
                      </div>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Footer Disclaimer */}
              <div className="text-center pt-2 relative z-10">
                <p className="text-[10px] text-muted font-mono uppercase tracking-tighter leading-relaxed font-bold">
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
  );
};

export default GachaModal;
