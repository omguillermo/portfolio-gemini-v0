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
      case 'UR': return <Trophy className="w-16 h-16 text-accent drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />;
      case 'SSR':
      case 'SR': return <Star className="w-16 h-16 text-brand drop-shadow-[0_0_10px_rgba(26,154,94,0.3)]" />;
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
  );
};

export default GachaModal;
