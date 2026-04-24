'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const brands = [
  { id: 'forest', color: '#1A9A5E', label: 'Forest Green' },
  { id: 'crimson', color: '#D92626', label: 'Crimson Red' },
  { id: 'blue', color: '#2667D9', label: 'Electric Blue' },
] as const;

type BrandId = typeof brands[number]['id'];

export default function BrandSwitcher() {
  const [activeBrand, setActiveBrand] = useState<BrandId>('forest');

  // We use useEffect for the initial setup to avoid hydration mismatch
  useEffect(() => {
    const savedBrand = localStorage.getItem('brand-theme') as BrandId | null;
    if (savedBrand && brands.some(b => b.id === savedBrand)) {
      setActiveBrand(savedBrand);
      document.documentElement.setAttribute('data-brand', savedBrand);
    } else {
      document.documentElement.setAttribute('data-brand', 'forest');
    }
  }, []);

  const changeBrand = (id: BrandId) => {
    setActiveBrand(id);
    localStorage.setItem('brand-theme', id);
    document.documentElement.setAttribute('data-brand', id);
  };

  return (
    <div className="flex items-center gap-3 px-3 py-2 bg-surface/50 backdrop-blur-md border border-border rounded-full pointer-events-auto">
      <div className="flex items-center gap-2">
        {brands.map((brand) => (
          <button
            key={brand.id}
            onClick={() => changeBrand(brand.id)}
            className="relative w-4 h-4 flex items-center justify-center focus:outline-none group"
            title={brand.label}
            aria-label={`Switch to ${brand.label}`}
          >
            <div 
              className="w-3 h-3 rounded-full transition-transform group-hover:scale-125 border border-black/5" 
              style={{ backgroundColor: brand.color }}
            />
            {activeBrand === brand.id && (
              <motion.div
                layoutId="active-brand"
                className="absolute inset-0 border border-brand rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
