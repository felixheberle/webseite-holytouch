import LegalLayout from '@/components/LegalLayout'

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">

      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          Sarah Marisha Pommerenke<br />
          HolyTouch<br />
          An den Eichen 14<br />
          86949 Windach OT Hechenwang
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: 08152 / 4809056<br />
          E-Mail: marisha@holytouch.com
        </p>
      </section>

      <section>
        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          Sarah Marisha Pommerenke<br />
          An den Eichen 14<br />
          86949 Windach OT Hechenwang
        </p>
      </section>

      <section>
        <h2>Umsatzsteuer</h2>
        <p>
          Keine Umsatzsteuer-Identifikationsnummer, da Kleinunternehmerin
          gemäß § 19 UStG.
        </p>
      </section>

      <section>
        <h2>Berufshaftpflichtversicherung</h2>
        <p>
          Name und Sitz des Versicherers:<br />
          [[PLATZHALTER: Name der Versicherung]]<br />
          [[PLATZHALTER: Straße, PLZ Ort]]
        </p>
        <p>
          Räumlicher Geltungsbereich der Versicherung:<br />
          [[PLATZHALTER: z. B. Deutschland]]
        </p>
      </section>

      <section>
        <h2>Bildnachweise</h2>
        <p>
          Fotografien: © Marlene Etzel, Forenoon Studios<br />
          Logo: Forenoon Studios<br />
          Verwendung nur mit ausdrücklicher Genehmigung.
        </p>
      </section>

      <section>
        <h2>Haftungshinweis</h2>
        <p>
          Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
          erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
          der Inhalte wird keine Gewähr übernommen.
        </p>
      </section>

      <section>
        <h2>Streitbeilegung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-
          Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank"
             rel="noopener noreferrer">
            ec.europa.eu/consumers/odr
          </a>
        </p>
        <p>
          Ich bin nicht bereit oder verpflichtet, an einem Streitbeilegungs-
          verfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

    </LegalLayout>
  )
}
