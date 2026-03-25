import Link from 'next/link';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'WooCommerce B2B Shop — Custom Development & Integrationen',
  description: 'WooCommerce B2B Shop Entwicklung: Kundengruppen, Rollenpreise, ERP/CRM-Integration, Custom Checkout und komplexe Plugin-Entwicklung.',
  alternates: { canonical: 'https://runbycode.de/services/b2b-shops' },
};

export default function B2BPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 text-xl">
            <i className="fa-solid fa-briefcase" />
          </div>
          <span className="text-xs font-mono bg-purple-500/10 text-purple-300 px-2 py-1 rounded">FEATURE DEVELOPMENT</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          B2B Shop<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Lösungen.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          Standard-WooCommerce reicht für B2B nicht aus. Wir bauen die Features, die dein
          Geschäftskundengeschäft wirklich braucht.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: 'fa-solid fa-tags', title: 'B2B-Preisgruppen', desc: 'Unterschiedliche Preise für verschiedene Kundengruppen, Händler, Großkunden. Role-based Pricing.' },
            { icon: 'fa-solid fa-file-invoice', title: 'Netto-Preise & Rechnung', desc: 'Automatische Netto-Darstellung für B2B-Kunden, Rechnungs-Anforderung statt Sofortbezahlung.' },
            { icon: 'fa-solid fa-plug', title: 'ERP/CRM-Integration', desc: 'REST-API-Anbindung an Warenwirtschaftssysteme. Bestellungen automatisch in dein ERP übertragen.' },
            { icon: 'fa-solid fa-users', title: 'Kundengruppen & Rollen', desc: 'Registrierungsprozess für Geschäftskunden, manuelle Freigabe, rollenbasierte Sichtbarkeit.' },
            { icon: 'fa-solid fa-cart-shopping', title: 'Custom Checkout', desc: 'B2B-spezifische Checkout-Felder, Bestelllimits, Bestellgenehmigungen, Sammelrechnungen.' },
            { icon: 'fa-brands fa-stripe', title: 'Payment-Integration', desc: 'Stripe, PayPal, SEPA-Lastschrift, Kauf auf Rechnung. Vollständige Payment-Stack-Einrichtung.' },
          ].map((item) => (
            <div key={item.title} className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <i className={`${item.icon} text-purple-400`} />
                <h3 className="font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-card rounded-2xl p-6 border border-white/5 mb-12">
          <h3 className="font-bold text-white mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {['PHP 8.x', 'React / Vue', 'REST API', 'WooCommerce Hooks', 'MySQL', 'Stripe SDK', 'PayPal SDK', 'Custom Plugins'].map((tag) => (
              <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-xs text-gray-400">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/contact" className="px-8 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-500 transition-all btn-shine">
            Projekt besprechen
          </Link>
          <Link href="/pricing" className="px-8 py-4 border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-all">
            Preise ansehen
          </Link>
        </div>
      </div>
    </div>
  );
}
