import type { Metadata } from 'next';
import Link from 'next/link';
import Testimonials from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'Kundenstimmen & Referenzen | RunByCode',
  description: 'Was unsere Kunden sagen: 40+ WooCommerce Shops betreut, 4.9/5.0 Bewertung. Echte Ergebnisse, echte Kunden aus Deutschland.',
  alternates: { canonical: 'https://runbycode.de/referenzen' },
};

export default function ReferenzenPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16">
        <div className="inline-flex items-center mb-6 border-l-2 border-blue-500 pl-4">
          <span className="text-blue-400 font-mono text-sm tracking-wide uppercase">Was Kunden sagen</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          Kundenstimmen &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Referenzen.
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
          40+ WooCommerce Shops, echte Ergebnisse. Keine anonymen Bewertungen — reale Kunden, die
          uns mit ihren Shops vertrauen.
        </p>

        {/* Social Proof Stats */}
        <div className="flex flex-wrap gap-8 mt-10">
          <div>
            <p className="text-4xl font-bold text-white">4.9 <span className="text-yellow-400 text-2xl">★</span></p>
            <p className="text-sm text-gray-500 mt-1">Durchschnittsbewertung</p>
          </div>
          <div className="border-r border-white/10 hidden md:block" />
          <div>
            <p className="text-4xl font-bold text-white">40+</p>
            <p className="text-sm text-gray-500 mt-1">Betreute Shops</p>
          </div>
          <div className="border-r border-white/10 hidden md:block" />
          <div>
            <p className="text-4xl font-bold text-white">3+</p>
            <p className="text-sm text-gray-500 mt-1">Jahre Durchschnittsbindung</p>
          </div>
        </div>
      </div>

      <Testimonials />

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-24 text-center">
        <div className="glass-card rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Werde der naechste Erfolgsfall.</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Fang mit einem kostenlosen Shop-Audit an. Wir zeigen dir konkret was wir fuer deinen
            Shop tun koennen — ohne Verpflichtung.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] btn-shine border border-[#ffffff42]"
          >
            Kostenloses Audit anfordern <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
