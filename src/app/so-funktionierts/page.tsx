import { Metadata } from 'next';
import Link from 'next/link';
import {
  Video,
  Heart,
  MessageCircle,
  User,
  Building2,
  Upload,
  Users,
  Check,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Compass,
  Zap,
  Star,
  Shield,
  Clock,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'So funktioniert Berufsgenie – Schritt für Schritt erklärt',
  description:
    'Erfahre Schritt für Schritt, wie Berufsgenie funktioniert: Profil erstellen, Videos entdecken, Swipen, Matchen und direkt chatten. Für Jobsuchende und Betriebe.',
  alternates: { canonical: '/so-funktionierts' },
  openGraph: {
    title: 'So funktioniert Berufsgenie – Schritt für Schritt erklärt',
    description:
      'In 5 einfachen Schritten zur Job: Profil erstellen, Videos schauen, Swipen, Matchen, Chatten. So einfach war es noch nie.',
    url: 'https://berufsgenie.de/so-funktionierts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'So funktioniert Berufsgenie – Schritt für Schritt',
    description:
      'Profil erstellen, Videos entdecken, Swipen, Matchen, Chatten. Jobssuche so einfach wie noch nie.',
  },
};

const youthSteps = [
  {
    number: '1',
    icon: User,
    title: 'Profil erstellen',
    accent: 'border-amber-500',
    iconBg: 'bg-amber-100 text-amber-600',
    description:
      'Der Einstieg bei Berufsgenie dauert nur 2 Minuten. Du erstellst ein Profil, das sich komplett von einem klassischen Lebenslauf unterscheidet. Statt Noten und Zeugnisse gibst du deine Interessen, Stärken und deinen Standort an.',
    description2:
      'Wähle aus vordefinierten Kategorien, was dich begeistert: Technik, Gesundheit, Kreativität, Computer, Natur oder Kommunikation. Gib an, welche Stärken du hast: Teamarbeit, Selbstständigkeit, Kreativität oder analytisches Denken. Das war es schon.',
    bullets: [
      'E-Mail und Passwort reichen zum Start',
      'Interessen aus Kategorien wählen',
      'Stärken und Vorlieben angeben',
      'Standort für regionale Empfehlungen',
      'Kein Lebenslauf, keine Noten, keine Dokumente',
    ],
  },
  {
    number: '2',
    icon: Video,
    title: 'Videos entdecken',
    accent: 'border-orange-500',
    iconBg: 'bg-orange-100 text-orange-600',
    description:
      'Dein Feed ist wie TikTok, aber für Job. Du scrollst durch kurze Videos von 30 bis 90 Sekunden, in denen echte Mitarbeiter ihren Arbeitsalltag zeigen. Jedes Video gibt dir einen authentischen Einblick in einen Beruf und Betrieb.',
    description2:
      'Der Feed lernt mit der Zeit, was dir gefällt. Je mehr du swipest und likest, desto besser werden die Empfehlungen. Du siehst zuerst Videos aus deiner Region und zu Berufen, die zu deinen Interessen passen.',
    bullets: [
      'Fullscreen-Videos im TikTok-Style',
      'Echte Mitarbeiter zeigen ihren Alltag',
      'Personalisierter Feed basierend auf deinen Interessen',
      'Regionale Videos bevorzugt',
      'Neue Inhalte täglich',
    ],
  },
  {
    number: '3',
    icon: Heart,
    title: 'Swipen und Liken',
    accent: 'border-rose-500',
    iconBg: 'bg-rose-100 text-rose-600',
    description:
      'Wenn dir ein Video oder Betriebsprofil gefällt, swipest du nach rechts oder tippst auf das Herz-Symbol. Das signalisiert dem Betrieb, dass du Interesse hast. Wenn dir etwas nicht zusagt, swipest du einfach nach links.',
    description2:
      'Es gibt keinen Druck und keine Verpflichtung. Du kannst so viele Betriebe liken, wie du möchtest. Jeder Like ist anonym, bis ein beidseitiges Match entsteht. Betriebe sehen erst dann dein Profil, wenn auch sie dich geliked haben.',
    bullets: [
      'Swipe rechts oder Herz-Button zum Liken',
      'Swipe links oder X-Button zum Weiterscrollen',
      'Likes sind kostenlos und unbegrenzt',
      'Anonym bis zum beidseitigen Match',
      'Kein Druck, keine Verpflichtung',
    ],
  },
  {
    number: '4',
    icon: Compass,
    title: 'Match!',
    accent: 'border-amber-600',
    iconBg: 'bg-amber-100 text-amber-700',
    description:
      'Wenn du einen Betrieb likest und der Betrieb dich ebenfalls liked, entsteht ein Match. Du bekommst sofort eine Benachrichtigung auf dein Handy. Das Match zeigt: Beide Seiten haben Interesse. Das ist der erste Schritt zu deiner Job.',
    description2:
      'Ein Match öffnet den direkten Kommunikationskanal. Ab jetzt könnt ihr miteinander schreiben, ohne Umwege und ohne Formalitäten. Die meisten Matches führen innerhalb weniger Tage zu einem ersten Gespräch oder Probearbeiten.',
    bullets: [
      'Beidseitiges Like = Match',
      'Sofortige Push-Benachrichtigung',
      'Direkter Chat-Kanal wird freigeschaltet',
      'Match-Übersicht im Profil',
      'Von Match zu Gespräch in wenigen Tagen',
    ],
  },
  {
    number: '5',
    icon: MessageCircle,
    title: 'Chatten und Bewerben',
    accent: 'border-orange-600',
    iconBg: 'bg-orange-100 text-orange-700',
    description:
      'Nach dem Match startest du den Chat mit dem Betrieb. Schreibe locker und direkt, wie du es von WhatsApp kennst. Stelle Fragen zum Beruf, zu den Arbeitszeiten, zum Team oder zum Gehalt. Es gibt kein festgelegtes Format.',
    description2:
      'Viele Betriebe laden dich nach dem ersten Chat direkt zum Probearbeiten oder Vorstellungsgespräch ein. Der gesamte Prozess von Entdecken bis zum ersten Termin dauert oft nur wenige Tage statt Wochen oder Monate wie bei klassischen Portalen.',
    bullets: [
      'Echtzeit-Chat nach dem Match',
      'Kein formelles Anschreiben nötig',
      'Fragen zum Beruf und Betrieb stellen',
      'Termine direkt im Chat vereinbaren',
      'Push-Benachrichtigungen für neue Nachrichten',
    ],
  },
];

const companySteps = [
  {
    number: '1',
    icon: Building2,
    title: 'Registrieren und Profil anlegen',
    description:
      'Erstellen Sie in wenigen Minuten ein ansprechendes Firmenprofil. Beschreiben Sie Ihren Betrieb, Ihre Jobsberufe und was Ihr Unternehmen besonders macht. Fügen Sie Ihr Logo hinzu und laden Sie Stellenanzeigen hoch.',
    description2:
      'Unser Dashboard führt Sie Schritt für Schritt durch den Prozess. In der Registrierung geben Sie zuerst Ihre Firmendaten ein und erstellen dann einen Benutzer-Account. Danach können Sie sofort loslegen.',
    bullets: [
      '2-Schritt-Registrierung (Firma + Benutzer)',
      'Firmenprofil mit Logo und Beschreibung',
      'Stellenanzeigen mit Beruf, Anforderungen und Start-Datum',
      'Kostenloser Free-Plan zum Testen',
    ],
  },
  {
    number: '2',
    icon: Upload,
    title: 'Kurzvideos hochladen',
    description:
      'Drehen Sie kurze Videos mit Ihren echten Mitarbeiter. Zeigen Sie den Arbeitsalltag, das Team, die Werkstatt oder das Büro. Authentizität schlägt Hochglanz: Jobsuchende wollen sehen, wie es wirklich bei Ihnen ist.',
    description2:
      'Laden Sie die Videos einfach über das Dashboard hoch. Unsere Plattform konvertiert sie automatisch ins optimale Format, erstellt Thumbnails und macht sie im Feed sichtbar. Sie brauchen keine Video-Profis.',
    bullets: [
      '30-90 Sekunden im Hochformat (9:16)',
      'Automatische Konvertierung und Komprimierung',
      'Thumbnail wird automatisch erstellt',
      'Mit Smartphone gedreht reicht völlig',
    ],
  },
  {
    number: '3',
    icon: Users,
    title: 'Kandidaten matchen',
    description:
      'Swipen Sie durch Profile interessierter Jobsuchender. Sehen Sie deren Interessen, Stärken und Standort. Wenn ein Profil zu Ihrer Stelle passt, liken Sie es. Wenn beide Seiten Interesse zeigen, entsteht ein Match.',
    description2:
      'Das Matching-System spart Ihnen enorm viel Zeit. Statt hunderte Bewerbungen zu sichten, sehen Sie nur Profile von Jobsuchenden, die bereits Interesse an Ihrem Betrieb gezeigt haben. Jedes Match ist ein qualifizierter Lead.',
    bullets: [
      'Nur vorqualifizierte Kandidaten sehen',
      'Interessen und Stärken auf einen Blick',
      'Standort und Entfernung sichtbar',
      'Schnelle Entscheidung per Swipe',
    ],
  },
  {
    number: '4',
    icon: MessageCircle,
    title: 'Chatten und Einstellen',
    description:
      'Nach dem Match schreiben Sie direkt mit dem Kandidaten. Stellen Sie Fragen, laden Sie zum Probearbeiten ein oder vereinbaren Sie ein Vorstellungsgespräch. Der Chat ist informell und direkt, genau so, wie Gen Z es bevorzugt.',
    description2:
      'Im Dashboard sehen Sie alle Ihre Chats übersichtlich. Antworten Sie schnell und unkompliziert. Die besten Betriebe antworten innerhalb weniger Stunden und haben deutlich höhere Einstellungsquoten.',
    bullets: [
      'Direkter Chat im Dashboard',
      'Push-Benachrichtigungen bei neuen Nachrichten',
      'Einladung zu Probearbeiten oder Gespräch',
      'Schnelle Reaktionszeit erhöht die Erfolgsquote',
    ],
  },
];

const faqs = [
  {
    question: 'Ist Berufsgenie wirklich kostenlos für Jobsuchende?',
    answer:
      'Ja, Berufsgenie ist und bleibt 100% kostenlos für Jobsuchende. Alle Features sind verfügbar: Video Feed, Matching, Chat, KI-Berufsfinder. Es gibt keine versteckten Kosten und keine Premium-Features, die extra kosten.',
  },
  {
    question: 'Brauche ich einen Lebenslauf oder Bewerbungsunterlagen?',
    answer:
      'Nein, bei Berufsgenie brauchst du keinen Lebenslauf, kein Anschreiben und keine Zeugnisse. Du erstellst ein einfaches Profil mit deinen Interessen und Stärken. Der Rest läuft über Videos, Matching und Chat.',
  },
  {
    question: 'Wie funktioniert der KI-Berufsfinder?',
    answer:
      'Der KI-Berufsfinder stellt dir 5-7 Fragen zu deinen Interessen, Stärken und Vorlieben. Basierend auf deinen Antworten analysiert die künstliche Intelligenz, welche Jobsberufe am besten zu dir passen, und erklärt dir warum.',
  },
  {
    question: 'Was passiert nach einem Match?',
    answer:
      'Nach einem beidseitigen Match (du likest den Betrieb und der Betrieb liked dich) öffnet sich ein direkter Chat. Du kannst sofort mit dem Betrieb schreiben, Fragen stellen und einen Termin für ein Probearbeiten oder Gespräch vereinbaren.',
  },
  {
    question: 'Können Betriebe mich ohne Match kontaktieren?',
    answer:
      'Nein, erst nach einem beidseitigen Match ist der Chat freigeschaltet. Das schützt dich vor unerwünschten Nachrichten. Betriebe können dein Profil erst sehen, wenn beide Seiten Interesse gezeigt haben.',
  },
  {
    question: 'Was kostet Berufsgenie für Betriebe?',
    answer:
      'Betriebe können mit dem kostenlosen Free-Plan starten (1 Stellenanzeige, Firmenprofil). Für mehr Stellenanzeigen, Videos, Analytics und Team-Zugang gibt es die Pläne Starter (49 EUR/Monat), Professional (149 EUR/Monat) und Enterprise (399 EUR/Monat).',
  },
  {
    question: 'Wie drehe ich als Betrieb gute Videos?',
    answer:
      'Am besten filmen Sie mit dem Smartphone im Hochformat (9:16). Lassen Sie echte Mitarbeiter ihren Arbeitsalltag zeigen: Was machen sie täglich? Wie ist das Team? Warum gefällt ihnen die Job? Authentizität ist wichtiger als perfekte Qualität.',
  },
  {
    question: 'Sind meine Daten sicher?',
    answer:
      'Ja, Berufsgenie ist DSGVO-konform. Deine Daten werden auf deutschen Servern gespeichert, verschlüsselt übertragen und niemals an Dritte verkauft. Du kannst dein Profil und alle Daten jederzeit löschen.',
  },
];

export default function SoFunktioniertsPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://berufsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'So funktioniert\u0027s' },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'So funktioniert Berufsgenie – Schritt für Schritt erklärt',
    description:
      'Erfahre Schritt für Schritt, wie Berufsgenie funktioniert. Für Jobsuchende und Betriebe.',
    url: 'https://berufsgenie.de/so-funktionierts',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              <li className="text-stone-900 font-medium">So funktioniert&apos;s</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="tag-pill mb-6">
              <Zap className="h-3.5 w-3.5" />
              <span>Schritt für Schritt erklärt</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
              So funktioniert <span className="marker-highlight">Berufsgenie</span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 mb-10 max-w-2xl">
              Von der Registrierung bis zum Match in wenigen Minuten. Wir zeigen dir
              Schritt für Schritt, wie du deine Traumausbildung findest oder als Betrieb
              die besten Mitarbeiter gewinnst.
            </p>

            {/* Quick jump */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#fuer-jugendliche"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg text-white font-medium text-sm hover:from-amber-400 hover:to-orange-500 transition-all shadow-sm"
              >
                <User className="h-4 w-4" />
                Für Jobsuchende
                <ChevronDown className="h-3 w-3" />
              </a>
              <a
                href="#fuer-betriebe"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-300 rounded-lg text-stone-700 font-medium text-sm hover:border-amber-400 hover:bg-amber-50 transition-colors"
              >
                <Building2 className="h-4 w-4" />
                Für Betriebe
                <ChevronDown className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-12 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: '2 Min', label: 'Profil erstellen', icon: Clock },
              { value: '30-90s', label: 'Video-Länge', icon: Video },
              { value: '100%', label: 'Kostenlos für Jobsuchende', icon: Shield },
              { value: '5 Schritte', label: 'Bis zum ersten Match', icon: Star },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <p className="text-2xl sm:text-3xl font-bold text-stone-900">{stat.value}</p>
                <p className="text-sm text-stone-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Für Jobsuchende */}
      <section id="fuer-jugendliche" className="py-20 bg-[#FFFBF5] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="magazine-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Für Jobsuchende</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              In 5 Schritten zur <span className="marker-highlight">Traumkarriere</span>
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              So findest du mit Berufsgenie deinen Traumausbildungsplatz. Schneller und
              einfacher als du denkst.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-12">
            {youthSteps.map((step, index) => (
              <div key={step.number} className="relative">
                <div
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
                >
                  {/* Text Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white text-xl font-bold flex items-center justify-center flex-shrink-0 shadow-md">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-stone-600 text-lg leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <p className="text-stone-600 leading-relaxed mb-6">{step.description2}</p>
                    <ul className="space-y-2.5">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="text-stone-700">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className={`feature-box bg-white rounded-2xl p-8 sm:p-10 border-l-4 ${step.accent} shadow-sm`}>
                      <div className="text-center">
                        <div className={`w-16 h-16 rounded-2xl ${step.iconBg} flex items-center justify-center mx-auto mb-4`}>
                          <step.icon className="h-8 w-8" />
                        </div>
                        <p className="font-bold text-xl text-stone-900 mb-2">Schritt {step.number}</p>
                        <p className="text-stone-500 text-sm">{step.title}</p>
                      </div>

                      {/* Progress indicator */}
                      <div className="flex justify-center mt-6 gap-2">
                        {youthSteps.map((_, i) => (
                          <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all ${
                              i <= index
                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 w-8'
                                : 'bg-stone-200 w-4'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                {index < youthSteps.length - 1 && (
                  <div className="hidden lg:flex justify-center py-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-amber-300 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trennlinie */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="magazine-divider">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Arbeitgeber</span>
        </div>
      </div>

      {/* Für Betriebe */}
      <section id="fuer-betriebe" className="py-20 bg-stone-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="magazine-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Für Arbeitgeber</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              In 4 Schritten zum{' '}
              <span className="gradient-text-warm">perfekten Mitarbeiter</span>
            </h2>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto">
              So nutzen Betriebe Berufsgenie, um motivierte Auszubildende zu finden und
              einzustellen.
            </p>
          </div>

          <div className="space-y-8">
            {companySteps.map((step, index) => (
              <div
                key={step.number}
                className="bg-white/5 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-amber-500/30 transition-colors"
              >
                <div className="grid lg:grid-cols-5 gap-8 items-start">
                  {/* Step Number + Icon */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white text-2xl font-bold flex items-center justify-center flex-shrink-0">
                        {step.number}
                      </div>
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400">
                        <step.icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-stone-300 text-lg leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <p className="text-stone-400 leading-relaxed mb-6">{step.description2}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                          <span className="text-stone-300 text-sm">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Progress bar */}
                {index < companySteps.length - 1 && (
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="w-full bg-white/10 rounded-full h-1">
                      <div
                        className="bg-gradient-to-r from-amber-500 to-orange-500 h-1 rounded-full"
                        style={{ width: `${((index + 1) / companySteps.length) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="https://dashboard.genieportal.de/register"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3.5 text-base font-medium text-white hover:from-amber-400 hover:to-orange-500 transition-all shadow-lg"
            >
              Jetzt als Arbeitgeber registrieren
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Process Summary */}
      <section className="py-20 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="magazine-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Auf einen Blick</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Der Weg zum <span className="marker-highlight-orange">Match</span> auf einen Blick
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              So treffen Jobsuchende und Betriebe bei Berufsgenie aufeinander.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: User, label: 'Profil', sublabel: 'erstellen' },
              { icon: Video, label: 'Videos', sublabel: 'entdecken' },
              { icon: Heart, label: 'Liken', sublabel: 'und Swipen' },
              { icon: Compass, label: 'Match!', sublabel: 'Beidseitig' },
              { icon: MessageCircle, label: 'Chatten', sublabel: 'und Bewerben' },
            ].map((item, index) => (
              <div key={item.label} className="relative">
                <div className="warm-card bg-white rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-bold text-lg text-stone-900">{item.label}</p>
                  <p className="text-stone-500 text-sm">{item.sublabel}</p>
                </div>
                {index < 4 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-4 w-4 text-amber-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#FFFBF5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="magazine-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-stone-600">
              Alles, was du über Berufsgenie wissen musst.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="warm-card bg-white rounded-xl overflow-hidden"
              >
                <div className="px-6 py-5">
                  <h3 className="font-semibold text-stone-900 text-lg">{faq.question}</h3>
                  <p className="mt-3 text-stone-600 leading-relaxed">{faq.answer}</p>
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
            Jetzt loslegen und Job <span className="gradient-text-warm">neu erleben</span>
          </h2>
          <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
            Ob Jobsuchender auf der Suche nach dem Traumjob oder Betrieb auf der Suche nach
            motivierten Mitarbeiter: Berufsgenie bringt euch zusammen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://dashboard.genieportal.de/register"
              className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3.5 text-base font-medium text-white hover:from-amber-400 hover:to-orange-500 transition-all shadow-lg flex items-center gap-2"
            >
              <Building2 className="h-4 w-4" />
              Als Arbeitgeber registrieren
            </Link>
            <Link
              href="/features"
              className="rounded-lg border-2 border-stone-600 px-8 py-3.5 text-base font-medium text-stone-300 hover:border-amber-500 hover:text-white transition-colors flex items-center gap-2"
            >
              Alle Features ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
