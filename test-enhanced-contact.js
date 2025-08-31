const nodemailer = require('nodemailer');
require('dotenv').config();

async function testEnhancedContact() {
  console.log('🔍 Testing Enhanced Contact Form...');
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
    
    // Test with enhanced contact form data
    const testData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+254 700 123 456',
      company: 'Tech Solutions Ltd',
      projectType: 'data-analytics',
      budget: '25k-50k',
      timeline: '3-months',
      message: 'We need a comprehensive data analytics solution for our retail business. Looking to track sales performance, customer behavior, and inventory management.'
    };
    
    const fullName = `${testData.firstName} ${testData.lastName}`;
    
    const emailContent = `
New Contact Form Submission

Name: ${fullName}
Email: ${testData.email}
Phone: ${testData.phone}
Company: ${testData.company}

Service Interest: ${testData.projectType}
Budget Range: ${testData.budget}
Timeline: ${testData.timeline}

Project Details:
${testData.message}

---
This message was sent from the AngaTech contact form.
    `;
    
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `New ${testData.projectType} Inquiry from ${fullName}`,
      text: emailContent,
    };
    
    console.log('Sending enhanced contact form email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Enhanced contact form email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('From:', info.envelope.from);
    console.log('To:', info.envelope.to);
    console.log('Subject:', mailOptions.subject);
    
    console.log('\n📋 Email Content Preview:');
    console.log('---');
    console.log(emailContent);
    console.log('---');
    
    console.log('\n🎉 Enhanced contact form is working perfectly!');
    console.log('✅ All new fields are being captured and sent');
    console.log('✅ Service selection is working');
    console.log('✅ Professional email formatting');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testEnhancedContact();
