"use client";

import { useState, FormEvent } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "./Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const SERVICE_OPTIONS = [
  "General Inquiry",
  "Personal Tax Returns",
  "Business Tax Services",
  "Bookkeeping",
  "Corporate Tax",
  "Tax Planning",
  "CRA Dispute Resolution",
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "General Inquiry",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Silently handle — placeholder endpoint
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle
          className="w-16 h-16 text-green-600 mx-auto mb-4"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <h3 className="font-heading text-2xl font-semibold text-slate-950 mb-2">
          Thank You!
        </h3>
        <p className="text-slate-600">
          We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Full Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          required
          aria-required="true"
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full border rounded-lg px-4 py-3 text-slate-950 focus:outline-none focus:ring-2 focus:ring-brand-gold-400 ${
            errors.name ? "border-red-500" : "border-slate-200"
          }`}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Email Address <span aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          required
          aria-required="true"
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full border rounded-lg px-4 py-3 text-slate-950 focus:outline-none focus:ring-2 focus:ring-brand-gold-400 ${
            errors.email ? "border-red-500" : "border-slate-200"
          }`}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-phone"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Phone Number
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-950 focus:outline-none focus:ring-2 focus:ring-brand-gold-400"
        />
      </div>

      <div>
        <label
          htmlFor="contact-service"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Service Interested In
        </label>
        <select
          id="contact-service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-950 focus:outline-none focus:ring-2 focus:ring-brand-gold-400 bg-white"
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          required
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className={`w-full border rounded-lg px-4 py-3 text-slate-950 focus:outline-none focus:ring-2 focus:ring-brand-gold-400 resize-vertical ${
            errors.message ? "border-red-500" : "border-slate-200"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={submitting}
        className="w-full md:w-auto"
      >
        {submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
