const nodemailer = require('nodemailer');
require('dotenv').config();

async function testAlternativeSMTP() {
  console.log('Testing Alternative SMTP configuration...');
  
  // Test with alternative credentials
  const testConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'gift.tandasi@gmail.com',
      pass: 'ojmghxzpjkywnblf',
    },
  };
  
  console.log('Testing with:', testConfig.auth.user);
  
  try {
    // Create transporter
    const transporter = nodemailer.createTransport(testConfig);
    
    console.log('✅ Transporter created successfully');
    
    // Verify connection
    console.log('Verifying connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully');
    
    // Send test email
    console.log('Sending test email...');
    const mailOptions = {
      from: '"AngaTech" <gift.tandasi@gmail.com>',
      to: 'gift.tandasi@gmail.com',
      subject: 'SMTP Test - Alternative Configuration',
      text: 'This is a test email using the alternative SMTP configuration.',
      html: '<h1>SMTP Test</h1><p>Alternative configuration test successful!</p>'
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    
  } catch (error) {
    console.error('❌ Alternative SMTP test failed:', error.message);
    
    if (error.code === 'EAUTH') {
      console.error('Authentication failed. Please check:');
      console.error('- Username and password are correct');
      console.error('- 2FA is enabled and you\'re using an App Password');
      console.error('- Less secure app access is enabled (if not using 2FA)');
    }
  }
}

testAlternativeSMTP();
