import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Compass, BookOpen, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getRatgeberBySlug, getAllRatgeberSlugs, getRelatedRatgeber, ratgeberKategorien } from '@/lib/ratgeber-data';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllRatgeberSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artikel = getRatgeberBySlug(params.slug);
  if (!artikel) return { title: 'Artikel nicht gefunden' };

  return {
    title: `${artikel.title} | Berufsgenie Ratgeber`,
    description: artikel.description,
    alternates: { canonical: `/ratgeber/${artikel.slug}` },
    openGraph: {
      title: artikel.title,
      description: artikel.description,
      url: `https://berufsgenie.de/ratgeber/${artikel.slug}`,
      type: 'article',
      publishedTime: artikel.publishDate,
    },
    twitter: { card: 'summary_large_image', title: artikel.title, description: artikel.description },
  };
}

export default function RatgeberArtikelPage({ params }: Props) {
  const artikel = getRatgeberBySlug(params.slug);
  if (!artikel) notFound();

  const related = getRelatedRatgeber(artikel);
  const kategorie = ratgeberKategorien.find((k) => k.slug === artikel.categorySlug);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://berufsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://berufsgenie.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: kategorie?.name || artikel.category, item: `https://berufsgenie.de/ratgeber#${artikel.categorySlug}` },
      { '@type': 'ListItem', position: 4, name: artikel.title },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: artikel.title,
    description: artikel.description,
    datePublished: artikel.publishDate,
    dateModified: '2026-02-01',
    author: { '@type': 'Organization', name: 'Berufsgenie', url: 'https://berufsgenie.de' },
    publisher: { '@type': 'Organization', name: 'Berufsgenie', url: 'https://berufsgenie.de' },
  };

  const faqJsonLd = artikel.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: artikel.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null;

  const jsonLdArray = [breadcrumbJsonLd, articleJsonLd, ...(faqJsonLd ? [faqJsonLd] : [])];

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArray) }}
      />

      {/* Article Header */}
      <div className="pt-24 pb-8 bg-white border-b border-stone-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-stone-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1">
              <li><Link href="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
              <li className="text-stone-300">/</li>
              <li><Link href="/ratgeber" className="hover:text-amber-600 transition-colors">Ratgeber</Link></li>
              <li className="text-stone-300">/</li>
              <li><Link href={`/ratgeber#${artikel.categorySlug}`} className="hover:text-amber-600 transition-colors">{kategorie?.name || artikel.category}</Link></li>
              <li className="text-stone-300">/</li>
              <li className="text-stone-900 font-medium truncate max-w-[200px]">{artikel.title}</li>
            </ol>
          </nav>

          {/* Category Badge + Date */}
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill">
              {kategorie?.name || artikel.category}
            </span>
            <span className="text-sm text-stone-400">
              {new Date(artikel.publishDate).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            {artikel.title}
          </h1>

          <p className="text-lg text-stone-600 leading-relaxed">{artikel.description}</p>
        </div>
      </div>

      {/* Article Body */}
      <main className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Key Points */}
          {artikel.keyPoints.length > 0 && (
            <section className="feature-box bg-white rounded-xl p-6 pl-8 mb-10 border border-stone-100">
              <h2 className="text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-amber-600" />
                Das Wichtigste in Kürze
              </h2>
              <ul className="space-y-2">
                {artikel.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700">
                    <span className="text-amber-500 mt-0.5 flex-shrink-0 font-bold">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Main Content */}
          <article
            className="prose prose-stone max-w-none mb-10 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-stone-700 prose-p:leading-relaxed prose-li:text-stone-700 prose-strong:text-stone-900 prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: artikel.content }}
          />

          {/* Magazine Divider */}
          <div className="magazine-divider my-10">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-widest">Weiterlesen</span>
          </div>

          {/* FAQ */}
          {artikel.faqs.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>
              <div className="space-y-3">
                {artikel.faqs.map((faq, i) => (
                  <details key={i} className="group warm-card bg-white rounded-xl">
                    <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-stone-900 hover:text-amber-700 transition-colors">
                      {faq.question}
                      <ChevronRight className="h-4 w-4 text-stone-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-2" />
                    </summary>
                    <div className="px-4 pb-4 text-stone-600 leading-relaxed">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Related Articles */}
          {related.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Verwandte Artikel</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/ratgeber/${r.slug}`}
                    className="group p-5 rounded-xl warm-card bg-white"
                  >
                    <div className="font-semibold text-stone-900 group-hover:text-amber-700 mb-2 transition-colors">{r.title}</div>
                    <p className="text-sm text-stone-500 line-clamp-2 mb-2">{r.description}</p>
                    <div className="flex items-center gap-1 text-sm text-amber-600 font-medium">
                      <span>Lesen</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="bg-stone-900 rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 warm-dots opacity-5" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-t-2xl" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-white mb-3">
                Bereit für deinen <span className="marker-highlight-orange">Traumjob</span>?
              </h2>
              <p className="mb-6 text-stone-300 max-w-xl mx-auto">
                Finde passende Jobs und bewirb dich direkt über Berufsgenie.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="https://dashboard.genieportal.de/register"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold hover:from-amber-400 hover:to-orange-500 transition-all shadow-md hover:shadow-lg gap-2"
                >
                  <Compass className="h-4 w-4" />
                  Kostenlos registrieren
                </Link>
                <Link
                  href="/ratgeber"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-amber-500/50 text-amber-400 font-semibold hover:bg-white/5 transition-colors"
                >
                  Alle Ratgeber ansehen
                </Link>
              </div>
            </div>
          </section>

          <p className="mt-10 text-xs text-stone-400 text-center">
            Stand: {new Date(artikel.publishDate).toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })} · Alle Angaben ohne Gewähr
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
