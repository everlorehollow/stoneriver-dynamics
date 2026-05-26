interface FoundationProps {
  eyebrow: string;
  quote?: string;
  body: string;
  tagline: string;
}

export function Foundation({ eyebrow, quote, body, tagline }: FoundationProps) {
  return (
    <section className="bg-[#f5f5f7] py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="eyebrow text-[#133963]/70 mb-6">{eyebrow}</p>

        {quote && (
          <blockquote className="border-l-4 border-[#133963] pl-6 md:pl-8">
            <p className="font-display text-3xl md:text-5xl text-[#133963] leading-tight uppercase">
              &ldquo;{quote}&rdquo;
            </p>
          </blockquote>
        )}

        <p className={`${quote ? "mt-8" : ""} text-[#133963]/75 text-base md:text-lg leading-relaxed max-w-3xl`}>
          {body}
        </p>

        <div className="mt-10 flex items-center gap-4">
          <div className="h-px w-12 bg-[#133963]" />
          <span className="eyebrow text-[#133963]">{tagline}</span>
        </div>
      </div>
    </section>
  );
}
