import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Mail,
  MapPin,
  ChevronRight,
  Building2,
  Clock,
  ArrowRight,
  HelpCircle,
  ExternalLink,
  Compass,
  Shield,
  Globe,
  Users,
  ScrollText,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import KontaktForm from './KontaktForm';

export const metadata: Metadata = {
  title: 'Kontakt - Wir helfen dir weiter',
  description:
    'Kontaktiere das Berufsgenie-Team. Fragen, Support oder Feedback - wir sind für dich da. E-Mail: beruf@genieportal.de',
  alternates: {
    canonical: '/kontakt',
  },
  openGraph: {
    title: 'Kontakt - Berufsgenie | Wir helfen dir weiter',
    description:
      'Kontaktiere uns per E-Mail oder Kontaktformular. Wir antworten in der Regel innerhalb von 24 Stunden.',
    url: 'https://berufsgenie.de/kontakt',
    siteName: 'Berufsgenie',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt - Berufsgenie',
    description:
      'Kontaktiere das Berufsgenie-Team. Wir sind für dich da!',
  },
};

const faqItems = [
  {
    question: 'Wie schnell antwortet ihr auf Anfragen?',
    answer:
      'Wir antworten in der Regel innerhalb von 24 Stunden auf alle Anfragen. Bei dringenden Support-Anfragen bemühen wir uns, noch schneller zu reagieren. Premium-Support-Kunden erhalten Antworten innerhalb von 4 Stunden während der Geschäftszeiten.',
  },
  {
    question: 'Ich bin Jobsuchender und habe ein technisches Problem. An wen wende ich mich?',
    answer:
      'Schreibe uns einfach eine E-Mail an beruf@genieportal.de oder nutze das Kontaktformular mit dem Betreff "Support". Beschreibe dein Problem möglichst genau und wir helfen dir schnellstmöglich weiter. Berufsgenie ist für dich komplett kostenlos - auch der Support!',
  },
  {
    question: 'Wie kann ich mein Unternehmen auf Berufsgenie registrieren?',
    answer:
      'Ganz einfach: Besuche dashboard.genieportal.de und klicke auf "Registrieren". In nur 2 Schritten legst du dein Firmenprofil und Benutzerkonto an. Danach kannst du sofort Stellenanzeigen erstellen und Videos hochladen. Der Start ist kostenlos!',
  },
  {
    question: 'Bietet ihr Schulungen oder Demos für Betriebe an?',
    answer:
      'Ja! Wir bieten kostenlose 15-minütige Video-Demos an, in denen wir euch alle Funktionen zeigen. Kontaktiert uns einfach über das Formular mit dem Betreff "Für Betriebe" und wir vereinbaren einen Termin.',
  },
  {
    question: 'Kann ich Berufsgenie für eine Presseanfrage kontaktieren?',
    answer:
      'Natürlich! Für Presseanfragen nutze bitte das Kontaktformular mit dem Betreff "Presse" oder schreibe direkt an beruf@genieportal.de. Wir stellen gerne Pressematerial, Interviews und Hintergrundinformationen zur Verfügung.',
  },
  {
    question: 'Wo finde ich die rechtlichen Informationen (Impressum, Datenschutz)?',
    answer:
      'Unser Impressum findest du unter berufsgenie.de/impressum, die Datenschutzerklärung unter berufsgenie.de/datenschutz und die AGB unter berufsgenie.de/agb. Links zu allen rechtlichen Seiten findest du auch im Footer jeder Seite.',
  },
];

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Startseite',
      item: 'https://berufsgenie.de',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Kontakt',
      item: 'https://berufsgenie.de/kontakt',
    },
  ],
};

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Kontakt - Berufsgenie',
  description: 'Kontaktiere das Berufsgenie-Team für Fragen, Support oder Feedback.',
  url: 'https://berufsgenie.de/kontakt',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Berufsgenie',
    url: 'https://berufsgenie.de',
  },
  mainEntity: {
    '@type': 'Organization',
    name: 'Butterflies IT UG (haftungsbeschränkt)',
    url: 'https://berufsgenie.de',
    email: 'beruf@genieportal.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hagenower Str. 73',
      addressLocality: 'Schwerin',
      postalCode: '19061',
      addressCountry: 'DE',
    },
    sameAs: [
      'https://instagram.com/berufsgenie',
      'https://tiktok.com/@berufsgenie',
      'https://youtube.com/@berufsgenie',
    ],
  },
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-stone-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Startseite
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-amber-400 font-medium">Kontakt</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 backdrop-blur px-4 py-1.5 text-sm mb-8 border border-amber-500/20">
            <Mail className="h-4 w-4 text-amber-400" />
            <span className="text-amber-200">Wir sind für dich da</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Kontaktiere </span>
            <span className="gradient-text-warm">uns</span>
          </h1>
          <p className="mt-6 text-xl text-stone-400 max-w-2xl mx-auto">
            Hast du Fragen, Feedback oder brauchst Hilfe? Unser Team antwortet in der Regel innerhalb von 24 Stunden.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 -mt-24 relative z-10">
            {/* Zum Formular */}
            <a
              href="#kontaktformular"
              className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100 text-center hover:shadow-xl transition-shadow block warm-card"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-amber-100 text-amber-600 mb-5">
                <ScrollText className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Kontaktformular</h3>
              <p className="text-stone-600">
                Schreibe uns direkt über unser Formular. Wir melden uns schnellstmöglich zurück.
              </p>
              <span className="inline-flex items-center gap-1 text-amber-600 font-medium mt-3 text-sm">
                Zum Formular
                <ChevronRight className="h-4 w-4" />
              </span>
            </a>

            {/* Email */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100 text-center hover:shadow-xl transition-shadow warm-card">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-orange-100 text-orange-600 mb-5">
                <Mail className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">E-Mail</h3>
              <a
                href="mailto:beruf@genieportal.de"
                className="text-amber-600 hover:text-amber-700 font-medium transition-colors block"
              >
                beruf@genieportal.de
              </a>
              <p className="text-sm text-stone-500 mt-2">Für alle Anfragen</p>
            </div>

            {/* Antwortzeit */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100 text-center hover:shadow-xl transition-shadow warm-card">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-amber-100 text-amber-600 mb-5">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Antwortzeiten</h3>
              <p className="text-stone-600">
                <span className="font-medium text-stone-900">E-Mail:</span>
                <br />
                Innerhalb von 24 Stunden
              </p>
              <p className="text-stone-600 mt-3">
                <span className="font-medium text-stone-900">Premium Support:</span>
                <br />
                Innerhalb von 4 Stunden
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section id="kontaktformular" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <KontaktForm />
            </div>

            {/* Side Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Für wen */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
                <h3 className="text-lg font-bold text-stone-900 mb-4">Wie können wir helfen?</h3>
                <ul className="space-y-4">
                  {[
                    {
                      icon: Users,
                      title: 'Für Jobsuchende & Jobsuchende',
                      description: 'Fragen zur App, Profil-Hilfe, technischer Support',
                    },
                    {
                      icon: Building2,
                      title: 'Für Betriebe',
                      description: 'Registrierung, Pakete, Demos, Firmenprofil',
                    },
                    {
                      icon: Globe,
                      title: 'Presse & Kooperationen',
                      description: 'Pressematerial, Interviews, Partnerschaften',
                    },
                    {
                      icon: Shield,
                      title: 'Datenschutz & Rechtliches',
                      description: 'DSGVO-Anfragen, Datenlösch-Anfragen',
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white text-amber-600 flex-shrink-0 mt-0.5 shadow-sm">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-stone-900 text-sm">{item.title}</p>
                        <p className="text-sm text-stone-600">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl p-8 border border-stone-100 warm-card">
                <h3 className="text-lg font-bold text-stone-900 mb-4">Schnell-Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="https://dashboard.genieportal.de/login"
                      className="flex items-center gap-3 text-sm text-stone-700 hover:text-amber-600 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                        <Building2 className="h-4 w-4 text-amber-600" />
                      </div>
                      <span>Betriebe-Dashboard</span>
                      <ExternalLink className="h-3.5 w-3.5 ml-auto text-stone-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/preise"
                      className="flex items-center gap-3 text-sm text-stone-700 hover:text-amber-600 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                        <Compass className="h-4 w-4 text-amber-600" />
                      </div>
                      <span>Preise & Pakete</span>
                      <ChevronRight className="h-3.5 w-3.5 ml-auto text-stone-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/impressum"
                      className="flex items-center gap-3 text-sm text-stone-700 hover:text-amber-600 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                        <Shield className="h-4 w-4 text-amber-600" />
                      </div>
                      <span>Impressum</span>
                      <ChevronRight className="h-3.5 w-3.5 ml-auto text-stone-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/datenschutz"
                      className="flex items-center gap-3 text-sm text-stone-700 hover:text-amber-600 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                        <Shield className="h-4 w-4 text-amber-600" />
                      </div>
                      <span>Datenschutzerklärung</span>
                      <ChevronRight className="h-3.5 w-3.5 ml-auto text-stone-400" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50/50 to-[#FFFBF5]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="tag-pill mb-4 mx-auto w-fit">
              <HelpCircle className="h-4 w-4" />
              <span>Häufig gestellte Fragen</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
              Häufige Fragen
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Vielleicht findest du hier schon die Antwort auf deine Frage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl warm-card p-6"
              >
                <h3 className="text-base font-semibold text-stone-900 mb-3 flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{item.question}</span>
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed pl-9">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
                Über{' '}
                <span className="marker-highlight">Berufsgenie</span>
              </h2>
              <p className="text-lg text-stone-600 mb-6">
                Berufsgenie ist eine Marke der Butterflies IT UG (haftungsbeschränkt) mit Sitz in Schwerin.
                Unsere Mission: Die Jobsuche für junge Menschen so einfach und spaßig wie möglich machen - und gleichzeitig Betrieben helfen, die besten Jobsuchende zu finden.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-stone-900">Butterflies IT UG (haftungsbeschränkt)</p>
                    <p className="text-stone-600 text-sm">Handelsregister: Amtsgericht Schwerin, HRB 12765</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-stone-700">Hagenower Str. 73, 19061 Schwerin, Deutschland</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <a
                      href="mailto:beruf@genieportal.de"
                      className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
                    >
                      beruf@genieportal.de
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-stone-700">USt-IdNr.: DE301178757</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <Link
                  href="/impressum"
                  className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors flex items-center gap-1"
                >
                  Impressum
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <span className="text-stone-300">|</span>
                <Link
                  href="/datenschutz"
                  className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors flex items-center gap-1"
                >
                  Datenschutz
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <span className="text-stone-300">|</span>
                <Link
                  href="/agb"
                  className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors flex items-center gap-1"
                >
                  AGB
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-stone-900 rounded-2xl p-8 sm:p-12 text-white">
              <h3 className="text-2xl font-bold mb-3">Folge uns</h3>
              <p className="text-stone-400 mb-8">
                Bleib auf dem Laufenden und entdecke spannende Inhalte rund um Karriere, Karriere und Berufsorientierung.
              </p>

              <div className="space-y-4">
                {/* Instagram */}
                <a
                  href="https://instagram.com/berufsgenie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold group-hover:text-amber-400 transition-colors">Instagram</p>
                    <p className="text-sm text-stone-400">@berufsgenie</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-stone-500 group-hover:text-white transition-colors" />
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@berufsgenie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center flex-shrink-0 border border-white/20">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.44V13a8.27 8.27 0 005.58 2.17V11.7a4.83 4.83 0 01-3.77-1.24V6.69h3.77z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold group-hover:text-amber-400 transition-colors">TikTok</p>
                    <p className="text-sm text-stone-400">@berufsgenie</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-stone-500 group-hover:text-white transition-colors" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@berufsgenie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold group-hover:text-amber-400 transition-colors">YouTube</p>
                    <p className="text-sm text-stone-400">@berufsgenie</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-stone-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Bereit loszulegen?
          </h2>
          <p className="mt-4 text-xl text-stone-400 max-w-2xl mx-auto">
            Registriere deinen Betrieb jetzt kostenlos und erreiche motivierte Jobsuchende in deiner Region.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://dashboard.genieportal.de/register"
              className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3.5 text-base font-semibold text-white hover:from-amber-400 hover:to-orange-500 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Building2 className="h-4 w-4" />
              Als Arbeitgeber registrieren
            </Link>
            <Link
              href="/preise"
              className="rounded-lg border-2 border-stone-700 px-8 py-3.5 text-base font-medium text-stone-300 hover:bg-stone-800 hover:text-white transition-colors flex items-center gap-2"
            >
              Preise ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
