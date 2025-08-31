const nodemailer = require('nodemailer');
require('dotenv').config();

async function testInfoEmail() {
  console.log('🔍 Testing info@anga-tech.com email configuration...');
  console.log('SMTP_FROM:', process.env.SMTP_FROM);
  console.log('ADMIN_EMAIL:', process.env.ADMIN_EMAIL);
  
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    
    // Test contact form email
    const contactMailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from Test User`,
      text: `Name: Test User\nEmail: test@example.com\nMessage: Testing info@anga-tech.com configuration`,
    };
    
    console.log('Sending test contact form email...');
    const contactInfo = await transporter.sendMail(contactMailOptions);
    console.log('✅ Contact form email sent successfully!');
    console.log('Message ID:', contactInfo.messageId);
    console.log('From:', contactInfo.envelope.from);
    console.log('To:', contactInfo.envelope.to);
    
    // Test booking form email
    const bookingMailOptions = {
      from: process.env.SMTP_FROM,
      to: 'gift.tandasi@gmail.com', // Send to yourself for testing
      subject: `Booking Confirmation - Data Analytics`,
      text: `Hi Test User,

Thank you for booking a consultation with us at AngaTech!
Your session has been confirmed, and we're excited to connect.

Consultation Details
- Topic: Data Analytics
- Date & Time: Tomorrow, 10:00 AM
- Format: Online via Zoom
- Reference ID: TEST-123

Looking forward to a productive conversation.

Warm regards,
The AngaTech Team`,
    };
    
    console.log('\nSending test booking confirmation email...');
    const bookingInfo = await transporter.sendMail(bookingMailOptions);
    console.log('✅ Booking confirmation email sent successfully!');
    console.log('Message ID:', bookingInfo.messageId);
    console.log('From:', bookingInfo.envelope.from);
    console.log('To:', bookingInfo.envelope.to);
    
    console.log('\n🎉 Both forms are working with info@anga-tech.com!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testInfoEmail();
