import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, ArrowRight } from "lucide-react"

export function CompareAssistant() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="text-center shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-center space-x-2">
              <MessageCircle className="h-6 w-6 text-primary" />
              <span className="font-heading text-2xl">Need Help Choosing?</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every project is unique. Our AI assistant can analyze your specific requirements and recommend the perfect
              tool combination for your data stack.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-background rounded-lg p-4">
                <h4 className="font-semibold mb-2">Project Analysis</h4>
                <p className="text-muted-foreground">
                  Tell us about your data sources, team size, and technical requirements
                </p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <h4 className="font-semibold mb-2">Custom Recommendations</h4>
                <p className="text-muted-foreground">Get personalized tool suggestions based on your specific needs</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <h4 className="font-semibold mb-2">Implementation Plan</h4>
                <p className="text-muted-foreground">Receive a step-by-step roadmap for your chosen solution</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Ask Our Assistant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
