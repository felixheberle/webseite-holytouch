'use client'

export default function Erkennen() {
  const lines = [
    'Du funktionierst. Und manchmal weißt du, dass das nicht alles ist.',
    'Etwas in dir ist müde geworden vom Verstehen.',
    'Du spürst es zuerst im Körper — in den Schultern, im Atem, im Schlaf.',
    'Du möchtest dich nicht reparieren lassen. Du möchtest gehört werden.',
    'Vielleicht muss nichts gelöst werden. Vielleicht nur gespürt.',
  ]

  return (
    <section
      style={{
        backgroundColor: 'var(--c-bg)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 3rem)',
      }}
    >
      <div
        style={{
          maxWidth: '750px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {lines.map((line, i) => (
          <p
            key={i}
            className="font-display"
            style={{
              color: 'var(--c-cream)',
              fontSize: 'clamp(1.4rem, 2.3vw, 1.85rem)',
              lineHeight: 1.5,
              marginBottom:
                i < lines.length - 1
                  ? 'clamp(2.5rem, 4.5vw, 3.5rem)'
                  : 0,
              fontWeight: 400,
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  )
}
