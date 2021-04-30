import { useState } from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import FileCopyIcon from "@material-ui/icons/FileCopy";

import style from "../../styles/All.module.css";

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
    <div className="flex flex-col self-center w-2/3 h-full px-4 bg-white bg-opacity-10 rounded">
      <h2 className="text-2xl mt-2">Password Generator</h2>
      <div className="grid w-full h-full grid-rows-3 grid-cols-3">
        <OutlinedInput
          className={
            "col-span-3 h-2/5 self-center ring-white " + style.PasswordImportant
          }
          endAdornment={
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
          }
        />
      </div>
    </div>
  );
}

export default PasswordManager;
