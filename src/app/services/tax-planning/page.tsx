import { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { Phone, Mail, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title:
    "Tax Planning Services Toronto | Reduce Your Tax Burden | Edward & Associates",
  description:
    "Proactive tax planning services in Toronto. Reduce your tax burden with RRSP strategies, income splitting, corporate structuring, and year-round advice from Edward & Associates.",
  path: "/services/tax-planning",
});

const faqs = [
  {
    question: "When should I start tax planning during the year?",
    answer:
      "The most effective tax planning starts at the beginning of your fiscal year, not in March or April when you are preparing to file. By January, we can project your expected income, identify opportunities to time deductions, and set up systematic RRSP contributions or instalment payments that reduce your year-end burden. That said, it is never too late to begin. Even mid-year planning sessions can uncover significant savings, particularly around capital gains timing, income splitting, and retirement account contributions. At Edward & Associates, we recommend a minimum of two planning touchpoints per year: one in January to set your strategy and one in September to make adjustments before year-end.",
  },
  {
    question: "What is the difference between an RRSP and a TFSA, and which should I prioritise?",
    answer:
      "An RRSP (Registered Retirement Savings Plan) gives you an immediate tax deduction when you contribute, and your investments grow tax-free until withdrawal, at which point the funds are taxed as income. A TFSA (Tax-Free Savings Account) offers no deduction on contribution, but all growth and withdrawals are completely tax-free for life. The general rule is that if your current marginal tax rate is higher than what you expect in retirement, the RRSP is more advantageous because you get a deduction at a high rate and pay tax at a lower rate on withdrawal. If your income is modest now but expected to grow, the TFSA is often the better choice. For many Toronto professionals and business owners, the optimal strategy involves contributing to both accounts in a carefully sequenced manner that we help you determine.",
  },
  {
    question: "How much can I realistically save through proactive tax planning?",
    answer:
      "The savings depend entirely on your income level, sources of income, and financial complexity, but they are often substantial. A business owner earning $200,000 annually who has not optimised their salary-dividend mix, RRSP contributions, and corporate structure can typically save between $10,000 and $30,000 per year through proper planning. For high-income professionals, strategies like individual pension plans, prescribed-rate loans for income splitting, and capital gains reserves can yield even larger benefits. We have seen Toronto clients reduce their effective tax rates by five to ten percentage points through disciplined, year-round planning. During your initial consultation, we provide a preliminary estimate of potential savings based on your specific situation so you can make an informed decision about engaging our services.",
  },
];

export default function TaxPlanningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-brand-green-950 py-20 md:py-28">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-gold-400">Tax Planning</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-[-0.02em] mb-4 max-w-3xl">
            Proactive Tax Planning Services in Toronto
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Stop reacting to tax season and start planning for it. Edward &amp;
            Associates provides year-round tax planning strategies that legally
            reduce your tax burden through RRSP optimisation, income splitting,
            corporate structuring, and disciplined capital gains management.
          </p>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-20">
              {/* What We Offer */}
              <div>
                <SectionHeading
                  eyebrow="What We Offer"
                  heading="Year-Round Tax Planning That Delivers Results"
                  align="left"
                />
                <div className="prose prose-slate max-w-none space-y-5 text-base text-slate-600 leading-relaxed">
                  <p>
                    Most Canadians think about taxes once a year, typically in
                    the weeks before the April filing deadline. By that point,
                    the tax year is closed and the opportunities to reduce your
                    liability have largely passed. At Edward &amp; Associates, we
                    take a fundamentally different approach. Our tax planning
                    services are designed to be proactive, not reactive. We work
                    with you throughout the year to identify strategies that
                    reduce your overall tax burden legally and sustainably. This
                    is not about aggressive schemes or grey-area deductions. It
                    is about understanding the Canadian tax system thoroughly and
                    using every legitimate tool available to keep more of what
                    you earn.
                  </p>
                  <p>
                    RRSP and TFSA optimisation forms the foundation of personal
                    tax planning for most Toronto residents. Knowing how much to
                    contribute, when to contribute, and which account to
                    prioritise can save you thousands of dollars over your
                    lifetime. We analyse your current marginal tax rate, your
                    projected retirement income, and your short-term cash needs
                    to determine the ideal contribution strategy. For
                    higher-income earners, we also explore individual pension
                    plans (IPPs) and retirement compensation arrangements (RCAs)
                    that offer contribution limits well beyond what an RRSP
                    allows. These vehicles are particularly effective for
                    incorporated professionals and business owners in Toronto who
                    have maximised their RRSP room and are looking for additional
                    tax-sheltered retirement savings.
                  </p>
                  <p>
                    Income splitting remains one of the most powerful tax
                    planning tools for Canadian families, though recent
                    legislation has narrowed the available strategies. The tax on
                    split income (TOSI) rules introduced in 2018 significantly
                    restricted the ability to pay dividends to family members
                    through a private corporation. However, legitimate
                    opportunities still exist. Spousal RRSPs, pension income
                    splitting for retirees, prescribed-rate loans to a spousal
                    trust or corporation, and hiring family members who perform
                    genuine work for the business all remain effective when
                    implemented correctly. We help Toronto families navigate
                    these rules carefully, ensuring every strategy is fully
                    compliant with CRA requirements while still delivering
                    meaningful tax savings across the household.
                  </p>
                  <p>
                    For business owners, tax planning extends into corporate
                    structuring, capital gains management, and the timing of
                    income and deductions. Deciding when to purchase capital
                    assets, whether to defer income recognition, and how to
                    structure the sale of a business can each have six-figure tax
                    implications. Estate planning is another critical dimension
                    that many Toronto professionals overlook until it is too
                    late. Ensuring your shares are structured to qualify for the
                    lifetime capital gains exemption, establishing an estate
                    freeze at the right time, and coordinating your corporate
                    and personal planning can protect your family from
                    unnecessary tax exposure at the time of your passing or
                    retirement. Edward &amp; Associates brings all of these
                    elements together into a cohesive, forward-looking plan that
                    evolves as your circumstances change.
                  </p>
                </div>
              </div>

              {/* Who Is This For? */}
              <div>
                <SectionHeading
                  eyebrow="Who Is This For?"
                  heading="Tax Planning Clients We Serve"
                  align="left"
                />
                <ul className="space-y-3 text-base text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-gold-600 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-950">High-income individuals</strong>{" "}
                      including professionals, executives, and commission-based
                      earners who want to reduce their marginal tax rate through
                      strategic use of registered accounts, deductions, and
                      credits.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-gold-600 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-950">Business owners planning for growth</strong>{" "}
                      who need to align their corporate tax strategy with
                      expansion plans, major purchases, or the eventual sale of
                      their business.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-gold-600 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-950">Retirees and near-retirees</strong>{" "}
                      who want to minimise taxes on pension income, RRIF
                      withdrawals, and investment returns while preserving
                      eligibility for income-tested benefits like OAS.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-gold-600 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-950">Families</strong> looking to
                      take advantage of legitimate income splitting
                      opportunities, spousal RRSP strategies, and education
                      savings plans to reduce their combined household tax bill.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-gold-600 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-950">Anyone who feels they are paying too much tax</strong>{" "}
                      and wants a professional assessment of whether legitimate
                      planning opportunities are being missed in their current
                      approach.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Our Process */}
              <div>
                <SectionHeading
                  eyebrow="Our Process"
                  heading="How Our Tax Planning Engagement Works"
                  align="left"
                />
                <ol className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Comprehensive Financial Review",
                      description:
                        "We start by gathering a complete picture of your financial situation: income sources, investments, corporate structures, family circumstances, and future goals. This forms the foundation for every recommendation we make.",
                    },
                    {
                      step: "2",
                      title: "Strategy Development",
                      description:
                        "Based on our analysis, we develop a customised tax planning strategy that may include RRSP and TFSA optimisation, income splitting techniques, corporate restructuring, capital gains timing, and retirement income planning. Each recommendation is quantified so you can see the projected savings.",
                    },
                    {
                      step: "3",
                      title: "Implementation Plan",
                      description:
                        "We provide a clear, actionable plan with specific steps, timelines, and responsibilities. Where implementation involves other professionals such as lawyers or financial advisors, we coordinate with them to ensure seamless execution.",
                    },
                    {
                      step: "4",
                      title: "Ongoing Monitoring & Adjustment",
                      description:
                        "Tax laws change, and so do your circumstances. We schedule regular check-ins throughout the year to review your progress, adjust strategies as needed, and ensure you are capitalising on any new opportunities that arise from legislative changes or life events.",
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-5">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-green-950 text-white font-heading font-bold text-sm flex-shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-slate-950 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-base text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* FAQs */}
              <div>
                <SectionHeading
                  eyebrow="Common Questions"
                  heading="Tax Planning FAQs"
                  align="left"
                />
                <FAQAccordion items={faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="bg-white border border-slate-200 rounded-xl p-6 sticky top-24">
                <h3 className="font-heading text-lg font-semibold text-slate-950 mb-4">
                  Quick Contact
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Phone
                      className="w-5 h-5 text-brand-gold-600 flex-shrink-0"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <a
                      href={`tel:${BUSINESS.phoneTel}`}
                      className="text-sm text-slate-600 hover:text-brand-green-800"
                    >
                      {BUSINESS.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail
                      className="w-5 h-5 text-brand-gold-600 flex-shrink-0"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="text-sm text-slate-600 hover:text-brand-green-800"
                    >
                      {BUSINESS.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock
                      className="w-5 h-5 text-brand-gold-600 flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <div className="text-sm text-slate-600 space-y-1">
                      <p>{BUSINESS.hours.weekday}</p>
                      <p>{BUSINESS.hours.saturday}</p>
                    </div>
                  </li>
                </ul>
                <Button href="/contact" size="md" className="w-full mt-6">
                  Book Consultation
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
