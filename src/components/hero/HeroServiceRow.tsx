'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Maximize2,
  X,
  ExternalLink,
} from 'lucide-react';
import { PITCH_DECK_SERVICES, PitchDeckService } from '@/data/pitchDeckServices';

export default function HeroServiceRow() {
  const [selectedService, setSelectedService] = useState<PitchDeckService | null>(null);

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
            <div
              key={`hero-service-${service.id}-${idx}`}
              onClick={() => setSelectedService(service)}
              className="group/card relative flex w-[180px] flex-shrink-0 flex-col justify-between rounded-xl border border-white/[0.08] bg-[#0E0E0E] hover:bg-[#141414] p-2.5 cursor-pointer transition-all duration-300 hover:border-[#DE4A5C]/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)] sm:w-[280px] sm:rounded-2xl sm:p-4 lg:w-[320px]"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-black border border-white/[0.06] sm:rounded-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-black/20 to-transparent" />
                <div className="absolute top-1.5 left-1.5 right-1.5 flex items-center justify-between gap-1 sm:top-2 sm:left-2 sm:right-2 sm:gap-1.5">
                  <span className="rounded-full border border-white/15 bg-black/85 px-1.5 py-0.5 text-[7.5px] font-bold uppercase tracking-wider text-[#F4F1EC] backdrop-blur-md sm:px-2 sm:text-[9.5px]">
                    {service.categoryLabel.split(' ')[0]}
                  </span>
                  <span className="rounded-full bg-[#C83A4B] px-1.5 py-0.5 text-[7.5px] font-bold uppercase tracking-wider text-white shadow-sm sm:px-2 sm:text-[9.5px]">
                    {service.badge}
                  </span>
                </div>
                <div className="hidden opacity-0 group-hover/card:opacity-100 transition-opacity bg-black/80 backdrop-blur-md border border-white/20 text-white rounded-lg p-1.5 sm:absolute sm:bottom-2 sm:right-2 sm:block">
                  <Maximize2 size={12} />
                </div>
              </div>

              {/* Content */}
              <div className="mt-2 flex-1 flex flex-col justify-between sm:mt-3">
                <div>
                  <h3 className="line-clamp-1 text-[11.5px] font-semibold text-[#F4F1EC] transition-colors group-hover/card:text-[#DE4A5C] sm:text-[14.5px]">
                    {service.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[9.5px] leading-snug text-[#8A8A8A] sm:text-[12px] sm:leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="mt-2 grid grid-cols-2 gap-1 pt-2 border-t border-white/[0.06] sm:mt-3 sm:gap-1.5 sm:pt-2.5">
                  {service.metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="bg-white/[0.03] rounded-md p-1 border border-white/[0.04] sm:rounded-lg sm:p-1.5">
                      <div className="text-[7px] uppercase font-semibold text-[#7A7A7A] truncate sm:text-[9px]">{m.label}</div>
                      <div className="text-[9.5px] font-bold text-[#F4F1EC] truncate mt-0.5 sm:text-[11.5px]">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="mt-2 flex items-center justify-between pt-1.5 border-t border-white/[0.04] text-[9px] font-semibold uppercase tracking-wider text-[#DE4A5C] sm:mt-3 sm:pt-2 sm:text-[11px]">
                  <span>Inspect Solution</span>
                  <ArrowRight
                    size={11}
                    className="transform group-hover/card:translate-x-0.5 transition-transform"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PITCH DECK SPECIFICATION MODAL DRAWER                                     */}
      {/* ========================================================================= */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#0D0D0D] text-[#F4F1EC] shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-[#F4F1EC] transition-colors"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 text-[#DE4A5C] text-[12px] font-semibold uppercase tracking-wider">
              <Sparkles size={13} />
              <span>Solution Details</span>
            </div>

            <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div>
                <h3 className="font-editorial text-[26px] sm:text-[32px] text-[#F4F1EC] font-normal">
                  {selectedService.title}
                </h3>
                <p className="text-[14px] text-[#8A8A8A]">{selectedService.subtitle}</p>
              </div>
              <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-[#C83A4B]/20 border border-[#C83A4B]/40 text-[#DE4A5C] text-[11px] font-bold uppercase tracking-wider">
                {selectedService.badge}
              </span>
            </div>

            {/* Image Preview & Description */}
            <div className="mt-6 grid sm:grid-cols-2 gap-6 items-center">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-[11px] text-white/90 font-medium">
                  {selectedService.categoryLabel}
                </div>
              </div>

              <div>
                <p className="text-[14.5px] leading-relaxed text-[#8A8A8A]">
                  {selectedService.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  {selectedService.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div className="text-[10.5px] text-[#8A8A8A] uppercase font-semibold">
                        {m.label}
                      </div>
                      <div className="text-[13.5px] text-[#F4F1EC] font-semibold mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Specs from Pitch Deck */}
            <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#F4F1EC] flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#DE4A5C]" />
                <span>Deliverables & Mediums</span>
              </h4>

              {selectedService.specs.availableMediums && (
                <div className="flex flex-wrap gap-2">
                  {selectedService.specs.availableMediums.map((med) => (
                    <span
                      key={med}
                      className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[12px] text-[#F4F1EC]"
                    >
                      • {med}
                    </span>
                  ))}
                </div>
              )}

              {selectedService.specs.coreBenefits && (
                <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
                  {selectedService.specs.coreBenefits.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-[13px] text-[#8A8A8A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DE4A5C] mt-1.5 flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-white/10 text-[13px] text-[#8A8A8A] hover:text-white hover:bg-white/[0.05] transition-colors"
              >
                Close Spec Sheet
              </button>
              <Link
                href={selectedService.link}
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#C83A4B] hover:bg-[#DE4A5C] px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-lg shadow-[#C83A4B]/25 transition-all"
              >
                <span>{selectedService.ctaText}</span>
                <ExternalLink size={13} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

