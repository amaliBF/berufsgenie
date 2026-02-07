import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'AGB - Berufsgenie',
  description: 'Allgemeine Geschäftsbedingungen von Berufsgenie.de',
};

export default function AgbPage() {
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
            <span className="text-amber-400 font-medium">AGB</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold">Allgemeine Geschäftsbedingungen (AGB)</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl border border-stone-100 p-8 sm:p-12 warm-card">

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            1. Geltungsbereich
          </div>

          <p className="text-stone-700">
            Diese AGB gelten für alle Verträge über die Nutzung der Plattform berufsgenie.de
            zwischen der Butterflies IT UG (haftungsbeschränkt), Hagenower Str. 73, 19061 Schwerin
            (nachfolgend &bdquo;Betreiber&ldquo;) und dem Nutzer. Es wird unterschieden zwischen
            jugendlichen Nutzern (Jobsuchende) und gewerblichen Nutzern (Arbeitgeber).
          </p>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            2. Leistungsbeschreibung
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Berufsgenie ist eine Vermittlungsplattform, die Jobsuchende und Arbeitgeber
              zusammenbringt. Die Plattform umfasst:
            </p>
            <ul className="list-disc list-inside mb-4 mt-2 space-y-1">
              <li>Einen Video-Feed mit Kurzvideos von Arbeitgebern</li>
              <li>Ein Swipe-basiertes Matching-System zwischen Jobsuchenden und Betrieben</li>
              <li>Eine Chat-Funktion nach erfolgtem Match</li>
              <li>Einen KI-gestützten Berufsfinder</li>
              <li>Ein Dashboard für Betriebe zur Verwaltung von Stellenanzeigen, Videos und Kandidaten</li>
            </ul>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            3. Registrierung und Nutzerkonto
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Für die Nutzung ist eine Registrierung erforderlich. Bei der Registrierung sind wahrheitsgemäße
              Angaben zu machen. Minderjährige Nutzer unter 16 Jahren benötigen die Einwilligung eines
              Erziehungsberechtigten.
            </p>
            <p>
              Jeder Nutzer darf nur ein Konto erstellen. Die Zugangsdaten sind vertraulich zu behandeln.
              Der Nutzer haftet für alle Aktivitäten, die über sein Konto vorgenommen werden.
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            4. Kosten und Abonnements
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              <strong className="text-stone-900">Für Jobsuchende:</strong> Die Nutzung der Plattform ist vollständig kostenlos.
            </p>
            <p>
              <strong className="text-stone-900">Für Betriebe:</strong> Es stehen verschiedene Abonnement-Modelle zur Verfügung
              (Free, Starter, Professional, Enterprise). Die aktuellen Preise sind auf der Preisseite
              einsehbar. Kostenpflichtige Abonnements werden monatlich abgerechnet.
            </p>
            <p>
              Die Zahlung erfolgt per PayPal (PayPal-Guthaben, Kreditkarte, SEPA-Lastschrift o.ä.) vor Leistungserbringung.
              Abonnements verlängern sich automatisch, sofern nicht vor Ablauf der Laufzeit gekündigt wird.
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            5. Widerrufsbelehrung
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              <strong className="text-stone-900">Widerrufsrecht:</strong> Gewerbliche Nutzer (Betriebe) haben als Verbraucher das Recht,
              binnen 14 Tagen ohne Angabe von Gründen den Vertrag zu widerrufen. Die Widerrufsfrist beträgt
              14 Tage ab dem Tag des Vertragsschlusses.
            </p>
            <p>
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Butterflies IT UG, Hagenower Str. 73,
              19061 Schwerin, E-Mail: kontakt@berufsgenie.de) mittels einer eindeutigen Erklärung
              über Ihren Entschluss informieren.
            </p>
            <p>
              Das Widerrufsrecht erlischt bei digitalen Inhalten vorzeitig, wenn der Nutzer ausdrücklich
              zugestimmt hat, dass mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist begonnen
              wird (§ 356 Abs. 5 BGB).
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            6. Pflichten der Nutzer
          </div>

          <div className="space-y-4 text-stone-700">
            <p>Der Nutzer verpflichtet sich:</p>
            <ul className="list-disc list-inside mb-4 mt-2 space-y-1">
              <li>Keine rechtswidrigen, beleidigenden oder jugendgefährdenden Inhalte zu veröffentlichen</li>
              <li>Keine falschen oder irreführenden Angaben zu machen</li>
              <li>Die Rechte Dritter (insbesondere Urheberrechte, Persönlichkeitsrechte) zu achten</li>
              <li>Die Plattform nicht für andere Zwecke als die bestimmungsgemäße Nutzung zu verwenden</li>
              <li>Keine automatisierten Zugriffe (Bots, Scraper) auf die Plattform durchzuführen</li>
            </ul>
            <p>
              Betriebe stellen sicher, dass für alle in Videos gezeigten Personen eine Einwilligung
              zur Veröffentlichung vorliegt.
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            7. Inhalte und Videos
          </div>

          <p className="text-stone-700">
            Betriebe behalten die Urheberrechte an ihren hochgeladenen Videos. Mit dem Upload räumen sie
            dem Betreiber ein einfaches, nicht-exklusives Nutzungsrecht zur Anzeige der Videos auf der
            Plattform ein. Der Betreiber behält sich das Recht vor, Videos abzulehnen oder zu entfernen,
            die gegen diese AGB, geltendes Recht oder Jugendschutzbestimmungen verstoßen.
          </p>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            8. Haftung
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Der Betreiber vermittelt lediglich den Kontakt zwischen Jobsuchenden und Betrieben.
              Für das Zustandekommen eines Arbeitsvertrags wird keine Haftung übernommen.
            </p>
            <p>
              Die Haftung des Betreibers ist auf Vorsatz und grobe Fahrlässigkeit beschränkt, soweit
              gesetzlich zulässig. Bei leichter Fahrlässigkeit haftet der Betreiber nur bei Verletzung
              wesentlicher Vertragspflichten (Kardinalpflichten), begrenzt auf den vorhersehbaren,
              vertragstypischen Schaden.
            </p>
            <p>
              Der Betreiber übernimmt keine Haftung für die Richtigkeit der von Nutzern oder Betrieben
              bereitgestellten Informationen. Die KI-gestützten Berufsempfehlungen sind unverbindlich
              und stellen keine Berufsberatung dar.
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            9. Kündigung und Kontolöschung
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Jobsuchende Nutzer können ihr Konto jederzeit löschen. Kostenpflichtige Betriebe-Abonnements
              können zum Ende der jeweiligen Laufzeit gekündigt werden.
            </p>
            <p>
              Der Betreiber behält sich das Recht vor, Nutzerkonten bei Verstoß gegen diese AGB zu sperren
              oder zu löschen. Bei Löschung werden personenbezogene Daten gemäß der Datenschutzerklärung
              behandelt.
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            10. Jugendschutz
          </div>

          <p className="text-stone-700">
            Der Betreiber verpflichtet sich zu angemessenen Maßnahmen zum Schutz minderjähriger Nutzer.
            Dazu gehören die Moderation von Inhalten, die Meldung von unangemessenem Verhalten und
            die Möglichkeit, Nutzer zu blockieren. Chat-Nachrichten sind nur nach beidseitigem Match möglich.
          </p>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            11. Datenschutz
          </div>

          <p className="text-stone-700">
            Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer{' '}
            <Link href="/datenschutz" className="text-amber-600 hover:underline">Datenschutzerklärung</Link>.
          </p>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            12. Änderung der AGB
          </div>

          <p className="text-stone-700">
            Der Betreiber behält sich das Recht vor, diese AGB jederzeit anzupassen. Nutzer werden über
            Änderungen per E-Mail oder In-App-Benachrichtigung informiert. Die weitere Nutzung der Plattform
            nach Inkrafttreten der Änderungen gilt als Zustimmung.
          </p>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            13. Anwendbares Recht und Gerichtsstand
          </div>

          <p className="text-stone-700">
            Es findet ausschließlich deutsches Recht Anwendung unter Ausschluss des UN-Kaufrechts.
            Gerichtsstand ist, soweit gesetzlich zulässig, Schwerin.
          </p>

          <p className="mt-10 text-sm text-stone-500 border-t border-stone-100 pt-6">Stand: {new Date().toLocaleDateString('de-DE')}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
