var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'sanjay.dwivedi',
    pass: 'neu123#'
  }
});

var mailOptions = {
  from: 'sanjay.dwivedi@neudesic.com',
  to: 'sanjay.dwivedi@neudesic.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});