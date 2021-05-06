import React, { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

function hCaptcha({ token, setToken, captcha }) {
  const handleExpire = () => {
    setToken("");
  };

  return (
    <form>
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
    </form>
  );
}

export default hCaptcha;
