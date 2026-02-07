import { Metadata } from 'next';
import Link from 'next/link';
import {
  Video,
  Heart,
  MessageCircle,
  Brain,
  Shield,
  ArrowRight,
  Check,
  X,
  Building2,
  Users,
  Zap,
  MapPin,
  Smartphone,
  Lock,
  BarChart3,
  Wallet,
  ThumbsUp,
  ChevronRight,
  Target,
  TrendingUp,
  Award,
  Quote,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Vorteile von Berufsgenie – Warum unsere Plattform?',
  description:
    'Entdecke die Vorteile von Berufsgenie für Jobsuchende und Betriebe: Kostenlos, kein Lebenslauf, echte Video-Einblicke, KI-Berufsfinder, direkter Chat und regionale Suche.',
  alternates: { canonical: '/vorteile' },
  openGraph: {
    title: 'Vorteile von Berufsgenie – Warum unsere Plattform?',
    description:
      'Kostenlos für Jobsuchende, günstiger für Betriebe, schneller zum Match. Alle Vorteile von Berufsgenie im Überblick.',
    url: 'https://berufsgenie.de/vorteile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vorteile von Berufsgenie – Warum unsere Plattform?',
    description:
      'Kostenlos, authentisch, schnell. Alle Vorteile von Berufsgenie für Jobsuchende und Betriebe.',
  },
};

const youthBenefits = [
  {
    icon: Wallet,
    title: '100% kostenlos',
    description:
      'Alle Features sind und bleiben für Jobsuchende kostenlos. Kein Abo, keine versteckten Kosten, kein Premium-Modell. Du zahlst nichts, nie.',
    accent: 'border-green-500',
  },
  {
    icon: Shield,
    title: 'Kein Lebenslauf nötig',
    description:
      'Vergiss den Stress mit Lebenslauf und Anschreiben. Erstelle in 2 Minuten ein Profil mit deinen Interessen und Stärken. Mehr braucht es nicht.',
    accent: 'border-amber-500',
  },
  {
    icon: Video,
    title: 'Echte Video-Einblicke',
    description:
      'Sieh in authentischen Kurzvideos, wie der Arbeitsalltag wirklich aussieht. Keine Stockfotos, keine Marketing-Texte. Echte Mitarbeiter, echte Einblicke.',
    accent: 'border-rose-500',
  },
  {
    icon: Brain,
    title: 'KI-Berufsfinder',
    description:
      'Weißt du nicht, welcher Beruf zu dir passt? Unsere KI stellt dir ein paar Fragen und schlägt Berufe vor, an die du vielleicht nie gedacht hättest.',
    accent: 'border-amber-600',
  },
  {
    icon: MessageCircle,
    title: 'Direkt chatten',
    description:
      'Nach einem Match schreibst du direkt mit dem Betrieb. Wie bei WhatsApp, locker und ohne Formalitäten. Kein Anschreiben, kein Warten.',
    accent: 'border-orange-500',
  },
  {
    icon: MapPin,
    title: 'Betriebe in deiner Nähe',
    description:
      'Finde Karrieresplätze in deinem Umkreis. Mit Fahrzeitanzeige, damit du weißt, wie lange du täglich unterwegs wärst.',
    accent: 'border-orange-600',
  },
  {
    icon: Lock,
    title: 'Datenschutz garantiert',
    description:
      'DSGVO-konform, deutsche Server, verschlüsselte Übertragung. Deine Daten gehören dir und werden niemals an Dritte verkauft.',
    accent: 'border-stone-500',
  },
  {
    icon: Smartphone,
    title: 'Einfach zu bedienen',
    description:
      'Die App funktioniert wie TikTok und Tinder. Wenn du ein Smartphone bedienen kannst, kannst du auch Berufsgenie nutzen. Ohne Anleitung.',
    accent: 'border-amber-500',
  },
  {
    icon: Zap,
    title: 'Schnelle Ergebnisse',
    description:
      'Vom Profil zum ersten Match oft in wenigen Stunden. Vom Match zum Vorstellungsgespräch in wenigen Tagen. Nicht Wochen oder Monate.',
    accent: 'border-orange-500',
  },
  {
    icon: Heart,
    title: 'Kein Spam',
    description:
      'Erst nach einem beidseitigen Match ist der Chat freigeschaltet. Du bekommst nur Nachrichten von Betrieben, die wirklich an dir interessiert sind.',
    accent: 'border-rose-500',
  },
];

const companyBenefits = [
  {
    icon: Users,
    title: 'Gen Z direkt erreichen',
    description:
      'Jobsuchende zwischen 14 und 20 Jahren sind unsere Zielgruppe. Erreichen Sie die Generation, die auf klassische Stellenanzeigen nicht mehr reagiert.',
  },
  {
    icon: Video,
    title: 'Authentisch präsentieren',
    description:
      'Zeigen Sie mit Kurzvideos, wie der Arbeitsalltag bei Ihnen wirklich aussieht. Echte Mitarbeiter überzeugen mehr als jede Stellenanzeige.',
  },
  {
    icon: ThumbsUp,
    title: 'Motivierte Bewerber',
    description:
      'Durch das Matching-System sehen Sie nur Kandidaten, die bereits Interesse an Ihrem Betrieb gezeigt haben. Jeder Match ist ein qualifizierter Lead.',
  },
  {
    icon: Zap,
    title: 'Schnelles Matching',
    description:
      'Vom Video-Upload bis zum ersten Match vergehen oft nur Stunden. Vom Match zum Vorstellungsgespräch nur Tage. Besetzen Sie Stellen schneller.',
  },
  {
    icon: Wallet,
    title: 'Günstiger als klassische Portale',
    description:
      'Schon ab 49 EUR pro Monat mit dem Starter-Plan. Deutlich günstiger als Stellenausschreibungen auf klassischen Jobportalen oder in Zeitungen.',
  },
  {
    icon: BarChart3,
    title: 'Detaillierte Analytics',
    description:
      'Sehen Sie genau, wie viele Jobsuchende Ihre Videos gesehen und geliked haben. Verfolgen Sie Trends und optimieren Sie Ihre Präsenz.',
  },
  {
    icon: Users,
    title: 'Team-Verwaltung',
    description:
      'Fügen Sie Kollegen hinzu und arbeiten Sie gemeinsam an der Azubi-Gewinnung. Mit Rollen und Berechtigungen für strukturierte Zusammenarbeit.',
  },
  {
    icon: Shield,
    title: 'Persönlicher Support',
    description:
      'Bei Fragen sind wir für Sie da. Persönlicher Support per Chat und E-Mail. Wir helfen Ihnen, die Plattform optimal zu nutzen.',
  },
  {
    icon: Target,
    title: 'Regionale Sichtbarkeit',
    description:
      'Ihre Videos und Stellenanzeigen werden bevorzugt Jobsuchenden in Ihrer Region angezeigt. Zielgenau und ohne Streuverluste.',
  },
  {
    icon: TrendingUp,
    title: 'Employer Branding',
    description:
      'Positionieren Sie sich als moderner Karrieresbetrieb. Authentische Videos bauen Ihre Arbeitgebermarke bei der jungen Generation auf.',
  },
];

const comparisonPoints = [
  {
    category: 'Präsentationsformat',
    berufsgenie: 'Kurzvideos von echten Mitarbeiter, TikTok-Style',
    klassisch: 'Textbasierte Stellenanzeigen mit Stockfotos',
  },
  {
    category: 'Bewerbungsprozess',
    berufsgenie: 'Profil in 2 Min, kein Lebenslauf, Matching per Swipe',
    klassisch: 'Anschreiben, Lebenslauf, Zeugnisse, Online-Formular',
  },
  {
    category: 'Kontaktaufnahme',
    berufsgenie: 'Direkter Chat nach beidseitigem Match',
    klassisch: 'E-Mail oder Portal-Nachricht, wochenlange Wartezeit',
  },
  {
    category: 'Zeitaufwand bis zum Gespräch',
    berufsgenie: 'Wenige Tage vom Match zum Termin',
    klassisch: 'Wochen bis Monate von Bewerbung bis Einladung',
  },
  {
    category: 'Zielgruppe',
    berufsgenie: 'Speziell für Gen Z (14-20), mobile-first',
    klassisch: 'Allgemein, oft Desktop-orientiert',
  },
  {
    category: 'Berufsorientierung',
    berufsgenie: 'KI-Berufsfinder mit personalisierten Vorschlägen',
    klassisch: 'Suchmaske mit Filtern, keine Beratung',
  },
];

const testimonials = [
  {
    name: 'Lena M.',
    role: 'Auszubildende zur Medizinischen Fachangestellten',
    age: 17,
    text: 'Ich hab wochenlang auf Jobportalen gesucht und nie was Passendes gefunden. Bei Berufsgenie hab ich nach 2 Tagen ein Match mit einer Praxis in meiner Nähe gehabt. Der Chat war super locker und nach einer Woche hatte ich den Vertrag.',
  },
  {
    name: 'Max K.',
    role: 'Azubi zum Fachinformatiker',
    age: 18,
    text: 'Der KI-Berufsfinder hat mir Fachinformatiker vorgeschlagen, obwohl ich vorher nur an Handwerk gedacht hab. Das Video vom Betrieb hat mich dann überzeugt. Beste Entscheidung meines Lebens.',
  },
  {
    name: 'Sarah T.',
    role: 'Auszubildende zur Elektronikerin',
    age: 16,
    text: 'Endlich mal eine App, die nicht wie ein langweiliges Jobportal aussieht. Die Videos sind so viel besser als Stellenanzeigen. Man sieht richtig, wie es bei den Betrieben ist.',
  },
  {
    name: 'Thomas H.',
    role: 'Karrieresleiter, Handwerksbetrieb',
    age: null,
    text: 'Wir haben jahrelang auf klassischen Portalen inseriert und kaum Bewerbungen bekommen. Seit wir bei Berufsgenie Videos hochladen, haben wir mehr qualifizierte Anfragen als je zuvor. Die Jobsuchenden, die uns matchen, sind wirklich motiviert.',
  },
  {
    name: 'Julia R.',
    role: 'HR-Managerin, Mittelständisches Unternehmen',
    age: null,
    text: 'Das Dashboard ist super übersichtlich und die Analytics helfen uns zu verstehen, was bei Jobsuchenden ankommt. Wir haben unsere Karrieresplätze dieses Jahr alle innerhalb von 3 Wochen besetzt.',
  },
  {
    name: 'Michael B.',
    role: 'Inhaber, KFZ-Werkstatt',
    age: null,
    text: 'Mein Azubi hat ein Video gedreht, in dem er zeigt, wie er einen Motor repariert. Das Video hat über 500 Views bekommen und wir hatten innerhalb einer Woche 8 Matches. So einfach war Azubi-Suche noch nie.',
  },
];

const stats = [
  { value: '30-90s', label: 'Videolänge', sublabel: 'Kurz, knackig, authentisch' },
  { value: '100%', label: 'Kostenlos für Jobsuchende', sublabel: 'Alle Features inklusive' },
  { value: '2 Min', label: 'Profil erstellen', sublabel: 'Schneller als jeder Lebenslauf' },
  { value: '< 48h', label: 'Durchschnittliche Match-Zeit', sublabel: 'Vom Like zum Match' },
  { value: '5-7', label: 'KI-Fragen', sublabel: 'Für personalisierte Berufsvorschläge' },
  { value: '84+', label: 'Städte', sublabel: 'Regionale Abdeckung deutschlandweit' },
];

export default function VorteilePage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://berufsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Vorteile' },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Vorteile von Berufsgenie – Warum unsere Plattform?',
    description:
      'Alle Vorteile von Berufsgenie für Jobsuchende und Betriebe im Überblick.',
    url: 'https://berufsgenie.de/vorteile',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Berufsgenie',
      url: 'https://berufsgenie.de',
    },
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-[#FFFBF5] pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 warm-dots opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li>
                <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-stone-900 font-medium">Vorteile</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="tag-pill mb-6">
              <Award className="h-3.5 w-3.5" />
              <span>Warum Berufsgenie?</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
              Die Vorteile von{' '}
              <span className="marker-highlight">Berufsgenie</span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 mb-8 max-w-2xl">
              Jobsuche muss nicht kompliziert, langweilig oder stressig sein. Wir machen
              sie schnell, visuell und direkt. Für Jobsuchende und Betriebe.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#fuer-jugendliche"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg text-white font-medium text-sm hover:from-amber-400 hover:to-orange-500 transition-all shadow-sm"
              >
                Vorteile für Jobsuchende
              </a>
              <a
                href="#fuer-betriebe"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-300 rounded-lg text-stone-700 font-medium text-sm hover:border-amber-400 hover:bg-amber-50 transition-colors"
              >
                Vorteile für Betriebe
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile für Jobsuchende */}
      <section id="fuer-jugendliche" className="py-20 bg-[#FFFBF5] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="magazine-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Für Jobsuchende</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              10 Gründe, warum Jobsuchende Berufsgenie <span className="marker-highlight">lieben</span>
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Entwickelt für die Generation Z. So sollte Jobsuche im Jahr 2026 funktionieren.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {youthBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`feature-box bg-white rounded-xl p-6 border-l-4 ${benefit.accent} hover:shadow-lg transition-all ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber-100 text-amber-600 mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">{benefit.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile für Betriebe */}
      <section id="fuer-betriebe" className="py-20 bg-stone-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="magazine-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Für Arbeitgeber</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              10 Gründe, warum Betriebe auf{' '}
              <span className="gradient-text-warm">Berufsgenie</span>{' '}
              setzen
            </h2>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto">
              Finden Sie motivierte Mitarbeiter schneller, günstiger und gezielter als je zuvor.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-amber-500/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="https://dashboard.ausbildungsgenie.de/register"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3.5 text-base font-medium text-white hover:from-amber-400 hover:to-orange-500 transition-all shadow-lg"
            >
              Jetzt kostenlos starten
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Warum nicht klassische Portale? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="magazine-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Vergleich</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Warum nicht einfach ein klassisches <span className="marker-highlight-orange">Stellenportal</span>?
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Klassische Stellenportale wurden für eine andere Generation gebaut. Sie funktionieren
              mit langen Texten, formellen Bewerbungen und endlosen Wartezeiten. Berufsgenie
              macht es anders.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {comparisonPoints.map((point) => (
              <div
                key={point.category}
                className="warm-card bg-[#FFFBF5] rounded-2xl overflow-hidden"
              >
                <div className="px-6 py-4 bg-amber-50 border-b border-amber-100">
                  <h3 className="font-semibold text-stone-900">{point.category}</h3>
                </div>
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
                  <div className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-amber-700" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-amber-700 mb-1">Berufsgenie</p>
                        <p className="text-sm text-stone-700">{point.berufsgenie}</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="h-3.5 w-3.5 text-stone-500" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-stone-500 mb-1">Klassische Portale</p>
                        <p className="text-sm text-stone-500">{point.klassisch}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-stone-600 mb-4">
              Überzeugt? Dann starte jetzt und erlebe den Unterschied.
            </p>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-amber-700 font-medium hover:text-amber-600 transition-colors"
            >
              Alle Features im Detail ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Zahlen und Fakten */}
      <section className="py-20 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="magazine-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Zahlen & Fakten</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Berufsgenie in <span className="marker-highlight">Zahlen</span>
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Die wichtigsten Fakten auf einen Blick. Schnell, kostenlos und effektiv.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="warm-card bg-white rounded-2xl p-8 text-center"
              >
                <p className="text-4xl sm:text-5xl font-bold gradient-text-warm mb-2">
                  {stat.value}
                </p>
                <p className="font-semibold text-stone-900 mb-1">{stat.label}</p>
                <p className="text-sm text-stone-500">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="magazine-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Stimmen</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Das sagen unsere <span className="marker-highlight-orange">Nutzer</span>
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Echte Stimmen von Jobsuchenden und Betrieben, die mit Berufsgenie
              zusammengefunden haben.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="editorial-quote bg-[#FFFBF5] rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <Quote className="h-8 w-8 text-amber-300 mb-4" />
                <p className="text-stone-700 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-stone-200 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-stone-900 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-stone-500">
                        {testimonial.role}
                        {testimonial.age ? `, ${testimonial.age} Jahre` : ''}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zusammenfassung der Top-Vorteile */}
      <section className="py-20 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="magazine-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Zusammenfassung</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Die Top 5 Vorteile <span className="marker-highlight">zusammengefasst</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                number: '01',
                title: 'Authentizität statt Marketing',
                text: 'Echte Kurzvideos von echten Mitarbeiter geben dir einen ehrlichen Einblick in den Berufsalltag. Keine gestellten Fotos, keine übertriebenen Beschreibungen.',
                accent: 'border-amber-500',
              },
              {
                number: '02',
                title: 'Einfachheit statt Bürokratie',
                text: 'Profil in 2 Minuten, kein Lebenslauf, kein Anschreiben, kein Warten. Jobsuche so einfach wie Social Media nutzen.',
                accent: 'border-orange-500',
              },
              {
                number: '03',
                title: 'Qualität statt Quantität',
                text: 'Beidseitiges Matching sorgt dafür, dass du nur mit Betrieben in Kontakt kommst, die wirklich an dir interessiert sind. Und umgekehrt.',
                accent: 'border-rose-500',
              },
              {
                number: '04',
                title: 'Geschwindigkeit statt Wartezeit',
                text: 'Vom Profil zum Match in Stunden, vom Match zum Gespräch in Tagen. Nicht Wochen oder Monate wie bei klassischen Bewerbungen.',
                accent: 'border-amber-600',
              },
              {
                number: '05',
                title: 'Innovation statt Tradition',
                text: 'KI-Berufsfinder, Video Feed, Echtzeit-Chat. Berufsgenie nutzt moderne Technologie, um ein altes Problem neu zu lösen.',
                accent: 'border-orange-600',
              },
            ].map((item) => (
              <div
                key={item.number}
                className={`feature-box flex gap-6 items-start p-6 rounded-xl bg-white border-l-4 ${item.accent} hover:shadow-lg transition-all`}
              >
                <span className="text-3xl font-bold gradient-text-warm flex-shrink-0">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Bereit, die Vorteile selbst zu <span className="gradient-text-warm">erleben</span>?
          </h2>
          <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
            Schließe dich Tausenden Jobsuchenden und Betrieben an, die Karriere bereits
            neu denken. Kostenlos, einfach und direkt.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://dashboard.ausbildungsgenie.de/register"
              className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3.5 text-base font-medium text-white hover:from-amber-400 hover:to-orange-500 transition-all shadow-lg flex items-center gap-2"
            >
              <Building2 className="h-4 w-4" />
              Als Arbeitgeber registrieren
            </Link>
            <Link
              href="/so-funktionierts"
              className="rounded-lg border-2 border-stone-600 px-8 py-3.5 text-base font-medium text-stone-300 hover:border-amber-500 hover:text-white transition-colors flex items-center gap-2"
            >
              So funktioniert&apos;s
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-stone-400 text-sm">
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-amber-500" />
              Kostenlos für Jobsuchende
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-amber-500" />
              DSGVO-konform
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-amber-500" />
              Deutsche Server
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-amber-500" />
              Kein Lebenslauf nötig
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
