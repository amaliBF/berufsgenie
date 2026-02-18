import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, ArrowRight, Building2, Briefcase, Wallet, Users, Compass, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PassendeStellen from '@/components/stellen/PassendeStellen';
import { branchen, getBrancheBySlug, getAllBranchenSlugs } from '@/lib/branchen-data';

export function generateStaticParams() {
  return getAllBranchenSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const branche = getBrancheBySlug(params.slug);
  if (!branche) return {};

  return {
    title: `${branche.name} – Jobs, Gehalt und Karrierechancen`,
    description: `Entdecke Jobs in der Branche ${branche.name}: Beispielberufe, Gehaltsspannen und Karrieremöglichkeiten. ${branche.beschreibung.slice(0, 120)}`,
    alternates: { canonical: `/branchen/${branche.slug}` },
    openGraph: {
      title: `${branche.name} – Jobs und Karriere | Berufsgenie`,
      description: `Jobs in ${branche.name}: Gehalt ${branche.gehaltsspanne}, Beispieljobs und Karrierechancen.`,
      url: `https://berufsgenie.de/branchen/${branche.slug}`,
    },
  };
}

export default function BrancheDetailPage({ params }: { params: { slug: string } }) {
  const branche = getBrancheBySlug(params.slug);
  if (!branche) return notFound();

  const andereBranchen = branchen.filter((b) => b.slug !== branche.slug).slice(0, 6);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://berufsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Branchen', item: 'https://berufsgenie.de/branchen' },
      { '@type': 'ListItem', position: 3, name: branche.name },
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
              <li><Link href="/branchen" className="hover:text-amber-400 transition-colors">Branchen</Link></li>
              <li className="text-stone-600">/</li>
              <li className="text-amber-400 font-medium">{branche.name}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="text-5xl mb-4 block">{branche.icon}</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {branche.name}
            </h1>
            <p className="text-lg text-stone-300 max-w-2xl leading-relaxed">
              {branche.beschreibung}
            </p>

            {/* Quick Facts */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                <Wallet className="h-4 w-4 text-amber-400 inline mr-2" />
                <span className="text-white font-semibold">{branche.gehaltsspanne}</span>
                <span className="text-stone-400 text-sm ml-1">Gehaltsspanne</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                <Briefcase className="h-4 w-4 text-amber-400 inline mr-2" />
                <span className="text-white font-semibold">{branche.beispielJobs.length}</span>
                <span className="text-stone-400 text-sm ml-1">Beispieljobs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beispieljobs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="magazine-divider mb-8">
            <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">Beispieljobs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">
            Jobs in <span className="marker-highlight">{branche.name}</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {branche.beispielJobs.map((job) => (
              <div
                key={job}
                className="flex items-center gap-3 p-5 rounded-xl warm-card bg-white"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900">{job}</h3>
                  <p className="text-sm text-stone-500">{branche.gehaltsspanne}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gehalt & Karriere Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="magazine-divider mb-8">
            <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">Karriere-Insights</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">
            Gehalt und Karrierechancen
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature-box bg-[#FFFBF5] rounded-2xl p-6 pl-8">
              <Wallet className="h-8 w-8 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Gehaltsspanne</h3>
              <p className="text-2xl font-bold gradient-text-warm mb-2">{branche.gehaltsspanne}</p>
              <p className="text-sm text-stone-600">
                Die Gehaltsspanne variiert je nach Position, Erfahrung, Region und Unternehmen.
              </p>
            </div>
            <div className="feature-box bg-[#FFFBF5] rounded-2xl p-6 pl-8">
              <Users className="h-8 w-8 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Fachkräftebedarf</h3>
              <p className="text-sm text-stone-600">
                Die Branche {branche.name} sucht aktiv nach qualifizierten Fachkräften. Gute Karrierechancen und vielfältige Einstiegsmöglichkeiten warten auf dich.
              </p>
            </div>
            <div className="feature-box bg-[#FFFBF5] rounded-2xl p-6 pl-8">
              <Building2 className="h-8 w-8 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Arbeitgeber</h3>
              <p className="text-sm text-stone-600">
                Von kleinen Betrieben bis zu großen Konzernen – in der Branche {branche.name} findest du Arbeitgeber in jeder Größe und Region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Passende Stellenanzeigen */}
      <PassendeStellen
        query={branche.name}
        titel={`Aktuelle Stellen in ${branche.name}`}
        linkHref={`/stellen?q=${encodeURIComponent(branche.name)}`}
        linkText="Alle Stellen anzeigen"
      />

      {/* Weitere Branchen */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="magazine-divider mb-8">
            <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">Mehr entdecken</span>
          </div>
          <h2 className="text-2xl font-bold text-stone-900 mb-6">
            Weitere Branchen entdecken
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {andereBranchen.map((b) => (
              <Link
                key={b.slug}
                href={`/branchen/${b.slug}`}
                className="group flex items-center gap-4 p-4 rounded-xl warm-card bg-white"
              >
                <span className="text-2xl">{b.icon}</span>
                <div className="flex-grow">
                  <h3 className="font-semibold text-stone-900 group-hover:text-amber-600 transition-colors">
                    {b.name}
                  </h3>
                  <p className="text-sm text-stone-500">{b.gehaltsspanne}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-stone-400 group-hover:text-amber-600 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 warm-dots opacity-5" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Jobs in <span className="marker-highlight-orange">{branche.name}</span> finden
          </h2>
          <p className="mt-4 text-xl text-stone-300">
            Berufsgenie bringt dich und Arbeitgeber zusammen – mit echten Videos, Matching und Direkt-Chat.
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
