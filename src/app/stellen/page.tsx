import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Briefcase, ChevronRight, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobSearchBar from '@/components/stellen/JobSearchBar';
import JobCard from '@/components/stellen/JobCard';
import AppCTA from '@/components/stellen/AppCTA';
import {
  fetchApi,
  SearchResponse,
  StatsResponse,
  LatestResponse,
} from '@/lib/api';

export const metadata: Metadata = {
  title: 'Stellen finden \u2013 Aktuelle Jobangebote',
  description:
    'Finde deinen Job! Aktuelle Stellenangebote von Arbeitgebern in deiner N\u00e4he. Mit Video-Vorschau und direktem Chat. Jetzt Stellen durchsuchen.',
  alternates: { canonical: '/stellen' },
  openGraph: {
    title: 'Stellen finden \u2013 Aktuelle Jobangebote | Berufsgenie',
    description:
      'Aktuelle Stellenangebote von Arbeitgebern in deiner N\u00e4he. Mit Video-Vorschau und direktem Chat.',
    url: 'https://berufsgenie.de/stellen',
  },
};

export default async function StellenPage({
  searchParams,
}: {
  searchParams: { q?: string; stadt?: string; berufsfeld?: string; page?: string };
}) {
  const q = searchParams.q || '';
  const stadt = searchParams.stadt || '';
  const berufsfeld = searchParams.berufsfeld || '';
  const page = parseInt(searchParams.page || '1', 10);

  const hasFilters = q || stadt || berufsfeld;

  // Fetch data in parallel
  const [searchData, statsData, latestData] = await Promise.all([
    hasFilters
      ? fetchApi<SearchResponse>(
          `/public/jobs/search?portal_id=3&q=${encodeURIComponent(q)}&stadt=${encodeURIComponent(stadt)}&berufsfeld=${encodeURIComponent(berufsfeld)}&page=${page}&limit=20`,
        )
      : null,
    fetchApi<StatsResponse>('/public/jobs/stats?portal_id=3'),
    !hasFilters ? fetchApi<LatestResponse>('/public/jobs/latest?portal_id=3&limit=20') : null,
  ]);

  const stats = statsData || { totalJobs: 0, totalCompanies: 0, topCities: [], topProfessions: [] };
  const searchResults = searchData?.items || [];
  const latestJobs = latestData?.items || [];
  const displayJobs = hasFilters ? searchResults : latestJobs;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Stellen finden',
    description: 'Aktuelle Stellenangebote von Arbeitgebern in ganz Deutschland.',
    url: 'https://berufsgenie.de/stellen',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Berufsgenie',
      url: 'https://berufsgenie.de',
    },
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />

      {/* Hero + Search */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-amber-50/80 via-[#FFFBF5] to-[#FFFBF5]">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-stone-900">
              Finde deine{' '}
              <span className="marker-highlight">Stelle</span>
            </h1>
            <p className="mt-3 text-lg text-stone-600">
              {stats.totalJobs > 0
                ? `${stats.totalJobs.toLocaleString('de-DE')} Stellenangebote von ${stats.totalCompanies.toLocaleString('de-DE')} Arbeitgebern`
                : 'Aktuelle Stellenangebote von Arbeitgebern in deiner N\u00e4he'}
            </p>
          </div>

          <JobSearchBar initialQuery={q} initialCity={stadt} />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Results */}
        {hasFilters && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-stone-900">
                  {searchData?.total
                    ? `${searchData.total} Stellen gefunden`
                    : 'Keine Stellen gefunden'}
                </h2>
                {(q || stadt) && (
                  <p className="text-sm text-stone-500 mt-1">
                    {q && `Suche: \u201E${q}\u201C`}
                    {q && stadt && ' \u00b7 '}
                    {stadt && `Ort: ${stadt}`}
                  </p>
                )}
              </div>
              <Link
                href="/stellen"
                className="text-sm text-amber-600 hover:text-amber-700 font-medium"
              >
                Filter zur\u00fccksetzen
              </Link>
            </div>

            {/* Facets */}
            {searchData?.facets && (
              <div className="flex flex-wrap gap-2 mb-6">
                {searchData.facets.berufsfelder.slice(0, 8).map((f) => (
                  <Link
                    key={f.slug}
                    href={`/stellen/beruf/${f.slug}`}
                    className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                      berufsfeld === f.slug
                        ? 'bg-amber-100 text-amber-700 border-amber-200'
                        : 'bg-white text-stone-600 border-gray-200 hover:border-amber-200 hover:text-amber-600'
                    }`}
                  >
                    {f.name}
                    <span className="text-stone-400">({f.count})</span>
                  </Link>
                ))}
              </div>
            )}

            {searchResults.length > 0 ? (
              <div className="space-y-3">
                {searchResults.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
                <Briefcase className="h-12 w-12 text-stone-300 mx-auto mb-4" />
                <p className="text-stone-500">
                  Keine Stellen gefunden. Versuche andere Suchbegriffe.
                </p>
              </div>
            )}

            {/* Pagination */}
            {searchData && searchData.pagination.totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {page > 1 && (
                  <Link
                    href={`/stellen?q=${encodeURIComponent(q)}&stadt=${encodeURIComponent(stadt)}&page=${page - 1}`}
                    className="px-4 py-2 text-sm font-medium text-stone-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    Zur\u00fcck
                  </Link>
                )}
                <span className="px-4 py-2 text-sm text-stone-500">
                  Seite {page} von {searchData.pagination.totalPages}
                </span>
                {page < searchData.pagination.totalPages && (
                  <Link
                    href={`/stellen?q=${encodeURIComponent(q)}&stadt=${encodeURIComponent(stadt)}&page=${page + 1}`}
                    className="px-4 py-2 text-sm font-medium text-stone-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    Weiter
                  </Link>
                )}
              </div>
            )}
          </div>
        )}

        {/* Latest Jobs (when no search) */}
        {!hasFilters && displayJobs.length > 0 && (
          <div className="mb-16">
            <div className="magazine-divider mb-6">
              <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">Neueste Stellen</span>
            </div>
            <div className="space-y-3">
              {displayJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        )}

        {/* Popular Professions */}
        {stats.topProfessions.length > 0 && (
          <div className="mb-16">
            <div className="magazine-divider mb-6">
              <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">Beliebte Berufe</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {stats.topProfessions.map((p) => (
                <Link
                  key={p.slug}
                  href={`/stellen/beruf/${p.slug}`}
                  className="group bg-white rounded-xl warm-card p-4 hover:border-amber-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="h-4 w-4 text-amber-500" />
                    <span className="text-sm font-medium text-stone-900 group-hover:text-amber-700 truncate">
                      {p.name}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500">{p.count} Stellen</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Popular Cities */}
        {stats.topCities.length > 0 && (
          <div className="mb-16">
            <div className="magazine-divider mb-6">
              <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">Stellen nach Stadt</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {stats.topCities.map((c) => {
                const citySlug = c.name
                  .toLowerCase()
                  .replace(/[\u00e4\u00c4]/g, 'ae')
                  .replace(/[\u00f6\u00d6]/g, 'oe')
                  .replace(/[\u00fc\u00dc]/g, 'ue')
                  .replace(/\u00df/g, 'ss')
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/^-+|-+$/g, '');
                return (
                  <Link
                    key={citySlug}
                    href={`/stellen/${citySlug}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full hover:border-amber-200 hover:text-amber-700 transition-colors text-sm warm-card"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    {c.name}
                    <span className="text-stone-400">({c.count})</span>
                    <ChevronRight className="h-3.5 w-3.5 text-stone-300" />
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* App CTA */}
        <AppCTA
          title="Die Genie-App: Swipen statt Suchen"
          description="Lerne Betriebe per Video kennen. Zeig Interesse mit einem Swipe. Chatte direkt wenn's matcht."
        />
      </div>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
