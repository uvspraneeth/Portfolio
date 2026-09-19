"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Credentials", href: "#credentials" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
  { name: "Hire Me", href: "#hire" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="site-nav" aria-label="Main navigation">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="#home" className="brand-mark" aria-label="Uvs Praneeth home">
              <span>UP</span>
              <strong>Uvs.Praneeth</strong>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="desktop-nav">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-link"
                >
                  {item.name.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="header-tools">
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="menu-toggle"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
            <div className="mobile-menu-overlay md:hidden" onClick={() => setIsOpen(false)} aria-hidden="true" />
            <div className="mobile-menu-content md:hidden">
              <div className="mobile-nav">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="nav-link"
                  >
                    {item.name.toUpperCase()}
                  </button>
                ))}
              </div>
              <a href="#contact" className="text-link" onClick={() => setIsOpen(false)}>
                Start a conversation <ArrowUpRight size={16} />
              </a>
            </div>
          </>
        )}
      </nav>
    </header>
  )
}
