'use client';

import React from 'react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

const aboutTestimonials: Testimonial[] = [
  {
    id: 'sanika-vedak',
    name: 'Sanika Vedak',
    role: 'Sr. Product Designer',
    company: 'GoDaddy Commerce',
    avatar: '/images/avatars/sanika_vedak.jpg',
    quote: 'Omar, you are a design wizard. Your design craft, file organization and problem solving skills are inspirational.'
  },
  {
    id: 'allie-hough-barkley',
    name: 'Allie Hough-Barkley',
    role: 'Sr. Product Design Manager',
    company: 'GoDaddy Commerce',
    avatar: '/images/avatars/allie_hough.jpg',
    quote: 'Thank you, Omar, for all of your excellent work and great partnership during your time here.'
  },
  {
    id: 'ji-hyun-park',
    name: 'Ji Hyun Park',
    role: 'Sr. Director of Product UX',
    company: 'GoDaddy Commerce',
    avatar: '/images/avatars/ji_hyun_park.jpg',
    quote: 'Thank you for all the amazing work you’ve done in Commerce! Your creativity, dedication, and energy have made such a huge difference to our team.'
  },
  {
    id: 'ada-flores',
    name: 'Ada Flores',
    role: 'Sr. Product Designer',
    company: 'GoDaddy Commerce',
    avatar: '/images/avatars/ada_flores.jpg',
    quote: 'Omar, I was so lucky to have you as a mentor when I started at GoDaddy. You made me feel so welcome from day one, and you were a huge reason my first days at the company went so smoothly.'
  },
  {
    id: 'benjamin-balderas',
    name: 'Benjamin Balderas',
    role: 'Sr. Product Designer',
    company: 'GoDaddy Commerce',
    avatar: '/images/avatars/benjamin_balderas.jpg',
    quote: 'Omar! You\'ve been an inspiration for dedication and kindness—that\'s something that will be your legacy to the team.'
  },
  {
    id: 'thiago-leite',
    name: 'Thiago Leite',
    role: 'Sr. Product Designer',
    company: 'FullStack Labs',
    avatar: '/images/avatars/thiago_leite.jpg',
    quote: 'Omar understands the essence of the product and manages to solve problems in an incredible way that actually delivers value. Solid knowledge of Design Systems and communication.'
  },
  {
    id: 'ana-romero',
    name: 'Ana Romero',
    role: 'Digital Marketing Professional',
    company: 'QuestionPro',
    avatar: '/images/avatars/ana_romero.jpg',
    quote: 'It was fantastic to work together with Omar. He leads by example and I find his enthusiasm and dedication inspiring.'
  },
  {
    id: 'guille-santana',
    name: 'Guille Santana',
    role: 'Marketing Delivery Manager',
    company: 'QuestionPro',
    avatar: '/images/avatars/guille_santana.jpg',
    quote: 'Dedicated and always very efficient, Omar is a very creative, talented, and proactive designer who always has a smile on his face!'
  }
];

export default function TestimonialsGrid() {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <h2 className="text-mono font-mono text-secondary font-medium tracking-wide border-b border-border pb-3">
        Endorsements & Team Feedback
      </h2>

      {/* Testimonials 2-column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {aboutTestimonials.map((item) => (
          <div
            key={item.id}
            className="bg-surface-inset border-0 rounded-2xl p-6 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <Image
                src={item.avatar}
                alt={item.name}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full shrink-0 border border-brand/20 object-cover"
              />
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
