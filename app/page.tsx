import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import LogoMarquee from '@/components/ui/LogoMarquee';
import Blackbox from '@/components/sections/Blackbox';
import Services from '@/components/sections/Services';
import WhyRunByCode from '@/components/sections/WhyRunByCode';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'WooCommerce Agentur München | RunByCode',
  description:
    'RunByCode — deine WooCommerce Agentur aus München. Wartung, Performance-Optimierung, Security und Custom Development. 40+ High-Performance Shops. Ø 14min Response.',
  alternates: {
    canonical: 'https://runbycode.de',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Blackbox />
      <Services />
      <WhyRunByCode />
      <Portfolio />
      <Testimonials />
      <ContactForm />
    </>
  );
}
