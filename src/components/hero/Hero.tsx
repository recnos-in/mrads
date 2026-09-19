'use client';

import React from 'react';
import HeroCopy from './HeroCopy';
import HeroCtaGroup from './HeroCtaGroup';
import HeroServiceRow from './HeroServiceRow';
import HeroTrustStrip from './HeroTrustStrip';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Mr. Ads Hero"
      className="relative flex flex-col overflow-hidden border-b border-white/[0.08] bg-[#080808] pb-6 pt-8 text-[#F4F1EC] sm:pb-8 sm:pt-10 lg:pb-10 lg:pt-12"
    >
      {/* Atmospheric Ambient Depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[10%] h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-[#C83A4B]/[0.05] blur-[180px]" />
        <div className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-white/[0.015] blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#080808_95%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent" />
      </div>

      {/* Hero Core: Headline & Description on the left, Action Buttons anchored to the right on large screens */}
      <div className="relative z-10 mx-auto mb-8 w-full max-w-[1600px] px-6 sm:mb-10 sm:px-10 lg:mb-12 lg:px-16 xl:px-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <HeroCopy />
          <div className="w-full flex-shrink-0 lg:mb-2 lg:w-auto">
            <HeroCtaGroup secondaryHref="#presence" secondaryText="EXPLORE OUR NETWORK" />
          </div>
        </div>
      </div>

      {/* Network Numbers & Audience Context */}
      <div className="relative z-10 mb-8 sm:mb-10 lg:mb-12">
        <HeroTrustStrip />
      </div>

      {/* Single Row of Continuously Rolling Service Cards */}
      <div className="relative z-10 w-full">
        <HeroServiceRow />
      </div>

      {/* Bottom Centered Scroll Indicator */}
      <div className="relative z-10 flex justify-center pt-6">
        <ScrollIndicator />
      </div>
    </section>
  );
}
