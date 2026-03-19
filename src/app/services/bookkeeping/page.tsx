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
    "Bookkeeping Services Toronto | Professional Financial Records | Edward & Associates",
  description:
    "Professional bookkeeping services in Toronto. Accurate financial records, bank reconciliation, accounts payable/receivable, and tax-ready books from Edward & Associates.",
  path: "/services/bookkeeping",
});

const faqs = [
  {
    question: "What bookkeeping software do you use?",
    answer:
      "We are proficient in all major bookkeeping platforms including QuickBooks Online, QuickBooks Desktop, Sage 50, Xero, Wave, and FreshBooks. We recommend the platform that best suits your business size, industry, and budget. For most small businesses in Toronto, QuickBooks Online offers the best combination of features, bank feed integration, and accessibility. If you already use a specific platform, we are happy to work within your existing setup. We also assist with initial software setup, chart of accounts configuration, and staff training to ensure a smooth transition if you are switching platforms.",
  },
  {
    question: "How often should my books be updated?",
    answer:
      "For most active businesses, we recommend monthly bookkeeping to maintain accurate and up-to-date financial records. Monthly updates ensure your bank accounts are reconciled promptly, expenses are categorised correctly while they are still fresh, and you have reliable financial statements to guide your business decisions. Some businesses with lower transaction volumes may opt for quarterly bookkeeping, while high-volume businesses such as retail or e-commerce operations may benefit from weekly updates. During our onboarding process, we assess your transaction volume and recommend the most cost-effective frequency for your situation.",
  },
  {
    question: "Can you catch up on months or years of neglected bookkeeping?",
    answer:
      "Absolutely. Catch-up bookkeeping is one of our most requested services. Many Toronto business owners come to us with months or even years of unreconciled transactions, unsorted receipts, and incomplete records. We systematically work through your bank and credit card statements, reconstruct your financial history, categorise every transaction, and deliver a clean, accurate set of books ready for tax filing. The process typically takes two to four weeks depending on the volume and complexity. Once we have brought everything current, we transition you to a regular monthly schedule so the backlog never builds up again.",
  },
];

export default function BookkeepingPage() {
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
              <li className="text-brand-gold-400">Bookkeeping</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-[-0.02em] leading-tight max-w-3xl">
            Professional Bookkeeping Services in Toronto
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Clean, accurate financial records that give you clarity, keep you
            CRA-compliant, and ensure your books are always ready when tax
            season arrives.
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
                  heading="Reliable Bookkeeping You Can Count On"
                  align="left"
                />
                <div className="prose prose-slate max-w-none space-y-5">
                  <p>
                    Accurate bookkeeping is the foundation of every financially
                    healthy business. At Edward &amp; Associates, we provide
                    professional bookkeeping services to Toronto businesses of
                    all sizes, ensuring your financial records are organised,
                    up-to-date, and fully prepared for tax filing, audits, or
                    financing applications. Our team has maintained books for
                    sole proprietors, partnerships, and incorporated companies
                    across a wide range of industries, from retail and
                    hospitality to professional services and construction. With
                    over 15 years in the Toronto market, we understand the
                    specific compliance requirements and financial rhythms that
                    Ontario businesses face throughout the year.
                  </p>
                  <p>
                    Our core bookkeeping services include bank and credit card
                    reconciliation, accounts payable and accounts receivable
                    management, expense categorisation, and the preparation of
                    monthly financial statements including profit and loss
                    reports, balance sheets, and cash flow summaries. Bank
                    reconciliation is particularly critical because it ensures
                    every transaction in your bank account is accounted for in
                    your books, catches duplicate entries or missed transactions,
                    and provides an accurate picture of your available cash at
                    any given time. We reconcile every account, every month,
                    without exception.
                  </p>
                  <p>
                    Accounts payable management ensures your vendor invoices are
                    recorded accurately and paid on time, helping you maintain
                    strong supplier relationships and take advantage of early
                    payment discounts when available. On the receivables side, we
                    track outstanding customer invoices, flag overdue accounts,
                    and provide you with aging reports so you can follow up on
                    collections before they become problematic. Together, these
                    processes give you a clear understanding of your cash flow
                    position and help prevent the liquidity crunches that derail
                    many small businesses.
                  </p>
                  <p>
                    Beyond the day-to-day transaction recording, we prepare your
                    books specifically for tax season. This means ensuring your
                    chart of accounts aligns with CRA reporting requirements,
                    HST collected and paid is properly tracked, payroll entries
                    are accurate, and all supporting documentation is organised
                    and accessible. When it is time to prepare your T2 corporate
                    return or T2125 business income statement, your accountant
                    receives a clean, complete set of records that reduces
                    preparation time and minimises the risk of errors or missed
                    deductions. Many of our bookkeeping clients also use our tax
                    preparation services, creating a seamless workflow from daily
                    bookkeeping through to annual tax filing.
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
                    "Small business owners who need to offload bookkeeping so they can focus on running their business",
                    "Freelancers and independent contractors who need organised records for T2125 reporting",
                    "Construction and trades contractors managing project-based income and expenses",
                    "Non-profit organisations that require transparent financial reporting for their boards and funders",
                    "New businesses that need help setting up their chart of accounts and bookkeeping systems from scratch",
                    "E-commerce operators tracking multi-channel sales, platform fees, and shipping costs",
                    "Any Toronto business with a backlog of unreconciled transactions that needs a fresh start",
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
                      title: "Onboarding & Setup",
                      description:
                        "We begin by reviewing your current bookkeeping setup, business structure, and financial goals. If you are starting fresh, we configure your accounting software, build a customised chart of accounts, connect your bank feeds, and establish the workflows that will keep your records accurate going forward.",
                    },
                    {
                      step: "2",
                      title: "Monthly Bookkeeping Cycle",
                      description:
                        "Each month, we reconcile your bank and credit card accounts, categorise all income and expenses, record accounts payable and receivable entries, and prepare your monthly financial statements. You receive a clear summary along with your profit and loss report, balance sheet, and any action items that need your attention.",
                    },
                    {
                      step: "3",
                      title: "Quarterly Review",
                      description:
                        "Every quarter, we conduct a deeper review of your financial position. This includes analysing trends in revenue and expenses, reviewing your HST position, assessing cash flow projections, and identifying any adjustments needed to keep your records aligned with your actual business activity.",
                    },
                    {
                      step: "4",
                      title: "Year-End Preparation",
                      description:
                        "As your fiscal year-end approaches, we perform a comprehensive review and clean-up of your books. We ensure all transactions are properly recorded, accruals and prepaid expenses are adjusted, and your financial statements are finalised and ready for your tax preparer. If we also handle your tax filing, the transition is seamless.",
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
                  heading="Bookkeeping FAQs"
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
