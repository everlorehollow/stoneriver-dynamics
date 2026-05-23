import Link from "next/link";

interface ContactProps {
  config: {
    headline: string;
    subheadline: string;
    cta: { label: string; href: string };
    email?: string | null;
    phone?: string | null;
  };
}

export function Contact({ config }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-secondary text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{config.headline}</h2>
        <p className="text-gray-300 text-lg mb-8">{config.subheadline}</p>
        <Link
          href={config.cta.href}
          className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition-opacity"
        >
          {config.cta.label}
        </Link>
        {config.email && (
          <p className="mt-6 text-gray-400 text-sm">
            Or email us at{" "}
            <a href={`mailto:${config.email}`} className="underline">
              {config.email}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
