import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://berufsgenie.de'),
  title: {
    default: 'Berufsgenie – Finde deinen Traumjob per Swipe | Jobs, Karriere & Stellenangebote',
    template: '%s | Berufsgenie',
  },
  description:
    'Berufsgenie ist die innovative Jobbörse für Festanstellungen. Echte Videos von Arbeitgebern, Swipe-Matching und Direkt-Chat. Finde deinen Traumjob.',
  keywords: [
    'Jobs',
    'Stellenangebote',
    'Jobbörse',
    'Karriere',
    'Festanstellung',
    'Traumjob',
    'Jobsuche',
    'Arbeitgeber',
    'Quereinsteiger',
    'Berufserfahrene',
    'Bewerbung',
    'Stellenmarkt',
  ],
  authors: [{ name: 'Butterflies IT UG' }],
  creator: 'Berufsgenie',
  publisher: 'Butterflies IT UG (haftungsbeschränkt)',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Berufsgenie – Finde deinen Traumjob per Swipe | Jobs, Karriere & Stellenangebote',
    description:
      'Die innovative Jobbörse, die Jobsuchende und Arbeitgeber zusammenbringt. Echte Videos, Swipe-Matching und Direkt-Chat.',
    url: 'https://berufsgenie.de',
    siteName: 'Berufsgenie',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Berufsgenie – Finde deinen Traumjob per Swipe | Jobs & Stellenangebote',
    description:
      'Die innovative Jobbörse für Festanstellungen. Echte Videos von Arbeitgebern, Swipe-Matching und Direkt-Chat.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLdOrg = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Berufsgenie',
  url: 'https://berufsgenie.de',
  logo: 'https://berufsgenie.de/icon.png',
  description:
    'Die innovative Jobbörse, die Jobsuchende und Arbeitgeber zusammenbringt. Echte Videos, Swipe-Matching und Direkt-Chat für Festanstellungen.',
  founder: {
    '@type': 'Organization',
    name: 'Butterflies IT UG (haftungsbeschränkt)',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hagenower Str. 73',
    addressLocality: 'Schwerin',
    postalCode: '19061',
    addressCountry: 'DE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'beruf@genieportal.de',
    contactType: 'customer service',
    availableLanguage: 'German',
  },
  sameAs: [
    'https://instagram.com/berufsgenie',
    'https://tiktok.com/@berufsgenie',
    'https://youtube.com/@berufsgenie',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
