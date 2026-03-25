import Image from 'next/image';
import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns — WooCommerce Agentur München | Florian Salman & Team',
  description:
    'RunByCode ist eine WooCommerce Agentur aus München, gegründet von Florian Salman. Kein Callcenter, kein Anonymitaet — echte Entwickler, die deinen Shop kennen.',
  alternates: {
    canonical: 'https://runbycode.de/about',
  },
  openGraph: {
    title: 'Über uns — Florian Salman & Team | RunByCode',
    description: 'Lern das Team hinter RunByCode kennen — WooCommerce Spezialisten aus München.',
    url: 'https://runbycode.de/about',
  },
};

export default function AboutPage() {
  const team = [
    { initials: 'FS', name: 'Florian Salman', role: 'Lead Developer & Founder', color: 'bg-blue-500', desc: '10+ Jahre WooCommerce Erfahrung. Hat über 100 Shops von Grund auf gebaut und optimiert.' },
    { initials: 'TM', name: 'Team Member', role: 'Backend Developer', color: 'bg-purple-500', desc: 'Spezialist für PHP, MySQL-Optimierung und komplexe Plugin-Entwicklung.' },
    { initials: 'AK', name: 'Team Member', role: 'Frontend & Performance', color: 'bg-green-500', desc: 'Core Web Vitals Experte. Bringt Shops auf Google PageSpeed 90+.' },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 mb-24 pattern-grid">
        <div className="inline-flex items-center mb-8 border-l-2 border-blue-500 pl-4">
          <span className="text-blue-400 font-mono text-sm tracking-wide uppercase">Über RunByCode</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
          Wir sind dein technisches{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Rückgrat.
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
          RunByCode ist keine anonyme Agentur. Wir sind ein kleines, spezialisiertes Team aus
          München das sich ausschließlich auf WooCommerce fokussiert — und das seit über 10 Jahren.
        </p>
      </section>

      {/* Story */}
      <section className="bg-brand-card border-y border-white/5 py-24 mb-24">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/images/florian-salman.jpg"
              alt="Florian Salman"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <h2 className="text-3xl font-bold text-white">Die Geschichte hinter RunByCode</h2>
            <p>
              Ich habe RunByCode gegründet, nachdem ich selbst erlebt hatte, wie frustrierend es
              ist, einen WooCommerce-Shop an eine anonyme Agentur zu übergeben — und dann im Dunkeln
              gelassen zu werden.
            </p>
            <p>
              <strong className="text-white">Unser Ansatz ist anders:</strong> Du weißt immer, wer
              an deinem Shop arbeitet, was gemacht wird, und warum. Keine Blackbox. Keine
              versteckten Kosten.
            </p>
            <p>
              Wir sind eine Remote-Agentur mit Münchner Herz. Unser Standard ist &ldquo;Made in
              Germany&rdquo; — präzise, zuverlässig, transparent.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all btn-shine mt-4"
            >
              Partner werden <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-16">Das Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.initials} className="glass-card p-8 rounded-2xl text-center">
              <div className={`w-16 h-16 ${member.color} rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 ring-4 ring-black`}>
                {member.initials}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-blue-400 text-sm font-mono mb-4">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Unsere Werte</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: 'fa-solid fa-eye', title: 'Transparenz', desc: 'Du weißt immer, was wir tun. Jede Stunde ist dokumentiert und nachvollziehbar.' },
            { icon: 'fa-solid fa-bolt', title: 'Geschwindigkeit', desc: 'Ø 14 Minuten Response-Zeit. Wenn dein Shop Probleme hat, sind wir sofort da.' },
            { icon: 'fa-solid fa-code', title: 'Qualität', desc: 'Kein Copy-Paste-Code. Wir schreiben sauberen, wartbaren Code nach deutschen Standards.' },
            { icon: 'fa-solid fa-handshake', title: 'Partnerschaft', desc: 'Wir denken wie Mitgründer deines Business, nicht wie ein externer Dienstleister.' },
          ].map((v) => (
            <div key={v.title} className="glass-card p-6 rounded-xl flex gap-4">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
                <i className={v.icon} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{v.title}</h3>
                <p className="text-gray-400 text-sm">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
