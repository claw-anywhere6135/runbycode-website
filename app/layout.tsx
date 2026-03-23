import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Reenie_Beanie } from 'next/font/google';
import './globals.css';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
});

const reenieBeanie = Reenie_Beanie({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-reenie-beanie',
});

export const metadata: Metadata = {
  title: 'RunByCode | Dein technisches Rückgrat für WooCommerce',
  description:
    'Keine Agentur, sondern dein technischer Partner. WooCommerce Wartung, High-Performance Hosting und Notfall-Support von Florian Salman & Team.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${reenieBeanie.variable} font-sans antialiased bg-[#050505] text-[#e5e5e5]`}
      >
        {/* Ambient Light Effects */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none z-0" />

        <AnnouncementBar />
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
