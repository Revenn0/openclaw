import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { FeaturesGrid } from '@/components/features-grid'
import { ChannelsSection } from '@/components/channels-section'
import { TechnicalSection } from '@/components/technical-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ChannelsSection />
      <FeaturesGrid />
      <TechnicalSection />
      <CTASection />
      <Footer />
    </main>
  )
}
