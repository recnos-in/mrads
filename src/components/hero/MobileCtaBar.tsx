'use client';

import React from 'react';

export interface MobileCtaBarProps {
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function MobileCtaBar({
  primaryText = 'Plan Your Campaign',
  primaryHref = '/contact',
  secondaryText = 'Explore Network',
  secondaryHref = '#presence',
}: MobileCtaBarProps) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex items-center gap-2 border-t border-white/10 bg-[#080808]/95 px-4 pt-3 backdrop-blur-xl sm:hidden"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.75rem)' }}
    >
      <a
        href={secondaryHref}
        className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#F4F1EC]"
      >
        {secondaryText}
      </a>
      <a
        href={primaryHref}
        className="btn-sheen inline-flex h-11 flex-[1.4] items-center justify-center gap-2 rounded-xl bg-[#C83A4B] px-3 text-[11px] font-bold uppercase tracking-[0.06em] text-[#F4F1EC] shadow-[0_4px_20px_rgba(200,58,75,0.35)]"
      >
        <span>{primaryText}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  );
}
