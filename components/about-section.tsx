import { Card, CardContent } from "@/components/ui/card"
import { Globe, Heart, Target, Users } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Democratizing access to world-class data analytics across Africa and the diaspora.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Connecting African businesses with international markets through data-driven insights.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building sustainable tech ecosystems that empower local communities and entrepreneurs.",
    },
    {
      icon: Heart,
      title: "Diaspora Connection",
      description: "Bridging the gap between African diaspora expertise and continental opportunities.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Empowering Through Data
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AngaTech was founded with a vision to transform how businesses and organizations leverage
            data. We combine cutting-edge technology with deep understanding of local markets to deliver solutions that
            drive real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Our Commitment</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe that every business deserves access to
              the same caliber of data analytics. Our team combines
              diaspora expertise with continental insight to deliver solutions that are both globally competitive.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2024</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50M+</div>
                <div className="text-sm text-muted-foreground">Data Points Processed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Global Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
