interface Stat {
  value: string;
  label: string;
}

export function Stats({ items }: { items: Stat[] }) {
  const desktopCols =
    items.length === 3
      ? "md:grid-cols-3"
      : items.length === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-4";

  return (
    <section className="bg-[#133963] py-12 md:py-16 px-6">
      <div className={`max-w-7xl mx-auto grid grid-cols-2 ${desktopCols} gap-y-10 gap-x-6`}>
        {items.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <div className="font-display text-5xl md:text-6xl text-white">
              {stat.value}
            </div>
            <div className="mt-1 text-sm md:text-base font-semibold uppercase tracking-widest text-white/60">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
