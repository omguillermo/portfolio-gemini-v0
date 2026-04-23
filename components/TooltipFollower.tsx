'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface TooltipFollowerProps {
  text: string;
  isVisible: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function TooltipFollower({ text, isVisible, containerRef }: TooltipFollowerProps) {
  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the movement
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 250 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 250 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    if (isVisible) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isVisible, containerRef, mouseX, mouseY]);

  return (
    <motion.div 
      style={{
        left: smoothX,
        top: smoothY,
        x: "-50%",
        y: "-150%", // Offset slightly above cursor
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isVisible ? 1 : 0, 
        opacity: isVisible ? 1 : 0 
      }}
      className="absolute pointer-events-none z-50 bg-foreground text-background px-3 py-2 rounded-[8px] shadow-2xl whitespace-nowrap border border-white/10"
    >
      <p className="text-mono font-mono text-[10px] uppercase tracking-wider font-bold">
        {text}
      </p>
    </motion.div>
  );
}
