import Link from 'next/link';

export default function AnnouncementBar() {
  return (
    <div className="bg-blue-600 text-white text-xs font-medium py-2 px-4 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "url('/grid-pattern.svg')" }}
      />
      <div className="relative z-10 flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <span>
          Jetzt verfügbar für neue Projekte — Antwort innerhalb von 24h
        </span>
        <Link
          href="/contact"
          className="underline decoration-white/50 hover:decoration-white ml-2 font-semibold"
        >
          Anfrage stellen &rarr;
        </Link>
      </div>
    </div>
  );
}
