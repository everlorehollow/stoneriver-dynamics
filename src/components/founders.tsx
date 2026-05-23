import Image from "next/image";
import { Linkedin, UserRound } from "lucide-react";

interface Founder {
  name: string;
  title: string;
  bio: string;
  photo: string | null;
  linkedin: string | null;
}

interface FoundersProps {
  eyebrow: string;
  headline: string;
  items: Founder[];
}

export function Founders({ eyebrow, headline, items }: FoundersProps) {
  return (
    <section id="founders" className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="eyebrow text-[#133963]/70 mb-4">{eyebrow}</p>
          <h2 className="font-display text-5xl md:text-6xl text-[#133963] uppercase">
            {headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {items.map((founder) => (
            <article
              key={founder.name + founder.title}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="relative w-44 h-44 md:w-48 md:h-48 mb-6 rounded-full overflow-hidden bg-[#133963]/5 ring-4 ring-[#133963]/10">
                {founder.photo ? (
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#133963]/10 text-[#133963]/40">
                    <UserRound size={88} strokeWidth={1.25} />
                  </div>
                )}
              </div>

              <h3 className="font-display text-3xl md:text-4xl text-[#133963] uppercase">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-[#133963]/60">
                {founder.title}
              </p>
              <p className="mt-4 text-[#133963]/75 leading-relaxed max-w-md">
                {founder.bio}
              </p>

              {founder.linkedin && (
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[#133963] hover:text-[#0c2845] text-sm font-semibold uppercase tracking-wide"
                  aria-label={`${founder.name} on LinkedIn`}
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
