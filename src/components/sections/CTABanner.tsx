import { Phone } from "lucide-react";
import { Button, outlineWhiteClasses } from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

export function CTABanner() {
  return (
    <section
      className="cta-banner bg-brand-green-900 py-24 md:py-24"
      aria-label="Call to action"
    >
      <div className="max-w-content mx-auto px-4 md:px-6 text-center">
        {/* Decorative gold line */}
        <div
          className="w-16 h-[2px] bg-brand-gold-600 mx-auto mb-10"
          aria-hidden="true"
        />

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-[-0.02em] mb-4">
          Ready to Get Your Taxes Done Right?
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
          Join over 1,000 satisfied Toronto clients. Book your consultation
          today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" size="lg">
            Book a Consultation
          </Button>
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 px-8 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:ring-offset-2 hover:scale-[1.02] ${outlineWhiteClasses}`}
          >
            <Phone className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
            Call {BUSINESS.phone}
          </a>
        </div>

        {/* Decorative gold line */}
        <div
          className="w-16 h-[2px] bg-brand-gold-600 mx-auto mt-10"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
