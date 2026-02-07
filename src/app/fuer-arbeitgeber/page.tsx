import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Video,
  Heart,
  MessageCircle,
  BarChart3,
  Users,
  Building2,
  ArrowRight,
  Check,
  Shield,
  ChevronRight,
  ChevronDown,
  Upload,
  Compass,
  Globe,
  Headphones,
  Lock,
  Server,
  Zap,
  Clock,
  TrendingUp,
  Target,
  Eye,
  UserPlus,
  Play,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Berufsgenie für Arbeitgeber – Mitarbeiter finden per Video & Matching',
  description:
    'Finden Sie motivierte Mitarbeiter mit TikTok-Style Videos, intelligentem Matching und Direkt-Chat. Erreichen Sie die Generation Z dort, wo sie ist. Ab 0 EUR/Monat.',
  alternates: { canonical: '/fuer-arbeitgeber' },
  openGraph: {
    title: 'Mitarbeiter finden per Video & Matching | Berufsgenie für Arbeitgeber',
    description:
      'Klassische Stellenanzeigen erreichen Fachkräfte nicht mehr. Berufsgenie verbindet Betriebe und Jobsuchende durch authentische Kurzvideos und Swipe-Matching.',
    url: 'https://berufsgenie.de/fuer-arbeitgeber',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Berufsgenie für Arbeitgeber – Mitarbeiter finden per Video & Matching',
    description:
      'Erreichen Sie Fachkräfte mit authentischen Kurzvideos. Intelligentes Matching, Direkt-Chat, Analytics Dashboard.',
  },
};

const faqs = [
  {
    q: 'Wie viel kostet Berufsgenie für Betriebe?',
    a: 'Sie können kostenlos starten mit einer Stellenanzeige und einem Firmenprofil. Unsere Paid-Pläne beginnen ab 49 EUR/Monat für den Starter-Plan. Der beliebteste Professional-Plan kostet 149 EUR/Monat und beinhaltet 10 Stellenanzeigen, unbegrenzt Videos, Priority-Platzierung und volle Analytics.',
  },
  {
    q: 'Welche Videos soll ich hochladen?',
    a: 'Am besten funktionieren authentische 30-90 Sekunden Videos, in denen echte Mitarbeiter oder Mitarbeiter ihren Arbeitsalltag zeigen. Keine Hochglanz-Produktion nötig – Smartphone reicht! Zeigen Sie Ihren Betrieb, die Aufgaben und das Team. Authentizität schlägt Perfektion.',
  },
  {
    q: 'Wie funktioniert das Matching?',
    a: 'Jobsuchende sehen Ihre Videos im Feed und können nach rechts swipen, wenn ihnen Ihr Betrieb gefällt. Wenn Sie den Kandidaten ebenfalls spannend finden, entsteht ein Match. Erst nach dem beidseitigen Like können Sie miteinander chatten – das sorgt für qualitativ hochwertige Kontakte.',
  },
  {
    q: 'Muss ich technisches Wissen haben?',
    a: 'Nein. Unser Dashboard ist intuitiv und selbsterklärend. Videos können Sie direkt vom Smartphone hochladen – wir kümmern uns automatisch um Konvertierung, Optimierung und Thumbnail-Erstellung. In 5 Minuten ist Ihr erstes Video online.',
  },
  {
    q: 'Wie erreiche ich Jobsuchende in meiner Region?',
    a: 'Berufsgenie zeigt Jobsuchenden bevorzugt Betriebe in ihrer Nähe. Sie geben Ihren Standort bei der Registrierung an. Kandidaten können nach Umkreis filtern – so erreichen Sie genau die jungen Menschen, die in Ihrer Region eine Job suchen.',
  },
  {
    q: 'Kann ich mehrere Mitarbeiter einladen?',
    a: 'Ja! Ab dem Professional-Plan können Sie mehrere Team-Mitglieder einladen. Jeder Mitarbeiter erhält eigene Zugangsdaten und kann Videos hochladen, Kandidaten bewerten und chatten. Ideal für größere Betriebe mit mehreren Ausbildern.',
  },
  {
    q: 'Ist Berufsgenie DSGVO-konform?',
    a: 'Absolut. Wir sind ein deutsches Unternehmen, unsere Server stehen in Deutschland und wir erfüllen alle Anforderungen der DSGVO. Daten werden verschlüsselt übertragen und gespeichert. Jobsuchende unter 16 benötigen die Einwilligung ihrer Erziehungsberechtigten.',
  },
  {
    q: 'Wie schnell kann ich starten?',
    a: 'Sofort. Die Registrierung dauert 2 Minuten: Firmendaten eingeben, Benutzerkonto anlegen, fertig. Danach können Sie direkt Ihr Firmenprofil vervollständigen, Stellenanzeigen erstellen und Videos hochladen. Innerhalb von 15 Minuten sind Sie sichtbar.',
  },
  {
    q: 'Was unterscheidet Berufsgenie von klassischen Jobbörsen?',
    a: 'Jobbörsen setzen auf Text-Stellenanzeigen – die Fachkräfte nicht liest. Wir setzen auf Video, Matching und Chat. Jobsuchende erleben Ihren Betrieb in 30 Sekunden, statt Fließtext zu lesen. Das Ergebnis: höhere Reichweite, bessere Passung und schnellere Besetzung.',
  },
  {
    q: 'Kann ich den Erfolg meiner Videos messen?',
    a: 'Ja, unser Analytics Dashboard zeigt Ihnen in Echtzeit: Videoaufrufe, Likes, Match-Rate, Chat-Anfragen und Conversion. So sehen Sie genau, welche Videos funktionieren und können Ihre Strategie optimieren.',
  },
];

export default function FuerArbeitgeberPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://berufsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Für Arbeitgeber' },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Berufsgenie für Arbeitgeber – Mitarbeiter finden per Video & Matching',
    description:
      'Finden Sie motivierte Mitarbeiter mit TikTok-Style Videos, intelligentem Matching und Direkt-Chat.',
    url: 'https://berufsgenie.de/fuer-arbeitgeber',
    publisher: {
      '@type': 'Organization',
      name: 'Berufsgenie',
      url: 'https://berufsgenie.de',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FFFBF5]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* Hero Section */}
        <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-[#FFFBF5]">
          <div className="absolute inset-0 warm-dots opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-stone-500 mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1">
                <li>
                  <Link href="/" className="hover:text-amber-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-stone-900 font-medium">Für Arbeitgeber</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="tag-pill mb-6">
                  <Building2 className="h-3.5 w-3.5" />
                  Für Arbeitgeber
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight">
                  Finden Sie die besten Mitarbeiter –{' '}
                  <span className="marker-highlight">mit Berufsgenie</span>
                </h1>
                <p className="mt-6 text-xl text-stone-600 max-w-xl">
                  Klassische Stellenanzeigen? Liest Fachkräfte nicht. Zeigen Sie Ihren Betrieb mit
                  authentischen Kurzvideos und finden Sie motivierte Mitarbeiter per Matching.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://dashboard.genieportal.de/register"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-base font-semibold text-white hover:from-amber-400 hover:to-orange-500 transition-all shadow-lg"
                  >
                    Kostenlos registrieren
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a
                    href="#so-starten-sie"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 px-8 py-4 text-base font-medium text-stone-700 hover:border-amber-400 hover:bg-amber-50 transition-colors"
                  >
                    So funktioniert&apos;s
                    <ChevronDown className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Eye,
                    value: '30-90s',
                    label: 'Kurzvideos',
                    desc: 'Authentische Einblicke',
                  },
                  {
                    icon: Heart,
                    value: '2x Like',
                    label: 'Matching',
                    desc: 'Beidseitiges Interesse',
                  },
                  {
                    icon: MessageCircle,
                    value: 'Direkt',
                    label: 'Chat',
                    desc: 'Ohne Formalitäten',
                  },
                  {
                    icon: BarChart3,
                    value: 'Echtzeit',
                    label: 'Analytics',
                    desc: 'Volle Transparenz',
                  },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="warm-card bg-white rounded-2xl p-6"
                  >
                    <card.icon className="h-8 w-8 text-amber-600 mb-3" />
                    <p className="text-2xl font-bold text-stone-900">{card.value}</p>
                    <p className="font-medium text-stone-700 mt-1">{card.label}</p>
                    <p className="text-sm text-stone-500 mt-0.5">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="magazine-divider mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Die Herausforderung</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
                Warum klassisches Mitarbeiter-Recruiting <span className="marker-highlight-orange">nicht mehr funktioniert</span>
              </h2>
              <p className="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
                Die Generation Z tickt anders. Wer junge Talente gewinnen will, muss sich anpassen.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  stat: '73%',
                  title: 'der Mitarbeiter-Stellen bleiben unbesetzt',
                  description:
                    'Immer mehr Betriebe finden keine Auszubildenden. Die Zahl der unbesetzten Stellen erreicht jedes Jahr neue Rekordwerte. Besonders betroffen: Handwerk, Gastronomie und Gesundheitswesen.',
                  accent: 'border-rose-500',
                  statColor: 'text-rose-600',
                },
                {
                  stat: '8 Sek.',
                  title: 'Aufmerksamkeitsspanne der Fachkräfte',
                  description:
                    'Lange Stellenanzeigen mit Fließtext? Werden nicht gelesen. Fachkräfte ist mit TikTok, Instagram und YouTube aufgewachsen. Sie entscheiden in Sekunden, ob etwas relevant ist – nicht in Minuten.',
                  accent: 'border-orange-500',
                  statColor: 'text-orange-600',
                },
                {
                  stat: '86%',
                  title: 'wollen authentische Einblicke',
                  description:
                    'Jobsuchende wollen sehen, wie der Arbeitsalltag wirklich aussieht. Hochglanz-Broschüren und Stockfotos wirken abschreckend. Was zählt: echte Menschen, echte Aufgaben, echte Atmosphäre.',
                  accent: 'border-amber-500',
                  statColor: 'text-amber-600',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`feature-box bg-[#FFFBF5] rounded-2xl border-l-4 ${item.accent} p-8`}
                >
                  <p className={`text-5xl font-bold ${item.statColor} mb-4`}>{item.stat}</p>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 bg-[#FFFBF5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="magazine-divider mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Unsere Lösung</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
                So erreichen Sie die <span className="marker-highlight">Generation Z</span>
              </h2>
              <p className="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
                Berufsgenie verbindet Betriebe und Jobsuchende auf eine völlig neue Art:
                mit Videos, Matching und Chat – dort, wo Fachkräfte zu Hause ist.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-stone-900 rounded-2xl p-8 text-white">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-6">
                  <Video className="h-7 w-7 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">TikTok-Style Videos</h3>
                <p className="text-stone-300 leading-relaxed mb-6">
                  Laden Sie 30-90 Sekunden Kurzvideos hoch, in denen Ihre Mitarbeiter den Arbeitsalltag
                  zeigen. Smartphone genügt – wir kümmern uns um die technische Optimierung.
                  Jobsuchende schauen sich Videos an, keine Stellenanzeigen.
                </p>
                <ul className="space-y-2">
                  {['Automatische Konvertierung (HD 720p)', 'Thumbnail-Generierung', 'Feed-Platzierung'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-stone-300">
                      <Check className="h-4 w-4 text-amber-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-900 rounded-2xl p-8 text-white">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6">
                  <Heart className="h-7 w-7 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Intelligentes Matching</h3>
                <p className="text-stone-300 leading-relaxed mb-6">
                  Kein Bewerber-Spam, keine unpassenden Kandidaten. Unser Matching basiert auf
                  beidseitigem Interesse: Erst wenn beide Seiten &quot;Like&quot; sagen,
                  entsteht ein Match. Das garantiert Qualität statt Quantität.
                </p>
                <ul className="space-y-2">
                  {['Beidseitiges Like-System', 'Interessen-basiert', 'Regionale Priorisierung'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-stone-300">
                      <Check className="h-4 w-4 text-orange-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-900 rounded-2xl p-8 text-white">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-6">
                  <MessageCircle className="h-7 w-7 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Direkt-Chat</h3>
                <p className="text-stone-300 leading-relaxed mb-6">
                  Nach dem Match geht es direkt los: Chat in Echtzeit, ohne Anschreiben und
                  Formalitäten. Jobsuchende kommunizieren so, wie sie es gewohnt sind –
                  unkompliziert und schnell. Das beschleunigt den gesamten Prozess.
                </p>
                <ul className="space-y-2">
                  {['Echtzeit-Nachrichten', 'Keine Bewerbungsunterlagen nötig', 'Push-Benachrichtigungen'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-stone-300">
                      <Check className="h-4 w-4 text-amber-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="magazine-divider mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Dashboard Features</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
                Alles, was Sie für erfolgreiches <span className="marker-highlight-orange">Recruiting</span> brauchen
              </h2>
              <p className="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
                Von Video-Upload bis Analytics – unser Dashboard bietet Ihnen alle Werkzeuge,
                um die besten Nachwuchskräfte zu finden und zu begeistern.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Upload,
                  title: 'Video-Upload & Management',
                  description:
                    'Laden Sie Videos direkt vom Smartphone oder Computer hoch. Automatische Konvertierung in HD (720p MP4/H.264), Thumbnail-Generierung und Vorschau. Verwalten Sie alle Videos zentral im Dashboard.',
                  accent: 'border-amber-500',
                },
                {
                  icon: Heart,
                  title: 'Kandidaten-Matching',
                  description:
                    'Sehen Sie, welche Jobsuchenden Ihre Videos geliked haben. Liken Sie zurück und schaffen Sie ein Match. Das beidseitige Like-System sorgt für qualitativ hochwertige Kontakte.',
                  accent: 'border-rose-500',
                },
                {
                  icon: MessageCircle,
                  title: 'Echtzeit-Chat',
                  description:
                    'Nach dem Match chatten Sie direkt mit den Kandidaten. Echtzeit-Nachrichten, Lesebestätigungen und Tipp-Indikator. Kommunikation auf Augenhöhe, ohne Formalitäten.',
                  accent: 'border-orange-500',
                },
                {
                  icon: BarChart3,
                  title: 'Analytics Dashboard',
                  description:
                    'Sehen Sie in Echtzeit: Videoaufrufe, Likes, Matches, Chat-Anfragen und Conversion-Rates. Verstehen Sie, welche Videos funktionieren und optimieren Sie Ihre Strategie.',
                  accent: 'border-amber-600',
                },
                {
                  icon: Users,
                  title: 'Team-Verwaltung',
                  description:
                    'Laden Sie Ausbilder und HR-Mitarbeiter als Team-Mitglieder ein. Jeder erhält eigene Zugangsdaten und kann eigenständig Videos hochladen, Kandidaten bewerten und chatten.',
                  accent: 'border-orange-600',
                },
                {
                  icon: Building2,
                  title: 'Firmenprofil',
                  description:
                    'Präsentieren Sie Ihren Betrieb mit Logo, Beschreibung, Branche, Standort und Mitarbeiterzahl. Ihr Profil ist die digitale Visitenkarte für die nächste Generation.',
                  accent: 'border-amber-500',
                },
                {
                  icon: Zap,
                  title: 'Stellenanzeigen erstellen',
                  description:
                    'Erstellen Sie Stellenanzeigen in Minuten: Beruf auswählen, Anforderungen definieren, Benefits beschreiben. Automatisch mit Ihren Videos verknüpft für maximale Wirkung.',
                  accent: 'border-orange-500',
                },
                {
                  icon: Globe,
                  title: 'Regionale Sichtbarkeit',
                  description:
                    'Ihr Betrieb wird Jobsuchenden in Ihrer Region priorisiert angezeigt. Umkreissuche, Standort-Filter und regionale Feed-Platzierung bringen Ihnen Kandidaten aus der Nähe.',
                  accent: 'border-amber-600',
                },
                {
                  icon: TrendingUp,
                  title: 'Priority-Platzierung',
                  description:
                    'Im Professional- und Enterprise-Plan erscheinen Ihre Videos weiter oben im Feed. Mehr Sichtbarkeit bedeutet mehr Likes, mehr Matches und mehr qualifizierte Kandidaten.',
                  accent: 'border-rose-500',
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className={`feature-box bg-[#FFFBF5] rounded-xl p-8 border-l-4 ${feature.accent} hover:shadow-lg transition-all`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber-100 text-amber-600 mb-5">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900">{feature.title}</h3>
                  <p className="mt-2 text-stone-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Start */}
        <section id="so-starten-sie" className="py-20 bg-[#FFFBF5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="magazine-divider mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Los geht&apos;s</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
                In 4 Schritten zum <span className="marker-highlight">ersten Match</span>
              </h2>
              <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
                Starten Sie in wenigen Minuten – ohne technisches Wissen und ohne Verpflichtungen.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: UserPlus,
                  title: 'Kostenlos registrieren',
                  description:
                    'Firmendaten und Benutzerkonto anlegen. Dauert 2 Minuten, keine Kreditkarte nötig.',
                },
                {
                  icon: Building2,
                  title: 'Firmenprofil anlegen',
                  description:
                    'Logo hochladen, Betrieb beschreiben, Branche und Standort angeben. Ihre digitale Visitenkarte.',
                },
                {
                  icon: Play,
                  title: 'Videos hochladen',
                  description:
                    'Kurze, authentische Videos von Ihren Mitarbeiter und dem Arbeitsalltag. Smartphone genügt.',
                },
                {
                  icon: Heart,
                  title: 'Kandidaten matchen',
                  description:
                    'Jobsuchende liken Ihre Videos. Sie liken zurück. Match! Dann chatten Sie direkt.',
                },
              ].map((item) => (
                <div key={item.title} className="relative text-center group">
                  <div className="mx-auto mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-amber-200 group-hover:shadow-xl group-hover:shadow-amber-300 transition-shadow">
                      <item.icon className="h-9 w-9" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                  <p className="mt-2 text-stone-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="https://dashboard.genieportal.de/register"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-base font-semibold text-white hover:from-amber-400 hover:to-orange-500 transition-all shadow-lg"
              >
                Jetzt kostenlos starten
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="magazine-divider mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Preise</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
                Transparente Preise, <span className="marker-highlight">keine versteckten Kosten</span>
              </h2>
              <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
                Starten Sie kostenlos und upgraden Sie, wenn Ihr Recruiting wächst.
                Alle Preise netto, monatlich kündbar. Zahlung per PayPal.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  name: 'Free',
                  price: '0',
                  period: '',
                  description: 'Zum Ausprobieren',
                  features: [
                    '1 Stellenanzeige',
                    '1 Video',
                    'Firmenprofil',
                    'Sichtbar im Feed',
                    'Basis-Chat',
                  ],
                  highlighted: false,
                  cta: 'Kostenlos starten',
                },
                {
                  name: 'Starter',
                  price: '49',
                  period: 'EUR/Monat',
                  description: 'Für kleine Betriebe',
                  features: [
                    '3 Stellenanzeigen',
                    '3 Videos',
                    'Matching + Chat',
                    'Basis-Analytics',
                    'E-Mail-Support',
                  ],
                  highlighted: false,
                  cta: 'Starter wählen',
                },
                {
                  name: 'Professional',
                  price: '149',
                  period: 'EUR/Monat',
                  description: 'Beliebteste Wahl',
                  features: [
                    '10 Stellenanzeigen',
                    'Unbegrenzt Videos',
                    'Priority-Platzierung',
                    'Volle Analytics',
                    'Team-Zugang (5 Nutzer)',
                    'Priority Support',
                  ],
                  highlighted: true,
                  cta: 'Professional wählen',
                },
                {
                  name: 'Enterprise',
                  price: '399',
                  period: 'EUR/Monat',
                  description: 'Für große Betriebe',
                  features: [
                    'Unbegrenzt alles',
                    'Unbegrenzt Team-Nutzer',
                    'API-Zugang',
                    'Premium Support',
                    'Individuelle Beratung',
                    'Account Manager',
                  ],
                  highlighted: false,
                  cta: 'Kontakt aufnehmen',
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-8 flex flex-col ${
                    plan.highlighted
                      ? 'bg-stone-900 text-white ring-4 ring-amber-400 scale-[1.03] shadow-2xl'
                      : 'bg-[#FFFBF5] warm-card'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="text-xs font-semibold uppercase tracking-wide text-amber-400 mb-2">
                      Empfohlen
                    </div>
                  )}
                  <h3
                    className={`text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-stone-900'}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${plan.highlighted ? 'text-stone-400' : 'text-stone-500'}`}
                  >
                    {plan.description}
                  </p>
                  <p className="mt-6">
                    <span className={`text-4xl font-bold ${plan.highlighted ? 'gradient-text-warm' : 'text-stone-900'}`}>{plan.price}</span>
                    {plan.period && (
                      <span
                        className={`text-sm ml-1 ${plan.highlighted ? 'text-stone-400' : 'text-stone-500'}`}
                      >
                        {plan.period}
                      </span>
                    )}
                  </p>
                  <ul className="mt-8 space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check
                          className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                            plan.highlighted ? 'text-amber-400' : 'text-amber-600'
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="https://dashboard.genieportal.de/register"
                    className={`mt-8 block text-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-400 hover:to-orange-500'
                        : 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-400 hover:to-orange-500'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-[#FFFBF5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="magazine-divider mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Vertrauen & Sicherheit</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
                Warum Betriebe Berufsgenie <span className="marker-highlight">vertrauen</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'DSGVO-konform',
                  description:
                    'Volle Compliance mit der Datenschutz-Grundverordnung. Verschlüsselte Datenübertragung, transparente Datenverarbeitung und klare Löschfristen. Jobsuchende unter 16 benötigen die Einwilligung der Erziehungsberechtigten.',
                },
                {
                  icon: Server,
                  title: 'Deutsche Server',
                  description:
                    'Alle Daten werden auf Servern in Deutschland gespeichert und verarbeitet. Kein Transfer in Drittländer, kein US Cloud Act. Ihre Daten und die Ihrer Kandidaten sind sicher.',
                },
                {
                  icon: Headphones,
                  title: 'Persönlicher Support',
                  description:
                    'Unser deutschsprachiges Support-Team hilft Ihnen bei allen Fragen – von der Einrichtung bis zur Optimierung Ihrer Videos. Per E-Mail, Chat oder Telefon.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="text-center p-8 rounded-2xl warm-card bg-white"
                >
                  <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Lock, label: 'SSL-verschlüsselt' },
                { icon: Server, label: 'Hosting in DE' },
                { icon: Shield, label: 'DSGVO-konform' },
                { icon: Clock, label: '99,9% Uptime' },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-amber-50 border border-amber-200 text-stone-700 text-sm font-medium"
                >
                  <badge.icon className="h-4 w-4 text-amber-600" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="magazine-divider mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600">FAQ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
                Häufige Fragen von <span className="marker-highlight-orange">Betrieben</span>
              </h2>
              <p className="mt-4 text-lg text-stone-600">
                Alles, was Sie wissen müssen – auf einen Blick.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group warm-card bg-[#FFFBF5] rounded-xl"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-stone-900 pr-4">{faq.q}</h3>
                    <ChevronDown className="h-5 w-5 text-amber-600 flex-shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-stone-600 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-stone-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-20 w-64 h-64 bg-amber-500 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Bereit, die besten Mitarbeiter zu <span className="gradient-text-warm">finden</span>?
            </h2>
            <p className="mt-6 text-xl text-stone-300 max-w-2xl mx-auto">
              Registrieren Sie sich kostenlos und laden Sie noch heute Ihr erstes Video hoch.
              Keine Kreditkarte, keine Verpflichtung, kein Risiko.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://dashboard.genieportal.de/register"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-10 py-4 text-base font-semibold text-white hover:from-amber-400 hover:to-orange-500 transition-all shadow-lg"
              >
                <Building2 className="h-5 w-5" />
                Kostenlos registrieren
              </Link>
            </div>
            <p className="mt-6 text-sm text-stone-500">
              Bereits registriert?{' '}
              <Link
                href="https://dashboard.genieportal.de/login"
                className="text-amber-400 underline hover:text-amber-300"
              >
                Zum Dashboard einloggen
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
