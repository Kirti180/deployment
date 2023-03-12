const nodemailer=require("nodemailer")
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jovan.steuber@ethereal.email',
        pass: '8KdDh8Z8ggBMVepXHH'
    }
});

transporter.sendMail({
    to:"jovan.steuber@ethereal.email",
    from:"kirti182001@gmail.com",
    subject:"sandesh from node.js",
    body:"hello from backend",
    html:"<h1>hello</h1>"
})
.then(()=>{
    console.log("email send")}
    )
.catch((err)=>{
console.log(err)
})
// https://ethereal.email/create REQUIRE
// FAKE SMTP SERVER