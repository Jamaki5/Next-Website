import dynamic from "next/dynamic";
import Button from "@material-ui/core/Button";

import ContactMe from "../Home/MeContact";
import style from "../../styles/All.module.css";

const CssTextField = dynamic(() => import("../Custom/InputField"), {
  ssr: false,
});

function contact() {
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
            />
          </div>
          <div className="grid sm:grid-cols-2 place-content-center mx-4 mb-4">
            <div className="">Cap</div>
            <div className="bg-blue-400 rounded place-self-center">
              <Button className="focus:outline-none">Send</Button>
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
