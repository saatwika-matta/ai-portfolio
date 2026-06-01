'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs?: Array<{ label: string; href: string }>
}

export default function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-secondary/20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                <Link
                  href={crumb.href}
                  className="text-sm text-foreground/60 hover:text-primary transition-colors duration-300 ease-out"
                >
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-foreground/40" />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Page Title and Description */}
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
