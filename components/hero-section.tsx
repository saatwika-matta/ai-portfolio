"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
          Turning Complex Tasks Into{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Simple Flows</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
          Frontend + UX Engineer shipping accessible, AI-aware React interfaces that measurably improve user outcomes
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="#projects">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/20"
            >
              View My Work
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-primary hover:bg-accent/10 w-full sm:w-auto transition-all duration-300 ease-out hover:border-accent/70 bg-transparent"
            >
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
