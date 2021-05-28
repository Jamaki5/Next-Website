import { verify } from "hcaptcha";
import sendgrid from "@sendgrid/mail";

export default async (req, res) => {
  const HCAPTCHAKEY = process.env.H_CAPTCHA_KEY;
  const fromEmail = process.env.FROM_EMAIL;
  const toEmail = process.env.TO_EMAIL;
  sendgrid.setApiKey(process.env.SEND_GRID_KEY);

  let token = "";
  let message = "";
  let email = "";
  let name = "";
  const subject = "A Email from jannkias.com";

  try {
    message = req.body?.message;
    email = req.body?.email;
    name = req.body?.name;
    token = req.body?.token;
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: e });
    return;
  }

  try {
    let { success } = await verify(HCAPTCHAKEY, token);

    if (success) {
      if (message && email && name) {
        const sendGridMessage = {
          from: fromEmail,
          to: toEmail,
          subject: subject,
          text: `A message from ${name} at jannkias.com:\n ${message}\ncontact: ${email}`,
          html: `<h2>A message from ${name} at jannkias.com:</h2>
          <p>${message}</p>
          <p>contact: ${email}</p>`,
        };
        sendgrid
          .send(sendGridMessage)
          .then(console.log("email sent..."))
          .catch((err) => {
            console.log(err);
            res.status(400).json({ error: err });
            return;
          });
      }
    } else {
      console.log("token is not valid: " + token);
      res.status(400).json({ error: "token is not valid" });
      return;
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: e });
    return;
  }

  res.json({ success: true });
};
