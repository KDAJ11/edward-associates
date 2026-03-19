import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = generatePageMetadata({
  title: "Frequently Asked Questions | Edward & Associates Toronto Tax Services",
  description:
    "Answers to common questions about tax preparation, bookkeeping, CRA audits, and accounting services at Edward & Associates Toronto.",
  path: "/faq",
});

const personalTaxFAQs = [
  {
    question: "How much does personal tax preparation cost?",
    answer:
      "Our personal tax preparation fees depend on the complexity of your return. A straightforward T1 with employment income and standard deductions starts at a competitive rate. Returns involving self-employment income, rental properties, or investment portfolios are priced accordingly. We always provide a clear quote before beginning any work, so there are no surprises.",
  },
  {
    question: "What documents do I need to bring for my personal tax return?",
    answer:
      "You should bring your T4 employment income slips, T5 investment income slips, T3 trust income slips, RRSP contribution receipts, medical expense receipts, charitable donation receipts, childcare expense receipts, tuition certificates (T2202), and any other slips or receipts related to income or deductions. If you work from home, bring a record of your home office expenses. We will guide you through everything at your appointment.",
  },
  {
    question: "How long does it take to get my tax refund from the CRA?",
    answer:
      "When your return is filed electronically — which is how we file all returns — the CRA typically processes refunds within two to eight weeks. If you have set up direct deposit with the CRA, your refund will arrive faster than if you are waiting for a cheque by mail.",
  },
  {
    question: "Can you help me file returns for previous years I missed?",
    answer:
      "Yes. We regularly help clients catch up on unfiled returns, sometimes going back several years. The CRA allows you to file returns for up to ten previous tax years, and we can work through each year systematically to bring you up to date and address any penalties or interest that may have accrued.",
  },
  {
    question: "Do I need to come to your office in person?",
    answer:
      "While we welcome in-person visits at our 398 Bloor Street West location, we also offer phone consultations and can handle most filings remotely. Many of our clients send their documents by email or drop them off, and we complete the return without requiring an in-person meeting.",
  },
];

const businessTaxFAQs = [
  {
    question: "When do I need to register for HST?",
    answer:
      "You are required to register for HST once your business earns more than $30,000 in revenue over four consecutive calendar quarters or in a single calendar quarter. Even if you are below this threshold, voluntary registration can be beneficial because it allows you to claim input tax credits on your business expenses.",
  },
  {
    question: "What is the deadline for filing a T2 corporate tax return?",
    answer:
      "A T2 corporate tax return must be filed within six months of your corporation's fiscal year-end. However, any taxes owing are due within two months of the year-end for most corporations, or within three months for certain Canadian-controlled private corporations. Missing these deadlines results in penalties and interest, so timely filing is essential.",
  },
  {
    question: "Should I incorporate my business or stay as a sole proprietorship?",
    answer:
      "The decision to incorporate depends on several factors including your income level, liability concerns, and growth plans. Generally, incorporation becomes advantageous when your business income consistently exceeds what you need for personal living expenses, as it allows you to take advantage of the small business tax rate and defer personal taxes. We can review your specific situation and advise on the best structure.",
  },
  {
    question: "Can you handle payroll for my business?",
    answer:
      "Yes. We provide complete payroll services including calculating source deductions for CPP, EI, and income tax, preparing T4 slips for your employees, and filing payroll remittances with the CRA. We ensure your payroll is compliant and your employees receive accurate documentation.",
  },
  {
    question: "What records do I need to keep for my business taxes?",
    answer:
      "The CRA requires you to keep all business records, including invoices, receipts, bank statements, contracts, and accounting records, for at least six years after the tax year to which they relate. We recommend maintaining organised digital copies and can help you set up a system that makes this straightforward.",
  },
];

const bookkeepingFAQs = [
  {
    question: "What bookkeeping software do you work with?",
    answer:
      "We work with all major bookkeeping platforms including QuickBooks, Xero, Wave, and FreshBooks. If you are not currently using any software, we can recommend the best option for your business size and needs and help you get set up.",
  },
  {
    question: "How often should I have my books updated?",
    answer:
      "For most small businesses, monthly bookkeeping is ideal. It keeps your financial picture current, makes it easier to manage cash flow, and ensures there are no surprises at tax time. Some businesses with high transaction volumes benefit from weekly or bi-weekly bookkeeping.",
  },
  {
    question: "Can you help me catch up on months or years of bookkeeping?",
    answer:
      "Absolutely. Many clients come to us with months or even years of unorganised financial records. We will work through your bank statements, receipts, and invoices to reconstruct your books accurately. Once caught up, we can put a system in place to keep your records current going forward.",
  },
];

const craFAQs = [
  {
    question: "What should I do if I receive a CRA audit notice?",
    answer:
      "Do not panic, but do not ignore it. Contact a tax professional immediately. An audit notice is a request for information, not an accusation. We will review the notice, assess your situation, prepare the necessary documentation, and communicate with the CRA on your behalf to ensure the best possible outcome.",
  },
  {
    question: "Can you help me file a Notice of Objection?",
    answer:
      "Yes. If you disagree with a CRA reassessment, you have 90 days from the date of the Notice of Reassessment to file a formal Notice of Objection. We have extensive experience drafting and filing objections, presenting supporting evidence, and negotiating with CRA appeals officers to achieve favourable resolutions.",
  },
  {
    question: "What is the Voluntary Disclosures Program?",
    answer:
      "The CRA's Voluntary Disclosures Program allows taxpayers to come forward and correct previous tax filings or report income they failed to report, potentially avoiding prosecution and reducing penalties. To qualify, the disclosure must be voluntary, complete, and involve a penalty. We can assess your eligibility and guide you through the process.",
  },
  {
    question: "How long does a CRA dispute typically take to resolve?",
    answer:
      "CRA disputes vary widely in duration. Simple desk reviews may be resolved in a few weeks, while complex audits and objections can take six months to over a year. We keep you informed throughout the process and work to resolve matters as efficiently as possible.",
  },
];

const generalFAQs = [
  {
    question: "What are your office hours?",
    answer:
      "Our office is open Monday through Friday from 10:30 AM to 7:30 PM, and Saturday from 10:30 AM to 5:30 PM. We are closed on Sundays. During peak tax season (February through April), we may extend our hours to accommodate demand. We recommend booking an appointment to ensure you receive dedicated time.",
  },
  {
    question: "Where is your office located?",
    answer:
      "We are located at 398 Bloor Street West, Toronto, ON M5S 1X4, in the heart of downtown Toronto. Our office is steps from the Spadina subway station, making it easy to reach by TTC. Street parking and Green P lots are also available nearby.",
  },
  {
    question: "Do you offer free initial consultations?",
    answer:
      "We offer a brief initial phone consultation at no charge so you can describe your situation and we can explain how we can help. For detailed tax planning or complex advisory work, we will provide a clear quote for our services before any billable work begins.",
  },
];

const allFAQs = [
  ...personalTaxFAQs,
  ...businessTaxFAQs,
  ...bookkeepingFAQs,
  ...craFAQs,
  ...generalFAQs,
];

export default function FAQPage() {
  return (
    <>
      {/* FAQ Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFAQs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-brand-green-950 py-20 md:py-28">
        <div className="max-w-content mx-auto px-4 md:px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-[-0.02em] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Find answers to the most common questions about our tax
            preparation, bookkeeping, and CRA dispute resolution services.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          {/* Personal Tax */}
          <div className="mb-16">
            <SectionHeading
              eyebrow="Personal Tax"
              heading="Personal Tax Questions"
              align="left"
            />
            <FAQAccordion items={personalTaxFAQs} />
          </div>

          {/* Business & Corporate Tax */}
          <div className="mb-16">
            <SectionHeading
              eyebrow="Business & Corporate Tax"
              heading="Business Tax Questions"
              align="left"
            />
            <FAQAccordion items={businessTaxFAQs} />
          </div>

          {/* Bookkeeping */}
          <div className="mb-16">
            <SectionHeading
              eyebrow="Bookkeeping"
              heading="Bookkeeping Questions"
              align="left"
            />
            <FAQAccordion items={bookkeepingFAQs} />
          </div>

          {/* CRA Disputes */}
          <div className="mb-16">
            <SectionHeading
              eyebrow="CRA Disputes & Audits"
              heading="CRA Dispute Questions"
              align="left"
            />
            <FAQAccordion items={craFAQs} />
          </div>

          {/* General */}
          <div className="mb-16">
            <SectionHeading
              eyebrow="General"
              heading="General Questions"
              align="left"
            />
            <FAQAccordion items={generalFAQs} />
          </div>

          {/* CTA */}
          <div className="text-center pt-8 border-t border-slate-200">
            <h2 className="font-heading text-2xl font-semibold text-slate-950 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-slate-600 mb-6">
              Contact Edward directly for personalised answers.
            </p>
            <Button href="/contact" size="lg">
              Contact Edward
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
