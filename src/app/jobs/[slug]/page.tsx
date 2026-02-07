import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, ChevronRight, Building2, ArrowRight, Train, Wallet, Star, Compass } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { staedte, getStadtBySlug, getNachbarstaedte, getAllStaedteSlugs } from '@/lib/staedte-data';
import { branchen } from '@/lib/branchen-data';

export function generateStaticParams() {
  return getAllStaedteSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
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

export default function StadtJobsPage({ params }: { params: { slug: string } }) {
  const stadt = getStadtBySlug(params.slug);
  if (!stadt) return notFound();

  const nachbarStaedte = getNachbarstaedte(stadt);

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
    niedrig: 'Niedrig',
    mittel: 'Mittel',
    hoch: 'Hoch',
    'sehr hoch': 'Sehr hoch',
  };

  const lebenshaltungColor: Record<string, string> = {
    niedrig: 'bg-emerald-100 text-emerald-700',
    mittel: 'bg-blue-100 text-blue-700',
    hoch: 'bg-amber-100 text-amber-700',
    'sehr hoch': 'bg-red-100 text-red-700',
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

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
          <p className="text-lg text-stone-300 max-w-3xl leading-relaxed">
            {stadt.beschreibung}
          </p>

          {/* Quick Facts */}
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

      {/* Branchen in dieser Stadt */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="magazine-divider mb-8">
            <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">Branchen</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">
            Top-Branchen in <span className="marker-highlight">{stadt.name}</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branchen.map((branche) => (
              <Link
                key={branche.slug}
                href={`/branchen/${branche.slug}`}
                className="group warm-card rounded-2xl p-6 bg-white"
              >
                <span className="text-3xl">{branche.icon}</span>
                <h3 className="text-lg font-semibold text-stone-900 mt-3 group-hover:text-amber-600 transition-colors">
                  {branche.name}
                </h3>
                <p className="text-sm text-stone-600 mt-2 line-clamp-2">{branche.beschreibung}</p>
                <p className="text-sm font-medium gradient-text-warm mt-3">{branche.gehaltsspanne}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Besonderheiten */}
      {stadt.besonderheiten.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="magazine-divider mb-8">
              <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">Stadtprofil</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">
              Besonderheiten von {stadt.name}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {stadt.besonderheiten.map((item, index) => (
                <div key={index} className="flex items-start gap-3 feature-box bg-[#FFFBF5] rounded-xl p-5 pl-8">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="magazine-divider mb-8">
              <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">In der Nähe</span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Jobs in der Nähe
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {nachbarStaedte.map((ns) => (
                <Link
                  key={ns.slug}
                  href={`/jobs/${ns.slug}`}
                  className="group flex items-center justify-between p-4 rounded-xl warm-card bg-white"
                >
                  <div>
                    <h3 className="font-semibold text-stone-900 group-hover:text-amber-600 transition-colors">
                      Jobs in {ns.name}
                    </h3>
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
          <p className="mt-4 text-xl text-stone-300">
            Berufsgenie bringt Jobsuchende und Arbeitgeber zusammen – mit echten Videos und Direkt-Chat.
          </p>
          <div className="mt-10">
            <Link
              href="https://dashboard.genieportal.de/login"
              className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3.5 text-base font-semibold text-white hover:from-amber-400 hover:to-orange-500 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
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
