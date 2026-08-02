"use client";

import { useRef, useState } from "react";

interface FieldStoryProps {
  eyebrow: string;
  headline: string;
  lead: string;
  details: string[];
  story: string[];
  pricing: {
    eyebrow: string;
    value: string;
    label: string;
    body: string;
  };
  impact: string;
  closing: string;
  video: {
    mp4: string;
    mp4Mobile: string;
    poster: string;
  };
}

export function FieldStory({
  eyebrow,
  headline,
  lead,
  details,
  story,
  pricing,
  impact,
  closing,
  video,
}: FieldStoryProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    void videoRef.current?.play();
  }

  return (
    <section
      aria-labelledby="altadena-story-title"
      className="relative isolate overflow-hidden bg-[#f5f5f7] px-6 py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-16 -z-10 h-96 w-96 rounded-full bg-[#133963]/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-[#133963]/15 pb-10 md:pb-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow mb-4 flex items-center gap-2 text-[#133963]/70">
              <span className="inline-block h-2 w-2 rounded-full bg-[#133963]" />
              {eyebrow}
            </p>
            <h2
              id="altadena-story-title"
              className="font-display text-5xl uppercase text-[#133963] sm:text-6xl md:text-7xl"
            >
              {headline}
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-xl font-medium leading-snug text-[#133963] md:text-3xl md:leading-tight">
              {lead}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#133963]/60">
              {details.map((detail) => (
                <span key={detail} className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#133963]/50" />
                  {detail}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1.55fr)_minmax(19rem,0.75fr)] lg:items-center lg:gap-14">
          <div>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#133963]/25 via-white to-[#133963]/10"
              />
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl shadow-[#0c2845]/20">
                <video
                  ref={videoRef}
                  className="absolute inset-0 h-full w-full object-cover"
                  poster={video.poster}
                  preload="metadata"
                  playsInline
                  controls={isPlaying}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source
                    src={video.mp4Mobile}
                    type="video/mp4"
                    media="(max-width: 768px)"
                  />
                  <source src={video.mp4} type="video/mp4" />
                  Sorry, your browser doesn&apos;t support embedded video.
                </video>

                {!isPlaying && (
                  <button
                    type="button"
                    onClick={handlePlay}
                    aria-label="Play the Altadena rebuild video"
                    className="group absolute inset-0 flex items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80 focus-visible:ring-inset"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/25 transition-colors group-hover:from-black/55"
                    />
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#0c2845] shadow-2xl transition-transform group-hover:scale-105 group-active:scale-95 md:h-20 md:w-20">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="ml-1 h-8 w-8 md:h-9 md:w-9"
                        aria-hidden
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    <span className="absolute bottom-5 left-5 right-5 text-left text-sm font-semibold uppercase tracking-[0.12em] text-white drop-shadow-md md:bottom-7 md:left-7 md:right-7">
                      Watch SIDEKICK in the field
                    </span>
                  </button>
                )}
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-1 border-l-2 border-[#133963] pl-4 text-sm text-[#133963]/60 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-semibold uppercase tracking-[0.12em] text-[#133963]">
                SIDEKICK field debut
              </span>
              <span>Altadena, California</span>
            </div>
          </div>

          <div>
            <div className="space-y-5 text-base leading-relaxed text-[#133963]/75 md:text-lg">
              {story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-xl shadow-[#0c2845]/10 md:mt-12 lg:grid lg:grid-cols-[1.05fr_0.95fr]">
          <aside className="relative overflow-hidden bg-[#0c2845] p-6 text-white md:p-8 lg:p-10">
            <div
              aria-hidden
              className="absolute -bottom-20 -right-12 h-56 w-56 rounded-full bg-[#1d4f80] blur-3xl"
            />
            <div className="relative">
              <p className="eyebrow text-white/60">{pricing.eyebrow}</p>
              <div className="mt-5 flex flex-wrap items-end gap-x-4 gap-y-2">
                <span className="font-display text-5xl leading-none md:text-6xl">
                  {pricing.value}
                </span>
                <span className="pb-1 text-sm font-semibold uppercase tracking-wider text-white/60">
                  {pricing.label}
                </span>
              </div>
              <p className="mt-5 max-w-xl leading-relaxed text-white/75">
                {pricing.body}
              </p>
            </div>
          </aside>

          <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
            <p className="text-base leading-relaxed text-[#133963]/75 md:text-lg">
              {impact}
            </p>

            <div className="mt-6 border-t border-[#133963]/20 pt-6">
              <p className="font-display text-2xl uppercase leading-tight text-[#133963] md:text-3xl lg:text-4xl">
                {closing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
