import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code, Layers, Zap } from "lucide-react"

export function StackSolutions() {
  const solutions = [
    {
      platform: "Google Cloud Platform",
      icon: "🔵",
      color: "blue",
      description: "Rapid development with Firebase ecosystem and powerful analytics",
      useCases: [
        "Real-time web applications with Firebase",
        "Data analytics with BigQuery and Looker",
        "Serverless APIs with Cloud Functions",
        "Mobile-first PWAs with Flutter Web",
      ],
      tools: ["Firebase", "BigQuery", "Looker Studio", "App Engine", "Cloud Functions", "Pub/Sub"],
      architecture: "/gcp-architecture-diagram.png",
      recruiterTags: ["Firebase", "BigQuery", "GCP", "Flutter", "Serverless", "Real-time"],
      sampleProjects: [
        "Lagos Traffic Dashboard - 1M+ daily users",
        "Ghana Education Portal - 2M+ students tracked",
        "Morocco Tourism Analytics - 15M+ visits analyzed",
      ],
    },
    {
      platform: "Amazon Web Services",
      icon: "🟠",
      color: "orange",
      description: "Enterprise-grade scalability with comprehensive service ecosystem",
      useCases: [
        "Full-stack web apps with AWS Amplify",
        "Serverless backends with Lambda",
        "Scalable databases with RDS and DynamoDB",
        "Static hosting with S3 and CloudFront",
      ],
      tools: ["AWS Amplify", "Lambda", "RDS", "S3", "DynamoDB", "CloudFront"],
      architecture: "/aws-architecture-diagram.png",
      recruiterTags: ["AWS", "Lambda", "RDS", "Amplify", "Serverless", "Scalability"],
      sampleProjects: [
        "Kenya Agricultural Platform - 10K+ farmers served",
        "Ethiopian Coffee Chain - 500+ farms connected",
        "Investment Tracking - $50M+ managed",
      ],
    },
    {
      platform: "Microsoft Azure",
      icon: "🟣",
      color: "purple",
      description: "Hybrid cloud solutions with enterprise integration capabilities",
      useCases: [
        "Static web apps with Azure Static Web Apps",
        "NoSQL databases with Cosmos DB",
        "Event-driven architecture with Azure Functions",
        "Business intelligence with Power BI",
      ],
      tools: ["Static Web Apps", "Cosmos DB", "Azure Functions", "Power BI", "Service Bus", "App Service"],
      architecture: "/azure-architecture-diagram.png",
      recruiterTags: ["Azure", "Cosmos DB", "Power BI", "Functions", "Enterprise", "Hybrid"],
      sampleProjects: [
        "Cape Town Water Management - 20% waste reduction",
        "Nigerian Fintech Compliance - 100+ companies monitored",
        "Regional Healthcare Analytics - 5 countries",
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-50",
          border: "border-blue-200",
          text: "text-blue-800",
          accent: "bg-blue-100",
        }
      case "orange":
        return {
          bg: "bg-orange-50",
          border: "border-orange-200",
          text: "text-orange-800",
          accent: "bg-orange-100",
        }
      case "purple":
        return {
          bg: "bg-purple-50",
          border: "border-purple-200",
          text: "text-purple-800",
          accent: "bg-purple-100",
        }
      default:
        return {
          bg: "bg-gray-50",
          border: "border-gray-200",
          text: "text-gray-800",
          accent: "bg-gray-100",
        }
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {solutions.map((solution, index) => {
            const colors = getColorClasses(solution.color)
            return (
              <Card key={index} className={`overflow-hidden ${colors.bg} ${colors.border}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Content */}
                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="flex items-center space-x-3">
                        <span className="text-2xl">{solution.icon}</span>
                        <span className="font-heading text-2xl">{solution.platform}</span>
                      </CardTitle>
                      <p className={`text-sm ${colors.text}`}>{solution.description}</p>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      {/* Use Cases */}
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-3 flex items-center">
                          <Layers className="h-4 w-4 mr-2" />
                          DEPLOYMENT USE CASES
                        </h4>
                        <ul className="space-y-2">
                          {solution.useCases.map((useCase, ucIndex) => (
                            <li key={ucIndex} className="text-sm flex items-start space-x-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools */}
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-3 flex items-center">
                          <Code className="h-4 w-4 mr-2" />
                          TOOLS & SERVICES
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.tools.map((tool, toolIndex) => (
                            <Badge key={toolIndex} variant="outline" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Recruiter Tags */}
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-3 flex items-center">
                          <Zap className="h-4 w-4 mr-2" />
                          RECRUITER TAGS
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.recruiterTags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              className={`text-xs ${colors.accent} ${colors.text} border-transparent`}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Sample Projects */}
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-3">SAMPLE PROJECTS</h4>
                        <ul className="space-y-1">
                          {solution.sampleProjects.map((project, projIndex) => (
                            <li key={projIndex} className="text-xs text-muted-foreground">
                              • {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>

                  {/* Architecture Diagram */}
                  <div className="p-8 flex items-center">
                    <div className="w-full">
                      <h4 className="font-semibold text-sm text-muted-foreground mb-4">SAMPLE ARCHITECTURE</h4>
                      <div className="aspect-square bg-background rounded-lg border border-border overflow-hidden">
                        <img
                          src={solution.architecture || "/placeholder.svg"}
                          alt={`${solution.platform} Architecture`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        <Button asChild size="sm" className="flex-1">
                          <Link href="/contact">Get Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Need a Custom Cloud Architecture?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every project has unique requirements. Our team can design hybrid solutions that leverage the best of
            multiple cloud platforms for optimal performance and cost efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Discuss Your Architecture</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/compare-tools">Compare Platforms</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
