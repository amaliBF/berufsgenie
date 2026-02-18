import Link from 'next/link';
import { ArrowRight, Briefcase } from 'lucide-react';
import { fetchApi, SearchResponse } from '@/lib/api';
import JobCard from './JobCard';

interface Props {
  query?: string;
  stadt?: string;
  titel: string;
  linkHref: string;
  linkText: string;
}

export default async function PassendeStellen({ query, stadt, titel, linkHref, linkText }: Props) {
  const params = new URLSearchParams({ portal_id: '3', limit: '6' });
  if (query) params.set('q', query);
  if (stadt) params.set('stadt', stadt);

  const data = await fetchApi<SearchResponse>(`/public/jobs/search?${params.toString()}`);

  if (!data || data.items.length === 0) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="magazine-divider mb-8">
          <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest whitespace-nowrap">Stellenanzeigen</span>
        </div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">{titel}</h2>
            <p className="text-sm text-stone-500 mt-1">{data.total} Stellen gefunden</p>
          </div>
          <Link
            href={linkHref}
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
          >
            {linkText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.items.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            href={linkHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
          >
            {linkText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
