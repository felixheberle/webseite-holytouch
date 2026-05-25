import { ReactNode } from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'

interface LegalLayoutProps {
  title: string
  children: ReactNode
}

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <>
      <Nav />
      <article className="legal-page">
        <h1 className="legal-title font-display">{title}</h1>
        <div className="legal-content">
          {children}
        </div>
      </article>
      <Footer />
    </>
  )
}
