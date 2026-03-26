'use client';

export default function WhyRunByCode() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4 border-l-2 border-blue-500 pl-4">
            <span className="text-blue-400 font-mono text-sm tracking-wide uppercase">Warum RunByCode</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Was uns{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              wirklich unterscheidet.
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Es gibt viele WordPress-Agenturen. Hier ist was unsere Kunden nach einem Jahr sagen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 — Direkter Kontakt */}
          <div className="glass-card rounded-2xl overflow-hidden group">
            {/* SVG Illustration — Connection/Network */}
            <div className="relative bg-blue-950/20 h-44 overflow-hidden">
              <svg viewBox="0 0 280 176" width="100%" height="100%" aria-hidden="true">
                <circle cx="140" cy="88" r="70"
                  fill="rgba(59,130,246,0)"
                  className="transition-all duration-700 group-hover:[fill:rgba(59,130,246,0.08)]" />
                <line x1="140" y1="88" x2="80" y2="50" stroke="#3b82f6" strokeOpacity="0.3" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:[stroke-opacity:0.5]" />
                <line x1="140" y1="88" x2="200" y2="55" stroke="#3b82f6" strokeOpacity="0.3" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:[stroke-opacity:0.5]" />
                <line x1="140" y1="88" x2="90" y2="140" stroke="#3b82f6" strokeOpacity="0.2" strokeWidth="1"
                  className="transition-all duration-700 group-hover:[stroke-opacity:0.4]" />
                <line x1="140" y1="88" x2="195" y2="135" stroke="#3b82f6" strokeOpacity="0.2" strokeWidth="1"
                  className="transition-all duration-700 group-hover:[stroke-opacity:0.4]" />
                <circle cx="140" cy="88" r="18" fill="rgba(59,130,246,0.12)" stroke="#3b82f6" strokeOpacity="0.6" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:scale-110 origin-[140px_88px]" />
                <circle cx="140" cy="88" r="8" fill="rgba(59,130,246,0.5)"
                  className="transition-all duration-700 group-hover:scale-125 origin-[140px_88px]" />
                <circle cx="140" cy="88" r="34" fill="none" stroke="#3b82f6" strokeOpacity="0.15" strokeWidth="1"
                  strokeDasharray="4 6"
                  className="transition-all duration-700 group-hover:[stroke-opacity:0.3] group-hover:scale-110 origin-[140px_88px]" />
                <circle cx="80" cy="50" r="10" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeOpacity="0.5" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2" />
                <circle cx="80" cy="50" r="4" fill="rgba(59,130,246,0.6)"
                  className="transition-all duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2" />
                <circle cx="200" cy="55" r="10" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeOpacity="0.5" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />
                <circle cx="200" cy="55" r="4" fill="rgba(59,130,246,0.6)"
                  className="transition-all duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />
              </svg>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 text-xl flex-shrink-0">
                <i className="fa-solid fa-user-tie" />
              </div>
              <h3 className="text-xl font-bold text-white">Ein Ansprechpartner. Über die gesamte Zusammenarbeit.</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sie schreiben Florian. Florian antwortet. Nicht sein Kollege, nicht ein Support-Bot,
                nicht jemand der Ihren Account gerade übernommen hat. Wer Ihre Website kennt,
                beantwortet auch Ihre Fragen.
              </p>
            </div>
          </div>

          {/* Card 2 — Ziele statt Technik */}
          <div className="glass-card rounded-2xl overflow-hidden group">
            {/* SVG Illustration — Growth/Metrics */}
            <div className="relative bg-purple-950/20 h-44 overflow-hidden">
              <svg viewBox="0 0 280 176" width="100%" height="100%" aria-hidden="true">
                <circle cx="140" cy="95" r="65"
                  fill="rgba(168,85,247,0)"
                  className="transition-all duration-700 group-hover:[fill:rgba(168,85,247,0.07)]" />
                <circle cx="140" cy="95" r="58" fill="none" stroke="#a855f7" strokeOpacity="0.12" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:scale-110 origin-[140px_95px] group-hover:[stroke-opacity:0.25]" />
                <circle cx="140" cy="95" r="38" fill="none" stroke="#a855f7" strokeOpacity="0.2" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:scale-105 origin-[140px_95px] group-hover:[stroke-opacity:0.35]" />
                <path d="M 75 130 Q 140 40 205 130" fill="none" stroke="#a855f7" strokeOpacity="0.35" strokeWidth="2"
                  className="transition-all duration-700 group-hover:[stroke-opacity:0.6]" />
                <circle cx="140" cy="95" r="14" fill="rgba(168,85,247,0.15)" stroke="#a855f7" strokeOpacity="0.5" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:scale-125 origin-[140px_95px]" />
                <circle cx="140" cy="95" r="6" fill="rgba(168,85,247,0.7)"
                  className="transition-all duration-700 group-hover:scale-110 origin-[140px_95px]" />
                <rect x="55" y="108" width="18" height="28" rx="2" fill="rgba(168,85,247,0.15)" stroke="#a855f7" strokeOpacity="0.3" strokeWidth="1"
                  className="transition-all duration-700 group-hover:-translate-y-3" />
                <rect x="80" y="96" width="18" height="40" rx="2" fill="rgba(168,85,247,0.2)" stroke="#a855f7" strokeOpacity="0.35" strokeWidth="1"
                  className="transition-all duration-700 group-hover:-translate-y-4 [transition-delay:50ms]" />
                <rect x="105" y="80" width="18" height="56" rx="2" fill="rgba(168,85,247,0.25)" stroke="#a855f7" strokeOpacity="0.4" strokeWidth="1"
                  className="transition-all duration-700 group-hover:-translate-y-5 [transition-delay:100ms]" />
              </svg>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 text-xl flex-shrink-0">
                <i className="fa-solid fa-bullseye" />
              </div>
              <h3 className="text-xl font-bold text-white">Sie erklären das Ziel. Wir kümmern uns um den Rest.</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sie müssen kein WordPress-Experte sein. Sagen Sie uns was Sie erreichen wollen —
                mehr Anfragen, eine neue Produktseite, ein schnellerer Checkout — wir übersetzen
                das in Technik und setzen es um.
              </p>
            </div>
          </div>

          {/* Card 3 — Verlässlichkeit */}
          <div className="glass-card rounded-2xl overflow-hidden group">
            {/* SVG Illustration — Reliability/Security */}
            <div className="relative bg-green-950/20 h-44 overflow-hidden">
              <svg viewBox="0 0 280 176" width="100%" height="100%" aria-hidden="true">
                <circle cx="140" cy="88" r="65"
                  fill="rgba(34,197,94,0)"
                  className="transition-all duration-700 group-hover:[fill:rgba(34,197,94,0.06)]" />
                <circle cx="140" cy="88" r="68" fill="none" stroke="#22c55e" strokeOpacity="0.08" strokeWidth="1"
                  className="transition-all duration-700 group-hover:scale-110 origin-[140px_88px] group-hover:[stroke-opacity:0.2]" />
                <circle cx="140" cy="88" r="52" fill="none" stroke="#22c55e" strokeOpacity="0.12" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:scale-105 origin-[140px_88px] group-hover:[stroke-opacity:0.3]" />
                <circle cx="140" cy="88" r="36" fill="none" stroke="#22c55e" strokeOpacity="0.2" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:scale-102 origin-[140px_88px] group-hover:[stroke-opacity:0.4]" />
                <circle cx="140" cy="88" r="20" fill="rgba(34,197,94,0.08)" stroke="#22c55e" strokeOpacity="0.35" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:scale-105 origin-[140px_88px] group-hover:[stroke-opacity:0.55]" />
                <circle cx="140" cy="84" r="8" fill="rgba(34,197,94,0.2)" stroke="#22c55e" strokeOpacity="0.7" strokeWidth="1.5"
                  className="transition-all duration-700 group-hover:scale-125 origin-[140px_84px]" />
                <circle cx="140" cy="84" r="4" fill="rgba(34,197,94,0.8)"
                  className="transition-all duration-700 group-hover:scale-110 origin-[140px_84px]" />
              </svg>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 text-xl flex-shrink-0">
                <i className="fa-solid fa-clock" />
              </div>
              <h3 className="text-xl font-bold text-white">Anfragen die nicht im Nichts verschwinden.</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Antwort innerhalb von 24 Stunden an Werktagen — ohne Expressaufschlag. Bei
                kritischen Problemen deutlich schneller. Sie können das intern planen und
                versprechen, weil wir es einhalten.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
