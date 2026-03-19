import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/blog";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = generatePageMetadata({
  title: "Tax Tips & Insights Blog | Edward & Associates Toronto",
  description:
    "Expert tax advice, CRA updates, and financial planning tips for Toronto individuals and businesses. Stay informed with Edward & Associates.",
  path: "/blog",
});

const categories = [
  "All",
  "Personal Tax",
  "Business Tax",
  "Tax Planning",
  "CRA Updates",
];

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-green-950 py-20 md:py-28">
        <div className="max-w-content mx-auto px-4 md:px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-[-0.02em] mb-4">
            Tax Tips &amp; Insights
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Expert guidance on personal taxes, business deductions, CRA
            updates, and financial planning — tailored for Toronto residents
            and Canadian entrepreneurs.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-content mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-slate-50 text-slate-600 border border-slate-200 hover:bg-brand-green-800 hover:text-white hover:border-brand-green-800 transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-white py-24">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-slate-200"
              >
                <div className="p-6 md:p-8">
                  <span className="inline-block text-xs font-semibold uppercase tracking-[0.05em] text-brand-gold-600 bg-brand-gold-50 px-2 py-1 rounded mb-3">
                    {post.category}
                  </span>
                  <h2 className="font-heading text-xl md:text-2xl font-semibold text-slate-950 mb-3 tracking-[-0.02em]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-brand-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                    <span>By {post.author}</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-brand-gold-600 text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
