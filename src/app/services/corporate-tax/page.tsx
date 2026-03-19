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
    "Corporate Tax Preparation Toronto | Strategic Tax Planning | Edward & Associates",
  description:
    "Expert corporate tax preparation and strategic planning in Toronto. Minimise tax liability, optimise your structure, and stay CRA-compliant with Edward & Associates.",
  path: "/services/corporate-tax",
});

const faqs = [
  {
    question:
      "What is the small business deduction and does my corporation qualify?",
    answer:
      "The small business deduction (SBD) allows Canadian-controlled private corporations (CCPCs) to pay a reduced federal tax rate on the first $500,000 of active business income. In Ontario, this brings the combined federal-provincial rate down to approximately 12.2%, compared to the general corporate rate of around 26.5%. To qualify, your corporation must be a CCPC throughout the tax year and cannot exceed the taxable capital threshold of $15 million. Edward & Associates reviews your corporate structure annually to ensure you maximise your SBD eligibility and avoid common pitfalls such as associated corporation rules that can reduce your business limit.",
  },
  {
    question:
      "Should I pay myself dividends or salary from my corporation?",
    answer:
      "The dividends versus salary decision depends on multiple factors including your personal income level, RRSP contribution room, CPP considerations, and overall family tax situation. Salary creates RRSP room and CPP contributions, which can be valuable for retirement planning, but it is subject to payroll taxes. Dividends avoid payroll taxes and can be more tax-efficient at certain income levels thanks to the dividend tax credit, but they do not generate RRSP room. At Edward & Associates, we model both scenarios using your actual numbers to determine the optimal mix, often recommending a combination of salary and dividends tailored to your specific circumstances.",
  },
  {
    question:
      "When should I incorporate my business in Toronto?",
    answer:
      "Incorporation typically becomes advantageous when your business consistently earns more than you need for personal living expenses, generally around $80,000 to $100,000 in net business income. At that point, the tax deferral benefit of the small business deduction allows you to retain more after-tax dollars inside the corporation for reinvestment. Other reasons to incorporate include liability protection, credibility with clients, and access to the lifetime capital gains exemption on qualified small business shares. However, incorporation adds administrative costs including separate tax filings, annual returns, and bookkeeping requirements. We help Toronto business owners evaluate the full picture before making this decision.",
  },
];

export default function CorporateTaxPage() {
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
              <li className="text-brand-gold-400">Corporate Tax</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-[-0.02em] mb-4 max-w-3xl">
            Corporate Tax Preparation &amp; Strategic Planning in Toronto
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            From T2 filings and GIFI statements to dividend-versus-salary
            planning and multi-entity structuring, Edward &amp; Associates
            delivers precise, strategic corporate tax services that protect your
            bottom line and keep you fully CRA-compliant.
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
                  heading="Comprehensive Corporate Tax Services"
                  align="left"
                />
                <div className="prose prose-slate max-w-none space-y-5 text-base text-slate-600 leading-relaxed">
                  <p>
                    Corporate tax in Canada is governed by a distinct set of
                    rules that differ significantly from personal tax
                    obligations. Every incorporated business in Canada must file
                    a T2 corporate income tax return within six months of its
                    fiscal year-end, regardless of whether it earned income
                    during that period. At Edward &amp; Associates, we prepare
                    every T2 filing with meticulous attention to detail,
                    including the General Index of Financial Information (GIFI)
                    statements that the CRA requires alongside each return. Our
                    Toronto-based team ensures your financial data maps correctly
                    to GIFI codes, reducing the risk of processing delays or
                    reassessment notices that can disrupt your operations.
                  </p>
                  <p>
                    Beyond compliance, our corporate tax services focus on
                    building a tax-efficient structure for your business. Many
                    Toronto business owners operate through a single corporation
                    when a holding company structure could offer significant
                    advantages, including creditor protection, income splitting
                    opportunities, and more flexible estate planning. We
                    evaluate whether your current corporate structure is
                    optimised or whether restructuring could yield material tax
                    savings. This includes analysing the implications of the
                    associated corporation rules, the passive income rules that
                    can erode your small business deduction, and the tax on split
                    income (TOSI) provisions that affect family shareholders.
                  </p>
                  <p>
                    Dividend-versus-salary planning is one of the most
                    consequential decisions a business owner faces each year. The
                    optimal approach depends on your personal marginal tax rate,
                    your need for RRSP contribution room, Canada Pension Plan
                    considerations, and whether you have family members who could
                    receive dividends in a tax-efficient manner. Our team models
                    multiple compensation scenarios annually to determine the
                    precise mix that minimises your combined
                    corporate-and-personal tax burden. We also manage the payroll
                    remittance obligations and T4 or T5 slips that follow from
                    these decisions, ensuring nothing falls through the cracks.
                  </p>
                  <p>
                    Capital cost allowance (CCA) claims represent another area
                    where strategic decisions can meaningfully reduce your
                    corporate tax bill. The Accelerated Investment Incentive
                    allows Canadian corporations to claim enhanced first-year
                    depreciation on eligible capital property, and certain
                    classes of assets, such as clean energy equipment and
                    manufacturing machinery, qualify for immediate expensing. We
                    track every asset your corporation acquires, assign it to the
                    correct CCA class, and time your claims to maximise the
                    deduction in years when your taxable income is highest. For
                    corporations with inter-company transactions, whether
                    management fees, loans, or asset transfers, we ensure these
                    are documented at fair market value and structured to
                    withstand CRA scrutiny during any review or audit.
                  </p>
                </div>
              </div>

              {/* Who Is This For? */}
              <div>
                <SectionHeading
                  eyebrow="Who Is This For?"
                  heading="Ideal Clients for Corporate Tax Services"
                  align="left"
                />
                <ul className="space-y-3 text-base text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-gold-600 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-950">Incorporated businesses</strong>{" "}
                      of any size that need accurate T2 filings, GIFI
                      preparation, and strategic year-end planning to minimise
                      their corporate tax liability.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-gold-600 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-950">Holding company owners</strong>{" "}
                      who need to manage passive investment income, track safe
                      income on hand, and ensure proper documentation for
                      inter-corporate dividends under Part IV tax rules.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-gold-600 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-950">Professional corporations</strong>{" "}
                      (medical, legal, accounting, engineering) that face unique
                      regulatory requirements and restrictions on who can hold
                      shares, requiring tailored tax planning.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-gold-600 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-950">Multi-entity structures</strong>{" "}
                      with operating companies, holding companies, and family
                      trusts that require coordinated tax filings and careful
                      management of inter-company transactions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-gold-600 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-950">Business owners considering incorporation</strong>{" "}
                      who want a thorough analysis of whether incorporating will
                      reduce their overall tax burden and improve asset
                      protection.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Our Process */}
              <div>
                <SectionHeading
                  eyebrow="Our Process"
                  heading="How We Handle Your Corporate Tax"
                  align="left"
                />
                <ol className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Corporate Assessment",
                      description:
                        "We begin with a thorough review of your corporation's financial statements, prior-year filings, and current-year activity. This allows us to identify any outstanding issues, missed deductions, or structural inefficiencies before we begin preparation.",
                    },
                    {
                      step: "2",
                      title: "Structure Review",
                      description:
                        "Our team evaluates your corporate structure against your business goals. We assess whether a holding company, reorganisation, or changes to shareholder composition could yield tax savings, improve creditor protection, or support your succession plans.",
                    },
                    {
                      step: "3",
                      title: "Return Preparation",
                      description:
                        "We prepare your T2 corporate return and all required schedules, including GIFI financial statements, capital cost allowance schedules, and any applicable provincial returns. Every figure is cross-referenced against your bookkeeping records for accuracy.",
                    },
                    {
                      step: "4",
                      title: "Filing & Compliance",
                      description:
                        "Your completed return is filed electronically with the CRA before your deadline, and we coordinate any tax instalments or balance-due payments. We also prepare T4, T4A, or T5 slips as required for salary and dividend payments made during the year.",
                    },
                    {
                      step: "5",
                      title: "Year-Round Planning Consultation",
                      description:
                        "After filing, we schedule a planning session to discuss strategies for the upcoming year, including optimal salary-dividend mix, planned capital expenditures, and any changes in tax law that may affect your corporation.",
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
                  heading="Corporate Tax FAQs"
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
