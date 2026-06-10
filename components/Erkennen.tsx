'use client'

type Item = {
  kind: 'quote' | 'reflection'
  text: string
}

export default function Erkennen() {
  const items: Item[] = [
    { kind: 'quote', text: 'Ich kann nicht mehr runterkommen.' },
    { kind: 'quote', text: 'Ich spüre meinen Körper nicht mehr.' },
    { kind: 'quote', text: 'Die Anspannung sitzt seit Jahren. Sie geht nicht weg.' },
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
        {items.map((item, i) => {
          const next = items[i + 1]
          const isLastQuoteBeforeReflection =
            item.kind === 'quote' && next?.kind === 'reflection'
          const isLastItem = i === items.length - 1

          let marginBottom = 'clamp(2.5rem, 4.5vw, 3.5rem)'
          if (isLastItem) {
            marginBottom = 'clamp(4rem, 7vw, 5rem)'
          } else if (isLastQuoteBeforeReflection) {
            marginBottom = 'clamp(3.5rem, 6vw, 4.5rem)'
          }

          const displayText =
            item.kind === 'quote' ? `„${item.text}“` : item.text

          return (
            <p
              key={i}
              className="font-display"
              style={{
                color: 'var(--c-text)',
                fontSize: 'clamp(1.4rem, 2.3vw, 1.85rem)',
                lineHeight: 1.5,
                marginBottom,
                fontWeight: 400,
                fontStyle: item.kind === 'quote' ? 'italic' : 'normal',
              }}
            >
              {displayText}
            </p>
          )
        })}
        <p
          style={{
            color: 'var(--c-gold)',
            fontSize: 'clamp(0.75rem, 0.9vw, 0.85rem)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          Wenn du dich wiedererkennst, bist du hier richtig.
        </p>
      </div>
    </section>
  )
}
