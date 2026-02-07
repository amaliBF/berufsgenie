export interface Branche {
  slug: string;
  name: string;
  icon: string;
  beschreibung: string;
  beispielJobs: string[];
  gehaltsspanne: string;
}

export const branchen: Branche[] = [
  {
    slug: 'it-software',
    name: 'IT & Software',
    icon: '💻',
    beschreibung: 'Die IT-Branche bietet vielfältige Karrieremöglichkeiten von Softwareentwicklung über Systemadministration bis hin zu Data Science und Cybersecurity. Mit der fortschreitenden Digitalisierung wächst der Bedarf an Fachkräften stetig.',
    beispielJobs: ['Softwareentwickler/in', 'DevOps Engineer', 'Data Scientist', 'IT-Projektmanager/in', 'Systemadministrator/in', 'UX/UI Designer/in', 'Cybersecurity Analyst'],
    gehaltsspanne: '45.000 - 90.000 EUR',
  },
  {
    slug: 'handwerk-technik',
    name: 'Handwerk & Technik',
    icon: '🔧',
    beschreibung: 'Das Handwerk ist das Rückgrat der deutschen Wirtschaft. Von Elektronik über Metallbau bis hin zu Holzverarbeitung bieten sich zahlreiche Karrierewege mit exzellenten Zukunftsaussichten und der Möglichkeit zur Selbstständigkeit.',
    beispielJobs: ['Elektriker/in', 'Mechatroniker/in', 'Tischler/in', 'KFZ-Mechatroniker/in', 'Anlagenmechaniker/in SHK', 'Industriemechaniker/in', 'Werkzeugmechaniker/in'],
    gehaltsspanne: '30.000 - 55.000 EUR',
  },
  {
    slug: 'gesundheit-pflege',
    name: 'Gesundheit & Pflege',
    icon: '🏥',
    beschreibung: 'Der Gesundheitssektor gehört zu den stabilsten Arbeitsmärkten Deutschlands. Ob in Krankenhäusern, Arztpraxen oder Pflegeeinrichtungen – Fachkräfte werden hier dringend gesucht und die Karrierechancen sind hervorragend.',
    beispielJobs: ['Pflegefachkraft', 'Medizinische/r Fachangestellte/r', 'Physiotherapeut/in', 'Gesundheits- und Krankenpfleger/in', 'Altenpfleger/in', 'Pharmazeutisch-technische/r Assistent/in'],
    gehaltsspanne: '32.000 - 55.000 EUR',
  },
  {
    slug: 'wirtschaft-finanzen',
    name: 'Wirtschaft & Finanzen',
    icon: '💼',
    beschreibung: 'Die Finanz- und Wirtschaftsbranche bietet stabile Karrieren mit guten Aufstiegsmöglichkeiten. Von Banken über Versicherungen bis hin zu Unternehmensberatungen gibt es vielfältige Einsatzmöglichkeiten.',
    beispielJobs: ['Bankkaufmann/-frau', 'Steuerfachangestellte/r', 'Wirtschaftsprüfer/in', 'Controller/in', 'Finanzberater/in', 'Versicherungskaufmann/-frau', 'Buchhalter/in'],
    gehaltsspanne: '35.000 - 75.000 EUR',
  },
  {
    slug: 'marketing-medien',
    name: 'Marketing & Medien',
    icon: '📱',
    beschreibung: 'Kreativität trifft auf Strategie: Die Marketing- und Medienbranche bietet spannende Jobs an der Schnittstelle von Kommunikation, Design und Technologie. Social Media, Content Creation und digitales Marketing sind besonders gefragt.',
    beispielJobs: ['Marketing Manager/in', 'Social Media Manager/in', 'Grafikdesigner/in', 'Content Creator', 'PR-Berater/in', 'Mediengestalter/in', 'Online Marketing Manager/in'],
    gehaltsspanne: '32.000 - 65.000 EUR',
  },
  {
    slug: 'handel-vertrieb',
    name: 'Handel & Vertrieb',
    icon: '🛒',
    beschreibung: 'Der Handel ist einer der größten Arbeitgeber in Deutschland. Vom Einzelhandel über den Großhandel bis zum E-Commerce bieten sich vielfältige Karrieremöglichkeiten mit schnellen Aufstiegschancen.',
    beispielJobs: ['Verkaufsleiter/in', 'Key Account Manager/in', 'Einzelhandelskaufmann/-frau', 'E-Commerce Manager/in', 'Außendienstmitarbeiter/in', 'Einkäufer/in', 'Filialleiter/in'],
    gehaltsspanne: '28.000 - 60.000 EUR',
  },
  {
    slug: 'gastronomie-hotel',
    name: 'Gastronomie & Hotel',
    icon: '🍳',
    beschreibung: 'Die Gastronomie- und Hotelbranche bietet abwechslungsreiche Jobs mit internationalem Flair. Ob in der Küche, im Service oder im Hotelmanagement – hier zählen Leidenschaft und Gastfreundschaft.',
    beispielJobs: ['Koch/Köchin', 'Hotelfachmann/-frau', 'Restaurantfachmann/-frau', 'Hotelmanager/in', 'Barkeeper/in', 'Veranstaltungskaufmann/-frau', 'Sommelier/Sommelière'],
    gehaltsspanne: '25.000 - 50.000 EUR',
  },
  {
    slug: 'logistik-transport',
    name: 'Logistik & Transport',
    icon: '🚚',
    beschreibung: 'Die Logistikbranche sorgt dafür, dass Waren zur richtigen Zeit am richtigen Ort sind. Mit dem Boom des E-Commerce wächst der Bedarf an Logistikfachkräften stetig. Die Branche bietet moderne Arbeitsplätze mit viel Technologie.',
    beispielJobs: ['Speditionskaufmann/-frau', 'Lagerlogistiker/in', 'Supply Chain Manager/in', 'Berufskraftfahrer/in', 'Logistikplaner/in', 'Zolldeklarant/in', 'Disponent/in'],
    gehaltsspanne: '28.000 - 55.000 EUR',
  },
  {
    slug: 'bildung-soziales',
    name: 'Bildung & Soziales',
    icon: '📚',
    beschreibung: 'Wer gerne mit Menschen arbeitet und einen Unterschied machen möchte, findet in der Bildungs- und Sozialbranche erfüllende Karrieremöglichkeiten. Die Nachfrage nach Fachkräften in Kitas, Schulen und sozialen Einrichtungen ist enorm.',
    beispielJobs: ['Erzieher/in', 'Sozialarbeiter/in', 'Sozialpädagoge/-pädagogin', 'Lehrer/in', 'Heilerziehungspfleger/in', 'Jugend- und Heimerzieher/in', 'Schulbegleiter/in'],
    gehaltsspanne: '30.000 - 55.000 EUR',
  },
  {
    slug: 'ingenieurwesen',
    name: 'Ingenieurwesen',
    icon: '⚙️',
    beschreibung: 'Deutschland ist als Ingenieursnation weltweit bekannt. Von Maschinenbau über Elektrotechnik bis hin zu erneuerbaren Energien – Ingenieure gestalten die Zukunft und gehören zu den bestbezahlten Fachkräften.',
    beispielJobs: ['Maschinenbauingenieur/in', 'Elektroingenieur/in', 'Bauingenieur/in', 'Verfahrensingenieur/in', 'Techniker/in', 'Konstrukteur/in', 'Projektingenieur/in'],
    gehaltsspanne: '45.000 - 80.000 EUR',
  },
];

export function getBrancheBySlug(slug: string): Branche | undefined {
  return branchen.find((b) => b.slug === slug);
}

export function getAllBranchenSlugs(): string[] {
  return branchen.map((b) => b.slug);
}
