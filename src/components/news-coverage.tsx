import type { SiteConfig } from "../../site.config";

type NewsCoverageProps = {
  news: SiteConfig["fieldStory"]["news"];
};

export function NewsCoverage({ news }: NewsCoverageProps) {
  return (
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
            {news.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#133963]/80">
            {news.description}
          </p>
          <a
            href={news.watchUrl}
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
              src={`https://www.youtube-nocookie.com/embed/${news.videoId}`}
              title={news.title}
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
  );
}
