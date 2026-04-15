'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement with springs
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        backgroundColor: 'white', // Inverts whatever is underneath
      }}
      animate={{
        scale: isHovered ? 2.5 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.8 }}
    />
  );
}
