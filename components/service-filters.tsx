"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ServiceFilters() {
  const [selectedStack, setSelectedStack] = useState<string>("all")
  const [selectedNeed, setSelectedNeed] = useState<string>("all")

  const stacks = [
    { id: "all", label: "All Stacks" },
    { id: "gcp", label: "Google Cloud" },
    { id: "aws", label: "Amazon Web Services" },
    { id: "azure", label: "Microsoft Azure" },
  ]

  const needs = [
    { id: "all", label: "All Needs" },
    { id: "bi", label: "Business Intelligence" },
    { id: "governance", label: "Data Governance" },
    { id: "hosting", label: "Cloud Hosting" },
    { id: "engineering", label: "Data Engineering" },
  ]

  return (
    <section className="py-8 bg-muted/20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Stack Filters */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Filter by Stack:</h3>
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

          {/* Business Need Filters */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Filter by Business Need:</h3>
            <div className="flex flex-wrap gap-2">
              {needs.map((need) => (
                <Button
                  key={need.id}
                  variant={selectedNeed === need.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedNeed(need.id)}
                >
                  {need.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
