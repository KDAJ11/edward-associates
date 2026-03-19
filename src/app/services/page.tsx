import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/Card";
import { SERVICES } from "@/lib/constants";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = generatePageMetadata({
  title: "Tax & Accounting Services | Edward & Associates Toronto",
  description:
    "Personal tax returns, business tax, bookkeeping, corporate tax, tax planning, and CRA dispute resolution. Expert tax services in Toronto from Edward & Associates.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-green-950 py-20 md:py-28">
        <div className="max-w-content mx-auto px-4 md:px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-[-0.02em] mb-4">
            Our Tax &amp; Accounting Services
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            From personal tax returns to complex corporate filings and CRA
            dispute resolution, Edward &amp; Associates provides the full
            spectrum of tax and accounting services Toronto residents and
            businesses need.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-24">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="What We Do"
            heading="Comprehensive Solutions for Every Tax Need"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <CTABanner />
    </>
  );
}
