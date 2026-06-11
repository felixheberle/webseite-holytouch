import { FadeIn } from './FadeIn'

const anamnese = {
  name: 'Erstgespräch',
  detail: '2 Stunden',
  price: '200 €',
}

const einzelsitzung = {
  name: 'Einzelsitzung',
  variants: [
    { detail: '1,5 Stunden', price: '150 €' },
    { detail: '2 Stunden', price: '200 €' },
  ],
}

export function Angebot() {
  const labelStyle = {
    color: 'oklch(86% 0.01 85)',
    fontSize: '1rem',
    marginBottom: '0.5rem',
  } as const

  const detailStyle = {
    fontSize: 'clamp(1.125rem, 1.5vw, 1.35rem)',
    color: 'oklch(78% 0.01 80)',
    lineHeight: 1.5,
  } as const

  const priceStyle = {
    fontSize: 'clamp(1.625rem, 2.1vw, 2rem)',
    color: 'oklch(67% 0.08 88)',
    lineHeight: 1,
  } as const

  return (
    <section
      style={{
        backgroundColor: 'oklch(18% 0.05 130)',
        padding: 'clamp(5rem, 10vw, 9rem) 2.5rem',
        borderTop: '1px solid oklch(67% 0.08 88 / 0.1)',
      }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <FadeIn>
          <p
            className="section-label"
            style={{ color: 'oklch(67% 0.08 88)', marginBottom: '2rem' }}
          >
            Begleitung
          </p>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3.25rem)',
              lineHeight: 1.08,
              color: 'oklch(93% 0.012 85)',
              marginBottom: '2.5rem',
            }}
          >
            So arbeiten
            <br />
            wir zusammen.
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)',
              lineHeight: 1.7,
              color: 'oklch(75% 0.01 80)',
              maxWidth: '54ch',
              marginBottom: 'clamp(3.5rem, 7vw, 6rem)',
            }}
          >
            Nachhaltige Lösungen zeigen sich erfahrungsgemäß über fünf bis zehn Sessions hinweg.
          </p>

          <hr className="rule" style={{ marginBottom: 0 }} />

          <ul style={{ listStyle: 'none' }}>
            {/* Anamnese - Einzeleintrag */}
            <li>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '2rem',
                  padding: 'clamp(1.75rem, 3vw, 2.5rem) 0',
                }}
              >
                <div>
                  <p className="section-label" style={labelStyle}>
                    {anamnese.name}
                  </p>
                  <p style={detailStyle}>{anamnese.detail}</p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <p className="font-display" style={priceStyle}>
                    {anamnese.price}
                  </p>
                </div>
              </div>
              <hr className="rule" />
            </li>

            {/* Einzelsitzung - Gruppe mit drei Varianten */}
            <li>
              <div style={{ padding: 'clamp(1.75rem, 3vw, 2.5rem) 0' }}>
                <p
                  className="section-label"
                  style={{ ...labelStyle, marginBottom: '1.5rem' }}
                >
                  {einzelsitzung.name}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.875rem',
                  }}
                >
                  {einzelsitzung.variants.map((v) => (
                    <div
                      key={v.detail}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        gap: '2rem',
                      }}
                    >
                      <p style={detailStyle}>{v.detail}</p>
                      <p className="font-display" style={priceStyle}>
                        {v.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
