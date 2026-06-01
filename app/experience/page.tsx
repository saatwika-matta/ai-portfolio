'use client'

import { ChevronRight } from 'lucide-react'
import PageHeader from "@/components/page-header"

export default function ExperiencePage() {
  const experiences = [
    {
      company: 'Onyva Solutions',
      position: 'UI/UX & Full Stack Intern',
      period: 'Jan 2025 – June 2025',
      highlights: [
        'Built React + TypeScript booking/reporting UIs; improved Lighthouse 20% via code-splitting and memoization.',
        'Converted Figma to responsive, WCAG-compliant components; standardized patterns/design tokens.',
        'Implemented form/state management with client-side validation; cut booking errors 15%.',
        'Co-designed and documented REST APIs; clear request/response contracts and edge-case handling.',
        'Maintained Node.js/Express services for bookings/analytics with input sanitization and error handling.',
        'Ran GUI regressions/smoke tests; collaborated via Git PRs and reviews in Agile sprints.',
      ],
    },
    {
      company: 'Cognizant Technology Solutions',
      position: 'Frontend Engineer',
      period: 'Aug 2022 – July 2023',
      highlights: [
        'Enhanced OEC Provider 360 platform performance by 25% using React.js, JavaScript, and HTML/CSS, optimizing front-end architecture for scalability and high performance.',
        'Designed accessible and responsive UI components in collaboration with UX/UI teams, improving user satisfaction by 30% and reducing UI-related issues.',
        'Reduced development time by 15% by adopting Agile methodologies, collaborating with cross-functional teams in a high-demand, fast-paced environment.',
        'Contributed to front-end architecture in an agile, high-demand environment, ensuring system robustness.',
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHeader
        title="Work Experience"
        description="A track record of delivering high-impact solutions, driving performance improvements, and building accessible, scalable products."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Experience", href: "/experience" },
        ]}
      />

      {/* Experience Timeline */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 ease-out">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-6 border-b border-border">
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-2">{exp.company}</h2>
                    <p className="text-lg font-semibold text-foreground">{exp.position}</p>
                  </div>
                  <div className="text-sm font-medium text-primary/70 whitespace-nowrap bg-primary/5 px-4 py-2 rounded-full">
                    {exp.period}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-foreground/80">
                      <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-base leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
