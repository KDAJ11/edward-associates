import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

const faqs = [
  {
    question: "How much does tax preparation cost?",
    answer:
      "Our fees vary depending on the complexity of your return. Personal tax returns start at a competitive rate, and we always provide a clear quote before beginning any work. Contact us for a personalised estimate.",
  },
  {
    question: "What documents do I need for my tax return?",
    answer:
      "For personal returns, bring your T4 slips, T5 investment income slips, RRSP contribution receipts, medical expense receipts, charitable donation receipts, and any other income or deduction documents. We'll guide you through everything at your appointment.",
  },
  {
    question: "How long does it take to get my refund?",
    answer:
      "Once filed electronically, the CRA typically processes refunds within 2–8 weeks. We file all returns electronically for the fastest possible processing.",
  },
  {
    question: "Can you help if I'm being audited by the CRA?",
    answer:
      "Absolutely. CRA dispute resolution is one of our core specialities. We've successfully represented clients through complex audits and reassessments, often recovering thousands of dollars.",
  },
  {
    question: "Do I need to come to your office in person?",
    answer:
      "While we welcome in-person visits at our 398 Bloor Street West location, we also offer consultations by phone and can handle most filings remotely for your convenience.",
  },
];

export function FAQPreview() {
  return (
    <section className="bg-white py-24 md:py-24" aria-labelledby="faq-heading">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Common Questions"
          heading="Frequently Asked Questions"
        />
        <div className="max-w-3xl mx-auto" id="faq-heading">
          <FAQAccordion items={faqs} />
        </div>
        <div className="text-center mt-10">
          <Link
            href="/faq"
            className="text-brand-gold-600 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:ring-offset-2 rounded-sm"
          >
            View All FAQs &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
