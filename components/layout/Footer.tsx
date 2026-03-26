import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black text-center md:text-left relative z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xl font-bold tracking-tighter text-white mb-2">RunByCode_</div>
          <p className="text-sm text-gray-400">
            Premium WooCommerce Betreuung<br />
            Made in Germany.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-6 text-sm text-gray-400 items-center sm:items-start">
          <Link href="/about" className="hover:text-white transition-colors">Über uns</Link>
          <Link href="/services" className="hover:text-white transition-colors">Leistungen</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Preise</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Kontakt</Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600">
          <Link href="#" className="hover:text-gray-400 transition-colors">Impressum</Link>
          <Link href="#" className="hover:text-gray-400 transition-colors">Datenschutz</Link>
          <Link href="#" className="hover:text-gray-400 transition-colors">AGB</Link>
        </div>
      </div>
    </footer>
  );
}
