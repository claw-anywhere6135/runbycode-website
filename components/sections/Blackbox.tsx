import Link from 'next/link';

export default function Blackbox() {
  return (
    <section id="mission" className="py-24 pattern-grid relative section-themed-bg">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">

          {/* Left — Sticky label */}
          <div className="sticky top-24">
            <span className="text-8xl font-bold absolute -top-10 -left-10 select-none" style={{ color: 'rgba(0,0,0,0.08)' }}>WARUM</span>
            <h2 className="text-3xl font-bold relative z-10 section-themed-strong">
              Schluss mit der <br />
              <span className="text-blue-500">Blackbox.</span>
            </h2>
            <div className="mt-6 inline-flex items-center gap-2 bg-gray-100 dark:bg-white/5 rounded-full px-4 py-2 border border-gray-300 dark:border-white/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-300 font-mono uppercase tracking-wider">Muenchen. Direkt. Transparent.</span>
            </div>
          </div>

          {/* Right — Content */}
          <div className="text-lg space-y-6 leading-relaxed section-themed-text">
            <p>
              Die meisten Unternehmen haben eine Agentur die &ldquo;die Website macht.&rdquo; Jede
              Anfrage geht ins Ticket-System. Die Antwort kommt nach drei Wochen. Und wer dabei war
              als das letzte grosse Update gebaut wurde? Schon lange weg.
            </p>
            <p>
              Bei RunByCode haben Sie einen festen Ansprechpartner — von der ersten Anfrage bis zum
              laufenden Betrieb. <strong className="section-themed-strong">Florian kennt Ihre Website.</strong>{' '}
              Sie müssen nicht jedes Mal neu erklären wie Ihr Unternehmen funktioniert.
            </p>
            <p>
              Wir arbeiten mit Marketing-Teams zusammen, nicht an ihnen vorbei. Sie bringen die
              Ziele, wir bringen die Umsetzung. Was genau gemacht wird, wann es fertig ist und was
              es kostet — das klären wir bevor wir anfangen.
            </p>

            <div className="pt-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/signature.svg"
                alt="Signature"
                className="h-12 opacity-80 dark:invert dark:opacity-60"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-mono">Florian Salman, Founder</p>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/30 btn-shine"
              >
                <span>Jetzt Anfrage schicken</span>
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
