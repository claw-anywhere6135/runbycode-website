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
  display: 'swap',
});

const reenieBeanie = Reenie_Beanie({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-reenie-beanie',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://runbycode.de'),
  title: {
    default: 'WooCommerce Agentur München | RunByCode',
    template: '%s | RunByCode',
  },
  description:
    'RunByCode — deine WooCommerce Agentur aus München. Wartung, Performance-Optimierung, Security und Custom Development von Florian Salman & Team. 40+ High-Performance Shops betreut.',
  keywords: [
    'WooCommerce Agentur München',
    'WooCommerce Wartung',
    'WordPress WooCommerce Agentur',
    'WooCommerce Performance Optimierung',
    'WooCommerce Security',
    'WordPress Entwickler München',
    'WooCommerce CTO',
  ],
  authors: [{ name: 'Florian Salman', url: 'https://runbycode.de/about' }],
  creator: 'RunByCode',
  publisher: 'RunByCode',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://runbycode.de',
    siteName: 'RunByCode',
    title: 'WooCommerce Agentur München | RunByCode',
    description:
      'Deine WooCommerce Agentur aus München. Wartung, Performance-Optimierung und Custom Development von Florian Salman & Team.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RunByCode — WooCommerce Agentur München',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WooCommerce Agentur München | RunByCode',
    description:
      'Deine WooCommerce Agentur aus München. Wartung, Performance, Security von Florian Salman & Team.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://runbycode.de',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'Organization'],
        '@id': 'https://runbycode.de/#organization',
        name: 'RunByCode',
        url: 'https://runbycode.de',
        description:
          'WooCommerce Agentur aus München — Wartung, Performance-Optimierung, Security und Custom Development.',
        founder: {
          '@type': 'Person',
          name: 'Florian Salman',
          jobTitle: 'Lead Developer & Founder',
          url: 'https://runbycode.de/about',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'München',
          addressCountry: 'DE',
        },
        areaServed: 'DE',
        serviceType: 'WooCommerce Agentur',
        email: 'hello@runbycode.com',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          bestRating: '5',
          ratingCount: '40',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://runbycode.de/#website',
        url: 'https://runbycode.de',
        name: 'RunByCode',
        description: 'WooCommerce Agentur München',
        publisher: { '@id': 'https://runbycode.de/#organization' },
        inLanguage: 'de-DE',
      },
    ],
  };

  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
