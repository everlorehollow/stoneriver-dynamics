import Link from "next/link";

interface ReadyToBuildProps {
  headline: string;
  subheadline: string;
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string } | null;
}

export function ReadyToBuild({
  headline,
  subheadline,
  cta,
  secondaryCta,
}: ReadyToBuildProps) {
  return (
    <section className="bg-[#133963] py-20 md:py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-7xl text-white uppercase">
          {headline}
        </h2>
        <p className="mt-5 text-white/80 max-w-xl mx-auto">{subheadline}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={cta.href}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#133963] font-semibold tracking-wide uppercase text-base hover:bg-[#f5f5f7] transition-colors"
          >
            {cta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold tracking-wide uppercase text-base hover:bg-white/10 transition-colors"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
