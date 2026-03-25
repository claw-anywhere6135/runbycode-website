import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WordPress Wartung & Betreuung Muenchen | RunByCode',
  description: 'Professionelle WordPress Wartung aus Muenchen. Core-Updates, Plugin-Kompatibilitaet, Uptime-Monitoring & Backups. Florian Salman & Team betreuen 40+ WordPress-Projekte.',
  alternates: { canonical: 'https://runbycode.de/wordpress-wartung' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WordPress Wartung',
  description: 'Professionelle WordPress Wartung und Betreuung aus Muenchen. Core-Updates, Plugin-Management, Uptime-Monitoring, Backups und monatliches Reporting.',
  provider: {
    '@type': 'Organization',
    name: 'RunByCode',
    url: 'https://runbycode.de',
  },
  areaServed: {
    '@type': 'City',
    name: 'Muenchen',
  },
  serviceType: 'WordPress Wartung',
};

const features = [
  {
    icon: 'fa-solid fa-code-branch',
    title: 'WordPress Core Updates',
    desc: 'Jedes WordPress-Core-Update wird auf Staging getestet und mit Kompatibilitaetscheck eingespielt. Minor-Updates sofort, Major-Updates nach vollstaendigem Test.',
  },
  {
    icon: 'fa-solid fa-puzzle-piece',
    title: 'Plugin & Theme Updates',
    desc: 'Alle aktiven Plugins und das Theme werden gebundelt aktualisiert — mit Pruefung auf Konflikte und visuelle Veraenderungen. Kein Wildwuchs, kein Zufall.',
  },
  {
    icon: 'fa-solid fa-eye',
    title: 'Uptime-Monitoring',
    desc: 'Minuetliche Erreichbarkeitspruefung deiner WordPress-Website. Bei Ausfall sofortiger Alert — wir reagieren bevor du es merkst.',
  },
  {
    icon: 'fa-solid fa-box-archive',
    title: 'Automatische Backups',
    desc: 'Taeglich vollstaendige Backups von Datenbank und Dateisystem auf externem Storage. Wiederherstellung in unter 15 Minuten moeglich.',
  },
  {
    icon: 'fa-solid fa-triangle-exclamation',
    title: 'Error-Log-Analyse',
    desc: 'PHP-Fehler, WordPress-Debug-Logs und Server-Errors werden regelmaessig ausgewertet. Stille Fehler die Nutzern schaden werden gefunden und behoben.',
  },
  {
    icon: 'fa-solid fa-file-lines',
    title: 'Transparentes Reporting',
    desc: 'Jeden Monat ein klarer Bericht: Was wurde gemacht, welche Stunden wurden genutzt, was steht an. Kein Blackbox-Vertrag — volle Nachvollziehbarkeit.',
  },
];

const faqItems = [
  {
    q: 'Was kostet WordPress Wartung?',
    a: 'Unsere WordPress Wartung startet ab 490 Euro pro Monat fuer 5 Entwicklerstunden. Das umfasst Core- und Plugin-Updates, Monitoring und Backups. Groessere Websites oder WooCommerce-Shops benoetigen oft mehr Stunden — wir beraten dich gerne zur richtigen Paketgroesse. Alle Pakete sind monatlich kuendbar.',
  },
  {
    q: 'Wie oft sollte WordPress gewartet werden?',
    a: 'Fuer produktive WordPress-Websites empfehlen wir monatliche Updates und kontinuierliches Monitoring. WordPress erhaelt regelmaessig Sicherheitspatches — je laenger du wartest, desto groesser das Angriffsfenster. Mit einem Wartungsvertrag bist du immer auf dem aktuellen Stand.',
  },
  {
    q: 'Was passiert wenn ein Update meine Website zerstoert?',
    a: 'Da wir immer zuerst auf einer Staging-Umgebung testen, ist das Risiko minimal. Falls dennoch etwas schiefgeht: Wir haben ein aktuelles Backup und reverten sofort — auf Kosten unserer Stunden, nicht deiner. Kein Stress, kein Datenverlust.',
  },
  {
    q: 'Brauche ich einen Wartungsvertrag oder reicht ein gelegentliches Update?',
    a: 'Ein gelegentliches manuelles Update ist besser als gar nichts — aber kein Ersatz fuer systematische Wartung. Ein Wartungsvertrag stellt sicher, dass nichts vergessen wird, Monitoring aktiv laeuft und im Ernstfall jemand sofort reagiert. Besonders bei Websites mit Kundendaten oder E-Commerce ist das Pflicht.',
  },
  {
    q: 'Uebernehmt ihr auch Websites die lange nicht gewartet wurden?',
    a: 'Ja. Wir beginnen mit einem Site-Audit: aktueller Zustand, offene Updates, Sicherheitsrisiken, technische Schulden. Danach bringen wir die Website auf einen sicheren Stand und uebergehen in den regulaeren Wartungsrhythmus. Der Einstieg ist auch bei stark veralteten Websites moeglich.',
  },
];

export default function WordPressWartungPage() {
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
            <i className="fa-brands fa-wordpress" />
          </div>
          <span className="text-xs font-mono bg-blue-500/10 text-blue-300 px-2 py-1 rounded uppercase tracking-wider">
            WordPress Wartung
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
          WordPress Wartung in Muenchen —{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Professionell. Zuverlaessig. Transparent.
          </span>
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-400 mb-12 max-w-3xl leading-relaxed">
          WordPress Wartung ist keine optionale Nebensache — sie ist aktiver Schutz fuer deine
          Website, deine Daten und deine Kunden. Professionelle{' '}
          <strong className="text-white">WordPress Betreuung</strong> umfasst systematische
          Updates auf Staging, Uptime-Monitoring, automatische Backups und transparentes
          Reporting. Als{' '}
          <strong className="text-white">WordPress Wartung Agentur aus Muenchen</strong> betreuen
          wir ueber 40 WordPress-Projekte — von Unternehmenswebsites bis hin zu komplexen
          WooCommerce-Shops.
        </p>

        {/* Feature Cards */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Was unsere WordPress Wartung umfasst
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
          Warum ist WordPress Wartung so wichtig?
        </h2>
        <div className="space-y-4 mb-12">
          <p className="text-gray-400 leading-relaxed">
            WordPress ist das meistgenutzte CMS der Welt — und genau deshalb das attraktivste
            Angriffsziel. Ungepatchte Sicherheitsluecken in WordPress-Plugins und dem Core werden
            von automatisierten Angriffsscripten aktiv ausgenutzt. Eine einzige veraltete
            Komponente kann ausreichen, um deine Website zu kompromittieren, Kundendaten zu
            stehlen oder Malware einzuschleusen. Professionelle{' '}
            <strong className="text-white">WordPress Wartung</strong> schliesst diese
            Angriffsvektoren systematisch.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Plugin-Konflikte sind ein unterschaetztes Risiko. Wenn zwei Plugins gleichzeitig
            aktualisiert werden ohne vorherigen Kompatibilitaetstest, koennen visuelle Brueche,
            Funktionsverluste oder White-Screens die Folge sein. Ohne Staging-Umgebung entdeckst
            du solche Probleme erst wenn deine Besucher sie melden — oft zu spaet. Mit unserer
            systematischen WordPress-Betreuung testen wir alles zuerst auf Staging.
          </p>
          <p className="text-gray-400 leading-relaxed mb-12">
            Datenverlust durch fehlende Backups ist ein weiteres reales Szenario. Ob Serverausfall,
            Hacking-Angriff oder versehentliches Loeschen — ohne aktuelle Backups ist der Schaden
            moeglicherweise irreparabel. Unser Wartungsvertrag beinhaltet taeglich vollstaendige
            Backups mit schneller Wiederherstellung. Regelmae&szlig;ige WordPress-Wartung ist
            die guenstigste Versicherung gegen diese Risiken.
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
              title: 'Staging-Umgebung klonen',
              desc: 'Vor jedem Update-Zyklus erstellen wir eine identische Kopie deiner Live-Website auf der Staging-Umgebung — mit allen Daten, Plugins und der exakten Serverkonfiguration.',
            },
            {
              step: '02',
              title: 'Updates einspielen und testen',
              desc: 'WordPress Core, alle Plugins und das Theme werden auf Staging aktualisiert. Wir pruefen auf PHP-Fehler, JavaScript-Exceptions und visuelle Veraenderungen.',
            },
            {
              step: '03',
              title: 'Kernfunktionen manuell pruefen',
              desc: 'Formulare, Navigation, Suche, Login-Bereich und alle kritischen Seitentypen werden manuell getestet. Erst bei gruener Ampel wird der naechste Schritt eingeleitet.',
            },
            {
              step: '04',
              title: 'Live-Deployment mit Backup',
              desc: 'Vor dem Live-Einspielen erstellen wir ein frisches Backup als letzte Sicherheitslinie. Das Deployment selbst ist dokumentiert und jederzeit nachvollziehbar.',
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
          WordPress Wartung Pakete
        </h2>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-8 mb-16">
          <p className="text-gray-400 mb-2">
            Alle Pakete beinhalten Staging-Updates, Uptime-Monitoring, Backups und monatliches
            Reporting. Starter fuer kleinere Websites, Growth fuer aktive Projekte,
            Enterprise fuer komplexe Anforderungen.
          </p>
          <p className="text-gray-400 mb-6">
            WordPress Wartung startet ab{' '}
            <strong className="text-white">490 Euro pro Monat</strong> — monatlich kuendbar,
            kein Jahresvertrag.
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
          Haeufige Fragen zur WordPress Wartung
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
            Bereit fuer professionelle WordPress Wartung aus Muenchen?
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
