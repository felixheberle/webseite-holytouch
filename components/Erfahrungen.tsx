const testimonials = [
  {
    quote: '„Marisha schafft einen Raum, in dem man sich sicher, gesehen und gut begleitet fühlt. Mit jeder Sitzung wurde ich ruhiger und klarer."',
    name: 'Susann B.',
  },
  {
    quote: '„Einfühlsam, wahnsinnig wohltuend. Fühle mich danach immer, wie ein neuer Mensch."',
    name: 'Maike D.',
  },
  {
    quote: '„Ein nährendes und wunder-volles Erlebnis... eine liebevolle Seele und erleuchtende Worte."',
    name: 'Claudia B.',
  },
];

export default function Erfahrungen() {
  return (
    <section
      style={{
        backgroundColor: 'var(--c-bg)',
        padding: 'clamp(5rem, 8vw, 7rem) 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          className="section-label"
          style={{
            textAlign: 'center',
            marginBottom: 'clamp(3rem, 5vw, 5rem)',
          }}
        >
          Erfahrungen
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(2.5rem, 4vw, 4rem)',
          }}
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  color: 'var(--c-gold)',
                  fontSize: '0.9rem',
                  letterSpacing: '0.2em',
                  marginBottom: '1.75rem',
                  opacity: 0.85,
                }}
                aria-label="5 von 5 Sternen"
              >
                ★★★★★
              </div>

              <blockquote
                className="font-display"
                style={{
                  fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
                  lineHeight: 1.55,
                  color: 'oklch(93% 0.012 85)',
                  margin: 0,
                  marginBottom: '2rem',
                  fontStyle: 'normal',
                }}
              >
                {t.quote}
              </blockquote>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginTop: 'auto',
                }}
              >
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'oklch(88% 0.012 85)',
                    margin: 0,
                  }}
                >
                  — {t.name}
                </p>
                <p
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--c-gold)',
                    opacity: 0.65,
                    margin: 0,
                  }}
                >
                  Google Rezension
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
