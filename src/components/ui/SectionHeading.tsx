interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const subAlignClass =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`mb-12 ${alignClass}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.05em] text-brand-gold-600 font-body mb-3">
        {eyebrow}
      </p>
      <div
        className={`w-12 h-[3px] bg-brand-gold-600 mb-6 ${
          align === "center" ? "mx-auto" : ""
        }`}
        aria-hidden="true"
      />
      <h2 className="font-heading text-4xl md:text-[2.25rem] font-bold text-slate-950 tracking-[-0.02em] leading-tight">
        {heading}
      </h2>
      {subheading && (
        <p
          className={`mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed ${subAlignClass}`}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
