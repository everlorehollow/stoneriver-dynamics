import Link from "next/link";

interface HeroProps {
  config: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    cta: { label: string; href: string };
    secondaryCta?: { label: string; href: string } | null;
    video: { mp4: string; poster: string };
  };
}

export function Hero({ config }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden min-h-[calc(100vh-5rem)] flex items-center bg-[#0c2845]">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
        poster={config.video.poster}
      >
        <source src={config.video.mp4} type="video/mp4" />
      </video>

      {/* Dark gradient overlay for legibility */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#133963]/85 via-[#133963]/55 to-black/70"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="max-w-3xl">
          <p className="eyebrow text-[#f5f5f7]/80 mb-4 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#f5f5f7]/90" />
            {config.eyebrow}
          </p>
          <h1 className="font-display text-7xl md:text-9xl text-white">
            {config.headline}
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-white/85 max-w-xl font-light">
            {config.subheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href={config.cta.href}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#133963] font-semibold tracking-wide uppercase text-base hover:bg-[#f5f5f7] transition-colors"
            >
              {config.cta.label}
            </Link>
            {config.secondaryCta && (
              <Link
                href={config.secondaryCta.href}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold tracking-wide uppercase text-base hover:bg-white/10 transition-colors"
              >
                {config.secondaryCta.label} &gt;
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
