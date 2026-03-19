import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/Button";
import { TESTIMONIALS, BUSINESS } from "@/lib/constants";
import { Star } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Client Reviews & Testimonials | Edward & Associates Toronto",
  description:
    "Read what Toronto clients say about Edward & Associates. 4.9★ Google rating from 35+ verified reviews. 15+ years of trusted tax service.",
  path: "/reviews",
});

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 fill-brand-gold-500 text-brand-gold-500"
          strokeWidth={0}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-green-950 py-20 md:py-28">
        <div className="max-w-content mx-auto px-4 md:px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-[-0.02em] mb-6">
            What Our Clients Say
          </h1>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-8">
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-white">
                {BUSINESS.stats.rating}
                <span className="text-brand-gold-400">&#9733;</span>
              </p>
              <p className="text-sm text-slate-300 mt-1 uppercase tracking-[0.05em]">
                Google Rating
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-white">
                {BUSINESS.stats.reviews}+
              </p>
              <p className="text-sm text-slate-300 mt-1 uppercase tracking-[0.05em]">
                Verified Reviews
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-white">
                {BUSINESS.stats.years}+
              </p>
              <p className="text-sm text-slate-300 mt-1 uppercase tracking-[0.05em]">
                Years of Service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white py-24">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <article
                key={testimonial.name}
                className="bg-white border border-slate-200 border-l-4 border-l-brand-gold-400 rounded-xl p-8"
              >
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-4">
                  <p className="text-slate-600 leading-relaxed italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </blockquote>
                <footer className="mt-4">
                  <p className="font-heading font-semibold text-slate-950">
                    {testimonial.name}
                  </p>
                </footer>
              </article>
            ))}
          </div>

          {/* Google badge */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-400 mb-8">
              All reviews verified on Google
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://www.google.com/maps/place/Edward+%26+Associates/@43.6661,-79.4071,17z/"
                external
                variant="outline"
                size="lg"
              >
                Read All Reviews on Google
              </Button>
              <Button href="/contact" size="lg">
                Book Your Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
