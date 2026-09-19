'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';

export interface HeroTrustItem {
  value: string;
  label: string;
}

export interface HeroTrustStripProps {
  items?: HeroTrustItem[];
}

export default function HeroTrustStrip({
  items = [
    { value: '18M+', label: 'Monthly audience reach' },
    { value: '31,400+', label: 'Digital screens live' },
    { value: '8', label: 'Ad environments' },
    { value: '24/7', label: 'Rotating playback' },
  ],
}: HeroTrustStripProps) {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
      <Reveal variant="fade-up" delay={0.1}>
        <dl className="grid grid-cols-4 gap-x-2.5 gap-y-3 border-y border-white/[0.08] py-2.5 sm:gap-x-12 sm:py-3">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col">
              <dt className="sr-only">{item.label}</dt>
              <dd className="flex flex-col">
                <span className="font-editorial text-[18px] font-normal leading-none tracking-[-0.01em] text-[#F4F1EC] sm:text-[22px] lg:text-[26px]">
                  {item.value}
                </span>
                <span className="mt-1 hidden text-[10.5px] font-medium uppercase tracking-[0.12em] text-[#8A8A8A] sm:block">
                  {item.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  );
}
