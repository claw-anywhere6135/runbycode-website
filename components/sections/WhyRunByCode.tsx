export default function WhyRunByCode() {
  const reasons = [
    {
      icon: 'fa-solid fa-user-tie',
      title: 'Direkter Entwickler-Kontakt',
      desc: 'Kein Account Manager, kein Ticket-System ohne Antwort. Wenn du schreibst, antwortet der Entwickler, der auch wirklich an deinem Shop arbeitet. Du kennst den Namen, du kennst die Person. Das macht den Unterschied zwischen echtem Support und einer Versicherungspolice.',
    },
    {
      icon: 'fa-solid fa-clock-rotate-left',
      title: 'Flexible Stunden statt Pauschalen',
      desc: 'Monat langweilig? Nutze deine Stunden für Features. Kritischer Bug? Alle Stunden fliessen in die Lösung. Du entscheidest jeden Monat neu, wie dein Kontingent eingesetzt wird — fuer Wartung, Performance, Design oder neue Funktionen.',
    },
    {
      icon: 'fa-solid fa-location-dot',
      title: 'Remote-first aus Muenchen',
      desc: 'Unser Team arbeitet verteilt und effizient — ohne Büromiete, die du mitbezahlst. Trotzdem Made in Germany: deutsche Qualitaetsstandards, deutsche Kommunikation, deutsche Rechtssicherheit. Wenn es sein muss, sind wir auch persoenlich in Muenchen fuer dich da.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Warum RunByCode?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Es gibt viele WooCommerce-Agenturen. Hier ist, was uns wirklich unterscheidet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="glass-card p-8 rounded-2xl flex flex-col gap-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 text-xl flex-shrink-0">
                <i className={reason.icon} />
              </div>
              <h3 className="text-xl font-bold text-white">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
