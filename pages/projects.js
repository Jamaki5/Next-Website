import React from "react";
import Projects from "../components/Projects/Projects";

import style from "../styles/All.module.css";

export default function projects() {
  return (
    <div className={style.page}>
      <Projects />
    </div>
  );
}
