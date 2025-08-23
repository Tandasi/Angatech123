"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ProjectFilters() {
  const [selectedRegion, setSelectedRegion] = useState<string>("all")
  const [selectedStack, setSelectedStack] = useState<string>("all")

  const regions = [
    { id: "all", label: "All Regions" },
    { id: "west-africa", label: "West Africa" },
    { id: "east-africa", label: "East Africa" },
    { id: "southern-africa", label: "Southern Africa" },
    { id: "diaspora", label: "Diaspora" },
  ]

  const stacks = [
    { id: "all", label: "All Stacks" },
    { id: "firebase", label: "Firebase" },
    { id: "aws", label: "AWS" },
    { id: "gcp", label: "Google Cloud" },
    { id: "flutter", label: "Flutter Web" },
    { id: "react", label: "React/Next.js" },
  ]

  return (
    <section className="py-8 bg-muted/20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Region Filters */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Filter by Region:</h3>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <Button
                  key={region.id}
                  variant={selectedRegion === region.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedRegion(region.id)}
                >
                  {region.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Tech Stack Filters */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Filter by Tech Stack:</h3>
            <div className="flex flex-wrap gap-2">
              {stacks.map((stack) => (
                <Button
                  key={stack.id}
                  variant={selectedStack === stack.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStack(stack.id)}
                >
                  {stack.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
