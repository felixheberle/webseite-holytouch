export function PositioningLine() {
  return (
    <section
      style={{
        backgroundColor: 'oklch(18% 0.05 130)',
        padding: '4rem 2.5rem',
        borderTop: '1px solid oklch(67% 0.08 88 / 0.12)',
        borderBottom: '1px solid oklch(67% 0.08 88 / 0.12)',
      }}
    >
      <p
        className="font-display"
        style={{
          fontSize: 'clamp(0.875rem, 1.6vw, 1.25rem)',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'oklch(67% 0.08 88)',
          textAlign: 'center',
          margin: 0,
        }}
      >
        Körpertherapie am Ammersee
      </p>
    </section>
  )
}
