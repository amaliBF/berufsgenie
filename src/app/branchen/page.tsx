import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Briefcase, ArrowRight, Building2, Compass, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { branchen } from '@/lib/branchen-data';
import { BrancheIcon } from '@/lib/branchen-icons';

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
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-stone-900 pt-28 pb-20 overflow-hidden">
        {/* Warm dot pattern overlay */}
        <div className="absolute inset-0 warm-dots opacity-5" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="text-sm text-stone-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li className="text-stone-600">/</li>
              <li className="text-amber-400 font-medium">Branchen</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="tag-pill mb-6">
              <Briefcase className="h-4 w-4" />
              <span>10 Top-Branchen</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="marker-highlight">Branchen</span>-Übersicht
            </h1>
            <p className="text-lg sm:text-xl text-stone-300 max-w-2xl leading-relaxed">
              Entdecke die wichtigsten Branchen in Deutschland. Mit Beispieljobs,
              Gehaltsspannen und Karrierechancen.
            </p>
          </div>
        </div>
      </section>

      {/* Magazine Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="magazine-divider">
          <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">Alle Branchen</span>
        </div>
      </div>

      {/* Branchen Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {branchen.map((branche) => (
              <Link
                key={branche.slug}
                href={`/branchen/${branche.slug}`}
                className="group warm-card rounded-2xl p-8 bg-white"
              >
                <BrancheIcon name={branche.icon} className="h-10 w-10 text-amber-600" />
                <h2 className="text-xl font-bold text-stone-900 mt-4 group-hover:text-amber-600 transition-colors">
                  {branche.name}
                </h2>
                <p className="text-stone-600 mt-3 text-sm leading-relaxed line-clamp-3">
                  {branche.beschreibung}
                </p>

                <div className="mt-4">
                  <p className="text-xs font-medium text-stone-500 uppercase tracking-wide mb-2">Beispieljobs</p>
                  <div className="flex flex-wrap gap-1.5">
                    {branche.beispielJobs.slice(0, 3).map((job) => (
                      <span
                        key={job}
                        className="tag-pill !text-xs"
                      >
                        {job}
                      </span>
                    ))}
                    {branche.beispielJobs.length > 3 && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-stone-100 text-stone-500 text-xs">
                        +{branche.beispielJobs.length - 3} weitere
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between pt-4 border-t border-stone-100">
                  <p className="text-sm font-semibold gradient-text-warm">{branche.gehaltsspanne}</p>
                  <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="feature-box bg-white rounded-2xl p-8 sm:p-10">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold gradient-text-warm">{branchen.length}</div>
                <div className="text-sm text-stone-600 mt-1">Branchen</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold gradient-text-warm">
                  {branchen.reduce((sum, b) => sum + b.beispielJobs.length, 0)}+
                </div>
                <div className="text-sm text-stone-600 mt-1">Beispieljobs</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold gradient-text-warm">100%</div>
                <div className="text-sm text-stone-600 mt-1">Kostenlos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 warm-dots opacity-5" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Finde deinen Job per <span className="marker-highlight-orange">Swipe</span>
          </h2>
          <p className="mt-4 text-xl text-stone-300 max-w-2xl mx-auto">
            Berufsgenie zeigt dir Jobs als kurze Videos. Swipe, matche und chatte direkt mit Arbeitgebern.
          </p>
          <div className="mt-10">
            <Link
              href="https://dashboard.genieportal.de/login"
              className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3.5 text-base font-semibold text-white hover:from-amber-400 hover:to-orange-500 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              <Compass className="h-4 w-4" />
              Jetzt loslegen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
