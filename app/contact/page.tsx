import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { BookingSection } from "@/components/booking-section"
import { ContactInfo } from "@/components/contact-info"

export const metadata = {
  title: "Contact Us - Anga Tech",
  description:
    "Get in touch with Anga Tech. Book a consultation, request a quote, or discuss your data analytics project needs.",
  keywords: "contact, consultation, booking, data analytics, Africa, diaspora, project quote",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ContactHero />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ContactForm />
          <div className="space-y-8">
            <BookingSection />
            <ContactInfo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}