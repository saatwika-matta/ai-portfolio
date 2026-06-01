"use client"
import { Card } from "@/components/ui/card"

const values = [
  {
    icon: "♿",
    title: "Accessibility First",
    description:
      "WCAG 2.1 AA compliance by default. Every interface I build is tested with screen readers and keyboard navigation.",
  },
  {
    icon: "📊",
    title: "Evidence-Driven",
    description:
      "Decisions backed by user research, analytics, and A/B testing. I measure impact through key metrics that matter.",
  },
  {
    icon: "✨",
    title: "Clarity over Cleverness",
    description:
      "Clean, maintainable code prioritized over impressive but fragile solutions. Future-proofing is non-negotiable.",
  },
  {
    icon: "🛡️",
    title: "Reliability & Ownership",
    description:
      "Full accountability for delivery. Proactive communication, meticulous testing, and performance monitoring included.",
  },
]

export default function ValueProposition() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Work With Me</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Core principles that guide every project and decision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="p-6 bg-background border border-border hover-lift group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl flex-shrink-0">{value.icon}</div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-all duration-300 ease-out">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
