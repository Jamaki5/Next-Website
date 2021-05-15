import { verify } from "hcaptcha";

export default async (req, res) => {
  const HCAPTCHAKEY = process.env.H_CAPTCHA_KEY;
  let body = "";
  let token = 0;
  let status = 200;
  let message = {
    valid: true,
  };

  if (req?.body) {
    body = JSON.parse(req.body);
  } else {
    status = 400;
    message = { error: "No Body" };
    return;
  }

  if (body?.token) {
    token = body.token;
  }

  try {
    let { success } = await verify(HCAPTCHAKEY, token);

    if (success) {
      console.log("success");
    } else {
      status = 400;
      message = {
        error: "The Token is not valid",
      };
    }
  } catch (e) {
    console.log(e);
    status = 400;
    message = {
      error: "Error",
    };
  }

  res.status(status).json(message);
};
