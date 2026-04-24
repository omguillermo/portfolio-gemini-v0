'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/components/Reveal';
import TooltipFollower from '@/components/TooltipFollower';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouch = (e: React.MouseEvent | React.TouchEvent) => {
    // If it's a touch event or we're on mobile, just toggle
    if (window.matchMedia('(max-width: 1024px)').matches) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <div className="min-h-screen text-foreground font-sans antialiased pb-32 selection:bg-selection-bg selection:text-selection-text">
      <main className="max-w-4xl mx-auto px-6 pt-40 pb-24 md:px-12 md:pt-48 md:pb-32 relative z-10">
        
        <Reveal width="100%">
          <h1 className="text-display font-bold tracking-tighter mb-8 leading-tight">
            Wanna learn more about me? <br />
            I feel honored.
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 mt-12">
          <Reveal width="100%">
            <div className="space-y-8">
              {/* Photo Easter Egg Container */}
              <div 
                ref={containerRef}
                className="relative aspect-square bg-surface border border-border rounded-2xl shadow-sm overflow-hidden group cursor-none"
                onMouseEnter={() => !window.matchMedia('(max-width: 1024px)').matches && setIsHovered(true)}
                onMouseLeave={() => !window.matchMedia('(max-width: 1024px)').matches && setIsHovered(false)}
                onClick={handleTouch}
              >
                {/* Professional Photo */}
                <motion.img 
                  src="/about/oguillermo-edit-about.jpg" 
                  alt="Omar Guillermo - Professional"
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                  animate={{ 
                    opacity: isHovered ? 0 : 1,
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Metalhead Easter Egg Photo with Periodic Headbang Shake */}
                <motion.img 
                  src="/about/oguillermo-metalhead.png" 
                  alt="Omar Guillermo - Nightwish Concert"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: isHovered ? 1 : 0,
                    // 0.5s rhythm: quick jitter, brief pause
                    x: isHovered ? [0, -1.5, 1.5, -1.5, 0, 0] : 0,
                    y: isHovered ? [0, 1.5, -1.5, 1.5, 0, 0] : 0,
                  }}
                  transition={{ 
                    opacity: { duration: 0.4 },
                    x: { 
                      repeat: Infinity, 
                      duration: 0.5, 
                      times: [0, 0.1, 0.2, 0.3, 0.4, 1] 
                    },
                    y: { 
                      repeat: Infinity, 
                      duration: 0.5, 
                      times: [0, 0.1, 0.2, 0.3, 0.4, 1] 
                    }
                  }}
                />

                {/* Extracted Design System Component */}
                <TooltipFollower 
                  text="🤘 @ 2022 Nightwish Concert"
                  isVisible={isHovered}
                  containerRef={containerRef}
                />
              </div>

              <div className="space-y-2">
                <p className="text-mono font-mono text-muted uppercase tracking-widest text-[10px]">Location</p>
                <p className="text-body font-medium">Mérida, México 🇲🇽</p>
              </div>
              <div className="space-y-2">
                <p className="text-mono font-mono text-muted uppercase tracking-widest text-[10px]">Favorite Fuel</p>
                <p className="text-body font-medium">Chilaquiles & Coffee ☕️</p>
              </div>
            </div>
          </Reveal>

          <Reveal width="100%" delay={0.1}>
            <div className="space-y-12">
              <section className="space-y-6 text-body text-muted leading-relaxed font-light">
                <p>
                  Hello! I&apos;m Omar Guillermo, a Senior Product Designer with over 14 years of experience.
                </p>
                <p>
                  I started my career with a strong foundation in traditional graphic design and advertising before discovering my true passion: UI/UX and product design. 
                </p>
                <p>
                  Over the years, I&apos;ve worked across very different environments. From local creative studios, to in-house corporate design teams, then navigating the complexities of large scale enterprise platforms at global companies, and more recently at early-stage startups.
                </p>
                <p>
                  My professional philosophy is &quot;Always Be Learning.&quot; I enjoy sweating the edge cases, working closely with developers, and playing around with new tech (like AI workflows) to improve my design process.
                </p>
                <p>
                  And while I love the technical side of product design, my graphic design roots always keep me honest, ensuring I never lose sight of color harmony and pixel-perfect precision.
                </p>
                <p>
                  Outside of work, I&apos;m based in sunny Mérida, México. You can usually find me drinking coffee, listening to heavy metal, or watching anime (Go Beyond, Plus Ultra!).
                </p>
                <p className="pt-4 font-medium text-foreground">
                  Feel free to reach out at any time, even just for a quick chat. Looking forward to meeting you!
                </p>
              </section>

              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-border">
                <div className="space-y-4">
                  <h3 className="text-mono font-mono text-muted uppercase tracking-widest text-[10px]">Capabilities</h3>
                  <ul className="space-y-2 text-body">
                    <li>Systems Design</li>
                    <li>UI/UX Architecture</li>
                    <li>AI Workflows</li>
                    <li>Frontend Strategy</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-mono font-mono text-muted uppercase tracking-widest text-[10px]">Stack</h3>
                  <ul className="space-y-2 text-body">
                    <li>Next.js / React</li>
                    <li>TailwindCSS</li>
                    <li>Framer Motion</li>
                    <li>Design Tokens</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </main>
    </div>
  );
}
