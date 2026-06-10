import { FadeIn } from './FadeIn'

export function VerstandKoerper() {
  return (
    <section style={{
      backgroundColor: 'oklch(18% 0.05 130)',
      marginTop: 'clamp(4rem, 6vw, 6rem)',
      padding: 'clamp(4rem, 6vw, 6.5rem) clamp(2rem, 5vw, 5.5rem)',
    }}>
      <FadeIn>
        {/* Section label */}
        <p
          className="section-label"
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          Verstand und Körper
        </p>

        {/* Headline */}
        <h2
          className="font-display"
          style={{
            textAlign: 'center',
            fontSize: 'clamp(2rem, 3.5vw, 3.25rem)',
            lineHeight: 1.2,
            color: 'oklch(93% 0.012 85)',
            maxWidth: '24ch',
            margin: '0 auto 5rem',
          }}
        >
          Wenn Verstand und Körper sich{' '}
          <em
            style={{
              color: 'oklch(67% 0.08 88)',
              fontStyle: 'italic',
            }}
          >
            berühren
          </em>
          .
        </h2>

        {/* Two columns with helix in middle */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: 'clamp(2rem, 4vw, 4rem)',
            maxWidth: '950px',
            margin: '0 auto',
            alignItems: 'start',
          }}
        >
          {/* Left column */}
          <div style={{ textAlign: 'center' }}>
            <h3
              className="font-display"
              style={{
                fontSize: 'clamp(1.65rem, 2.5vw, 2.25rem)',
                color: 'oklch(93% 0.012 85)',
                marginBottom: '0.75rem',
              }}
            >
              Verstand
            </h3>
            <p
              className="section-label"
              style={{ marginBottom: '1.5rem' }}
            >
              <span style={{ whiteSpace: 'nowrap' }}>Innere Anteile ·</span>{' '}
              <span style={{ whiteSpace: 'nowrap' }}>Trauma ·</span>{' '}
              <span style={{ whiteSpace: 'nowrap' }}>Persönlichkeitsmuster</span>
            </p>
            <p
              style={{
                fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)',
                lineHeight: 1.7,
                color: 'oklch(88% 0.012 85)',
                fontStyle: 'italic',
                maxWidth: '32ch',
                margin: '0 auto',
              }}
            >
              Wir richten den Blick auf innere Anteile, körperliche Spannungen,
              Persönlichkeitsmuster und unverarbeitete Erlebnisse.
            </p>
          </div>

          {/* Helix symbol */}
          <svg
            viewBox="0 0 220 300"
            fill="none"
            aria-hidden
            width="180"
            height="245"
            style={{ alignSelf: 'center' }}
          >
            <path
              d="M44 6 C 44 60 150 74 110 132 C 88 166 132 176 110 214"
              stroke="oklch(67% 0.08 88)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M176 6 C 176 60 70 74 110 132 C 132 166 88 176 110 214"
              stroke="oklch(67% 0.08 88)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M110 214 C 110 250 110 268 110 294"
              stroke="oklch(67% 0.08 88)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <circle cx="110" cy="214" r="4.5" fill="oklch(67% 0.08 88)" />
          </svg>

          {/* Right column */}
          <div style={{ textAlign: 'center' }}>
            <h3
              className="font-display"
              style={{
                fontSize: 'clamp(1.65rem, 2.5vw, 2.25rem)',
                color: 'oklch(93% 0.012 85)',
                marginBottom: '0.75rem',
              }}
            >
              Körper
            </h3>
            <p
              className="section-label"
              style={{ marginBottom: '1.5rem' }}
            >
              <span style={{ whiteSpace: 'nowrap' }}>Berührung ·</span>{' '}
              <span style={{ whiteSpace: 'nowrap' }}>Massage ·</span>{' '}
              <span style={{ whiteSpace: 'nowrap' }}>Atem ·</span>{' '}
              <span style={{ whiteSpace: 'nowrap' }}>Nervensystem</span>
            </p>
            <p
              style={{
                fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)',
                lineHeight: 1.7,
                color: 'oklch(88% 0.012 85)',
                fontStyle: 'italic',
                maxWidth: '32ch',
                margin: '0 auto',
              }}
            >
              Über Körperberührung und Atem wird spürbar, wo innere Themen
              sich im Körper ausdrücken.
            </p>
          </div>
        </div>

        {/* Synthesis line */}
        <p
          className="font-display"
          style={{
            textAlign: 'center',
            fontSize: 'clamp(1.65rem, 2.8vw, 2.5rem)',
            lineHeight: 1.35,
            color: 'oklch(93% 0.012 85)',
            maxWidth: '50ch',
            margin: '6rem auto 0',
            fontStyle: 'italic',
          }}
        >
          Wenn beides zusammenspielt, wird natürliche Regeneration
          wieder möglich.
        </p>
      </FadeIn>
    </section>
  )
}
