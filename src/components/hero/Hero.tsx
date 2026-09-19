'use client';

import React from 'react';
import HeroCopy from './HeroCopy';
import HeroCtaGroup from './HeroCtaGroup';
import HeroServiceRow from './HeroServiceRow';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Mr. Ads Hero"
      className="relative flex flex-col bg-[#080808] text-[#F4F1EC] overflow-hidden pt-10 sm:pt-14 lg:pt-16 pb-8 border-b border-white/[0.08]"
    >
      {/* Atmospheric Ambient Depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[#C83A4B]/[0.05] rounded-full blur-[180px]" />
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#080808_95%)]" />
      </div>

      {/* Hero Core: Headline, Description & Action Buttons in a single reading column */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 mb-6 sm:mb-8">
        <div className="max-w-3xl">
          <HeroCopy />
          <HeroCtaGroup secondaryHref="#presence" secondaryText="EXPLORE OUR NETWORK ↓" />
        </div>
      </div>

      {/* Single Row of Continuously Rolling Service Cards */}
      <div className="relative z-10 w-full">
        <HeroServiceRow />
      </div>

      {/* Bottom Centered Scroll Indicator */}
      <div className="relative z-10 pt-6 flex justify-center">
        <ScrollIndicator />
      </div>
    </section>
  );
}
