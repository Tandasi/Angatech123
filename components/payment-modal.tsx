"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CreditCard, Lock, CheckCircle } from "lucide-react"

interface PaymentModalProps {
  consultationType: string
  price: string
  duration: string
  children: React.ReactNode
}

export function PaymentModal({ consultationType, price, duration, children }: PaymentModalProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsProcessing(false)
    setIsComplete(true)
  }

  if (isComplete) {
    return (
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-6">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Payment Successful!</h3>
            <p className="text-muted-foreground mb-6">
              Your {consultationType} has been booked. You'll receive a calendar invite and meeting details via email
              shortly.
            </p>
            <Button onClick={() => setIsComplete(false)} className="w-full">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Complete Your Booking</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Booking Summary */}
          <Card className="bg-muted/50">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{consultationType}</span>
                <span className="font-bold text-primary">{price}</span>
              </div>
              <div className="text-sm text-muted-foreground">Duration: {duration}</div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <form onSubmit={handlePayment} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <div className="relative">
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="pl-10" />
                <CreditCard className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Cardholder Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ng">Nigeria</SelectItem>
                  <SelectItem value="ke">Kenya</SelectItem>
                  <SelectItem value="za">South Africa</SelectItem>
                  <SelectItem value="gh">Ghana</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2 text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
              <Lock className="h-4 w-4" />
              <span>Your payment information is secure and encrypted. We use Stripe for payment processing.</span>
            </div>

            <Button type="submit" className="w-full" disabled={isProcessing}>
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Processing Payment...
                </>
              ) : (
                <>Pay {price}</>
              )}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
