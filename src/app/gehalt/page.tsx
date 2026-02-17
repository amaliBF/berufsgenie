import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  TrendingUp,
  Banknote,
  ArrowRight,
  Info,
  MapPin,
  Building2,
  Factory,
  Briefcase,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gehaltsübersicht – Einstiegsgehälter nach Beruf | Berufsgenie',
  description:
    'Was verdient man im Job? Gehaltsübersicht für beliebte Berufe in Deutschland: Softwareentwickler, Ingenieur, Kaufleute, Pflegefachkraft und mehr – mit Einstiegsgehalt-Vergleich.',
  alternates: { canonical: '/gehalt' },
  openGraph: {
    title: 'Gehaltsübersicht – Einstiegsgehälter nach Beruf | Berufsgenie',
    description:
      'Einstiegsgehälter im Überblick: Erfahre, was du in beliebten Berufen beim Berufseinstieg verdienst – von IT bis Pflege.',
    url: 'https://berufsgenie.de/gehalt',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gehaltsübersicht – Einstiegsgehälter nach Beruf',
    description:
      'Einstiegsgehälter im Überblick: Softwareentwickler, Ingenieur, Kaufleute und mehr. Jetzt Gehälter vergleichen!',
  },
};

const professions = [
  { name: 'Softwareentwickler/in', min: 3500, max: 4500, category: 'IT' },
  { name: 'Kaufmännische/r Angestellte/r', min: 2400, max: 3200, category: 'Kaufmännisch' },
  { name: 'Ingenieur/in (Maschinenbau)', min: 3800, max: 4500, category: 'Technik' },
  { name: 'Pflegefachkraft', min: 2800, max: 3400, category: 'Gesundheit' },
  { name: 'Mechatroniker/in', min: 2600, max: 3200, category: 'Handwerk' },
  { name: 'Marketing Manager/in', min: 2800, max: 3800, category: 'Marketing' },
  { name: 'Buchhalter/in', min: 2600, max: 3400, category: 'Finanzen' },
  { name: 'Elektriker/in', min: 2400, max: 3000, category: 'Handwerk' },
  { name: 'Erzieher/in', min: 2600, max: 3200, category: 'Sozial' },
  { name: 'Vertriebsmitarbeiter/in', min: 2800, max: 3600, category: 'Vertrieb' },
  { name: 'Logistiker/in', min: 2400, max: 3100, category: 'Logistik' },
  { name: 'Grafikdesigner/in', min: 2200, max: 3000, category: 'Kreativ' },
];

const SALARY_ABSOLUTE_MAX = 5000;

const categoryColors: Record<string, string> = {
  IT: 'bg-blue-100 text-blue-700',
  Kaufmännisch: 'bg-violet-100 text-violet-700',
  Technik: 'bg-cyan-100 text-cyan-700',
  Gesundheit: 'bg-emerald-100 text-emerald-700',
  Handwerk: 'bg-orange-100 text-orange-700',
  Marketing: 'bg-pink-100 text-pink-700',
  Finanzen: 'bg-teal-100 text-teal-700',
  Sozial: 'bg-rose-100 text-rose-700',
  Vertrieb: 'bg-indigo-100 text-indigo-700',
  Logistik: 'bg-amber-100 text-amber-700',
  Kreativ: 'bg-purple-100 text-purple-700',
};

function formatEuro(value: number) {
  return value.toLocaleString('de-DE');
}

export default function GehaltPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://berufsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Gehaltsübersicht' },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Gehaltsübersicht – Einstiegsgehälter nach Beruf',
    description:
      'Gehaltsübersicht für beliebte Berufe in Deutschland mit Einstiegsgehalt-Vergleich.',
    url: 'https://berufsgenie.de/gehalt',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Berufsgenie',
      url: 'https://berufsgenie.de',
    },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />

        {/* Hero Section */}
        <section className="relative pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-400 rounded-full blur-3xl" />
            <div className="absolute top-40 right-40 w-64 h-64 bg-orange-400 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-amber-200 mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white font-medium">Gehaltsübersicht</li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2 text-sm text-white mb-8">
                <Banknote className="h-4 w-4" />
                Einstiegsgehälter im Überblick
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Gehaltsübersicht
              </h1>
              <p className="mt-6 text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto">
                Was verdient man im Job? Hier findest du die Einstiegsgehälter beliebter
                Berufe in Deutschland – transparent und übersichtlich.
              </p>

              <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <p className="text-3xl font-bold text-white">12</p>
                  <p className="text-sm text-amber-200 mt-1">Berufe</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <p className="text-3xl font-bold text-white">2.200–4.500 €</p>
                  <p className="text-sm text-amber-200 mt-1">Gehaltsspanne</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <p className="text-3xl font-bold text-white">Brutto</p>
                  <p className="text-sm text-amber-200 mt-1">pro Monat</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Salary Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-sm text-amber-600 mb-4">
                <TrendingUp className="h-4 w-4" />
                Gehaltsvergleich
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
                Beliebte Berufe und ihre Einstiegsgehälter
              </h2>
              <p className="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
                Die folgenden Gehälter beziehen sich auf Berufseinsteiger (brutto/Monat).
                Die tatsächliche Vergütung kann je nach Region, Unternehmen und Qualifikation abweichen.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {professions.map((profession) => {
                const barMinPercent = (profession.min / SALARY_ABSOLUTE_MAX) * 100;
                const barMaxPercent = (profession.max / SALARY_ABSOLUTE_MAX) * 100;
                return (
                  <div
                    key={profession.name}
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-stone-900 group-hover:text-amber-700 transition-colors leading-tight">
                        {profession.name}
                      </h3>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ml-2 ${
                          categoryColors[profession.category] || 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {profession.category}
                      </span>
                    </div>

                    <div className="mb-3">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                          {formatEuro(profession.min)} – {formatEuro(profession.max)} €
                        </span>
                      </div>
                      <span className="text-sm text-stone-500">/Monat (brutto)</span>
                    </div>

                    {/* Bar Visualization */}
                    <div className="mb-3">
                      <div className="w-full bg-gray-100 rounded-full h-3 relative overflow-hidden">
                        {/* Background fill from 0 to min */}
                        <div
                          className="absolute top-0 left-0 h-full bg-amber-100 rounded-l-full"
                          style={{ width: `${barMinPercent}%` }}
                        />
                        {/* Salary range bar */}
                        <div
                          className="absolute top-0 h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                          style={{
                            left: `${barMinPercent}%`,
                            width: `${barMaxPercent - barMinPercent}%`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-400">0 €</span>
                        <span className="text-xs text-gray-400">5.000 €</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-medium">
                      <Briefcase className="h-3 w-3" />
                      Berufseinstieg
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-[#FFFBF5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm text-blue-600 mb-4">
                <Info className="h-4 w-4" />
                Gut zu wissen
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
                Wovon hängt das Einstiegsgehalt ab?
              </h2>
              <p className="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
                Das Gehalt beim Berufseinstieg ist nicht überall gleich. Verschiedene Faktoren
                beeinflussen, wie viel du tatsächlich verdienst.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 mb-6">
                  <MapPin className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Region</h3>
                <p className="text-stone-600 leading-relaxed">
                  In Süddeutschland (Bayern, Baden-Württemberg) und in Großstädten wie München,
                  Frankfurt oder Hamburg sind die Einstiegsgehälter am höchsten. In Ostdeutschland
                  und ländlichen Regionen liegen die Gehälter tendenziell niedriger – allerdings
                  sind dort auch die Lebenshaltungskosten geringer.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 mb-6">
                  <Building2 className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Unternehmensgröße</h3>
                <p className="text-stone-600 leading-relaxed">
                  Konzerne und große Mittelständler zahlen Berufseinsteigern in der Regel mehr als
                  kleine Unternehmen oder Startups. Tarifgebundene Betriebe bieten oft geregelte
                  Gehaltsstufen mit automatischen Erhöhungen. Bei kleineren Firmen ist das Gehalt
                  häufig Verhandlungssache.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-yellow-200 hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-yellow-100 text-yellow-600 mb-6">
                  <Factory className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Branche</h3>
                <p className="text-stone-600 leading-relaxed">
                  Die Branche hat einen großen Einfluss auf dein Gehalt. IT, Finanzen und
                  Ingenieurwesen zahlen am besten. Soziale Berufe, Kreativbranche und Gastronomie
                  liegen dagegen oft unter dem Durchschnitt. Auch innerhalb einer Branche gibt es
                  große Unterschiede je nach Spezialisierung.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Info className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">Wichtiger Hinweis</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Alle hier genannten Gehälter sind Richtwerte für Berufseinsteiger (brutto/Monat).
                    Dein tatsächliches Gehalt hängt von deiner Qualifikation, Berufserfahrung (z. B.
                    durch Praktika oder Werkstudententätigkeiten) und deinem Verhandlungsgeschick ab.
                    Bei vielen Berufen ist mit 3–5 Jahren Erfahrung ein Gehaltssprung von 20–40 %
                    realistisch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Salary Progression */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5 text-sm text-green-600 mb-4">
                <TrendingUp className="h-4 w-4" />
                Gehaltsentwicklung
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
                So entwickelt sich dein Gehalt
              </h2>
              <p className="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
                Mit zunehmender Berufserfahrung und Spezialisierung steigt dein Gehalt
                deutlich an. Hier siehst du die typische Entwicklung.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    year: 'Berufseinstieg',
                    range: '2.200 – 4.500 €/Monat',
                    description:
                      'Dein Start ins Berufsleben. Das Einstiegsgehalt variiert stark je nach Beruf, Branche und Region. Praktische Erfahrung aus Praktika oder Werkstudententätigkeiten kann sich positiv auswirken.',
                    barWidth: '35%',
                    color: 'from-amber-400 to-amber-500',
                  },
                  {
                    year: '3–5 Jahre Erfahrung',
                    range: '3.200 – 5.500 €/Monat',
                    description:
                      'Mit Berufserfahrung steigt dein Gehalt spürbar. Spezialisierungen, Weiterbildungen und ein Arbeitgeberwechsel können den Anstieg beschleunigen.',
                    barWidth: '55%',
                    color: 'from-amber-500 to-orange-500',
                  },
                  {
                    year: 'Senior / Spezialist',
                    range: '4.500 – 7.000 €/Monat',
                    description:
                      'Als erfahrene Fachkraft oder Spezialist erreichst du deutlich höhere Gehälter. Zertifizierungen und Branchenwissen zahlen sich besonders aus.',
                    barWidth: '75%',
                    color: 'from-orange-500 to-orange-600',
                  },
                  {
                    year: 'Führungsposition',
                    range: '6.000 – 10.000+ €/Monat',
                    description:
                      'In Führungspositionen oder als Top-Spezialist erreichst du die höchsten Gehälter. Personalverantwortung, strategische Aufgaben und Branchenexpertise sind hier entscheidend.',
                    barWidth: '100%',
                    color: 'from-orange-600 to-red-500',
                  },
                ].map((item) => (
                  <div
                    key={item.year}
                    className="bg-[#FFFBF5] rounded-2xl p-6 border border-amber-100 hover:border-amber-200 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-stone-900">{item.year}</h3>
                      <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                        {item.range}
                      </span>
                    </div>
                    <p className="text-sm text-stone-600 mb-3">{item.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full bg-gradient-to-r ${item.color} transition-all duration-700`}
                        style={{ width: item.barWidth }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Source Note */}
        <section className="bg-[#FFFBF5] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-4 bg-white rounded-xl text-sm text-stone-500 border border-amber-100">
              <p>
                <strong className="text-stone-600">Quellen:</strong> Die Gehaltsangaben basieren auf
                öffentlich zugänglichen Informationen von{' '}
                <a
                  href="https://www.stepstone.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:underline"
                >
                  Stepstone
                </a>
                ,{' '}
                <a
                  href="https://de.indeed.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:underline"
                >
                  Indeed
                </a>
                ,{' '}
                <a
                  href="https://www.glassdoor.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:underline"
                >
                  Glassdoor
                </a>
                {' '}und{' '}
                <a
                  href="https://www.kununu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:underline"
                >
                  kununu
                </a>
                . Alle Angaben sind Richtwerte und können je nach Region, Unternehmen und
                Qualifikation abweichen. Stand: 2026.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-20 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Finde jetzt passende Stellenangebote
            </h2>
            <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
              Du weißt jetzt, was du verdienen kannst. Schau dir offene Stellen an und bewirb
              dich direkt bei Unternehmen in deiner Nähe.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/stellen"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-amber-600 hover:bg-amber-50 transition-colors shadow-lg"
              >
                Stellenangebote finden
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/berufe"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-base font-medium text-white hover:bg-white/10 transition-colors"
              >
                Alle Berufe entdecken
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
