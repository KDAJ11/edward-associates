import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/Card";
import { SERVICES } from "@/lib/constants";

export function ServicesGrid() {
  return (
    <section className="bg-white py-24 md:py-24" aria-labelledby="services-heading">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Our Services"
          heading="Comprehensive Tax & Accounting Solutions"
        />
        <div
          id="services-heading"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.href}
              title={service.title}
              description={service.description}
              href={service.href}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
