'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';

export interface HeroCtaGroupProps {
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  responseNote?: string;
}

export default function HeroCtaGroup({
  primaryText = 'Plan Your Campaign',
  primaryHref = '/contact',
  secondaryText = 'Explore Our Network',
  secondaryHref = '#presence',
  responseNote = 'Plans shared within 24 hours · No obligation',
}: HeroCtaGroupProps) {
  return (
    <Reveal variant="fade-up" delay={0.54} className="w-full lg:w-auto">
      <div className="flex w-full flex-col items-stretch gap-3.5 lg:items-end">
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-3.5">
          {/* Primary CTA Button */}
          <a
            href={primaryHref}
            className="btn-sheen group relative inline-flex h-[52px] items-center justify-center gap-3 rounded-xl bg-[#C83A4B] px-7 text-[13px] font-bold uppercase tracking-[0.08em] text-[#F4F1EC] shadow-[0_4px_25px_rgba(200,58,75,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#DE4A5C] hover:shadow-[0_8px_35px_rgba(222,74,92,0.55)] active:translate-y-0"
          >
            <span>{primaryText}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transform transition-transform duration-200 group-hover:translate-x-1.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          {/* Secondary CTA Button */}
          <a
            href={secondaryHref}
            className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] px-6 text-[12.5px] font-semibold uppercase tracking-[0.08em] text-[#F4F1EC] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06] active:translate-y-0"
          >
            <span>{secondaryText}</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transform text-[#929292] transition-all duration-200 group-hover:translate-y-1 group-hover:text-[#F4F1EC]"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </a>
        </div>

        {/* Reassurance Microcopy */}
        <span className="text-[11.5px] font-medium tracking-[0.02em] text-[#7A7A7A] lg:text-right">
          {responseNote}
        </span>
      </div>
    </Reveal>
  );
}
