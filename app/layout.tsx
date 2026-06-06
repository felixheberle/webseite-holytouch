import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'
import './globals.css'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'holytouch — Psychosomatische Körpertherapie am Ammersee',
  description:
    'Psychosomatische Körpertherapie für berufstätige Frauen. Körpertherapeutin Marisha Pommerenke, Praxis in Hechenwang am Ammersee.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={ebGaramond.variable}>
      <body>{children}</body>
    </html>
  )
}
