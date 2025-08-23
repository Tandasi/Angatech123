import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectsHero } from "@/components/projects-hero"
import { ProjectFilters } from "@/components/project-filters"
import { ProjectsGrid } from "@/components/projects-grid"

export const metadata = {
  title: "Portfolio - DataNova Analytics",
  description:
    "Real-world analytics and civic deployments across Africa and the diaspora. Explore our Flutter Web, Firebase, and dashboard projects.",
  keywords: "portfolio, projects, Africa, diaspora, Flutter Web, Firebase, dashboards, civic tech, data analytics",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ProjectsHero />
        <ProjectFilters />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  )
}
