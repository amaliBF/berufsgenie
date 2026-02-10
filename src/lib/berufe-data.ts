import fs from 'fs';
import path from 'path';

export interface Berufsprofil {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  ausbildung: string;
  gehaltsspanne: [number, number];
  einstiegsgehalt: [number, number];
  beschreibung: string;
  aufgaben: string[];
  kompetenzen: string[];
  karrierePfade: string[];
  arbeitsmarkt: string;
  typischerArbeitstag: string;
  relatedSlugs: string[];
}

export interface BerufsKategorie {
  slug: string;
  name: string;
  description: string;
}

export const berufsKategorien: BerufsKategorie[] = [
  { slug: 'it-software', name: 'IT & Software', description: 'Berufe in Softwareentwicklung, IT-Administration und Datenanalyse.' },
  { slug: 'ingenieurwesen', name: 'Ingenieurwesen & Technik', description: 'Technische Berufe in Maschinenbau, Elektrotechnik und Produktion.' },
  { slug: 'wirtschaft-finanzen', name: 'Wirtschaft & Finanzen', description: 'Berufe in BWL, Controlling, Banking und Unternehmensberatung.' },
  { slug: 'marketing-medien', name: 'Marketing & Medien', description: 'Kreative Berufe in Werbung, PR, Journalismus und Design.' },
  { slug: 'gesundheit-medizin', name: 'Gesundheit & Medizin', description: 'Berufe in Pflege, Therapie, Medizin und Pharmazie.' },
  { slug: 'recht-verwaltung', name: 'Recht & Verwaltung', description: 'Berufe in Justiz, öffentlicher Verwaltung und Rechtsberatung.' },
  { slug: 'bildung-soziales', name: 'Bildung & Soziales', description: 'Berufe in Erziehung, Lehre und sozialer Arbeit.' },
  { slug: 'handwerk-bau', name: 'Handwerk & Bau', description: 'Handwerksberufe und Tätigkeiten in der Baubranche.' },
  { slug: 'logistik-handel', name: 'Logistik & Handel', description: 'Berufe in Spedition, Lagerwirtschaft und Einzelhandel.' },
  { slug: 'naturwissenschaften', name: 'Naturwissenschaften', description: 'Berufe in Forschung, Labor, Umwelt und Chemie.' },
];

function loadBerufe(): Berufsprofil[] {
  const dataDir = path.join(process.cwd(), 'data', 'berufe');
  if (!fs.existsSync(dataDir)) return [];

  const files = fs.readdirSync(dataDir).filter((f) => f.endsWith('.json'));
  return files
    .map((file) => {
      try {
        const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
        return JSON.parse(content) as Berufsprofil;
      } catch {
        return null;
      }
    })
    .filter((b): b is Berufsprofil => b !== null)
    .sort((a, b) => a.name.localeCompare(b.name, 'de'));
}

let _cache: Berufsprofil[] | null = null;
function getCache(): Berufsprofil[] {
  if (!_cache) _cache = loadBerufe();
  return _cache;
}

export const berufe: Berufsprofil[] = loadBerufe();

export function getBerufBySlug(slug: string): Berufsprofil | undefined {
  return getCache().find((b) => b.slug === slug);
}

export function getBerufeByCategory(categorySlug: string): Berufsprofil[] {
  return getCache().filter((b) => b.categorySlug === categorySlug);
}

export function getAllBerufeSlugs(): string[] {
  return getCache().map((b) => b.slug);
}

export function getRelatedBerufe(beruf: Berufsprofil): Berufsprofil[] {
  const cache = getCache();
  return beruf.relatedSlugs
    .map((slug) => cache.find((b) => b.slug === slug))
    .filter((b): b is Berufsprofil => b !== undefined);
}
