import Link from 'next/link';

interface SectionDividerProps {
  label?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function SectionDivider({ label, ctaText, ctaHref }: SectionDividerProps) {
  return (
    <div className="relative flex items-center gap-4 py-8 px-6 max-w-4xl mx-auto w-full">
      {/* Left line — Fix #2: opacity erhöht auf 0.38, leichter blur für Glow-Effekt */}
      <div
        className="flex-1 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.38))',
          filter: 'blur(0.4px)',
        }}
      />

      {/* Center label — Fix #2: text-[11px] statt text-[10px], opacity erhöht */}
      {label && (
        <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-blue-400/75 whitespace-nowrap px-2">
          {label}
        </span>
      )}

      {/* Right line */}
      <div
        className="flex-1 h-px"
        style={{
          background: 'linear-gradient(to left, transparent, rgba(59,130,246,0.38))',
          filter: 'blur(0.4px)',
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
