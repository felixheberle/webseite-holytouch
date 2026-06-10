import Image from 'next/image'
import { FadeIn } from './FadeIn'

export function Method() {
  return (
    <section style={{ backgroundColor: 'oklch(18% 0.05 130)' }}>
      <div
        className="grid md:grid-cols-2"
        style={{ minHeight: '72vh' }}
      >
        {/* Foto — links */}
        <div
          style={{
            position: 'relative',
            minHeight: '480px',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/photos/method.jpg"
            alt="Marisha bei der Körpertherapie"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
            style={{ objectFit: 'cover', objectPosition: '58% center' }}
          />
        </div>

        {/* Text — rechts */}
        <div
          className="flex flex-col justify-center"
          style={{
            padding: 'clamp(3rem, 6vw, 6.5rem) clamp(2rem, 5vw, 5.5rem)',
            borderLeft: '1px solid oklch(67% 0.08 88 / 0.08)',
          }}
        >
          <FadeIn>
            <p className="section-label" style={{ marginBottom: '2rem' }}>
              Die Arbeit
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
              Manchmal braucht es
              <br />
              mehr als Worte.
            </h2>

            <div
              style={{
                fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)',
                lineHeight: 1.7,
                color: 'oklch(88% 0.012 85)',
                maxWidth: '54ch',
              }}
            >
              <p style={{ marginBottom: '2rem' }}>
                Körpertherapie verbindet Gespräch und Körperarbeit. Manche Themen sitzen so tief im Körper, dass Worte allein sie nicht erreichen.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                Im Gespräch richten wir den Blick auf das, was sich im Körper zeigt. In der Körperarbeit wird spürbar, wo Themen sich festgesetzt haben. Durch Körperberührung und Atem findet das Nervensystem seinen Weg zurück zur Ruhe.
              </p>
              <p>
                Das ist keine Massage. Es ist eine Kombination aus Coaching, Körperarbeit und tiefen Gesprächen: Körpertherapie in einer Praxis am Ammersee.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
