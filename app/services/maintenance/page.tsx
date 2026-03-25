import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WordPress Wartung & WooCommerce Pflege | RunByCode',
  description:
    'Professionelle WordPress Wartung für WooCommerce Shops. Staging-Updates, Zero-Downtime-Strategy, Uptime-Monitoring und automatische Backups von Florian Salman & Team aus München.',
  keywords: ['WordPress Wartung', 'WooCommerce Wartung', 'WordPress Wartungsvertrag', 'WooCommerce Betreuung', 'WordPress Updates'],
  alternates: { canonical: 'https://runbycode.de/services/maintenance' },
  openGraph: { title: 'WordPress Wartung & WooCommerce Pflege | RunByCode', url: 'https://runbycode.de/services/maintenance' },
};

export default function MaintenancePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'WordPress Wartung & WooCommerce Pflege',
    description: 'Professionelle WordPress Wartung für WooCommerce Shops. Staging-Updates, Zero-Downtime-Strategy, Uptime-Monitoring.',
    provider: { '@type': 'Organization', name: 'RunByCode', url: 'https://runbycode.de' },
    areaServed: 'DE',
    url: 'https://runbycode.de/services/maintenance',
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 text-xl">
            <i className="fa-solid fa-rotate" />
          </div>
          <span className="text-xs font-mono bg-green-500/10 text-green-300 px-2 py-1 rounded">WARTUNG</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          WordPress Wartung<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">für WooCommerce.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl">
          Professionelle <strong className="text-white">WordPress Wartung</strong> die wirklich
          funktioniert. &ldquo;Update&rdquo; drücken ist keine Wartung — echte{' '}
          <strong className="text-white">WooCommerce Betreuung</strong> bedeutet: Testen, Staging,
          Monitoring und ein Plan für den Worst Case.
        </p>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Als spezialisierte <strong className="text-white">WooCommerce Agentur aus München</strong>{' '}
          betreuen wir 40+ aktive Shops mit einer klaren Philosophie: Kein blindes Update-Drücken,
          keine Downtime, keine Überraschungen auf der Rechnung.
        </p>

        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 mb-12">
          <h3 className="font-bold text-white mb-2 font-mono text-sm uppercase tracking-wider">Zero Downtime Strategy</h3>
          <p className="text-gray-400 text-sm">
            Jedes WordPress-Update läuft zuerst auf einer Staging-Kopie deines Live-Shops. Wir
            testen Checkout, Warenkorb und kritische Flows manuell — erst dann geht es live. Das
            ist unsere Garantie für unterbrechungsfreie <strong className="text-white">WordPress Wartung</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            { icon: 'fa-solid fa-clone', title: 'Staging-Environment', desc: 'Exakte Kopie deines WooCommerce-Shops für risikofreies Testen. Alle WordPress-Updates laufen zuerst hier — nie blind auf Live.' },
            { icon: 'fa-solid fa-rotate', title: 'Plugin & Theme Updates', desc: 'WordPress Core, alle Plugins und Themes — mit Kompatibilitätsprüfung vor jedem Update. Keine Konflikte, keine Überraschungen.' },
            { icon: 'fa-solid fa-eye', title: 'Uptime-Monitoring', desc: 'Minütliche Checks auf deinen Shop. Wenn dein WooCommerce-Shop down ist, wissen wir es bevor du es merkst.' },
            { icon: 'fa-solid fa-triangle-exclamation', title: 'Error Log Monitoring', desc: 'PHP-Errors, JavaScript-Fehler und WooCommerce-Logs werden täglich analysiert. Probleme beheben, bevor Kunden sie sehen.' },
            { icon: 'fa-solid fa-box-archive', title: 'Automatische Backups', desc: 'Tägliche Vollbackups auf AWS S3. Wiederherstellung deines WordPress-Shops in unter 15 Minuten möglich.' },
            { icon: 'fa-solid fa-file-lines', title: 'Monatliches Reporting', desc: 'Was wurde gemacht, wie viele Stunden wurden genutzt, was ist für nächsten Monat geplant — volle Transparenz.' },
          ].map((item) => (
            <div key={item.title} className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <i className={`${item.icon} text-green-400`} />
                <h3 className="font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ — keyword target: "wordpress wartung" */}
        <div className="bg-brand-card rounded-2xl p-8 border border-white/5 mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">FAQ: WordPress Wartung</h2>
          <div className="space-y-6">
            {[
              { q: 'Was kostet WordPress Wartung?', a: 'Unsere WordPress Wartung startet ab €490/Monat für 5 Entwicklerstunden. Das deckt Updates, Monitoring, Backups und grundlegende Pflege ab. Für aktive WooCommerce Shops empfehlen wir das Growth-Paket mit 10 Stunden.' },
              { q: 'Was ist der Unterschied zu einem Standard-Wartungsvertrag?', a: 'Standard-Wartungsverträge sind Versicherungspolicen — du zahlst und hoffst, dass nichts passiert. Wir verkaufen Entwicklerzeit: Du weißt genau, was in deinen Stunden gemacht wird. Transparenz statt Blackbox.' },
              { q: 'Muss ich einen Jahresvertrag abschließen?', a: 'Nein. Unsere WordPress Wartung läuft monatlich kündbar mit 14 Tagen Vorlauf. Kein Jahresvertrag, keine Mindestlaufzeit.' },
              { q: 'Was passiert, wenn etwas nach einem Update kaputt geht?', a: 'Da wir immer zuerst auf Staging testen, passiert das selten. Falls doch: Wir revertten sofort und analysieren das Problem auf Kosten unserer Stunden — nicht auf deine.' },
            ].map((item) => (
              <div key={item.q} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                <h3 className="font-bold text-white mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/contact" className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500 transition-all btn-shine">
            Wartungspaket anfragen
          </Link>
          <Link href="/pricing" className="px-8 py-4 border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-all">
            Preise ansehen
          </Link>
        </div>
      </div>
    </div>
  );
}
