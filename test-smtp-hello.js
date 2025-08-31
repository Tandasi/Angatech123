const nodemailer = require('nodemailer');
require('dotenv').config();

async function testHelloEmail() {
  console.log('Testing hello@anga-tech.com email configuration...');
  
  // Use working SMTP credentials but send from hello@anga-tech.com
  const testConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'gift.tandasi@gmail.com', // Working credentials
      pass: 'ojmghxzpjkywnblf',
    },
  };
  
  try {
    // Create transporter
    const transporter = nodemailer.createTransport(testConfig);
    
    console.log('✅ Transporter created successfully');
    
    // Verify connection
    console.log('Verifying connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully');
    
    // Send test email appearing to come from hello@anga-tech.com
    console.log('Sending test email from hello@anga-tech.com...');
    const mailOptions = {
      from: '"AngaTech" <hello@anga-tech.com>', // Appears to come from this address
      to: 'gift.tandasi@gmail.com', // Send to yourself for testing
      subject: 'SMTP Test - From hello@anga-tech.com',
      text: 'This email appears to come from hello@anga-tech.com but is sent through the working SMTP account.',
      html: '<h1>SMTP Test</h1><p>Email from hello@anga-tech.com using working SMTP credentials!</p>'
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('From:', info.envelope.from);
    console.log('To:', info.envelope.to);
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testHelloEmail();
