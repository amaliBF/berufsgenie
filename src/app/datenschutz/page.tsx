import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung - Berufsgenie',
  description: 'Datenschutzerklärung von Berufsgenie.de',
};

export default function DatenschutzPage() {
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
            <span className="text-amber-400 font-medium">Datenschutzerklärung</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold">Datenschutzerklärung</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl border border-stone-100 p-8 sm:p-12 warm-card">
          <p className="mb-6 text-lg text-stone-700">
            <strong className="text-stone-900">berufsgenie.de</strong> ist eine Marke der Butterflies IT UG (haftungsbeschränkt).
          </p>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            1. Verantwortlicher
          </div>

          <div className="text-stone-700">
            <p>
              Butterflies IT UG (haftungsbeschränkt)<br />
              Vertreten durch: Andreas Mali<br />
              Hagenower Str. 73, 19061 Schwerin<br />
              E-Mail: <a href="mailto:kontakt@berufsgenie.de" className="text-amber-600 hover:underline">kontakt@berufsgenie.de</a>
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            2. Übersicht der Verarbeitungen
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung
              zusammen und verweist auf die betroffenen Personen.
            </p>
            <p>
              <strong className="text-stone-900">Arten der verarbeiteten Daten:</strong>
            </p>
            <ul className="list-disc list-inside mb-4 mt-1 space-y-1">
              <li>Bestandsdaten (z.B. Namen, Adressen, Geburtsdatum)</li>
              <li>Inhaltsdaten (z.B. Profilinformationen, Videos, Chat-Nachrichten)</li>
              <li>Kontaktdaten (z.B. E-Mail-Adressen)</li>
              <li>Standortdaten (z.B. PLZ, Stadt für regionale Suche)</li>
              <li>Meta-/Kommunikationsdaten (z.B. IP-Adressen)</li>
              <li>Nutzungsdaten (z.B. besuchte Seiten, Swipe-Verhalten, Zugriffszeit)</li>
              <li>Zahlungsdaten (z.B. bei PayPal-Transaktionen, nur für Betriebe)</li>
            </ul>
            <p>
              <strong className="text-stone-900">Kategorien betroffener Personen:</strong> Jobsuchende Nutzer, Arbeitgeber, Interessenten.
            </p>
            <p>
              <strong className="text-stone-900">Zwecke der Verarbeitung:</strong>
            </p>
            <ul className="list-disc list-inside mb-4 mt-1 space-y-1">
              <li>Erbringung der Matching-Plattform und Kundenservice</li>
              <li>Bereitstellung des Video-Feeds und Matching-Systems</li>
              <li>Chat-Kommunikation zwischen gematchten Nutzern und Betrieben</li>
              <li>KI-gestützte Berufsempfehlungen</li>
              <li>Kontaktanfragen und Kommunikation</li>
              <li>Sicherheitsmaßnahmen und Jugendschutz</li>
            </ul>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            3. Rechtsgrundlagen
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir
              personenbezogene Daten verarbeiten:
            </p>
            <ul className="list-disc list-inside mb-4 mt-2 space-y-1">
              <li><strong className="text-stone-900">Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)</strong> - Die betroffene Person hat ihre Einwilligung gegeben.</li>
              <li><strong className="text-stone-900">Vertragserfüllung (Art. 6 Abs. 1 S. 1 lit. b DSGVO)</strong> - Verarbeitung ist für die Erfüllung eines Vertrags erforderlich.</li>
              <li><strong className="text-stone-900">Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c DSGVO)</strong> - Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich.</li>
              <li><strong className="text-stone-900">Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO)</strong> - Verarbeitung ist zur Wahrung berechtigter Interessen erforderlich.</li>
            </ul>
            <p>
              <strong className="text-stone-900">Besonderer Hinweis zu minderjährigen Nutzern:</strong> Bei Nutzern unter 16 Jahren ist die
              Einwilligung der Erziehungsberechtigten gemäß Art. 8 DSGVO erforderlich. Wir fordern diese
              Einwilligung bei der Registrierung ein.
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            4. Sicherheitsmaßnahmen
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik,
              der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung
              sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und
              Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem
              Risiko angemessenes Schutzniveau zu gewährleisten.
            </p>
            <p>
              Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit
              von Daten durch Kontrolle des physischen Zugangs zu den Daten, als auch des sie betreffenden Zugriffs,
              der Eingabe, Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Die personenbezogenen
              Daten werden über eine SSL-verschlüsselte Verbindung übertragen. Passwörter werden ausschließlich
              verschlüsselt (gehasht) gespeichert.
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            5. Datenverarbeitung bei Registrierung und Nutzung
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              <strong className="text-stone-900">Für Jugendliche (Azubi-Suchende):</strong><br />
              Bei der Registrierung werden folgende Daten erhoben: E-Mail-Adresse, Passwort (verschlüsselt gespeichert),
              Geburtsdatum, Standort (PLZ/Stadt). Optional: Name, Interessen, Stärken, bevorzugte Berufsfelder,
              Profilbild/Video.
            </p>
            <p>
              <strong className="text-stone-900">Für Betriebe:</strong><br />
              Firmenname, Ansprechpartner, E-Mail-Adresse, Passwort (verschlüsselt), Firmenadresse,
              Branche, Logo. Optional: Beschreibungstexte, Videos von Azubis, Stellenanzeigen.
            </p>
            <p>
              <strong className="text-stone-900">Zweck:</strong> Bereitstellung des Benutzerkontos, Matching zwischen Jugendlichen und Betrieben,
              Anzeige im Video-Feed, Chat-Kommunikation nach erfolgtem Match.
            </p>
            <p>
              <strong className="text-stone-900">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
            </p>
            <p>
              <strong className="text-stone-900">Speicherdauer:</strong> Bis zur Löschung des Kontos durch den Nutzer oder auf Anfrage.
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            6. Video-Inhalte
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Betriebe können Kurzvideos (30-90 Sekunden) hochladen, die echte Azubis bei der Arbeit zeigen.
              Diese Videos werden auf unseren Servern gespeichert und im Feed der jugendlichen Nutzer angezeigt.
              Videos werden vor der Veröffentlichung auf Qualitäts- und Jugendschutzkriterien geprüft.
            </p>
            <p>
              <strong className="text-stone-900">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) und Art. 6 Abs. 1 lit. a DSGVO
              (Einwilligung der im Video gezeigten Personen).
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            7. Matching und Swipe-Daten
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Wir speichern Swipe-Entscheidungen (Like/Pass) und daraus resultierende Matches, um die
              Kernfunktionalität der Plattform bereitzustellen. Diese Daten werden zur Verbesserung
              der Empfehlungen verwendet.
            </p>
            <p>
              <strong className="text-stone-900">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            8. KI-Berufsfinder
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Unser KI-gestützter Berufsfinder stellt Nutzern Fragen zu Interessen und Stärken und
              schlägt passende Berufe vor. Die Eingaben werden zur Erstellung der Empfehlung
              verarbeitet und im Nutzerkonto gespeichert.
            </p>
            <p>
              <strong className="text-stone-900">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
            </p>
            <p>
              Es findet keine automatisierte Entscheidungsfindung im Sinne des Art. 22 DSGVO statt.
              Die KI gibt lediglich unverbindliche Empfehlungen.
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            9. Zahlungsabwicklung
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Die Zahlungsabwicklung für Betriebe-Abonnements erfolgt über PayPal. Bei Nutzung von PayPal werden
              Zahlungsdaten direkt an PayPal übermittelt. Es gelten die{' '}
              <a href="https://www.paypal.com/de/legalhub/privacy-full" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">
                Datenschutzbestimmungen von PayPal
              </a>.
              Für jugendliche Nutzer ist die Plattform kostenlos; es werden keine Zahlungsdaten erhoben.
            </p>
            <p>
              <strong className="text-stone-900">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            10. Kontaktformular und E-Mail-Kontakt
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Bei Nutzung des Kontaktformulars werden Ihre Daten (Name, E-Mail, Nachricht) ausschließlich zur
              Bearbeitung Ihrer Anfrage verarbeitet.
            </p>
            <p>
              <strong className="text-stone-900">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).
            </p>
            <p>
              <strong className="text-stone-900">Speicherdauer:</strong> Anfragen werden nach Abschluss der Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            11. Hosting und Serverlogfiles
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Diese Website wird bei <strong className="text-stone-900">IONOS SE</strong> gehostet.
            </p>
            <p>
              Anbieter: IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland<br />
              Serverstandort: Deutschland (EU)<br />
              Verarbeitete Daten: IP-Adresse, Browsertyp, Zugriffszeit, angeforderte Seiten (Server-Logfiles)<br />
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br />
              Datenschutzerklärung:{' '}
              <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">
                https://www.ionos.de/terms-gtc/datenschutzerklaerung/
              </a>
            </p>
            <p>
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit IONOS geschlossen, der gewährleistet,
              dass personenbezogene Daten nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet werden.
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            12. Cookies
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Wir setzen technisch notwendige Cookies ein, um die Funktionalität der Website zu gewährleisten
              (z.B. Session-Cookies für den Login-Bereich, JWT-Tokens für die Authentifizierung).
            </p>
            <p>
              <strong className="text-stone-900">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
            <p>
              Tracking-Cookies oder Marketing-Cookies werden nur mit ausdrücklicher Einwilligung gesetzt.
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            Externe Dienste und Datenverarbeitung
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              <strong className="text-stone-900">Datenverarbeitung ausschließlich in der EU</strong>
            </p>
            <p>
              Wir legen großen Wert auf den Schutz Ihrer Daten. Alle von uns eingesetzten Dienste und Server
              befinden sich <strong className="text-stone-900">ausschließlich innerhalb der Europäischen Union</strong>. Es findet keine
              Übermittlung personenbezogener Daten in Drittländer (außerhalb der EU/EWR) statt.
            </p>
            <ul className="list-disc list-inside mb-4 mt-2 space-y-1">
              <li><strong className="text-stone-900">Webserver:</strong> Deutschland (IONOS)</li>
              <li><strong className="text-stone-900">E-Mail-Versand:</strong> Deutschland/Frankreich (Brevo)</li>
              <li><strong className="text-stone-900">Video-CDN:</strong> EU-Server (BunnyCDN)</li>
              <li><strong className="text-stone-900">Datenbank:</strong> Deutschland (IONOS)</li>
            </ul>

            <p>
              <strong className="text-stone-900">E-Mail-Versand (Brevo)</strong>
            </p>
            <p>
              Für den Versand von E-Mails (z.B. Registrierungsbestätigungen, Benachrichtigungen,
              Passwort-Zurücksetzen) nutzen wir den Dienst <strong className="text-stone-900">Brevo</strong> (ehemals Sendinblue).
            </p>
            <p>
              Anbieter: Sendinblue GmbH, Köpenicker Straße 126, 10179 Berlin, Deutschland<br />
              Serverstandort: EU (Deutschland/Frankreich)<br />
              Verarbeitete Daten: E-Mail-Adresse, Name, E-Mail-Inhalt<br />
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)<br />
              Datenschutzerklärung:{' '}
              <a href="https://www.brevo.com/de/legal/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">
                https://www.brevo.com/de/legal/privacypolicy/
              </a>
            </p>
            <p>
              Der E-Mail-Versand erfolgt zentral über die Domain genieportal.de
              (Absender: noreply@genieportal.de, Antworten: support@genieportal.de).
            </p>

            <p>
              <strong className="text-stone-900">Video-Hosting und Content Delivery (BunnyCDN)</strong>
            </p>
            <p>
              Für das Hosting und die Auslieferung von Videos nutzen wir den Dienst <strong className="text-stone-900">BunnyCDN</strong>.
            </p>
            <p>
              Anbieter: BunnyWay d.o.o., Cesta komandanta Staneta 4A, 1215 Medvode, Slowenien<br />
              Serverstandort: EU<br />
              Verarbeitete Daten: IP-Adresse, Browsertyp, abgerufene Inhalte<br />
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br />
              Datenschutzerklärung:{' '}
              <a href="https://bunny.net/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">
                https://bunny.net/privacy
              </a>
            </p>
            <p>
              Videos werden über die Domain <strong className="text-stone-900">cdn.genieportal.de</strong> ausgeliefert.
            </p>

            <p>
              <strong className="text-stone-900">Zentrale Dienste über genieportal.de</strong>
            </p>
            <p>
              Diese Website ist Teil des Genie-Netzwerks. Folgende Dienste werden zentral über
              genieportal.de bereitgestellt:
            </p>
            <ul className="list-disc list-inside mb-4 mt-2 space-y-1">
              <li>E-Mail-Versand (noreply@genieportal.de)</li>
              <li>Video-Hosting (cdn.genieportal.de)</li>
              <li>API-Dienste (api.genieportal.de)</li>
            </ul>
            <p>
              Verantwortlich: Butterflies IT UG (haftungsbeschränkt), Hagenower Str. 73, 19061 Schwerin,
              E-Mail: info@genieportal.de
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            13. Ihre Rechte als betroffene Person
          </div>

          <div className="space-y-4 text-stone-700">
            <p>Ihnen stehen folgende Rechte zu:</p>
            <ul className="list-disc list-inside mb-4 mt-2 space-y-1">
              <li><strong className="text-stone-900">Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über Ihre gespeicherten Daten zu erhalten.</li>
              <li><strong className="text-stone-900">Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie haben das Recht auf Berichtigung unrichtiger Daten.</li>
              <li><strong className="text-stone-900">Löschungsrecht (Art. 17 DSGVO):</strong> Sie haben das Recht auf Löschung Ihrer Daten (&bdquo;Recht auf Vergessenwerden&ldquo;).</li>
              <li><strong className="text-stone-900">Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung zu verlangen.</li>
              <li><strong className="text-stone-900">Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in einem gängigen Format zu erhalten.</li>
              <li><strong className="text-stone-900">Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, der Verarbeitung zu widersprechen.</li>
              <li><strong className="text-stone-900">Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.</li>
              <li><strong className="text-stone-900">Beschwerderecht (Art. 77 DSGVO):</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren.</li>
            </ul>
            <p>
              Zuständige Aufsichtsbehörde für Mecklenburg-Vorpommern:<br />
              Der Landesbeauftragte für Datenschutz und Informationsfreiheit Mecklenburg-Vorpommern<br />
              Werderstraße 74a, 19055 Schwerin<br />
              <a href="https://www.datenschutz-mv.de" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">www.datenschutz-mv.de</a>
            </p>
          </div>

          <div className="magazine-divider text-sm font-semibold text-amber-700 uppercase tracking-wider my-8">
            14. Änderung dieser Datenschutzerklärung
          </div>

          <p className="text-stone-700">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
            Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch
            gilt dann die neue Datenschutzerklärung.
          </p>

          <p className="mt-10 text-sm text-stone-500 border-t border-stone-100 pt-6">Stand: Februar 2026</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
