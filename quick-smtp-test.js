const nodemailer = require('nodemailer');
require('dotenv').config();

async function quickSMTPTest() {
  console.log('🔍 Quick SMTP Test...');
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
    
    await transporter.verify();
    console.log('✅ SMTP is working! Ready to test forms.');
    
  } catch (error) {
    console.error('❌ SMTP still not working:', error.message);
    console.log('💡 You need to update your .env file with the working credentials!');
  }
}

quickSMTPTest();
