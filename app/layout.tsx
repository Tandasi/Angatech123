import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { AIAssistant } from "@/components/ai-assistant"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "AngaTech - Scalable Data Intelligence for Africa and Beyond",
  description:
    "World-class data analytics solutions serving Africa and the diaspora. Expert services in data engineering, business intelligence, and cloud deployments.",
  keywords: "data analytics, Africa, diaspora, business intelligence, data engineering, cloud solutions",
  generator: "AngaTech",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <AIAssistant />
      </body>
    </html>
  )
}
