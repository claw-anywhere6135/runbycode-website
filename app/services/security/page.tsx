import Link from 'next/link';

import type { Metadata } from 'next';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WooCommerce Security',
  description: '24/7 Malware-Scans, Firewall-Konfiguration und Hacked Site Rescue fuer WooCommerce Shops.',
  url: 'https://runbycode.de/services/security',
  provider: {
    '@type': 'Organization',
    name: 'RunByCode',
    url: 'https://runbycode.de',
  },
  areaServed: 'DE',
  serviceType: 'WooCommerce Security',
};

export const metadata: Metadata = {
  title: 'WordPress gehackt? WooCommerce Security & Malware Removal | RunByCode',
  description: 'WordPress gehackt — was tun? RunByCode bereinigt deinen WooCommerce Shop sofort. 24/7 Malware-Scans, Firewall, Brute-Force-Schutz. Hacked Site Rescue kostenlos für Kunden.',
  keywords: ['WordPress gehackt was tun', 'WooCommerce Security', 'WordPress Malware entfernen', 'WordPress gehackt Hilfe'],
  alternates: { canonical: 'https://runbycode.de/services/security' },
};

export default function SecurityPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center text-red-400 text-xl">
            <i className="fa-solid fa-shield-halved" />
          </div>
          <span className="text-xs font-mono bg-red-500/10 text-red-300 px-2 py-1 rounded">SECURITY</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Ironclad<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Security.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          Dein WooCommerce-Shop verarbeitet Kundendaten und Zahlungen. Sicherheit ist kein
          optionales Feature — sie ist Grundvoraussetzung.
        </p>

        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <i className="fa-solid fa-shield-check text-red-400 text-2xl mt-1" />
            <div>
              <h3 className="font-bold text-white mb-2">Hacked Site Rescue — kostenlos</h3>
              <p className="text-gray-400 text-sm">
                Als aktiver Kunde: Wenn dein Shop gehackt wird, bereinigen wir ihn sofort und
                komplett kostenlos. Das ist unser Versprechen.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            { icon: 'fa-solid fa-shield-halved', title: 'Firewall-Konfiguration', desc: 'WAF-Regeln, IP-Blacklists, Rate-Limiting. Böswillige Anfragen blockieren bevor sie den Server erreichen.' },
            { icon: 'fa-solid fa-magnifying-glass', title: '24/7 Malware Scanning', desc: 'Automatische Scans aller PHP-Files und der Datenbank. Alarm-System bei verdächtigen Änderungen.' },
            { icon: 'fa-solid fa-lock', title: 'Brute Force Protection', desc: 'Login-Versuche limitieren, Login-URL umbenennen, CAPTCHA integrieren.' },
            { icon: 'fa-solid fa-key', title: '2FA Einrichtung', desc: 'Zwei-Faktor-Authentifizierung für alle Admin-Accounts. Kein Zugriff ohne zweiten Faktor.' },
            { icon: 'fa-solid fa-certificate', title: 'SSL & HTTPS', desc: 'SSL-Zertifikate korrekt konfigurieren, Mixed-Content beheben, HTTP-Strict-Transport-Security.' },
            { icon: 'fa-solid fa-file-shield', title: 'File Permissions', desc: 'WordPress-Dateiberechtigungen korrekt setzen. PHP-Ausführung in Upload-Ordnern deaktivieren.' },
          ].map((item) => (
            <div key={item.title} className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <i className={`${item.icon} text-red-400`} />
                <h3 className="font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ — keyword: "wordpress gehackt was tun" */}
        <div className="bg-brand-card rounded-2xl p-8 border border-white/5 mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">WordPress gehackt — was tun?</h2>
          <div className="space-y-6">
            {[
              { q: 'WordPress gehackt — was sind die ersten Schritte?', a: 'Sofort den Admin-Zugang sichern (Passwort ändern, 2FA aktivieren), dann Malware-Scan durchführen. Als Kunden-Notfall bereinigen wir deinen gehackten WordPress-Shop innerhalb von Stunden — kostenlos.' },
              { q: 'Wie kommt es zu einem WordPress-Hack?', a: 'Veraltete Plugins, schwache Passwörter oder anfällige Themes sind die häufigsten Einfallstore. Regelmäßige WordPress-Wartung mit Updates und Monitoring verhindert die meisten Angriffe.' },
              { q: 'Kann man einen gehackten WooCommerce-Shop retten?', a: 'In fast allen Fällen ja. Wir bereinigen die Malware, schließen die Sicherheitslücke, analysieren wie der Angriff erfolgte und härten den Shop gegen zukünftige Angriffe ab.' },
              { q: 'Was kostet Hacked Site Rescue?', a: 'Für aktive Kunden mit einem Wartungspaket ist die Bereinigung kostenlos. Für Nicht-Kunden bieten wir einen einmaligen Notfall-Service an — Preis nach Aufwand, spreche uns an.' },
            ].map((item) => (
              <div key={item.q} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                <h3 className="font-bold text-white mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/contact" className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-500 transition-all btn-shine">
            Security-Audit anfragen
          </Link>
          <Link href="/pricing" className="px-8 py-4 border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-all">
            Preise ansehen
          </Link>
        </div>
      </div>
    </div>
  );
}
