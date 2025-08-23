import { BarChart3, Cloud, Database, Zap } from "lucide-react"

export function ServicesHero() {
  const highlights = [
    { icon: Database, label: "Data Engineering", count: "25+ Projects" },
    { icon: BarChart3, label: "Business Intelligence", count: "40+ Dashboards" },
    { icon: Cloud, label: "Cloud Deployments", count: "3 Platforms" },
    { icon: Zap, label: "Real-time Analytics", count: "1M+ Data Points" },
  ]

  return (
    <section className="bg-gradient-to-br from-background via-muted/30 to-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">Full-Stack Data Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From data engineering to business intelligence, we provide comprehensive solutions across all major cloud
            platforms. Every service is designed with recruiter clarity and technical excellence in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{highlight.label}</h3>
              <p className="text-primary font-semibold">{highlight.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
