import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from Portfolio Website

Name: ${name}
Email: ${email}
Message: ${message}

Sent from: Alex Chen Portfolio Website
Timestamp: ${new Date().toISOString()}
    `

    // In a real application, you would integrate with an email service like:
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    // - Resend
    // - EmailJS

    // For demonstration, we'll simulate sending the email
    // Replace this with actual email service integration
    console.log("Email would be sent to: uvs.praneeth@gmail.com")
    console.log("Email content:", emailContent)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would integrate with your preferred email service
    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: "uvs.praneeth@gmail.com",
      from: "noreply@alexchen-portfolio.com",
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
      replyTo: email
    })
    */

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
