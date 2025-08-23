import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CompareHero } from "@/components/compare-hero"
import { ToolComparison } from "@/components/tool-comparison"
import { CompareAssistant } from "@/components/compare-assistant"

export const metadata = {
  title: "Tool Comparison - DataNova Analytics",
  description:
    "Compare data modeling and BI tools: LookML vs dbt vs Metabase. Find the perfect tool for your data stack.",
  keywords: "tool comparison, LookML, dbt, Metabase, Superset, Holistics, data modeling, BI tools",
}

export default function CompareToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <CompareHero />
        <ToolComparison />
        <CompareAssistant />
      </main>
      <Footer />
    </div>
  )
}
