import { CompassIcon as Comparison, Filter, Search } from "lucide-react"

export function CompareHero() {
  return (
    <section className="bg-gradient-to-br from-background via-muted/30 to-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Comparison className="h-8 w-8 text-primary" />
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">Tool Comparison</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the right data modeling and BI tool for your project. Compare features, learning curves, and stack
            compatibility to make informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Detailed Analysis</h3>
            <p className="text-muted-foreground text-sm">
              In-depth comparison of strengths, use cases, and technical requirements
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="bg-secondary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Filter className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Stack Compatibility</h3>
            <p className="text-muted-foreground text-sm">
              See which tools work best with GCP, AWS, Azure, and hybrid environments
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Comparison className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Learning Curve</h3>
            <p className="text-muted-foreground text-sm">
              Understand implementation complexity and team training requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
