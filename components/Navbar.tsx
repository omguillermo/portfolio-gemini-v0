'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Name / Logo */}
        <Link 
          href="/" 
          className="text-body font-bold tracking-tighter pointer-events-auto hover:text-brand transition-colors"
        >
          Omar Guillermo
        </Link>

        {/* Links & Switcher */}
        <div className="flex items-center gap-8 pointer-events-auto">
          <Link 
            href="/" 
            className={`text-small font-mono uppercase tracking-widest hover:text-brand transition-colors ${
              pathname === '/' ? 'text-foreground' : 'text-muted'
            }`}
          >
            Work
          </Link>
          <Link 
            href="/about" 
            className={`text-small font-mono uppercase tracking-widest hover:text-brand transition-colors ${
              pathname === '/about' ? 'text-foreground' : 'text-muted'
            }`}
          >
            About
          </Link>
          <div className="border-l border-border pl-4">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
