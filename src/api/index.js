// import nodemailer from "nodemailer";

export const sendEmail = async (outputMessage) => {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "halilkocogluportfolio@gmail.com", // generated gmail account
        pass: "tfrbzjwtriwjugty", // generated gmail password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Portfolio Contact Form" <halilkocogluportfolio@gmail.com>', // sender address
      to: "halilkocoglu98@gmail.com", // list of receivers
      subject: "Portfolio Contact Form New Message", // Subject line
      html: outputMessage, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (error) {
    console.log(error);
  }
};
