import { Badge } from "@/components/ui/badge"
import { FolderOpen, Globe, MapPin, Code } from "lucide-react"

export function ProjectsHero() {
  const stats = [
    { icon: FolderOpen, label: "Projects Delivered", value: "50+" },
    { icon: Globe, label: "Countries Served", value: "15+" },
    { icon: MapPin, label: "Cities Impacted", value: "25+" },
    { icon: Code, label: "Open Source", value: "12+" },
  ]

  return (
    <section className="bg-gradient-to-br from-background via-muted/30 to-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Badge variant="secondary" className="px-3 py-1">
              Portfolio
            </Badge>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Real-World Impact Across Africa
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From civic engagement platforms in Lagos to agricultural insights in Kenya, explore how we've transformed
            data into actionable solutions that drive real change across the continent and diaspora.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
