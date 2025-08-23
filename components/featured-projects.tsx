import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function FeaturedProjects() {
  const projects = [
    {
      title: "Lagos Traffic Analytics Dashboard",
      description:
        "Real-time traffic monitoring and prediction system for Lagos State, processing over 1M data points daily to optimize traffic flow and reduce congestion.",
      image: "/lagos-traffic-dashboard.png",
      tags: ["Firebase", "BigQuery", "Looker Studio", "Flutter Web"],
      type: "Civic Dashboard",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Kenya Agricultural Insights Platform",
      description:
        "Comprehensive agricultural data platform helping 10,000+ farmers make data-driven decisions about crop planning, weather patterns, and market prices.",
      image: "/agricultural-dashboard.png",
      tags: ["AWS", "dbt", "Metabase", "React"],
      type: "Agricultural Analytics",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Diaspora Investment Tracker",
      description:
        "Investment tracking and analytics platform connecting African diaspora investors with continental opportunities, featuring real-time market data and risk analysis.",
      image: "/investment-dashboard-africa.png",
      tags: ["GCP", "LookML", "Superset", "Next.js"],
      type: "Financial Analytics",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped organizations across Africa transform their data into actionable insights and
            measurable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{project.type}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2 pt-2">
                  <Button asChild size="sm" variant="outline">
                    <Link href={project.liveUrl}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="ghost">
                    <Link href={project.githubUrl}>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/projects">
              View All Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
