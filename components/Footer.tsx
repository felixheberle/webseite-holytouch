import Image from 'next/image'

const links = [
  { label: 'Impressum', href: '/impressum', external: false },
  { label: 'Datenschutz', href: '/datenschutz', external: false },
  { label: 'Instagram', href: 'https://www.instagram.com/_holytouch_/', external: true },
]

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'oklch(10% 0.006 70)',
        borderTop: '1px solid oklch(67% 0.08 88 / 0.08)',
        padding: '3.5rem 2.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.75rem',
      }}
    >
      <Image
        src="/logos/favicon-ht.png"
        alt="ht"
        width={56}
        height={56}
        style={{ opacity: 1, objectFit: 'contain' }}
      />

      <nav
        aria-label="Footer-Navigation"
        style={{
          display: 'flex',
          gap: '2.25rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="section-label"
            style={{
              color: 'oklch(67% 0.08 88)',
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'color 0.25s ease',
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <p
        className="section-label"
        style={{ color: 'oklch(85% 0.008 85)', opacity: 0.65, fontSize: '0.75rem', textAlign: 'center' }}
      >
        © 2026 HolyTouch · Praxis am Ammersee
      </p>
    </footer>
  )
}
