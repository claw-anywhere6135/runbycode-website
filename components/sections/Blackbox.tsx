import Link from 'next/link';

export default function Blackbox() {
  return (
    <section id="mission" className="py-24 bg-white dark:bg-brand-card border-y border-gray-100 dark:border-white/5 pattern-grid relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">

          {/* Left — Sticky label */}
          <div className="sticky top-24">
            <span className="text-8xl text-gray-100 dark:text-white/5 font-bold absolute -top-10 -left-10 select-none">WHY</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white relative z-10">
              Schluss mit der <br />
              <span className="text-blue-500">Blackbox.</span>
            </h2>
            <div className="mt-6 inline-flex items-center gap-2 bg-gray-100 dark:bg-white/5 rounded-full px-4 py-2 border border-gray-200 dark:border-white/5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wider">Made in Munich, Germany</span>
            </div>
          </div>

          {/* Right — Content */}
          <div className="text-lg text-gray-600 dark:text-gray-400 space-y-6 leading-relaxed">
            <p>
              <strong className="text-gray-900 dark:text-white">Seien wir ehrlich:</strong> Die meisten
              &ldquo;Wartungsverträge&rdquo; sind Versicherungspolicen. Du zahlst und hoffst, dass
              nichts passiert – ohne zu wissen, was eigentlich gemacht wird.
            </p>
            <p>
              Als <strong className="text-gray-900 dark:text-white">WooCommerce Agentur</strong> verkaufen wir keine
              &ldquo;Versicherung&rdquo;, sondern{' '}
              <strong className="text-gray-900 dark:text-white">Entwicklerzeit</strong>. Ob wir in deinen Stunden
              Updates machen, deinen Checkout optimieren oder ein neues Feature bauen, liegt bei dir.
            </p>
            <p>
              Wir sind eine{' '}
              <strong className="text-gray-900 dark:text-white">WooCommerce Agentur aus München</strong> mit Remote-Team.
              Unser Standard ist &ldquo;Made in Germany&rdquo; — präzise, verlässlich, transparent.
              Wenn du uns schreibst, antwortet kein Bot, sondern ein echter Entwickler.
            </p>

            <div className="pt-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/signature.svg"
                alt="Signature"
                className="h-12 opacity-50 invert"
              />
              <p className="text-sm text-gray-500 mt-2 font-mono">Florian Salman, Founder</p>
            </div>

            <div className="mt-8">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/30 btn-shine"
              >
                <span>Jetzt Partner werden</span>
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
