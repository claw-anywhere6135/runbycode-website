import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WooCommerce Entwickler Muenchen | Florian Salman — RunByCode',
  description: 'WooCommerce Entwickler aus Muenchen: Florian Salman & Team. 10+ Jahre WooCommerce-Erfahrung, 40+ betreute Shops, direkter Ansprechpartner — kein anonymes Callcenter.',
  alternates: { canonical: 'https://runbycode.de/woocommerce-entwickler' },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Florian Salman',
  jobTitle: 'WooCommerce Entwickler',
  worksFor: {
    '@type': 'Organization',
    name: 'RunByCode',
    url: 'https://runbycode.de',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Muenchen',
    addressCountry: 'DE',
  },
  description: 'Senior WooCommerce Entwickler aus Muenchen mit ueber 10 Jahren Erfahrung in der Entwicklung und Betreuung von High-Performance WooCommerce Shops.',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WooCommerce Entwicklung',
  description: 'WooCommerce Entwicklung, Customizing und Betreuung durch spezialisierte Entwickler aus Muenchen mit ueber 10 Jahren Erfahrung.',
  provider: {
    '@type': 'Organization',
    name: 'RunByCode',
    url: 'https://runbycode.de',
  },
  areaServed: {
    '@type': 'City',
    name: 'Muenchen',
  },
  serviceType: 'WooCommerce Entwicklung',
};

const skills = [
  {
    icon: 'fa-solid fa-cart-shopping',
    title: 'WooCommerce Core & Extensions',
    desc: 'Custom Post Types, Product Variations, Order Management, Subscriptions, Memberships — tief in WooCommerce, nicht nur an der Oberflaeche.',
  },
  {
    icon: 'fa-solid fa-code',
    title: 'Custom Plugin-Entwicklung',
    desc: 'Wenn kein Plugin genau das tut was du brauchst, entwickeln wir es. Sauber, dokumentiert, wartbar — kein Quick-Hack-Code.',
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Performance-Optimierung',
    desc: 'Core Web Vitals, Query-Optimierung, Caching-Strategie, Bild-Optimierung. WooCommerce-Shops die schnell sind verkaufen mehr.',
  },
  {
    icon: 'fa-solid fa-link',
    title: 'API & Drittsystem-Anbindung',
    desc: 'ERP, CRM, Buchhaltungssoftware, Lager, Versanddienstleister — wir integrieren WooCommerce in bestehende System-Landschaften.',
  },
  {
    icon: 'fa-solid fa-briefcase',
    title: 'B2B WooCommerce',
    desc: 'Kundenspezifische Preislisten, Rollenbasierte Zugriffe, Staffelpreise, Netto-Darstellung, Bestelllimits — alles was B2B-Shops brauchen.',
  },
  {
    icon: 'fa-solid fa-rotate',
    title: 'Wartung & Betreuung',
    desc: 'Langfristige Betreuung bestehender Shops. Staging-Updates, Monitoring, Security-Haertung — als verlasslicher Partner, nicht nur als einmaliger Dienstleister.',
  },
];

const faqItems = [
  {
    q: 'Wie erreiche ich euch als WooCommerce Entwickler?',
    a: 'Direkt per E-Mail oder ueber unser Kontaktformular. Du wirst mit Florian oder einem Senior-Entwickler aus unserem Team sprechen — nicht mit einem Account Manager oder einem Bot. Wir legen Wert auf direkte Kommunikation ohne Umwege.',
  },
  {
    q: 'Arbeitet ihr auch als WooCommerce Freelancer?',
    a: 'Ja, wir arbeiten sowohl als dediziertes Team als auch in Freelancer-Strukturen. Florian steht direkt als WooCommerce Entwickler zur Verfuegung — fuer Projekte, Wartungsvertraege und kurzfristige Bugfixing-Einsaetze.',
  },
  {
    q: 'Was unterscheidet euch von einer grossen Agentur?',
    a: 'Bei uns gibt es keinen anonymen Kundenbetreuer zwischen dir und dem Entwickler. Du sprichst direkt mit dem Menschen der deinen Code schreibt. Das bedeutet kuerzeree Kommunikationswege, ehrlichere Einschaetzungen und weniger Overhead. Gleichzeitig haben wir die Teamgroesse um komplexe Projekte zu stemmen.',
  },
  {
    q: 'Welche WooCommerce-Projekte habt ihr bereits umgesetzt?',
    a: 'Ueber 40 aktive WooCommerce-Shops betreuen wir aktuell — von kleinen Spezialitaeten-Shops bis hin zu grossen B2B-Plattformen mit tausenden Produkten und komplexen Preislogiken. Referenzen stellen wir gerne im persoenlichen Gespraech vor.',
  },
  {
    q: 'Koennt ihr auch bestehende WooCommerce-Shops uebernehmen?',
    a: 'Ja, das ist ein haeufiger Einstieg. Wir beginnen mit einem technischen Audit: Code-Qualitaet, Performance, Sicherheitsstatus, offene Baustellen. Danach erarbeiten wir einen Uebergabeplan und uebernehmen die laufende Betreuung. Wir haben schon viele Shops nach Jahren Vernachlaessigung wieder auf Kurs gebracht.',
  },
];

export default function WooCommerceEntwicklerPage() {
  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Hero — relative wrapper for ambient glow */}
        <div className="relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

          {/* Badge */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 text-xl">
              <i className="fa-solid fa-user-gear" />
            </div>
            <span className="text-xs font-mono bg-blue-500/10 text-blue-300 px-2 py-1 rounded uppercase tracking-wider">
              WooCommerce Entwickler
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            WooCommerce Entwickler in Muenchen —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Florian Salman & Team.
            </span>
          </h1>

          {/* Intro */}
          <p className="text-lg text-gray-400 mb-8 max-w-3xl leading-relaxed">
            Kein anonymes Callcenter. Kein Account-Manager als Zwischenebene. Du arbeitest direkt
            mit{' '}
            <strong className="text-white">Florian Salman</strong> und unserem Team aus
            spezialisierten WooCommerce-Entwicklern aus Muenchen. Ueber 10 Jahre WooCommerce-Erfahrung,
            40+ betreute High-Performance-Shops und ein klares Versprechen: echte Entwickler die
            verstehen was sie bauen.
          </p>
        </div>

        {/* Trust Badge Row */}
        <div className="flex flex-wrap items-center gap-6 mb-16 pb-12 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400 text-sm">{'★★★★★'}</div>
            <span className="text-gray-400 text-sm">5.0 / 5.0</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <i className="fa-solid fa-shield-check text-green-400" />
            <span>40+ betreute Projekte</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono px-2 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Antwort ≤ 24h
            </span>
          </div>
        </div>

        {/* Person intro card */}
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-8 mb-20">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shrink-0">
              FS
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Florian Salman</h2>
              <p className="text-blue-400 text-sm font-mono mb-3">Senior WooCommerce Entwickler &amp; Gruender RunByCode</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Florian entwickelt WooCommerce-Shops seit ueber 10 Jahren — von einfachen
                Online-Shops bis hin zu komplexen B2B-Plattformen mit individuellen
                Preislogiken und ERP-Anbindungen. Er hat RunByCode in Muenchen gegruendet mit
                dem Ziel, WooCommerce-Entwicklung transparent, verlasslich und technisch
                herausragend zu machen.
              </p>
              <div className="flex flex-wrap gap-2">
                {['WooCommerce', 'WordPress', 'PHP', 'JavaScript', 'REST API', 'B2B E-Commerce', 'Performance', 'Security'].map((tag) => (
                  <span key={tag} className="text-xs bg-white/5 border border-white/10 text-gray-300 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Direct Contact */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Warum direkte Entwickler-Kommunikation wichtig ist
        </h2>
        <div className="space-y-4 mb-20">
          <p className="text-gray-400 leading-relaxed">
            Bei vielen Agenturen laeuft die Kommunikation ueber Account-Manager die den
            technischen Kontext nicht vollstaendig verstehen. Das fuehrt zu
            Uebersetzungsfehlern, laengeren Runden und Missverstaendnissen die Zeit und Geld
            kosten. Bei RunByCode sprichst du direkt mit dem WooCommerce-Entwickler der an
            deinem Projekt arbeitet — keine Vermittlerebene, keine Informationsverluste.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Das schafft nicht nur schnellere Kommunikation, sondern auch ehrlichere
            Einschaetzungen. Wenn etwas technisch aufwendig ist sagen wir es direkt — ohne
            Verkaufs-Sprech. Wenn ein anderer Ansatz sinnvoller ist erklaeren wir warum. Als
            <strong className="text-white"> WooCommerce Freelancer und Agentur aus Muenchen</strong>{' '}
            legen wir Wert auf langfristige Partnerschaften statt einmalige Projekte.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Unser Team ist klein genug um persoenlich zu bleiben und gross genug um anspruchsvolle
            Projekte zu stemmen. Alle Entwickler sind spezialisiert auf WooCommerce und WordPress —
            kein Generalist-Team das sich alles anliest. Das bedeutet: schnellere Umsetzung,
            weniger Fehler und Code der auch in 2 Jahren noch wartbar ist.
          </p>
        </div>

        {/* Skills */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Was wir als WooCommerce Entwickler umsetzen
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-20">
          {skills.map((s) => (
            <div
              key={s.title}
              className="group glass-card p-6 rounded-xl border border-white/5 bg-white/2 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                  <i className={`${s.icon} text-blue-400 group-hover:text-blue-300 transition-colors`} />
                </div>
                <h3 className="font-bold text-white">{s.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Numbers */}
        <div className="grid grid-cols-3 gap-4 mb-20">
          {[
            { value: '10+', label: 'Jahre WooCommerce-Erfahrung' },
            { value: '40+', label: 'Aktiv betreute Shops' },
            { value: '100%', label: 'Direkte Entwickler-Kommunikation' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-6 rounded-xl border border-white/5 text-center hover:border-blue-400/30 hover:bg-blue-500/5 transition-all duration-200"
            >
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* E-E-A-T section */}
        <div className="bg-white/2 border border-white/5 rounded-2xl p-8 mb-20">
          <h2 className="text-xl font-bold text-white mb-4">Unser Anspruch: Echte Expertise</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            WooCommerce-Entwicklung ist ein Handwerk das Zeit braucht um wirklich gut darin zu werden.
            Wir haben diese Zeit investiert — in eigene Projekte, in Kundenprojekte, in das
            Studium von WooCommerce-Core-Code und in das Debugging von Problemen die andere
            nicht loesen konnten. Das spiegelt sich in der Qualitaet unserer Arbeit wider.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Florian und sein Team sind keine reinen Dienstleister — sie sind aktive
            WooCommerce-Entwickler die taegliche Praxis mit technischer Tiefe verbinden.
            Kein theoretisches Wissen aus Tutorials, sondern harte Erfahrung aus ueber einem
            Jahrzehnt Praxisarbeit an realen Shops mit realem Traffic und echten Anforderungen.
          </p>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Haeufige Fragen zum WooCommerce Entwickler
        </h2>
        <div className="bg-white/2 border border-white/5 rounded-2xl p-8 mb-20">
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.q} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                <div className="flex items-start gap-3 mb-2">
                  <span className="w-5 h-5 bg-blue-500/10 rounded text-blue-400 text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono font-bold">Q</span>
                  <h3 className="font-bold text-white">{item.q}</h3>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-white/5 rounded text-gray-500 text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono font-bold">A</span>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-8">
          <p className="text-gray-400 mb-2 text-lg">
            Direkt mit unserem WooCommerce Entwickler sprechen?
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Kein Formular-Ping-Pong. Florian oder ein Senior aus unserem Team meldet sich
            innerhalb von 24 Stunden.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-700 transition-all shadow-lg shadow-blue-900/30 hover:shadow-blue-500/30 btn-shine border border-white/10"
          >
            Jetzt Gespraech anfragen
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
