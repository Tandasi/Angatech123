"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="h-fit">
        <CardContent className="p-8 text-center">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Message Sent Successfully!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for reaching out. We'll get back to you within 24 hours with a detailed response to your inquiry.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">Send Us a Message</CardTitle>
        <p className="text-muted-foreground">
          Tell us about your project and we'll provide a detailed proposal within 48 hours.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" placeholder="First Name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" placeholder="Last Name" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" placeholder="Email Address" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company/Organization</Label>
            <Input id="company" placeholder="Your Company Name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectType">Project Type *</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dashboard">Analytics & Dashboard</SelectItem>
                <SelectItem value="webapp">Web Services</SelectItem>
                <SelectItem value="database">Database Management</SelectItem>
                <SelectItem value="cloud-computing">Cloud Computing</SelectItem>
                <SelectItem value="integration">Data Integration</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Estimated Budget</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-10k">Under Ksh 1,500,000</SelectItem>
                <SelectItem value="10k-25k">Ksh 1,500,000 - Ksh 3,750,000</SelectItem>
                <SelectItem value="25k-50k">Ksh 3,750,000 - Ksh 7,500,000</SelectItem>
                <SelectItem value="50k-100k">Ksh 7,500,000 - Ksh 15,000,000</SelectItem>
                <SelectItem value="over-100k">Over Ksh 15,000,000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Project Timeline</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="When do you need this completed?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="3-months">Within 3 months</SelectItem>
                <SelectItem value="6-months">Within 6 months</SelectItem>
                <SelectItem value="flexible">Flexible timeline</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Project Details *</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project goals, current challenges, and any specific requirements..."
              rows={5}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <Label htmlFor="newsletter" className="text-sm">
              Subscribe to our newsletter for data insights and project updates
            </Label>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending Message...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
