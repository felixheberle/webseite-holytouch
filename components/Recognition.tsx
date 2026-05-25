import { FadeIn } from './FadeIn'

const statements = [
  { text: '„Ich kann nicht mehr runterkommen."', right: false },
  { text: '„Ich spüre meinen Körper nicht mehr."', right: true },
  { text: '„Die Anspannung sitzt seit Jahren. Sie geht nicht weg."', right: false },
]

export function Recognition() {
  return (
    <section
      style={{
        backgroundColor: 'oklch(18% 0.05 130)',
        padding: 'clamp(6rem, 12vw, 11rem) 2.5rem',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(3.5rem, 7vw, 6rem)',
          }}
        >
          {statements.map((s, i) => (
            <FadeIn key={i} delay={i * 90}>
              <div
                className={s.right ? 'flex justify-end' : 'flex'}
              >
                <blockquote
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.75rem, 3.75vw, 3.25rem)',
                    lineHeight: 1.18,
                    color: 'oklch(93% 0.012 85)',
                    maxWidth: '78%',
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {s.text}
                </blockquote>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={360}>
          <div style={{ marginTop: 'clamp(4rem, 8vw, 7rem)' }}>
            <hr className="rule" style={{ marginBottom: '2.25rem' }} />
            <p
              className="section-label"
              style={{
                textAlign: 'center',
                color: 'oklch(67% 0.08 88)',
                letterSpacing: '0.2em',
              }}
            >
              Wenn du dich wiedererkennst, bist du hier richtig.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
