import Image from 'next/image'
import { FadeIn } from './FadeIn'

const credentials = [
  '20 Jahre Körpertherapie',
  'TouchLife Massage',
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
              Warum mich der Körper nie losgelassen hat.
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
                Ich bin mit Ayurveda aufgewachsen. Mit 19 habe ich meine Ausbildung an der TouchLife Schule gemacht — und schon dort ging es um mehr als Berührung allein: um das Begleiten von Prozessen.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                Denn wenn wir berührt werden, passiert etwas mit uns. Genau das hat mich nie wieder losgelassen: Wie hängen Körper und Gefühl zusammen?
              </p>
              <p style={{ marginBottom: '2rem' }}>
                Über die Jahre habe ich viel Selbsterfahrung gesammelt, in Gruppen- und Einzelarbeit. Irgendwann wollte ich das, was zwischen Worten und Körper entsteht, bewusster nutzen — also habe ich Gesprächsführung gelernt und dem Reden in meiner Arbeit mehr Raum gegeben. So bringe ich das Gesagte in direkte Verbindung mit dem, was du fühlst und im Körper spürst.
              </p>
              <p>
                Mir geht es darum, dass du dich in deinem eigenen Körper wieder spürst. Präsent. Sicher. Und dass du verstehst, was dein Körper dir zeigt.
              </p>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {credentials.map((c) => (
                <li
                  key={c}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.75rem',
                    color: 'oklch(88% 0.012 85)',
                    fontSize: '1.125rem',
                    letterSpacing: '0.02em',
                    lineHeight: 1.5,
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
