const testimonials: { name: string; role: string; text: string; stars: number }[] = [
  {
    name: 'Thomas K.',
    role: 'Online-Shop Inhaber',
    text: 'Florian hat unseren WooCommerce Shop komplett gerettet. Nach einem fehlgeschlagenen Plugin-Update war alles down — er hatte alles in 2 Stunden wiederhergestellt.',
    stars: 5,
  },
  {
    name: 'Sandra M.',
    role: 'E-Commerce Manager',
    text: 'Endlich wissen wir was gerade an unserem Shop gemacht wird. Keine Blackbox mehr, kein Callcenter. Direkt mit dem Entwickler.',
    stars: 5,
  },
  {
    name: 'Markus L.',
    role: 'Shop-Betreiber',
    text: 'PageSpeed von 38 auf 91 in einer Woche. Unglaublich. Unser Umsatz ist seitdem 23% gestiegen.',
    stars: 5,
  },
  {
    name: 'Anna F.',
    role: 'Inhaberin',
    text: 'Der beste Investment den wir je fuer unseren Shop gemacht haben. Florian kennt WooCommerce wie kein anderer.',
    stars: 5,
  },
  {
    name: 'David S.',
    role: 'CEO',
    text: 'Seit 3 Jahren arbeiten wir mit RunByCode. Nie wieder anonyme Agenturen.',
    stars: 5,
  },
  {
    name: 'Julia W.',
    role: 'Head of E-Commerce',
    text: 'Checkout-Optimierung hat unsere Conversion Rate von 1.8% auf 3.2% gebracht.',
    stars: 5,
  },
  {
    name: 'Peter H.',
    role: 'Shopbetreiber',
    text: 'Schnelle Antwortzeiten, ehrliche Kommunikation, top Ergebnisse.',
    stars: 5,
  },
  {
    name: 'Klaus R.',
    role: 'B2B-Shop Owner',
    text: 'WooCommerce B2B-Funktionen perfekt umgesetzt. Genau das was wir brauchten.',
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <i key={i} className="fa-solid fa-star text-yellow-400 text-xs" />
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: (typeof testimonials)[0] }) {
  return (
    <div className="glass-card rounded-xl p-5 mb-4 flex-shrink-0">
      <Stars count={item.stars} />
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">&quot;{item.text}&quot;</p>
      <div className="mt-4">
        <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.name}</span>
        <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">{item.role}</span>
      </div>
    </div>
  );
}

// Split testimonials into 3 columns, repeating for seamless loop
const col1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
const col2 = [...testimonials.slice(2, 6), ...testimonials.slice(2, 6)];
const col3 = [...testimonials.slice(4, 8), ...testimonials.slice(4, 8)];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 section-alt-bg overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 bg-blue-950/40 border border-blue-800/30 rounded-full px-4 py-1.5 mb-5">
            Referenzen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Was unsere Kunden sagen
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
            Echte Ergebnisse fuer echte Shops. Keine Templates, keine generischen Loesungen.
          </p>
        </div>

        {/* 3-column vertical marquee */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] overflow-hidden testimonials-mask"
        >
          {/* Column 1 — scrolls up */}
          <div className="animate-scroll-up">
            {col1.map((item, i) => (
              <TestimonialCard key={`c1-${i}`} item={item} />
            ))}
          </div>

          {/* Column 2 — scrolls down */}
          <div className="animate-scroll-down hidden md:block">
            {col2.map((item, i) => (
              <TestimonialCard key={`c2-${i}`} item={item} />
            ))}
          </div>

          {/* Column 3 — scrolls up, slower */}
          <div className="animate-scroll-up-slow hidden md:block">
            {col3.map((item, i) => (
              <TestimonialCard key={`c3-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
