import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../../site.config";
import { Stats } from "@/components/stats";
import { ReadyToBuild } from "@/components/ready-to-build";

export const metadata: Metadata = {
  title: `Sidekick Specifications — ${siteConfig.businessName}`,
  description:
    "Full specifications for the Sidekick — Stone River Dynamics' affordable, KUKA-powered 3D concrete printing system.",
};

export default function SidekickPage() {
  const { specs } = siteConfig;

  return (
    <>
      {/* Header band */}
      <section className="bg-[#133963] text-white py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="eyebrow text-white/60 hover:text-white transition-colors mb-6 inline-block"
          >
            &larr; Back to Home
          </Link>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase">
            {specs.headline}
          </h1>
          <p className="mt-6 text-white/80 text-lg md:text-xl max-w-3xl leading-relaxed">
            {specs.intro}
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <Stats items={siteConfig.stats} />

      {/* Features + Specs grid */}
      <section id="specifications" className="bg-[#f5f5f7] py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="eyebrow text-[#133963]/70 mb-4">Features</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#133963] uppercase mb-8">
              What it does
            </h2>
            <ul className="space-y-4">
              {specs.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-4 text-[#133963]/85 leading-relaxed"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#133963] shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[#133963]/70 mb-4">Specifications</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#133963] uppercase mb-8">
              The numbers
            </h2>
            <dl className="divide-y divide-[#133963]/15">
              {specs.specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="py-4 grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-4"
                >
                  <dt className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#133963]/60">
                    {spec.label}
                  </dt>
                  <dd className="text-sm md:text-base text-[#133963]">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow text-[#133963]/70 mb-4 text-center">
            The Sidekick
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[#133963] uppercase text-center mb-12">
            In the workshop
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {specs.galleryImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#f5f5f7]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReadyToBuild
        headline={siteConfig.readyToBuild.headline}
        subheadline={siteConfig.readyToBuild.subheadline}
        cta={{
          label: siteConfig.readyToBuild.cta.label,
          href: "/#contact",
        }}
        secondaryCta={null}
      />
    </>
  );
}
