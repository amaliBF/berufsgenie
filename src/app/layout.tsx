import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import CookieConsent from '@/components/CookieConsent';
import { GenieAuthProvider } from '@/lib/genie-auth';

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
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Berufsgenie – Finde deinen Traumjob per Swipe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Berufsgenie – Finde deinen Traumjob per Swipe | Jobs & Stellenangebote',
    description:
      'Die innovative Jobbörse für Festanstellungen. Echte Videos von Arbeitgebern, Swipe-Matching und Direkt-Chat.',
    images: ['/opengraph-image'],
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

const jsonLdWebApp = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Berufsgenie',
  url: 'https://berufsgenie.de',
  description:
    'Die innovative Jobbörse mit Kurzvideos, Swipe-Matching und Direkt-Chat für Festanstellungen.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    description: 'Kostenlos für Jobsuchende',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }}
        />
        {/* Smart App Banner / Web App Meta */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Berufsgenie" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* Theme Color */}
        <meta name="theme-color" content="#f59e0b" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        {/* DNS Prefetch & Preconnect */}
        <link rel="dns-prefetch" href="https://api.genieportal.de" />
        <link rel="preconnect" href="https://api.genieportal.de" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded-lg focus:shadow-lg focus:ring-2 focus:ring-amber-500">
          Zum Hauptinhalt springen
        </a>
        <GenieAuthProvider>
          {children}
        </GenieAuthProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
