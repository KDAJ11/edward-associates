import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = generatePageMetadata({
  title: "About Edward | Toronto Tax Accountant with 15+ Years Experience",
  description:
    "Meet Edward — Toronto's trusted tax professional since 2009. Serving individuals, families, and businesses from 398 Bloor Street West with expert, personalised tax and accounting services.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-green-950 py-20 md:py-28">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <div
                className="bg-brand-green-900 rounded-xl aspect-[3/4] flex items-center justify-center"
                aria-label="Edward — Principal of Edward and Associates"
              >
                <span
                  className="font-heading text-8xl font-bold text-white/20"
                  aria-hidden="true"
                >
                  E
                </span>
              </div>
            </div>
            <div className="lg:col-span-3">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-[-0.02em] mb-6">
                About Edward
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                For over 15 years, Edward has built a reputation as one of
                Toronto&apos;s most dependable tax professionals. With a deep
                understanding of Canadian tax law, a commitment to personal
                service, and a track record of results, Edward has helped more
                than 1,000 individuals, families, and businesses navigate the
                complexities of tax preparation, planning, and CRA compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-24">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Our Philosophy"
            heading="Our Approach"
            align="left"
          />
          <div className="max-w-3xl space-y-6">
            <p className="text-slate-600 leading-relaxed">
              At Edward &amp; Associates, thoroughness is not optional — it is the
              foundation of everything we do. Every return, every financial
              statement, and every piece of advice is double-checked and verified
              before it leaves our office. We believe that attention to detail is
              what separates adequate tax preparation from excellent tax
              preparation, and our clients deserve the latter.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Honesty and transparency guide every client relationship. We never
              promise results we cannot deliver, and we always explain our work
              in clear, straightforward language. You will never be left
              wondering why a decision was made or what your options are. We lay
              everything on the table and help you choose the best path forward.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Above all, we put our clients first. Your financial wellbeing is
              our priority, and we treat your finances with the same diligence
              and care we would apply to our own. This client-first mindset has
              earned us a 4.9-star Google rating and the loyalty of families and
              businesses who have trusted us for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Qualifications"
            heading="Credentials & Experience"
            align="left"
          />
          <div className="max-w-3xl">
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-gold-600 flex-shrink-0 mt-2" aria-hidden="true" />
                Over 15 years of professional tax preparation and accounting experience
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-gold-600 flex-shrink-0 mt-2" aria-hidden="true" />
                Expert knowledge of personal and corporate Canadian tax law
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-gold-600 flex-shrink-0 mt-2" aria-hidden="true" />
                Specialisation in CRA audit representation and dispute resolution
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-gold-600 flex-shrink-0 mt-2" aria-hidden="true" />
                Comprehensive bookkeeping, HST filing, and payroll services
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-gold-600 flex-shrink-0 mt-2" aria-hidden="true" />
                Cross-border tax experience for clients with US and international income
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-gold-600 flex-shrink-0 mt-2" aria-hidden="true" />
                Proven track record: 1,000+ clients served, 4.9-star Google rating
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-white py-24">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Visit Us"
            heading="Our Location"
            align="left"
          />
          <div className="max-w-3xl space-y-6">
            <p className="text-slate-600 leading-relaxed">
              Our office at 398 Bloor Street West sits in the heart of downtown
              Toronto, steps from the Spadina subway station on Line 1 and Line
              2. Whether you prefer to visit in person, speak by phone, or
              handle everything remotely, we are here to accommodate your
              schedule and preferences.
            </p>
            <Button href="/contact" size="lg">
              Ready to work with Edward? Book a consultation.
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
