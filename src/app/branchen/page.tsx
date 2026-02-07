import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Briefcase, ArrowRight, Building2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { branchen } from '@/lib/branchen-data';

export const metadata: Metadata = {
  title: 'Branchen-Übersicht – Jobs und Gehälter in 10 Branchen',
  description:
    'Entdecke 10 Top-Branchen in Deutschland: IT, Handwerk, Gesundheit, Finanzen und mehr. Mit Beispieljobs, Gehaltsspannen und Karrierechancen.',
  alternates: { canonical: '/branchen' },
  openGraph: {
    title: 'Branchen-Übersicht – Jobs nach Branche | Berufsgenie',
    description:
      'Finde den passenden Job in deiner Wunschbranche. 10 Branchen mit Gehältern und Beispieljobs.',
    url: 'https://berufsgenie.de/branchen',
  },
};

export default function BranchenPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://berufsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Branchen' },
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
              <li className="text-white font-medium">Branchen</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-violet-200 mb-6 border border-white/20">
              <Briefcase className="h-4 w-4" />
              <span>10 Top-Branchen</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Branchen-Übersicht
            </h1>
            <p className="text-lg sm:text-xl text-violet-100 max-w-2xl">
              Entdecke die wichtigsten Branchen in Deutschland. Mit Beispieljobs,
              Gehaltsspannen und Karrierechancen.
            </p>
          </div>
        </div>
      </section>

      {/* Branchen Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {branchen.map((branche) => (
              <Link
                key={branche.slug}
                href={`/branchen/${branche.slug}`}
                className="group rounded-2xl border border-gray-200 p-8 hover:border-violet-300 hover:shadow-xl transition-all bg-white"
              >
                <span className="text-4xl">{branche.icon}</span>
                <h2 className="text-xl font-bold text-gray-900 mt-4 group-hover:text-violet-600 transition-colors">
                  {branche.name}
                </h2>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed line-clamp-3">
                  {branche.beschreibung}
                </p>

                <div className="mt-4">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Beispieljobs</p>
                  <div className="flex flex-wrap gap-1.5">
                    {branche.beispielJobs.slice(0, 3).map((job) => (
                      <span
                        key={job}
                        className="inline-flex items-center px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 text-xs"
                      >
                        {job}
                      </span>
                    ))}
                    {branche.beispielJobs.length > 3 && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 text-xs">
                        +{branche.beispielJobs.length - 3} weitere
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-sm font-semibold text-violet-600">{branche.gehaltsspanne}</p>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-violet-600 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Finde deinen Job per Swipe
          </h2>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Berufsgenie zeigt dir Jobs als kurze Videos. Swipe, matche und chatte direkt mit Arbeitgebern.
          </p>
          <div className="mt-10">
            <Link
              href="https://dashboard.berufsgenie.de/login"
              className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-violet-600 hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <Building2 className="h-4 w-4" />
              Jetzt loslegen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
