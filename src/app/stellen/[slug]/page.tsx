import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  MapPin,
  Calendar,
  Clock,
  Building2,
  Globe,
  Users,
  Award,
  Check,
  ChevronRight,
  Video,
  Eye,
  Heart,
  Briefcase,
  ExternalLink,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobCard from '@/components/stellen/JobCard';
import AppCTA from '@/components/stellen/AppCTA';
import ApplicationForm from '@/components/stellen/ApplicationForm';
import JobSearchBar from '@/components/stellen/JobSearchBar';
import { staedte } from '@/lib/staedte-data';
import {
  fetchApi,
  ByCityResponse,
  JobDetailResponse,
  SchemaResponse,
  extractIdFromSlug,
} from '@/lib/api';

// ─── Detect if slug is a city or a job detail ────────────────────────────

function findCity(slug: string) {
  return staedte.find((s) => s.slug === slug);
}

// ─── Metadata ─────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const city = findCity(params.slug);

  if (city) {
    return {
      title: `Stellen in ${city.name} 2026 \u2013 Aktuelle Jobangebote`,
      description: `Finde deinen Job in ${city.name}! Aktuelle Stellenangebote von Arbeitgebern aus ${city.name} und Umgebung. Mit Video-Vorschau.`,
      alternates: { canonical: `/stellen/${params.slug}` },
      openGraph: {
        title: `Stellenangebote in ${city.name} | Berufsgenie`,
        description: `Aktuelle Stellenangebote in ${city.name} und Umgebung.`,
        url: `https://berufsgenie.de/stellen/${params.slug}`,
      },
    };
  }

  // Job detail page
  const partialId = extractIdFromSlug(params.slug);
  const data = await fetchApi<JobDetailResponse>(`/public/jobs/${partialId}`);

  if (!data) {
    return { title: 'Stelle nicht gefunden' };
  }

  const { job, company } = data;
  const salaryText = job.salaryYear1 ? `${job.salaryYear1}\u20AC/Monat` : '';
  const cityText = job.city || company.city || '';

  return {
    title: job.metaTitle || `${job.title} bei ${company.name}${cityText ? ` | ${cityText}` : ''} 2026`,
    description:
      job.metaDescription ||
      `${job.title} bei ${company.name}${cityText ? ` in ${cityText}` : ''}. ${salaryText ? `${salaryText}. ` : ''}Jetzt bei Berufsgenie bewerben!`,
    alternates: { canonical: `/stellen/${params.slug}` },
    openGraph: {
      title: `${job.title} bei ${company.name}`,
      description: `${job.title}${cityText ? ` in ${cityText}` : ''}. ${salaryText ? `${salaryText}. ` : ''}Jetzt bewerben!`,
      url: `https://berufsgenie.de/stellen/${params.slug}`,
    },
    twitter: { card: 'summary_large_image' },
  };
}

// ─── City Listing Component ───────────────────────────────────────────────

function CityPage({
  city,
  data,
  slug,
}: {
  city: { name: string; slug: string; bundesland: string };
  data: ByCityResponse | null;
  slug: string;
}) {
  const jobs = data?.items || [];
  const total = data?.total || 0;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Stellenangebote in ${city.name}`,
    description: `${total} aktuelle Stellenangebote in ${city.name}`,
    url: `https://berufsgenie.de/stellen/${slug}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Stellen', item: 'https://berufsgenie.de/stellen' },
        { '@type': 'ListItem', position: 2, name: city.name, item: `https://berufsgenie.de/stellen/${slug}` },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />

      <section className="relative bg-stone-900 pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 warm-dots opacity-5" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-stone-400 mb-6">
            <Link href="/stellen" className="hover:text-amber-400 transition-colors">Stellen</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-amber-400 font-medium">{city.name}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Stellen in <span className="marker-highlight">{city.name}</span>
          </h1>
          <p className="mt-3 text-stone-300">
            {total > 0
              ? `${total} aktuelle Stellenangebote in ${city.name} und Umgebung`
              : `Noch keine Stellen in ${city.name} \u2013 bald kommen neue!`}
          </p>

          <div className="mt-6">
            <JobSearchBar initialCity={city.name} compact />
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {jobs.length > 0 ? (
          <div className="space-y-3 mb-12">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200 mb-12">
            <MapPin className="h-12 w-12 text-stone-300 mx-auto mb-4" />
            <p className="text-stone-600 font-medium">
              Noch keine Stellen in {city.name}
            </p>
            <p className="text-sm text-stone-500 mt-1">
              Schau in der App vorbei \u2013 dort findest du Betriebe per Video!
            </p>
          </div>
        )}

        {/* City info link */}
        <div className="bg-white rounded-xl warm-card p-6 mb-12">
          <h2 className="font-bold text-stone-900 mb-2">
            Jobs in {city.name} \u2013 {city.bundesland}
          </h2>
          <p className="text-sm text-stone-600 mb-4">
            Weitere Informationen \u00fcber Stellenangebote und Berufe in {city.name} findest du auf unserer St\u00e4dte-Seite.
          </p>
          <Link
            href={`/jobs/${slug}`}
            className="text-sm text-amber-600 hover:text-amber-700 font-medium inline-flex items-center gap-1"
          >
            Mehr \u00fcber Jobs in {city.name}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <AppCTA />
      </div>

      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}

// ─── Job Detail Component ─────────────────────────────────────────────────

function JobDetailPage({
  data,
  schema,
  slug,
}: {
  data: JobDetailResponse;
  schema: SchemaResponse | null;
  slug: string;
}) {
  const { job, company, profession, videos, similarJobs } = data;
  const cityText = job.city || company.city || '';
  const salaryValues = [job.salaryYear1, job.salaryYear2, job.salaryYear3].filter(Boolean) as number[];
  const benefitsList = Array.isArray(job.benefits)
    ? job.benefits.filter(Boolean)
    : typeof job.benefits === 'string' && job.benefits
    ? job.benefits.split(/[,;]/).map((b: string) => b.trim()).filter(Boolean)
    : [];
  const requirementsList = Array.isArray(job.anforderungen) && job.anforderungen.length > 0
    ? job.anforderungen.filter(Boolean)
    : typeof job.anforderungen === 'string' && job.anforderungen
    ? job.anforderungen.split(/[,;]/).map((r: string) => r.trim()).filter(Boolean)
    : typeof job.requirements === 'string' && job.requirements
    ? job.requirements.split(/[,;]/).map((r: string) => r.trim()).filter(Boolean)
    : Array.isArray(job.requirements)
    ? job.requirements.filter(Boolean)
    : [];

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Stellen', item: 'https://berufsgenie.de/stellen' },
      ...(cityText
        ? [
            {
              '@type': 'ListItem',
              position: 2,
              name: cityText,
              item: `https://berufsgenie.de/stellen/${cityText.toLowerCase().replace(/[\u00e4\u00c4]/g, 'ae').replace(/[\u00f6\u00d6]/g, 'oe').replace(/[\u00fc\u00dc]/g, 'ue').replace(/\u00df/g, 'ss').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`,
            },
          ]
        : []),
      {
        '@type': 'ListItem',
        position: cityText ? 3 : 2,
        name: job.title,
        item: `https://berufsgenie.de/stellen/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />

      <div className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-stone-500 mb-6 flex-wrap">
            <Link href="/stellen" className="hover:text-amber-600">Stellen</Link>
            {cityText && (
              <>
                <ChevronRight className="h-3.5 w-3.5" />
                <Link
                  href={`/stellen/${cityText.toLowerCase().replace(/[\u00e4\u00c4]/g, 'ae').replace(/[\u00f6\u00d6]/g, 'oe').replace(/[\u00fc\u00dc]/g, 'ue').replace(/\u00df/g, 'ss').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`}
                  className="hover:text-amber-600"
                >
                  {cityText}
                </Link>
              </>
            )}
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-stone-900 font-medium truncate max-w-xs">{company.name}</span>
          </nav>

          {/* Header Card */}
          <div className="bg-white rounded-2xl warm-card p-6 sm:p-8 mb-6">
            <div className="flex items-start gap-5">
              {company.logoUrl ? (
                <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border border-gray-100 bg-gray-50 p-1">
                  <img src={company.logoUrl} alt={company.name} className="w-full h-full object-contain" />
                </div>
              ) : (
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center border border-amber-100">
                  <Building2 className="h-7 w-7 text-amber-400" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm text-stone-500">{company.name}</p>
                  {company.verified && (
                    <span className="inline-flex items-center gap-1 text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      <Award className="h-3 w-3" /> Verifiziert
                    </span>
                  )}
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">{job.title}</h1>
              </div>
            </div>

            {/* Quick Facts Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
              {cityText && (
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  <span className="text-stone-700">{cityText}{job.postalCode ? ` (${job.postalCode})` : ''}</span>
                </div>
              )}
              {salaryValues.length > 0 && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-amber-500 font-bold">\u20AC</span>
                  <span className="text-stone-700">
                    {Math.min(...salaryValues).toLocaleString('de-DE')} - {Math.max(...salaryValues).toLocaleString('de-DE')}\u20AC/Monat
                  </span>
                </div>
              )}
              {job.startDate && (
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  <span className="text-stone-700">
                    Start: {new Date(job.startDate).toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}
                  </span>
                </div>
              )}
              {job.durationMonths && (
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  <span className="text-stone-700">
                    {job.durationMonths >= 12
                      ? `${(job.durationMonths / 12).toFixed(job.durationMonths % 12 ? 1 : 0)} Jahre`
                      : `${job.durationMonths} Monate`}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Videos */}
              {videos.length > 0 && (
                <div className="bg-white rounded-2xl warm-card p-6">
                  <h2 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <Video className="h-5 w-5 text-amber-500" />
                    Video{videos.length > 1 ? 's' : ''} vom Betrieb
                  </h2>
                  <div className="grid gap-4">
                    {videos.map((v) => (
                      <div key={v.id} className="rounded-xl overflow-hidden bg-gray-100">
                        {v.url ? (
                          <video
                            src={v.url}
                            poster={v.thumbnailUrl || undefined}
                            controls
                            preload="metadata"
                            className="w-full aspect-video object-cover"
                          />
                        ) : v.thumbnailUrl ? (
                          <img src={v.thumbnailUrl} alt={v.title || 'Video'} className="w-full aspect-video object-cover" />
                        ) : null}
                        {v.title && <p className="text-sm text-stone-600 p-3">{v.title}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              {job.description && (
                <div className="bg-white rounded-2xl warm-card p-6">
                  <h2 className="font-bold text-stone-900 mb-4">Das erwartet dich</h2>
                  {job.description.includes('<') ? (
                    <div className="prose prose-sm text-stone-600 max-w-none" dangerouslySetInnerHTML={{ __html: job.description }} />
                  ) : (
                    <div className="prose prose-sm text-stone-600 max-w-none">
                      {job.description.split('\n').map((p: string, i: number) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Requirements */}
              {requirementsList.length > 0 && (
                <div className="bg-white rounded-2xl warm-card p-6">
                  <h2 className="font-bold text-stone-900 mb-4">Das bringst du mit</h2>
                  <ul className="space-y-2">
                    {requirementsList.map((r: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Benefits */}
              {benefitsList.length > 0 && (
                <div className="bg-white rounded-2xl warm-card p-6">
                  <h2 className="font-bold text-stone-900 mb-4">Benefits</h2>
                  <div className="flex flex-wrap gap-2">
                    {benefitsList.map((b: string, i: number) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-sm"
                      >
                        <Check className="h-3.5 w-3.5" />
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Salary Details */}
              {salaryValues.length > 0 && (
                <div className="bg-white rounded-2xl warm-card p-6">
                  <h2 className="font-bold text-stone-900 mb-4">Verg\u00fctung</h2>
                  <div className="space-y-2">
                    {job.salaryYear1 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-stone-600">1. Jahr</span>
                        <span className="font-medium text-stone-900">{job.salaryYear1.toLocaleString('de-DE')}\u20AC / Monat</span>
                      </div>
                    )}
                    {job.salaryYear2 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-stone-600">2. Jahr</span>
                        <span className="font-medium text-stone-900">{job.salaryYear2.toLocaleString('de-DE')}\u20AC / Monat</span>
                      </div>
                    )}
                    {job.salaryYear3 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-stone-600">3. Jahr</span>
                        <span className="font-medium text-stone-900">{job.salaryYear3.toLocaleString('de-DE')}\u20AC / Monat</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Form / CTA */}
              <ApplicationForm jobId={job.id} jobTitle={job.title} companyName={company.name} />

              {/* Company Info */}
              <div className="bg-white rounded-2xl warm-card p-6">
                <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-amber-500" />
                  \u00dcber {company.name}
                </h3>
                {company.shortDescription && (
                  <p className="text-sm text-stone-600 mb-4">{company.shortDescription}</p>
                )}
                <div className="space-y-2.5 text-sm">
                  {company.city && (
                    <div className="flex items-center gap-2 text-stone-600">
                      <MapPin className="h-4 w-4 text-stone-400 flex-shrink-0" />
                      {company.street && `${company.street}, `}
                      {company.postalCode && `${company.postalCode} `}
                      {company.city}
                    </div>
                  )}
                  {company.industry && (
                    <div className="flex items-center gap-2 text-stone-600">
                      <Briefcase className="h-4 w-4 text-stone-400 flex-shrink-0" />
                      {company.industry}
                    </div>
                  )}
                  {company.employeeCount && (
                    <div className="flex items-center gap-2 text-stone-600">
                      <Users className="h-4 w-4 text-stone-400 flex-shrink-0" />
                      {company.employeeCount} Mitarbeiter
                    </div>
                  )}
                  {company.foundedYear && (
                    <div className="flex items-center gap-2 text-stone-600">
                      <Calendar className="h-4 w-4 text-stone-400 flex-shrink-0" />
                      Gegr\u00fcndet {company.foundedYear}
                    </div>
                  )}
                  {company.website && (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-amber-600 hover:text-amber-700"
                    >
                      <Globe className="h-4 w-4 flex-shrink-0" />
                      Website
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-white rounded-2xl warm-card p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-stone-400 mb-1">
                      <Eye className="h-4 w-4" />
                    </div>
                    <p className="text-lg font-bold text-stone-900">{(job.viewCount || 0).toLocaleString('de-DE')}</p>
                    <p className="text-xs text-stone-500">Aufrufe</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-stone-400 mb-1">
                      <Heart className="h-4 w-4" />
                    </div>
                    <p className="text-lg font-bold text-stone-900">{(job.likeCount || 0).toLocaleString('de-DE')}</p>
                    <p className="text-xs text-stone-500">Interessiert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Jobs */}
          {similarJobs.length > 0 && (
            <div className="mt-12">
              <div className="magazine-divider mb-6">
                <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">\u00c4hnliche Stellen</span>
              </div>
              <div className="space-y-3">
                {similarJobs.slice(0, 4).map((j) => (
                  <JobCard key={j.id} job={j} />
                ))}
              </div>
              {profession && (
                <div className="text-center mt-6">
                  <Link
                    href={`/stellen/beruf/${profession.slug}`}
                    className="text-sm text-amber-600 hover:text-amber-700 font-medium inline-flex items-center gap-1"
                  >
                    Alle {profession.name}-Stellen ansehen
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-12">
            <AppCTA />
          </div>
        </div>
      </div>

      <Footer />

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Google for Jobs JSON-LD */}
      {schema?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.schema) }}
        />
      )}
    </div>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────

export default async function StellenSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const city = findCity(params.slug);

  if (city) {
    const data = await fetchApi<ByCityResponse>(
      `/public/jobs/by-city/${params.slug}?portal_id=3`,
    );
    return <CityPage city={city} data={data} slug={params.slug} />;
  }

  // Job detail: extract partial ID from composite slug
  const partialId = extractIdFromSlug(params.slug);
  const [data, schema] = await Promise.all([
    fetchApi<JobDetailResponse>(`/public/jobs/${partialId}`),
    fetchApi<SchemaResponse>(`/public/jobs/${partialId}/schema`),
  ]);

  if (!data) {
    notFound();
  }

  return <JobDetailPage data={data} schema={schema} slug={params.slug} />;
}
