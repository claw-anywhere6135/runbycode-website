import Link from 'next/link';

interface SectionDividerProps {
  label?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function SectionDivider({ label, ctaText, ctaHref }: SectionDividerProps) {
  return (
    <div className="relative flex items-center gap-4 py-8 px-6 max-w-4xl mx-auto w-full">
      {/* Left line */}
      <div
        className="flex-1 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.25))',
        }}
      />

      {/* Center label */}
      {label && (
        <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-blue-400/60 whitespace-nowrap px-2">
          {label}
        </span>
      )}

      {/* Right line */}
      <div
        className="flex-1 h-px"
        style={{
          background: 'linear-gradient(to left, transparent, rgba(59,130,246,0.25))',
        }}
      />

      {/* CTA */}
      {ctaText && ctaHref && (
        <Link
          href={ctaHref}
          className="shrink-0 inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-400 transition-colors duration-200 font-medium"
        >
          {ctaText}
          <i className="fa-solid fa-arrow-right text-[10px]" />
        </Link>
      )}
    </div>
  );
}
