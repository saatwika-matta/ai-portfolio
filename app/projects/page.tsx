"use client"

import { ArrowRight } from 'lucide-react'
import Link from "next/link"
import PageHeader from "@/components/page-header"
import { Card } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "FitVibe",
    description:
      "Full-stack student lifestyle monitoring tool that aggregates weather data and events with activity logs. Implemented API aggregation with server caching, pagination, and debounced/conditional fetches. Added validation and scheduled refreshes to stabilize trend reports.",
    metric: "25% Engagement Increase",
    tags: ["React.js", "Node.js", "Express.js", "APIs"],
    link: "#",
  },
  {
    id: 2,
    title: "COVID-19 Information Visual Dashboard",
    description:
      "Automated data collection and visualization platform using Selenium for web scraping and MongoDB for data storage. Built Pandas visualizations for comprehensive trend analysis. Enhanced pipeline with validation and retries to reduce chart errors and missing-data issues.",
    metric: "Automated Data Pipeline",
    tags: ["Python", "Selenium", "MongoDB", "Pandas"],
    link: "#",
  },
  {
    id: 3,
    title: "EduQuest",
    description:
      "Online learning platform prototype with comprehensive design-to-dev handoff. Translated requirements into user flows and interactive prototypes with accessibility guidance. Conducted peer usability tests, improving task-completion time by 30% through iterative refinements.",
    metric: "30% Faster Task Completion",
    tags: ["Figma", "UX Design", "Accessibility", "Prototyping"],
    link: "#",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHeader
        title="Projects & Case Studies"
        description="A selection of projects where I've focused on accessibility, performance, and measurable user outcomes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
        ]}
      />

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden bg-card hover-lift border border-border group h-full flex flex-col"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="p-8 h-full flex flex-col">
                  {/* Metric Badge */}
                  <div className="inline-flex items-center mb-4 w-fit">
                    <span className="px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                      {project.metric}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-all duration-300 ease-out">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

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
                    className="inline-flex items-center text-primary hover:text-primary/80 font-semibold group/link transition-all duration-300 ease-out"
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
    </main>
  )
}
