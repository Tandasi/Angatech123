import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Phone, Clock, Globe } from "lucide-react"

export function ContactInfo() {
  const offices = [
    {
      city: "Nairobi",
      country: "Kenya",
      address: "Westlands, Nairobi",
      timezone: "EAT (UTC+3)",
      primary: false,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-2xl flex items-center">
          <Globe className="h-6 w-6 mr-3 text-primary" />
          Contact Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Direct Contact */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-primary/10 rounded-lg p-2">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Email</p>
              <p className="text-sm text-muted-foreground">hello@angatech-analytics.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-primary/10 rounded-lg p-2">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Phone</p>
              <p className="text-sm text-muted-foreground">+234 (0) 708944804</p>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div>
          <h4 className="font-semibold text-foreground mb-4 flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            Office Locations
          </h4>
          <div className="space-y-3">
            {offices.map((office, index) => (
              <div key={index} className="border border-border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-foreground">
                    {office.city}, {office.country}
                  </h5>
                  {office.primary && (
                    <Badge variant="secondary" className="text-xs">
                      Primary
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-1">{office.address}</p>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{office.timezone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-muted/50 rounded-lg p-4">
          <h4 className="font-semibold text-foreground mb-3 flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            Business Hours
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Monday - Friday</span>
              <span className="text-foreground">9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Saturday</span>
              <span className="text-foreground">10:00 AM - 2:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Sunday</span>
              <span className="text-foreground">Closed</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            * Times shown in West Africa Time (WAT). Emergency support available 24/7.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
