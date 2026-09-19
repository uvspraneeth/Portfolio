import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import HireMe from "@/components/hire-me"
import Credentials from "@/components/credentials"
import AnnouncementBar from "@/components/announcement-bar"

export const metadata: Metadata = {
  title: "Alex Chen - Data Scientist & ML Engineer",
  description:
    "Curious and driven Data Scientist specializing in Python, Machine Learning, GCP, and deep learning frameworks. Transforming data into actionable insights.",
  keywords: ["Data Scientist", "Machine Learning", "Python", "GCP", "PyTorch", "TensorFlow", "AI"],
  authors: [{ name: "Alex Chen" }],
  openGraph: {
    title: "Alex Chen - Data Scientist & ML Engineer",
    description:
      "Curious and driven Data Scientist specializing in Python, Machine Learning, GCP, and deep learning frameworks.",
    type: "website",
    locale: "en_US",
    siteName: "Alex Chen Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen - Data Scientist & ML Engineer",
    description:
      "Curious and driven Data Scientist specializing in Python, Machine Learning, GCP, and deep learning frameworks.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Sketchy Grid Background */}
      <div className="fixed inset-0 sketchy-grid pointer-events-none" />

      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Credentials />
        <Projects />
        <Blog />
        <Contact />
        <HireMe />
      </main>
    </div>
  )
}
