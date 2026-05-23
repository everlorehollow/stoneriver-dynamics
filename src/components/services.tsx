import { Target, Rocket, Headphones, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Target,
  Rocket,
  Headphones,
};

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export function Services({ services }: { services: ServiceItem[] }) {
  return (
    <section id="services" className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-secondary mb-12">
          What We Do
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                {Icon && (
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
