import {
  Video,
  Heart,
  MessageCircle,
  Brain,
  Building2,
  Users,
  ArrowRight,
  Check,
  Star,
  Zap,
  Shield,
  ChevronRight,
  Quote,
  Briefcase,
  Monitor,
  Wrench,
  Stethoscope,
  TrendingUp,
  GraduationCap,
  Truck,
  UtensilsCrossed,
  Factory,
  Leaf,
  Scale,
  Palette,
} from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Berufsgenie',
  url: 'https://berufsgenie.de',
  description:
    'Die innovative Jobbörse mit Video-Bewerbungen, Swipe-Matching und KI-Jobfinder. Finde deinen Traumjob per Swipe – kostenlos für Bewerber.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    description: 'Kostenlos für Bewerber',
  },
  creator: {
    '@type': 'Organization',
    name: 'Butterflies IT UG (haftungsbeschränkt)',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hagenower Str. 73',
      addressLocality: 'Schwerin',
      postalCode: '19061',
      addressCountry: 'DE',
    },
  },
};

const jsonLdJobPosting = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Berufsgenie',
  url: 'https://berufsgenie.de',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://berufsgenie.de/jobs?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdJobPosting) }}
      />

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-1.5 text-sm text-violet-700 mb-8">
            <Zap className="h-4 w-4" />
            <span>Die neue Art, Jobs zu finden</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 max-w-5xl mx-auto">
            Finde deinen{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
              Traumjob
            </span>{' '}
            &ndash; per Swipe!
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Die innovative Jobbörse mit 30-Sekunden-Unternehmensvideos, Swipe-Matching und KI-Jobfinder.
            Lerne Arbeitgeber authentisch kennen, bevor du dich bewirbst. Für Festanstellungen, Karrierewechsel und Quereinstiege.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#so-funktionierts"
              className="rounded-full bg-gray-900 px-8 py-3.5 text-base font-medium text-white hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              App kommt bald
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="https://dashboard.berufsgenie.de/login"
              className="rounded-full border-2 border-gray-200 px-8 py-3.5 text-base font-medium text-gray-700 hover:border-gray-300 transition-colors flex items-center gap-2"
            >
              <Building2 className="h-4 w-4" />
              Als Arbeitgeber registrieren
            </Link>
          </div>

          {/* Stats with Icons */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center mb-2">
                <Video className="h-5 w-5 text-violet-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">30s</p>
              <p className="text-sm text-gray-500 mt-1">Unternehmensvideos</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center mb-2">
                <Briefcase className="h-5 w-5 text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">1 Mio+</p>
              <p className="text-sm text-gray-500 mt-1">Jobs deutschlandweit</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-2">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">0 EUR</p>
              <p className="text-sm text-gray-500 mt-1">Kostenlos für Bewerber</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Jobsuche, die begeistert
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Keine endlosen Stellenanzeigen mehr. Erlebe Unternehmen live in kurzen Videos und finde per Swipe deinen perfekten Arbeitgeber.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Video,
                title: 'Video-Bewerbung',
                description:
                  'Unternehmen zeigen sich in 30-Sekunden-Videos: Arbeitsalltag, Team, Kultur. Authentisch statt Hochglanz-Floskeln.',
                color: 'bg-violet-100 text-violet-600',
              },
              {
                icon: Heart,
                title: 'Swipe-Matching',
                description:
                  'Swipe rechts, wenn ein Unternehmen dich anspricht. Matched es auch mit dir, entsteht eine direkte Verbindung.',
                color: 'bg-purple-100 text-purple-600',
              },
              {
                icon: Brain,
                title: 'KI-Jobfinder',
                description:
                  'Unsere KI analysiert deine Stärken, Erfahrungen und Wünsche und schlägt dir passende Stellen vor.',
                color: 'bg-amber-100 text-amber-600',
              },
              {
                icon: MessageCircle,
                title: 'Direkt-Chat',
                description:
                  'Nach dem Match chattest du direkt mit dem Unternehmen. Kein Anschreiben, keine Warteschleife.',
                color: 'bg-blue-100 text-blue-600',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} mb-5`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 sm:p-12 border border-violet-100">
            <Quote className="absolute top-6 left-6 h-10 w-10 text-violet-200" />
            <div className="relative text-center">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed italic max-w-2xl mx-auto">
                &ldquo;Nach drei Monaten erfolgloser Jobsuche auf klassischen Portalen habe ich Berufsgenie ausprobiert.
                Die Videos haben mir sofort gezeigt, wie das Team und der Arbeitsalltag wirklich aussehen.
                Nach zwei Wochen hatte ich meinen neuen Job &ndash; per Swipe und Chat, ganz ohne Anschreiben.&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-200 text-violet-700 font-bold text-sm">
                  SK
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900 text-sm">Sarah K.</p>
                  <p className="text-sm text-gray-500">Marketing Managerin, Quereinstieg aus dem Einzelhandel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="so-funktionierts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              So funktioniert&apos;s
            </h2>
            <p className="mt-4 text-lg text-gray-600">In 4 einfachen Schritten zum neuen Job</p>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Connecting line (lg only) */}
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-violet-200 via-purple-200 to-violet-200" />

            {[
              {
                step: '1',
                title: 'Profil erstellen',
                description: 'Berufserfahrung, Stärken und Wunschjob angeben – in wenigen Minuten.',
              },
              {
                step: '2',
                title: 'Videos schauen',
                description: 'Scrolle durch Kurzvideos von Unternehmen und erlebe den Arbeitsalltag live.',
              },
              {
                step: '3',
                title: 'Swipen & Matchen',
                description: 'Like Unternehmen, die dich begeistern. Matched es auch, entsteht der Kontakt.',
              },
              {
                step: '4',
                title: 'Direkt-Chat starten',
                description: 'Chatte direkt mit HR oder dem Team – ohne Anschreiben, ohne Warteschleife.',
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white text-2xl font-bold flex items-center justify-center mx-auto relative z-10">
                  {item.step}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Employers Section */}
      <section id="fuer-arbeitgeber" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-violet-300 mb-6">
                <Building2 className="h-4 w-4" />
                Für Arbeitgeber
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Finden Sie die{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                  besten Talente
                </span>{' '}
                mit Videos statt Floskeln
              </h2>
              <p className="mt-6 text-lg text-gray-300">
                Klassische Stellenanzeigen gehen im Überangebot unter.
                Mit Berufsgenie präsentieren Sie Ihr Unternehmen mit authentischen Kurzvideos
                und erreichen motivierte Fachkräfte, Quereinsteiger und Berufseinsteiger per Matching.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  '30-Sekunden-Unternehmensvideos hochladen',
                  'Qualifizierte Kandidaten per Swipe matchen',
                  'Direkter Chat nach erfolgreichem Match',
                  'Analytics-Dashboard mit Bewerber-Insights',
                  'Team-Verwaltung für HR-Abteilungen',
                  'Stellenanzeigen mit Video-Integration',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-violet-400 flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://dashboard.berufsgenie.de/login"
                className="inline-flex items-center gap-2 mt-10 rounded-full bg-violet-600 px-8 py-3.5 text-base font-medium text-white hover:bg-violet-500 transition-colors"
              >
                Jetzt kostenlos starten
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: 'Kandidaten', value: 'Unbegrenzt sichtbar' },
                { icon: Video, label: 'Videos', value: 'Bis zu 10 Videos' },
                { icon: MessageCircle, label: 'Chat', value: 'Direktnachrichten' },
                { icon: Star, label: 'Analytics', value: 'Vollständige Insights' },
                { icon: Briefcase, label: 'Stellenanzeigen', value: 'Unbegrenzt schalten' },
                { icon: TrendingUp, label: 'Reichweite', value: 'Maximale Sichtbarkeit' },
              ].map((card) => (
                <div
                  key={card.label}
                  className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
                >
                  <card.icon className="h-8 w-8 text-violet-400 mb-3" />
                  <p className="font-semibold">{card.label}</p>
                  <p className="text-sm text-gray-400 mt-1">{card.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Branchen Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Jobs in allen Branchen
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Ob IT, Handwerk, Gesundheit oder Finanzen &ndash; finde Stellenangebote in der Branche, die zu dir passt.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: Monitor, name: 'IT & Software', jobs: '120.000+ Jobs', color: 'bg-violet-50 text-violet-600 border-violet-100' },
              { icon: Wrench, name: 'Handwerk & Technik', jobs: '95.000+ Jobs', color: 'bg-orange-50 text-orange-600 border-orange-100' },
              { icon: Stethoscope, name: 'Gesundheit & Pflege', jobs: '110.000+ Jobs', color: 'bg-red-50 text-red-600 border-red-100' },
              { icon: TrendingUp, name: 'Finanzen & Versicherung', jobs: '65.000+ Jobs', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
              { icon: Factory, name: 'Industrie & Produktion', jobs: '85.000+ Jobs', color: 'bg-slate-50 text-slate-600 border-slate-100' },
              { icon: Truck, name: 'Logistik & Transport', jobs: '70.000+ Jobs', color: 'bg-blue-50 text-blue-600 border-blue-100' },
              { icon: UtensilsCrossed, name: 'Gastronomie & Hotellerie', jobs: '55.000+ Jobs', color: 'bg-amber-50 text-amber-600 border-amber-100' },
              { icon: GraduationCap, name: 'Bildung & Soziales', jobs: '60.000+ Jobs', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
              { icon: Scale, name: 'Recht & Verwaltung', jobs: '45.000+ Jobs', color: 'bg-purple-50 text-purple-600 border-purple-100' },
              { icon: Palette, name: 'Marketing & Kreativ', jobs: '50.000+ Jobs', color: 'bg-pink-50 text-pink-600 border-pink-100' },
              { icon: Leaf, name: 'Energie & Umwelt', jobs: '35.000+ Jobs', color: 'bg-green-50 text-green-600 border-green-100' },
              { icon: Building2, name: 'Bau & Immobilien', jobs: '40.000+ Jobs', color: 'bg-yellow-50 text-yellow-600 border-yellow-100' },
            ].map((branche) => (
              <Link
                key={branche.name}
                href={`/branchen/${branche.name.toLowerCase().replace(/\s*&\s*/g, '-').replace(/\s+/g, '-')}`}
                className={`flex flex-col items-center p-6 rounded-2xl border ${branche.color} hover:shadow-md transition-all hover:-translate-y-0.5 group`}
              >
                <branche.icon className="h-8 w-8 mb-3" />
                <h3 className="font-semibold text-gray-900 text-sm text-center">{branche.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{branche.jobs}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Links Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Mehr entdecken
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Alles rund um deine Karriere bei Berufsgenie
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Für Jobsuchende',
                description: 'So findest du deinen Traumjob per Swipe. Kostenlos, ohne Anschreiben, mit Video-Einblicken in echte Unternehmen.',
                href: '/fuer-jobsuchende',
                icon: Heart,
                gradient: 'from-violet-500 to-purple-600',
              },
              {
                title: 'Alle Branchen',
                description: 'IT, Handwerk, Gesundheit, Finanzen und mehr. Entdecke Stellenangebote in deiner Branche.',
                href: '/branchen',
                icon: Briefcase,
                gradient: 'from-purple-500 to-violet-600',
              },
              {
                title: 'Karriere-Ratgeber',
                description: 'Tipps für Bewerbung, Gehaltsverhandlung, Vorstellungsgespräch und Karrierewechsel.',
                href: '/ratgeber',
                icon: GraduationCap,
                gradient: 'from-blue-500 to-indigo-600',
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} text-white mb-5`}>
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-violet-600 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
                <span className="inline-flex items-center gap-1 text-violet-600 font-medium mt-4 text-sm group-hover:gap-2 transition-all">
                  Mehr erfahren
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Bereit für deinen Traumjob?
          </h2>
          <p className="mt-4 text-xl text-white/80">
            Die App kommt bald. Arbeitgeber können sich jetzt schon registrieren und ihr Unternehmensprofil mit Videos anlegen.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://dashboard.berufsgenie.de/login"
              className="rounded-full bg-white px-8 py-3.5 text-base font-medium text-violet-600 hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Building2 className="h-4 w-4" />
              Als Arbeitgeber registrieren
            </Link>
            <a
              href="#features"
              className="rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-medium text-white hover:border-white/60 transition-colors flex items-center gap-2"
            >
              Mehr erfahren
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
