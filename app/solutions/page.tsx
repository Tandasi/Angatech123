import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SolutionsHero } from "@/components/solutions-hero"
import { StackSolutions } from "@/components/stack-solutions"

export const metadata = {
  title: "Cloud Stack Solutions - DataNova Analytics",
  description: "Deployments on GCP, AWS, Azure. App Engine, Amplify, Azure Functions and more cloud solutions.",
  keywords: "cloud solutions, GCP, AWS, Azure, App Engine, Amplify, Azure Functions, cloud deployment",
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <SolutionsHero />
        <StackSolutions />
      </main>
      <Footer />
    </div>
  )
}
