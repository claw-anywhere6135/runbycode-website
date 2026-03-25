import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WooCommerce Wartung Preise & Pakete | RunByCode',
  description: 'WooCommerce Wartung Kosten im Überblick. Flexible Stundenpakete ab €490/Monat — kein Jahresvertrag. WooCommerce Shop erstellen lassen oder betreuen — alles aus München.',
  keywords: ['WooCommerce Wartung Preise', 'WooCommerce Wartung Kosten', 'WooCommerce Shop erstellen lassen Kosten', 'WordPress Wartungsvertrag Kosten'],
  alternates: { canonical: 'https://runbycode.de/pricing' },
  openGraph: { title: 'WooCommerce Wartung Preise & Pakete | RunByCode', url: 'https://runbycode.de/pricing' },
};

const plans = [
  {
    name: 'Starter',
    hours: '5 Stunden',
    price: '490',
    color: 'border-white/10',
    badge: null,
    features: [
      'WooCommerce Wartung & Updates',
      'Staging-Umgebung inklusive',
      '24/7 Uptime-Monitoring',
      'Monatliches Reporting',
      'E-Mail Support',
    ],
  },
  {
    name: 'Growth',
    hours: '10 Stunden',
    price: '890',
    color: 'border-blue-500',
    badge: 'Beliebteste Wahl',
    features: [
      'Alles aus Starter',
      'Performance-Optimierung',
      'Security-Scanning & Firewall',
      'Ø 14min Response-Zeit',
      'Priority Support',
      'Flexible Stunden-Nutzung',
    ],
  },
  {
    name: 'Enterprise',
    hours: '20+ Stunden',
    price: 'Auf Anfrage',
    color: 'border-purple-500/50',
    badge: null,
    features: [
      'Alles aus Growth',
      'Dedizierter Ansprechpartner',
      'Custom Plugin Development',
      'API-Integrationen (ERP, CRM)',
      'B2B Shop Features',
      'Monatliche Strategy-Calls',
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-mono text-sm tracking-wider uppercase">Transparente Preise</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Stunden, die wirklich{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              arbeiten.
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Kein monatliches Abo ins Nirvana. Kaufe Entwicklerstunden und nutze sie flexibel für
            Wartung, Performance oder neue Features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card rounded-2xl p-4 md:p-6 border-2 ${plan.color} relative flex flex-col`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  {plan.badge}
                </div>
              )}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">{plan.name}</h2>
                <p className="text-gray-400 text-sm">{plan.hours} / Monat</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">
                  {plan.price === 'Auf Anfrage' ? '' : '€'}{plan.price}
                </span>
                {plan.price !== 'Auf Anfrage' && (
                  <span className="text-gray-400 text-sm ml-1">/ Monat</span>
                )}
                {plan.price === 'Auf Anfrage' && (
                  <span className="text-3xl font-bold text-white">Auf Anfrage</span>
                )}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-400">
                    <i className="fa-solid fa-check text-green-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block w-full py-3 text-center font-bold rounded-xl transition-all btn-shine ${
                  plan.badge
                    ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-500 hover:to-blue-700 shadow-lg shadow-blue-900/30 border border-[#ffffff42]'
                    : 'border border-white/10 text-white hover:bg-white/5'
                }`}
              >
                {plan.price === 'Auf Anfrage' ? 'Anfrage senden' : 'Jetzt starten'}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="bg-brand-card rounded-2xl p-8 border border-white/5">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Häufige Fragen</h2>
          <div className="space-y-6">
            {[
              { q: 'Was kostet WooCommerce Wartung?', a: 'Unsere WooCommerce Wartung startet ab €490/Monat (5 Entwicklerstunden). Das Growth-Paket mit 10 Stunden für €890/Monat ist für die meisten aktiven Shops das sinnvollste. Keine Jahresverträge, monatlich kündbar.' },
              { q: 'Was kostet ein WooCommerce Shop erstellen lassen?', a: 'Wenn du einen WooCommerce Shop erstellen lassen willst, fallen einmalige Setup-Kosten an, die separat besprochen werden. Danach läuft die laufende Betreuung über unsere Stundenpakete.' },
              { q: 'Was passiert mit nicht genutzten Stunden?', a: 'Nicht genutzte Stunden verfallen am Monatsende. Wir empfehlen das Growth-Paket, da 10 Stunden in der Praxis vollständig ausgenutzt werden.' },
              { q: 'Wofür kann ich die Stunden nutzen?', a: 'Für alles rund um deinen WooCommerce-Shop: WordPress Wartung, Performance-Optimierung, Security, neue Features, Design-Anpassungen, API-Integrationen — komplett flexibel.' },
              { q: 'Gibt es eine Mindestlaufzeit?', a: 'Kein Jahresvertrag. Unsere WooCommerce Betreuung läuft monatlich kündbar mit 14 Tagen Vorlauf.' },
            ].map((item) => (
              <div key={item.q} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                <h3 className="font-bold text-white mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
