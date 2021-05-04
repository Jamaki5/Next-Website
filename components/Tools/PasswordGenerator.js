import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import dynamic from "next/dynamic";

import FileCopyIcon from "@material-ui/icons/FileCopy";

const CssSlider = dynamic(() => import("../Custom/Slider"), {
  ssr: false,
});

const CssTextField = dynamic(() => import("../Custom/InputField"), {
  ssr: false,
});

const CssCheckbox = dynamic(() => import("../Custom/Checkbox"), {
  ssr: false,
});

const RandomChars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?@§$%&()=[]{}#+-*/,.";

function PasswordManager() {
  const minLength = 10;
  const maxLength = 50;

  const [special, setSpecial] = useState(true);
  const [number, setNumber] = useState(true);
  const [password, setPassword] = useState("Generate a strong Password");
  const [length, setLength] = useState(20);
  const [open, setOpen] = useState(false);

  function generatePassword() {
    if (length < minLength || length > maxLength) {
      setPassword("Error: Length is not valid");
    } else {
      let pass = "";
      let range = 52;
      if (number === true) range += 10;
      if (special === true) range += 21;

      for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * range);

        if (number === false && special === true && random > 51) random += 10;
        pass += RandomChars.substring(random, random + 1);
      }

      setPassword(pass);
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(password);
    setTimeout(handleClose, 1000);
  };

  const handleInputChange = (event) => {
    setLength(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (length < minLength) {
      setLength(minLength);
    } else if (length > maxLength) {
      setLength(maxLength);
    }
  };

  return (
    <div className="flex flex-col self-center w-full md:max-w-md h-full px-4 bg-white bg-opacity-10 rounded place-self-center">
      <h2 className="text-2xl mt-2">Password Generator</h2>
      <div className="grid w-full h-full grid-rows-4 sm:grid-rows-3 grid-cols-2 sm:grid-cols-3">
        <div className="flex col-span-2 sm:col-span-3 my-4 self-center rounded focus:border-gray-300 border-white border-2">
          <input
            className="bg-transparent w-full focus:outline-none pl-2"
            value={password}
            readOnly
            id="Password"
          />
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            title={<div className="text-lg">Copied</div>}
            arrow
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            onClick={handleClick}
            placement="top"
          >
            <IconButton
              aria-label="Copy"
              disableFocusRipple={true}
              color="inherit"
              className="focus:outline-none hover:text-gray-400"
            >
              <FileCopyIcon color="inherit" />
            </IconButton>
          </Tooltip>
        </div>
        <div className="col-span-2 sm:col-span-3 grid items-center">
          <div className="flex w-full gap-4">
            <CssSlider
              className="w-full self-center"
              value={length}
              min={minLength}
              step={1}
              max={maxLength}
              onChange={(event, newValue) => {
                setLength(newValue);
              }}
              valueLabelDisplay="auto"
              aria-labelledby="Slider"
            />
            <CssTextField
              value={length}
              onChange={handleInputChange}
              onBlur={handleBlur}
              label="Length"
              id="Number"
              inputProps={{
                step: 1,
                min: { minLength },
                max: { maxLength },
                type: "number",
              }}
              variant="outlined"
              size="small"
            />
          </div>
        </div>
        <div className="w-full flex place-items-center gap-2">
          <CssCheckbox
            value={special}
            onChange={() => setSpecial(!special)}
            checked={special}
            id="Special checked"
          />
          <label>Special Character</label>
        </div>
        <div className="w-full flex place-items-center gap-2">
          <CssCheckbox
            value={number}
            onChange={() => setNumber(!number)}
            checked={number}
            id="Number"
          />
          <label>Numbers</label>
        </div>
        <div className="col-span-2 sm:col-span-1 w-full grid place-content-center">
          <div className="bg-blue-400 rounded">
            <Button
              key="Password Generate Button"
              className="focus:outline-none"
              color="inherit"
              onClick={() => {
                generatePassword();
              }}
            >
              Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordManager;
