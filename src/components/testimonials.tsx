interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-secondary mb-12">
          What People Say
        </h2>
        <div className="grid gap-8">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100"
            >
              <p className="text-lg text-gray-700 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm text-gray-500">
                <span className="font-medium text-secondary">{t.name}</span>
                {" — "}
                {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
