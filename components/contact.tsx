"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 relative bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-6">LET'S.CONNECT</h2>
          <div className="box-3d content-box bg-white">
            <p className="text-sm sm:text-base md:text-lg text-black robot-font-light">
              READY TO DISCUSS YOUR NEXT DATA SCIENCE PROJECT?
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              LET'S TURN YOUR DATA INTO ACTIONABLE INSIGHTS.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="box-3d bg-white p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl robot-font-bold mb-6 text-black">GET.IN.TOUCH</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="box-3d p-3 bg-white flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                  <div className="min-w-0">
                    <p className="robot-font text-black text-sm sm:text-base">EMAIL</p>
                    <p className="text-black robot-font-light text-xs sm:text-sm break-all">ALEX.CHEN@EMAIL.COM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="box-3d p-3 bg-white flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                  <div>
                    <p className="robot-font text-black text-sm sm:text-base">PHONE</p>
                    <p className="text-black robot-font-light text-xs sm:text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="box-3d p-3 bg-white flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                  <div>
                    <p className="robot-font text-black text-sm sm:text-base">LOCATION</p>
                    <p className="text-black robot-font-light text-xs sm:text-sm">SAN FRANCISCO, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="box-3d bg-white p-6 lg:p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm robot-font text-black mb-2">
                    NAME
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full input-3d p-3 robot-font-light text-black bg-white focus:outline-none text-sm"
                    placeholder="YOUR FULL NAME"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm robot-font text-black mb-2">
                    EMAIL
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full input-3d p-3 robot-font-light text-black bg-white focus:outline-none text-sm"
                    placeholder="YOUR.EMAIL@EXAMPLE.COM"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm robot-font text-black mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full input-3d p-3 robot-font-light text-black bg-white focus:outline-none resize-none text-sm"
                    placeholder="TELL ME ABOUT YOUR PROJECT..."
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-3d-large w-full robot-font disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent mr-2" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center justify-center space-x-2 text-green-600 robot-font-light text-sm">
                    <CheckCircle className="h-5 w-5" />
                    <span>MESSAGE SENT SUCCESSFULLY!</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center justify-center space-x-2 text-red-600 robot-font-light text-sm">
                    <AlertCircle className="h-5 w-5" />
                    <span>ERROR SENDING MESSAGE. PLEASE TRY AGAIN.</span>
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
