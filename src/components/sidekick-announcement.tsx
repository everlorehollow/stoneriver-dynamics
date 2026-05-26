"use client";

import { useRef, useState } from "react";

interface SidekickAnnouncementProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  video: {
    mp4: string;
    mp4Mobile: string;
    poster: string;
  };
}

export function SidekickAnnouncement({
  eyebrow,
  headline,
  subheadline,
  video,
}: SidekickAnnouncementProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    el.play();
    setIsPlaying(true);
  };

  return (
    <section className="relative bg-[#0c2845] py-20 md:py-28 px-6 overflow-hidden">
      {/* Subtle texture: angled accent line in upper left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#133963] blur-3xl opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-[#133963] blur-3xl opacity-40"
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="eyebrow text-white/70 mb-4 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-white/90" />
            {eyebrow}
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase">
            {headline}
          </h2>
          <p className="mt-5 text-lg md:text-xl text-white/80 font-light leading-relaxed">
            {subheadline}
          </p>
        </div>

        {/* Video frame */}
        <div className="relative">
          {/* Accent border frame */}
          <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-br from-white/20 via-white/5 to-white/20 rounded-2xl" aria-hidden />
          <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl shadow-black/50 aspect-video">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              poster={video.poster}
              preload="metadata"
              playsInline
              controls={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              {/* Mobile (small viewports): lighter 480p file */}
              <source
                src={video.mp4Mobile}
                type="video/mp4"
                media="(max-width: 768px)"
              />
              {/* Desktop / tablet: 720p file */}
              <source src={video.mp4} type="video/mp4" />
              Sorry, your browser doesn&apos;t support embedded video.
            </video>

            {/* Play overlay — hidden once playback starts */}
            {!isPlaying && (
              <button
                type="button"
                onClick={handlePlay}
                aria-label="Play announcement video"
                className="absolute inset-0 flex items-center justify-center group focus:outline-none"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 group-hover:from-black/50 group-hover:to-black/30 transition-colors"
                  aria-hidden
                />
                <span className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-[#0c2845] shadow-2xl group-hover:scale-105 group-active:scale-95 transition-transform">
                  {/* Play triangle */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 md:w-10 md:h-10 ml-1"
                    aria-hidden
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="absolute bottom-6 left-6 md:bottom-8 md:left-8 right-6 md:right-8 text-white font-semibold tracking-wide uppercase text-sm md:text-base drop-shadow-md">
                  Watch the announcement
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
