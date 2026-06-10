'use client'

const testimonials = [
  {
    quote: 'Marisha schafft einen Raum, in dem man sich sicher, gesehen und gut begleitet fühlt. Mit jeder Sitzung wurde ich ruhiger und klarer.',
    name: 'Susann B.',
  },
  {
    quote: 'Einfühlsam, wahnsinnig wohltuend. Fühle mich danach immer, wie ein neuer Mensch.',
    name: 'Maike D.',
  },
  {
    quote: 'Ein nährendes und wundervolles Erlebnis.',
    name: 'Claudia B.',
  },
]

export default function Erfahrungen() {
  return (
    <section
      style={{
        backgroundColor: 'var(--c-bg)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 3rem)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p
          className="section-label"
          style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 8vw, 6rem)' }}
        >
          Erfahrungen
        </p>

        {testimonials.map((t, i) => {
          const alignRight = i % 2 === 1
          return (
            <blockquote
              key={i}
              style={{
                textAlign: alignRight ? 'right' : 'left',
                maxWidth: i === 0 ? '52ch' : i === 1 ? '46ch' : '40ch',
                marginLeft: alignRight ? 'auto' : 0,
                marginRight: alignRight ? 0 : 'auto',
                marginTop: i === 0 ? 0 : 'clamp(4rem, 8vw, 6.5rem)',
              }}
            >
              <p
                className="font-display"
                style={{
                  color: 'var(--c-text)',
                  fontSize: 'clamp(1.4rem, 2.4vw, 2rem)',
                  lineHeight: 1.45,
                  fontStyle: 'italic',
                  marginBottom: '1.5rem',
                }}
              >
                „{t.quote}"
              </p>
              <cite
                style={{
                  color: 'var(--c-gold)',
                  fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
                  fontStyle: 'normal',
                  letterSpacing: '0.05em',
                }}
              >
                — {t.name}
              </cite>
            </blockquote>
          )
        })}
      </div>
    </section>
  )
}
