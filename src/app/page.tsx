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
  Compass,
  Target,
  Award,
  Sparkles,
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

const jsonLdSearch = {
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
    <div className="min-h-screen bg-[#FFFBF5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSearch) }}
      />

      <Header />

      {/* Hero Section – Editorial Style */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 warm-dots opacity-30" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="tag-pill mb-6">
                <Compass className="h-3.5 w-3.5" />
                <span>Die neue Art, Jobs zu finden</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.1]">
                Finde deinen{' '}
                <span className="marker-highlight">Traumjob</span>{' '}
                per Swipe
              </h1>
              <p className="mt-6 text-lg text-stone-600 leading-relaxed max-w-xl">
                Die innovative Jobbörse mit 30-Sekunden-Unternehmensvideos, Swipe-Matching
                und KI-Jobfinder. Lerne Arbeitgeber authentisch kennen, bevor du dich bewirbst.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#so-funktionierts"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-7 py-3.5 text-base font-semibold text-white hover:from-amber-400 hover:to-orange-500 transition-all shadow-lg shadow-amber-500/20"
                >
                  App kommt bald
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="https://dashboard.genieportal.de/register"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-stone-200 px-7 py-3.5 text-base font-semibold text-stone-700 hover:border-amber-300 hover:bg-amber-50 transition-all"
                >
                  <Building2 className="h-4 w-4" />
                  Als Arbeitgeber starten
                </Link>
              </div>
            </div>

            {/* Right side – Magazine Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="warm-card bg-white rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-3">
                    <Video className="h-5 w-5 text-amber-600" />
                  </div>
                  <p className="text-2xl font-bold text-stone-900">30s</p>
                  <p className="text-sm text-stone-500 mt-0.5">Unternehmensvideos</p>
                </div>
                <div className="warm-card bg-white rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mb-3">
                    <Heart className="h-5 w-5 text-orange-600" />
                  </div>
                  <p className="text-2xl font-bold text-stone-900">Swipe</p>
                  <p className="text-sm text-stone-500 mt-0.5">Match mit Arbeitgebern</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="warm-card bg-white rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-3">
                    <Shield className="h-5 w-5 text-emerald-600" />
                  </div>
                  <p className="text-2xl font-bold text-stone-900">0 €</p>
                  <p className="text-sm text-stone-500 mt-0.5">Kostenlos für Bewerber</p>
                </div>
                <div className="warm-card bg-white rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-3">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-stone-900">1 Mio+</p>
                  <p className="text-sm text-stone-500 mt-0.5">Jobs deutschlandweit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section – Feature Boxes with Left Border */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="magazine-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">So funktioniert es</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
              Jobsuche, die <span className="marker-highlight">begeistert</span>
            </h2>
            <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
              Keine endlosen Stellenanzeigen mehr. Erlebe Unternehmen live in kurzen Videos
              und finde per Swipe deinen perfekten Arbeitgeber.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Video,
                title: 'Video-Bewerbung',
                description:
                  'Unternehmen zeigen sich in 30-Sekunden-Videos: Arbeitsalltag, Team, Kultur. Authentisch statt Hochglanz-Floskeln.',
                accent: 'bg-amber-500',
                iconBg: 'bg-amber-100 text-amber-600',
              },
              {
                icon: Heart,
                title: 'Swipe-Matching',
                description:
                  'Swipe rechts, wenn ein Unternehmen dich anspricht. Matched es auch mit dir, entsteht eine direkte Verbindung.',
                accent: 'bg-orange-500',
                iconBg: 'bg-orange-100 text-orange-600',
              },
              {
                icon: Brain,
                title: 'KI-Jobfinder',
                description:
                  'Unsere KI analysiert deine Stärken, Erfahrungen und Wünsche und schlägt dir passende Stellen vor.',
                accent: 'bg-rose-500',
                iconBg: 'bg-rose-100 text-rose-600',
              },
              {
                icon: MessageCircle,
                title: 'Direkt-Chat',
                description:
                  'Nach dem Match chattest du direkt mit dem Unternehmen. Kein Anschreiben, keine Warteschleife.',
                accent: 'bg-emerald-500',
                iconBg: 'bg-emerald-100 text-emerald-600',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="feature-box bg-[#FFFBF5] rounded-xl p-8 hover:shadow-lg transition-all"
                style={{ borderLeft: 'none' }}
              >
                <div className={`absolute left-0 top-0 w-1 h-full rounded-l-xl ${feature.accent}`} />
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.iconBg} mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-stone-900">{feature.title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Quote */}
      <section className="py-16 bg-[#FFFBF5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="editorial-quote">
            <p className="text-xl sm:text-2xl text-stone-700 leading-relaxed italic">
              „Nach drei Monaten erfolgloser Jobsuche auf klassischen Portalen habe ich Berufsgenie ausprobiert.
              Die Videos haben mir sofort gezeigt, wie das Team und der Arbeitsalltag wirklich aussehen.
              Nach zwei Wochen hatte ich meinen neuen Job – per Swipe und Chat, ganz ohne Anschreiben.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-bold text-sm">
                SK
              </div>
              <div>
                <p className="font-semibold text-stone-900 text-sm">Sarah K.</p>
                <p className="text-sm text-stone-500">Marketing Managerin, Quereinstieg aus dem Einzelhandel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works – Magazine Steps */}
      <section id="so-funktionierts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="magazine-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Schritt für Schritt</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
              In 4 Schritten zum <span className="marker-highlight-orange">neuen Job</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Profil erstellen', description: 'Berufserfahrung, Stärken und Wunschjob angeben – in wenigen Minuten.', icon: Target },
              { step: '02', title: 'Videos schauen', description: 'Scrolle durch Kurzvideos von Unternehmen und erlebe den Arbeitsalltag live.', icon: Video },
              { step: '03', title: 'Swipen & Matchen', description: 'Like Unternehmen, die dich begeistern. Matched es auch, entsteht der Kontakt.', icon: Heart },
              { step: '04', title: 'Direkt-Chat starten', description: 'Chatte direkt mit HR oder dem Team – ohne Anschreiben, ohne Warteschleife.', icon: MessageCircle },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <span className="block text-sm font-black text-amber-400 tracking-widest mb-2">{item.step}</span>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20 mx-auto mb-5 group-hover:scale-105 transition-transform">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-stone-900">{item.title}</h3>
                <p className="mt-2 text-stone-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Employers – Warm Dark Section */}
      <section className="py-20 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 warm-dots" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="tag-pill !bg-amber-900/40 !text-amber-300 !border-amber-700/50 mb-6">
                <Building2 className="h-3.5 w-3.5" />
                <span>Für Arbeitgeber</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Finden Sie die{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  besten Talente
                </span>{' '}
                mit Videos statt Floskeln
              </h2>
              <p className="mt-6 text-lg text-stone-300 leading-relaxed">
                Klassische Stellenanzeigen gehen im Überangebot unter.
                Mit Berufsgenie präsentieren Sie Ihr Unternehmen mit authentischen Kurzvideos
                und erreichen motivierte Fachkräfte, Quereinsteiger und Berufseinsteiger per Matching.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  '30-Sekunden-Unternehmensvideos hochladen',
                  'Qualifizierte Kandidaten per Swipe matchen',
                  'Direkter Chat nach erfolgreichem Match',
                  'Analytics-Dashboard mit Bewerber-Insights',
                  'Team-Verwaltung für HR-Abteilungen',
                  'Stellenanzeigen mit Video-Integration',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-stone-200">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://dashboard.genieportal.de/register"
                className="inline-flex items-center gap-2 mt-10 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3.5 text-base font-semibold text-white hover:from-amber-400 hover:to-orange-500 transition-all shadow-lg shadow-amber-500/20"
              >
                Jetzt kostenlos starten
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: 'Kandidaten', value: 'Unbegrenzt sichtbar', color: 'from-amber-500/20 to-amber-600/10' },
                { icon: Video, label: 'Videos', value: 'Bis zu 10 Videos', color: 'from-orange-500/20 to-orange-600/10' },
                { icon: MessageCircle, label: 'Chat', value: 'Direktnachrichten', color: 'from-emerald-500/20 to-emerald-600/10' },
                { icon: Star, label: 'Analytics', value: 'Vollständige Insights', color: 'from-blue-500/20 to-blue-600/10' },
                { icon: Briefcase, label: 'Stellenanzeigen', value: 'Unbegrenzt schalten', color: 'from-rose-500/20 to-rose-600/10' },
                { icon: TrendingUp, label: 'Reichweite', value: 'Maximale Sichtbarkeit', color: 'from-purple-500/20 to-purple-600/10' },
              ].map((card) => (
                <div
                  key={card.label}
                  className={`bg-gradient-to-br ${card.color} backdrop-blur rounded-xl p-6 border border-white/10 hover:border-amber-500/30 transition-colors`}
                >
                  <card.icon className="h-7 w-7 text-amber-400 mb-3" />
                  <p className="font-semibold">{card.label}</p>
                  <p className="text-sm text-stone-400 mt-1">{card.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Branchen – Magazine Grid */}
      <section className="py-20 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="magazine-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Branchen</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
              Jobs in <span className="marker-highlight">allen Branchen</span>
            </h2>
            <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
              Ob IT, Handwerk, Gesundheit oder Finanzen – finde Stellenangebote in der Branche, die zu dir passt.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: Monitor, name: 'IT & Software', jobs: '120.000+ Jobs', color: 'bg-blue-50 text-blue-600 border-blue-100 hover:border-blue-300' },
              { icon: Wrench, name: 'Handwerk & Technik', jobs: '95.000+ Jobs', color: 'bg-orange-50 text-orange-600 border-orange-100 hover:border-orange-300' },
              { icon: Stethoscope, name: 'Gesundheit & Pflege', jobs: '110.000+ Jobs', color: 'bg-red-50 text-red-600 border-red-100 hover:border-red-300' },
              { icon: TrendingUp, name: 'Finanzen & Versicherung', jobs: '65.000+ Jobs', color: 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:border-emerald-300' },
              { icon: Factory, name: 'Industrie & Produktion', jobs: '85.000+ Jobs', color: 'bg-slate-50 text-slate-600 border-slate-100 hover:border-slate-300' },
              { icon: Truck, name: 'Logistik & Transport', jobs: '70.000+ Jobs', color: 'bg-sky-50 text-sky-600 border-sky-100 hover:border-sky-300' },
              { icon: UtensilsCrossed, name: 'Gastronomie & Hotellerie', jobs: '55.000+ Jobs', color: 'bg-amber-50 text-amber-600 border-amber-100 hover:border-amber-300' },
              { icon: GraduationCap, name: 'Bildung & Soziales', jobs: '60.000+ Jobs', color: 'bg-indigo-50 text-indigo-600 border-indigo-100 hover:border-indigo-300' },
              { icon: Scale, name: 'Recht & Verwaltung', jobs: '45.000+ Jobs', color: 'bg-purple-50 text-purple-600 border-purple-100 hover:border-purple-300' },
              { icon: Palette, name: 'Marketing & Kreativ', jobs: '50.000+ Jobs', color: 'bg-pink-50 text-pink-600 border-pink-100 hover:border-pink-300' },
              { icon: Leaf, name: 'Energie & Umwelt', jobs: '35.000+ Jobs', color: 'bg-green-50 text-green-600 border-green-100 hover:border-green-300' },
              { icon: Building2, name: 'Bau & Immobilien', jobs: '40.000+ Jobs', color: 'bg-yellow-50 text-yellow-600 border-yellow-100 hover:border-yellow-300' },
            ].map((branche) => (
              <Link
                key={branche.name}
                href={`/branchen/${branche.name.toLowerCase().replace(/\s*&\s*/g, '-').replace(/\s+/g, '-')}`}
                className={`flex flex-col items-center p-6 rounded-xl border ${branche.color} transition-all hover:-translate-y-0.5 hover:shadow-md group`}
              >
                <branche.icon className="h-8 w-8 mb-3" />
                <h3 className="font-semibold text-stone-900 text-sm text-center">{branche.name}</h3>
                <p className="text-xs text-stone-500 mt-1">{branche.jobs}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">Mehr entdecken</h2>
            <p className="mt-4 text-lg text-stone-600">Alles rund um deine Karriere bei Berufsgenie</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Für Jobsuchende',
                description: 'So findest du deinen Traumjob per Swipe. Kostenlos, ohne Anschreiben, mit Video-Einblicken in echte Unternehmen.',
                href: '/fuer-jobsuchende',
                icon: Heart,
                accent: 'border-l-amber-500',
              },
              {
                title: 'Alle Branchen',
                description: 'IT, Handwerk, Gesundheit, Finanzen und mehr. Entdecke Stellenangebote in deiner Branche.',
                href: '/branchen',
                icon: Briefcase,
                accent: 'border-l-orange-500',
              },
              {
                title: 'Karriere-Ratgeber',
                description: 'Tipps für Bewerbung, Gehaltsverhandlung, Vorstellungsgespräch und Karrierewechsel.',
                href: '/ratgeber',
                icon: Award,
                accent: 'border-l-rose-500',
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className={`group bg-[#FFFBF5] rounded-xl p-8 border border-stone-100 border-l-4 ${card.accent} hover:shadow-lg transition-all hover:-translate-y-1`}
              >
                <card.icon className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2 text-stone-600">{card.description}</p>
                <span className="inline-flex items-center gap-1 text-amber-600 font-semibold mt-4 text-sm group-hover:gap-2 transition-all">
                  Mehr erfahren
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-10 w-10 text-white/60 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Bereit für deinen Traumjob?
          </h2>
          <p className="mt-4 text-xl text-white/80">
            Die App kommt bald. Arbeitgeber können sich jetzt schon registrieren
            und ihr Unternehmensprofil mit Videos anlegen.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://dashboard.genieportal.de/register"
              className="rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-amber-700 hover:bg-stone-50 transition-colors flex items-center gap-2 shadow-lg"
            >
              <Building2 className="h-4 w-4" />
              Als Arbeitgeber registrieren
            </Link>
            <a
              href="#features"
              className="rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:border-white/60 transition-colors flex items-center gap-2"
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
