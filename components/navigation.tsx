"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-all duration-300 ease-out hover:opacity-80">
            <Image
              src="/images/saatwika-logp-removebg-preview.png"
              alt="Saatwika"
              width={400}
              height={113}
              className="h-24 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-all duration-300 ease-out text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/experience"
              className="text-foreground hover:text-primary transition-all duration-300 ease-out text-sm font-medium"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="text-foreground hover:text-primary transition-all duration-300 ease-out text-sm font-medium"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-all duration-300 ease-out text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-all duration-300 ease-out"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border animate-fade-in-up">
            <Link
              href="/about"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-all duration-300 ease-out"
            >
              About
            </Link>
            <Link
              href="/experience"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-all duration-300 ease-out"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-all duration-300 ease-out"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-all duration-300 ease-out"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
