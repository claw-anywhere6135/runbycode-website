import Link from 'next/link';

export default function Services() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-black/20 pattern-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Full-Stack WooCommerce Service</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Wir kümmern uns um die Technik, damit du dich auf das Wachstum konzentrieren kannst.
            Hier ist, was in unseren Stundenpaketen steckt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">

          {/* Performance — wide */}
          <div className="md:col-span-2 glass-card p-8 rounded-2xl group hover:border-blue-500/30 transition-all duration-500">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 text-xl">
                <i className="fa-solid fa-bolt" />
              </div>
              <span className="text-xs font-mono bg-blue-500/10 text-blue-300 px-2 py-1 rounded">CORE WEB VITALS</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Performance Optimierung</h3>
            <p className="text-gray-400 mb-4 max-w-lg">
              Ein langsamer Shop verbrennt Geld. Wir optimieren nicht nur Caching Plugins, sondern
              gehen tief in den Code. Datenbank-Bereinigung, Asset-Minification, Query-Optimierung
              und Bildkomprimierung sind Standard.
            </p>
            <Link
              href="/services/performance"
              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm mb-6 transition-colors"
            >
              Mehr zur Performance-Optimierung <i className="fa-solid fa-arrow-right text-xs" />
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500" /> Google PageSpeed 90+</div>
              <div className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500" /> Datenbank Indizes</div>
              <div className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500" /> Image Delivery CDN</div>
              <div className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500" /> Script Deferring</div>
            </div>
          </div>

          {/* Security */}
          <div className="glass-card p-8 rounded-2xl group hover:border-red-500/30 transition-all duration-500">
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center text-red-400 text-xl mb-6">
              <i className="fa-solid fa-shield-halved" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Ironclad Security</h3>
            <p className="text-gray-400 text-sm mb-3">
              24/7 Malware Scans und Firewall-Konfiguration. Sollte dein Shop gehackt werden,
              bereinigen wir ihn sofort und kostenlos.
            </p>
            <Link
              href="/services/security"
              className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 text-sm mb-4 transition-colors"
            >
              Mehr zu Security & Hacked Site Rescue <i className="fa-solid fa-arrow-right text-[10px]" />
            </Link>
            <ul className="space-y-2 text-xs text-gray-500">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> Brute Force Protection</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> 2FA Einrichtung</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> Malware Removal Garantie</li>
            </ul>
          </div>

          {/* Updates */}
          <div className="glass-card p-8 rounded-2xl group hover:border-green-500/30 transition-all duration-500">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 text-xl mb-6">
              <i className="fa-solid fa-rotate" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Sichere Updates</h3>
            <p className="text-gray-400 text-sm mb-3">
              Wir drücken nicht einfach &ldquo;Update&rdquo;. Wir erstellen einen Staging-Clone,
              führen Updates durch und testen den Checkout manuell.
            </p>
            <Link
              href="/services/maintenance"
              className="inline-flex items-center gap-1 text-green-400 hover:text-green-300 text-sm mb-4 transition-colors"
            >
              Mehr zu Wartung & Pflege <i className="fa-solid fa-arrow-right text-[10px]" />
            </Link>
            <div className="text-xs font-mono text-green-400 bg-green-900/20 inline-block px-2 py-1 rounded">
              Zero Downtime Strategy
            </div>
          </div>

          {/* Custom Development — wide */}
          <div className="md:col-span-2 glass-card p-8 rounded-2xl group hover:border-purple-500/30 transition-all duration-500 bg-gradient-to-br from-brand-card to-purple-900/10">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 text-xl">
                <i className="fa-solid fa-code" />
              </div>
              <span className="text-xs font-mono bg-purple-500/10 text-purple-300 px-2 py-1 rounded">FEATURE DEVELOPMENT</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Custom Development</h3>
            <p className="text-gray-400 mb-4 max-w-lg">
              Dein Stundenkontingent ist flexibel. Nutze es nicht nur für Wartung, sondern für
              Weiterentwicklung. Wir bauen Custom Plugins, passen Checkout-Flows an oder
              integrieren APIs (ERP, CRM).
            </p>
            <Link
              href="/services/b2b-shops"
              className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm mb-6 transition-colors"
            >
              Mehr zu B2B Shop Lösungen <i className="fa-solid fa-arrow-right text-xs" />
            </Link>
            <div className="flex flex-wrap gap-1">
              {['PHP 8.x', 'React / Vue', 'REST API', 'Stripe / PayPal Integrationen'].map((tag) => (
                <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-xs text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Backup & Uptime */}
          <div className="glass-card p-8 rounded-2xl group hover:border-orange-500/30 transition-all duration-500">
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-400 text-xl mb-6">
              <i className="fa-solid fa-server" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Backup & Uptime</h3>
            <p className="text-gray-400 text-sm mb-4">
              Echtzeit-Backups auf externen Servern (AWS S3) und minütliches Uptime-Monitoring.
              Wenn dein Shop down ist, wissen wir es vor dir.
            </p>
          </div>

        </div>

        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/30 text-lg btn-shine"
          >
            <span>Services buchen</span>
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
