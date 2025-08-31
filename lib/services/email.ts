import nodemailer from 'nodemailer'
import { ContactSubmission } from '@prisma/client'

class EmailService {
  private transporter: nodemailer.Transporter

  constructor() {
    this.transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  }

  async sendContactNotification(submission: ContactSubmission) {
    const fullName = `${submission.firstName} ${submission.lastName}`
    
    const emailContent = `
New Contact Form Submission

Name: ${fullName}
Email: ${submission.email}
Phone: ${submission.phone || 'Not provided'}
Company: ${submission.company || 'Not provided'}

Service Category: ${submission.serviceCategory || 'Not specified'}
Specific Service: ${submission.projectType}
Budget Range: ${submission.budget || 'Not specified'}
Timeline: ${submission.timeline || 'Not specified'}

Project Details:
${submission.message}

${submission.uploadedFiles ? `Uploaded Files:
${submission.uploadedFiles}` : ''}

${submission.attachments ? `Links & References:
${submission.attachments}` : ''}

Newsletter Subscription: ${submission.newsletterSubscribed ? 'Yes' : 'No'}

---
This message was sent from the AngaTech contact form.
Submission ID: ${submission.id}
Received at: ${submission.createdAt.toLocaleString()}
    `.trim()

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `New ${submission.projectType} Inquiry from ${fullName}`,
      text: emailContent,
      html: this.generateHTMLContent(submission),
    }

    try {
      const info = await this.transporter.sendMail(mailOptions)
      console.log('Contact notification email sent:', info.messageId)
      return { success: true, messageId: info.messageId }
    } catch (error) {
      console.error('Failed to send contact notification email:', error)
      throw new Error('Failed to send email notification')
    }
  }

  async sendAutoReply(submission: ContactSubmission) {
    const fullName = `${submission.firstName} ${submission.lastName}`
    
    const emailContent = `
Dear ${fullName},

Thank you for reaching out to AngaTech! We have received your inquiry about ${submission.projectType}.

We're excited to learn more about your project and will review your requirements carefully. Our team will get back to you within 24 hours with a detailed response and proposal.

In the meantime, if you have any urgent questions, please don't hesitate to contact us directly.

Best regards,
The AngaTech Team

---
Your submission details:
Service: ${submission.projectType}
Budget: ${submission.budget || 'To be discussed'}
Timeline: ${submission.timeline || 'To be discussed'}
Submission ID: ${submission.id}
    `.trim()

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: submission.email,
      subject: 'Thank you for contacting AngaTech - We\'ll be in touch soon!',
      text: emailContent,
      html: this.generateAutoReplyHTML(submission),
    }

    try {
      const info = await this.transporter.sendMail(mailOptions)
      console.log('Auto-reply email sent:', info.messageId)
      return { success: true, messageId: info.messageId }
    } catch (error) {
      console.error('Failed to send auto-reply email:', error)
      throw new Error('Failed to send auto-reply email')
    }
  }

  private generateHTMLContent(submission: ContactSubmission): string {
    const fullName = `${submission.firstName} ${submission.lastName}`
    
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1e40af; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1e40af; }
        .value { margin-left: 10px; }
        .section { margin-top: 25px; padding-top: 20px; border-top: 1px solid #e2e8f0; }
        .footer { margin-top: 25px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
            <div class="field">
                <span class="label">Name:</span>
                <span class="value">${fullName}</span>
            </div>
            <div class="field">
                <span class="label">Email:</span>
                <span class="value">${submission.email}</span>
            </div>
            <div class="field">
                <span class="label">Phone:</span>
                <span class="value">${submission.phone || 'Not provided'}</span>
            </div>
            <div class="field">
                <span class="label">Company:</span>
                <span class="value">${submission.company || 'Not provided'}</span>
            </div>
            
            <div class="section">
                <div class="field">
                    <span class="label">Service Category:</span>
                    <span class="value">${submission.serviceCategory || 'Not specified'}</span>
                </div>
                <div class="field">
                    <span class="label">Specific Service:</span>
                    <span class="value">${submission.projectType}</span>
                </div>
                <div class="field">
                    <span class="label">Budget Range:</span>
                    <span class="value">${submission.budget || 'Not specified'}</span>
                </div>
                <div class="field">
                    <span class="label">Timeline:</span>
                    <span class="value">${submission.timeline || 'Not specified'}</span>
                </div>
            </div>
            
            <div class="section">
                <div class="field">
                    <span class="label">Project Details:</span>
                    <div class="value" style="margin-top: 10px; white-space: pre-wrap;">${submission.message}</div>
                </div>
            </div>
            
            ${submission.uploadedFiles ? `
            <div class="section">
                <div class="field">
                    <span class="label">Uploaded Files:</span>
                    <div class="value" style="margin-top: 10px; white-space: pre-wrap;">${submission.uploadedFiles}</div>
                </div>
            </div>
            ` : ''}
            
            ${submission.attachments ? `
            <div class="section">
                <div class="field">
                    <span class="label">Links & References:</span>
                    <div class="value" style="margin-top: 10px; white-space: pre-wrap;">${submission.attachments}</div>
                </div>
            </div>
            ` : ''}
            
            <div class="footer">
                <p>This message was sent from the AngaTech contact form.</p>
                <p>Submission ID: ${submission.id}</p>
                <p>Received at: ${submission.createdAt.toLocaleString()}</p>
            </div>
        </div>
    </div>
</body>
</html>
    `
  }

  private generateAutoReplyHTML(submission: ContactSubmission): string {
    const fullName = `${submission.firstName} ${submission.lastName}`
    
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Thank you for contacting AngaTech</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1e40af; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
        .message { margin-bottom: 20px; }
        .details { background: #e2e8f0; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .footer { margin-top: 25px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Thank you for contacting AngaTech!</h1>
        </div>
        <div class="content">
            <div class="message">
                <p>Dear ${fullName},</p>
                <p>Thank you for reaching out to AngaTech! We have received your inquiry about <strong>${submission.projectType}</strong>.</p>
                <p>We're excited to learn more about your project and will review your requirements carefully. Our team will get back to you within <strong>24 hours</strong> with a detailed response and proposal.</p>
                <p>In the meantime, if you have any urgent questions, please don't hesitate to contact us directly.</p>
            </div>
            
            <div class="details">
                <h3>Your submission details:</h3>
                <p><strong>Service:</strong> ${submission.projectType}</p>
                <p><strong>Budget:</strong> ${submission.budget || 'To be discussed'}</p>
                <p><strong>Timeline:</strong> ${submission.timeline || 'To be discussed'}</p>
                <p><strong>Submission ID:</strong> ${submission.id}</p>
            </div>
            
            <div class="message">
                <p>Best regards,<br>The AngaTech Team</p>
            </div>
            
            <div class="footer">
                <p>This is an automated response. Please do not reply to this email.</p>
            </div>
        </div>
    </div>
</body>
</html>
    `
  }
}

export const emailService = new EmailService()
export default emailService
