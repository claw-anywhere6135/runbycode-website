import Link from 'next/link';

export default function Services() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-white dark:bg-black/20 pattern-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Full-Stack WooCommerce Service</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Wir kümmern uns um die Technik, damit du dich auf das Wachstum konzentrieren kannst.
            Hier ist, was in unseren Stundenpaketen steckt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">

          {/* Performance — wide, with SVG illustration */}
          <div className="md:col-span-2 glass-card p-8 rounded-2xl group hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden">
            {/* SVG background illustration: speed lines + arc */}
            <svg
              aria-hidden="true"
              viewBox="0 0 480 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-0 w-64 h-40 opacity-[0.06] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.10]"
            >
              {/* Fix #3: Diagonal speed lines (skewed x-coords for actual angle) */}
              <line x1="140" y1="0"  x2="480" y2="20"  stroke="#3b82f6" strokeWidth="1" />
              <line x1="110" y1="20" x2="480" y2="38"  stroke="#3b82f6" strokeWidth="0.6" />
              <line x1="160" y1="40" x2="480" y2="56"  stroke="#3b82f6" strokeWidth="1" />
              <line x1="120" y1="60" x2="480" y2="74"  stroke="#3b82f6" strokeWidth="0.5" />
              <line x1="150" y1="80" x2="480" y2="92"  stroke="#3b82f6" strokeWidth="1" />
              <line x1="130" y1="100" x2="480" y2="110" stroke="#3b82f6" strokeWidth="0.75" />
              <line x1="155" y1="120" x2="480" y2="128" stroke="#3b82f6" strokeWidth="0.5" />
              {/* Arc fragment */}
              <path
                d="M 380 180 A 140 140 0 0 1 480 60"
                stroke="#3b82f6"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              <path
                d="M 360 200 A 180 180 0 0 1 480 30"
                stroke="#3b82f6"
                strokeWidth="0.75"
              />
              {/* Speed arrow tip */}
              <polyline points="455,88 475,92 455,96" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
            </svg>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 text-xl">
                  <i className="fa-solid fa-bolt" />
                </div>
                <span className="text-xs font-mono bg-blue-500/10 text-blue-300 px-2 py-1 rounded">CORE WEB VITALS</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Performance Optimierung</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4 max-w-lg">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-500 dark:text-gray-500">
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500" /> Google PageSpeed 90+</div>
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500" /> Datenbank Indizes</div>
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500" /> Image Delivery CDN</div>
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500" /> Script Deferring</div>
              </div>
            </div>
          </div>

          {/* Security — with SVG hexagon */}
          <div className="glass-card p-8 rounded-2xl group hover:border-red-500/30 transition-all duration-500 relative overflow-hidden">
            {/* SVG: hexagon outline + small pentagons */}
            <svg
              aria-hidden="true"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-2 bottom-2 w-28 h-28 opacity-[0.07] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.12]"
            >
              <polygon
                points="80,8 144,44 144,116 80,152 16,116 16,44"
                stroke="#ef4444"
                strokeWidth="1"
                fill="none"
              />
              <polygon
                points="80,28 124,52 124,108 80,132 36,108 36,52"
                stroke="#ef4444"
                strokeWidth="0.6"
                strokeDasharray="4 3"
                fill="none"
              />
              {/* Small pentagons */}
              <polygon points="30,20 38,15 46,20 44,30 32,30" stroke="#ef4444" strokeWidth="0.75" fill="none" />
              <polygon points="114,130 122,125 130,130 128,140 116,140" stroke="#ef4444" strokeWidth="0.75" fill="none" />
            </svg>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center text-red-400 text-xl mb-6">
                <i className="fa-solid fa-shield-halved" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Ironclad Security</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                24/7 Malware Scans und Firewall-Konfiguration. Sollte dein Shop gehackt werden,
                bereinigen wir ihn sofort und kostenlos.
              </p>
              <Link
                href="/services/security"
                className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 text-sm mb-4 transition-colors"
              >
                Mehr zu Security & Hacked Site Rescue <i className="fa-solid fa-arrow-right text-[10px]" />
              </Link>
              <ul className="space-y-2 text-xs text-gray-500 dark:text-gray-500">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> Brute Force Protection</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> 2FA Einrichtung</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> Malware Removal Garantie</li>
              </ul>
            </div>
          </div>

          {/* Updates — with SVG rotation arc */}
          <div className="glass-card p-8 rounded-2xl group hover:border-green-500/30 transition-all duration-500 flex flex-col relative overflow-hidden">
            {/* SVG: rotation arc + deploy arrow */}
            <svg
              aria-hidden="true"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-2 top-2 w-24 h-24 opacity-[0.07] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.12]"
            >
              {/* Rotation arcs */}
              <path
                d="M 70 15 A 55 55 0 1 1 25 95"
                stroke="#22c55e"
                strokeWidth="1.5"
                strokeDasharray="8 4"
              />
              <path
                d="M 70 30 A 40 40 0 1 1 38 100"
                stroke="#22c55e"
                strokeWidth="0.75"
              />
              {/* Arrow at arc end (deploy indicator) */}
              <polyline points="18,90 25,100 35,92" stroke="#22c55e" strokeWidth="1.5" fill="none" />
              {/* Staging badge shape */}
              <rect x="50" y="55" width="40" height="24" rx="4" stroke="#22c55e" strokeWidth="0.75" fill="none" />
              <line x1="55" y1="64" x2="85" y2="64" stroke="#22c55e" strokeWidth="0.5" />
              <line x1="55" y1="70" x2="75" y2="70" stroke="#22c55e" strokeWidth="0.5" />
            </svg>

            <div className="relative z-10 flex flex-col flex-1">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 text-xl mb-6">
                <i className="fa-solid fa-rotate" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Sichere Updates</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                Wir drücken nicht einfach &ldquo;Update&rdquo;. Wir erstellen einen Staging-Clone,
                führen Updates durch und testen den Checkout manuell. Kein blindes Klicken — jede
                Aktualisierung wird auf Herz und Nieren geprüft, bevor sie live geht.
              </p>
              <Link
                href="/services/maintenance"
                className="inline-flex items-center gap-1 text-green-400 hover:text-green-300 text-sm mb-4 transition-colors"
              >
                Mehr zu Wartung & Pflege <i className="fa-solid fa-arrow-right text-[10px]" />
              </Link>
              <div className="mt-auto space-y-2 text-xs text-gray-500 dark:text-gray-500">
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500" /> Staging-Clone vor jedem Update</div>
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500" /> Manueller Checkout-Test</div>
                <div className="text-xs font-mono text-green-400 bg-green-900/20 inline-block px-2 py-1 rounded mt-2">Zero Downtime Strategy</div>
              </div>
            </div>
          </div>

          {/* Custom Development */}
          <div className="glass-card p-8 rounded-2xl group hover:border-purple-500/30 transition-all duration-500 bg-gradient-to-br from-brand-card to-purple-900/10 flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 text-xl">
                <i className="fa-solid fa-code" />
              </div>
              <span className="text-xs font-mono bg-purple-500/10 text-purple-300 px-2 py-1 rounded">FEATURE DEVELOPMENT</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Custom Development</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
              Dein Stundenkontingent ist flexibel. Nutze es nicht nur für Wartung, sondern für
              Weiterentwicklung. Wir bauen Custom Plugins, passen Checkout-Flows an oder
              integrieren APIs (ERP, CRM).
            </p>
            <Link
              href="/services/b2b-shops"
              className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm mb-4 transition-colors"
            >
              Mehr zu B2B Shop Lösungen <i className="fa-solid fa-arrow-right text-[10px]" />
            </Link>
            <div className="mt-auto flex flex-wrap gap-1">
              {['PHP 8.x', 'React / Vue', 'REST API', 'Stripe / PayPal'].map((tag) => (
                <span key={tag} className="px-3 py-1 border border-gray-200 dark:border-white/10 rounded-full text-xs text-gray-500 dark:text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Backup & Uptime */}
          <div className="glass-card p-8 rounded-2xl group hover:border-orange-500/30 transition-all duration-500 flex flex-col">
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-400 text-xl mb-6">
              <i className="fa-solid fa-server" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Backup & Uptime</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
              Echtzeit-Backups auf externen Servern (AWS S3) und minütliches Uptime-Monitoring.
              Wenn dein Shop down ist, wissen wir es vor dir — nicht deine Kunden. Automatische
              Wiederherstellung inklusive.
            </p>
            <div className="mt-auto space-y-2 text-xs text-gray-500 dark:text-gray-500">
              <div className="flex items-center gap-2"><i className="fa-solid fa-check text-orange-400" /> AWS S3 Off-Site Backups</div>
              <div className="flex items-center gap-2"><i className="fa-solid fa-check text-orange-400" /> Minütliches Uptime-Monitoring</div>
              <div className="flex items-center gap-2"><i className="fa-solid fa-check text-orange-400" /> Sofort-Alert bei Ausfall</div>
            </div>
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
