'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PITCH_DECK_SERVICES } from '@/data/pitchDeckServices';

export default function HeroServiceRow() {
  const services = PITCH_DECK_SERVICES;

  return (
    <div className="relative w-full overflow-hidden select-none">
      {/* Section Label */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 mb-3 flex items-center gap-2.5 text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C83A4B]" />
        <span className="text-[#929292] font-semibold uppercase tracking-[0.18em] text-[10.5px]">
          Our Advertising Network
        </span>
      </div>

      {/* Single Continuous Rolling Row */}
      <div className="relative w-full overflow-hidden py-1">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#080808] via-[#080808]/80 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 w-max animate-marquee-ltr" style={{ willChange: 'transform' }}>
          {/* Duplicated once for a seamless continuous loop */}
          {[...services, ...services].map((service, idx) => (
            <Link
              key={`hero-service-${service.id}-${idx}`}
              href={service.link}
              className="card-interactive group relative w-[260px] sm:w-[290px] flex-shrink-0 rounded-2xl border border-white/[0.09] hover:border-[#DE4A5C]/60 bg-[#101010] hover:bg-[#151515] p-3.5 transition-all duration-300 flex flex-col gap-3"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black border border-white/[0.06]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/20 to-transparent" />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-[9px] font-bold uppercase tracking-wider text-[#F4F1EC]">
                  {service.categoryLabel.split(' ')[0]}
                </span>
              </div>

              {/* Content */}
              <div>
                <h4 className="text-[13.5px] font-semibold text-[#F4F1EC] group-hover:text-[#DE4A5C] transition-colors line-clamp-1">
                  {service.title}
                </h4>
                <p className="mt-1 text-[11.5px] text-[#929292] line-clamp-1 leading-snug">
                  {service.subtitle}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-[10.5px] font-semibold uppercase tracking-wider text-[#DE4A5C]">
                <span>View Details</span>
                <ArrowRight
                  size={12}
                  className="transform group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
