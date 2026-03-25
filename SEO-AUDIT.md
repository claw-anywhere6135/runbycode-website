# SEO Audit — RunByCode Relaunch
Datum: 2026-03-25 | Analyst: Mox (Orchestrator)

---

## SEO Score: 41/100 (Aktuelle runbycode.de — Pre-Relaunch)

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical | 55/100 | 25% | 13.75 |
| Content | 35/100 | 25% | 8.75 |
| On-Page | 50/100 | 20% | 10.00 |
| Schema | 30/100 | 10% | 3.00 |
| Performance | 54/100 | 10% | 5.40 |
| Images | 40/100 | 5% | 2.00 |
| AI Readiness | 0/100 | 5% | 0.00 |

Branche: **Agency** (WooCommerce / WordPress Agentur, Muenchen)
Ziel: Relaunch auf neuer Next.js Plattform — SEO-Grundlage fuer neuen Start optimieren.

---

## 1. Technical SEO

### Kritisch
- **Sitemap veraltet**: `page-sitemap.xml` hat `lastmod: 2025-01-07` — kein Update seit 2+ Monaten
- **Sitemap unvollstaendig**: Nur 7 URLs in Sitemap — keine Service-Unterseiten (/services/*), keine Blog-Posts
- **Neue Site (ff-21st / unser Build): kein Canonical Tag** auf keiner Seite
- **Neue Site: kein Schema Markup** (0 JSON-LD Bloecke) — alte Site hat LocalBusiness + Organization Schema

### Warnung
- **og:locale = en_US** auf deutscher Seite — sollte `de_DE` sein
- **Robots.txt**: OK fuer WordPress — fuer neue Next.js Site muss robots.txt neu erstellt werden
- **Keine llms.txt** (AI Crawler-Sichtbarkeit)

### Positiv
- HTTPS korrekt
- Canonical auf runbycode.de gesetzt (https://runbycode.de/)
- robots.txt vorhanden, wp-admin geblockt

---

## 2. Content Quality (E-E-A-T)

### Kritisch
- **Neue Site: nur 962 Woerter** auf Homepage — zu duenn fuer kompetitives WooCommerce-Keyword-Feld
- **Alte Site: H2-lose Struktur** auf /uber-uns/ und /preisliste/ (kein H1 gefunden — strukturelles SEO-Problem)
- **Fehlende Autorit\"atssignale**: Kein Team-Bio mit LinkedIn, keine Presseerwaehungen, keine Fallstudien

### Warnung  
- Texte auf neuer Site sind praegnant aber kurz — Google will Tiefe fuer "WooCommerce Agentur" Keywords
- Keine Blog-/Ressourcen-Sektion (langfristig wichtig fuer Keyword-Abdeckung)

### Positiv
- Persoelicher Founder-Ansatz (Florian Salman) = gutes E-E-A-T Signal
- Social Proof (4.9/5.0, 40+ Shops) = Vertrauenssignal
- Made in Germany / Muenchen = lokaler Bezug

---

## 3. On-Page SEO

### Kritisch (Neue Site — muss vor Relaunch gefixt werden)
- **Title Tag schwach**: "RunByCode | Dein technisches Rückgrat für WooCommerce" — fehlt "Agentur", "Muenchen", kein Hauptkeyword vorne
- **Meta Description**: OK aber ohne CTA und ohne Keyword "WooCommerce Agentur Muenchen"
- **H1 broken**: `Dein  WooCommerce    CTO auf Abruf.` — doppelte Leerzeichen, kein Keyword "Agentur" oder "Muenchen"
- **Kein Canonical** auf irgendeiner Seite
- **OG Tags unvollstaendig**: kein og:locale, kein og:image

### Alte Site — Dokumentation
- Title: "RunByCode - WordPress WooCommerce Agentur aus München - RunByCode" — Marke doppelt, zu lang (73 Zeichen)
- H1: "WordPress & WooCommerce Programmierer aus München" — gutes Keyword, aber "Programmierer" statt "Agentur"
- /uber-uns/ und /preisliste/ haben KEINEN H1 Tag

---

## 4. Schema Markup

### Kritisch
- **Neue Site: 0 Schema-Bloecke** — kompletter Neubau muss Schema von Null aufsetzen
- Fehlende Typen: LocalBusiness, Organization, Service, BreadcrumbList, WebSite (mit SearchAction)

### Alte Site (Referenz)
- LocalBusiness + Organization vorhanden (gut)
- Aber: kein Service Schema, kein Review/AggregateRating Schema (Potenzial fuer Rich Results)

### Empfohlene Schema-Typen fuer Relaunch
1. `LocalBusiness` + `Organization` — Homepage
2. `Service` — je Service-Seite (Performance, Security, Wartung, B2B)
3. `WebSite` mit `SearchAction` — Homepage
4. `BreadcrumbList` — alle Unterseiten
5. `Person` (Florian Salman) — /about Seite
6. `AggregateRating` — Homepage (4.9/5.0 aus den 40+ Shops)

---

## 5. Performance (Core Web Vitals)

| Metrik | runbycode.de Mobile | runbycode.de Desktop | Ziel Neu |
|--------|--------------------|--------------------|----------|
| Performance Score | 54/100 | 86/100 | >90 |
| Accessibility | 88/100 | 92/100 | >95 |
| Best Practices | 92/100 | 92/100 | >95 |
| SEO | 100/100 | 100/100 | 100 |

### Hauptprobleme (alte Site)
- Render Blocking Requests (CSS/JS blockt First Paint)
- Unused CSS (WordPress laed alles, auch unbenutztes)
- Font display nicht optimiert (FOIT/FOUT)
- LCP langsam (hero_bg.webp wird zu spaet geladen)
- Touch targets zu klein (Mobile Accessibility)

### Vorteil Relaunch
Next.js mit `output: standalone` + Tailwind = drastisch weniger CSS, kein WordPress-Overhead.
Erwartung: Mobile Performance Score 80-95 ohne spezielle Optimierung.

---

## 6. Lokale SEO / Muenchen

- **Google Business Profile**: Nicht geprueft — muss Florian selbst verifizieren
- **NAP Konsistenz**: "RunByCode, Muenchen" muss konsistent ueber alle Seiten sein
- **Lokale Keywords**: "WooCommerce Agentur Muenchen" (Hauptkeyword), "WordPress Entwickler Muenchen"

---

## 7. AI Search Readiness (GEO)

**Score: 0/100** — Seite hat keine AI-spezifischen Signale:
- Kein llms.txt
- Kein strukturiertes Datei-Format fuer AI-Verarbeitung
- Keine klaren "zitierbaren" Fakten-Aussagen (fuer LLM-Antworten)
- Kein FAQ-Bereich (relevant fuer AI-Antworten, aber kein FAQ Schema da gesperrt)

---

## Prioritaetsliste — Relaunch Fixes (SOFORT umsetzen)

### P1 — Muss vor Launch
1. **Canonical Tags** auf ALLEN Seiten hinzufuegen
2. **Title Tags** optimieren:
   - Homepage: "WooCommerce Agentur Muenchen | RunByCode"
   - /about: "Ueber uns — Florian Salman & Team | RunByCode"
   - /pricing: "Pakete & Preise — WooCommerce Betreuung | RunByCode"
   - /services: "WooCommerce Services | RunByCode Muenchen"
   - /contact: "Kontakt | RunByCode WooCommerce Agentur"
3. **Meta Descriptions** fuer alle Seiten
4. **H1 fixen** auf Homepage: "WooCommerce Agentur Muenchen" als primares Keyword einbauen
5. **Schema Markup**: LocalBusiness + Organization + WebSite auf Homepage
6. **OG Tags**: og:locale = de_DE, og:image, og:description fuer alle Seiten
7. **robots.txt** fuer neue Next.js Seite erstellen
8. **sitemap.xml** generieren (alle 10 Seiten)

### P2 — Ersten Monat nach Launch
9. Service Schema je Seite (Performance, Security, Wartung, B2B)
10. BreadcrumbList Schema
11. Person Schema (Florian) auf /about
12. AggregateRating Schema (4.9/5.0)
13. llms.txt erstellen
14. Content-Tiefe erhoehen (Homepage >1500 Woerter anpeilen)

### P3 — Langfristig
15. Blog / Ressourcen-Sektion (Keyword-Abdeckung "WooCommerce [Problem]")
16. Fallstudien (E-E-A-T + Conversion)
17. Google Business Profile verifizieren + optimieren

---

## Keywords (Ziel-Keyword-Set Relaunch)

| Keyword | Typ | Prioritaet |
|---------|-----|-----------|
| WooCommerce Agentur Muenchen | Primary | P1 |
| WooCommerce Wartung | Secondary | P1 |
| WordPress WooCommerce Agentur | Secondary | P1 |
| WooCommerce Performance Optimierung | Long-tail | P2 |
| WooCommerce Security | Long-tail | P2 |
| WooCommerce B2B Shop | Long-tail | P2 |
| WooCommerce CTO on demand | Unique/Brand | P1 |
| WordPress Entwickler Muenchen | Local | P2 |
