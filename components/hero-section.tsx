import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Globe, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-secondary rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-accent rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border-2 border-primary rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Scalable Data Intelligence for <span className="text-primary">Africa</span> and Beyond
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Empowering businesses across Africa and the diaspora with world-class data analytics, business
                intelligence, and cloud solutions. Transform your data into actionable insights.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href="/services">
                  View Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
                <Link href="/compare-tools">Compare Tools</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="text-base">
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg">
              {/* Animated Data Visualization */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-semibold">Live Analytics Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-chart-1 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-chart-2 rounded-full animate-pulse delay-100"></div>
                    <div className="w-3 h-3 bg-chart-3 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>

                {/* Mock Chart */}
                <div className="space-y-4">
                  <div className="flex items-end space-x-2 h-32">
                    <div className="bg-chart-1 w-8 h-16 rounded-t animate-pulse"></div>
                    <div className="bg-chart-2 w-8 h-24 rounded-t animate-pulse delay-100"></div>
                    <div className="bg-chart-3 w-8 h-20 rounded-t animate-pulse delay-200"></div>
                    <div className="bg-chart-1 w-8 h-28 rounded-t animate-pulse delay-300"></div>
                    <div className="bg-chart-2 w-8 h-18 rounded-t animate-pulse delay-400"></div>
                    <div className="bg-chart-3 w-8 h-26 rounded-t animate-pulse delay-500"></div>
                  </div>

                  {/* Mock Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <BarChart3 className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Revenue Growth</span>
                      </div>
                      <div className="text-xl font-bold text-primary mt-1">+24.5%</div>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-medium">Global Reach</span>
                      </div>
                      <div className="text-xl font-bold text-secondary mt-1">15 Countries</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-3 shadow-lg">
                <Zap className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
