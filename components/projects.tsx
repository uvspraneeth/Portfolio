"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { projects } from "@/lib/portfolio-data"

export default function Projects() {
  return (
    <section id="projects" className="portfolio-section project-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-intro"
        >
          <p className="eyebrow">Selected work</p>
          <h2 className="section-heading">Projects that make data useful.</h2>
          <p className="section-lede">A small selection of systems, experiments, and products built to create measurable change.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <article className="project-card-inner">
                <div className="project-image-wrap">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="project-image"
                  />
                  <div className="project-links">
                    {project.github && <a href={project.github} aria-label={`View ${project.title} on GitHub`}><Github size={16} /></a>}
                    {project.demo && <a href={project.demo} aria-label={`Open ${project.title} demo`}><ExternalLink size={16} /></a>}
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-heading">
                    <h3>{project.title}</h3>
                    <span className="project-metric">{project.metric}</span>
                  </div>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a href={project.demo || project.github || "#"} className="text-link">
                    View case study <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
