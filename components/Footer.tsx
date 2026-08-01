'use client';

import React, { useState } from 'react';
import { Egg, Rabbit } from 'lucide-react';
import GachaModal from './GachaModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Expanded set of statements to build a rich, continuous stream of data
  const renderTickerContent = (isDuplicate = false) => (
    <>
      <span className="text-primary font-medium">© 2026 Omar Guillermo</span>
      <span className="text-secondary/30">•</span>
      <span className="text-primary font-medium">Built with Next.js & Gemini</span>
      <span className="text-secondary/30">•</span>
      <span className="text-primary font-medium">Fueled by lots of coffee ☕️</span>
      <span className="text-secondary/30">•</span>
      <span className="text-primary font-medium">All works owned by their respective clients & organizations</span>
      <span className="text-secondary/30">•</span>
      <span className="text-primary font-semibold">Go Beyond, Plus Ultra! 💪</span>
      <span className="text-secondary/30">•</span>
      <span className="text-primary font-medium">Hello! 👋</span>
      <span className="text-secondary/30">•</span>
      <button
        onClick={() => setIsModalOpen(true)}
        tabIndex={isDuplicate ? -1 : 0}
        aria-hidden={isDuplicate ? true : undefined}
        className="flex items-center gap-1.5 text-secondary hover:text-brand transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md cursor-pointer group shrink-0"
      >
        <Rabbit className="w-3.5 h-3.5 text-brand transition-transform group-hover:scale-110" />
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
                {renderTickerContent(false)}
              </div>
              {/* Second Track for seamless connection */}
              <div className="flex items-center gap-6" aria-hidden="true">
                {renderTickerContent(true)}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <GachaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
