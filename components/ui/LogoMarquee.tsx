export default function LogoMarquee() {
  const logos = [
    'ProSieben',
    'SAT.1',
    'TUM',
    'Ring',
    'Homelike',
    'Welt der Wunder',
    'Fuenfhoefen',
    'JET',
  ];

  return (
    <div className="w-full bg-brand-black border-y border-white/5 py-8 relative overflow-hidden">
      {/* Fade overlays */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-brand-black via-brand-black/80 to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        {/* Track 1 */}
        <div
          className="flex items-center gap-16 flex-shrink-0 animate-marquee hover:[animation-play-state:paused]"
          aria-hidden="false"
        >
          {logos.map((name) => (
            <span
              key={name}
              className="whitespace-nowrap text-white font-semibold text-base uppercase tracking-widest opacity-40 hover:opacity-80 transition-opacity duration-300 px-2"
            >
              {name}
            </span>
          ))}
        </div>
        {/* Track 2 — duplicate for seamless loop */}
        <div
          className="flex items-center gap-16 flex-shrink-0 animate-marquee hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {logos.map((name) => (
            <span
              key={`dup-${name}`}
              className="whitespace-nowrap text-white font-semibold text-base uppercase tracking-widest opacity-40 hover:opacity-80 transition-opacity duration-300 px-2"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
