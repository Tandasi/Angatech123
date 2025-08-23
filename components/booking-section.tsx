"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Video, Users } from "lucide-react"

export function BookingSection() {
  const consultationTypes = [
    {
      icon: Video,
      title: "Strategy Call",
      duration: "30 minutes",
      description: "Quick discussion about your project goals and how we can help",
      price: "Free",
    },
    {
      icon: Users,
      title: "Technical Deep Dive",
      duration: "60 minutes",
      description: "Detailed technical consultation with our engineering team",
      price: "",
    },
    {
      icon: Calendar,
      title: "Project Planning",
      duration: "90 minutes",
      description: "Comprehensive project scoping and timeline planning session",
      price: "",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-2xl flex items-center">
          <Calendar className="h-6 w-6 mr-3 text-primary" />
          Book a Consultation
        </CardTitle>
        <p className="text-muted-foreground">
          Schedule a call with our team to discuss your project in detail.
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {consultationTypes.map((consultation, index) => (
          <div
            key={index}
            className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-start space-x-3">
              <div className="bg-primary/10 rounded-lg p-2">
                <consultation.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{consultation.title}</h4>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>{consultation.duration}</span>
                  <span>•</span>
                  <span className="font-medium text-primary">{consultation.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{consultation.description}</p>
              </div>
            </div>
            <Button className="w-full mt-3 bg-transparent" variant="outline">
              Schedule {consultation.title}
            </Button>
          </div>
        ))}

        <div className="bg-muted/50 rounded-lg p-4 mt-6">
          <h4 className="font-semibold text-foreground mb-2">Booking Confirmation</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Once you schedule a consultation, you'll receive a confirmation message with call details.
            For paid sessions, payment instructions will be shared after booking.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Calendar invite with meeting link</li>
            <li>• SMS or email confirmation</li>
            <li>• Mpesa/ PayMe or Bank transfer for paid sessions</li>
            <li>• 24-hour cancellation policy</li>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="font-semibold">Call for Booking</p>
          <a href="tel:+254708944904" className="text-blue-600 hover:underline">
            +254 708944904
          </a>
        </div>
      </CardContent>
    </Card>
  )
}