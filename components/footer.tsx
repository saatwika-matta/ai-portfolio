"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: Mail,
      href: "mailto:saatwikam@gmail.com",
      label: "Email",
    },
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FX</span>
              </div>
              <span className="font-bold text-foreground">Frontend XP</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Shipping accessible, AI-aware React interfaces that measurably improve user outcomes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#projects"
                  className="text-foreground/60 hover:text-primary transition-all duration-300 ease-out text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-primary transition-all duration-300 ease-out text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-primary transition-all duration-300 ease-out text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-foreground/60 hover:text-primary transition-all duration-300 ease-out text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Get In Touch</h4>
            <p className="text-foreground/60 text-sm mb-4">
              Available for freelance projects, full-time opportunities, and consulting.
            </p>
            <Link
              href="mailto:saatwikam@gmail.com"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-all duration-300 ease-out"
            >
              saatwikam@gmail.com →
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-foreground/60 text-sm mb-4 sm:mb-0">© {currentYear} Frontend XP. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/30 transition-colors duration-300 ease-in-out hover:bg-primary/5"
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
