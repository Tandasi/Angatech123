import { Cloud, Database, Zap } from "lucide-react"

export function SolutionsHero() {
  return (
    <section className="bg-gradient-to-br from-background via-muted/30 to-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">Cloud Stack Solutions</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Platform-specific deployments optimized for your cloud environment. From GCP's Firebase ecosystem to AWS
            Amplify and Azure's serverless solutions, we deliver architecture that scales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Cloud className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Google Cloud Platform</h3>
            <p className="text-muted-foreground text-sm">
              Firebase, BigQuery, App Engine, and Cloud Functions for rapid development
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Database className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Amazon Web Services</h3>
            <p className="text-muted-foreground text-sm">
              Amplify, Lambda, RDS, and S3 for enterprise-grade scalability
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Microsoft Azure</h3>
            <p className="text-muted-foreground text-sm">
              Static Web Apps, Cosmos DB, and Azure Functions for hybrid solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
