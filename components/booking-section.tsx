"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Video, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    consultationType: consultationTypes[0].title,
    date: "",
    time: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setError(data.error || "Booking failed.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
    setIsLoading(false);
  };

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
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Booking Confirmed!</h3>
            <p className="text-muted-foreground mb-6">
              Thank you for booking. You'll receive a confirmation email with meeting details soon.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">Book Another</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="e.g. +254700000000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="consultationType">Consultation Type *</Label>
              <select
                id="consultationType"
                name="consultationType"
                value={form.consultationType}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              >
                {consultationTypes.map((c, idx) => (
                  <option key={idx} value={c.title}>{c.title}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date *</Label>
              <Input id="date" name="date" type="date" value={form.date} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time *</Label>
              <Input id="time" name="time" type="time" value={form.time} onChange={handleChange} required />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Booking..." : "Book Consultation"}
            </Button>
          </form>
        )}

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
  );
}
