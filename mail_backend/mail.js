// KirtiShinde@18072001==>sendGrid password
const sgMail = require('@sendgrid/mail');
require("dotenv").config()
sgMail.setApiKey(process.env.Apikey);

const msg = [{
    to: 'kirti182001@gmail.com',
    from: 'kirti182001@gmail.com', // Use the email address or domain you verified above
    subject: 'my first mail',
    text: 'this is amazing',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  },
  {
  to: 'kirti1872001@gmail.com',
  from: 'kirti182001@gmail.com', // Use the email address or domain you verified above
  subject: 'secound',
  text: 'this is amazing',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
]
  sgMail
  .send(msg)
  .then(() => {

  }, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });