"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

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

  return (
    <section id="features" className="bg-[#f5f5f7] py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl md:text-6xl text-[#133963] text-center mb-16 uppercase">
          {headline}
        </h2>

        <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-12 items-start">
          {/* Tab list */}
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
                  <span className="font-semibold uppercase tracking-wide text-xs md:text-sm">
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

            {/* Bullet details for active tab */}
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

          {/* Image card */}
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            <div className="relative aspect-[4/3] md:aspect-[5/4]">
              <Image
                src={active.image}
                alt={active.caption}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
                priority={activeIndex === 0}
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="eyebrow text-[#133963] mb-1">
                {active.caption}
              </div>
              <p className="text-[#133963]/70 text-sm md:text-base">
                {active.captionDetail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
