import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Cloud, Database, Globe, LineChart, Shield, Zap } from "lucide-react"

export function ServicesList() {
  const services = [
    {
      icon: Database,
      title: "Data Pipeline Engineering",
      useCase: "Automated ETL/ELT pipelines for real-time data processing and transformation",
      sampleOutput: "Real-time dashboards processing 1M+ records daily with 99.9% uptime",
      tools: ["Apache Airflow", "dbt", "BigQuery", "Dataflow"],
      recruiterTags: ["Python", "SQL", "GCP", "ETL", "Data Engineering"],
      stack: "gcp",
      need: "engineering",
      image: "/data-pipeline-dashboard.png",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence Dashboards",
      useCase: "Interactive dashboards for executive decision-making and KPI monitoring",
      sampleOutput: "Executive dashboard with 15+ KPIs, automated reporting, and drill-down capabilities",
      tools: ["Looker Studio", "Metabase", "Superset", "Power BI"],
      recruiterTags: ["BI", "Looker", "SQL", "Data Visualization", "Analytics"],
      stack: "all",
      need: "bi",
      image: "/bi-dashboard-executive.png",
    },
    {
      icon: Globe,
      title: "Civic Engagement Platforms",
      useCase: "Public-facing dashboards for government transparency and citizen engagement",
      sampleOutput: "Lagos Traffic Dashboard serving 100K+ daily users with real-time updates",
      tools: ["Firebase", "Flutter Web", "BigQuery", "Google Maps API"],
      recruiterTags: ["Flutter", "Firebase", "Public Sector", "Real-time", "Mobile"],
      stack: "gcp",
      need: "bi",
      image: "/civic-engagement-platform.png",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure Setup",
      useCase: "Scalable cloud architecture for data-intensive applications",
      sampleOutput: "Auto-scaling infrastructure handling 10x traffic spikes with cost optimization",
      tools: ["Terraform", "Kubernetes", "Docker", "Cloud Functions"],
      recruiterTags: ["DevOps", "Terraform", "Kubernetes", "Cloud Architecture", "Scalability"],
      stack: "all",
      need: "hosting",
      image: "/cloud-infrastructure-diagram.png",
    },
    {
      icon: LineChart,
      title: "Predictive Analytics Models",
      useCase: "Machine learning models for forecasting and trend analysis",
      sampleOutput: "Agricultural yield prediction model with 85% accuracy across 5 crop types",
      tools: ["Python", "TensorFlow", "BigQuery ML", "Vertex AI"],
      recruiterTags: ["Machine Learning", "Python", "TensorFlow", "Predictive Analytics", "AI"],
      stack: "gcp",
      need: "bi",
      image: "/predictive-analytics-model.png",
    },
    {
      icon: Shield,
      title: "Data Governance & Security",
      useCase: "Compliance frameworks and data security for regulated industries",
      sampleOutput: "GDPR-compliant data governance system with automated audit trails",
      tools: ["Apache Atlas", "Data Catalog", "IAM", "Encryption"],
      recruiterTags: ["Data Governance", "Security", "Compliance", "GDPR", "Privacy"],
      stack: "all",
      need: "governance",
      image: "/data-governance-framework.png",
    },
    {
      icon: Zap,
      title: "Real-time Stream Processing",
      useCase: "Live data processing for IoT, financial, and social media applications",
      sampleOutput: "Financial fraud detection system processing 50K transactions/second",
      tools: ["Apache Kafka", "Pub/Sub", "Dataflow", "Redis"],
      recruiterTags: ["Stream Processing", "Kafka", "Real-time", "IoT", "Financial"],
      stack: "gcp",
      need: "engineering",
      image: "/stream-processing-architecture.png",
    },
    {
      icon: Database,
      title: "Data Warehouse Modernization",
      useCase: "Migration from legacy systems to modern cloud data warehouses",
      sampleOutput: "Migrated 10TB+ legacy data warehouse to BigQuery with 60% cost reduction",
      tools: ["BigQuery", "Snowflake", "Redshift", "dbt"],
      recruiterTags: ["Data Warehousing", "Migration", "BigQuery", "Snowflake", "dbt"],
      stack: "all",
      need: "engineering",
      image: "/data-warehouse-migration.png",
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90">
                    {service.stack.toUpperCase()}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-heading text-xl">{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">USE CASE</h4>
                  <p className="text-sm leading-relaxed">{service.useCase}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">SAMPLE OUTPUT</h4>
                  <p className="text-sm leading-relaxed text-primary">{service.sampleOutput}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">TOOLS USED</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">RECRUITER TAGS</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.recruiterTags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} className="text-xs bg-accent/10 text-accent-foreground border-accent/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Quote for This Service</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Don't see exactly what you need? We create custom solutions for unique requirements.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Discuss Custom Solution</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
