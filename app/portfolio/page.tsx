import type { Metadata } from 'next';
import Link from 'next/link';
import Portfolio from '@/components/sections/Portfolio';

export const metadata: Metadata = {
  title: 'Portfolio — WooCommerce Projekte | RunByCode',
  description: 'Referenzprojekte von RunByCode: WooCommerce Performance-Optimierungen, Shop-Relaunches, B2B-Plattformen und Custom-Entwicklungen aus Muenchen.',
  alternates: { canonical: 'https://runbycode.de/portfolio' },
};

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16">
        <div className="inline-flex items-center mb-6 border-l-2 border-blue-500 pl-4">
          <span className="text-blue-400 font-mono text-sm tracking-wide uppercase">Unsere Arbeit</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          WooCommerce{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Projekte & Referenzen.
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
          Einblicke in unsere Arbeit — von Performance-Optimierungen ueber Shop-Relaunches bis hin
          zu komplexen B2B-Plattformen. Jedes Projekt, ein messbares Ergebnis.
        </p>
      </div>

      <Portfolio />

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-24 text-center">
        <div className="glass-card rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Bereit fuer dein Projekt?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Jedes Projekt beginnt mit einem Gespraech. Erzaehl uns von deinem Shop — wir zeigen dir
            wie wir konkret helfen koennen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] btn-shine border border-[#ffffff42]"
          >
            Jetzt Gespraech buchen <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
