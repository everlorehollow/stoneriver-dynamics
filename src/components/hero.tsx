import Link from "next/link";

interface HeroProps {
  config: {
    headline: string;
    subheadline: string;
    cta: { label: string; href: string };
    secondaryCta?: { label: string; href: string } | null;
    image?: string | null;
  };
}

export function Hero({ config }: HeroProps) {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-secondary">
          {config.headline}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {config.subheadline}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={config.cta.href}
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition-opacity"
          >
            {config.cta.label}
          </Link>
          {config.secondaryCta && (
            <Link
              href={config.secondaryCta.href}
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              {config.secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
