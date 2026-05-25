import { Hero } from '@/components/Hero'

export default function CompareHeroPage() {
  const labelStyle = {
    position: 'sticky' as const,
    top: 0,
    zIndex: 50,
    backgroundColor: 'oklch(18% 0.05 130)',
    padding: '1.25rem 2rem',
    borderBottom: '1px solid oklch(67% 0.08 88 / 0.2)',
    fontFamily: 'Inkbleed Sans, Georgia, serif',
    fontSize: '0.875rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: 'oklch(67% 0.08 88)',
    textAlign: 'center' as const,
  }

  return (
    <main>
      <div style={labelStyle}>
        Version A — Original-Foto (hero.jpg, 80% 22%)
      </div>
      <Hero imageSrc="/photos/hero.jpg" objectPosition="80% 45%" />

      <div style={{ ...labelStyle, borderTop: '1px solid oklch(67% 0.08 88 / 0.2)' }}>
        Version B — Aktuelles Foto (hero-v2.jpg, 50% 30%)
      </div>
      <Hero imageSrc="/photos/hero-v2.jpg" objectPosition="50% 30%" />
    </main>
  )
}
