import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { TaxTipsPreview } from "@/components/sections/TaxTipsPreview";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = generatePageMetadata({
  title:
    "Edward & Associates | Toronto Tax & Accounting Services | 15+ Years",
  description:
    "Expert personal and corporate tax preparation in Toronto. 15+ years experience, 1000+ clients, 4.9★ Google rating. Located at 398 Bloor Street West. Book your consultation.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <AboutPreview />
      <TaxTipsPreview />
      <FAQPreview />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
