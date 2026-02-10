import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Briefcase, Wallet, GraduationCap, Compass } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { berufe, berufsKategorien, getBerufeByCategory } from '@/lib/berufe-data';

export const metadata: Metadata = {
  title: 'Berufe entdecken – 100 Berufsprofile mit Gehalt & Karrierechancen | Berufsgenie',
  description:
    `Entdecke ${berufe.length} Berufsprofile in 10 Kategorien: IT, Ingenieurwesen, Wirtschaft, Marketing und mehr. Gehalt, Aufgaben, Kompetenzen und Karrierepfade.`,
  alternates: { canonical: '/berufe' },
  openGraph: {
    title: 'Berufe entdecken | Berufsgenie',
    description: `${berufe.length} Berufsprofile mit Gehalt, Aufgaben und Karrierechancen.`,
    url: 'https://berufsgenie.de/berufe',
  },
};

export default function BerufePage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://berufsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Berufe' },
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
      <section className="relative bg-stone-900 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 warm-dots opacity-5" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="text-sm text-stone-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li className="text-stone-600">/</li>
              <li className="text-amber-400 font-medium">Berufe</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Berufe entdecken
          </h1>
          <p className="text-lg text-stone-300 max-w-2xl leading-relaxed">
            Finde den Beruf, der zu dir passt. Entdecke {berufe.length} Berufsprofile mit Gehaltsinformationen, Aufgaben und Karrierechancen.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-2xl font-bold text-white">{berufe.length}</div>
              <div className="text-sm text-stone-400">Berufe</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-2xl font-bold text-white">{berufsKategorien.length}</div>
              <div className="text-sm text-stone-400">Kategorien</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-2xl font-bold text-white">84</div>
              <div className="text-sm text-stone-400">Städte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2">
          {berufsKategorien.map((kat) => {
            const count = getBerufeByCategory(kat.slug).length;
            if (count === 0) return null;
            return (
              <a
                key={kat.slug}
                href={`#${kat.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-amber-50 hover:text-amber-700 rounded-lg text-sm font-medium text-stone-700 transition-colors warm-card"
              >
                <span>{kat.name}</span>
                <span className="text-xs text-stone-400">({count})</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Berufe by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {berufsKategorien.map((kat) => {
          const katBerufe = getBerufeByCategory(kat.slug);
          if (katBerufe.length === 0) return null;
          return (
            <section key={kat.slug} id={kat.slug} className="mb-12 scroll-mt-28">
              <div className="magazine-divider mb-6">
                <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">{kat.name}</span>
              </div>
              <p className="text-stone-600 mb-6">{kat.description}</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {katBerufe.map((beruf) => (
                  <Link
                    key={beruf.slug}
                    href={`/berufe/${beruf.slug}`}
                    className="group warm-card rounded-xl p-5 bg-white"
                  >
                    <h3 className="font-semibold text-stone-900 group-hover:text-amber-600 transition-colors mb-2">
                      {beruf.name}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-stone-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Wallet className="h-3.5 w-3.5" />
                        {beruf.gehaltsspanne[0].toLocaleString('de-DE')} – {beruf.gehaltsspanne[1].toLocaleString('de-DE')} €
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-stone-400 mb-3">
                      <GraduationCap className="h-3.5 w-3.5" />
                      {beruf.ausbildung}
                    </div>
                    <p className="text-sm text-stone-600 line-clamp-2">{beruf.beschreibung}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="py-20 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 warm-dots opacity-5" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Deinen <span className="marker-highlight-orange">Traumjob</span> finden
          </h2>
          <p className="mt-4 text-xl text-stone-300">
            Berufsgenie zeigt dir passende Jobs – mit echten Videos, Matching und Direkt-Chat.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/jobs"
              className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3.5 text-base font-semibold text-white hover:from-amber-400 hover:to-orange-500 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              <Compass className="h-4 w-4" />
              Jobs nach Stadt
            </Link>
            <Link
              href="/branchen"
              className="rounded-lg border-2 border-white/20 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-all inline-flex items-center gap-2"
            >
              Branchen entdecken
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
