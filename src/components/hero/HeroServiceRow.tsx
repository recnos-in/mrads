'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { PITCH_DECK_SERVICES } from '@/data/pitchDeckServices';

export default function HeroServiceRow() {
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Ensure enough items in the track for seamless continuous looping on desktop
  const repeatCount = Math.max(2, Math.ceil(8 / Math.max(PITCH_DECK_SERVICES.length, 1)));
  const rollingItems = Array(repeatCount).fill(PITCH_DECK_SERVICES).flat();

  // Track scroll position on mobile to update active card index and thumb controls
  const handleScroll = useCallback(() => {
    const el = mobileScrollRef.current;
    if (!el) return;

    const { scrollLeft, clientWidth } = el;

    // Calculate the most visible card in the viewport
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length === 0) return;

    const containerCenter = scrollLeft + clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    setActiveIndex(closestIndex % PITCH_DECK_SERVICES.length);
  }, []);

  // Rotate the mobile carousel continuously by driving its native scroll position
  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const SPEED = 36; // px per second
    const RESUME_DELAY = 1200; // pause briefly after a gesture, then keep rotating
    let frame = 0;
    let resumeTimer: number | undefined;
    let activePointers = 0;
    let last = performance.now();
    // iOS Safari can expose scrollLeft as whole pixels. Keep the fractional
    // distance here so sub-pixel animation frames still add up to movement.
    let pendingDistance = 0;
    // Only a genuine swipe/hold interaction pauses the loop. A plain tap or a
    // ghost pointerdown (which iOS Safari can fire without ever sending the
    // matching up event) must never be able to stop the rotation.
    let touchedSinceDown = false;

    // Resume unconditionally: the loop is time-based, so it simply picks up
    // wherever the user's swipe left it. Never depend on a matching "up"
    // event or on pointer/hover state to restart.
    const scheduleResume = () => {
      if (resumeTimer !== undefined) window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        activePointers = 0;
        pendingDistance = 0;
      }, RESUME_DELAY);
    };

    const step = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const loopWidth = el.scrollWidth / 2; // track holds two full copies
      if (loopWidth > 0 && activePointers === 0) {
        pendingDistance += SPEED * dt;
        const wholePixels = Math.floor(pendingDistance);

        if (wholePixels > 0) {
          let next = el.scrollLeft + wholePixels;
          pendingDistance -= wholePixels;
          // Once the first copy has scrolled past, jump back one copy width.
          // Both copies are identical, so the jump is visually invisible.
          if (next >= loopWidth) next -= loopWidth;
          el.scrollLeft = next;
        }
      }

      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);

    // Pointer events cover mouse + touch. touchstart is also wired directly
    // because iOS Safari sometimes fires it without the pointer events.
    const handleDown = () => {
      activePointers += 1;
      touchedSinceDown = false;
      // Start the fallback now because iOS may omit every matching end event.
      scheduleResume();
    };
    const handleMove = () => {
      touchedSinceDown = true;
      // Keep the pause measured from the latest movement in a longer swipe.
      scheduleResume();
    };
    const handleUp = () => {
      // A tap (no movement) should not stall the rotation at all.
      if (touchedSinceDown) scheduleResume();
      else activePointers = Math.max(0, activePointers - 1);
      touchedSinceDown = false;
    };
    const forceRelease = () => {
      touchedSinceDown = false;
      scheduleResume();
    };

    el.addEventListener('pointerdown', handleDown);
    el.addEventListener('pointermove', handleMove);
    el.addEventListener('pointerup', handleUp);
    el.addEventListener('pointercancel', forceRelease);
    el.addEventListener('touchstart', handleDown, { passive: true });
    el.addEventListener('touchmove', handleMove, { passive: true });
    el.addEventListener('touchend', handleUp, { passive: true });
    el.addEventListener('touchcancel', forceRelease, { passive: true });
    // Catch any gesture that ends outside the track, and any event iOS fails
    // to deliver on the element at all.
    window.addEventListener('pointerup', forceRelease);
    window.addEventListener('touchend', forceRelease, { passive: true });
    window.addEventListener('touchcancel', forceRelease, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      if (resumeTimer !== undefined) window.clearTimeout(resumeTimer);
      el.removeEventListener('pointerdown', handleDown);
      el.removeEventListener('pointermove', handleMove);
      el.removeEventListener('pointerup', handleUp);
      el.removeEventListener('pointercancel', forceRelease);
      el.removeEventListener('touchstart', handleDown);
      el.removeEventListener('touchmove', handleMove);
      el.removeEventListener('touchend', handleUp);
      el.removeEventListener('touchcancel', forceRelease);
      window.removeEventListener('pointerup', forceRelease);
      window.removeEventListener('touchend', forceRelease);
      window.removeEventListener('touchcancel', forceRelease);
    };
  }, []);

  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    handleScroll();
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative w-full select-none">
      {/* ========================================================================= */}
      {/* MOBILE EXPERIENCE: THUMB-SCROLLABLE & SWIPEABLE CAROUSEL (< sm)           */}
      {/* ========================================================================= */}
      <div className="block sm:hidden w-full">
        {/* Thumb-Scrollable Container */}
        <div className="relative w-full overflow-hidden">
          {/* Edge shadow gradient indicators */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-6 bg-gradient-to-r from-[#080808] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-6 bg-gradient-to-l from-[#080808] to-transparent" />

          <div
            ref={mobileScrollRef}
            className="flex gap-3.5 overflow-x-auto px-6 py-2 overscroll-x-contain touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {[0, 1].map((copy) =>
              PITCH_DECK_SERVICES.map((service, idx) => {
                const isActive = copy === 0 && idx === activeIndex;
                return (
                  <Link
                    key={`mobile-hero-service-${copy}-${service.id}`}
                    href={service.link}
                    className={`group/card relative flex w-[80vw] max-w-[290px] flex-shrink-0 flex-col justify-between rounded-2xl border p-3.5 transition-all duration-300 active:scale-[0.99] ${
                      isActive
                        ? 'border-[#DE4A5C]/60 bg-[#121212] shadow-[0_10px_30px_rgba(0,0,0,0.8)] shadow-[#C83A4B]/10'
                        : 'border-white/[0.08] bg-[#0E0E0E] opacity-90'
                    }`}
                  >
                    {/* Thumbnail & Badges */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-black border border-white/[0.06]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-black/20 to-transparent" />

                      {/* Category & Badge */}
                      <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1">
                        <span className="rounded-full border border-white/20 bg-black/85 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[#F4F1EC] backdrop-blur-md">
                          {service.categoryLabel.split(' ')[0]}
                        </span>
                        <span className="rounded-full bg-[#C83A4B] px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white shadow-sm">
                          {service.badge}
                        </span>
                      </div>

                      <div className="absolute bottom-2 right-2 rounded-lg border border-white/20 bg-black/80 p-1 text-white backdrop-blur-md">
                        <Maximize2 size={11} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-2.5 flex flex-1 flex-col justify-between">
                      <div>
                        <h3
                          className={`text-[13.5px] font-semibold transition-colors line-clamp-1 ${
                            isActive ? 'text-[#DE4A5C]' : 'text-[#F4F1EC]'
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p className="mt-1 text-[11px] leading-relaxed text-[#8A8A8A] line-clamp-2">
                          {service.description}
                        </p>
                      </div>

                      {/* Metrics */}
                      <div className="mt-2.5 grid grid-cols-2 gap-1.5 border-t border-white/[0.06] pt-2">
                        {service.metrics.slice(0, 2).map((m) => (
                          <div
                            key={m.label}
                            className="rounded-lg border border-white/[0.04] bg-white/[0.03] p-1.5"
                          >
                            <div className="truncate text-[8.5px] font-semibold uppercase text-[#7A7A7A]">
                              {m.label}
                            </div>
                            <div className="mt-0.5 truncate text-[10.5px] font-bold text-[#F4F1EC]">
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Footer CTA */}
                      <div className="mt-2.5 flex items-center justify-between border-t border-white/[0.04] pt-2 text-[10.5px] font-semibold uppercase tracking-wider text-[#DE4A5C]">
                        <span>Inspect Solution</span>
                        <ArrowRight
                          size={11}
                          className="transition-transform group-hover/card:translate-x-0.5"
                        />
                      </div>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP EXPERIENCE: SEAMLESS CONTINUOUS ROLLING MARQUEE (sm:)             */}
      {/* ========================================================================= */}
      <div className="hidden sm:block relative w-full overflow-hidden py-3 group">
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#080808] via-[#080808]/85 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 w-max animate-marquee-ltr" style={{ willChange: 'transform' }}>
          {rollingItems.map((service, idx) => (
            <Link
              key={`desktop-hero-service-${service.id}-${idx}`}
              href={service.link}
              className="group/card relative flex w-[280px] lg:w-[320px] flex-shrink-0 flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0E0E0E] hover:bg-[#141414] p-4 cursor-pointer transition-all duration-300 hover:border-[#DE4A5C]/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
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
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
                  <span className="rounded-full border border-white/15 bg-black/85 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-[#F4F1EC] backdrop-blur-md">
                    {service.categoryLabel.split(' ')[0]}
                  </span>
                  <span className="rounded-full bg-[#C83A4B] px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-white shadow-sm">
                    {service.badge}
                  </span>
                </div>
                <div className="absolute bottom-2 right-2 opacity-0 group-hover/card:opacity-100 transition-opacity bg-black/80 backdrop-blur-md border border-white/20 text-white rounded-lg p-1.5">
                  <Maximize2 size={12} />
                </div>
              </div>

              {/* Content */}
              <div className="mt-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="line-clamp-1 text-[14.5px] font-semibold text-[#F4F1EC] transition-colors group-hover/card:text-[#DE4A5C]">
                    {service.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[12px] leading-relaxed text-[#8A8A8A]">
                    {service.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="mt-3 grid grid-cols-2 gap-1.5 pt-2.5 border-t border-white/[0.06]">
                  {service.metrics.slice(0, 2).map((m: { label: string; value: string }) => (
                    <div
                      key={m.label}
                      className="bg-white/[0.03] rounded-lg p-1.5 border border-white/[0.04]"
                    >
                      <div className="text-[9px] uppercase font-semibold text-[#7A7A7A] truncate">
                        {m.label}
                      </div>
                      <div className="mt-0.5 text-[11.5px] font-bold text-[#F4F1EC] truncate">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/[0.04] text-[11px] font-semibold uppercase tracking-wider text-[#DE4A5C]">
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
