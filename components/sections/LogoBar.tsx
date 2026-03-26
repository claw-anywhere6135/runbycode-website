export default function LogoBar() {
  const icons = [
    'fa-brands fa-wordpress',
    'fa-brands fa-stripe',
    'fa-brands fa-aws',
    'fa-brands fa-google',
    'fa-brands fa-paypal',
    'fa-brands fa-cloudflare',
    'fa-brands fa-dhl',
  ];

  return (
    <div className="w-full bg-gray-50 dark:bg-brand-black border-y border-gray-100 dark:border-white/5 py-8 relative overflow-hidden">
      {/* Fade overlays */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50 dark:from-brand-black via-gray-50/80 dark:via-brand-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50 dark:from-brand-black via-gray-50/80 dark:via-brand-black/80 to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden select-none opacity-40 hover:opacity-100 transition-opacity duration-500">
        <div className="flex gap-20 items-center animate-marquee whitespace-nowrap">
          {/* Duplicate for seamless loop */}
          {[...icons, ...icons].map((icon, i) => (
            <i key={i} className={`${icon} text-4xl flex-shrink-0`} />
          ))}
        </div>
      </div>
    </div>
  );
}
