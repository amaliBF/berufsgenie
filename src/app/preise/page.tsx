import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Check,
  X,
  Compass,
  Building2,
  ChevronRight,
  Star,
  Zap,
  Shield,
  Users,
  Video,
  BarChart3,
  MessageCircle,
  Crown,
  Rocket,
  HelpCircle,
  ArrowRight,
  Heart,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Preise - Kostenlos für Jobsuchende, faire Preise für Betriebe',
  description:
    'Berufsgenie ist für Jobsuchende 100% kostenlos. Betriebe starten ab 0 EUR/Monat. Transparente Preise, monatlich kündbar, keine versteckten Kosten. Jetzt vergleichen!',
  alternates: {
    canonical: '/preise',
  },
  openGraph: {
    title: 'Berufsgenie Preise - Kostenlos für Jobsuchende, faire Preise für Betriebe',
    description:
      'Für Jobsuchende immer kostenlos. Betriebe-Pakete ab 0 EUR/Monat. Transparente Preise, monatlich kündbar.',
    url: 'https://berufsgenie.de/preise',
    siteName: 'Berufsgenie',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Berufsgenie Preise - Kostenlos für Jobsuchende',
    description:
      'Für Jobsuchende immer kostenlos. Betriebe-Pakete ab 0 EUR/Monat. Jetzt vergleichen!',
  },
};

const faqItems = [
  {
    question: 'Ist Berufsgenie wirklich kostenlos für Jobsuchende?',
    answer:
      'Ja, absolut! Berufsgenie ist und bleibt für Jobsuchende und Auszubildende zu 100% kostenlos. Du kannst alle Funktionen nutzen: Videos schauen, swipen, matchen, chatten und den KI-Berufsfinder verwenden - ohne jemals einen Cent zu bezahlen.',
  },
  {
    question: 'Kann ich jederzeit kündigen?',
    answer:
      'Ja, alle Pakete sind monatlich kündbar. Es gibt keine Mindestlaufzeit und keine Kündigungsfrist. Du kannst jederzeit in deinem Dashboard kündigen und dein Abo läuft zum Ende des aktuellen Abrechnungszeitraums aus.',
  },
  {
    question: 'Gibt es Rabatt bei einem Jahresabo?',
    answer:
      'Ja! Wenn du dich für eine jährliche Zahlung entscheidest, sparst du 20% gegenüber der monatlichen Abrechnung. Du zahlst also nur für 10 Monate statt 12. Kontaktiere uns für ein individuelles Jahresangebot.',
  },
  {
    question: 'Was passiert, wenn ich downgrade?',
    answer:
      'Beim Downgrade wird dein neues Paket zum nächsten Abrechnungszeitraum aktiv. Bestehende Stellenanzeigen und Videos bleiben erhalten, aber wenn du die Limits deines neuen Pakets überschreitest, kannst du keine neuen erstellen, bis du wieder im Limit bist. Matches und Chats gehen nie verloren.',
  },
  {
    question: 'Welches Paket passt zu meinem Betrieb?',
    answer:
      'Das hängt von deiner Größe und deinen Bedürfnissen ab. Kleine Betriebe mit 1-2 offenen Stellen kommen mit dem Free- oder Starter-Paket aus. Mittelständische Unternehmen mit mehreren Positionen empfehlen wir Professional. Große Unternehmen mit vielen Standorten und Stellenangeboten profitieren vom Enterprise-Paket.',
  },
  {
    question: 'Kann ich das Professional-Paket erst testen?',
    answer:
      'Klar! Starte einfach mit dem kostenlosen Free-Paket und upgrade jederzeit. Oder kontaktiere uns für eine persönliche Demo - wir zeigen dir alle Features in einer 15-minütigen Video-Tour.',
  },
  {
    question: 'Sind die Preise inklusive Mehrwertsteuer?',
    answer:
      'Nein, alle angegebenen Preise verstehen sich als Nettopreise zzgl. der gesetzlichen Mehrwertsteuer (derzeit 19%). Auf deiner Rechnung wird die MwSt. separat ausgewiesen.',
  },
  {
    question: 'Welche Zahlungsmethoden werden akzeptiert?',
    answer:
      'Wir akzeptieren alle gängigen Zahlungsmethoden über PayPal: PayPal-Guthaben, Kreditkarte (Visa, Mastercard), SEPA-Lastschrift und weitere lokale Zahlungsmethoden. Die Zahlung wird sicher über PayPal abgewickelt.',
  },
  {
    question: 'Was ist im API-Zugang enthalten?',
    answer:
      'Der API-Zugang im Enterprise-Paket ermöglicht die Integration von Berufsgenie in eure bestehenden HR-Systeme. Ihr könnt Stellenanzeigen automatisch synchronisieren, Matching-Daten exportieren und Bewerberprozesse automatisieren. Volle REST-API-Dokumentation inklusive.',
  },
  {
    question: 'Gibt es spezielle Konditionen für Bildungsträger oder Verbände?',
    answer:
      'Ja, für Bildungsträger, Kammern und Verbände bieten wir individuelle Pakete an. Kontaktiert uns unter kontakt@berufsgenie.de und wir erstellen ein maßgeschneidertes Angebot.',
  },
];

const plans = [
  {
    name: 'Free',
    price: '0',
    period: '',
    description: 'Zum Ausprobieren',
    icon: Compass,
    color: 'text-stone-600',
    features: [
      '1 Stellenanzeige',
      'Firmenprofil erstellen',
      'Sichtbar für Mitarbeiter',
      'Basis-Matching',
      'E-Mail-Support',
    ],
    highlighted: false,
    cta: 'Kostenlos starten',
  },
  {
    name: 'Starter',
    price: '49',
    period: '/Monat',
    description: 'Für kleine Betriebe',
    icon: Rocket,
    color: 'text-amber-600',
    features: [
      '3 Stellenanzeigen',
      '3 Video-Uploads',
      'Matching + Chat',
      'Basis-Analytics',
      '1 Team-Mitglied',
      'E-Mail-Support',
    ],
    highlighted: false,
    cta: 'Jetzt starten',
  },
  {
    name: 'Professional',
    price: '149',
    period: '/Monat',
    description: 'Beliebteste Wahl',
    icon: Star,
    color: 'text-orange-600',
    features: [
      '10 Stellenanzeigen',
      'Unbegrenzt Videos',
      'Priority-Platzierung',
      'Volle Analytics',
      'Team-Zugang (5 User)',
      '20 Video-Uploads/Monat',
      'Priority-Support',
      'Logo-Platzierung',
    ],
    highlighted: true,
    cta: 'Jetzt durchstarten',
  },
  {
    name: 'Enterprise',
    price: '399',
    period: '/Monat',
    description: 'Für große Betriebe',
    icon: Crown,
    color: 'text-amber-700',
    features: [
      'Unbegrenzt Stellenanzeigen',
      'Unbegrenzt Videos',
      'Unbegrenzt Team-User',
      'API-Zugang',
      'Premium Support',
      'Individuelle Beratung',
      'Custom Branding',
      'Dedizierter Ansprechpartner',
    ],
    highlighted: false,
    cta: 'Kontakt aufnehmen',
  },
];

const comparisonFeatures = [
  {
    category: 'Stellenanzeigen & Reichweite',
    features: [
      { name: 'Stellenanzeigen', free: '1', starter: '3', professional: '10', enterprise: 'Unbegrenzt' },
      { name: 'Firmenprofil', free: true, starter: true, professional: true, enterprise: true },
      { name: 'Sichtbar für Mitarbeiter', free: true, starter: true, professional: true, enterprise: true },
      { name: 'Priority-Platzierung', free: false, starter: false, professional: true, enterprise: true },
      { name: 'Logo in Suchergebnissen', free: false, starter: false, professional: true, enterprise: true },
      { name: 'Custom Branding', free: false, starter: false, professional: false, enterprise: true },
    ],
  },
  {
    category: 'Videos',
    features: [
      { name: 'Video-Uploads gesamt', free: '0', starter: '3', professional: 'Unbegrenzt', enterprise: 'Unbegrenzt' },
      { name: 'Video-Uploads pro Monat', free: '0', starter: '3', professional: '20', enterprise: 'Unbegrenzt' },
      { name: 'Video-Analyse (Views, Likes)', free: false, starter: true, professional: true, enterprise: true },
    ],
  },
  {
    category: 'Matching & Chat',
    features: [
      { name: 'Basis-Matching', free: true, starter: true, professional: true, enterprise: true },
      { name: 'Chat mit Kandidaten', free: false, starter: true, professional: true, enterprise: true },
      { name: 'Matching-Benachrichtigungen', free: false, starter: true, professional: true, enterprise: true },
      { name: 'Kandidaten-Vorschläge', free: false, starter: false, professional: true, enterprise: true },
    ],
  },
  {
    category: 'Analytics & Insights',
    features: [
      { name: 'Basis-Analytics', free: false, starter: true, professional: true, enterprise: true },
      { name: 'Erweiterte Analytics', free: false, starter: false, professional: true, enterprise: true },
      { name: 'Export-Funktion', free: false, starter: false, professional: true, enterprise: true },
      { name: 'Individuelles Reporting', free: false, starter: false, professional: false, enterprise: true },
    ],
  },
  {
    category: 'Team & Verwaltung',
    features: [
      { name: 'Team-Mitglieder', free: '1', starter: '1', professional: '5', enterprise: 'Unbegrenzt' },
      { name: 'Rollen & Rechte', free: false, starter: false, professional: true, enterprise: true },
      { name: 'Team-Verwaltung', free: false, starter: false, professional: true, enterprise: true },
      { name: 'API-Zugang', free: false, starter: false, professional: false, enterprise: true },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'E-Mail-Support', free: true, starter: true, professional: true, enterprise: true },
      { name: 'Priority-Support', free: false, starter: false, professional: true, enterprise: true },
      { name: 'Dedizierter Ansprechpartner', free: false, starter: false, professional: false, enterprise: true },
      { name: 'Individuelle Beratung', free: false, starter: false, professional: false, enterprise: true },
    ],
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
      name: 'Preise',
      item: 'https://berufsgenie.de/preise',
    },
  ],
};

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Berufsgenie Preise',
  description:
    'Transparente Preise für Arbeitgeber. Für Jobsuchende immer 100% kostenlos.',
  url: 'https://berufsgenie.de/preise',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Berufsgenie',
    url: 'https://berufsgenie.de',
  },
};

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="h-5 w-5 text-amber-600 mx-auto" />
    ) : (
      <X className="h-5 w-5 text-stone-300 mx-auto" />
    );
  }
  return <span className="text-sm font-medium text-stone-900">{value}</span>;
}

export default function PreisePage() {
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
            <span className="text-amber-400 font-medium">Preise</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 backdrop-blur px-4 py-1.5 text-sm mb-8 border border-amber-500/20">
            <Shield className="h-4 w-4 text-amber-400" />
            <span className="text-amber-200">Transparent & fair - keine versteckten Kosten</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Transparente </span>
            <span className="gradient-text-warm">Preise</span>
          </h1>
          <p className="mt-6 text-xl text-stone-400 max-w-2xl mx-auto">
            Finde das passende Paket für deinen Betrieb. Für Jobsuchende ist Berufsgenie immer komplett kostenlos.
          </p>
        </div>
      </section>

      {/* Big Callout for Jobsuchende */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white mb-6">
            <Heart className="h-8 w-8" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
            Für Jobsuchende immer{' '}
            <span className="marker-highlight">100% kostenlos!</span>
          </h2>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
            Videos schauen, swipen, matchen, chatten, KI-Berufsfinder nutzen - alles kostenlos.
            Keine Werbung, kein Haken, kein Kleingedrucktes. Versprochen.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {['Videos schauen', 'Swipe-Matching', 'Chat mit Betrieben', 'KI-Berufsfinder', 'Profil erstellen'].map(
              (feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-amber-100"
                >
                  <Check className="h-4 w-4 text-amber-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-stone-700">{feature}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="tag-pill mb-4 mx-auto w-fit">
              <Building2 className="h-4 w-4" />
              <span>Pakete für Arbeitgeber</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
              Finde das richtige Paket für deinen Betrieb
            </h2>
            <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
              Starte kostenlos und upgrade, wenn du bereit bist. Alle Pakete sind monatlich kündbar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 relative flex flex-col ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white ring-2 ring-amber-500 ring-offset-2 ring-offset-[#FFFBF5] scale-[1.03] shadow-xl shadow-amber-200'
                    : 'bg-white warm-card rounded-2xl'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-stone-900 text-amber-400 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    Beliebteste Wahl
                  </div>
                )}

                <div className="mb-4">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                      plan.highlighted ? 'bg-white/20' : 'bg-amber-50'
                    }`}
                  >
                    <plan.icon
                      className={`h-6 w-6 ${plan.highlighted ? 'text-white' : plan.color}`}
                    />
                  </div>
                  <h3
                    className={`font-bold text-xl ${plan.highlighted ? 'text-white' : 'text-stone-900'}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${plan.highlighted ? 'text-amber-100' : 'text-stone-500'}`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span
                    className={`text-lg ${plan.highlighted ? 'text-amber-100' : 'text-stone-500'}`}
                  >
                    {plan.price === '0' ? ' EUR' : ` EUR${plan.period}`}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? 'text-amber-200' : 'text-amber-600'
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={
                    plan.name === 'Enterprise'
                      ? '/kontakt'
                      : 'https://dashboard.genieportal.de/login'
                  }
                  className={`block text-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-white text-amber-600 hover:bg-amber-50'
                      : 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-400 hover:to-orange-500'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-stone-500 mt-8">
            Alle Preise verstehen sich zzgl. MwSt. Monatlich kündbar. Keine versteckten Kosten. Zahlung via PayPal.
          </p>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50/50 to-[#FFFBF5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
              Alle Features im Vergleich
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Detaillierter Überblick über alle Funktionen in jedem Paket
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-0 border-b border-stone-200 bg-stone-50">
              <div className="p-4 lg:p-6">
                <span className="text-sm font-semibold text-stone-700">Funktion</span>
              </div>
              {['Free', 'Starter', 'Professional', 'Enterprise'].map((name) => (
                <div
                  key={name}
                  className={`p-4 lg:p-6 text-center ${
                    name === 'Professional' ? 'bg-amber-50' : ''
                  }`}
                >
                  <span
                    className={`text-sm font-bold ${
                      name === 'Professional' ? 'text-amber-700' : 'text-stone-900'
                    }`}
                  >
                    {name}
                  </span>
                  {name === 'Professional' && (
                    <span className="block text-xs text-amber-600 mt-0.5">Empfohlen</span>
                  )}
                </div>
              ))}
            </div>

            {/* Table Body */}
            {comparisonFeatures.map((category) => (
              <div key={category.category}>
                {/* Category Header */}
                <div className="grid grid-cols-5 gap-0 border-b border-stone-200 bg-stone-50/50">
                  <div className="col-span-5 p-4 lg:px-6">
                    <span className="text-sm font-bold text-stone-900">{category.category}</span>
                  </div>
                </div>

                {/* Feature Rows */}
                {category.features.map((feature, idx) => (
                  <div
                    key={feature.name}
                    className={`grid grid-cols-5 gap-0 border-b border-stone-100 ${
                      idx % 2 === 0 ? '' : 'bg-stone-50/30'
                    }`}
                  >
                    <div className="p-4 lg:px-6 flex items-center">
                      <span className="text-sm text-stone-700">{feature.name}</span>
                    </div>
                    <div className="p-4 lg:px-6 flex items-center justify-center">
                      <FeatureValue value={feature.free} />
                    </div>
                    <div className="p-4 lg:px-6 flex items-center justify-center">
                      <FeatureValue value={feature.starter} />
                    </div>
                    <div className="p-4 lg:px-6 flex items-center justify-center bg-amber-50/30">
                      <FeatureValue value={feature.professional} />
                    </div>
                    <div className="p-4 lg:px-6 flex items-center justify-center">
                      <FeatureValue value={feature.enterprise} />
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* Table Footer with CTAs */}
            <div className="grid grid-cols-5 gap-0 bg-stone-50">
              <div className="p-4 lg:p-6" />
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`p-4 lg:p-6 text-center ${
                    plan.highlighted ? 'bg-amber-50/50' : ''
                  }`}
                >
                  <Link
                    href={
                      plan.name === 'Enterprise'
                        ? '/kontakt'
                        : 'https://dashboard.genieportal.de/login'
                    }
                    className={`inline-block rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-400 hover:to-orange-500'
                        : 'bg-stone-900 text-white hover:bg-stone-800'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Berufsgenie */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
              Warum <span className="marker-highlight">Berufsgenie</span>?
            </h2>
            <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
              Die neue Generation der Jobsuchende-Suche - genau dort, wo junge Menschen ihre Zeit verbringen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                title: 'Authentische Kurzvideos',
                description:
                  'Zeigt euren Betrieb mit echten Videos statt langweiliger Texte. Mitarbeiter lieben Kurzvideos - genau wie auf TikTok.',
                color: 'bg-amber-100 text-amber-600',
              },
              {
                icon: Users,
                title: 'Generation Z erreichen',
                description:
                  'Millionen Menschen nutzen täglich Social Media. Wir bringen eure Stellenangebote genau dorthin.',
                color: 'bg-orange-100 text-orange-600',
              },
              {
                icon: Zap,
                title: 'Schnelles Matching',
                description:
                  'Kein wochenlanges Warten auf Bewerbungen. Durch Swipe-Matching findet ihr in Minuten passende Kandidaten.',
                color: 'bg-amber-100 text-amber-700',
              },
              {
                icon: MessageCircle,
                title: 'Direkter Draht',
                description:
                  'Nach dem Match chattet ihr direkt mit Kandidaten. Kein formelles Anschreiben, sondern echtes Kennenlernen.',
                color: 'bg-orange-100 text-orange-700',
              },
              {
                icon: BarChart3,
                title: 'Datenbasierte Insights',
                description:
                  'Versteht, welche Videos und Stellenanzeigen am besten ankommen. Optimiert eure Jobsuchende-Suche mit echten Daten.',
                color: 'bg-amber-50 text-amber-600',
              },
              {
                icon: Shield,
                title: 'Sicher & DSGVO-konform',
                description:
                  'Alle Daten werden in Deutschland gespeichert und verarbeitet. Vollständig DSGVO-konform und sicher.',
                color: 'bg-stone-100 text-stone-600',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 warm-card"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${item.color} mb-5`}
                >
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-2 text-stone-600">{item.description}</p>
              </div>
            ))}
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
              Fragen zu unseren Preisen
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Alles was du über unsere Pakete und Preise wissen musst
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl warm-card overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-stone-900 flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    {item.question}
                  </h3>
                  <p className="mt-3 text-stone-600 leading-relaxed pl-10">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Bereit, die besten Mitarbeiter zu finden?
          </h2>
          <p className="mt-4 text-xl text-stone-400 max-w-2xl mx-auto">
            Starte jetzt kostenlos und erreiche motivierte Jobsuchende in deiner Region. Upgrade jederzeit.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://dashboard.genieportal.de/login"
              className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3.5 text-base font-semibold text-white hover:from-amber-400 hover:to-orange-500 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20"
            >
              Jetzt kostenlos starten
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/kontakt"
              className="rounded-lg border-2 border-stone-700 px-8 py-3.5 text-base font-medium text-stone-300 hover:bg-stone-800 hover:text-white transition-colors flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Beratung anfragen
            </Link>
          </div>
          <p className="mt-6 text-sm text-stone-500">
            Keine Kreditkarte nötig. Zahlung bequem über PayPal. Monatlich kündbar.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
