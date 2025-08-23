import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesList } from "@/components/services-list"
import { ServiceFilters } from "@/components/service-filters"

export const metadata = {
  title: "Our Services - DataNova Analytics",
  description:
    "Full-stack data services across cloud platforms. Expert solutions in data engineering, business intelligence, and analytics.",
  keywords: "data services, business intelligence, data engineering, cloud analytics, LookML, dbt, dashboards",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ServicesHero />
        <ServiceFilters />
        <ServicesList />
      </main>
      <Footer />
    </div>
  )
}
