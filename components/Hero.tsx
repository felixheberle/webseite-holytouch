import Image from 'next/image'
import { TrackedLink } from './TrackedLink'

interface HeroProps {
  objectPosition?: string
  imageSrc?: string
}

export function Hero({
  objectPosition = '80% 34%',
  imageSrc = '/photos/hero.jpg',
}: HeroProps) {
  return (
    <section
      aria-label="Hero"
      className="hero-section"
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '620px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        quality={88}
        sizes="100vw"
        className="hero-image"
        style={{ objectFit: 'cover', objectPosition: objectPosition }}
      />

      {/* Gradient overlay: transparent top → heavy bottom */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, oklch(18% 0.05 130 / 0.55) 0%, oklch(18% 0.05 130 / 0.2) 30%, oklch(18% 0.05 130 / 0.35) 60%, oklch(18% 0.05 130 / 0.92) 100%)',
        }}
      />

      <div style={{ position: 'relative', padding: '0 2.5rem 0', maxWidth: '960px' }}>
        <p
          className="font-display hero-headline"
          style={{
            fontSize: 'clamp(2.375rem, 5.5vw, 5.75rem)',
            lineHeight: 1.04,
            letterSpacing: '-0.01em',
            color: 'oklch(93% 0.012 85)',
          }}
        >
          Dein Körper zeigt,
          <br />
          was dein Verstand
          <br />
          nicht sagen kann.
        </p>

        <p
          className="hero-subline"
          style={{
            fontFamily: 'var(--font-eb-garamond), EB Garamond, Georgia, serif',
            fontSize: 'clamp(1rem, 3.2vw, 1.35rem)',
            lineHeight: 1.4,
            color: 'oklch(93% 0.012 85 / 0.8)',
            maxWidth: '52ch',
            marginTop: '1.25rem',
          }}
        >
          Körpertherapie am Ammersee — Gespräch und Körperarbeit, die wieder in Kontakt bringen.
        </p>

      </div>

      <div className="hero-cta-mobile" style={{ textAlign: 'center', marginTop: 'clamp(2rem, 6vw, 3rem)', marginBottom: '0' }}>
        <TrackedLink
          event="CTA-Klick"
          position="Hero"
          href="https://calendly.com/holytouch/kennenlerngespraech"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Kostenloses Kennenlerngespräch
        </TrackedLink>
      </div>
    </section>
  )
}
