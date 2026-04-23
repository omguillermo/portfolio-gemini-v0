'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/', label: 'Work' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8 md:px-12 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo / Monogram Lockup */}
          <Link 
            href="/" 
            className="flex items-center gap-3 pointer-events-auto group"
          >
            <div className="w-8 h-8 text-foreground group-hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path 
                  d="M120 220C180 220 220 180 220 120C220 116.601 219.872 113.267 219.619 110H120L174.885 164.885C166.615 194.962 148.321 210 120 210C80 210 60 180 60 120C60 60 80 30 120 30C155.277 30 174.998 53.3333 179.163 100H218.423C210.472 51.276 173.055 20 120 20C60 20 20 60 20 120C20 180 60 220 120 220Z" 
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-body font-bold tracking-tighter hover:text-brand transition-colors">
              Omar Guillermo
            </span>
          </Link>

          {/* Desktop Links & Switcher */}
          <div className="hidden md:flex items-center gap-8 pointer-events-auto">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`text-small font-mono uppercase tracking-widest hover:text-brand transition-colors ${
                  pathname === link.href ? 'text-foreground' : 'text-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 -mr-2 text-foreground pointer-events-auto focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[90] bg-background/95 backdrop-blur-xl md:hidden pt-32 px-6"
          >
            <div className="flex flex-col gap-8 items-center text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-bold tracking-tighter hover:text-brand transition-colors ${
                    pathname === link.href ? 'text-foreground' : 'text-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="pt-8 border-t border-border w-full flex flex-col items-center gap-4">
                <p className="text-mono text-muted uppercase text-[10px] tracking-widest">System Theme</p>
                <ThemeSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
