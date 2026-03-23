import Hero from '@/components/sections/Hero';
import LogoBar from '@/components/sections/LogoBar';
import Blackbox from '@/components/sections/Blackbox';
import Services from '@/components/sections/Services';
import ContactForm from '@/components/sections/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoBar />
      <Blackbox />
      <Services />
      <ContactForm />
    </>
  );
}
