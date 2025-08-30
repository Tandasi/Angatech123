import Link from "next/link"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Image src="/Screenshot 2025-08-23 113551.png" alt="Logo" width={32} height={32} />
              </div>
              <span className="font-heading text-xl font-bold text-foreground">AngaTech</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering African businesses and organizations with advanced analytics, 
              actionable insights, and scalable data solutions for growth and innovation..
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link
                href="hello@anga-tech.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Data Engineering
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Cloud Deployments
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Dashboard Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Database Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Data Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  View Portfolio
                </Link>
              </li>
              <li>
                <Link href="/compare-tools" className="text-muted-foreground hover:text-primary transition-colors">
                  Tool Comparison
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2024 AngaTech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  )
}
