import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { SmartAssistant } from "@/components/smart-assistant"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SmartAssistant />
        <AboutSection />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  )
}
