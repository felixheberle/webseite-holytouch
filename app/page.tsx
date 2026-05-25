import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { PositioningLine } from '@/components/PositioningLine'
import { Recognition } from '@/components/Recognition'
import { Method } from '@/components/Method'
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
        <Marisha />
        <Angebot />
        <Erfahrungen />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
