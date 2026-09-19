import React from 'react';
import TargetShell from '@/components/TargetShell';
import Hero from '@/components/hero/Hero';
import PresenceSection from '@/components/landing/PresenceSection';
import AdvantageSection from '@/components/landing/AdvantageSection';
import WhySection from '@/components/landing/WhySection';
import DigitalSection from '@/components/landing/DigitalSection';
import FinalCta from '@/components/FinalCta';

export default function HomePage() {
  return (
    <TargetShell reserveMobileCtaBar>
      {/* 1. Hero: Core proposition, trust metrics & interactive moving channels showcase */}
      <Hero />

      {/* 2. Presence section: Where your audience is */}
      <PresenceSection />

      {/* 3. The hyperlocal advantage: The problem vs The Mr. Ads approach */}
      <AdvantageSection />

      {/* 4. Why Mr. Ads: Six reasons brands stay with one partner */}
      <WhySection />

      {/* 5. Digital & AI Tech solutions: The online conversion engine */}
      <DigitalSection />

      {/* 6. Final Call to Action */}
      <FinalCta />
    </TargetShell>
  );
}

