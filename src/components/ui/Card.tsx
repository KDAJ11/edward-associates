import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-slate-200 rounded-xl p-8 transition-all duration-200 hover:shadow-lg hover:border-brand-gold-400 focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:ring-offset-2"
    >
      <Icon
        className="w-6 h-6 text-brand-green-800 mb-4"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <h3 className="font-heading text-xl font-semibold text-slate-950 mb-2 tracking-[-0.02em]">
        {title}
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">
        {description}
      </p>
      <span className="text-brand-gold-600 text-sm font-medium group-hover:underline">
        Learn More &rarr;
      </span>
    </Link>
  );
}
