'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from 'framer-motion';

interface ProjectCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
}

/**
 * A "Spotlight Border" card.
 * Focuses on a thick, high-intensity border that follows the cursor 
 * without distracting scanner lines or fuzzy shadows.
 */
export default function ProjectCard({
  children,
  className = '',
  ...props
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the spotlight border position
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Control visibility and intensity
  const opacity = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
    opacity.set(1);
  };

  const handleMouseLeave = () => {
    opacity.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // Fixed corner radius harmony: use a slightly larger radius for the container
      className={`relative rounded-xl bg-surface border border-border group transition-all duration-300 ${className}`}
      {...props}
    >
      {/* 
        The Intensity Border 
        Using negative inset and explicit radius to ensure it overlaps 
        the parent border perfectly without "corner-leak."
      */}
      <motion.div
        className="absolute inset-[-1px] z-30 pointer-events-none rounded-[inherit]"
        style={{
          border: '2px solid var(--brand)',
          maskImage: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(200px circle at ${x}px ${y}px, black, transparent 80%)`
          ),
          WebkitMaskImage: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(200px circle at ${x}px ${y}px, black, transparent 80%)`
          ),
          opacity: useTransform(opacity, [0, 1], [0, 1]),
        }}
      />

      {/* Base Border hover effect (constant 1px) */}
      <div className="absolute inset-[-1px] z-25 pointer-events-none rounded-[inherit] border border-transparent group-hover:border-brand/10 transition-colors duration-500" />

      {/* Content Container */}
      <div className="relative z-20 h-full">
        {children}
      </div>
    </motion.div>
  );
}
