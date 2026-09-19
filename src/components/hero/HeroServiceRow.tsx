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
      <div className="mx-auto mb-6 flex w-full max-w-[1600px] flex-col gap-2.5 px-6 sm:mb-7 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:gap-8 lg:px-16 xl:px-20">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C83A4B]" />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#929292]">
              Our Advertising Network
            </span>
          </div>
          <h2 className="font-editorial text-[24px] font-normal leading-tight tracking-[-0.01em] text-[#F4F1EC] sm:text-[28px]">
            Eight ways to reach your city.
          </h2>
        </div>
        <p className="max-w-[380px] text-[12.5px] leading-[1.6] text-[#8A8A8A] lg:text-right">
          Every channel below is live inventory you can book today — curated into one plan, with one point of contact.
        </p>
      </div>

      {/* Single Continuous Rolling Row */}
      <div className="relative w-full overflow-hidden py-3">
        <div className="absolute left-0 top-0 bottom-0 w-14 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-transparent z-10 pointer-events-none sm:w-28" />
        <div className="absolute right-0 top-0 bottom-0 w-14 bg-gradient-to-l from-[#080808] via-[#080808]/85 to-transparent z-10 pointer-events-none sm:w-28" />

        <div className="flex gap-5 w-max animate-marquee-ltr" style={{ willChange: 'transform' }}>
          {/* Duplicated once for a seamless continuous loop */}
          {[...services, ...services].map((service, idx) => (
            <Link
              key={`hero-service-${service.id}-${idx}`}
              href={service.link}
              className="group relative flex w-[262px] flex-shrink-0 flex-col gap-3.5 rounded-2xl border border-white/[0.10] bg-[#111111] p-3.5 transition-colors duration-300 hover:border-[#DE4A5C]/60 hover:bg-[#171717] hover:shadow-[0_18px_45px_-15px_rgba(0,0,0,0.9)] sm:w-[300px]"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black border border-white/[0.06]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/20 to-transparent" />
                <span className="absolute left-2 top-2 rounded-full border border-white/15 bg-black/85 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#F4F1EC] backdrop-blur-md">
                  {service.categoryLabel.split(' ')[0]}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="line-clamp-1 text-[13.5px] font-semibold text-[#F4F1EC] transition-colors group-hover:text-[#DE4A5C]">
                  {service.title}
                </h3>
                <p className="mt-1 line-clamp-1 text-[11.5px] leading-snug text-[#929292]">
                  {service.subtitle}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/[0.06] pt-2.5 text-[10.5px] font-semibold uppercase tracking-wider text-[#DE4A5C]">
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
