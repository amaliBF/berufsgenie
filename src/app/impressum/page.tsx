import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Impressum - Berufsgenie',
  description: 'Impressum von Berufsgenie.de',
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-stone-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Startseite
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-amber-400 font-medium">Impressum</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold">Impressum</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl border border-stone-100 p-8 sm:p-12 warm-card">
          <p className="mb-6 text-lg text-stone-700">
            <strong className="text-stone-900">berufsgenie.de</strong> ist eine Marke der Butterflies IT UG (haftungsbeschränkt).
          </p>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            Angaben gemäß 5 DDG
          </div>

          <div className="space-y-6 text-stone-700">
            <p>
              <strong className="text-stone-900">Butterflies IT UG (haftungsbeschränkt)</strong><br />
              Hagenower Str. 73<br />
              19061 Schwerin<br />
              Deutschland
            </p>
            <p>
              <strong className="text-stone-900">Vertreten durch:</strong><br />
              Geschäftsführender Gesellschafter: Andreas Mali
            </p>
            <p>
              <strong className="text-stone-900">Kontakt:</strong><br />
              E-Mail: <a href="mailto:beruf@genieportal.de" className="text-amber-600 hover:underline">beruf@genieportal.de</a>
            </p>
            <p>
              <strong className="text-stone-900">Registereintrag:</strong><br />
              Handelsregister: Amtsgericht Schwerin, HRB 12765
            </p>
            <p>
              <strong className="text-stone-900">Umsatzsteuer-ID:</strong><br />
              USt-IdNr. gemäß 27a UStG: DE301178757
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            Verantwortlich für den Inhalt
          </div>

          <div className="space-y-6 text-stone-700">
            <p className="text-sm text-stone-500 mb-2">nach 18 Abs. 2 MStV</p>
            <p>
              Andreas Mali<br />
              Hagenower Str. 73<br />
              19061 Schwerin
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            EU-Streitschlichtung
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            Verbraucherstreitbeilegung
          </div>

          <p className="text-stone-700">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            Haftung für Inhalte
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Als Diensteanbieter sind wir gemäß 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
              der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            Haftung für Links
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
              verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
              einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
              Links umgehend entfernen.
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            Urheberrecht
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
              Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
              auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>

          <p className="mt-10 text-sm text-stone-500 border-t border-stone-100 pt-6">Stand: Februar 2026</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
