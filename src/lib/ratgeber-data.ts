import fs from 'fs';
import path from 'path';

export interface Ratgeber {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  content: string;
  keyPoints: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  publishDate: string;
}

export interface RatgeberKategorie {
  slug: string;
  name: string;
  description: string;
}

export const ratgeberKategorien: RatgeberKategorie[] = [
  { slug: 'bewerbung', name: 'Bewerbung', description: 'Tipps für die perfekte Bewerbung' },
  { slug: 'karriere', name: 'Karriere', description: 'Karrieretipps und Aufstiegsmöglichkeiten' },
  { slug: 'gehalt', name: 'Gehalt', description: 'Gehaltsverhandlung und Vergütung' },
  { slug: 'arbeitsrecht', name: 'Arbeitsrecht', description: 'Rechte und Pflichten im Job' },
  { slug: 'berufswechsel', name: 'Berufswechsel', description: 'Quereinsteiger und Neuorientierung' },
];

function loadRatgeber(): Ratgeber[] {
  const dataDir = path.join(process.cwd(), 'data', 'ratgeber');
  if (!fs.existsSync(dataDir)) return [];

  const files = fs.readdirSync(dataDir).filter((f) => f.endsWith('.json'));
  return files
    .map((file) => {
      try {
        const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
        return JSON.parse(content) as Ratgeber;
      } catch {
        return null;
      }
    })
    .filter((r): r is Ratgeber => r !== null)
    .sort((a, b) => a.title.localeCompare(b.title, 'de'));
}

let _cache: Ratgeber[] | null = null;
function getCache(): Ratgeber[] {
  if (!_cache) _cache = loadRatgeber();
  return _cache;
}

export const ratgeber: Ratgeber[] = loadRatgeber();

export function getRatgeberBySlug(slug: string): Ratgeber | undefined {
  return getCache().find((r) => r.slug === slug);
}

export function getRatgeberByCategory(categorySlug: string): Ratgeber[] {
  return getCache().filter((r) => r.categorySlug === categorySlug);
}

export function getAllRatgeberSlugs(): string[] {
  return getCache().map((r) => r.slug);
}

export function getRelatedRatgeber(ratgeberItem: Ratgeber): Ratgeber[] {
  const cache = getCache();
  return ratgeberItem.relatedSlugs
    .map((slug) => cache.find((r) => r.slug === slug))
    .filter((r): r is Ratgeber => r !== undefined);
}
