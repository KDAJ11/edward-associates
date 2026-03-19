import { Award, Users, DollarSign, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const differentiators = [
  {
    icon: Award,
    title: "15+ Years of Proven Expertise",
    description:
      "Deep knowledge of Canadian tax law and CRA processes honed over thousands of successful filings.",
  },
  {
    icon: Users,
    title: "Direct, Personal Service",
    description:
      "Work directly with Edward — no call centres, no junior staff, no runaround. Just straightforward, expert advice.",
  },
  {
    icon: DollarSign,
    title: "Maximum Refunds, Every Time",
    description:
      "Meticulous attention to every deduction and credit you're entitled to. Our clients consistently receive higher refunds.",
  },
  {
    icon: Clock,
    title: "Fast, Reliable Turnaround",
    description:
      "Most returns completed within days. You'll never miss a deadline or wait weeks for results.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="bg-slate-50 py-24 md:py-24"
      aria-labelledby="why-choose-heading"
    >
      <div className="max-w-content mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Why Choose Edward"
          heading="More Than Tax Preparation — A Trusted Financial Partner"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Quote */}
          <div className="bg-white rounded-xl p-8 md:p-10 border border-slate-200">
            <blockquote>
              <p className="font-heading text-2xl italic text-brand-green-800 leading-relaxed mb-6">
                &ldquo;I treat every client&apos;s finances as if they were my
                own. That&apos;s been my promise for over 15 years.&rdquo;
              </p>
              <footer className="font-body text-slate-600">
                — <strong>Edward</strong>, Principal
              </footer>
            </blockquote>
          </div>

          {/* Differentiators */}
          <div className="space-y-8" id="why-choose-heading">
            {differentiators.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <item.icon
                    className="w-6 h-6 text-brand-gold-600"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-slate-950 mb-1 tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
