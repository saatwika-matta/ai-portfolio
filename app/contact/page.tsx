'use client'

import { useState } from 'react'
import Link from 'next/link'
import PageHeader from "@/components/page-header"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <PageHeader
        title="Get in Touch"
        description="Have a project in mind or want to discuss how I can help? I'd love to hear from you. Reach out and let's create something great together."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-8">
              {/* Email */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Email</h3>
                <a
                  href="mailto:hello@saatwika.com"
                  className="text-primary font-medium hover:text-primary/80 transition-all duration-300 ease-out text-lg break-all"
                >
                  hello@saatwika.com
                </a>
              </div>

              {/* LinkedIn */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">LinkedIn</h3>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:text-primary/80 transition-all duration-300 ease-out text-lg inline-flex items-center gap-2"
                >
                  Visit My Profile
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6l6 6m0 0l-6 6m6-6H3" />
                  </svg>
                </a>
              </div>

              {/* Quick Links */}
              <div className="pt-8 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link
                    href="/about"
                    className="block text-foreground hover:text-primary transition-all duration-300 ease-out"
                  >
                    → About Me
                  </Link>
                  <Link
                    href="/projects"
                    className="block text-foreground hover:text-primary transition-all duration-300 ease-out"
                  >
                    → My Projects
                  </Link>
                  <Link
                    href="/"
                    className="block text-foreground hover:text-primary transition-all duration-300 ease-out"
                  >
                    → Home
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send me a message</h2>

              {submitted ? (
                <div className="bg-secondary/50 border border-primary rounded-lg p-6 text-center">
                  <p className="text-foreground font-medium">Thank you for your message! 🎉</p>
                  <p className="text-muted-foreground text-sm mt-2">I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ease-out"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ease-out"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ease-out resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
