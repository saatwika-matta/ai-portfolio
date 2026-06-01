"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Real-time data visualization platform with predictive analytics, built with React and WebSocket integration for seamless updates.",
    tags: ["React", "TypeScript", "WebSocket"],
    link: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform Redesign",
    description:
      "Comprehensive UX overhaul resulting in 40% increase in conversion rates through accessibility improvements and intuitive navigation.",
    tags: ["React", "Accessibility", "UX"],
    link: "#",
  },
  {
    id: 3,
    title: "Mobile-First Component Library",
    description:
      "Scalable design system with 80+ accessible components, comprehensive documentation, and Storybook integration for teams.",
    tags: ["Component Library", "Design System", "Storybook"],
    link: "#",
  },
  {
    id: 4,
    title: "FlightSense AI Tool",
    description:
      "AI-powered flight insights aggregating 400+ traveler experiences from Reddit, YouTube, and news. Automated n8n pipeline with Streamlit interface helps users save 20-40% on bookings.",
    tags: ["Python", "Streamlit", "n8n", "AI"],
    link: "https://flightsense-ai-tool-nsu7ey3x3fqrsvhlcfplup.streamlit.app",
  },
]

export default function FeaturedWork() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Work</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Recent projects showcasing full-stack frontend development and UX expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden bg-card hover-lift border border-border group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-all duration-300 ease-out">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 flex-grow leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium group/link transition-all duration-300 ease-out"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-all duration-300 ease-out" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
