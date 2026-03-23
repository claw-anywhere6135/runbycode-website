import Link from 'next/link';

export const metadata = {
  title: 'Leistungen | RunByCode',
};

const services = [
  {
    href: '/services/performance',
    icon: 'fa-solid fa-bolt',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'hover:border-blue-500/30',
    title: 'Performance Optimierung',
    badge: 'CORE WEB VITALS',
    desc: 'Ein langsamer Shop verbrennt Geld. Wir optimieren tief im Code, nicht nur Plugins. Google PageSpeed 90+, Datenbank-Indizes, CDN-Integration.',
  },
  {
    href: '/services/security',
    icon: 'fa-solid fa-shield-halved',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'hover:border-red-500/30',
    title: 'Ironclad Security',
    badge: 'SECURITY',
    desc: '24/7 Malware Scans, Firewall-Konfiguration, Brute-Force-Schutz. Sollte dein Shop gehackt werden: kostenlose Bereinigung inklusive.',
  },
  {
    href: '/services/maintenance',
    icon: 'fa-solid fa-rotate',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'hover:border-green-500/30',
    title: 'Sichere Updates',
    badge: 'WARTUNG',
    desc: 'Kein blindes Update-Drücken. Wir klonen auf Staging, testen Checkout und Core-Funktionen, dann erst live — Zero Downtime Strategy.',
  },
  {
    href: '/services/b2b-shops',
    icon: 'fa-solid fa-briefcase',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'hover:border-purple-500/30',
    title: 'B2B & Custom Development',
    badge: 'FEATURE DEVELOPMENT',
    desc: 'Custom Plugins, B2B-Preisgruppen, API-Integrationen (ERP, CRM, Stripe). Dein Stundenkontingent für echte Weiterentwicklung.',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-mono text-sm tracking-wider uppercase">Full-Stack WooCommerce</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Alles aus einer{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Hand.
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Von Performance über Security bis zum Custom Feature — wir decken den kompletten
            WooCommerce Tech-Stack ab.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`glass-card p-8 rounded-2xl ${s.border} transition-all duration-500 group block`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 ${s.bg} rounded-lg flex items-center justify-center ${s.color} text-xl`}>
                  <i className={s.icon} />
                </div>
                <span className={`text-xs font-mono ${s.bg} ${s.color} px-2 py-1 rounded`}>{s.badge}</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-3">{s.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
              <span className={`inline-flex items-center gap-1 text-sm ${s.color} group-hover:gap-2 transition-all`}>
                Mehr erfahren <i className="fa-solid fa-arrow-right text-xs" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
