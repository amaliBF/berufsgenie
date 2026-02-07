import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ChevronRight, Building2, Compass } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { staedte, bundeslaender, getStaedteByBundesland } from '@/lib/staedte-data';
import StaedteSearch from '@/components/StaedteSearch';

export const metadata: Metadata = {
  title: 'Jobs nach Stadt – Stellenangebote in 84 Städten Deutschlands',
  description:
    'Finde deinen Traumjob in deiner Stadt. Stellenangebote in 84 deutschen Städten – von Berlin über München bis Hamburg. Jetzt Jobs in deiner Nähe entdecken.',
  alternates: { canonical: '/jobs' },
  openGraph: {
    title: 'Jobs nach Stadt – Stellenangebote in deiner Nähe | Berufsgenie',
    description:
      'Entdecke Stellenangebote in 84 deutschen Städten. Finde Jobs in deiner Nähe mit Berufsgenie.',
    url: 'https://berufsgenie.de/jobs',
  },
};

export default function JobsStaedtePage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://berufsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Jobs nach Stadt' },
    ],
  };

  const searchStaedte = staedte.map((s) => ({
    slug: s.slug,
    name: s.name,
    bundesland: s.bundesland,
    einwohner: s.einwohner,
  }));

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-stone-900 pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 warm-dots opacity-5" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="text-sm text-stone-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li className="text-stone-600">/</li>
              <li className="text-amber-400 font-medium">Jobs nach Stadt</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="tag-pill mb-6">
              <MapPin className="h-4 w-4" />
              <span>84 Städte deutschlandweit</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Jobs nach <span className="marker-highlight">Stadt</span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-300 max-w-2xl leading-relaxed">
              Finde Stellenangebote in deiner Stadt. Wähle eine Stadt und entdecke offene
              Positionen, Top-Branchen und Karrieremöglichkeiten in deiner Region.
            </p>
          </div>
        </div>
      </section>

      {/* Search + Cities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search */}
          <StaedteSearch staedte={searchStaedte} />

          {/* Magazine Divider */}
          <div className="magazine-divider mb-10">
            <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">Nach Bundesland</span>
          </div>

          {/* Städte nach Bundesland */}
          {bundeslaender.map((bl) => {
            const blStaedte = getStaedteByBundesland(bl.name);
            if (blStaedte.length === 0) return null;

            return (
              <div key={bl.slug} className="mb-12">
                <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  {bl.name}
                  <span className="text-sm font-normal text-stone-500">({blStaedte.length} Städte)</span>
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {blStaedte.map((stadt) => (
                    <Link
                      key={stadt.slug}
                      href={`/jobs/${stadt.slug}`}
                      className="group flex items-center justify-between p-4 rounded-xl warm-card bg-white"
                    >
                      <div>
                        <h3 className="font-semibold text-stone-900 group-hover:text-amber-600 transition-colors">
                          Jobs in {stadt.name}
                        </h3>
                        <p className="text-sm text-stone-500 mt-0.5">
                          {stadt.einwohner.toLocaleString('de-DE')} Einwohner
                        </p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-stone-400 group-hover:text-amber-600 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 warm-dots opacity-5" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Deinen Traumjob per <span className="marker-highlight-orange">Swipe</span> finden
          </h2>
          <p className="mt-4 text-xl text-stone-300 max-w-2xl mx-auto">
            Berufsgenie bringt dich und Arbeitgeber zusammen – mit echten Videos, Matching und Direkt-Chat.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://dashboard.ausbildungsgenie.de/register"
              className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3.5 text-base font-semibold text-white hover:from-amber-400 hover:to-orange-500 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Compass className="h-4 w-4" />
              Als Arbeitgeber registrieren
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
