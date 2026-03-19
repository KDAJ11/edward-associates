import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

const tips = [
  {
    number: "01",
    title: "Keep Digital Records",
    description:
      "Photograph or scan every receipt and store them in organised folders by category. The CRA accepts digital records, and having everything in one place makes tax time faster and ensures you never miss a deduction.",
  },
  {
    number: "02",
    title: "Maximise Your RRSP",
    description:
      "Contribute to your RRSP before the March deadline to reduce your taxable income for the previous year. Even small contributions compound over time and can significantly lower your tax bill.",
  },
  {
    number: "03",
    title: "Track Medical Expenses",
    description:
      "Many Canadians overlook eligible medical expenses like dental work, prescriptions, and travel costs for medical treatment. Keep a running tally throughout the year — these deductions add up quickly.",
  },
];

export function TaxTipsPreview() {
  return (
    <section
      className="bg-brand-green-50 py-24 md:py-24"
      aria-labelledby="tips-heading"
    >
      <div className="max-w-content mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Expert Advice"
          heading="Tax Tips That Save You Money"
        />
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          id="tips-heading"
        >
          {tips.map((tip) => (
            <div
              key={tip.number}
              className="bg-white rounded-xl p-6 border-l-4 border-brand-gold-600"
            >
              <span className="text-sm font-bold text-brand-gold-600 font-body">
                {tip.number}
              </span>
              <h3 className="font-heading text-lg font-semibold text-slate-950 mt-2 mb-3 tracking-[-0.02em]">
                {tip.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="text-brand-gold-600 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:ring-offset-2 rounded-sm"
          >
            View All Tax Tips on Our Blog &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
