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
    "CRA Dispute Resolution Toronto | Audit Representation | Edward & Associates",
  description:
    "Expert CRA dispute resolution and audit representation in Toronto. Notices of reassessment, objections, voluntary disclosures, and tax court preparation from Edward & Associates.",
  path: "/services/cra-dispute-resolution",
});

const faqs = [
  {
    question: "How long does a CRA dispute typically take to resolve?",
    answer:
      "The timeline varies depending on the type and complexity of the dispute. A straightforward notice of reassessment that can be resolved through informal correspondence with the CRA may be settled in two to four months. A formal notice of objection, which is reviewed by the CRA Appeals Division, typically takes six to eighteen months for a decision. If the matter proceeds to the Tax Court of Canada, the process can extend to two years or more depending on court scheduling and the complexity of the issues involved. At Edward & Associates, we work to resolve matters at the earliest possible stage to minimise both the timeline and your costs, but we are fully prepared to escalate when the CRA's position is not supported by the facts or the law.",
  },
  {
    question: "What triggers a CRA audit?",
    answer:
      "The CRA uses sophisticated risk-assessment algorithms to select returns for audit based on statistical outliers, industry comparisons, and data matching. Common triggers include claiming expenses that are disproportionately high relative to your reported income, significant year-over-year changes in income or deductions, operating in a cash-intensive industry such as restaurants or construction, and discrepancies between information reported on your return and third-party data the CRA receives from employers, banks, and other sources. Random selection also plays a role in the CRA's audit program. Regardless of the trigger, receiving an audit notification does not imply wrongdoing. It means the CRA wants to verify the accuracy of your return, and having professional representation from the outset significantly improves the outcome.",
  },
  {
    question:
      "Can you help with old unfiled tax returns or voluntary disclosures?",
    answer:
      "Yes, this is one of the most common situations we handle for new clients in Toronto. If you have one or more years of unfiled returns, whether personal or corporate, the CRA's Voluntary Disclosures Program (VDP) may allow you to come into compliance while avoiding gross negligence penalties and potential prosecution. The VDP requires a complete and voluntary application that includes all outstanding returns and full payment or a payment arrangement for taxes owing. We prepare the entire submission on your behalf, ensuring it meets the CRA's conditions for acceptance. Even outside the VDP, we regularly help clients bring their filing history up to date, negotiate penalty relief under the taxpayer relief provisions, and establish manageable payment plans for outstanding balances.",
  },
];

export default function CRADisputeResolutionPage() {
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
              <li className="text-brand-gold-400">CRA Dispute Resolution</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-[-0.02em] mb-4 max-w-3xl">
            CRA Dispute Resolution &amp; Audit Representation in Toronto
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            When the CRA challenges your return, reassesses your taxes, or
            initiates an audit, you need experienced representation on your
            side. Edward &amp; Associates has a proven track record of resolving
            CRA disputes efficiently and favourably for Toronto taxpayers.
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
                  heading="Expert CRA Dispute Resolution Services"
                  align="left"
                />
                <div className="prose prose-slate max-w-none space-y-5 text-base text-slate-600 leading-relaxed">
                  <p>
                    Receiving a letter from the Canada Revenue Agency can be one
                    of the most stressful experiences a taxpayer or business
                    owner faces. Whether it is a notice of reassessment, a
                    request for documentation, or a formal audit notification,
                    the way you respond in the first few weeks can determine the
                    outcome of the entire process. At Edward &amp; Associates, we
                    specialise in CRA dispute resolution for Toronto individuals
                    and businesses. We understand how the CRA operates
                    internally, what auditors look for, and how to present your
                    case in the most favourable light while remaining fully
                    transparent and compliant.
                  </p>
                  <p>
                    The CRA conducts several types of audits, each with its own
                    scope and procedures. Desk audits, also known as processing
                    reviews, are the most common and typically involve the CRA
                    requesting supporting documents for specific claims on your
                    return. Field audits are more comprehensive and involve a CRA
                    auditor visiting your place of business or your
                    representative&apos;s office to examine your books and
                    records in detail. Lifestyle audits, though less frequent,
                    involve the CRA comparing your reported income against your
                    observable standard of living, including assets, spending
                    patterns, and net worth changes. Each type of audit requires
                    a different response strategy, and having professional
                    representation from the initial contact dramatically
                    improves your position.
                  </p>
                  <p>
                    When the CRA issues a notice of reassessment that you
                    disagree with, you have 90 days to file a formal notice of
                    objection. This is a critical deadline, and missing it can
                    severely limit your options. Our team prepares thoroughly
                    researched objections that address the CRA&apos;s specific
                    concerns with supporting documentation, legal arguments, and
                    relevant case law. We have successfully resolved disputes
                    involving denied business expenses, disallowed charitable
                    donations, challenged capital gains exemption claims, and
                    reassessments arising from unreported income. Our clients,
                    including business owners across the Greater Toronto Area,
                    consistently report that having knowledgeable representation
                    transformed what felt like an overwhelming situation into a
                    manageable, structured process with a positive resolution.
                  </p>
                  <p>
                    The Voluntary Disclosures Program (VDP) is another critical
                    area of our practice. If you have unfiled returns, unreported
                    income, or other compliance gaps, the VDP offers a pathway to
                    come clean with the CRA while potentially avoiding gross
                    negligence penalties and criminal prosecution. The program
                    has two tracks: the general program, which can provide relief
                    from penalties and partial interest relief, and the limited
                    program for more serious non-compliance, which provides
                    relief from criminal prosecution and gross negligence
                    penalties only. We assess which track is appropriate for your
                    situation, prepare all outstanding returns, and submit the
                    complete application on your behalf. For taxpayers facing
                    cross-border issues, including unreported foreign income or
                    assets, we coordinate the Canadian and international aspects
                    of the disclosure to ensure comprehensive compliance. As a
                    taxpayer in Canada, you have clearly defined rights under the
                    Taxpayer Bill of Rights, including the right to every benefit
                    allowed by law, the right to pay no more than the correct
                    amount of tax, and the right to a formal review and
                    subsequent appeal. We ensure these rights are exercised
                    fully on your behalf.
                  </p>
                </div>
              </div>

              {/* Who Is This For? */}
              <div>
                <SectionHeading
                  eyebrow="Who Is This For?"
                  heading="Clients Who Need CRA Dispute Support"
                  align="left"
                />
                <ul className="space-y-3 text-base text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-gold-600 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-950">Anyone who has received a CRA notice</strong>{" "}
                      of reassessment, request for information, or audit
                      notification and needs professional guidance on how to
                      respond effectively and protect their interests.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-gold-600 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-950">Business owners under audit</strong>{" "}
                      whose books, records, and expense claims are being examined
                      by the CRA and who need experienced representation during
                      field audits and subsequent negotiations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-gold-600 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-950">Individuals with unfiled returns</strong>{" "}
                      spanning one or more years who want to come into compliance
                      through the Voluntary Disclosures Program or through
                      direct negotiations with the CRA while minimising
                      penalties and interest.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-gold-600 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-950">Taxpayers with cross-border issues</strong>{" "}
                      including unreported foreign income, foreign property
                      declarations (T1135), and treaty-based filing
                      requirements that have triggered CRA review or penalties.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-gold-600 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-950">Those facing penalties or interest charges</strong>{" "}
                      who want to apply for taxpayer relief under the CRA&apos;s
                      fairness provisions to have penalties reduced or waived
                      based on extraordinary circumstances.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Our Process */}
              <div>
                <SectionHeading
                  eyebrow="Our Process"
                  heading="How We Resolve CRA Disputes"
                  align="left"
                />
                <ol className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Initial Review",
                      description:
                        "We begin by reviewing all correspondence from the CRA, your original return, and the supporting documentation you have available. This gives us a clear picture of what the CRA is questioning and what evidence we need to build your case.",
                    },
                    {
                      step: "2",
                      title: "Case Assessment",
                      description:
                        "Based on our review, we provide an honest assessment of your position, including the strengths and weaknesses of your case, the potential outcomes, and the recommended course of action. We believe in giving you realistic expectations from the outset.",
                    },
                    {
                      step: "3",
                      title: "Response Preparation",
                      description:
                        "We prepare a comprehensive response to the CRA that includes all required documentation, detailed explanations, and legal arguments where applicable. Every submission is reviewed for completeness and accuracy before it is sent.",
                    },
                    {
                      step: "4",
                      title: "Negotiation & Representation",
                      description:
                        "We communicate directly with the CRA on your behalf, handling all phone calls, meetings, and written correspondence. If the matter proceeds to the objection stage, we prepare and file your notice of objection and represent you before the CRA Appeals Division.",
                    },
                    {
                      step: "5",
                      title: "Resolution & Follow-Up",
                      description:
                        "Once a resolution is reached, whether through audit settlement, successful objection, or voluntary disclosure acceptance, we review the outcome with you, ensure any adjusted assessments are correct, and advise on steps to prevent similar issues in the future.",
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
                  heading="CRA Dispute Resolution FAQs"
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
