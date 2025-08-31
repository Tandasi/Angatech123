const nodemailer = require('nodemailer');
require('dotenv').config();

async function testHelloEmailNew() {
  console.log('Testing hello@anga-tech.com with new App Password...');
  
  // Test with the new App Password credentials
  const testConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'hello@anga-tech.com',
      pass: 'nrfa urzs dkas odcs',
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
    
    // Send test email from hello@anga-tech.com
    console.log('Sending test email from hello@anga-tech.com...');
    const mailOptions = {
      from: '"AngaTech" <hello@anga-tech.com>',
      to: 'gift.tandasi@gmail.com', // Send to yourself for testing
      subject: 'SMTP Test - New App Password Working!',
      text: 'This email is sent using the new App Password for hello@anga-tech.com. SMTP is now fully working!',
      html: '<h1>SMTP Test Success!</h1><p>New App Password for hello@anga-tech.com is working perfectly!</p><p>Your app is now ready to send emails from hello@anga-tech.com</p>'
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('From:', info.envelope.from);
    console.log('To:', info.envelope.to);
    
    console.log('\n🎉 SUCCESS! hello@anga-tech.com SMTP is now working with App Password!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    
    if (error.code === 'EAUTH') {
      console.error('Authentication failed. Please check:');
      console.error('- App Password is correct: nrfa urzs dkas odcs');
      console.error('- 2FA is enabled on hello@anga-tech.com');
    }
  }
}

testHelloEmailNew();
