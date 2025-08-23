import { Badge } from "@/components/ui/badge"
import { MessageCircle, Calendar, Mail, Phone } from "lucide-react"

export function ContactHero() {
  const contactMethods = [
    { icon: MessageCircle, label: "Live Chat", description: "Instant responses" },
    { icon: Calendar, label: "Book Meeting", description: "Schedule consultation" },
    { icon: Mail, label: "Email Us", description: "Detailed inquiries" },
    { icon: Phone, label: "Call Direct", description: "Urgent matters" },
  ]

  return (
    <section className="bg-gradient-to-br from-background via-muted/30 to-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Badge variant="secondary" className="px-3 py-1">
              Get In Touch
            </Badge>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your data challenges into competitive advantages? Whether you're a startup in Lagos, a
            government agency in Nairobi, or a diaspora investor in London, we're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <method.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="font-semibold text-foreground mb-1">{method.label}</div>
              <div className="text-sm text-muted-foreground">{method.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
