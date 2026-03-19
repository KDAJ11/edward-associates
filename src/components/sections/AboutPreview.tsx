import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutPreview() {
  return (
    <section className="bg-white py-24 md:py-24" aria-labelledby="about-heading">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Meet Edward"
          heading="Your Tax Professional"
          align="left"
        />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Headshot placeholder */}
          <div className="lg:col-span-2">
            <div
              className="bg-brand-green-900 rounded-xl aspect-[3/4] flex items-center justify-center"
              aria-label="Edward — Principal of Edward and Associates"
            >
              <span
                className="font-heading text-7xl font-bold text-white/20"
                aria-hidden="true"
              >
                E
              </span>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-3" id="about-heading">
            <p className="text-slate-600 leading-relaxed mb-6">
              Edward has been serving Toronto&apos;s individuals, families, and
              businesses for over 15 years. Specialising in personal and
              corporate tax preparation, CRA dispute resolution, and strategic
              tax planning, he brings deep expertise and genuine care to every
              client relationship.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Located in the heart of downtown Toronto at 398 Bloor Street West,
              Edward &amp; Associates is easily accessible by TTC and dedicated
              to providing the kind of attentive, professional service that has
              earned a 4.9-star Google rating.
            </p>
            <Link
              href="/about"
              className="text-brand-gold-600 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:ring-offset-2 rounded-sm"
            >
              Read More About Edward &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
