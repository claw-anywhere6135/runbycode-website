'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: Wire up server action / Resend
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section id="kontakt" className="py-24 relative bg-white dark:bg-brand-card pattern-diagonal">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Lass uns sprechen</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Klingt nach einem Fit? Schick uns kurz was — wir melden uns innerhalb
            von 24 Stunden.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          {submitted ? (
            <div className="text-center py-12">
              <i className="fa-solid fa-circle-check text-green-500 text-5xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Nachricht erhalten!</h3>
              <p className="text-gray-500 dark:text-gray-400">Wir melden uns innerhalb von 24 Stunden bei dir.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors outline-none"
                    placeholder="Max Mustermann"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors outline-none"
                    placeholder="max@shop.de"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="shopUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Shop URL (optional)
                </label>
                <input
                  type="url"
                  id="shopUrl"
                  name="shopUrl"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors outline-none"
                  placeholder="https://deinshop.de"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors outline-none resize-none"
                  placeholder="Erzähl uns von deinem Projekt..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="mt-1 w-4 h-4 rounded border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="privacy" className="text-sm text-gray-500 dark:text-gray-400">
                  Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                    Datenschutzerklärung
                  </a>{' '}
                  zu. *
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all shadow-lg shadow-blue-900/30 btn-shine border border-[#ffffff42] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>
            </form>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Oder schreib uns direkt:{' '}
            <a href="mailto:kontakt@runbycode.de" className="text-blue-400 hover:text-blue-300">
              kontakt@runbycode.de
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
