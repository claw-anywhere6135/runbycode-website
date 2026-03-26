import Link from 'next/link';
import type { Metadata } from 'next';
import SectionDivider from '@/components/ui/SectionDivider';
import HorizontalScrollCards from '@/components/ui/HorizontalScrollCards';
import GridBackground from '@/components/ui/GridBackground';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WooCommerce Performance Optimierung',
  description: 'Core Web Vitals, Datenbank-Tuning, Asset-Minification und CDN. Google PageSpeed 90+ fuer WooCommerce Shops.',
  url: 'https://runbycode.de/services/performance',
  provider: {
    '@type': 'Organization',
    name: 'RunByCode',
    url: 'https://runbycode.de',
  },
  areaServed: 'DE',
  serviceType: 'WooCommerce Performance Optimierung',
};

export const metadata: Metadata = {
  title: 'WordPress PageSpeed Optimierung & WooCommerce Ladezeit | RunByCode',
  description: 'WordPress PageSpeed Optimierung & WooCommerce Ladezeit verbessern. Wir bringen deinen Shop auf Google PageSpeed 90+. Core Web Vitals, Caching, CDN — aus München.',
  keywords: ['WordPress PageSpeed Optimierung', 'WooCommerce Performance Optimierung', 'WordPress Ladezeit optimieren', 'WordPress Speed Optimierung'],
  alternates: { canonical: 'https://runbycode.de/services/performance' },
};

const services = [
  {
    icon: 'fa-solid fa-gauge-high',
    title: 'Google PageSpeed 90+',
    desc: 'Lighthouse-Score optimiert fuer Mobile und Desktop. Core Web Vitals im gruenen Bereich.',
    stat: '90+',
    statLabel: 'PageSpeed',
  },
  {
    icon: 'fa-solid fa-database',
    title: 'Datenbank-Optimierung',
    desc: 'Langsame Queries analysieren, Indizes setzen, Datenbank bereinigen. Merklich schnellere Ladezeiten.',
    stat: '-60%',
    statLabel: 'Query-Time',
  },
  {
    icon: 'fa-brands fa-cloudflare',
    title: 'Image Delivery CDN',
    desc: 'Automatische Bildkomprimierung und CDN-Auslieferung. WebP-Konvertierung inklusive.',
    stat: '-70%',
    statLabel: 'Bildgroesse',
  },
  {
    icon: 'fa-solid fa-code',
    title: 'Script & CSS Deferring',
    desc: 'Render-blocking Resources eliminieren. Above-the-fold priorisieren.',
    stat: 'LCP',
    statLabel: 'Gruen',
  },
  {
    icon: 'fa-solid fa-server',
    title: 'Server-Tuning',
    desc: 'PHP-OPcache, MySQL-Konfiguration, Redis Object Cache. Maximale Server-Performance.',
    stat: 'Redis',
    statLabel: 'Cache',
  },
  {
    icon: 'fa-solid fa-stopwatch',
    title: 'TTFB Optimierung',
    desc: 'Time-to-First-Byte unter 200ms. Caching-Stack richtig konfigurieren.',
    stat: '<200ms',
    statLabel: 'TTFB',
  },
];

export default function PerformancePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#050505]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-6">

        {/* ── Hero ── */}
        <div className="relative mb-10 pattern-grid">
          <GridBackground arc />
          <div className="relative z-10">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-80 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 text-xl">
                <i className="fa-solid fa-bolt" />
              </div>
              <span className="text-xs font-mono bg-blue-500/10 text-blue-300 px-2 py-1 rounded uppercase tracking-wider">
                Core Web Vitals
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              Performance<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Optimierung.
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-2xl animate-fade-in-up delay-100">
              Jede Sekunde Ladezeit kostet dich Conversion. Wir gehen tiefer als Caching-Plugins —
              direkt in den Code, die Datenbank und die Server-Konfiguration.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-4 animate-fade-in-up delay-200">
              {[
                { value: '38 → 91', label: 'Avg. PageSpeed Lift' },
                { value: '-68%', label: 'Ladezeit-Reduktion' },
                { value: '40+', label: 'optimierte Shops' },
              ].map((s) => (
                <div key={s.label} className="glass-card px-4 py-3 rounded-xl border border-white/5">
                  <div className="text-xl font-black text-white">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SectionDivider label="LEISTUNGEN" />

        {/* ── Services — Horizontal Scroll ── */}
        <div className="mb-4">
          <HorizontalScrollCards
            title="Was wir optimieren"
            subtitle="Kein Caching-Plugin-Cargo-Cult. Echte Ursachen, echte Fixes."
            badge="PERFORMANCE"
          >
            {services.map((s) => (
              <div
                key={s.title}
                className="group snap-start flex-shrink-0 w-[260px] md:w-[280px] glass-card p-6 rounded-xl border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-200"
              >
                {/* Stat highlight */}
                <div className="mb-4 flex items-end gap-1.5">
                  <span className="text-2xl font-black text-blue-400 leading-none">{s.stat}</span>
                  <span className="text-xs text-gray-600 mb-0.5">{s.statLabel}</span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <i className={`${s.icon} text-blue-400 text-sm`} />
                  <h3 className="font-bold text-white text-sm">{s.title}</h3>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </HorizontalScrollCards>
        </div>

        <SectionDivider label="VORHER / NACHHER" />

        {/* Before / After comparison cards */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Typische Ergebnisse
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: 'Fashion Shop', before: '38', after: '91', metric: 'PageSpeed Score', gradient: 'from-blue-900/40 to-blue-600/10' },
              { label: 'Boutique Shop', before: '6.5s', after: '2.1s', metric: 'Ladezeit', gradient: 'from-purple-900/40 to-purple-600/10' },
              { label: 'B2B Plattform', before: '320ms', after: '87ms', metric: 'TTFB', gradient: 'from-green-900/40 to-green-600/10' },
              { label: 'Abo-Shop', before: '4.8', after: '1.2', metric: 'LCP (Sekunden)', gradient: 'from-amber-900/40 to-amber-600/10' },
            ].map((c) => (
              <div
                key={c.label}
                className={`glass-card rounded-xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-200`}
              >
                <div className={`bg-gradient-to-br ${c.gradient} px-5 pt-4 pb-3`}>
                  <span className="text-xs text-white/50 font-mono uppercase tracking-wider">{c.label}</span>
                </div>
                <div className="px-5 py-4 flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-sm font-bold text-red-400 line-through opacity-70">{c.before}</div>
                    <div className="text-[10px] text-gray-600 mt-0.5">vorher</div>
                  </div>
                  <i className="fa-solid fa-arrow-right text-blue-500/60 text-xs" />
                  <div className="text-center">
                    <div className="text-lg font-black text-green-400">{c.after}</div>
                    <div className="text-[10px] text-gray-600 mt-0.5">nachher</div>
                  </div>
                  <div className="ml-auto text-xs text-gray-500">{c.metric}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider ctaText="Preise ansehen" ctaHref="/pricing" />

        {/* ── CTA ── */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all btn-shine text-center"
          >
            Performance-Audit anfragen
          </Link>
          <Link
            href="/pricing"
            className="px-8 py-4 border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-all text-center"
          >
            Preise ansehen
          </Link>
        </div>

      </div>
    </div>
  );
}
