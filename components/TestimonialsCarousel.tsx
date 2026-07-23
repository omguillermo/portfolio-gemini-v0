'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  quote: string;
}

const aboutTestimonials: Testimonial[] = [
  {
    id: 'sanika-vedak',
    name: 'Sanika Vedak',
    role: 'Sr. Product Designer',
    company: 'GoDaddy Commerce',
    initials: 'SV',
    quote: 'Omar, you are a design wizard. Your design craft, file organization and problem solving skills are inspirational.'
  },
  {
    id: 'allie-hough-barkley',
    name: 'Allie Hough-Barkley',
    role: 'Sr. Product Design Manager',
    company: 'GoDaddy Commerce',
    initials: 'AH',
    quote: 'Thank you, Omar, for all of your excellent work and great partnership during your time here.'
  },
  {
    id: 'ji-hyun-park',
    name: 'Ji Hyun Park',
    role: 'Sr. Director of Product UX',
    company: 'GoDaddy Commerce',
    initials: 'JP',
    quote: 'Thank you for all the amazing work you’ve done in Commerce! Your creativity, dedication, and energy have made such a huge difference to our team.'
  },
  {
    id: 'ada-flores',
    name: 'Ada Flores',
    role: 'Sr. Product Designer',
    company: 'GoDaddy Commerce',
    initials: 'AF',
    quote: 'Omar, I was so lucky to have you as a mentor when I started at GoDaddy. You made me feel so welcome from day one, and you were a huge reason my first days at the company went so smoothly.'
  },
  {
    id: 'benjamin-balderas',
    name: 'Benjamin Balderas',
    role: 'Sr. Product Designer',
    company: 'GoDaddy Commerce',
    initials: 'BB',
    quote: 'Omar! You\'ve been an inspiration for dedication and kindness—that\'s something that will be your legacy to the team.'
  },
  {
    id: 'thiago-leite',
    name: 'Thiago Leite',
    role: 'Sr. Product Designer',
    company: 'FullStack Labs',
    initials: 'TL',
    quote: 'Omar understands the essence of the product and manages to solve problems in an incredible way that actually delivers value. Solid knowledge of Design Systems and communication.'
  },
  {
    id: 'ana-romero',
    name: 'Ana Romero',
    role: 'Digital Marketing Professional',
    company: 'QuestionPro',
    initials: 'AR',
    quote: 'It was fantastic to work together with Omar. He leads by example and I find his enthusiasm and dedication inspiring.'
  },
  {
    id: 'guille-santana',
    name: 'Guille Santana',
    role: 'Marketing Delivery Manager',
    company: 'QuestionPro',
    initials: 'GS',
    quote: 'Dedicated and always very efficient, Omar is a very creative, talented, and proactive designer who always has a smile on his face!'
  }
];

export default function TestimonialsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 350;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header controls */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <h2 className="text-mono font-mono text-secondary font-medium tracking-wide">
          Endorsements & Team Feedback
        </h2>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleScroll('left')}
            aria-label="Scroll left"
            className="w-8 h-8 rounded-lg bg-surface-inset border border-border/20 flex items-center justify-center text-secondary hover:text-primary hover:bg-surface transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            aria-label="Scroll right"
            className="w-8 h-8 rounded-lg bg-surface-inset border border-border/20 flex items-center justify-center text-secondary hover:text-primary hover:bg-surface transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-4 pt-1 snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {aboutTestimonials.map((item) => (
          <div
            key={item.id}
            className="snap-start shrink-0 w-[290px] sm:w-[340px] bg-surface-inset border-0 rounded-2xl p-6 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-[11px] font-mono font-bold text-brand uppercase shrink-0">
                {item.initials}
              </div>
              <p className="text-body text-primary leading-relaxed font-light text-[13px]">
                &quot;{item.quote}&quot;
              </p>
            </div>

            <div className="pt-3 border-t border-border/10">
              <h4 className="text-small font-bold text-primary">{item.name}</h4>
              <p className="text-[11px] text-secondary font-light leading-snug">{item.role}</p>
              <p className="text-mono font-mono text-[10px] text-brand font-medium mt-0.5">{item.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
