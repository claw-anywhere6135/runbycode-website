import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden pattern-grid">
      {/* Ambient Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="text-left animate-fade-in-up">
            {/* Stars */}
            <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
              <span className="text-yellow-500/70">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span>4.9 / 5.0</span>
              <span>• 40+ zufriedene Shops</span>
            </div>

            <div className="inline-flex items-center mb-8 border-l-2 border-blue-500 pl-4">
              <span className="text-blue-400 font-mono text-sm tracking-wide">FLORIAN SALMAN & TEAM</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              <span className="whitespace-nowrap">
                Dein{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">WooCommerce</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 transform -skew-x-12 -z-10" />
                </span>
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                CTO auf Abruf.
              </span>
            </h1>
            {/* Hidden SEO keyword — visible to crawlers, nicht storend fuer User */}
            <p className="sr-only">WooCommerce Agentur München — RunByCode</p>

            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
              Keine anonyme Agentur. Kein Callcenter. Wir sind dein technisches Rückgrat. Wir sorgen
              dafür, dass dein Shop Umsatz macht, während du schläfst.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/pricing"
                className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all flex items-center btn-shine"
              >
                Pakete ansehen
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-transparent border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-all flex items-center"
              >
                Über uns
              </Link>
            </div>

            <div className="mt-12 space-y-4">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/40 dark:border-green-500/20 rounded-full px-4 py-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="text-white text-sm font-medium">Florian & Team aktuell verfügbar</span>
                <span className="text-gray-400 text-xs">• Ø 14min Response-Zeit heute</span>
              </div>

              {/* Team Avatars */}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold ring-2 ring-black">FS</div>
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold ring-2 ring-black">TM</div>
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold ring-2 ring-black">AK</div>
                </div>
                <p>Betreuen aktuell 40+ High-Performance Shops.</p>
              </div>
            </div>
          </div>

          {/* Image Card */}
          <div
            className="relative max-h-[350px] lg:h-[600px] lg:max-h-none flex items-center justify-center lg:justify-end animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 group">
              <Image
                src="/images/florian-salman.jpg"
                alt="Florian Salman"
                fill
                priority={true}
                className="object-cover transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <p className="font-signature text-3xl text-white mb-1">Florian Salman</p>
                <p className="text-blue-400 text-sm font-mono uppercase tracking-widest">Lead Developer & Founder</p>
              </div>
              {/* Tech Badge */}
              <div className="absolute top-6 right-6 glass-card p-3 rounded-lg flex flex-col items-center gap-1 animate-float">
                <i className="fa-brands fa-wordpress text-2xl text-white" />
                <span className="text-[10px] text-gray-400 font-mono">CORE DEV</span>
              </div>
            </div>

            {/* Experience Badge */}
            <div
              className="absolute bottom-24 md:left-0 glass-card p-5 rounded-xl border-l-4 border-blue-500 animate-float hidden md:block"
              style={{ animationDelay: '1s' }}
            >
              <div className="flex gap-4 items-center">
                <div>
                  <p className="text-2xl font-bold text-white">10+ Jahre</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">WooCommerce Exp.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
