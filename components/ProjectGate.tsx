'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ArrowRight } from 'lucide-react';

interface ProjectGateProps {
  children: React.ReactNode;
  password: string;
  projectSlug: string;
}

export default function ProjectGate({ children, password, projectSlug }: ProjectGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unlocked = localStorage.getItem(`unlock_${projectSlug}`);
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
    setIsLoading(false);
  }, [projectSlug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === password) {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput('');
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isUnlocked ? (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          key="gate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center px-6"
        >
          <div className="max-w-sm w-full space-y-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center text-brand mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h1 className="text-heading font-bold tracking-tighter">Private Case Study</h1>
              <p className="text-body text-muted leading-relaxed">
                This project contains sensitive information. Please enter the access code to view the details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div 
                className="relative group"
                animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                <input
                  type="password"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    if (error) setError(false);
                  }}
                  placeholder="Enter Access Code"
                  className={`w-full bg-surface border px-6 py-4 rounded-md text-center text-body focus:outline-none transition-all shadow-sm ${
                    error 
                      ? 'border-error ring-1 ring-error' 
                      : 'border-border hover:border-brand focus:border-brand'
                  }`}
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-brand transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-mono text-error uppercase tracking-widest text-[10px]"
                >
                  Invalid Access Code
                </motion.p>
              )}
            </form>

            <div className="pt-8">
              <button 
                onClick={() => window.history.back()}
                className="text-mono text-muted hover:text-foreground transition-colors uppercase tracking-widest"
              >
                Go Back
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
