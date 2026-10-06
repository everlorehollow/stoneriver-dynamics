import type { SiteConfig } from "../../site.config";

type FieldStoryProps = Pick<
  SiteConfig["fieldStory"],
  "story" | "pricing" | "impact" | "closing" | "video"
>;

export function FieldStory({
  story,
  pricing,
  impact,
  closing,
  video,
}: FieldStoryProps) {
  return (
    <section
      id="field-footage"
      aria-labelledby="field-footage-title"
      className="scroll-mt-28 bg-white px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 border-b border-[#133963]/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="field-footage-title"
            className="font-display text-4xl uppercase text-[#133963] md:text-5xl"
          >
            SIDEKICK on the jobsite
          </h2>
          <p className="text-sm font-medium text-[#133963]/70">
            Altadena, California
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
          <figure className="min-w-0">
            <div className="aspect-video overflow-hidden rounded-xl bg-[#0c2845]">
              <video
                className="h-full w-full object-cover"
                aria-label="SIDEKICK field debut in Altadena"
                aria-describedby="field-video-caption"
                poster={video.poster}
                preload="none"
                playsInline
                controls
              >
                <source
                  src={video.mp4Mobile}
                  type="video/mp4"
                  media="(max-width: 768px)"
                />
                <source src={video.mp4} type="video/mp4" />
                Your browser does not support embedded video.{" "}
                <a href={video.mp4}>Watch the Altadena field video.</a>
              </video>
            </div>
            <figcaption
              id="field-video-caption"
              className="mt-4 border-l-2 border-[#133963] pl-4 text-sm leading-relaxed text-[#133963]/70"
            >
              SIDEKICK&apos;s field debut, working alongside RIC Robotics on an
              Altadena rebuild.
            </figcaption>
          </figure>

          <div className="space-y-5 text-lg leading-relaxed text-[#133963]/80">
            {story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-xl border border-[#133963]/10 md:mt-16 lg:grid-cols-2">
          <aside
            aria-labelledby="accessible-design-title"
            className="bg-[#0c2845] p-7 text-white md:p-10"
          >
            <h3 id="accessible-design-title" className="eyebrow text-white/75">
              {pricing.eyebrow}
            </h3>
            <div className="mt-5 flex flex-wrap items-end gap-x-4 gap-y-2">
              <span className="font-display text-5xl leading-none md:text-6xl">
                {pricing.value}
              </span>
              <span className="pb-1 text-sm font-semibold uppercase tracking-wider text-white/70">
                {pricing.label}
              </span>
            </div>
            <p className="mt-5 max-w-xl leading-relaxed text-white/80">
              {pricing.body}
            </p>
          </aside>

          <div className="flex flex-col justify-center bg-[#f5f5f7] p-7 md:p-10">
            <p className="text-lg leading-relaxed text-[#133963]/80">{impact}</p>
            <p className="mt-6 border-t border-[#133963]/15 pt-6 font-display text-3xl uppercase leading-tight text-[#133963] md:text-4xl">
              {closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
