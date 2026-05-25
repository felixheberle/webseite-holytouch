import Image from 'next/image'
import { FadeIn } from './FadeIn'

const credentials = [
  '20 Jahre psychosomatische Körpertherapie',
  'Touch Life Massage',
  'Expressiv-emotionales Entlastungstraining nach Heinrichs & Swoboda',
  'In Ausbildung zur Heilpraktikerin für Psychotherapie',
]

export function Marisha() {
  return (
    <section style={{ backgroundColor: 'oklch(18% 0.05 130)', marginTop: 'clamp(4rem, 6vw, 6rem)' }}>
      <div
        className="grid md:grid-cols-2"
        style={{ minHeight: '72vh' }}
      >
        {/* Text — links */}
        <div
          className="flex flex-col justify-center"
          style={{
            padding: 'clamp(3rem, 6vw, 6.5rem) clamp(2rem, 5vw, 5.5rem)',
            borderRight: '1px solid oklch(67% 0.08 88 / 0.08)',
          }}
        >
          <FadeIn>
            <p className="section-label" style={{ marginBottom: '2rem' }}>
              Über Marisha
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
              Zwanzig Jahre.
              <br />
              Sich im eigenen Körper wieder spüren.
            </h2>

            <div
              style={{
                fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)',
                lineHeight: 1.7,
                color: 'oklch(88% 0.012 85)',
                maxWidth: '54ch',
                marginBottom: '3.25rem',
              }}
            >
              <p style={{ marginBottom: '2rem' }}>
                Marisha hat über die Jahre verschiedene Therapie- und Gruppenformen ausprobiert. Sie kamen alle an einen Punkt, an dem sie nicht weiterführten, weil Berührung darin keinen Raum hatte. Es fühlte sich falsch an, einer Person, die drei, vier Meter entfernt saß, das Intimste zu erzählen.
              </p>
              <p>
                Daraus ist ihre Arbeit entstanden: Klientinnen wieder dahin zu führen, sich im eigenen Körper zu spüren. Präsent zu sein. Sicher zu sein.
              </p>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {credentials.map((c) => (
                <li
                  key={c}
                  className="section-label"
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.75rem',
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: '12px',
                      height: '1px',
                      backgroundColor: 'oklch(67% 0.08 88 / 0.75)',
                      flexShrink: 0,
                      display: 'inline-block',
                      transform: 'translateY(-3px)',
                    }}
                  />
                  {c}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Foto — rechts */}
        <div
          style={{
            position: 'relative',
            minHeight: '500px',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/photos/marisha.jpg"
            alt="Marisha Pommerenke"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
            style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
          />
        </div>
      </div>
    </section>
  )
}
