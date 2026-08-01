'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, ExternalLink } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import BrandSwitcher from './BrandSwitcher';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/', label: 'Work', type: 'internal' },
    { href: '/about', label: 'About', type: 'internal' },
    { 
      href: '/Omar-Guillermo-Senior-Product-Designer-Resume.pdf', 
      label: 'Resume', 
      type: 'download', 
      download: 'Omar-Guillermo-Senior-Product-Designer-Resume.pdf' 
    },
    { 
      href: 'https://www.linkedin.com/in/omar-guillermo/', 
      label: 'LinkedIn', 
      type: 'external' 
    },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[50] transition-colors duration-300 pointer-events-auto ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md' 
          : 'bg-transparent'
      }`}>
        {/* Level 1: Global Branding & Controls */}
        <div className="w-full border-b border-border/30 py-3 md:py-4">
          <div className="max-w-5xl mx-auto px-6 md:px-12 flex justify-between items-center">
            {/* Left Side: Branding */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
            >
              <div className="w-8 h-8 text-primary transition-colors duration-300">
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

            {/* Right Side: Navigation & Switchers */}
            <div className="flex items-center gap-6 md:gap-8">
              <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => {
                  if (link.type === 'internal') {
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`text-small font-sans font-medium hover:text-brand transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-1 py-0.5 ${pathname === link.href ? 'text-primary' : 'text-secondary'
                          }`}
                      >
                        {link.label}
                      </Link>
                    );
                  } else {
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        download={link.download}
                        target={link.type === 'external' ? '_blank' : undefined}
                        rel={link.type === 'external' ? 'noopener noreferrer' : undefined}
                        aria-label={link.type === 'download' ? 'Download resume PDF' : `Visit ${link.label} profile (opens in new tab)`}
                        className="flex items-center gap-1 text-small font-sans font-medium text-secondary hover:text-brand transition-colors cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-1 py-0.5"
                      >
                        <span>{link.label}</span>
                        {link.type === 'download' && (
                          <Download className="w-3 h-3 text-muted group-hover:text-brand transition-colors shrink-0" />
                        )}
                        {link.type === 'external' && (
                          <ExternalLink className="w-3 h-3 text-muted group-hover:text-brand transition-colors shrink-0" />
                        )}
                      </a>
                    );
                  }
                })}
              </div>

              <div className="flex items-center gap-1 md:gap-2">
                <BrandSwitcher />
                <ThemeSwitcher />
              </div>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 -mr-2 text-primary focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
              {navLinks.map((link) => {
                if (link.type === 'internal') {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl font-bold tracking-tighter hover:text-brand transition-colors ${pathname === link.href ? 'text-primary' : 'text-secondary'
                        }`}
                    >
                      {link.label}
                    </Link>
                  );
                } else {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      download={link.download}
                      target={link.type === 'external' ? '_blank' : undefined}
                      rel={link.type === 'external' ? 'noopener noreferrer' : undefined}
                      onClick={() => setIsOpen(false)}
                      aria-label={link.type === 'download' ? 'Download resume PDF' : `Visit ${link.label} profile (opens in new tab)`}
                      className="flex items-center justify-center gap-1.5 text-2xl font-bold tracking-tighter text-secondary hover:text-brand transition-colors cursor-pointer group"
                    >
                      <span>{link.label}</span>
                      {link.type === 'download' && (
                        <Download className="w-4.5 h-4.5 text-muted group-hover:text-brand transition-colors shrink-0" />
                      )}
                      {link.type === 'external' && (
                        <ExternalLink className="w-4.5 h-4.5 text-muted group-hover:text-brand transition-colors shrink-0" />
                      )}
                    </a>
                  );
                }
              })}

              <div className="pt-8 border-t border-border w-full flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-mono text-secondary uppercase text-xxs tracking-widest font-mono">Brand Logic</p>
                  <BrandSwitcher />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-mono text-secondary uppercase text-xxs tracking-widest font-mono">Appearance</p>
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
