import { MetadataRoute } from 'next';
import { branchen } from '@/lib/branchen-data';
import { staedte } from '@/lib/staedte-data';
import { ratgeber } from '@/lib/ratgeber-data';
import { berufe } from '@/lib/berufe-data';

// Top 30 Berufe für Kombiseiten (muss mit jobs/[slug]/page.tsx übereinstimmen)
const topBerufeSlugs = [
  'softwareentwickler', 'fachinformatiker', 'data-scientist', 'webentwickler', 'it-projektmanager',
  'maschinenbauingenieur', 'elektroingenieur', 'mechatroniker', 'wirtschaftsingenieur',
  'marketing-manager', 'controller', 'personalreferent', 'unternehmensberater',
  'projektmanager', 'vertriebsmanager', 'einkaufsmanager', 'logistikmanager',
  'bankkaufmann', 'steuerfachangestellter', 'wirtschaftspruefer',
  'krankenpfleger', 'physiotherapeut', 'erzieher', 'sozialarbeiter',
  'rechtsanwaltsfachangestellter', 'verwaltungsfachangestellter',
  'elektriker', 'kfz-mechatroniker', 'tischler', 'architektur',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://berufsgenie.de';
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/jobs`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/branchen`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/berufe`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ratgeber`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/stellen`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/firmen`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/features`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/so-funktionierts`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/fuer-betriebe`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/fuer-jobsuchende`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/fuer-arbeitgeber`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/preise`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/vorteile`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/berufsfinder`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/gehalt`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/app`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/impressum`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/agb`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
  ];

  // Berufsprofile (100 Berufe)
  const berufePages: MetadataRoute.Sitemap = berufe.map((b) => ({
    url: `${baseUrl}/berufe/${b.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Jobs/Städte pages (84 Städte)
  const staedtePages: MetadataRoute.Sitemap = staedte.map((s) => ({
    url: `${baseUrl}/jobs/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Kombiseiten: Top 30 Berufe × 84 Städte = 2.520 Seiten
  const kombiPages: MetadataRoute.Sitemap = [];
  for (const berufSlug of topBerufeSlugs) {
    for (const stadt of staedte) {
      kombiPages.push({
        url: `${baseUrl}/jobs/${berufSlug}-in-${stadt.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    }
  }

  // Branchen pages (11 Branchen)
  const branchenPages: MetadataRoute.Sitemap = branchen.map((b) => ({
    url: `${baseUrl}/branchen/${b.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Ratgeber pages
  const ratgeberPages: MetadataRoute.Sitemap = ratgeber.map((r) => ({
    url: `${baseUrl}/ratgeber/${r.slug}`,
    lastModified: r.publishDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...berufePages,
    ...staedtePages,
    ...kombiPages,
    ...branchenPages,
    ...ratgeberPages,
  ];
}
