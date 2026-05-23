"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

interface FeatureItem {
  title: string;
  caption: string;
  captionDetail: string;
  image: string;
  bullets?: string[];
}

interface FeaturesProps {
  headline: string;
  items: FeatureItem[];
}

export function Features({ headline, items }: FeaturesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  function prev() {
    setActiveIndex((i) => (i - 1 + items.length) % items.length);
  }

  function next() {
    setActiveIndex((i) => (i + 1) % items.length);
  }

  return (
    <section id="features" className="bg-[#f5f5f7] py-16 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl md:text-6xl text-[#133963] text-center mb-10 md:mb-16 uppercase">
          {headline}
        </h2>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={active.image}
                alt={active.caption}
                fill
                sizes="100vw"
                className="object-cover"
                priority={activeIndex === 0}
              />
            </div>
            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-[#133963] hover:bg-white transition-colors"
                  aria-label="Previous feature"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-[#133963] hover:bg-white transition-colors"
                  aria-label="Next feature"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}
          </div>

          <div className="text-center pt-6 px-2">
            <h3 className="font-display text-2xl uppercase text-[#133963] tracking-wider">
              {active.title}
            </h3>
            <p className="mt-3 text-[#133963]/75 text-sm leading-relaxed">
              {active.captionDetail}
            </p>
          </div>

          {active.bullets && active.bullets.length > 0 && (
            <ul className="mt-5 space-y-3 text-sm text-[#133963]/80 px-1">
              {active.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#133963] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Scrollable tab pills */}
          <div className="mt-7 -mx-6 px-6 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex gap-3 min-w-max">
              {items.map((item, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wide whitespace-nowrap border transition-colors ${
                      isActive
                        ? "bg-[#133963] text-white border-[#133963]"
                        : "bg-white text-[#133963] border-[#133963]/20"
                    }`}
                    aria-pressed={isActive}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop tab list + image card */}
        <div className="hidden md:grid md:grid-cols-[1fr_1.6fr] gap-12 items-start">
          <div className="flex flex-col gap-3">
            {items.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`group flex items-center justify-between gap-4 px-6 py-4 rounded-full text-left transition-all border ${
                    isActive
                      ? "bg-[#133963] text-white border-[#133963] shadow-md"
                      : "bg-white text-[#133963] border-[#133963]/15 hover:border-[#133963]/40"
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="font-semibold uppercase tracking-wide text-sm">
                    {item.title}
                  </span>
                  <Plus
                    size={18}
                    className={`shrink-0 transition-transform ${
                      isActive ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </button>
              );
            })}

            {active.bullets && active.bullets.length > 0 && (
              <ul className="mt-6 space-y-3 text-sm text-[#133963]/80 px-2">
                {active.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#133963] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            <div className="relative aspect-[5/4]">
              <Image
                src={active.image}
                alt={active.caption}
                fill
                sizes="60vw"
                className="object-cover"
                priority={activeIndex === 0}
              />
            </div>
            <div className="p-8">
              <div className="eyebrow text-[#133963] mb-1">
                {active.caption}
              </div>
              <p className="text-[#133963]/70 text-base">
                {active.captionDetail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
