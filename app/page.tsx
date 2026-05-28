import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { PositioningLine } from '@/components/PositioningLine'
import { Recognition } from '@/components/Recognition'
import { Method } from '@/components/Method'
import { VerstandKoerper } from '@/components/VerstandKoerper'
import { Marisha } from '@/components/Marisha'
import { Angebot } from '@/components/Angebot'
import Erfahrungen from '@/components/Erfahrungen'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PositioningLine />
        <Recognition />
        <Method />
        <VerstandKoerper />
        <Marisha />
        <Angebot />
        <Erfahrungen />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
