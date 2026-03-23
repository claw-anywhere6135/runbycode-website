import Link from 'next/link';

export const metadata = { title: 'Wartung & Pflege | RunByCode' };

export default function MaintenancePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 text-xl">
            <i className="fa-solid fa-rotate" />
          </div>
          <span className="text-xs font-mono bg-green-500/10 text-green-300 px-2 py-1 rounded">WARTUNG</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Sichere<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Updates.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          &ldquo;Update&rdquo; drücken ist keine Wartung. Echte Wartung bedeutet: Testen,
          Staging, Monitoring und ein Plan für den Worst Case.
        </p>

        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 mb-12">
          <h3 className="font-bold text-white mb-2 font-mono text-sm uppercase tracking-wider">Zero Downtime Strategy</h3>
          <p className="text-gray-400 text-sm">
            Jedes Update läuft zuerst auf einer Staging-Kopie deines Live-Shops. Wir testen Checkout,
            Warenkorb und kritische Flows manuell — erst dann geht es live.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            { icon: 'fa-solid fa-clone', title: 'Staging-Environment', desc: 'Exakte Kopie deines Shops für risikofreies Testen. Alle Updates laufen zuerst hier.' },
            { icon: 'fa-solid fa-rotate', title: 'Plugin & Theme Updates', desc: 'WordPress Core, alle Plugins und Themes — mit Kompatibilitätsprüfung vor jedem Update.' },
            { icon: 'fa-solid fa-eye', title: 'Uptime-Monitoring', desc: 'Minütliche Checks. Wenn dein Shop down ist, wissen wir es bevor du es merkst.' },
            { icon: 'fa-solid fa-triangle-exclamation', title: 'Error Log Monitoring', desc: 'PHP-Errors, JavaScript-Fehler und WooCommerce-Logs werden täglich analysiert.' },
            { icon: 'fa-solid fa-box-archive', title: 'Automatische Backups', desc: 'Tägliche Vollbackups auf AWS S3. Wiederherstellung in unter 15 Minuten möglich.' },
            { icon: 'fa-solid fa-file-lines', title: 'Monatliches Reporting', desc: 'Was wurde gemacht, wie viele Stunden wurden genutzt, was ist für nächsten Monat geplant.' },
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
