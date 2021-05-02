import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import FileCopyIcon from "@material-ui/icons/FileCopy";

const RandomChars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?@§$%&()=[]{}#+-*/,.";

function PasswordManager() {
  const [special, setSpecial] = useState(true);
  const [number, setNumber] = useState(true);
  const [password, setPassword] = useState("Generate a strong Password");
  const [length, setLength] = useState(20);
  const [open, setOpen] = useState(false);

  function generatePassword() {
    if (length < 10 || length > 50) {
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

  return (
    <div className="flex flex-col self-center w-full md:max-w-md h-full px-4 bg-white bg-opacity-10 rounded place-self-center">
      <h2 className="text-2xl mt-2">Password Generator</h2>
      <div className="grid w-full h-full grid-rows-4 sm:grid-rows-3 grid-cols-2 sm:grid-cols-3">
        <div className="flex col-span-2 sm:col-span-3 my-4 self-center rounded focus:border-gray-300 border-white border-2">
          <input
            className="bg-transparent w-full focus:outline-none pl-2"
            value={password}
            readOnly
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
              disableFocusRipple={true}
              color="inherit"
              className="focus:outline-none hover:text-gray-400"
            >
              <FileCopyIcon color="inherit" />
            </IconButton>
          </Tooltip>
        </div>
        <div className="col-span-2 sm:col-span-3 flex items-center">
          <input
            className="w-full"
            type="range"
            min="10"
            max="50"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <input
            className="focus:outline-none border-white rounded border-2 bg-transparent text-white ml-2"
            type="number"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            min="10"
            max="50"
          />
        </div>
        <div className="w-full flex place-items-center gap-2">
          <input
            type="checkbox"
            value={special}
            onChange={() => setSpecial(!special)}
            checked={special}
          />
          <label>special Character</label>
        </div>
        <div className="w-full flex place-items-center gap-2">
          <input
            type="checkbox"
            value={number}
            onChange={() => setNumber(!number)}
            checked={number}
          />
          <label>Numbers</label>
        </div>
        <div className="col-span-2 sm:col-span-1 w-full grid place-content-center">
          <div className="bg-blue-400 rounded">
            <Button
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
