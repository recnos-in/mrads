'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';

export interface HeroTrustItem {
  value: string;
  label: string;
}

export interface HeroTrustStripProps {
  items?: HeroTrustItem[];
  audienceNote?: string;
}

export default function HeroTrustStrip({
  items = [
    { value: '18M+', label: 'Monthly audience reach' },
    { value: '31,400+', label: 'Digital screens live' },
    { value: '8', label: 'Ad environments' },
    { value: '24/7', label: 'Rotating playback' },
  ],
  audienceNote = 'Trusted by restaurants, luxury residential towers, tech parks, retail chains & D2C brands',
}: HeroTrustStripProps) {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
      <Reveal variant="fade-up" delay={0.1}>
        <div className="flex flex-col gap-6 border-y border-white/[0.08] py-6 xl:flex-row xl:items-center xl:justify-between xl:gap-10">
          {/* Headline Network Numbers */}
          <dl className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4 sm:gap-x-12">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col">
                <dt className="sr-only">{item.label}</dt>
                <dd className="flex flex-col">
                  <span className="font-editorial text-[26px] font-normal leading-none tracking-[-0.01em] text-[#F4F1EC] sm:text-[30px]">
                    {item.value}
                  </span>
                  <span className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#8A8A8A]">
                    {item.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          {/* Audience Note */}
          <p className="max-w-[380px] text-[12.5px] leading-[1.6] text-[#8A8A8A] xl:text-right">
            {audienceNote}
          </p>
        </div>
      </Reveal>
    </div>
  );
}
