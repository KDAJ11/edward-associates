"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/constants";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-brand-green-950 text-white" role="contentinfo">
      {/* Newsletter */}
      <div className="newsletter-signup border-b border-white/10">
        <div className="max-w-content mx-auto px-4 md:px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-xl font-semibold mb-1">
                Get Tax Tips Delivered
              </h3>
              <p className="text-sm text-slate-400">
                No spam. Unsubscribe anytime.
              </p>
            </div>
            {subscribed ? (
              <p className="text-brand-gold-400 font-medium">
                Thank you for subscribing!
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address for newsletter
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold-400 w-full sm:w-72"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-brand-gold-600 text-white rounded-lg font-medium hover:bg-brand-gold-500 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:ring-offset-2 focus:ring-offset-brand-green-950"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer columns */}
      <div className="max-w-content mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <Link
              href="/"
              className="font-heading text-xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
            >
              Edward &amp; Associates
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Toronto&apos;s trusted tax and accounting firm. Over 15 years of
              professional, personalised service for individuals, families, and
              businesses.
            </p>
            <p className="mt-6 text-xs text-slate-400">
              Website by{" "}
              <a
                href="https://dotxlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold-400 hover:underline focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
              >
                DOTxLabs
              </a>
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 hover:text-white hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-5 h-5 text-brand-gold-400 flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-sm text-slate-400">
                  {BUSINESS.address.full}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="w-5 h-5 text-brand-gold-400 flex-shrink-0"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="w-5 h-5 text-brand-gold-400 flex-shrink-0"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="w-5 h-5 text-brand-gold-400 flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div className="text-sm text-slate-400 space-y-1">
                  <p>{BUSINESS.hours.weekday}</p>
                  <p>{BUSINESS.hours.saturday}</p>
                  <p>{BUSINESS.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Edward &amp; Associates. All
            rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-slate-400 hover:text-white hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
