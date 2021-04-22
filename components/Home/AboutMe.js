import React from "react";
import { withRouter } from "react-router-dom";

function AboutMe() {
  return (
    <div className="page">
      <div
        className="grid-wraper"
        style={{
          padding: "2rem",
        }}
      >
        <div
          style={{ fontSize: "3rem", padding: "1rem", justifySelf: "baseline" }}
        >
          About Me
        </div>
      </div>
    </div>
  );
}

export default withRouter(AboutMe);
