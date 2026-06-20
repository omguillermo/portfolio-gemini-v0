'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StatusRow {
  key: string;
  label: string;
  value: React.ReactNode;
  detail: string;
}

export default function StatusTerminal() {
  const [viewState, setViewState] = useState<'menu' | 'detail'>('menu');
  const [selectedRowIndex, setSelectedRowIndex] = useState<number>(0);
  const [confirmedIndex, setConfirmedIndex] = useState<number | null>(null);
  const [time, setTime] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

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
      key: 'location',
      label: 'LOCATION',
      value: <span className="font-mono">Mérida, MX</span>,
      detail: 'Very sunny city in Southeast Mexico. Rains also hit pretty hard. But food is actually quite good. I recommend Cochinita and Castacan.',
    },
    {
      key: 'local-time',
      label: 'LOCAL TIME',
      value: <span className="font-mono tabular-nums">{time}</span>,
      detail: 'CST Timezone, overlaps fully with US Central business hours. Chicago, Dallas, Mexico City.',
    },
    {
      key: 'status',
      label: 'STATUS',
      value: (
        <span className="flex items-center gap-1.5 font-mono">
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand" />
          </span>
          Open to roles
        </span>
      ),
      detail: 'Seeking Senior Product Designer, Design Systems, UX Designer, AI Designer Engineer. Available immediately. Always open to interviews unless said otherwise.',
    },
    {
      key: 'visa',
      label: 'VISA',
      value: (
        <span className="flex items-center gap-1 font-mono">
          <span className="text-[10px] select-none">🇺🇸🇲🇽</span> TN Eligible
        </span>
      ),
      detail: 'Mexican citizen. Sponsorship required for US roles, but TN Visa is easier to process than other visas :)',
    },
    {
      key: 'mobility',
      label: 'MOBILITY',
      value: (
        <span className="flex items-center gap-1 font-mono">
          <span className="text-[10px] select-none">✈️</span> Open to relocate
        </span>
      ),
      detail: 'Open to remote, hybrid, or full relocation. Interested in US, Canada or northern Mexico. Adventure, baby!',
    },
  ];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (viewState === 'menu') {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedRowIndex((prev) => Math.min(rows.length - 1, prev + 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedRowIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setConfirmedIndex(selectedRowIndex);
        setViewState('detail');
      }
    } else if (viewState === 'detail') {
      if (e.key === 'Enter' || e.key === 'Escape' || e.key === ' ') {
        e.preventDefault();
        setViewState('menu');
        setConfirmedIndex(null);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
      }
    }
  };

  const activeRow = confirmedIndex !== null ? rows[confirmedIndex] : null;

  return (
    <motion.div
      tabIndex={0}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onKeyDown={handleKeyDown}
      role="listbox"
      aria-label="Status Terminal Menu"
      aria-activedescendant={viewState === 'menu' ? rows[selectedRowIndex].key : undefined}
      className="bg-terminal-surface border-0 rounded-2xl overflow-hidden w-full md:w-[340px] shrink-0 outline-none select-none font-mono text-[10px] text-foreground flex flex-col h-[270px] relative z-20 transition-all duration-200 focus:ring-1 focus:ring-brand/30"
    >
      {/* Terminal Window Header */}
      <div className="flex items-center px-5 py-2.5 bg-terminal-header border-b border-border/10 select-none">
        <div className="flex gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-muted/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-muted/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-muted/30" />
        </div>
      </div>

      {/* Terminal Content Area */}
      <div className="p-5 flex-grow flex flex-col justify-between min-h-0">
        <AnimatePresence mode="wait">
          {viewState === 'menu' ? (
            <motion.div
              key="menu-view"
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.15, ease: 'easeInOut' }}
              className="space-y-3 flex flex-col justify-between h-full flex-1 font-mono"
            >
              <div className="space-y-3 font-mono">
                {/* Shell line */}
                <div className="text-muted font-mono">
                  guest@omguillermo.dev ~ % <span className="text-foreground font-semibold font-mono">status</span>
                </div>

                {/* Prompt Instruction */}
                <div className="text-muted font-mono">
                  ? Please select an option to inspect:
                </div>

                {/* List items */}
                <div className="space-y-1 font-mono">
                  {rows.map((row, index) => {
                    const isSelected = selectedRowIndex === index;
                    return (
                      <div
                        key={row.key}
                        id={row.key}
                        role="option"
                        aria-selected={isSelected}
                        onMouseEnter={() => setSelectedRowIndex(index)}
                        onClick={() => {
                          setConfirmedIndex(index);
                          setViewState('detail');
                        }}
                        className="flex items-center cursor-pointer py-0.5 font-mono"
                      >
                        {/* Selector Arrow */}
                        <span
                          className={`w-3.5 shrink-0 font-mono ${
                            isSelected ? 'text-brand opacity-100 animate-terminal-blink' : 'opacity-0'
                          }`}
                        >
                          ❯
                        </span>

                        {/* Key label */}
                        <span
                          className={`w-24 shrink-0 whitespace-nowrap transition-colors duration-150 font-mono ${
                            isSelected ? 'text-brand font-bold' : 'text-muted font-normal'
                          }`}
                        >
                          {row.label}
                        </span>

                        {/* Value */}
                        <span
                          className={`truncate flex-1 font-mono flex items-center transition-colors duration-150 ${
                            isSelected ? 'text-foreground font-semibold' : 'text-muted font-normal'
                          }`}
                        >
                          {row.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer controls */}
              <div className="pt-2 text-muted flex justify-between items-center font-mono">
                <span className="font-mono">
                  {isFocused ? '↑↓ to navigate · Enter to select' : 'click to focus'}
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="detail-view"
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.15, ease: 'easeInOut' }}
              className="space-y-3 flex flex-col justify-between h-full flex-grow font-mono"
            >
              <div className="space-y-3 font-mono">
                {/* Shell Line showing active flag */}
                <div className="text-muted font-mono">
                  guest@omguillermo.dev ~ %
                  <span className="text-foreground font-semibold font-mono ml-1">
                    status --{activeRow?.key}
                  </span>
                </div>

                {/* Recessed detail text */}
                <div className="bg-background border border-border/30 rounded p-3.5 leading-relaxed text-muted font-normal text-[10px] font-mono">
                  {activeRow?.detail}
                </div>
              </div>

              {/* Go back prompt */}
              <div
                onClick={() => {
                  setViewState('menu');
                  setConfirmedIndex(null);
                }}
                className="pt-2 text-muted cursor-pointer hover:text-brand transition-colors duration-150 flex items-center select-none font-mono"
              >
                <span className="font-mono">Press Enter to go back</span>
                <span className={`${isFocused ? 'animate-terminal-blink' : ''} text-brand ml-0.5 font-bold font-mono`}>▊</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
