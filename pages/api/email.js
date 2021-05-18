import { verify } from "hcaptcha";

export default async (req, res) => {
  const HCAPTCHAKEY = process.env.H_CAPTCHA_KEY;
  let token = "";
  let body;

  try {
    if (
      req.headers ===
      {
        "Content-Type": "application/json",
      }
    ) {
      body = JSON.parse(body);
      token = body.token;
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: e });
  }

  try {
    let { success } = await verify(HCAPTCHAKEY, token);

    if (success) {
      console.log("success");
    } else {
      res.status(400).json({ error: "token is not valid" });
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: e });
  }

  res.json({ success: true });
};
