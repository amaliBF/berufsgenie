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
  Users,
  Compass,
  Zap,
  MapPin,
  Lock,
  Wallet,
  Search,
  Clock,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Berufsgenie für Jobsuchende – Deinen Traumjob per Swipe finden',
  description:
    'Finde deinen Traumjob mit Berufsgenie: Video-Jobprofile, Swipe-Matching, Direkt-Chat mit Arbeitgebern und KI-Jobfinder. 100% kostenlos für Jobsuchende.',
  alternates: { canonical: '/fuer-jobsuchende' },
  openGraph: {
    title: 'Berufsgenie für Jobsuchende – Traumjob per Swipe finden',
    description:
      'Video-Jobprofile, Swipe-Matching und Direkt-Chat. Finde deinen Traumjob mit Berufsgenie – kostenlos und unkompliziert.',
    url: 'https://berufsgenie.de/fuer-jobsuchende',
  },
};

const benefits = [
  {
    icon: Wallet,
    title: '100% kostenlos',
    description:
      'Alle Features sind und bleiben für Jobsuchende kostenlos. Kein Abo, keine versteckten Kosten. Du zahlst nichts, nie.',
    accent: 'border-green-500',
  },
  {
    icon: Video,
    title: 'Echte Video-Einblicke',
    description:
      'Sieh in authentischen Kurzvideos, wie der Arbeitsalltag bei Arbeitgebern wirklich aussieht. Keine Stockfotos, keine Marketing-Texte.',
    accent: 'border-amber-500',
  },
  {
    icon: Heart,
    title: 'Swipe-Matching',
    description:
      'Gefallen dir die Videos eines Arbeitgebers? Swipe nach rechts. Wenn beide Seiten Interesse zeigen, entsteht ein Match.',
    accent: 'border-rose-500',
  },
  {
    icon: MessageCircle,
    title: 'Direkt chatten',
    description:
      'Nach einem Match schreibst du direkt mit dem Arbeitgeber. Locker, ohne Formalitäten und ohne Anschreiben.',
    accent: 'border-orange-500',
  },
  {
    icon: Brain,
    title: 'KI-Jobfinder',
    description:
      'Weißt du nicht genau, welcher Job zu dir passt? Unsere KI stellt dir Fragen und schlägt passende Jobs und Branchen vor.',
    accent: 'border-amber-600',
  },
  {
    icon: MapPin,
    title: 'Jobs in deiner Nähe',
    description:
      'Finde Stellenangebote in deinem Umkreis. Mit Standortfilter und regionaler Suche.',
    accent: 'border-orange-600',
  },
  {
    icon: Shield,
    title: 'Kein Lebenslauf nötig',
    description:
      'Erstelle in 2 Minuten ein Profil mit deinen Stärken und Interessen. Kein Anschreiben, keine Dokumente hochladen.',
    accent: 'border-amber-500',
  },
  {
    icon: Lock,
    title: 'Datenschutz garantiert',
    description:
      'DSGVO-konform, deutsche Server. Deine Daten gehören dir und werden niemals verkauft.',
    accent: 'border-stone-500',
  },
  {
    icon: Zap,
    title: 'Schnelle Ergebnisse',
    description:
      'Vom Profil zum ersten Match oft in wenigen Stunden. Vom Match zum Vorstellungsgespräch in wenigen Tagen.',
    accent: 'border-orange-500',
  },
];

const steps = [
  {
    number: '1',
    title: 'Profil erstellen',
    description: 'In nur 2 Minuten: Interessen, Stärken und Standort angeben. Kein Lebenslauf nötig.',
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
    description: 'Gefällt dir ein Arbeitgeber? Swipe rechts. Wenn beide Seiten Interesse zeigen: Match!',
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
      { '@type': 'ListItem', position: 2, name: 'Für Jobsuchende' },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-[#FFFBF5] pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 warm-dots opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li><Link href="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-stone-900 font-medium">Für Jobsuchende</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="tag-pill mb-6">
              <Search className="h-3.5 w-3.5" />
              <span>Jobsuche neu gedacht</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
              Finde deinen <span className="marker-highlight">Traumjob</span> per Swipe
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 mb-8 max-w-2xl">
              Berufsgenie zeigt dir Jobs als echte Videos. Swipe, matche und chatte direkt
              mit Arbeitgebern. Kostenlos, unkompliziert und ohne Lebenslauf.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Kostenlos', 'Kein Lebenslauf', 'Video-Einblicke', 'Direkt-Chat'].map((tag) => (
                <span
                  key={tag}
                  className="tag-pill"
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
            <div className="magazine-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">In 4 Schritten zum Traumjob</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              So funktioniert <span className="marker-highlight-orange">Berufsgenie</span>
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Von der Anmeldung bis zum Vorstellungsgespräch in wenigen Tagen statt Wochen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-200">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="text-sm font-bold text-amber-600 mb-2">Schritt {step.number}</div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-stone-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-20 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="magazine-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Deine Vorteile</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              9 Gründe, warum Jobsuchende <span className="marker-highlight">Berufsgenie</span> lieben
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Jobsuche muss nicht stressig sein. Berufsgenie macht sie schnell, visuell und direkt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className={`feature-box bg-white rounded-xl p-6 border-l-4 ${benefit.accent} hover:shadow-lg transition-all`}
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

      {/* Vergleich */}
      <section className="py-20 bg-[#FFFBF5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="magazine-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Vergleich</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Berufsgenie vs. klassische <span className="marker-highlight-orange">Jobportale</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { feature: 'Einblicke', berufsgenie: 'Authentische Kurzvideos von echten Mitarbeitern', klassisch: 'Stockfotos und Textbeschreibungen' },
              { feature: 'Bewerbung', berufsgenie: 'Profil in 2 Min, kein Lebenslauf', klassisch: 'Anschreiben, Lebenslauf, Zeugnisse' },
              { feature: 'Kontakt', berufsgenie: 'Direkter Chat nach beidseitigem Match', klassisch: 'Formelles Anschreiben, wochenlange Wartezeit' },
              { feature: 'Geschwindigkeit', berufsgenie: 'Match in Stunden, Gespräch in Tagen', klassisch: 'Wochen bis Monate bis zur Einladung' },
              { feature: 'Kosten', berufsgenie: '100% kostenlos, alle Features', klassisch: 'Oft Premium-Features kostenpflichtig' },
            ].map((row) => (
              <div key={row.feature} className="warm-card bg-white rounded-xl p-5">
                <h3 className="font-semibold text-stone-900 mb-3">{row.feature}</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-amber-700">Berufsgenie: </span>
                      <span className="text-stone-700">{row.berufsgenie}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5 text-stone-400">-</span>
                    <div>
                      <span className="font-medium text-stone-500">Klassisch: </span>
                      <span className="text-stone-500">{row.klassisch}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Lock, label: 'SSL-verschlüsselt' },
              { icon: Shield, label: 'DSGVO-konform' },
              { icon: Wallet, label: '100% kostenlos' },
              { icon: Clock, label: 'Schnelle Matches' },
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

      {/* CTA */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Bereit, deinen <span className="gradient-text-warm">Traumjob</span> zu finden?
          </h2>
          <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
            Erstelle dein Profil in 2 Minuten und entdecke Jobs als echte Videos.
            Kostenlos, unkompliziert und direkt.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://dashboard.genieportal.de/login"
              className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3.5 text-base font-semibold text-white hover:from-amber-400 hover:to-orange-500 transition-all shadow-lg flex items-center gap-2"
            >
              <Compass className="h-4 w-4" />
              Jetzt loslegen
            </Link>
            <Link
              href="/so-funktionierts"
              className="rounded-lg border-2 border-stone-600 px-8 py-3.5 text-base font-medium text-stone-300 hover:border-amber-500 hover:text-white transition-colors flex items-center gap-2"
            >
              So funktioniert&apos;s
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-stone-400 text-sm">
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-amber-500" />Kostenlos</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-amber-500" />Kein Lebenslauf</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-amber-500" />DSGVO-konform</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
