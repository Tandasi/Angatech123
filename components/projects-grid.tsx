import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, MapPin, TrendingUp } from "lucide-react"

export function ProjectsGrid() {
  const projects = [
    {
      title: "Lagos Traffic Analytics Dashboard",
      description:
        "Real-time traffic monitoring system for Lagos State Government, processing over 1 million data points daily from traffic sensors, GPS devices, and mobile apps to optimize traffic flow and reduce congestion by 25%.",
      image: "/lagos-traffic-dashboard.png",
      region: "West Africa",
      location: "Lagos, Nigeria",
      techStack: ["Firebase", "Flutter Web", "BigQuery", "Google Maps API", "Cloud Functions"],
      impact: "1M+ daily users, 25% congestion reduction",
      liveUrl: "https://lagos-traffic.gov.ng",
      githubUrl: "https://github.com/datanova/lagos-traffic",
      category: "Civic Tech",
      year: "2023",
    },
    {
      title: "Kenya Agricultural Insights Platform",
      description:
        "Comprehensive agricultural data platform serving 10,000+ smallholder farmers with weather predictions, crop recommendations, and market price analytics. Integrated with local weather stations and commodity exchanges.",
      image: "/agricultural-dashboard.png",
      region: "East Africa",
      location: "Nairobi, Kenya",
      techStack: ["AWS", "React", "dbt", "Metabase", "Lambda", "RDS"],
      impact: "10K+ farmers, 30% yield increase",
      liveUrl: "https://agri-insights.ke",
      githubUrl: "https://github.com/datanova/agri-insights",
      category: "Agriculture",
      year: "2023",
    },
    {
      title: "Diaspora Investment Tracker",
      description:
        "Investment tracking platform connecting African diaspora investors with continental opportunities. Features real-time market data, risk analysis, and regulatory compliance tracking across 8 African markets.",
      image: "/investment-dashboard-africa.png",
      region: "Diaspora",
      location: "London, UK / Multiple",
      techStack: ["GCP", "Next.js", "LookML", "Looker", "Pub/Sub", "BigQuery"],
      impact: "$50M+ tracked investments",
      liveUrl: "https://diaspora-invest.com",
      githubUrl: "https://github.com/datanova/diaspora-invest",
      category: "Fintech",
      year: "2024",
    },
    {
      title: "Cape Town Water Management System",
      description:
        "Smart water management dashboard for Cape Town Municipality, monitoring reservoir levels, consumption patterns, and leak detection across the city's water infrastructure during the water crisis recovery.",
      image: "/water-management-dashboard.png",
      region: "Southern Africa",
      location: "Cape Town, South Africa",
      techStack: ["Azure", "Power BI", "IoT Hub", "Stream Analytics", "Cosmos DB"],
      impact: "20% water waste reduction",
      liveUrl: "https://water.capetown.gov.za",
      githubUrl: "https://github.com/datanova/cape-water",
      category: "Smart City",
      year: "2022",
    },
    {
      title: "Ghana Education Analytics Portal",
      description:
        "National education data platform for Ghana Education Service, tracking student performance, teacher allocation, and resource distribution across 16 regions with predictive analytics for policy planning.",
      image: "/education-analytics-ghana.png",
      region: "West Africa",
      location: "Accra, Ghana",
      techStack: ["Firebase", "Flutter Web", "BigQuery", "Looker Studio", "Cloud Run"],
      impact: "2M+ students tracked",
      liveUrl: "https://edu-analytics.gov.gh",
      githubUrl: "https://github.com/datanova/ghana-edu",
      category: "Education",
      year: "2023",
    },
    {
      title: "Ethiopian Coffee Supply Chain Tracker",
      description:
        "Blockchain-enabled supply chain transparency platform for Ethiopian coffee exporters, tracking beans from farm to cup with quality metrics, fair trade compliance, and market pricing analytics.",
      image: "/coffee-supply-chain.png",
      region: "East Africa",
      location: "Addis Ababa, Ethiopia",
      techStack: ["AWS", "React", "Blockchain", "Lambda", "DynamoDB", "S3"],
      impact: "500+ farms connected",
      liveUrl: "https://coffee-chain.et",
      githubUrl: "https://github.com/datanova/coffee-chain",
      category: "Supply Chain",
      year: "2024",
    },
    {
      title: "Morocco Tourism Intelligence Dashboard",
      description:
        "Tourism analytics platform for Morocco National Tourism Office, analyzing visitor patterns, seasonal trends, and economic impact across major destinations with multilingual support.",
      image: "/morocco-tourism-dashboard.png",
      region: "North Africa",
      location: "Rabat, Morocco",
      techStack: ["GCP", "Vue.js", "BigQuery", "Data Studio", "Cloud Functions"],
      impact: "15M+ tourist visits analyzed",
      liveUrl: "https://tourism-insights.ma",
      githubUrl: "https://github.com/datanova/morocco-tourism",
      category: "Tourism",
      year: "2023",
    },
    {
      title: "Nigerian Fintech Regulatory Dashboard",
      description:
        "Regulatory compliance and monitoring platform for Central Bank of Nigeria, tracking fintech transactions, KYC compliance, and anti-money laundering patterns across digital payment platforms.",
      image: "/fintech-regulatory-dashboard.png",
      region: "West Africa",
      location: "Abuja, Nigeria",
      techStack: ["Azure", "React", "Power BI", "Azure Functions", "SQL Database"],
      impact: "100+ fintech companies monitored",
      liveUrl: "https://fintech-reg.cbn.gov.ng",
      githubUrl: "#private",
      category: "Regulatory",
      year: "2024",
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <Badge variant="secondary">{project.category}</Badge>
                  <Badge variant="outline" className="bg-background/90">
                    {project.year}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                {/* Impact Metrics */}
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Impact</span>
                  </div>
                  <p className="text-sm text-primary font-semibold">{project.impact}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">TECH STACK</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-2">
                  <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                  {project.githubUrl !== "#private" && (
                    <Button asChild size="sm" variant="ghost" className="flex-1">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in seeing how we can transform your data challenges into solutions?
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
