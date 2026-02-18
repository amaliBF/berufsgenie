import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Briefcase, Wallet, GraduationCap, TrendingUp, Clock, CheckCircle2, Target, Compass, Users, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PassendeStellen from '@/components/stellen/PassendeStellen';
import {
  getBerufBySlug,
  getAllBerufeSlugs,
  getRelatedBerufe,
  berufsKategorien,
} from '@/lib/berufe-data';
import { staedte } from '@/lib/staedte-data';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllBerufeSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const beruf = getBerufBySlug(params.slug);
  if (!beruf) return { title: 'Nicht gefunden' };

  const title = `${beruf.name} – Gehalt, Aufgaben & Karrierechancen | Berufsgenie`;
  const description = `${beruf.name}: ${beruf.gehaltsspanne[0].toLocaleString('de-DE')} – ${beruf.gehaltsspanne[1].toLocaleString('de-DE')} € Gehalt, ${beruf.ausbildung}. Aufgaben, Kompetenzen und Karrierepfade.`;
  return {
    title,
    description,
    alternates: { canonical: `/berufe/${beruf.slug}` },
    openGraph: { title, description, url: `https://berufsgenie.de/berufe/${beruf.slug}`, type: 'article' },
  };
}

export default function BerufDetailPage({ params }: Props) {
  const beruf = getBerufBySlug(params.slug);
  if (!beruf) notFound();

  const related = getRelatedBerufe(beruf);
  const kategorie = berufsKategorien.find((k) => k.slug === beruf.categorySlug);
  const topStaedte = staedte.slice(0, 6);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://berufsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Berufe', item: 'https://berufsgenie.de/berufe' },
      { '@type': 'ListItem', position: 3, name: beruf.name },
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="text-sm text-stone-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li className="text-stone-600">/</li>
              <li><Link href="/berufe" className="hover:text-amber-400 transition-colors">Berufe</Link></li>
              <li className="text-stone-600">/</li>
              <li className="text-amber-400 font-medium">{beruf.name}</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {beruf.name}
          </h1>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-xl border border-white/10">
              <Wallet className="w-4 h-4 text-amber-400" />
              {beruf.gehaltsspanne[0].toLocaleString('de-DE')} – {beruf.gehaltsspanne[1].toLocaleString('de-DE')} € / Monat
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-xl border border-white/10">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              {beruf.ausbildung}
            </span>
            {kategorie && (
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-xl border border-white/10">
                <Target className="w-4 h-4 text-amber-400" />
                {kategorie.name}
              </span>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Beschreibung */}
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
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
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
                  <span key={i} className="px-3 py-1.5 bg-amber-50 text-amber-800 rounded-lg text-sm font-medium border border-amber-100">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Karrierepfade */}
            <section className="warm-card bg-white rounded-2xl p-6">
              <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-amber-600" />
                Karrierepfade
              </h2>
              <ul className="space-y-2">
                {beruf.karrierePfade.map((pfad, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700">
                    <ChevronRight className="h-4 w-4 text-amber-500 shrink-0 mt-1" />
                    {pfad}
                  </li>
                ))}
              </ul>
            </section>

            {/* Typischer Arbeitstag */}
            <section className="warm-card bg-white rounded-2xl p-6">
              <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-600" />
                Typischer Arbeitstag
              </h2>
              <p className="text-stone-700 leading-relaxed">{beruf.typischerArbeitstag}</p>
            </section>

            {/* Arbeitsmarkt */}
            <section className="feature-box bg-amber-50 rounded-2xl p-6 pl-8 border border-amber-100">
              <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-amber-600" />
                Arbeitsmarkt & Zukunftsaussichten
              </h2>
              <p className="text-stone-700 leading-relaxed">{beruf.arbeitsmarkt}</p>
            </section>

            {/* Jobs in Städten */}
            <section className="warm-card bg-white rounded-2xl p-6">
              <h2 className="text-xl font-bold text-stone-900 mb-4">
                {beruf.name} Jobs in deiner Stadt
              </h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {topStaedte.map((stadt) => (
                  <Link
                    key={stadt.slug}
                    href={`/jobs/${beruf.slug}-in-${stadt.slug}`}
                    className="flex items-center gap-2 p-3 rounded-lg hover:bg-amber-50 transition-colors text-sm group"
                  >
                    <MapPin className="h-4 w-4 text-amber-500" />
                    <span className="text-stone-700 group-hover:text-amber-700">{beruf.name} in {stadt.name}</span>
                  </Link>
                ))}
              </div>
              <Link
                href="/jobs"
                className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 text-sm font-medium mt-4"
              >
                Alle Städte ansehen <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </section>
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
                <div>
                  <dt className="text-stone-500">Kategorie</dt>
                  <dd className="font-medium text-stone-900">{beruf.category}</dd>
                </div>
              </dl>
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div className="warm-card bg-white rounded-2xl p-5">
                <h3 className="font-bold text-stone-900 mb-3">Ähnliche Berufe</h3>
                <ul className="space-y-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/berufe/${r.slug}`}
                        className="flex items-center gap-2 text-sm text-stone-700 hover:text-amber-600 transition-colors"
                      >
                        <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                        {r.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="bg-stone-900 rounded-2xl p-5 text-white relative overflow-hidden">
              <div className="absolute inset-0 warm-dots opacity-5" />
              <div className="relative">
                <h3 className="font-bold mb-2">Job als {beruf.name} finden</h3>
                <p className="text-sm text-stone-300 mb-4">
                  Entdecke offene Stellen und bewirb dich direkt über Berufsgenie.
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
          titel={`Aktuelle Stellen als ${beruf.name}`}
          linkHref={`/stellen?q=${encodeURIComponent(beruf.name)}`}
          linkText="Alle Stellen anzeigen"
        />
      </div>

      <Footer />
    </div>
  );
}
