const nodemailer = require('nodemailer');
require('dotenv').config();

async function testSMTP() {
  console.log('Testing SMTP configuration...');
  
  // Log environment variables (without sensitive data)
  console.log('SMTP_HOST:', process.env.SMTP_HOST);
  console.log('SMTP_PORT:', process.env.SMTP_PORT);
  console.log('SMTP_SECURE:', process.env.SMTP_SECURE);
  console.log('SMTP_USER:', process.env.SMTP_USER ? '***configured***' : 'NOT SET');
  console.log('SMTP_PASS:', process.env.SMTP_PASS ? '***configured***' : 'NOT SET');
  console.log('SMTP_FROM:', process.env.SMTP_FROM);
  
  // Check if all required variables are set
  const requiredVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM'];
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:', missingVars);
    return;
  }
  
  try {
         // Create transporter
     const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    
    console.log('✅ Transporter created successfully');
    
    // Verify connection
    console.log('Verifying connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully');
    
    // Send test email
    console.log('Sending test email...');
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_USER, // Send to yourself as a test
      subject: 'SMTP Test - AngaTech',
      text: 'This is a test email to verify SMTP configuration is working correctly.',
      html: '<h1>SMTP Test</h1><p>This is a test email to verify SMTP configuration is working correctly.</p>'
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    
  } catch (error) {
    console.error('❌ SMTP test failed:', error.message);
    
    // Provide helpful error messages
    if (error.code === 'EAUTH') {
      console.error('Authentication failed. Please check:');
      console.error('- Username and password are correct');
      console.error('- 2FA is enabled and you\'re using an App Password');
      console.error('- Less secure app access is enabled (if not using 2FA)');
    } else if (error.code === 'ECONNECTION') {
      console.error('Connection failed. Please check:');
      console.error('- SMTP_HOST and SMTP_PORT are correct');
      console.error('- Firewall/antivirus is not blocking the connection');
      console.error('- Network connectivity');
    } else if (error.code === 'ETIMEDOUT') {
      console.error('Connection timeout. Please check:');
      console.error('- Network connectivity');
      console.error('- SMTP server is accessible');
    }
  }
}

testSMTP();
