import { useState } from "react";
import dynamic from "next/dynamic";
import Button from "@material-ui/core/Button";
import Recaptcha from "react-recaptcha";

import ContactMe from "./otherContacts";
import style from "../../styles/All.module.css";

const CssTextField = dynamic(() => import("../Custom/InputField"), {
  ssr: false,
});

let recaptchaInstance;

function contact() {
  const [email, setEmail] = useState({
    name: "",
    address: "",
    message: "",
    valid: false,
    errorName: "",
    errorMessage: "",
    errorAddress: "",
    errorValid: "",
  });

  const handleEmail = () => {};

  const handleSend = () => {
    alert(
      email.name +
        " " +
        email.address +
        " " +
        email.message +
        " " +
        email.valid +
        " " +
        email.errorName +
        " " +
        email.errorAddress +
        " " +
        email.errorMessage +
        " " +
        email.errorValid
    );
    if (email.name === "") {
      setEmail({
        ...email,
        errorName: "The Name can't be empty.",
      });
      return;
    }
    if (email.message.length < 10 || email.message.length > 255) {
      setEmail({
        ...email,
        error:
          "Your Message is incorrect. The length of the message has to be between 10 and 255.",
      });
      return;
    }
    if (email.valid) {
      recaptchaInstance.reset();
      handleEmail;
    }
  };

  const callback = () => {
    console.log("reCaptcha loaded.");
  };

  const handleVerify = () => {
    setEmail({ ...email, valid: true });
  };

  const handleExpired = () => {
    setEmail({ ...email, valid: false });
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
          <div className="flex w-full self-center gap-4">
            <div className="w-full">
              <CssTextField
                label="Name / Company"
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
          <div className="grid sm:grid-cols-2 place-content-center mx-4 mb-4">
            <div className="place-self-center">
              <Recaptcha
                ref={(e) => (recaptchaInstance = e)}
                sitekey="6LeAPccaAAAAAODY5TP-NVifHMHXg0ASLqq1jMBw"
                render="explicit"
                onloadCallback={callback}
                verifyCallback={handleVerify}
                theme="dark"
                expiredCallback={handleExpired}
              />
            </div>
            <div className="bg-blue-400 rounded place-self-center">
              <Button className="focus:outline-none" onClick={handleSend}>
                Send
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
