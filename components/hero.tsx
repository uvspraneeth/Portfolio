"use client"

import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import TypingEffect from "@/components/typing-effect"

const jobTitles = [
  "DATA SCIENTIST",
  "ML ENGINEER",
  "DATA ANALYST",
  "AI ENGINEER",
  "DATA ENGINEER",
  "RESEARCH SCIENTIST",
]

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid" />
      <div className="hero-inner">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="eyebrow">Data science · machine learning · thoughtful systems</p>
          <h1 className="hero-title">
            I turn complex data into <span className="hero-accent"><TypingEffect
              words={jobTitles}
              typingSpeed={100}
              deletingSpeed={50}
              pauseTime={2000}
              className="inline-block"
            /></span>
          </h1>
          <p className="hero-copy">I&apos;m Uvs Praneeth, a data scientist and ML engineer building useful, explainable products from messy real-world data.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-actions"
        >
          <button onClick={scrollToAbout} className="primary-action">
            Explore my work
            <ArrowDown className="ml-2 h-4 w-4" />
          </button>

          <div className="hero-links">
            <a href="https://github.com/" aria-label="GitHub profile"><Github size={18} /></a>
            <a href="https://linkedin.com/" aria-label="LinkedIn profile"><Linkedin size={18} /></a>
            <a href="mailto:hello@example.com" aria-label="Send an email"><Mail size={18} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="scroll-cue"
        >
          <span>Scroll to explore</span><ArrowUpRight size={16} />
        </motion.div>
      </div>
    </section>
  )
}
