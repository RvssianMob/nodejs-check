//5. email-sender.js

const nodemailer = require('nodemailer');

//create a transporter using SMTP transport 
const transporter = nodemailer.createTransport({
  service: 'your_email_service_provider',// e.g, "badman@gmail.com" for Gmail
  auth:{
    user: 'your_email',// Your email address 
    pass: 'your_password',// email password 
  },
});
// Email message options 
const mailOptions = {
  from: 'your_email',//sender email address
  to: 'recipient_email',//Recipients email address 
  subject: 'Hello from Node.js',//email subject 
  text: 'This is a test email sent from Node.js',//email content (HTML)
};
// Send the email 
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
