import { MetadataRoute } from "next";

const BASE_URL = "https://edwardandassociates.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${BASE_URL}/`, changeFrequency: "monthly" as const, priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/services/personal-tax-returns`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/business-tax-services`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/bookkeeping`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/corporate-tax`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/tax-planning`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/cra-dispute-resolution`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE_URL}/faq`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/reviews`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const blogPosts = [
    "personal-tax-checklist-toronto-2025",
    "small-business-tax-deductions-canada",
    "cra-audit-what-to-expect",
  ].map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
