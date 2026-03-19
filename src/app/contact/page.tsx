import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/ui/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Edward & Associates | Book a Tax Consultation in Toronto",
  description:
    "Book a tax consultation with Edward & Associates at 398 Bloor Street West, Toronto. Call (416) 975-8578 or fill out our contact form. Open Monday–Saturday.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: BUSINESS.name,
            url: BUSINESS.url,
            telephone: BUSINESS.phoneTel,
            email: BUSINESS.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: BUSINESS.address.street,
              addressLocality: BUSINESS.address.city,
              addressRegion: BUSINESS.address.province,
              postalCode: BUSINESS.address.postalCode,
              addressCountry: BUSINESS.address.country,
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: BUSINESS.geo.lat,
              longitude: BUSINESS.geo.lng,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "10:30",
                closes: "19:30",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "10:30",
                closes: "17:30",
              },
            ],
            priceRange: "$",
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-brand-green-950 py-16 md:py-20">
        <div className="max-w-content mx-auto px-4 md:px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-[-0.02em] mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll respond within 24 hours, or
            call us directly for immediate assistance.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-24">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-slate-950 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                <h2 className="font-heading text-2xl font-semibold text-slate-950 mb-6">
                  Contact Information
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <MapPin
                      className="w-6 h-6 text-brand-gold-600 flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-slate-950">Address</p>
                      <p className="text-slate-600">{BUSINESS.address.full}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone
                      className="w-6 h-6 text-brand-gold-600 flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-slate-950">Phone</p>
                      <a
                        href={`tel:${BUSINESS.phoneTel}`}
                        className="text-slate-600 hover:text-brand-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
                      >
                        {BUSINESS.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail
                      className="w-6 h-6 text-brand-gold-600 flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-slate-950">Email</p>
                      <a
                        href={`mailto:${BUSINESS.email}`}
                        className="text-slate-600 hover:text-brand-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
                      >
                        {BUSINESS.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock
                      className="w-6 h-6 text-brand-gold-600 flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-slate-950">Office Hours</p>
                      <div className="text-slate-600 space-y-1">
                        <p>{BUSINESS.hours.weekday}</p>
                        <p>{BUSINESS.hours.saturday}</p>
                        <p>{BUSINESS.hours.sunday}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden border border-slate-200">
                <iframe
                  title="Edward and Associates office location at 398 Bloor Street West, Toronto"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4!2d-79.4071!3d43.6661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z398+Bloor+St+W%2C+Toronto%2C+ON+M5S+1X4!5e0!3m2!1sen!2sca!4v1700000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
