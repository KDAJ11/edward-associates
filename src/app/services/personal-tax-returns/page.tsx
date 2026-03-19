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
    "Personal Tax Returns Toronto | Expert Tax Preparation | Edward & Associates",
  description:
    "Professional personal tax return preparation in Toronto. Maximise your refund with 15+ years of expertise. T1 filing, RRSP optimisation, medical expenses, and more.",
  path: "/services/personal-tax-returns",
});

const faqs = [
  {
    question: "How much does personal tax return preparation cost in Toronto?",
    answer:
      "Our personal tax return fees start at a competitive flat rate and vary depending on the complexity of your return. A straightforward T1 return for a salaried employee is at the lower end of the scale, while returns involving rental income, self-employment income, capital gains, or foreign assets may be higher. We always provide a clear quote before we begin so there are no surprises. Contact us for a personalised estimate based on your specific situation.",
  },
  {
    question: "How long does it take to prepare and file my tax return?",
    answer:
      "Most personal tax returns are completed within three to five business days once we have received all of your documents. During peak tax season (March through April), timelines may extend slightly, so we recommend booking your appointment early. If you need an urgent filing, we offer priority service to accommodate tight deadlines. Electronic filing means the CRA typically processes your return within two weeks, and direct deposit refunds arrive even faster.",
  },
  {
    question: "What if I missed filing my taxes for previous years?",
    answer:
      "If you have unfiled tax returns from prior years, it is important to address them as soon as possible. The CRA can reassess up to ten years of past returns, and penalties and interest accumulate over time. Edward & Associates specialises in catching up on multiple years of unfiled returns. We will review your situation, gather the necessary documentation, file all outstanding returns, and negotiate with the CRA on your behalf to minimise penalties wherever possible. Many clients are relieved to discover they are actually owed refunds from past years.",
  },
];

export default function PersonalTaxReturnsPage() {
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
              <li className="text-brand-gold-400">Personal Tax Returns</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-[-0.02em] leading-tight max-w-3xl">
            Personal Tax Return Preparation in Toronto
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Accurate, thorough T1 tax filing backed by over 15 years of
            experience. We help Toronto residents maximise their refunds while
            staying fully compliant with the CRA.
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
                  heading="Comprehensive Personal Tax Return Services"
                  align="left"
                />
                <div className="prose prose-slate max-w-none space-y-5">
                  <p>
                    Filing your personal tax return in Canada should not be a
                    source of stress. At Edward &amp; Associates, we provide
                    complete T1 tax return preparation for individuals across
                    Toronto, from straightforward employment returns to complex
                    filings involving multiple income sources, investments, and
                    rental properties. Our office on Bloor Street West has
                    served the Toronto community for over 15 years, and our
                    commitment to accuracy and personalised service has earned us
                    a 4.9-star Google rating from more than 1,000 satisfied
                    clients.
                  </p>
                  <p>
                    We take a meticulous approach to every return, ensuring that
                    you claim every deduction and credit you are entitled to
                    under Canadian tax law. This includes RRSP contributions and
                    the corresponding deduction limits, medical expenses that
                    exceed the threshold, charitable donations and political
                    contributions, tuition and education credits, child care
                    expenses, moving expenses, and the increasingly popular
                    work-from-home deductions that have become a staple since
                    2020. Whether you are claiming the simplified flat-rate
                    method or the detailed method for home office expenses, we
                    determine which approach yields the greatest benefit for your
                    specific circumstances.
                  </p>
                  <p>
                    All returns are filed electronically through CRA-certified
                    EFILE software, which means faster processing times and
                    quicker refunds. Electronic filing also reduces errors
                    compared to paper returns and provides immediate confirmation
                    that the CRA has received your submission. We stay current
                    with every tax law change, credit update, and CRA
                    administrative policy so that your return reflects the most
                    advantageous filing position available to you. From the
                    Canada Workers Benefit to the Climate Action Incentive
                    Payment, we ensure nothing is overlooked.
                  </p>
                  <p>
                    Our clients range from young professionals filing their
                    first return to retirees managing pension income, CPP
                    benefits, and OAS clawback thresholds. We also have
                    extensive experience assisting newcomers to Canada who need
                    guidance on residency status, foreign income reporting, and
                    treaty-based tax relief. No matter where you are in life, our
                    goal is to make the tax filing process straightforward,
                    transparent, and financially beneficial.
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
                    "Salaried employees looking to maximise deductions and credits on their T4 income",
                    "Retirees managing CPP, OAS, pension income, and RRIF withdrawals",
                    "University and college students claiming tuition credits and education amounts",
                    "Newcomers to Canada who need help understanding Canadian tax obligations and residency rules",
                    "Self-employed individuals and freelancers with T2125 business income",
                    "Individuals with rental income from residential or commercial properties",
                    "Anyone who has missed filing in previous years and needs to catch up",
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
                      title: "Initial Consultation",
                      description:
                        "We begin with a brief conversation to understand your income sources, life changes, and any concerns you may have. This helps us identify all potential deductions and credits before we start.",
                    },
                    {
                      step: "2",
                      title: "Document Gathering",
                      description:
                        "We provide you with a personalised checklist of documents we need, including T4 slips, T5 investment statements, RRSP receipts, medical receipts, and any other relevant records. You can drop them off at our Bloor Street office or submit them digitally.",
                    },
                    {
                      step: "3",
                      title: "Return Preparation",
                      description:
                        "Our team carefully prepares your T1 return using CRA-certified EFILE software. We cross-reference every slip, apply all eligible deductions, and run multiple checks to ensure accuracy and the best possible outcome.",
                    },
                    {
                      step: "4",
                      title: "Review & Filing",
                      description:
                        "Before filing, we walk you through your completed return so you understand exactly what is being claimed and what to expect. Once you approve, we electronically file with the CRA and provide you with a copy for your records.",
                    },
                    {
                      step: "5",
                      title: "Refund Tracking & Follow-Up",
                      description:
                        "After filing, we monitor your Notice of Assessment and follow up on any CRA correspondence. If questions arise or adjustments are needed, we handle the communication on your behalf at no extra charge.",
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
                  heading="Personal Tax Return FAQs"
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
