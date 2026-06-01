"use client"

import Link from "next/link"
import PageHeader from "@/components/page-header"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  const values = [
    {
      title: "Accessibility First",
      description: "Building interfaces that work for everyone, with WCAG compliance and inclusive design at the core.",
    },
    {
      title: "Evidence-Driven",
      description: "Decisions backed by data, user research, and measurable outcomes—not assumptions.",
    },
    {
      title: "Clarity over Cleverness",
      description: "Simple, intuitive solutions that solve real problems without unnecessary complexity.",
    },
    {
      title: "Reliability & Ownership",
      description: "Shipping robust code with comprehensive testing and taking full responsibility for outcomes.",
    },
  ]

  const skills = [
    "React.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "HTML/CSS",
    "WCAG Accessibility",
    "UI/UX Design",
    "REST APIs",
    "Git & Version Control",
    "Agile Methodologies",
    "Performance Optimization",
    "Responsive Design",
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHeader
        title="Frontend + UX Engineer"
        description="Shipping accessible, high-performance React interfaces that measurably improve user outcomes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      {/* Bio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="mb-16">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I bridge the gap between design and code by creating interfaces that are not just beautiful, but accessible, performant, and measurably effective. I've developed a deep passion for solving complex UX problems through thoughtful engineering.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My approach centers on understanding user needs, translating them into elegant code, and continuously validating that the solution works. I believe that great frontend engineering means shipping products that don't just function well—they delight users and scale seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Work With Me</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card border border-border p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out group cursor-default"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                  {value.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out cursor-default"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to work together?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
