import Link from 'next/link';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'WooCommerce Security — Firewall, Malware & Hacked Site Rescue',
  description: '24/7 Malware-Scans, Firewall-Konfiguration und Hacked Site Rescue fuer WooCommerce Shops. Brute-Force-Schutz und 2FA Einrichtung inklusive.',
  alternates: { canonical: 'https://runbycode.de/services/security' },
};

export default function SecurityPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
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
