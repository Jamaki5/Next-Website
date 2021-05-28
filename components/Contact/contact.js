import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Button from "@material-ui/core/Button";
import HCaptcha from "@hcaptcha/react-hcaptcha";

import ContactMe from "./otherContacts";
import style from "../../styles/All.module.css";

const regrexEmail = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");

const CssTextField = dynamic(() => import("../Custom/InputField"), {
  ssr: false,
});

function contact() {
  const [email, setEmail] = useState({
    name: "",
    address: "",
    message: "",
  });
  const [error, setError] = useState({
    errorName: "",
    errorMessage: "",
    errorAddress: "",
    errorValid: "",
  });
  const [token, setToken] = useState("");
  const captcha = useRef();

  const handleExpire = () => {
    setToken("");
  };

  const handleSend = () => {
    let eName = "";
    let eMessage = "";
    let eAddress = "";
    let eValid = "";

    if (email.name === "") {
      eName = "The Namefield can't be empty.";
    }

    if (email.message.length < 10 || email.message.length > 255) {
      eMessage = "The length of the message must be between 10 and 255.";
    }

    if (email.name.trim() === "") {
      eName = "Your Name can't be empty.";
    }
    if (email.address.trim() === "") {
      eAddress = "Your E-Mailaddress can't be empty.";
    }
    if (email.message.trim() === "") {
      eMessage = "Your Message can't be empty.";
    }

    if (token === "") {
      eValid = "Please check the Captcha.";
    }

    if (!regrexEmail.test(email.address)) {
      eAddress = "Your Email is not valid.";
    }

    setError({
      errorName: eName,
      errorMessage: eMessage,
      errorAddress: eAddress,
      errorValid: eValid,
    });

    if (!eName && !eMessage && !eAddress && !eValid) {
      alert("Success");
      fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: email.name,
          email: email.address,
          message: email.message,
          token: token,
        }),
      });
      captcha.current.resetCaptcha();
    }
  };

  return (
    <div className="w-full h-full flex flex-col px-4">
      <div className="flex flex-col w-full gap-4 lg:max-w-6xl place-self-center">
        <div className="mt-16 text-4xl font-semibold mb-6">Contact</div>
        <div className="rounded bg-white bg-opacity-10 flex flex-col gap-4 px-4">
          <div className="mt-4">
            My E-Mail address:
            <br />
            <a
              className={style.link}
              target="_blank"
              href="mailto:Jann-Marten.Kias@web.de"
            >
              Jann-Marten.Kias@web.de
            </a>
          </div>
          <div className="flex flex-col sm:flex-row w-full self-center gap-4">
            <div className="w-full">
              <CssTextField
                label="Name"
                placeholder="Your Name or Company"
                variant="outlined"
                fullWidth
                id="name"
                required={true}
                onChange={(e) => {
                  setEmail({ ...email, name: e.target.value });
                }}
              />
            </div>
            <div className="w-full">
              <CssTextField
                label="E-Mail"
                placeholder="Your E-Mailaddress"
                variant="outlined"
                fullWidth
                id="e-mail"
                required={true}
                type="email"
                onChange={(e) => {
                  setEmail({ ...email, address: e.target.value });
                }}
              />
            </div>
          </div>
          <div>
            <CssTextField
              label="Message"
              placeholder="Your Message"
              variant="outlined"
              fullWidth
              id="message"
              multiline={true}
              rows={8}
              rowsMax={8}
              onChange={(e) => {
                setEmail({ ...email, message: e.target.value });
              }}
            />
          </div>
          <div className="grid sm:grid-cols-3 place-content-center mb-4 px-4 gap-4">
            <div className="place-self-center">
              <HCaptcha
                languageOverride="en"
                size="compact"
                ref={captcha}
                sitekey="bdab9799-79eb-45cf-87bc-3cce75546476"
                onVerify={(token, ekey) => setToken(token)}
                theme="dark"
                onExpire={handleExpire}
                host="test.mydomain.com"
              />
            </div>
            <div className="place-self-center text-red-600">
              {error.errorName ? (
                <div>
                  {error.errorName} <br />
                </div>
              ) : (
                ""
              )}
              {error.errorAddress ? (
                <div>
                  {error.errorAddress} <br />
                </div>
              ) : (
                ""
              )}
              {error.errorMessage ? (
                <div>
                  {error.errorMessage} <br />
                </div>
              ) : (
                ""
              )}
              {error.errorValid ? (
                <div>
                  {error.errorValid} <br />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="bg-blue-400 rounded place-self-center hover:shadow-md">
              <Button
                color="inherit"
                className="focus:outline-none"
                onClick={handleSend}
              >
                <div className="text-lg">Send</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:max-w-6xl place-self-center w-full">
        <div className="mt-16 text-2xl font-semibold">Or contact me via: </div>
        <ContactMe />
      </div>
    </div>
  );
}

export default contact;
