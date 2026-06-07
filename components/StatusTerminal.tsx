'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StatusRow {
  label: string;
  value: React.ReactNode;
  detail: string;
}

export default function StatusTerminal() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Merida',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      setTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  const rows: StatusRow[] = [
    {
      label: 'LOCATION',
      value: 'Mérida, MX',
      detail: 'CST timezone · Overlaps fully with US Central business hours.',
    },
    {
      label: 'LOCAL',
      value: <span className="tabular-nums">{time}</span>,
      detail: 'Same working hours as Chicago, Dallas, Mexico City.',
    },
    {
      label: 'STATUS',
      value: (
        <span className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand" />
          </span>
          Open to roles
        </span>
      ),
      detail: 'Seeking: Senior Product Designer, Design Systems Lead. Available immediately.',
    },
    {
      label: 'VISA',
      value: (
        <span className="flex items-center gap-1">
          <span className="text-[10px]">🇺🇸🇲🇽</span> TN Eligible
        </span>
      ),
      detail: 'Mexican national. Sponsorship required for US roles, but TN visa is easier to process.',
    },
    {
      label: 'MOBILITY',
      value: (
        <span className="flex items-center gap-1">
          <span className="text-[10px]">✈️</span> Relocate
        </span>
      ),
      detail: 'Open to remote, hybrid, or full relocation to the US.',
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden w-full md:w-[320px] shrink-0">
      {/* Terminal top bar (Darker chrome background) */}
      <div className="flex items-center px-4 py-2.5 bg-background border-b border-border/40">
        <span className="text-mono font-mono text-[9px] uppercase tracking-[0.15em] text-muted select-none">
          ~/status
        </span>
      </div>

      {/* Accordion rows */}
      <div>
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={index < rows.length - 1 ? 'border-b border-border/20' : ''}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-4 py-3 text-left cursor-pointer group"
            >
              <div className="flex items-center gap-3 text-mono font-mono text-[10px] uppercase tracking-[0.12em] min-w-0">
                {/* Labels are dim, values are high contrast */}
                <span className="text-muted/50 shrink-0 font-normal">{row.label}</span>
                <span className="text-foreground font-medium truncate">{row.value}</span>
              </div>
              <motion.span
                className="text-muted text-[10px] ml-2 shrink-0"
                animate={{ rotate: openIndex === index ? 90 : 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                ▸
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="detail"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="bg-background px-4 py-3 border-t border-border/10">
                    <p className="text-small text-muted max-w-[280px] leading-relaxed font-light">
                      {row.detail}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
