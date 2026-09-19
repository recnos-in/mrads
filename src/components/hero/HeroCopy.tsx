'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';

export interface HeroProofPoint {
  title: string;
  detail: string;
}

export interface HeroCopyProps {
  eyebrow?: string;
  headlineLine1?: string;
  headlineAccent?: string;
  headlineLine3?: string;
  supportingText?: string;
  proofPoints?: HeroProofPoint[];
}

export default function HeroCopy({
  eyebrow = 'Premium Hyperlocal Advertising Network',
  headlineLine1 = 'Reach Customers',
  headlineAccent = 'Where They Live, Work &',
  headlineLine3 = 'Dine.',
  supportingText = 'Mr. Ads places your brand inside premium residential towers, corporate tech parks, restaurants and commute routes — high-intent spaces where audiences notice, remember and act.',
  proofPoints = [
    { title: '18M+ Monthly Reach', detail: 'Across premium city inventory' },
    { title: '31,400+ Screens', detail: 'Live digital displays in rotation' },
    { title: 'City-Wide Coverage', detail: 'Indoor, outdoor & on-the-move' },
  ],
}: HeroCopyProps) {
  return (
    <div className="flex w-full max-w-[680px] flex-col items-start gap-6 lg:gap-7">
      {/* Eyebrow Beacon */}
      <Reveal variant="fade-up" delay={0.05}>
        <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.10] bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#DE4A5C] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#C83A4B]" />
          </span>
          <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#B4B4B4] sm:text-[11px]">
            {eyebrow}
          </span>
        </span>
      </Reveal>

      {/* Main Headline - Line by Line Cinematic Reveal */}
      <h1 className="font-editorial text-[40px] font-normal leading-[1.04] tracking-[-0.02em] text-[#F4F1EC] sm:text-[52px] md:text-[60px] xl:text-[68px]">
        <Reveal variant="fade-up" delay={0.14}>
          <span className="block">{headlineLine1}</span>
        </Reveal>
        <Reveal variant="fade-up" delay={0.22}>
          <span className="mt-1 block font-normal italic text-[#DE4A5C]">{headlineAccent}</span>
        </Reveal>
        <Reveal variant="fade-up" delay={0.3}>
          <span className="block">{headlineLine3}</span>
        </Reveal>
      </h1>

      {/* Supporting Text */}
      <Reveal variant="fade-up" delay={0.38}>
        <p className="max-w-[560px] text-[15px] font-normal leading-[1.65] text-[#9A9A9A] sm:text-[16px] lg:text-[17px]">
          {supportingText}
        </p>
      </Reveal>

      {/* Supporting Proof Points */}
      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3.5">
        {proofPoints.map((point, idx) => (
          <Reveal key={point.title} variant="fade-up" delay={0.46} staggerIndex={idx}>
            <div className="group flex h-full items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3.5 py-2.5 transition-colors duration-300 hover:border-[#DE4A5C]/40 hover:bg-white/[0.05]">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#C83A4B]/40 bg-[#C83A4B]/12">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#DE4A5C"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[12.5px] font-semibold text-[#F4F1EC]">{point.title}</span>
                <span className="mt-0.5 text-[11px] font-normal text-[#8A8A8A]">{point.detail}</span>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
