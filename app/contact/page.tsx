import ContactForm from '@/components/sections/ContactForm';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt — WooCommerce Agentur München | RunByCode',
  description: 'Kontaktiere RunByCode — deine WooCommerce Agentur aus Muenchen. Antwort innerhalb von 14 Minuten. Kostenloses Shop-Audit fuer Neukunden.',
  alternates: { canonical: 'https://runbycode.de/contact' },
  openGraph: { title: 'Kontakt | RunByCode', url: 'https://runbycode.de/contact' },
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactForm />
    </div>
  );
}
