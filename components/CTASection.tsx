export function CTASection() {
  return (
    <section
      style={{
        backgroundColor: 'var(--c-bg)',
        minHeight: '58vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          padding: 'clamp(4rem, 8vw, 7rem) 2.5rem',
          maxWidth: '100%',
        }}
      >
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
            lineHeight: 1.15,
            color: 'oklch(93% 0.012 85)',
            margin: '0 auto 3rem',
          }}
        >
          Zehn Minuten reichen, um zu spüren,<br />ob ich die Richtige bin.
        </h2>

        <a
          href="https://calendly.com/holytouch/kennenlerngespraech"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Kostenloses Kennenlerngespräch
        </a>

        <div
          style={{
            marginTop: '2.5rem',
            display: 'flex',
            gap: '2.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a href="tel:+4981524809056" className="contact-link" style={{ color: 'oklch(93% 0.012 85)', opacity: 0.85, fontSize: '1rem' }}>
            08152 / 4809056
          </a>
          <a href="mailto:marisha@holytouch.com" className="contact-link" style={{ color: 'oklch(93% 0.012 85)', opacity: 0.85, fontSize: '1rem' }}>
            marisha@holytouch.com
          </a>
        </div>
      </div>
    </section>
  )
}
