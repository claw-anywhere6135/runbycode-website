'use client';

export default function WhyRunByCode() {
  return (
    <section id="why-runbycode" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4 border-l-2 border-blue-500 pl-4">
            <span className="text-blue-400 font-mono text-sm tracking-wide uppercase">Warum RunByCode</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Kein Callcenter.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Kein Anonymat.
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Es gibt viele WooCommerce-Agenturen. Hier ist, was uns wirklich unterscheidet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 — Direkter Entwickler-Kontakt */}
          <div className="glass-card rounded-2xl overflow-hidden group">
            {/* SVG Illustration — Connection/Network */}
            <div className="relative bg-blue-950/20 h-44 overflow-hidden">
              <svg viewBox="0 0 280 176" width="100%" height="100%" aria-hidden="true">
                {/* Soft radial glow — fades in on hover */}
                <circle
                  cx="140" cy="88" r="70"
                  fill="rgba(59,130,246,0)"
                  className="transition-all duration-700 group-hover:[fill:rgba(59,130,246,0.08)]"
                />
                {/* Connection lines */}
                <line x1="140" y1="88" x2="80" y2="50" stroke="#3b82f6" strokeOpacity="0.3" strokeWidth="1.5"
                  className="transition-all duration-700 origin-[140px_88px] group-hover:[stroke-opacity:0.5]" />
                <line x1="140" y1="88" x2="200" y2="55" stroke="#3b82f6" strokeOpacity="0.3" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:[stroke-opacity:0.5]" />
                <line x1="140" y1="88" x2="90" y2="140" stroke="#3b82f6" strokeOpacity="0.2" strokeWidth="1"
                  className="transition-all duration-700 group-hover:[stroke-opacity:0.4]" />
                <line x1="140" y1="88" x2="195" y2="135" stroke="#3b82f6" strokeOpacity="0.2" strokeWidth="1"
                  className="transition-all duration-700 group-hover:[stroke-opacity:0.4]" />
                {/* Central node */}
                <circle cx="140" cy="88" r="18" fill="rgba(59,130,246,0.12)" stroke="#3b82f6" strokeOpacity="0.6" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:scale-110 origin-[140px_88px]" />
                <circle cx="140" cy="88" r="8" fill="rgba(59,130,246,0.5)"
                  className="transition-all duration-700 group-hover:scale-125 origin-[140px_88px]" />
                {/* Outer ring */}
                <circle cx="140" cy="88" r="34" fill="none" stroke="#3b82f6" strokeOpacity="0.15" strokeWidth="1"
                  strokeDasharray="4 6"
                  className="transition-all duration-700 group-hover:[stroke-opacity:0.3] group-hover:scale-110 origin-[140px_88px]" />
                {/* Satellite nodes */}
                <circle cx="80" cy="50" r="10" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeOpacity="0.5" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2" />
                <circle cx="80" cy="50" r="4" fill="rgba(59,130,246,0.6)"
                  className="transition-all duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2" />
                <circle cx="200" cy="55" r="10" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeOpacity="0.5" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />
                <circle cx="200" cy="55" r="4" fill="rgba(59,130,246,0.6)"
                  className="transition-all duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />
                <circle cx="90" cy="140" r="7" fill="rgba(59,130,246,0.08)" stroke="#3b82f6" strokeOpacity="0.35" strokeWidth="1"
                  className="transition-all duration-700 group-hover:-translate-x-1 group-hover:translate-y-1" />
                <circle cx="195" cy="135" r="7" fill="rgba(59,130,246,0.08)" stroke="#3b82f6" strokeOpacity="0.35" strokeWidth="1"
                  className="transition-all duration-700 group-hover:translate-x-1 group-hover:translate-y-1" />
                {/* Floating panel hint */}
                <rect x="108" y="62" width="64" height="4" rx="2" fill="rgba(59,130,246,0.15)"
                  className="transition-all duration-700 group-hover:[fill:rgba(59,130,246,0.25)]" />
              </svg>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 text-xl flex-shrink-0">
                <i className="fa-solid fa-user-tie" />
              </div>
              <h3 className="text-xl font-bold text-white">Direkter Entwickler-Kontakt</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Kein Account Manager, kein Ticket-System ohne Antwort. Wenn du schreibst, antwortet
                der Entwickler, der auch wirklich an deinem Shop arbeitet. Du kennst den Namen, du
                kennst die Person. Das macht den Unterschied zwischen echtem Support und einer
                Versicherungspolice.
              </p>
            </div>
          </div>

          {/* Card 2 — Flexible Stunden */}
          <div className="glass-card rounded-2xl overflow-hidden group">
            {/* SVG Illustration — Growth/Metrics */}
            <div className="relative bg-purple-950/20 h-44 overflow-hidden">
              <svg viewBox="0 0 280 176" width="100%" height="100%" aria-hidden="true">
                {/* Radial glow */}
                <circle cx="140" cy="95" r="65"
                  fill="rgba(168,85,247,0)"
                  className="transition-all duration-700 group-hover:[fill:rgba(168,85,247,0.07)]" />
                {/* Large outer ring — expands on hover */}
                <circle cx="140" cy="95" r="58" fill="none" stroke="#a855f7" strokeOpacity="0.12" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:scale-110 origin-[140px_95px] group-hover:[stroke-opacity:0.25]" />
                {/* Medium ring */}
                <circle cx="140" cy="95" r="38" fill="none" stroke="#a855f7" strokeOpacity="0.2" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:scale-105 origin-[140px_95px] group-hover:[stroke-opacity:0.35]" />
                {/* Upward arc — growth indicator */}
                <path d="M 75 130 Q 140 40 205 130" fill="none" stroke="#a855f7" strokeOpacity="0.35" strokeWidth="2"
                  className="transition-all duration-700 group-hover:[stroke-opacity:0.6]" />
                {/* Center glow dot */}
                <circle cx="140" cy="95" r="14" fill="rgba(168,85,247,0.15)" stroke="#a855f7" strokeOpacity="0.5" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:scale-125 origin-[140px_95px]" />
                <circle cx="140" cy="95" r="6" fill="rgba(168,85,247,0.7)"
                  className="transition-all duration-700 group-hover:scale-110 origin-[140px_95px]" />
                {/* Chart rectangle — lifts on hover */}
                <rect x="55" y="108" width="18" height="28" rx="2" fill="rgba(168,85,247,0.15)" stroke="#a855f7" strokeOpacity="0.3" strokeWidth="1"
                  className="transition-all duration-700 group-hover:-translate-y-3" />
                <rect x="80" y="96" width="18" height="40" rx="2" fill="rgba(168,85,247,0.2)" stroke="#a855f7" strokeOpacity="0.35" strokeWidth="1"
                  className="transition-all duration-700 group-hover:-translate-y-4 [transition-delay:50ms]" />
                <rect x="105" y="80" width="18" height="56" rx="2" fill="rgba(168,85,247,0.25)" stroke="#a855f7" strokeOpacity="0.4" strokeWidth="1"
                  className="transition-all duration-700 group-hover:-translate-y-5 [transition-delay:100ms]" />
                {/* Floating dot on arc peak */}
                <circle cx="140" cy="52" r="5" fill="rgba(168,85,247,0.5)" stroke="#a855f7" strokeOpacity="0.7" strokeWidth="1"
                  className="transition-all duration-700 group-hover:-translate-y-2" />
              </svg>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 text-xl flex-shrink-0">
                <i className="fa-solid fa-clock-rotate-left" />
              </div>
              <h3 className="text-xl font-bold text-white">Flexible Stunden statt Pauschalen</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Monat langweilig? Nutze deine Stunden fuer Features. Kritischer Bug? Alle Stunden
                fliessen in die Loesung. Du entscheidest jeden Monat neu, wie dein Kontingent
                eingesetzt wird — fuer Wartung, Performance, Design oder neue Funktionen.
              </p>
            </div>
          </div>

          {/* Card 3 — Remote-first Muenchen */}
          <div className="glass-card rounded-2xl overflow-hidden group">
            {/* SVG Illustration — Reach/Targeting */}
            <div className="relative bg-green-950/20 h-44 overflow-hidden">
              <svg viewBox="0 0 280 176" width="100%" height="100%" aria-hidden="true">
                {/* Radial glow */}
                <circle cx="140" cy="88" r="65"
                  fill="rgba(34,197,94,0)"
                  className="transition-all duration-700 group-hover:[fill:rgba(34,197,94,0.06)]" />
                {/* Outermost ring — expands most */}
                <circle cx="140" cy="88" r="68" fill="none" stroke="#22c55e" strokeOpacity="0.08" strokeWidth="1"
                  className="transition-all duration-700 group-hover:scale-110 origin-[140px_88px] group-hover:[stroke-opacity:0.2]" />
                {/* Ring 3 */}
                <circle cx="140" cy="88" r="52" fill="none" stroke="#22c55e" strokeOpacity="0.12" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:scale-108 origin-[140px_88px] group-hover:[stroke-opacity:0.25] [transition-delay:50ms]" />
                {/* Ring 2 */}
                <circle cx="140" cy="88" r="36" fill="none" stroke="#22c55e" strokeOpacity="0.2" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:scale-105 origin-[140px_88px] group-hover:[stroke-opacity:0.4] [transition-delay:100ms]" />
                {/* Ring 1 — innermost */}
                <circle cx="140" cy="88" r="20" fill="rgba(34,197,94,0.08)" stroke="#22c55e" strokeOpacity="0.35" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:scale-102 origin-[140px_88px] group-hover:[stroke-opacity:0.55]" />
                {/* Cross-hairs */}
                <line x1="140" y1="60" x2="140" y2="75" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1"
                  className="transition-all duration-700 group-hover:[stroke-opacity:0.6]" />
                <line x1="140" y1="101" x2="140" y2="116" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1"
                  className="transition-all duration-700 group-hover:[stroke-opacity:0.6]" />
                <line x1="112" y1="88" x2="127" y2="88" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1"
                  className="transition-all duration-700 group-hover:[stroke-opacity:0.6]" />
                <line x1="153" y1="88" x2="168" y2="88" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1"
                  className="transition-all duration-700 group-hover:[stroke-opacity:0.6]" />
                {/* Center pin */}
                <circle cx="140" cy="84" r="8" fill="rgba(34,197,94,0.2)" stroke="#22c55e" strokeOpacity="0.7" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:scale-125 origin-[140px_84px]" />
                <circle cx="140" cy="84" r="4" fill="rgba(34,197,94,0.8)"
                  className="transition-all duration-700 group-hover:scale-110 origin-[140px_84px]" />
                {/* Pin tail */}
                <path d="M 136 91 Q 140 100 144 91" fill="rgba(34,197,94,0.4)"
                  className="transition-all duration-700 group-hover:[fill:rgba(34,197,94,0.7)]" />
              </svg>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 text-xl flex-shrink-0">
                <i className="fa-solid fa-location-dot" />
              </div>
              <h3 className="text-xl font-bold text-white">Remote-first aus Muenchen</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Unser Team arbeitet verteilt und effizient — ohne Bueromiete, die du mitbezahlst.
                Trotzdem Made in Germany: deutsche Qualitaetsstandards, deutsche Kommunikation,
                deutsche Rechtssicherheit. Wenn es sein muss, sind wir auch persoenlich in Muenchen
                fuer dich da.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
