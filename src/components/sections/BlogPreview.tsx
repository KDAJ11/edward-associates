import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

const posts = [
  {
    slug: "personal-tax-checklist-toronto-2025",
    title: "The Complete Personal Tax Checklist for Toronto Residents (2025)",
    category: "Personal Tax",
    excerpt:
      "Everything Toronto residents need to gather before tax season — from T4 slips and RRSP receipts to often-overlooked deductions for medical expenses and work-from-home costs.",
    date: "2025-02-15",
  },
  {
    slug: "small-business-tax-deductions-canada",
    title: "15 Tax Deductions Every Canadian Small Business Owner Should Know",
    category: "Business Tax",
    excerpt:
      "A comprehensive guide to the deductions that can significantly reduce your business tax bill — including home office, vehicle, and professional development expenses.",
    date: "2025-01-28",
  },
  {
    slug: "cra-audit-what-to-expect",
    title:
      "What to Expect During a CRA Audit (And How a Tax Professional Can Help)",
    category: "CRA Updates",
    excerpt:
      "Audits happen — but they do not have to be stressful. Learn what triggers a CRA audit, what to prepare, and when to bring in a professional.",
    date: "2025-01-10",
  },
];

export function BlogPreview() {
  return (
    <section
      className="bg-slate-50 py-24 md:py-24"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-content mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="From Our Blog"
          heading="Latest Tax Insights & Guides"
        />
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          id="blog-heading"
        >
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-slate-200"
            >
              <div className="p-6">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.05em] text-brand-gold-600 bg-brand-gold-50 px-2 py-1 rounded mb-3">
                  {post.category}
                </span>
                <h3 className="font-heading text-lg font-semibold text-slate-950 mb-2 tracking-[-0.02em] leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-brand-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <time
                    dateTime={post.date}
                    className="text-xs text-slate-400"
                  >
                    {new Date(post.date).toLocaleDateString("en-CA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-brand-gold-600 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="text-brand-gold-600 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:ring-offset-2 rounded-sm"
          >
            View All Articles &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
