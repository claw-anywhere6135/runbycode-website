import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WooCommerce Wartung & Betreuung Muenchen | RunByCode',
  description: 'Professionelle WooCommerce Wartung aus Muenchen. Staging-Updates, Checkout-Tests, Zero-Downtime. Florian Salman & Team betreuen 40+ High-Performance Shops.',
  alternates: { canonical: 'https://runbycode.de/woocommerce-wartung' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WooCommerce Wartung',
  description: 'Professionelle WooCommerce Wartung und Betreuung aus Muenchen. Staging-Updates, Checkout-Tests, Zero-Downtime-Deployments und Error-Log-Monitoring fuer High-Performance Shops.',
  provider: {
    '@type': 'Organization',
    name: 'RunByCode',
    url: 'https://runbycode.de',
  },
  areaServed: {
    '@type': 'City',
    name: 'Muenchen',
  },
  serviceType: 'WooCommerce Wartung',
};

const features = [
  {
    icon: 'fa-solid fa-clone',
    title: 'Staging-Updates',
    desc: 'Jedes WooCommerce-Update laeuft zuerst auf einer exakten Kopie deines Live-Shops. Keine blinden Updates — erst testen, dann live schalten.',
  },
  {
    icon: 'fa-solid fa-cart-check',
    title: 'Checkout-Tests',
    desc: 'Nach jedem Update pruefen wir manuell: Warenkorb, Kasse, Zahlungsabwicklung, Bestellbestaetigung. Checkout-Abbrueche durch Updates passieren bei uns nicht.',
  },
  {
    icon: 'fa-solid fa-shield-check',
    title: 'Zero-Downtime',
    desc: 'Unser Deployment-Prozess stellt sicher, dass dein Shop waehrend der Wartung erreichbar bleibt. Kein Wartungsmodus, keine verlorenen Bestellungen.',
  },
  {
    icon: 'fa-solid fa-triangle-exclamation',
    title: 'Error-Log-Monitoring',
    desc: 'PHP-Fehler, JavaScript-Exceptions und WooCommerce-Logs werden taeglich ausgewertet. Wir sehen Probleme bevor deine Kunden sie sehen.',
  },
  {
    icon: 'fa-solid fa-database',
    title: 'Datenbank-Optimierung',
    desc: 'WooCommerce-Datenbanken wachsen schnell. Wir bereinigen Transients, optimieren Tabellen und halten deine DB performant — fuer schnelle Ladezeiten.',
  },
  {
    icon: 'fa-solid fa-puzzle-piece',
    title: 'Plugin-Kompatibilitaet',
    desc: 'Vor jedem Update pruefen wir Kompatibilitaet zwischen WooCommerce Core, Plugins und Theme. Plugin-Konflikte werden erkannt, bevor sie Probleme verursachen.',
  },
];

const faqItems = [
  {
    q: 'Was kostet WooCommerce Wartung?',
    a: 'Unsere WooCommerce Wartung startet ab 490 Euro pro Monat fuer 5 Entwicklerstunden. Das Paket umfasst Updates, Monitoring, Backups und grundlegende Betreuung. Fuer aktive Shops mit hoeherem Traffic empfehlen wir das Growth-Paket mit 10 Stunden. Alle Pakete laufen monatlich kuendbar.',
  },
  {
    q: 'Wie oft sollte WooCommerce gewartet werden?',
    a: 'Fuer produktive WooCommerce Shops empfehlen wir monatliche Updates und kontinuierliches Monitoring. WordPress und WooCommerce erhalten regelmaessig Sicherheitsupdates — ein ungewarteter Shop ist ein Sicherheitsrisiko. Mit unserem Wartungsvertrag sind alle Updates zeitnah und sicher eingespielt.',
  },
  {
    q: 'Was passiert wenn ein Update meinen Shop kaputtmacht?',
    a: 'Da wir immer zuerst auf einer Staging-Umgebung testen, passiert das selten. Falls dennoch etwas schiefgeht: Wir revertten sofort auf den letzten stabilen Stand und analysieren das Problem auf Kosten unserer Stunden — nicht auf deine. Dein Shop ist immer abgesichert.',
  },
  {
    q: 'Brauche ich einen Wartungsvertrag?',
    a: 'Fuer einen Shop der aktiv Umsatz generiert: ja. Ein ungepflegter WooCommerce-Shop haeuft technische Schulden an, wird anfaelliger fuer Sicherheitsluecken und laeuft irgendwann in Inkompatibilitaeten. Ein monatlicher Wartungsvertrag ist die guenstigste Versicherung gegen Ausfaelle und Datenverlust.',
  },
  {
    q: 'Koennen wir die WooCommerce Wartung auch nach einer Hacked-Site starten?',
    a: 'Ja. Wir bereinigen zuerst den Shop (Malware-Entfernung, Sicherheitshaertung) und uebergehen dann in den regulaeren Wartungsvertrag. Infizierte Shops werden vollstaendig gesaeubert, bevor wir die laufende Betreuung uebernehmen.',
  },
];

export default function WooCommerceWartungPage() {
  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Badge */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 text-xl">
            <i className="fa-solid fa-rotate" />
          </div>
          <span className="text-xs font-mono bg-blue-500/10 text-blue-300 px-2 py-1 rounded uppercase tracking-wider">
            WooCommerce Wartung
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
          WooCommerce Wartung in Muenchen —{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Sicher. Transparent. Ohne Ausfaelle.
          </span>
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-400 mb-12 max-w-3xl leading-relaxed">
          WooCommerce Wartung bedeutet mehr als einmal im Monat auf &ldquo;Update&rdquo; zu
          klicken. Professionelle <strong className="text-white">WooCommerce Betreuung</strong>{' '}
          umfasst Staging-Tests, Checkout-Pruefungen, Error-Log-Auswertung und einen definierten
          Rollback-Plan — damit dein Shop immer laeuft und keine Bestellung verloren geht. Als{' '}
          <strong className="text-white">WooCommerce Wartung Agentur aus Muenchen</strong> betreuen
          wir ueber 40 aktive High-Performance-Shops mit diesem Standard.
        </p>

        {/* Feature Cards */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Was unsere WooCommerce Wartung umfasst
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {features.map((f) => (
            <div key={f.title} className="glass-card p-6 rounded-xl border border-white/5 bg-white/2">
              <div className="flex items-center gap-3 mb-3">
                <i className={`${f.icon} text-blue-400`} />
                <h3 className="font-bold text-white">{f.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Why */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Warum ist WooCommerce Wartung so wichtig?
        </h2>
        <div className="space-y-4 mb-6">
          <p className="text-gray-400 leading-relaxed">
            WooCommerce ist eines der komplexesten Open-Source-Systeme fuer E-Commerce — und damit auch
            eines der haeufigsten Angriffsziele. Ungepatchte Sicherheitsluecken in WooCommerce-Plugins
            sind der haeufigste Einstiegspunkt fuer Angreifer. Ein einziges ungepflegtes Plugin kann
            ausreichen, um einen kompletten Shop zu kompromittieren, Kundendaten zu stehlen oder
            SEO-Rankings durch eingespiegte Malware zu zerstoeren.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Plugin-Konflikte sind eine weitere grosse Gefahr. WooCommerce-Core-Updates sind nicht immer
            rueckwaertskompatibel mit allen Plugins. Ohne Staging-Umgebung und Kompatibilitaetspruefung
            koennen Updates den Checkout lahmlegen, Zahlungs-Gateways ausschalten oder ganze
            Produktseiten unbrauchbar machen. Jede Stunde Downtime bedeutet direkte Umsatzverluste.
          </p>
          <p className="text-gray-400 leading-relaxed mb-12">
            Checkout-Abbrueche durch technische Fehler sind besonders schaedlich — nicht nur weil der
            Umsatz fehlt, sondern weil veraeaergerte Kunden selten zurueckkommen. Regelmaessige
            WooCommerce-Wartung mit manuellen Checkout-Tests nach jedem Update verhindert genau diese
            Szenarien. Wartung ist keine Ausgabe — sie ist Umsatzschutz.
          </p>
        </div>

        {/* Process */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Unser Wartungs-Prozess in 4 Schritten
        </h2>
        <div className="space-y-4 mb-16">
          {[
            {
              step: '01',
              title: 'Staging-Clone erstellen',
              desc: 'Bevor wir irgendetwas anfassen, erstellen wir eine exakte Kopie deines Live-Shops auf der Staging-Umgebung — inklusive Datenbank, Medien und Konfiguration.',
            },
            {
              step: '02',
              title: 'Updates testen',
              desc: 'WooCommerce Core, alle Plugins und das Theme werden auf Staging eingespielt. Wir pruefen auf PHP-Errors, visuelle Brueche und Funktionsverluste.',
            },
            {
              step: '03',
              title: 'Checkout manuell pruefen',
              desc: 'Wir legen eine Testbestellung durch den kompletten Checkout — Warenkorb, Versand, Zahlung, Bestellbestaetigung. Erst bei gruener Ampel geht es weiter.',
            },
            {
              step: '04',
              title: 'Live-Deployment',
              desc: 'Nach erfolgreichem Test wird auf Live deployt — mit vorherigem Backup als Sicherheitsnetz. Der gesamte Prozess ist dokumentiert und nachvollziehbar.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-6 p-5 glass-card rounded-xl border border-white/5"
            >
              <span className="text-3xl font-bold text-blue-500/30 font-mono leading-tight mt-1 min-w-[2.5rem]">
                {item.step}
              </span>
              <div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing CTA */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          WooCommerce Wartung Pakete
        </h2>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-8 mb-16">
          <p className="text-gray-400 mb-2">
            Von Starter (5 Stunden/Monat) bis Enterprise (individuell) — alle Pakete beinhalten
            Staging-Updates, Monitoring, Backups und monatliches Reporting. Monatlich kuendbar,
            kein Jahresvertrag.
          </p>
          <p className="text-gray-400 mb-6">
            Preise starten ab{' '}
            <strong className="text-white">490 Euro pro Monat</strong> fuer professionelle
            WooCommerce Wartung aus Muenchen.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all btn-shine"
          >
            Alle Pakete ansehen
            <i className="fa-solid fa-arrow-right text-sm" />
          </Link>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Haeufige Fragen zur WooCommerce Wartung
        </h2>
        <div className="bg-white/2 border border-white/5 rounded-2xl p-8 mb-16">
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.q} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                <h3 className="font-bold text-white mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-8">
          <p className="text-gray-400 mb-6 text-lg">
            Bereit fuer zuverlaessige WooCommerce Wartung aus Muenchen?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-700 transition-all shadow-lg shadow-blue-900/30 btn-shine border border-white/10"
          >
            Jetzt Beratungsgespraech buchen
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
