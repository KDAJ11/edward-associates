"use client";

import { Phone } from "lucide-react";
import { Button, outlineWhiteClasses } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { BUSINESS } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="bg-brand-green-950 min-h-[85vh] flex items-center"
      aria-label="Welcome to Edward and Associates"
    >
      <div className="max-w-content mx-auto px-4 md:px-6 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-3">
            <span className="inline-block bg-brand-gold-100 text-brand-gold-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Toronto&apos;s Most Trusted Tax Professional
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-[-0.02em] leading-tight mb-6">
              Expert Tax &amp; Accounting Services for Toronto Families &amp;
              Businesses
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              With over 15 years of trusted service, Edward &amp; Associates
              delivers precise, professional tax solutions that protect your
              wealth and give you confidence at every filing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
          </div>

          {/* Right: Stats */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-3 gap-6">
              <AnimatedCounter
                target={BUSINESS.stats.years}
                suffix="+"
                label="Years Experience"
                className="text-white"
              />
              <AnimatedCounter
                target={BUSINESS.stats.clients}
                suffix="+"
                label="Clients Served"
                className="text-white"
              />
              <div className="text-center">
                <p className="font-heading text-5xl font-bold tracking-[-0.02em] text-white">
                  {BUSINESS.stats.rating}
                  <span className="text-brand-gold-400">&#9733;</span>
                </p>
                <p className="mt-2 text-sm font-body uppercase tracking-[0.05em] text-white">
                  Google Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
