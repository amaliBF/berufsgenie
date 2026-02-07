import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Compass, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ratgeber, ratgeberKategorien, getRatgeberByCategory } from '@/lib/ratgeber-data';

export const metadata: Metadata = {
  title: 'Karriere-Ratgeber – Bewerbung, Gehalt, Arbeitsrecht & mehr',
  description:
    `${ratgeber.length}+ Ratgeber-Artikel rund um Karriere: Bewerbungstipps, Gehaltsverhandlung, Arbeitsrecht, Berufswechsel und vieles mehr.`,
  alternates: { canonical: '/ratgeber' },
  openGraph: {
    title: 'Karriere-Ratgeber | Berufsgenie',
    description: `Über ${ratgeber.length} Ratgeber-Artikel rund um Karriere, Bewerbung, Gehalt und Arbeitsrecht.`,
    url: 'https://berufsgenie.de/ratgeber',
  },
};

const categoryIcons: Record<string, string> = {
  'bewerbung': '📝',
  'karriere': '📚',
  'gehalt': '💰',
  'arbeitsrecht': '⚖️',
  'berufswechsel': '🔄',
};

export default function RatgeberPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://berufsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber' },
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
        <div className="absolute inset-0 warm-dots opacity-5" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="text-sm text-stone-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li className="text-stone-600">/</li>
              <li className="text-amber-400 font-medium">Ratgeber</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="tag-pill mb-6">
              <BookOpen className="h-4 w-4" />
              <span>Karriere-Wissen</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ratgeber für <span className="marker-highlight">Jobsuchende</span>
            </h1>
            <p className="text-lg text-stone-300 mb-8 max-w-2xl leading-relaxed">
              {ratgeber.length}+ Artikel mit Tipps und Infos rund um Karriere, Bewerbung, Gehalt und Arbeitsrecht.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-white">{ratgeber.length}+</div>
                <div className="text-sm text-stone-400">Artikel</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-white">{ratgeberKategorien.length}</div>
                <div className="text-sm text-stone-400">Kategorien</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-stone-400">Kostenlos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Quick Links */}
          <div className="flex flex-wrap gap-2 mb-10">
            {ratgeberKategorien.map((kat) => {
              const count = getRatgeberByCategory(kat.slug).length;
              if (count === 0) return null;
              return (
                <a
                  key={kat.slug}
                  href={`#${kat.slug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-amber-50 hover:text-amber-700 rounded-lg text-sm font-medium text-stone-700 transition-colors border border-stone-100 hover:border-amber-300"
                >
                  <span>{categoryIcons[kat.slug] || '📋'}</span>
                  <span>{kat.name}</span>
                  <span className="text-xs text-stone-400">({count})</span>
                </a>
              );
            })}
          </div>

          {/* Articles by Category */}
          {ratgeberKategorien.map((kat) => {
            const katArtikel = getRatgeberByCategory(kat.slug);
            if (katArtikel.length === 0) return null;
            return (
              <section key={kat.slug} id={kat.slug} className="mb-14 scroll-mt-28">
                <div className="magazine-divider mb-6">
                  <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap flex items-center gap-2">
                    <span className="text-lg">{categoryIcons[kat.slug] || '📋'}</span>
                    {kat.name}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold text-stone-900">{kat.name}</h2>
                  <span className="tag-pill !text-xs">{katArtikel.length} Artikel</span>
                </div>
                <p className="text-stone-600 mb-6">{kat.description}</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {katArtikel.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/ratgeber/${a.slug}`}
                      className="group p-5 rounded-xl warm-card bg-white"
                    >
                      <div className="font-semibold text-stone-900 group-hover:text-amber-700 mb-2 transition-colors">{a.title}</div>
                      <p className="text-sm text-stone-500 line-clamp-2 mb-3">{a.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-stone-400">
                          {new Date(a.publishDate).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                        <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}

          {/* CTA */}
          <section className="bg-stone-900 rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden mt-8 mb-16">
            <div className="absolute inset-0 warm-dots opacity-5" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-t-2xl" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Bereit für deinen <span className="marker-highlight-orange">Traumjob</span>?
              </h2>
              <p className="mb-6 text-stone-300 max-w-xl mx-auto">
                Finde den perfekten Job und bewirb dich direkt über Berufsgenie.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/branchen"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold hover:from-amber-400 hover:to-orange-500 transition-all shadow-md hover:shadow-lg gap-2"
                >
                  <Compass className="h-4 w-4" />
                  Alle Branchen ansehen
                </Link>
                <Link
                  href="https://dashboard.genieportal.de/register"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-amber-500/50 text-amber-400 font-semibold hover:bg-white/5 transition-colors"
                >
                  Kostenlos registrieren
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
