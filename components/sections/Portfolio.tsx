'use client';

import { useRef } from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  metric: string;
  metricLabel: string;
}

const projects: Project[] = [
  {
    title: 'Fashion Shop Relaunch',
    description: 'Vollstaendige WooCommerce Migration mit Performance-Optimierung. Aus einem langsamen Legacy-Shop wurde ein schnelles Verkaufssystem.',
    tags: ['WooCommerce', 'Performance', 'Migration'],
    gradient: 'from-blue-900/40 to-blue-600/10',
    metric: '38 → 91',
    metricLabel: 'PageSpeed Score',
  },
  {
    title: 'B2B Handelsplattform',
    description: 'Custom Preisgruppen, Rollen-Verwaltung und ERP-Integration fuer einen mittelstaendischen Grosshaendler.',
    tags: ['B2B', 'Custom Dev', 'ERP'],
    gradient: 'from-purple-900/40 to-purple-600/10',
    metric: '+40%',
    metricLabel: 'Bestellvolumen',
  },
  {
    title: 'Lebensmittel-Abo Shop',
    description: 'Subscription WooCommerce mit woechilichen Lieferzyklen, Pausen-Funktion und Zero-Downtime-Deployment.',
    tags: ['Subscriptions', 'WooCommerce', 'DevOps'],
    gradient: 'from-green-900/40 to-green-600/10',
    metric: '0',
    metricLabel: 'Downtime-Minuten',
  },
  {
    title: 'Luxus-Mode Boutique',
    description: 'PageSpeed-Optimierung kombiniert mit UX-Redesign. Ladezeit und visuelle Qualitaet gleichzeitig verbessert.',
    tags: ['PageSpeed', 'UX', 'Premium'],
    gradient: 'from-amber-900/40 to-amber-600/10',
    metric: '2.1s',
    metricLabel: 'Ladezeit (-68%)',
  },
  {
    title: 'Elektronikartikel Shop',
    description: 'Nach einem Malware-Befall: komplettes Security Hardening, Cleanup und proaktives Monitoring.',
    tags: ['Security', 'Malware', 'Monitoring'],
    gradient: 'from-red-900/40 to-red-600/10',
    metric: '100%',
    metricLabel: 'Clean & Secured',
  },
];

export default function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir === 'right' ? 440 : -440, behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="py-24 bg-[#070707] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 bg-blue-950/40 border border-blue-800/30 rounded-full px-4 py-1.5 mb-5">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Projekte die liefern
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl text-base">
              Ausgewaehlte Cases aus 40+ Shops — jedes Projekt mit messbaren Ergebnissen.
            </p>
          </div>

          {/* Nav Buttons */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Zurueck"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center justify-center"
            >
              <i className="fa-solid fa-chevron-left text-sm" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Weiter"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center justify-center"
            >
              <i className="fa-solid fa-chevron-right text-sm" />
            </button>
          </div>
        </div>

        {/* Slider Track */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="snap-start flex-shrink-0 w-[300px] md:w-[380px] glass-card rounded-2xl overflow-hidden"
            >
              {/* Placeholder image */}
              <div className={`aspect-video w-full bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative text-center px-6">
                  <div className="text-3xl font-black text-white">{project.metric}</div>
                  <div className="text-xs text-white/60 mt-1 font-medium uppercase tracking-wider">{project.metricLabel}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs text-gray-600 font-medium cursor-not-allowed">
                  <i className="fa-solid fa-lock text-[10px]" />
                  Case Study (demnächst)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
