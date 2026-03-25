import Link from 'next/link';

import type { Metadata } from 'next';

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

export default function PerformancePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 text-xl">
            <i className="fa-solid fa-bolt" />
          </div>
          <span className="text-xs font-mono bg-blue-500/10 text-blue-300 px-2 py-1 rounded">CORE WEB VITALS</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Performance<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Optimierung.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          Jede Sekunde Ladezeit kostet dich Conversion. Wir gehen tiefer als Caching-Plugins —
          direkt in den Code, die Datenbank und die Server-Konfiguration.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            { icon: 'fa-solid fa-gauge-high', title: 'Google PageSpeed 90+', desc: 'Lighthouse-Score optimiert für Mobile und Desktop. Core Web Vitals im grünen Bereich.' },
            { icon: 'fa-solid fa-database', title: 'Datenbank-Optimierung', desc: 'Langsame Queries analysieren, Indizes setzen, Datenbank bereinigen. Merklich schnellere Ladezeiten.' },
            { icon: 'fa-brands fa-cloudflare', title: 'Image Delivery CDN', desc: 'Automatische Bildkomprimierung und CDN-Auslieferung. WebP-Konvertierung inklusive.' },
            { icon: 'fa-solid fa-code', title: 'Script & CSS Deferring', desc: 'Render-blocking Resources eliminieren. Above-the-fold priorisieren.' },
            { icon: 'fa-solid fa-server', title: 'Server-Tuning', desc: 'PHP-OPcache, MySQL-Konfiguration, Redis Object Cache. Maximale Server-Performance.' },
            { icon: 'fa-solid fa-stopwatch', title: 'TTFB Optimierung', desc: 'Time-to-First-Byte unter 200ms. Caching-Stack richtig konfigurieren.' },
          ].map((item) => (
            <div key={item.title} className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <i className={`${item.icon} text-blue-400`} />
                <h3 className="font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all btn-shine">
            Performance-Audit anfragen
          </Link>
          <Link href="/pricing" className="px-8 py-4 border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-all">
            Preise ansehen
          </Link>
        </div>
      </div>
    </div>
  );
}
