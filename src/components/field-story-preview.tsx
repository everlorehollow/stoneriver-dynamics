import Image from "next/image";
import Link from "next/link";

interface FieldStoryPreviewProps {
  story: {
    href: string;
    eyebrow: string;
    headline: string;
    summary: string;
    video: { poster: string };
  };
}

export function FieldStoryPreview({ story }: FieldStoryPreviewProps) {
  return (
    <section
      aria-labelledby="altadena-preview-title"
      className="bg-[#f5f5f7] px-6 py-14 md:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        <Link
          href={story.href}
          aria-label="Explore the Altadena project"
          className="group relative block aspect-video overflow-hidden rounded-xl bg-[#0c2845] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#133963]"
        >
          <Image
            src={story.video.poster}
            alt="SIDEKICK printing concrete walls at the Altadena rebuild"
            fill
            sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1328px) 46vw, 608px"
            className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <span className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 text-sm font-semibold uppercase tracking-wider text-white">
            Altadena, California
            <span aria-hidden="true" className="text-2xl">↗</span>
          </span>
        </Link>

        <div>
          <p className="eyebrow mb-4 text-[#133963]/70">{story.eyebrow}</p>
          <h2
            id="altadena-preview-title"
            className="font-display text-4xl uppercase text-[#133963] sm:text-5xl lg:text-6xl"
          >
            {story.headline}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#133963]/80">
            {story.summary}
          </p>
          <Link
            href={story.href}
            className="mt-6 inline-flex min-h-12 items-center gap-3 bg-[#133963] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#0c2845] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#133963]"
          >
            Explore the Altadena project <span aria-hidden="true">→</span>
          </Link>
          <div className="mt-4">
            <Link
              href={`${story.href}#news-coverage`}
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#133963] underline decoration-[#133963]/30 underline-offset-4 hover:decoration-[#133963] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#133963]"
            >
              Watch the FOX 11 coverage <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
