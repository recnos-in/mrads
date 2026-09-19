import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import WhatsAppFloatButton from './WhatsAppFloatButton';

export default function TargetShell({
  children,
  reserveMobileCtaBar = false,
}: {
  children: React.ReactNode;
  /** Reserve space below the footer on mobile so a fixed bottom CTA drawer never overlaps it. */
  reserveMobileCtaBar?: boolean;
}) {
  return (
    <div className="min-h-screen bg-ink text-paper selection:bg-brand/30 selection:text-paper font-sans">
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      {reserveMobileCtaBar && <div className="h-[76px] sm:hidden" aria-hidden="true" />}
      <WhatsAppFloatButton />
    </div>
  );
}
