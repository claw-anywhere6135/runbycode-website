'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`${
          isScrolled ? 'fixed top-0 bg-[#121212]/80 backdrop-blur-md shadow-2xl shadow-black/50' : 'absolute bg-[#121212]/0 backdrop-blur-sm'
        } z-50 transition-all duration-500 ease-in-out w-full border-b border-white/5`}
        style={isScrolled ? {} : { top: '40px' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-900/30 group-hover:scale-105 transition-transform">
              <span className="font-mono text-sm">&lt;/&gt;</span>
            </div>
            <div className="text-lg font-bold tracking-tight text-white hidden sm:block">
              RunBy<span className="text-blue-500">Code</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5 backdrop-blur-md">
            <Link
              href="/about"
              className="px-4 py-1.5 text-sm font-medium rounded-full transition-all text-gray-400 hover:text-white hover:bg-white/5"
            >
              Über uns
            </Link>

            {/* Leistungen Dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                className="px-4 py-1.5 text-sm font-medium rounded-full transition-all inline-flex items-center gap-1 text-gray-400 hover:text-white hover:bg-white/5"
              >
                <span>Leistungen</span>
                <i className="fa-solid fa-chevron-down text-[10px] opacity-60 group-hover:opacity-100" />
              </Link>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-1/2 -translate-x-1/2 mt-3 w-[420px]">
                <div className="glass-card rounded-2xl border border-white/10 bg-black backdrop-blur-2xl shadow-2xl shadow-black/80 p-4 grid grid-cols-2 gap-4 text-sm">
                  <Link href="/services/performance" className="block p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <i className="fa-solid fa-bolt text-blue-400" />
                      <span className="font-semibold text-white text-sm">Performance</span>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-snug">Core Web Vitals, Caching, Queries & Server-Tuning.</p>
                  </Link>
                  <Link href="/services/security" className="block p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <i className="fa-solid fa-shield-halved text-red-400" />
                      <span className="font-semibold text-white text-sm">Security</span>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-snug">Firewall, Malware-Scan & Hacked Site Rescue.</p>
                  </Link>
                  <Link href="/services/maintenance" className="block p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <i className="fa-solid fa-rotate text-green-400" />
                      <span className="font-semibold text-white text-sm">Wartung</span>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-snug">Staging-Updates, Monitoring & Error Logs.</p>
                  </Link>
                  <Link href="/services/b2b-shops" className="block p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <i className="fa-solid fa-briefcase text-purple-300" />
                      <span className="font-semibold text-white text-sm">B2B Shops</span>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-snug">B2B-Features, Preise, Rollen & Integrationen.</p>
                  </Link>
                  <Link href="/woocommerce-wartung" className="block p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <i className="fa-solid fa-rotate text-blue-400" />
                      <span className="font-semibold text-white text-sm">WooCommerce Wartung</span>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-snug">Staging-Updates, Checkout-Tests, Zero-Downtime.</p>
                  </Link>
                  <Link href="/wordpress-wartung" className="block p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <i className="fa-brands fa-wordpress text-blue-400" />
                      <span className="font-semibold text-white text-sm">WordPress Wartung</span>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-snug">Core-Updates, Monitoring, Backups & Betreuung.</p>
                  </Link>
                  <Link href="/woocommerce-entwickler" className="block p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <i className="fa-solid fa-user-gear text-blue-400" />
                      <span className="font-semibold text-white text-sm">WooCommerce Entwickler</span>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-snug">Florian Salman & Team — 10+ Jahre Erfahrung.</p>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/pricing"
              className="px-4 py-1.5 text-sm font-medium rounded-full transition-all text-gray-400 hover:text-white hover:bg-white/5"
            >
              Preise
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-0.5 btn-shine border border-[#ffffff42]"
            >
              Gespräch buchen
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-gray-400 rounded-xl md:hidden hover:bg-white/5 hover:text-white transition-colors focus:outline-none"
            >
              <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'} text-xl`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505] transform transition-transform duration-300 md:hidden flex flex-col pt-24 md:pt-32 px-6 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-2">
          <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-3xl font-bold text-white py-4 border-b border-white/5 hover:text-blue-500 transition-colors">
            Über uns
          </Link>
          <div className="border-b border-white/5 pb-2">
            <Link href="/services" onClick={() => setMobileOpen(false)} className="block text-3xl font-bold text-white py-4 hover:text-blue-500 transition-colors">
              Leistungen
            </Link>
            <div className="pl-2 mt-1 space-y-1 text-base">
              <Link href="/services/performance" onClick={() => setMobileOpen(false)} className="block text-gray-400 hover:text-blue-400 transition-colors">Performance</Link>
              <Link href="/services/security" onClick={() => setMobileOpen(false)} className="block text-gray-400 hover:text-red-400 transition-colors">Security</Link>
              <Link href="/services/maintenance" onClick={() => setMobileOpen(false)} className="block text-gray-400 hover:text-green-400 transition-colors">Wartung</Link>
              <Link href="/services/b2b-shops" onClick={() => setMobileOpen(false)} className="block text-gray-400 hover:text-purple-300 transition-colors">B2B Shops</Link>
              <Link href="/woocommerce-wartung" onClick={() => setMobileOpen(false)} className="block text-gray-400 hover:text-blue-400 transition-colors">WooCommerce Wartung</Link>
              <Link href="/wordpress-wartung" onClick={() => setMobileOpen(false)} className="block text-gray-400 hover:text-blue-400 transition-colors">WordPress Wartung</Link>
              <Link href="/woocommerce-entwickler" onClick={() => setMobileOpen(false)} className="block text-gray-400 hover:text-blue-400 transition-colors">WooCommerce Entwickler</Link>
            </div>
          </div>
          <Link href="/pricing" onClick={() => setMobileOpen(false)} className="block text-3xl font-bold text-white py-4 border-b border-white/5 hover:text-blue-500 transition-colors">
            Preise
          </Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-3xl font-bold text-white py-4 border-b border-white/5 hover:text-blue-500 transition-colors">
            Kontakt
          </Link>
        </div>
        <div className="mt-12">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full py-4 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold text-lg rounded-xl hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-900/30 btn-shine border border-[#ffffff42]"
          >
            Gespräch buchen
          </Link>
        </div>
      </div>
    </>
  );
}
