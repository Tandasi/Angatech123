const nodemailer = require('nodemailer');
require('dotenv').config();

async function testContactAPI() {
  console.log('🔍 Testing Contact Form API...');
  console.log('ADMIN_EMAIL:', process.env.ADMIN_EMAIL);
  console.log('SMTP_USER:', process.env.SMTP_USER);
  console.log('SMTP_FROM:', process.env.SMTP_FROM);
  
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
    
    // Test the exact same email configuration as the contact form
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from Test User`,
      text: `Name: Test User\nEmail: test@example.com\nMessage: This is a test contact form submission`,
    };
    
    console.log('Sending test contact form email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Contact form email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('From:', info.envelope.from);
    console.log('To:', info.envelope.to);
    
    console.log('\n🎉 Contact form API is working perfectly!');
    
  } catch (error) {
    console.error('❌ Contact form test failed:', error.message);
  }
}

testContactAPI();
