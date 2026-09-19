'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { PITCH_DECK_SERVICES } from '@/data/pitchDeckServices';

export default function HeroServiceRow() {
  // Ensure enough items in the track for seamless continuous looping
  const repeatCount = Math.max(2, Math.ceil(8 / Math.max(PITCH_DECK_SERVICES.length, 1)));
  const rollingItems = Array(repeatCount).fill(PITCH_DECK_SERVICES).flat();

  return (
    <div className="relative w-full overflow-hidden select-none">
      {/* Single Continuous Rolling Marquee Row */}
      <div className="relative w-full overflow-hidden py-3 group">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-transparent z-10 pointer-events-none sm:w-28" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#080808] via-[#080808]/85 to-transparent z-10 pointer-events-none sm:w-28" />

        <div className="flex gap-3 w-max animate-marquee-ltr sm:gap-5" style={{ willChange: 'transform' }}>
          {rollingItems.map((service, idx) => (
            <Link
              key={`hero-service-${service.id}-${idx}`}
              href={service.link}
              className="group/card relative flex w-[240px] flex-shrink-0 flex-col justify-between rounded-xl border border-white/[0.08] bg-[#0E0E0E] hover:bg-[#141414] p-3 cursor-pointer transition-all duration-300 hover:border-[#DE4A5C]/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)] sm:w-[280px] sm:rounded-2xl sm:p-4 lg:w-[320px]"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black border border-white/[0.06]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-black/20 to-transparent" />
                <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1.5">
                  <span className="rounded-full border border-white/15 bg-black/85 px-2 py-0.5 text-[8.5px] font-bold uppercase tracking-wider text-[#F4F1EC] backdrop-blur-md sm:text-[9.5px]">
                    {service.categoryLabel.split(' ')[0]}
                  </span>
                  <span className="rounded-full bg-[#C83A4B] px-2 py-0.5 text-[8.5px] font-bold uppercase tracking-wider text-white shadow-sm sm:text-[9.5px]">
                    {service.badge}
                  </span>
                </div>
                <div className="absolute bottom-2 right-2 opacity-0 group-hover/card:opacity-100 transition-opacity bg-black/80 backdrop-blur-md border border-white/20 text-white rounded-lg p-1.5">
                  <Maximize2 size={12} />
                </div>
              </div>

              {/* Content */}
              <div className="mt-2.5 flex-1 flex flex-col justify-between sm:mt-3">
                <div>
                  <h3 className="line-clamp-1 text-[13px] font-semibold text-[#F4F1EC] transition-colors group-hover/card:text-[#DE4A5C] sm:text-[14.5px]">
                    {service.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-[#8A8A8A] sm:text-[12px]">
                    {service.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="mt-2.5 grid grid-cols-2 gap-1.5 pt-2.5 border-t border-white/[0.06] sm:mt-3">
                  {service.metrics.slice(0, 2).map((m: { label: string; value: string }) => (
                    <div key={m.label} className="bg-white/[0.03] rounded-lg p-1.5 border border-white/[0.04]">
                      <div className="text-[8.5px] uppercase font-semibold text-[#7A7A7A] truncate sm:text-[9px]">{m.label}</div>
                      <div className="mt-0.5 text-[10.5px] font-bold text-[#F4F1EC] truncate sm:text-[11.5px]">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-white/[0.04] text-[10px] font-semibold uppercase tracking-wider text-[#DE4A5C] sm:mt-3 sm:text-[11px]">
                  <span>Inspect Solution</span>
                  <ArrowRight
                    size={11}
                    className="transform group-hover/card:translate-x-0.5 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
