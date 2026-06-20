'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const brands = [
  { id: 'forest', color: '#1A9A5E', label: 'Forest Green' },
  { id: 'crimson', color: '#D92626', label: 'Crimson Red' },
  { id: 'blue', color: '#2667D9', label: 'Electric Blue' },
  { id: 'purple', color: '#8A26D9', label: 'Royal Purple' },
] as const;

type BrandId = typeof brands[number]['id'];

export default function BrandSwitcher() {
  const [activeBrand, setActiveBrand] = useState<BrandId>(() => {
    if (typeof window !== 'undefined') {
      const savedBrand = localStorage.getItem('brand-theme') as BrandId | null;
      if (savedBrand && brands.some(b => b.id === savedBrand)) {
        return savedBrand;
      }
    }
    return 'forest';
  });
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedBrand = localStorage.getItem('brand-theme') as BrandId | null;
    if (savedBrand && brands.some(b => b.id === savedBrand)) {
      document.documentElement.setAttribute('data-brand', savedBrand);
    } else {
      document.documentElement.setAttribute('data-brand', 'forest');
    }
    
    // Defer mount registration to avoid React 19 synchronous cascading render warnings
    setTimeout(() => {
      setMounted(true);
    }, 0);

    // Close on click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeBrand = (id: BrandId) => {
    setActiveBrand(id);
    localStorage.setItem('brand-theme', id);
    document.documentElement.setAttribute('data-brand', id);
    setIsOpen(false);
  };

  if (!mounted) return null;

  const currentBrand = brands.find(b => b.id === activeBrand) || brands[0];

  return (
    <div className="relative" ref={containerRef}>
      {/* Trigger: The Single Active Swatch */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface border border-transparent hover:border-border transition-all focus:outline-none group relative"
        aria-label="Change brand environment"
      >
        <div 
          className="w-3.5 h-3.5 rounded-full shadow-sm transition-transform group-hover:scale-110" 
          style={{ backgroundColor: currentBrand.color }}
        />
      </button>

      {/* Popover Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute right-0 top-full mt-2 p-2 bg-surface border border-border shadow-2xl rounded-xl z-[100] min-w-[140px]"
          >
            <p className="text-[9px] font-mono uppercase tracking-widest text-muted px-2 py-1 mb-1">Environment</p>
            <div className="space-y-1">
              {brands.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => changeBrand(brand.id)}
                  className={`w-full flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-foreground/5 transition-colors text-left group ${
                    activeBrand === brand.id ? 'bg-foreground/[0.03]' : ''
                  }`}
                >
                  <div 
                    className="w-3 h-3 rounded-full shrink-0" 
                    style={{ backgroundColor: brand.color }}
                  />
                  <span className={`text-[10px] font-mono uppercase tracking-widest ${
                    activeBrand === brand.id ? 'text-foreground font-bold' : 'text-muted'
                  }`}>
                    {brand.id}
                  </span>
                  {activeBrand === brand.id && (
                    <div className="ml-auto w-1 h-1 rounded-full bg-brand" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
