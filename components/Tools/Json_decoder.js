import dynamic from "next/dynamic";
import { useState } from "react";

const CssTextField = dynamic(() => import("../Custom/InputField"), {
  ssr: false,
});

function Json_decoder() {
  const [decodeText, setDecodeText] = useState("");
  const [text, setText] = useState("");
  const [secret, setSecret] = useState("")

  return (
    <div className="flex flex-col self-center w-full md:max-w-lg h-full px-4 bg-white bg-opacity-10 rounded place-self-center">
      <h2 className="text-2xl mt-2">JSON Web Token</h2>
      <div className="grid grid-rows-3 gap-4 mb-4 mt-2 h-full">
        <div>
          <CssTextField
            label="Decoded Text"
            placeholder="Your JWT"
            variant="outlined"
            fullWidth
            id="decoded"
            type="text"
            multiline
            rowsMax={3}
            onChange={(e) => {
              setDecodeText(e.target.value);
            }}
          />
        </div>
        <div>
        <CssTextField
            label="Secret"
            placeholder="Your Secret"
            variant="outlined"
            fullWidth
            id="secret"
            type="text"
            onChange={(e) => {
              setSecret(e.target.value);
            }}
          />
        </div>
        <div>
          <CssTextField
            label="Encoded Text"
            placeholder="Your encoded JWT"
            variant="outlined"
            fullWidth
            id="encoded"
            type="text"
            multiline
            rowsMax={3}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Json_decoder;
