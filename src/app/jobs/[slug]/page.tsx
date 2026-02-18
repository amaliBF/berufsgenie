import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, ChevronRight, Building2, Train, Wallet, Star, Compass, Briefcase, GraduationCap, TrendingUp, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PassendeStellen from '@/components/stellen/PassendeStellen';
import { staedte, getStadtBySlug, getNachbarstaedte, getAllStaedteSlugs } from '@/lib/staedte-data';
import { branchen } from '@/lib/branchen-data';
import { getBerufBySlug, berufe } from '@/lib/berufe-data';

// Top 30 Berufe für Kombiseiten (30 × 84 Städte = 2.520 Seiten)
const topBerufeSlugs = [
  'softwareentwickler', 'fachinformatiker', 'data-scientist', 'webentwickler', 'it-projektmanager',
  'maschinenbauingenieur', 'elektroingenieur', 'mechatroniker', 'wirtschaftsingenieur',
  'marketing-manager', 'controller', 'personalreferent', 'unternehmensberater',
  'projektmanager', 'vertriebsmanager', 'einkaufsmanager', 'logistikmanager',
  'bankkaufmann', 'steuerfachangestellter', 'wirtschaftspruefer',
  'krankenpfleger', 'physiotherapeut', 'erzieher', 'sozialarbeiter',
  'rechtsanwaltsfachangestellter', 'verwaltungsfachangestellter',
  'elektriker', 'kfz-mechatroniker', 'tischler', 'architektur',
];

function parseKombiSlug(slug: string): { berufSlug: string; stadtSlug: string } | null {
  const match = slug.match(/^(.+)-in-(.+)$/);
  if (!match) return null;
  const beruf = getBerufBySlug(match[1]);
  const stadt = getStadtBySlug(match[2]);
  if (!beruf || !stadt) return null;
  return { berufSlug: match[1], stadtSlug: match[2] };
}

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  // Stadt-Seiten (84)
  const stadtParams = getAllStaedteSlugs().map((slug) => ({ slug }));

  // Kombi-Seiten: Top 30 Berufe × 84 Städte = 2.520
  const kombiParams: { slug: string }[] = [];
  for (const berufSlug of topBerufeSlugs) {
    if (getBerufBySlug(berufSlug)) {
      for (const stadt of staedte) {
        kombiParams.push({ slug: `${berufSlug}-in-${stadt.slug}` });
      }
    }
  }

  return [...stadtParams, ...kombiParams];
}

export function generateMetadata({ params }: Props): Metadata {
  // Check Kombi first
  const kombi = parseKombiSlug(params.slug);
  if (kombi) {
    const beruf = getBerufBySlug(kombi.berufSlug)!;
    const stadt = getStadtBySlug(kombi.stadtSlug)!;
    const title = `${beruf.name} Jobs in ${stadt.name} 2026 – Gehalt & Stellen | Berufsgenie`;
    const description = `${beruf.name} in ${stadt.name}: Gehalt ${beruf.gehaltsspanne[0].toLocaleString('de-DE')} – ${beruf.gehaltsspanne[1].toLocaleString('de-DE')} €, ${beruf.ausbildung}. Stellenangebote und Karrierechancen in ${stadt.name}.`;
    return {
      title,
      description,
      alternates: { canonical: `/jobs/${params.slug}` },
      openGraph: { title, description, url: `https://berufsgenie.de/jobs/${params.slug}`, type: 'article' },
    };
  }

  // Stadt page
  const stadt = getStadtBySlug(params.slug);
  if (!stadt) return {};

  return {
    title: `Jobs in ${stadt.name} – Stellenangebote und Karrieremöglichkeiten`,
    description: `Finde deinen Traumjob in ${stadt.name}. Entdecke offene Stellen, Top-Branchen und Karrierechancen in ${stadt.name}, ${stadt.bundesland}. Jetzt bei Berufsgenie durchstarten.`,
    alternates: { canonical: `/jobs/${stadt.slug}` },
    openGraph: {
      title: `Jobs in ${stadt.name} – Stellenangebote | Berufsgenie`,
      description: `Stellenangebote in ${stadt.name}: Top-Branchen, Gehaltsniveau und regionale Jobmöglichkeiten.`,
      url: `https://berufsgenie.de/jobs/${stadt.slug}`,
    },
  };
}

export default function JobsPage({ params }: Props) {
  // Try Kombi page first
  const kombi = parseKombiSlug(params.slug);
  if (kombi) {
    return <KombiPage berufSlug={kombi.berufSlug} stadtSlug={kombi.stadtSlug} slug={params.slug} />;
  }

  // Stadt page
  const stadt = getStadtBySlug(params.slug);
  if (!stadt) return notFound();

  return <StadtPage stadtSlug={params.slug} />;
}

// ========== STADT PAGE ==========
function StadtPage({ stadtSlug }: { stadtSlug: string }) {
  const stadt = getStadtBySlug(stadtSlug)!;
  const nachbarStaedte = getNachbarstaedte(stadt);

  // Top Berufe für Kombi-Links
  const topBerufeForCity = topBerufeSlugs
    .map((s) => getBerufBySlug(s))
    .filter((b): b is NonNullable<typeof b> => b !== undefined)
    .slice(0, 8);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://berufsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Jobs nach Stadt', item: 'https://berufsgenie.de/jobs' },
      { '@type': 'ListItem', position: 3, name: `Jobs in ${stadt.name}` },
    ],
  };

  const lebenshaltungLabel: Record<string, string> = {
    niedrig: 'Niedrig', mittel: 'Mittel', hoch: 'Hoch', 'sehr hoch': 'Sehr hoch',
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative bg-stone-900 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 warm-dots opacity-5" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="text-sm text-stone-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li className="text-stone-600">/</li>
              <li><Link href="/jobs" className="hover:text-amber-400 transition-colors">Jobs</Link></li>
              <li className="text-stone-600">/</li>
              <li className="text-amber-400 font-medium">{stadt.name}</li>
            </ol>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Jobs in <span className="marker-highlight">{stadt.name}</span>
          </h1>
          <p className="text-lg text-stone-300 max-w-3xl leading-relaxed">{stadt.beschreibung}</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <MapPin className="h-5 w-5 text-amber-400 mb-2" />
              <p className="text-white font-bold">{stadt.bundesland}</p>
              <p className="text-stone-400 text-sm">Bundesland</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Building2 className="h-5 w-5 text-amber-400 mb-2" />
              <p className="text-white font-bold">{stadt.einwohner.toLocaleString('de-DE')}</p>
              <p className="text-stone-400 text-sm">Einwohner</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Train className="h-5 w-5 text-amber-400 mb-2" />
              <p className="text-white font-bold text-sm">{stadt.oepnv}</p>
              <p className="text-stone-400 text-sm">ÖPNV</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Wallet className="h-5 w-5 text-amber-400 mb-2" />
              <p className="text-white font-bold">{lebenshaltungLabel[stadt.lebenshaltung]}</p>
              <p className="text-stone-400 text-sm">Lebenshaltung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beliebte Berufe in dieser Stadt */}
      {topBerufeForCity.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="magazine-divider mb-8">
              <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">Beliebte Berufe</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">
              Top-Berufe in <span className="marker-highlight">{stadt.name}</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {topBerufeForCity.map((beruf) => (
                <Link
                  key={beruf.slug}
                  href={`/jobs/${beruf.slug}-in-${stadt.slug}`}
                  className="group warm-card rounded-xl p-5 bg-white"
                >
                  <h3 className="font-semibold text-stone-900 group-hover:text-amber-600 transition-colors mb-1">
                    {beruf.name}
                  </h3>
                  <p className="text-sm gradient-text-warm font-medium">
                    {beruf.gehaltsspanne[0].toLocaleString('de-DE')} – {beruf.gehaltsspanne[1].toLocaleString('de-DE')} €
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Branchen */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="magazine-divider mb-8">
            <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">Branchen</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">
            Top-Branchen in <span className="marker-highlight">{stadt.name}</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branchen.map((branche) => (
              <Link key={branche.slug} href={`/branchen/${branche.slug}`} className="group warm-card rounded-2xl p-6 bg-[#FFFBF5]">
                <span className="text-3xl">{branche.icon}</span>
                <h3 className="text-lg font-semibold text-stone-900 mt-3 group-hover:text-amber-600 transition-colors">{branche.name}</h3>
                <p className="text-sm text-stone-600 mt-2 line-clamp-2">{branche.beschreibung}</p>
                <p className="text-sm font-medium gradient-text-warm mt-3">{branche.gehaltsspanne}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Passende Stellenanzeigen */}
      <PassendeStellen
        stadt={stadt.name}
        titel={`Aktuelle Stellen in ${stadt.name}`}
        linkHref={`/stellen?stadt=${encodeURIComponent(stadt.name)}`}
        linkText="Alle Stellen anzeigen"
      />

      {/* Besonderheiten */}
      {stadt.besonderheiten.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="magazine-divider mb-8">
              <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">Stadtprofil</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">Besonderheiten von {stadt.name}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {stadt.besonderheiten.map((item, i) => (
                <div key={i} className="flex items-start gap-3 feature-box bg-white rounded-xl p-5 pl-8">
                  <Star className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Nachbarstädte */}
      {nachbarStaedte.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="magazine-divider mb-8">
              <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">In der Nähe</span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Jobs in der Nähe</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {nachbarStaedte.map((ns) => (
                <Link key={ns.slug} href={`/jobs/${ns.slug}`} className="group flex items-center justify-between p-4 rounded-xl warm-card bg-[#FFFBF5]">
                  <div>
                    <h3 className="font-semibold text-stone-900 group-hover:text-amber-600 transition-colors">Jobs in {ns.name}</h3>
                    <p className="text-sm text-stone-500">{ns.bundesland}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-stone-400 group-hover:text-amber-600 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 warm-dots opacity-5" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Deinen Traumjob in <span className="marker-highlight-orange">{stadt.name}</span> finden
          </h2>
          <p className="mt-4 text-xl text-stone-300">Berufsgenie bringt Jobsuchende und Arbeitgeber zusammen – mit echten Videos und Direkt-Chat.</p>
          <div className="mt-10">
            <Link href="https://dashboard.genieportal.de/login" className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3.5 text-base font-semibold text-white hover:from-amber-400 hover:to-orange-500 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2">
              <Compass className="h-4 w-4" />
              Jetzt bei Berufsgenie starten
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// ========== KOMBI PAGE ==========
function KombiPage({ berufSlug, stadtSlug, slug }: { berufSlug: string; stadtSlug: string; slug: string }) {
  const beruf = getBerufBySlug(berufSlug)!;
  const stadt = getStadtBySlug(stadtSlug)!;
  const nachbarStaedte = getNachbarstaedte(stadt);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://berufsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Jobs', item: 'https://berufsgenie.de/jobs' },
      { '@type': 'ListItem', position: 3, name: `Jobs in ${stadt.name}`, item: `https://berufsgenie.de/jobs/${stadt.slug}` },
      { '@type': 'ListItem', position: 4, name: `${beruf.name} in ${stadt.name}` },
    ],
  };

  const lebenshaltungLabel: Record<string, string> = {
    niedrig: 'Niedrig', mittel: 'Mittel', hoch: 'Hoch', 'sehr hoch': 'Sehr hoch',
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative bg-stone-900 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 warm-dots opacity-5" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="text-sm text-stone-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li className="text-stone-600">/</li>
              <li><Link href="/jobs" className="hover:text-amber-400 transition-colors">Jobs</Link></li>
              <li className="text-stone-600">/</li>
              <li><Link href={`/jobs/${stadt.slug}`} className="hover:text-amber-400 transition-colors">{stadt.name}</Link></li>
              <li className="text-stone-600">/</li>
              <li className="text-amber-400 font-medium">{beruf.name}</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="marker-highlight">{beruf.name}</span> in {stadt.name}
          </h1>
          <p className="text-lg text-stone-300 max-w-3xl leading-relaxed">
            Alles über den Beruf {beruf.name} in {stadt.name}: Gehalt, Aufgaben, Karrierechancen und aktuelle Stellenangebote.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-xl border border-white/10">
              <Wallet className="w-4 h-4 text-amber-400" />
              {beruf.gehaltsspanne[0].toLocaleString('de-DE')} – {beruf.gehaltsspanne[1].toLocaleString('de-DE')} € / Monat
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-xl border border-white/10">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              {beruf.ausbildung}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-xl border border-white/10">
              <MapPin className="w-4 h-4 text-amber-400" />
              {stadt.name}, {stadt.bundesland}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Berufsprofil */}
            <section className="warm-card bg-white rounded-2xl p-6">
              <div className="magazine-divider mb-4">
                <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">Berufsprofil</span>
              </div>
              <p className="text-stone-700 leading-relaxed">{beruf.beschreibung}</p>
            </section>

            {/* Aufgaben */}
            <section className="warm-card bg-white rounded-2xl p-6">
              <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-amber-600" />
                Typische Aufgaben
              </h2>
              <ul className="space-y-3">
                {beruf.aufgaben.map((aufgabe, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-stone-700">{aufgabe}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Kompetenzen */}
            <section className="warm-card bg-white rounded-2xl p-6">
              <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-amber-600" />
                Gefragte Kompetenzen
              </h2>
              <div className="flex flex-wrap gap-2">
                {beruf.kompetenzen.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-amber-50 text-amber-800 rounded-lg text-sm font-medium border border-amber-100">{skill}</span>
                ))}
              </div>
            </section>

            {/* Arbeitsmarkt in Stadt */}
            <section className="feature-box bg-amber-50 rounded-2xl p-6 pl-8 border border-amber-100">
              <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-amber-600" />
                Arbeitsmarkt in {stadt.name}
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">{beruf.arbeitsmarkt}</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-sm text-stone-500">Lebenshaltung</p>
                  <p className="font-bold text-stone-900">{lebenshaltungLabel[stadt.lebenshaltung]}</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-sm text-stone-500">ÖPNV</p>
                  <p className="font-bold text-stone-900 text-sm">{stadt.oepnv}</p>
                </div>
              </div>
            </section>

            {/* Karrierepfade */}
            <section className="warm-card bg-white rounded-2xl p-6">
              <h2 className="text-xl font-bold text-stone-900 mb-4">Karrierepfade</h2>
              <ul className="space-y-2">
                {beruf.karrierePfade.map((pfad, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700">
                    <ChevronRight className="h-4 w-4 text-amber-500 shrink-0 mt-1" />
                    {pfad}
                  </li>
                ))}
              </ul>
            </section>

            {/* Gleicher Beruf in anderen Städten */}
            {nachbarStaedte.length > 0 && (
              <section className="warm-card bg-white rounded-2xl p-6">
                <h2 className="text-xl font-bold text-stone-900 mb-4">{beruf.name} in der Nähe</h2>
                <div className="grid sm:grid-cols-2 gap-2">
                  {nachbarStaedte.slice(0, 6).map((ns) => (
                    <Link
                      key={ns.slug}
                      href={`/jobs/${beruf.slug}-in-${ns.slug}`}
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-amber-50 transition-colors text-sm group"
                    >
                      <span className="text-amber-500">📍</span>
                      <span className="text-stone-700 group-hover:text-amber-700">{beruf.name} in {ns.name}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="mt-8 lg:mt-0 space-y-6">
            {/* Gehalt */}
            <div className="warm-card bg-white rounded-2xl p-5">
              <h3 className="font-bold text-stone-900 mb-3">Gehalt</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-stone-500">Gehaltsspanne</dt>
                  <dd className="font-semibold gradient-text-warm text-lg">
                    {beruf.gehaltsspanne[0].toLocaleString('de-DE')} – {beruf.gehaltsspanne[1].toLocaleString('de-DE')} €
                  </dd>
                </div>
                <div>
                  <dt className="text-stone-500">Einstiegsgehalt</dt>
                  <dd className="font-medium text-stone-900">
                    {beruf.einstiegsgehalt[0].toLocaleString('de-DE')} – {beruf.einstiegsgehalt[1].toLocaleString('de-DE')} €
                  </dd>
                </div>
                <div>
                  <dt className="text-stone-500">Ausbildung</dt>
                  <dd className="font-medium text-stone-900">{beruf.ausbildung}</dd>
                </div>
              </dl>
            </div>

            {/* Stadt-Info */}
            <div className="warm-card bg-white rounded-2xl p-5">
              <h3 className="font-bold text-stone-900 mb-3">{stadt.name}</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-stone-500">Bundesland</dt>
                  <dd className="font-medium text-stone-900">{stadt.bundesland}</dd>
                </div>
                <div>
                  <dt className="text-stone-500">Einwohner</dt>
                  <dd className="font-medium text-stone-900">{stadt.einwohner.toLocaleString('de-DE')}</dd>
                </div>
                <div>
                  <dt className="text-stone-500">Lebenshaltung</dt>
                  <dd className="font-medium text-stone-900">{lebenshaltungLabel[stadt.lebenshaltung]}</dd>
                </div>
              </dl>
            </div>

            {/* Links */}
            <div className="warm-card bg-white rounded-2xl p-5">
              <h3 className="font-bold text-stone-900 mb-3">Mehr entdecken</h3>
              <ul className="space-y-2">
                <li>
                  <Link href={`/berufe/${beruf.slug}`} className="flex items-center gap-2 text-sm text-stone-700 hover:text-amber-600 transition-colors">
                    <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                    Berufsprofil: {beruf.name}
                  </Link>
                </li>
                <li>
                  <Link href={`/jobs/${stadt.slug}`} className="flex items-center gap-2 text-sm text-stone-700 hover:text-amber-600 transition-colors">
                    <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                    Alle Jobs in {stadt.name}
                  </Link>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-stone-900 rounded-2xl p-5 text-white relative overflow-hidden">
              <div className="absolute inset-0 warm-dots opacity-5" />
              <div className="relative">
                <h3 className="font-bold mb-2">Jetzt durchstarten</h3>
                <p className="text-sm text-stone-300 mb-4">
                  Finde {beruf.name} Stellen in {stadt.name} bei Berufsgenie.
                </p>
                <Link
                  href="/stellen"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:from-amber-400 hover:to-orange-500 transition-all"
                >
                  <Compass className="h-3.5 w-3.5" />
                  Stellen ansehen
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Passende Stellenanzeigen */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PassendeStellen
          query={beruf.name}
          stadt={stadt.name}
          titel={`Stellen als ${beruf.name} in ${stadt.name}`}
          linkHref={`/stellen?q=${encodeURIComponent(beruf.name)}&stadt=${encodeURIComponent(stadt.name)}`}
          linkText="Alle Stellen anzeigen"
        />
      </div>

      <Footer />
    </div>
  );
}
