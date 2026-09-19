"use client"

import { motion } from "framer-motion"
import { Brain, Cloud, Code, Database, MapPin, Mail, Phone, Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { siteAssets } from "@/lib/site-assets"

const skills = [
  {
    icon: Code,
    name: "PYTHON ",
    description: "Advanced programming in Python for data analysis and modeling",
  },
  {
    icon: Brain,
    name: "MACHINE LEARNING",
    description: "Deep expertise in ML algorithms, PyTorch, and TensorFlow",
  },
  {
    icon: Cloud,
    name: "GOOGLE CLOUD & AZURE",
    description: "Cloud-native solutions and scalable data pipelines",
  },
  {
    icon: Database,
    name: "DATA ENGINEERING",
    description: "ETL processes, data warehousing, and big data technologies",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-6">ABOUT.ME</h2>
          <div className="box-3d content-box bg-white">
            <p className="text-sm sm:text-base md:text-lg text-black robot-font-light leading-relaxed">
              MY JOURNEY BEGAN WITH A FASCINATION FOR PATTERNS HIDDEN IN DATA.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              WHAT STARTED AS CURIOSITY EVOLVED INTO A PASSION FOR BUILDING
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              INTELLIGENT SYSTEMS THAT SOLVE REAL-WORLD PROBLEMS.
            </p>
          </div>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="box-3d bg-white p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Profile Image */}
              <div className="flex justify-center md:justify-start">
                <div className="profile-frame">
                  <Image
                    src={siteAssets.profile.src}
                    alt={siteAssets.profile.alt}
                    width={240}
                    height={240}
                    priority
                    className="profile-image"
                  />
                  <span className="profile-status" aria-hidden="true" />
                </div>
              </div>

              {/* Profile Information */}
              <div className="space-y-4 lg:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl robot-font-bold text-black mb-2">ALEX CHEN</h3>
                  <p className="text-sm sm:text-base lg:text-lg robot-font text-black mb-1">
                    DATA SCIENTIST & ML ENGINEER
                  </p>
                  <div className="flex items-center text-black robot-font-light mb-4 text-sm">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    SAN FRANCISCO, CA
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-black robot-font-light leading-relaxed text-sm sm:text-base">
                    PASSIONATE ABOUT TRANSFORMING COMPLEX DATA INTO ACTIONABLE INSIGHTS. SPECIALIZED IN MACHINE
                    LEARNING, DEEP LEARNING, AND CLOUD-BASED AI SOLUTIONS.
                  </p>
                  <p className="text-black robot-font-light leading-relaxed text-sm sm:text-base">
                    5+ YEARS EXPERIENCE ACROSS FINTECH, HEALTHCARE, AND E-COMMERCE INDUSTRIES. COMMITTED TO
                    DEMOCRATIZING AI AND MAKING ADVANCED ANALYTICS ACCESSIBLE TO BUSINESS STAKEHOLDERS.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-2">
                  <div className="flex items-center text-black robot-font-light text-sm">
                    <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span className="break-all">ALEX.CHEN@EMAIL.COM</span>
                  </div>
                  <div className="flex items-center text-black robot-font-light text-sm">
                    <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                    +1 (555) 123-4567
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 pt-4">
                  <button className="btn-3d-icon">
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                  <button className="btn-3d-icon">
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                  <button className="btn-3d-icon">
                    <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t-2 border-black">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl robot-font-bold text-black">5+</div>
                    <div className="text-xs robot-font-light text-black">YEARS EXP</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl robot-font-bold text-black">50+</div>
                    <div className="text-xs robot-font-light text-black">PROJECTS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl robot-font-bold text-black">15+</div>
                    <div className="text-xs robot-font-light text-black">CLIENTS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="box-3d bg-white p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl robot-font-bold text-black mb-4">EDUCATION</h4>
              <div className="space-y-3">
                <div>
                  <div className="robot-font text-black text-sm sm:text-base">M.S. DATA SCIENCE</div>
                  <div className="robot-font-light text-black text-xs sm:text-sm">STANFORD UNIVERSITY • 2019</div>
                </div>
                <div>
                  <div className="robot-font text-black text-sm sm:text-base">B.S. COMPUTER SCIENCE</div>
                  <div className="robot-font-light text-black text-xs sm:text-sm">UC BERKELEY • 2017</div>
                </div>
              </div>
            </div>

            <div className="box-3d bg-white p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl robot-font-bold text-black mb-4">CERTIFICATIONS</h4>
              <div className="space-y-3">
                <div>
                  <div className="robot-font text-black text-sm sm:text-base">GCP PROFESSIONAL ML ENGINEER</div>
                  <div className="robot-font-light text-black text-xs sm:text-sm">GOOGLE CLOUD • 2023</div>
                </div>
                <div>
                  <div className="robot-font text-black text-sm sm:text-base">AWS CERTIFIED ML SPECIALTY</div>
                  <div className="robot-font-light text-black text-xs sm:text-sm">AMAZON WEB SERVICES • 2022</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="box-3d bg-white p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl robot-font-bold mb-4 text-black">MY.STORY</h3>
              <p className="text-black robot-font-light leading-relaxed mb-4 text-sm sm:text-base">
                WITH OVER 5 YEARS OF EXPERIENCE IN DATA SCIENCE, I'VE WORKED ACROSS INDUSTRIES FROM FINTECH TO
                HEALTHCARE, ALWAYS DRIVEN BY THE QUESTION: "WHAT STORY DOES THIS DATA TELL?"
              </p>
              <p className="text-black robot-font-light leading-relaxed text-sm sm:text-base">
                I'M PASSIONATE ABOUT DEMOCRATIZING AI AND MAKING COMPLEX ALGORITHMS ACCESSIBLE TO BUSINESS STAKEHOLDERS.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="box-3d bg-white p-3 sm:p-4 transition-all duration-300 group"
              >
                <skill.icon className="h-6 w-6 sm:h-8 sm:w-8 text-black mb-3" />
                <h4 className="robot-font text-black mb-2 text-xs sm:text-sm">{skill.name}</h4>
                <p className="text-xs text-black robot-font-light">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
