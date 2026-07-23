'use client';

import React, { useState } from 'react';
import { Egg } from 'lucide-react';
import GachaModal from './GachaModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Expanded set of statements to build a rich, continuous stream of data
  const renderTickerContent = () => (
    <>
      <span className="text-primary font-medium">© 2026 Omar Guillermo</span>
      <span className="text-secondary/30">•</span>
      <span className="text-primary font-medium">Designed in Figma</span>
      <span className="text-secondary/30">•</span>
      <span className="text-primary font-medium">Built with Next.js & Gemini</span>
      <span className="text-secondary/30">•</span>
      <span className="text-primary font-medium">Fueled by lots of coffee ☕️</span>
      <span className="text-secondary/30">•</span>
      <span className="text-primary font-medium">All works owned by their respective clients & organizations</span>
      <span className="text-secondary/30">•</span>
      <span className="text-brand font-semibold">Go Beyond, Plus Ultra! 💥</span>
      <span className="text-secondary/30">•</span>
      <span className="text-primary font-medium">Still reading? Hi! 👋</span>
      <span className="text-secondary/30">•</span>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-1.5 text-secondary hover:text-brand transition-colors focus:outline-none cursor-pointer group shrink-0"
      >
        <Egg className="w-3 h-3 text-brand transition-transform group-hover:scale-110" />
        <span className="text-primary font-medium">Easter Egg</span>
      </button>
      <span className="text-secondary/30">•</span>
    </>
  );

  return (
    <>
      <footer className="w-full border-t border-border/30 py-4 bg-transparent mt-auto relative z-10 overflow-hidden">
        <div className="w-full text-mono font-mono text-xxs text-secondary">
          {/* Ticker Container - full-width, no edge fades */}
          <div className="w-full overflow-hidden cursor-default">
            <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
              {/* First Track */}
              <div className="flex items-center gap-6">
                {renderTickerContent()}
              </div>
              {/* Second Track for seamless connection */}
              <div className="flex items-center gap-6" aria-hidden="true">
                {renderTickerContent()}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <GachaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
