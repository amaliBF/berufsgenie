import { Metadata } from 'next';
import Link from 'next/link';
import {
  Video,
  Heart,
  MessageCircle,
  Brain,
  Shield,
  Star,
  ArrowRight,
  Check,
  Building2,
  Users,
  Sparkles,
  Zap,
  MapPin,
  Smartphone,
  Lock,
  Wallet,
  ChevronRight,
  Search,
  Clock,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Berufsgenie fur Jobsuchende - Deinen Traumjob per Swipe finden',
  description:
    'Finde deinen Traumjob mit Berufsgenie: Video-Jobprofile, Swipe-Matching, Direkt-Chat mit Arbeitgebern und KI-Jobfinder. 100% kostenlos fur Jobsuchende.',
  alternates: { canonical: '/fuer-jobsuchende' },
  openGraph: {
    title: 'Berufsgenie fur Jobsuchende - Traumjob per Swipe finden',
    description:
      'Video-Jobprofile, Swipe-Matching und Direkt-Chat. Finde deinen Traumjob mit Berufsgenie - kostenlos und unkompliziert.',
    url: 'https://berufsgenie.de/fuer-jobsuchende',
  },
};

const benefits = [
  {
    icon: Wallet,
    title: '100% kostenlos',
    description:
      'Alle Features sind und bleiben fur Jobsuchende kostenlos. Kein Abo, keine versteckten Kosten. Du zahlst nichts, nie.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Video,
    title: 'Echte Video-Einblicke',
    description:
      'Sieh in authentischen Kurzvideos, wie der Arbeitsalltag bei Arbeitgebern wirklich aussieht. Keine Stockfotos, keine Marketing-Texte.',
    color: 'bg-violet-100 text-violet-600',
  },
  {
    icon: Heart,
    title: 'Swipe-Matching',
    description:
      'Gefallen dir die Videos eines Arbeitgebers? Swipe nach rechts. Wenn beide Seiten Interesse zeigen, entsteht ein Match.',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: MessageCircle,
    title: 'Direkt chatten',
    description:
      'Nach einem Match schreibst du direkt mit dem Arbeitgeber. Locker, ohne Formalitaten und ohne Anschreiben.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Brain,
    title: 'KI-Jobfinder',
    description:
      'Weisst du nicht genau, welcher Job zu dir passt? Unsere KI stellt dir Fragen und schlagt passende Jobs und Branchen vor.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: MapPin,
    title: 'Jobs in deiner Nahe',
    description:
      'Finde Stellenangebote in deinem Umkreis. Mit Standortfilter und regionaler Suche.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Shield,
    title: 'Kein Lebenslauf notig',
    description:
      'Erstelle in 2 Minuten ein Profil mit deinen Starken und Interessen. Kein Anschreiben, keine Dokumente hochladen.',
    color: 'bg-teal-100 text-teal-600',
  },
  {
    icon: Lock,
    title: 'Datenschutz garantiert',
    description:
      'DSGVO-konform, deutsche Server. Deine Daten gehoren dir und werden niemals verkauft.',
    color: 'bg-slate-100 text-slate-600',
  },
  {
    icon: Zap,
    title: 'Schnelle Ergebnisse',
    description:
      'Vom Profil zum ersten Match oft in wenigen Stunden. Vom Match zum Vorstellungsgesprach in wenigen Tagen.',
    color: 'bg-yellow-100 text-yellow-600',
  },
];

const steps = [
  {
    number: '1',
    title: 'Profil erstellen',
    description: 'In nur 2 Minuten: Interessen, Starken und Standort angeben. Kein Lebenslauf notig.',
    icon: Users,
  },
  {
    number: '2',
    title: 'Videos entdecken',
    description: 'Schau dir Kurzvideos von Arbeitgebern an und entdecke, wie der Arbeitsalltag wirklich aussieht.',
    icon: Video,
  },
  {
    number: '3',
    title: 'Swipen & Matchen',
    description: 'Gefallt dir ein Arbeitgeber? Swipe rechts. Wenn beide Seiten Interesse zeigen: Match!',
    icon: Heart,
  },
  {
    number: '4',
    title: 'Direkt chatten',
    description: 'Nach dem Match schreibst du direkt mit dem Arbeitgeber. Fragen stellen, Termin vereinbaren.',
    icon: MessageCircle,
  },
];

export default function FuerJobsuchendePage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://berufsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Fur Jobsuchende' },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-violet-200 mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Fur Jobsuchende</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-violet-200 mb-6 border border-white/20">
              <Search className="h-4 w-4" />
              <span>Jobsuche neu gedacht</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Finde deinen Traumjob per Swipe
            </h1>
            <p className="text-lg sm:text-xl text-violet-100 mb-8 max-w-2xl">
              Berufsgenie zeigt dir Jobs als echte Videos. Swipe, matche und chatte direkt
              mit Arbeitgebern. Kostenlos, unkompliziert und ohne Lebenslauf.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Kostenlos', 'Kein Lebenslauf', 'Video-Einblicke', 'Direkt-Chat'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* So funktioniert's */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-1.5 text-sm text-violet-700 mb-4">
              <Zap className="h-4 w-4" />
              In 4 Schritten zum Traumjob
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              So funktioniert Berufsgenie
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Von der Anmeldung bis zum Vorstellungsgesprach in wenigen Tagen statt Wochen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-violet-200">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="text-sm font-bold text-violet-600 mb-2">Schritt {step.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-1.5 text-sm text-violet-700 mb-4">
              <Sparkles className="h-4 w-4" />
              Deine Vorteile
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              9 Grunde, warum Jobsuchende Berufsgenie lieben
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jobsuche muss nicht stressig sein. Berufsgenie macht sie schnell, visuell und direkt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-violet-200 hover:shadow-lg transition-all"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${benefit.color} mb-4`}
                >
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vergleich */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Berufsgenie vs. klassische Jobportale
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { feature: 'Einblicke', berufsgenie: 'Authentische Kurzvideos von echten Mitarbeitern', klassisch: 'Stockfotos und Textbeschreibungen' },
              { feature: 'Bewerbung', berufsgenie: 'Profil in 2 Min, kein Lebenslauf', klassisch: 'Anschreiben, Lebenslauf, Zeugnisse' },
              { feature: 'Kontakt', berufsgenie: 'Direkter Chat nach beidseitigem Match', klassisch: 'Formelles Anschreiben, wochenlange Wartezeit' },
              { feature: 'Geschwindigkeit', berufsgenie: 'Match in Stunden, Gesprach in Tagen', klassisch: 'Wochen bis Monate bis zur Einladung' },
              { feature: 'Kosten', berufsgenie: '100% kostenlos, alle Features', klassisch: 'Oft Premium-Features kostenpflichtig' },
            ].map((row) => (
              <div key={row.feature} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-3">{row.feature}</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-violet-600">Berufsgenie: </span>
                      <span className="text-gray-700">{row.berufsgenie}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5 text-gray-400">-</span>
                    <div>
                      <span className="font-medium text-gray-500">Klassisch: </span>
                      <span className="text-gray-500">{row.klassisch}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Lock, label: 'SSL-verschlusselt' },
              { icon: Shield, label: 'DSGVO-konform' },
              { icon: Wallet, label: '100% kostenlos' },
              { icon: Clock, label: 'Schnelle Matches' },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-medium"
              >
                <badge.icon className="h-4 w-4 text-violet-600" />
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Bereit, deinen Traumjob zu finden?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Erstelle dein Profil in 2 Minuten und entdecke Jobs als echte Videos.
            Kostenlos, unkompliziert und direkt.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://dashboard.berufsgenie.de/login"
              className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-violet-600 hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Sparkles className="h-4 w-4" />
              Jetzt loslegen
            </Link>
            <Link
              href="/so-funktionierts"
              className="rounded-full border-2 border-white px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              So funktioniert&apos;s
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-white/70 text-sm">
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4" />Kostenlos</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4" />Kein Lebenslauf</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4" />DSGVO-konform</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
