import style from "../styles/All.module.css";
import { useEffect } from "react";

function tools() {
  useEffect(() => {
    const idText = setInterval(() => {
      window.location.replace("https://tools.alexbabel.com/");
    }, 3000);
    ;
    return () => {
      clearInterval(idText);
    };
  }, []);

  return (
    <div className={style.page}>
      <div className="px-4 w-full place-self-center place-content-center grid max-w-6xl text-center text-5xl">
        <div>
          Redirecting to:
          <br />
          <a className={"mt-4 " + style.link} href="https://tools.alexbabel.com/">
            https://tools.alexbabel.com/
          </a>
        </div>
      </div>
    </div>
  );
}

export default tools;
