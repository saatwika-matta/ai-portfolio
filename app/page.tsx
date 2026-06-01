"use client"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeaturedWork from "@/components/featured-work"
import ValueProposition from "@/components/value-proposition"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedWork />
      <ValueProposition />
      <Footer />
    </main>
  )
}
