'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { TrackedLink } from './TrackedLink'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <nav
      aria-label="Hauptnavigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
      }}
    >
      {/* Permanent 25% overlay — always on, no state dependency */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'oklch(18% 0.05 130 / 0.25)',
        }}
      />

      {/* Scroll-state enhancement: additional opacity + blur */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'oklch(18% 0.05 130 / 0.7)',
          backdropFilter: 'blur(14px)',
          opacity: scrolled ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      />

      {/* Bottom border — visible only when scrolled */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          backgroundColor: 'oklch(67% 0.08 88 / 0.1)',
          opacity: scrolled ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      />

      {/* Gradient fade: bar bleeds into hero below, hidden when scrolled */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          height: '48px',
          background: 'linear-gradient(to bottom, oklch(18% 0.05 130 / 0.25), transparent)',
          pointerEvents: 'none',
          opacity: scrolled ? 0 : 1,
          transition: 'opacity 0.5s ease',
        }}
      />

      {/* Content — position: relative so it sits above the absolute layers */}
      <div className="site-header">
        {/* Logo */}
        <Link href="/" aria-label="holytouch — Startseite" style={{ textDecoration: 'none' }}>
          <div
            style={{
              fontFamily: "'Inkbleed Sans', Georgia, serif",
              color: 'oklch(67% 0.08 88)',
              letterSpacing: '0.01em',
            }}
          >
            <span style={{ display: 'block', fontSize: 'clamp(2.5rem, 11vw, 4.5rem)', lineHeight: 0.92, fontStyle: 'oblique' }}>holy</span>
            <span style={{ display: 'block', fontSize: 'clamp(2.5rem, 11vw, 4.5rem)', lineHeight: 0.92 }}>touch</span>
            <span
              style={{
                display: 'block',
                fontFamily: "'Inkbleed Sans', Georgia, serif",
                fontSize: 'clamp(0.6rem, 2.2vw, 0.85rem)',
                letterSpacing: '0.38em',
                textTransform: 'uppercase',
                lineHeight: 1,
                marginTop: '0.5rem',
                color: 'oklch(58% 0.065 88)',
              }}
            >
              Marisha Sarah
            </span>
          </div>
        </Link>

        {/* Right nav: Telefon + Kennenlerngespräch */}
          <TrackedLink
            event="Telefon-Klick"
            position="Header"
            href="tel:+4981524809056"
            aria-label="Jetzt anrufen: 08152 / 4809056"
            className="site-header__phone"
            style={{
              fontFamily: "'Inkbleed Sans', Georgia, serif",
              fontSize: '1.25rem',
              letterSpacing: '0.04em',
              color: 'oklch(93% 0.012 85)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              textShadow: '0 1px 20px oklch(8% 0.006 70 / 0.9)',
              transition: 'color 0.25s ease',
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="oklch(67% 0.08 88)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.57 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2.84h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 10a16 16 0 0 0 6.29 6.29l1.06-1.26a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 17.18z" />
            </svg>
            08152 / 4809056
          </TrackedLink>

          <TrackedLink
            event="CTA-Klick"
            position="Header"
            href="https://calendly.com/holytouch/kennenlerngespraech"
            target="_blank"
            rel="noopener noreferrer"
            className="site-header__cta nav-link"
          >
            Kennenlerngespräch
          </TrackedLink>
      </div>
    </nav>
  )
}
