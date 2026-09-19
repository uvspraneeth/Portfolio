"use client"

import { motion } from "framer-motion"
import { Calendar, Download, Star, Users, Briefcase, GraduationCap } from "lucide-react"

const testimonials = [
  {
    name: "SARAH JOHNSON",
    role: "VP OF DATA, TECHCORP",
    content:
      "ALEX DELIVERED EXCEPTIONAL RESULTS ON OUR CUSTOMER SEGMENTATION PROJECT. HIS INSIGHTS DROVE A 25% INCREASE IN CONVERSION RATES.",
    rating: 5,
  },
  {
    name: "MICHAEL RODRIGUEZ",
    role: "CTO, STARTUPXYZ",
    content:
      "WORKING WITH ALEX WAS A GAME-CHANGER. HIS ML EXPERTISE HELPED US SCALE OUR RECOMMENDATION ENGINE TO MILLIONS OF USERS.",
    rating: 5,
  },
]

export default function HireMe() {
  return (
    <section id="hire" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-6">READY.TO.WORK.TOGETHER?</h2>
          <div className="box-3d content-box bg-white">
            <p className="text-sm sm:text-base md:text-lg text-black robot-font-light">
              I'M CURRENTLY AVAILABLE FOR NEW PROJECTS AND COLLABORATIONS.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              LET'S TRANSFORM YOUR DATA INTO COMPETITIVE ADVANTAGES.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="box-3d bg-white p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl robot-font-bold mb-6 text-black">WHAT.I.OFFER</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="box-3d p-3 bg-white mt-1 flex-shrink-0">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="robot-font text-black text-base sm:text-lg mb-2">CONSULTING & STRATEGY</h4>
                    <p className="text-xs sm:text-sm text-black robot-font-light leading-relaxed">
                      DATA STRATEGY DEVELOPMENT, ML ROADMAPS, AND TECHNICAL LEADERSHIP FOR YOUR DATA SCIENCE INITIATIVES
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="box-3d p-3 bg-white mt-1 flex-shrink-0">
                    <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="robot-font text-black text-base sm:text-lg mb-2">PROJECT DEVELOPMENT</h4>
                    <p className="text-xs sm:text-sm text-black robot-font-light leading-relaxed">
                      END-TO-END ML SOLUTIONS, DATA PIPELINES, AND SCALABLE AI SYSTEMS FROM CONCEPT TO PRODUCTION
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="box-3d p-3 bg-white mt-1 flex-shrink-0">
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="robot-font text-black text-base sm:text-lg mb-2">TEAM TRAINING</h4>
                    <p className="text-xs sm:text-sm text-black robot-font-light leading-relaxed">
                      WORKSHOPS, MENTORING, AND SKILL DEVELOPMENT PROGRAMS FOR DATA TEAMS AND TECHNICAL STAFF
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="btn-3d-large robot-font flex-1">
                  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  DOWNLOAD RESUME
                </button>
                <button className="btn-3d-large robot-font flex-1">
                  <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  SCHEDULE CALL
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl sm:text-2xl robot-font-bold text-black mb-6">CLIENT.TESTIMONIALS</h3>

            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="box-3d bg-white p-4 sm:p-6"
              >
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-black fill-current" />
                  ))}
                </div>
                <p className="text-black mb-4 robot-font-light text-xs sm:text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="robot-font text-black text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-black robot-font-light">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center box-3d bg-black p-6 lg:p-8 text-black"
        >
          <h3 className="text-xl sm:text-2xl robot-font-bold mb-4">CURRENTLY AVAILABLE</h3>
          <p className="mb-6 robot-font-light text-sm sm:text-base text-slate-900">
            I'M ACCEPTING NEW PROJECTS STARTING FEBRUARY 2024.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            LET'S DISCUSS YOUR DATA SCIENCE NEEDS.
          </p>
          <button className="btn-3d-large bg-white text-black border-white hover:bg-gray-100 robot-font">
            START A CONVERSATION
          </button>
        </motion.div>
      </div>
    </section>
  )
}
