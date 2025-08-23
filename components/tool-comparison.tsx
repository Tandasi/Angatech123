"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X, AlertCircle } from "lucide-react"

export function ToolComparison() {
  const [selectedTools, setSelectedTools] = useState<string[]>(["lookml", "dbt", "metabase"])

  const tools = {
    lookml: {
      name: "LookML",
      category: "Semantic Modeling",
      strengths: ["Powerful semantic layer", "Version control", "Advanced calculations", "Enterprise features"],
      useCases: ["Complex dashboards", "Enterprise BI", "Advanced analytics", "Data governance"],
      stackFit: { gcp: "excellent", aws: "good", azure: "fair" },
      learningCurve: "Medium",
      pricing: "Enterprise",
      pros: ["Robust modeling", "Git integration", "Scalable", "Great for analysts"],
      cons: ["Steep learning curve", "Expensive", "Looker dependency"],
    },
    dbt: {
      name: "dbt",
      category: "Data Transformation",
      strengths: ["SQL-based", "Version control", "Testing framework", "Documentation"],
      useCases: ["Data pipelines", "Data transformation", "Analytics engineering", "Data quality"],
      stackFit: { gcp: "excellent", aws: "excellent", azure: "excellent" },
      learningCurve: "Easy",
      pricing: "Freemium",
      pros: ["SQL-native", "Open source", "Great community", "Easy to learn"],
      cons: ["Limited visualization", "Requires data warehouse", "Build complexity"],
    },
    metabase: {
      name: "Metabase",
      category: "Self-Service BI",
      strengths: ["No-code interface", "Quick setup", "Beautiful visualizations", "Open source"],
      useCases: ["Quick insights", "Self-service analytics", "Small teams", "Rapid prototyping"],
      stackFit: { gcp: "good", aws: "good", azure: "good" },
      learningCurve: "Very Easy",
      pricing: "Free/Paid",
      pros: ["User-friendly", "Fast setup", "No SQL required", "Great UX"],
      cons: ["Limited advanced features", "Performance at scale", "Basic modeling"],
    },
    superset: {
      name: "Apache Superset",
      category: "Advanced BI",
      strengths: ["Rich visualizations", "SQL Lab", "Extensible", "Open source"],
      useCases: ["Custom dashboards", "Advanced analytics", "Data exploration", "Enterprise BI"],
      stackFit: { gcp: "good", aws: "excellent", azure: "good" },
      learningCurve: "Medium",
      pricing: "Free",
      pros: ["Powerful features", "Customizable", "Active community", "No vendor lock-in"],
      cons: ["Complex setup", "Requires technical skills", "Maintenance overhead"],
    },
    holistics: {
      name: "Holistics",
      category: "Embedded Analytics",
      strengths: ["Embedded analytics", "Self-service", "Data modeling", "White-label"],
      useCases: ["SaaS platforms", "Embedded dashboards", "Customer-facing analytics", "Multi-tenant"],
      stackFit: { gcp: "good", aws: "good", azure: "good" },
      learningCurve: "Medium",
      pricing: "Paid",
      pros: ["Embedding focus", "Good modeling", "Multi-tenancy", "API-first"],
      cons: ["Niche use case", "Limited community", "Pricing model"],
    },
  }

  const getStackIcon = (fit: string) => {
    switch (fit) {
      case "excellent":
        return <Check className="h-4 w-4 text-green-500" />
      case "good":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      case "fair":
        return <X className="h-4 w-4 text-red-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />
    }
  }

  const getLearningCurveColor = (curve: string) => {
    switch (curve) {
      case "Very Easy":
        return "bg-green-100 text-green-800 border-green-200"
      case "Easy":
        return "bg-green-100 text-green-800 border-green-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Hard":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tool Selection */}
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Select Tools to Compare</h2>
          <div className="flex flex-wrap gap-2">
            {Object.entries(tools).map(([key, tool]) => (
              <Button
                key={key}
                variant={selectedTools.includes(key) ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  if (selectedTools.includes(key)) {
                    setSelectedTools(selectedTools.filter((t) => t !== key))
                  } else {
                    setSelectedTools([...selectedTools, key])
                  }
                }}
              >
                {tool.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {selectedTools.map((toolKey) => {
              const tool = tools[toolKey as keyof typeof tools]
              return (
                <Card key={toolKey} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="font-heading text-xl">{tool.name}</span>
                      <Badge variant="outline">{tool.category}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Strengths */}
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">STRENGTHS</h4>
                      <ul className="space-y-1">
                        {tool.strengths.map((strength, index) => (
                          <li key={index} className="text-sm flex items-center space-x-2">
                            <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                            <span>{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">USE CASES</h4>
                      <div className="flex flex-wrap gap-1">
                        {tool.useCases.map((useCase, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {useCase}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Stack Fit */}
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">STACK COMPATIBILITY</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">GCP</span>
                          {getStackIcon(tool.stackFit.gcp)}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">AWS</span>
                          {getStackIcon(tool.stackFit.aws)}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Azure</span>
                          {getStackIcon(tool.stackFit.azure)}
                        </div>
                      </div>
                    </div>

                    {/* Learning Curve */}
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">LEARNING CURVE</h4>
                      <Badge className={getLearningCurveColor(tool.learningCurve)}>{tool.learningCurve}</Badge>
                    </div>

                    {/* Pricing */}
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">PRICING</h4>
                      <span className="text-sm font-medium">{tool.pricing}</span>
                    </div>

                    {/* Pros & Cons */}
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <h5 className="text-xs font-semibold text-green-600 mb-1">PROS</h5>
                        <ul className="space-y-1">
                          {tool.pros.map((pro, index) => (
                            <li key={index} className="text-xs text-muted-foreground">
                              • {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold text-red-600 mb-1">CONS</h5>
                        <ul className="space-y-1">
                          {tool.cons.map((con, index) => (
                            <li key={index} className="text-xs text-muted-foreground">
                              • {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
