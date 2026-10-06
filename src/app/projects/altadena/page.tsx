import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "../../../../site.config";
import { FieldStory } from "@/components/field-story";
import { ReadyToBuild } from "@/components/ready-to-build";

const projectUrl = "https://www.stoneriverdynamics.com/projects/altadena";
const description =
  "See SIDEKICK's field debut in Altadena: a 3D-printed wall system for a homeowner rebuilding after the Eaton Fire, plus FOX 11 coverage of the project.";
const socialImage = {
  url: `https://www.stoneriverdynamics.com${siteConfig.fieldStory.video.poster}`,
  width: 1280,
  height: 720,
  alt: "SIDEKICK at the Altadena rebuild",
};

export const metadata: Metadata = {
  title: `${siteConfig.fieldStory.headline} — ${siteConfig.businessName}`,
  description,
  alternates: { canonical: projectUrl },
  openGraph: {
    type: "article",
    url: projectUrl,
    title: siteConfig.fieldStory.headline,
    description,
    siteName: siteConfig.businessName,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fieldStory.headline,
    description,
    images: [socialImage.url],
  },
};

export default function AltadenaProjectPage() {
  const project = siteConfig.fieldStory;

  return (
    <>
      <header className="bg-[#0c2845] px-6 pb-14 pt-8 text-white md:pb-20 md:pt-10">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-12 text-sm md:mb-16">
            <ol className="flex flex-wrap items-center gap-3 text-white/75">
              <li>
                <Link
                  href="/"
                  className="underline-offset-4 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                Altadena project
              </li>
            </ol>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow mb-5 text-white/70">{project.eyebrow}</p>
              <h1 className="max-w-2xl font-display text-6xl uppercase sm:text-7xl lg:text-8xl">
                {project.headline}
              </h1>
            </div>
            <div>
              <p className="max-w-xl text-xl font-medium leading-snug text-white/90 md:text-2xl">
                {project.lead}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-sm font-semibold">
                <a
                  href="#field-footage"
                  className="underline underline-offset-4 decoration-white/40 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Watch SIDEKICK in the field <span aria-hidden="true">↓</span>
                </a>
                <a
                  href="#news-coverage"
                  className="underline underline-offset-4 decoration-white/40 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  FOX 11 coverage <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <FieldStory {...project} />

      <section
        id="news-coverage"
        aria-labelledby="news-coverage-title"
        className="scroll-mt-28 border-t border-[#133963]/10 bg-[#f5f5f7] px-6 py-16 md:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)] lg:items-center lg:gap-14">
          <div>
            <p className="eyebrow mb-4 text-[#133963]/70">In the news</p>
            <h2
              id="news-coverage-title"
              className="font-display text-4xl uppercase text-[#133963] md:text-5xl"
            >
              {project.news.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#133963]/80">
              {project.news.description}
            </p>
            <a
              href={project.news.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-[#133963] underline decoration-[#133963]/35 underline-offset-4 hover:decoration-[#133963] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#133963]"
            >
              Watch on YouTube
              <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <figure className="min-w-0">
            <div className="aspect-video overflow-hidden rounded-xl bg-[#0c2845]">
              <iframe
                className="h-full w-full border-0"
                src={`https://www.youtube-nocookie.com/embed/${project.news.videoId}`}
                title={project.news.title}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <figcaption className="mt-4 text-sm leading-relaxed text-[#133963]/70">
              Reporting by FOX 11 News. Coverage features PCI Builders and the
              Altadena rebuild.
            </figcaption>
          </figure>
        </div>
      </section>

      <ReadyToBuild
        headline={siteConfig.readyToBuild.headline}
        subheadline={siteConfig.readyToBuild.subheadline}
        cta={siteConfig.readyToBuild.cta}
        secondaryCta={{ label: "Explore SIDEKICK features", href: "/#features" }}
      />
    </>
  );
}
