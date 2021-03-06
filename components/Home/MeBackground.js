import { useState, useEffect } from "react";
import Parallax from "react-rellax";

import style from "../../styles/All.module.css";

function MeBackground() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      setOffsetY(window?.pageYOffset);
    }
  };

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll);
    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={style.background}>
      <Parallax
        speed={6}
        className={style.backgroundItem}
        style={{ left: "10%", top: "25%", transform: "rotateZ(-10deg)" }}
      >
        <div className={style.importColor}>import &nbsp;</div>
        <div className={style.varColor}>React &nbsp;</div>
        <div className={style.importColor}>from &nbsp;</div>
        <div className={style.stringColor}>'react'</div>
      </Parallax>
      <Parallax
        speed={8}
        className={style.backgroundItem}
        style={{ right: "10%", top: "50%", transform: "rotateZ(22deg)" }}
      >
        <div className={style.constColor}>const</div>
        <div>[</div>
        <div className={style.varColor}>offsetY</div>
        <div>,</div>
        <div className={style.varColor}>&nbsp; setOffsetY</div>
        <div>] = &nbsp;</div>
        <div className={style.functionColor}>useState</div>
        <div>(</div>
        <div className={style.numberColor}>{Math.round(offsetY)}</div>
        <div>)</div>
      </Parallax>
      <Parallax
        speed={2}
        className={style.backgroundItem}
        style={{ left: "30%", top: "80%", transform: "rotateZ(5deg)" }}
      >
        <div className={style.constColor}>&#123;</div>
        <div className={style.varColor}>windowH:&nbsp;</div>
        <div className={style.varColor}>{window.innerHeight}</div>
        <div>,&nbsp;</div>
        <div className={style.varColor}>windowW:&nbsp;</div>
        <div className={style.varColor}>{window.innerWidth}</div>
        <div className={style.constColor}>&#125;</div>
      </Parallax>
    </div>
  );
}

export default MeBackground;
