import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Button } from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | Edward & Associates" };
  }

  return {
    title: `${post.title} | Edward & Associates Toronto`,
    description: post.description,
    alternates: {
      canonical: `${BUSINESS.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category)
        return -1;
      if (b.category === post.category && a.category !== post.category)
        return 1;
      return 0;
    })
    .slice(0, 2);

  return (
    <>
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Person", name: post.author },
            publisher: {
              "@type": "Organization",
              name: BUSINESS.name,
              url: BUSINESS.url,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${BUSINESS.url}/blog/${post.slug}`,
            },
          }),
        }}
      />

      {/* Breadcrumb */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-content mx-auto px-4 md:px-6 py-3">
          <nav className="text-sm text-slate-400" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-brand-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
                >
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-950 font-medium truncate max-w-xs">
                {post.title}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Article */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <article className="lg:col-span-2">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.05em] text-brand-gold-600 bg-brand-gold-50 px-2 py-1 rounded mb-4">
                {post.category}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-slate-950 tracking-[-0.02em] mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-8 pb-8 border-b border-slate-200">
                <span className="font-medium text-brand-gold-600">
                  {post.category}
                </span>
                <span aria-hidden="true">&middot;</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span aria-hidden="true">&middot;</span>
                <span>By {post.author}</span>
              </div>

              <div
                className="prose max-w-none blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-12 pt-8 border-t border-slate-200">
                <Link
                  href="/blog"
                  className="text-brand-gold-600 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
                >
                  &larr; Back to All Posts
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="sidebar-cta bg-brand-green-900 text-white rounded-xl p-6 md:p-8">
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    Need Expert Tax Help?
                  </h3>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    Edward &amp; Associates provides personalised tax services
                    for Toronto residents and businesses.
                  </p>
                  <Button href="/contact" size="md" className="w-full">
                    Book a Consultation
                  </Button>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-heading text-lg font-semibold text-slate-950 mb-4">
                    Our Services
                  </h3>
                  <ul className="space-y-3">
                    {[
                      {
                        label: "Personal Tax Returns",
                        href: "/services/personal-tax-returns",
                      },
                      {
                        label: "Business Tax Services",
                        href: "/services/business-tax-services",
                      },
                      {
                        label: "Bookkeeping",
                        href: "/services/bookkeeping",
                      },
                      {
                        label: "Tax Planning",
                        href: "/services/tax-planning",
                      },
                      {
                        label: "CRA Dispute Resolution",
                        href: "/services/cra-dispute-resolution",
                      },
                    ].map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="text-sm text-slate-600 hover:text-brand-gold-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-950 text-center mb-10 tracking-[-0.02em]">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map((related) => (
              <article
                key={related.slug}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-slate-200"
              >
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold uppercase tracking-[0.05em] text-brand-gold-600 bg-brand-gold-50 px-2 py-1 rounded mb-3">
                    {related.category}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-slate-950 mb-2 tracking-[-0.02em]">
                    <Link
                      href={`/blog/${related.slug}`}
                      className="hover:text-brand-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
                    >
                      {related.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {related.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>By {related.author}</span>
                    <time dateTime={related.date}>
                      {new Date(related.date).toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
