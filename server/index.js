const express = require("express");
const nodemailer = require("nodemailer");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "emailsender343@gmail.com",
    pass: "hvkl erey qrwo tefv",
  },
});

app.post("/send-email", (req, res) => {
  const { to } = req.body;

  const mailOptions = {
    from: "emailsender343@gmail.com",
    to,
    subject: "التقرير السنوي لعام 2023 ",
    text: "التقرير السنوي لعام 2023 لشركة أوقاف محمد بن عبد العزيز الجميح",
    attachments: [
      {
        filename: "document.pdf",
        content: fs.createReadStream("email.pdf"),
        encoding: "base64",
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ msg: "Failed to send email", error });
    }
    res.status(200).send("Email sent successfully");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
