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
    "Business Tax Services Toronto | T2 Returns & HST Filing | Edward & Associates",
  description:
    "Complete business tax services in Toronto — T2 corporate returns, HST filing, payroll remittances, and year-end reporting. Trusted by 100+ Toronto businesses.",
  path: "/services/business-tax-services",
});

const faqs = [
  {
    question:
      "What is the HST registration threshold for small businesses in Ontario?",
    answer:
      "In Ontario, you are required to register for an HST account once your business revenue exceeds $30,000 over any four consecutive calendar quarters or in a single calendar quarter. This is known as the small supplier threshold. Once you cross this limit, you must begin collecting 13% HST on your taxable goods and services and file regular HST returns with the CRA. Even if you are below the threshold, voluntary registration can be advantageous because it allows you to claim Input Tax Credits on your business purchases. We help Toronto business owners evaluate whether early registration makes financial sense for their situation.",
  },
  {
    question: "When are T2 corporate tax returns due in Canada?",
    answer:
      "T2 corporate tax returns are due six months after the end of your corporation's fiscal year. For example, if your fiscal year ends on December 31, your T2 return is due by June 30 of the following year. However, any balance of corporate tax owing is due just two months after the fiscal year-end for most corporations, or three months for Canadian-controlled private corporations claiming the small business deduction and whose taxable income in the prior year was under $500,000. Missing these deadlines results in late-filing penalties and daily compounding interest, so we strongly recommend starting the preparation process well in advance.",
  },
  {
    question:
      "Should I incorporate my business or operate as a sole proprietorship?",
    answer:
      "The answer depends on several factors including your income level, risk exposure, and long-term business goals. Incorporating creates a separate legal entity that offers limited liability protection and access to the small business tax rate, which is significantly lower than personal marginal rates on income up to $500,000. However, incorporation comes with additional costs including annual filing requirements, legal fees, and more complex bookkeeping. Sole proprietorships are simpler and less expensive to maintain but offer no liability protection and all income is taxed at personal rates. Edward & Associates helps Toronto business owners analyse both options with detailed projections so you can make the right decision for your circumstances.",
  },
];

export default function BusinessTaxServicesPage() {
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
              <li className="text-brand-gold-400">Business Tax Services</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-[-0.02em] leading-tight max-w-3xl">
            Business Tax Services for Toronto Companies
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            From T2 corporate returns and HST filing to payroll remittances and
            year-end reporting, we provide the complete tax compliance
            infrastructure your Toronto business needs to thrive.
          </p>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-16">
              {/* What We Offer */}
              <div>
                <SectionHeading
                  eyebrow="What We Offer"
                  heading="End-to-End Business Tax Compliance"
                  align="left"
                />
                <div className="prose prose-slate max-w-none space-y-5">
                  <p>
                    Running a business in Toronto comes with a significant tax
                    compliance burden that grows more complex as your company
                    scales. Edward &amp; Associates delivers comprehensive
                    business tax services designed to keep you fully compliant
                    with the Canada Revenue Agency while minimising your overall
                    tax liability. With over 15 years of experience serving more
                    than 100 Toronto-area businesses, we understand the unique
                    challenges faced by Canadian entrepreneurs, from navigating
                    the small business deduction to managing multi-province
                    operations and cross-border transactions.
                  </p>
                  <p>
                    Our T2 corporate return preparation is thorough and
                    strategic. We go beyond simply entering numbers into
                    software. Every return we prepare includes a detailed review
                    of your financial statements, proper GIFI (General Index of
                    Financial Information) coding, Schedule 1 reconciliation of
                    net income to taxable income, and identification of all
                    applicable tax credits and incentives. We ensure your
                    corporation takes full advantage of the small business
                    deduction, the Scientific Research and Experimental
                    Development (SR&amp;ED) credit where applicable, and any
                    Ontario-specific incentives that may reduce your provincial
                    tax rate.
                  </p>
                  <p>
                    HST compliance is another critical area where many Toronto
                    businesses struggle. We handle everything from initial HST
                    registration and account setup to quarterly or annual return
                    filing, Input Tax Credit optimisation, and Quick Method
                    election analysis. For businesses that deal in both taxable
                    and exempt supplies, we calculate the correct Input Tax
                    Credit allocation to ensure you are neither underpaying nor
                    leaving money on the table. Our proactive approach to HST
                    filing means you never face unexpected assessments or
                    penalties from the CRA.
                  </p>
                  <p>
                    Payroll compliance is equally important and often
                    underestimated by growing businesses. We manage source
                    deductions for CPP, EI, and income tax, prepare T4 and T4A
                    slips, file annual payroll summaries, and ensure your
                    remittances are submitted on time to avoid the steep
                    penalties the CRA imposes for late payroll remittances. For
                    businesses with contractors, we also advise on the
                    employee-versus-contractor classification to prevent costly
                    misclassification reassessments. Year-end financial
                    statement preparation rounds out our service offering,
                    giving you a clear picture of your company&apos;s financial
                    health and a solid foundation for strategic planning.
                  </p>
                </div>
              </div>

              {/* Who Is This For? */}
              <div>
                <SectionHeading
                  eyebrow="Ideal Clients"
                  heading="Who Is This For?"
                  align="left"
                />
                <ul className="space-y-3">
                  {[
                    "Sole proprietors reporting business income on their personal tax returns via the T2125",
                    "Partnerships that need to allocate income among partners and file T5013 information returns",
                    "Incorporated small businesses requiring annual T2 corporate returns and financial statements",
                    "Growing companies that need payroll setup, source deduction management, and T4 preparation",
                    "Startups navigating their first fiscal year-end, HST registration, and corporate tax obligations",
                    "E-commerce businesses dealing with interprovincial sales tax collection requirements",
                    "Professional corporations for doctors, lawyers, accountants, and consultants in Toronto",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-gold-600 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Process */}
              <div>
                <SectionHeading
                  eyebrow="How It Works"
                  heading="Our Process"
                  align="left"
                />
                <ol className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Business Assessment",
                      description:
                        "We start by understanding your business structure, revenue streams, industry, and tax history. This allows us to identify compliance requirements, potential risks, and tax-saving opportunities specific to your operation.",
                    },
                    {
                      step: "2",
                      title: "Records Review",
                      description:
                        "Our team reviews your financial records, bank statements, invoices, receipts, and existing bookkeeping data. We identify any gaps or discrepancies and work with you to assemble a complete and accurate financial picture before preparing your returns.",
                    },
                    {
                      step: "3",
                      title: "Return Preparation",
                      description:
                        "We prepare your T2 corporate return, HST filings, and any other required CRA submissions with meticulous attention to detail. Every deduction is documented, every credit is claimed, and every schedule is properly completed and cross-referenced.",
                    },
                    {
                      step: "4",
                      title: "Filing & Compliance",
                      description:
                        "Once you have reviewed and approved the returns, we file electronically with the CRA and ensure all remittances and payments are submitted before their respective deadlines. We provide you with copies of all filed documents for your records.",
                    },
                    {
                      step: "5",
                      title: "Ongoing Support",
                      description:
                        "Our relationship does not end at filing. We provide year-round support including answering CRA correspondence, advising on estimated instalments, assisting with business structure changes, and preparing for the next fiscal year-end.",
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-5">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-green-800 text-white font-heading font-bold text-lg flex items-center justify-center">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-slate-950 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
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
                  heading="Business Tax FAQs"
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

      {/* CTA */}
      <CTABanner />
    </>
  );
}
