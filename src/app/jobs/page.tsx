import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ChevronRight, Building2, ArrowRight, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { staedte, bundeslaender, getStaedteByBundesland } from '@/lib/staedte-data';

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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-violet-200 mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Jobs nach Stadt</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-violet-200 mb-6 border border-white/20">
              <MapPin className="h-4 w-4" />
              <span>84 Städte deutschlandweit</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Jobs nach Stadt
            </h1>
            <p className="text-lg sm:text-xl text-violet-100 max-w-2xl">
              Finde Stellenangebote in deiner Stadt. Wähle eine Stadt und entdecke offene
              Positionen, Top-Branchen und Karrieremöglichkeiten in deiner Region.
            </p>
          </div>
        </div>
      </section>

      {/* Städte nach Bundesland */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {bundeslaender.map((bl) => {
            const blStaedte = getStaedteByBundesland(bl.name);
            if (blStaedte.length === 0) return null;

            return (
              <div key={bl.slug} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-violet-600" />
                  {bl.name}
                  <span className="text-sm font-normal text-gray-500">({blStaedte.length} Städte)</span>
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {blStaedte.map((stadt) => (
                    <Link
                      key={stadt.slug}
                      href={`/jobs/${stadt.slug}`}
                      className="group flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md transition-all bg-white"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-violet-600 transition-colors">
                          Jobs in {stadt.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-0.5">
                          {stadt.einwohner.toLocaleString('de-DE')} Einwohner
                        </p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-violet-600 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Deinen Traumjob per Swipe finden
          </h2>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Berufsgenie bringt dich und Arbeitgeber zusammen – mit echten Videos, Matching und Direkt-Chat.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://dashboard.berufsgenie.de/login"
              className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-violet-600 hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Building2 className="h-4 w-4" />
              Als Arbeitgeber registrieren
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
