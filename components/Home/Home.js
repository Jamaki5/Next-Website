import React from "react";
import { withRouter } from "react-router-dom";

import Me from "./Me";
import AboutMe from "./AboutMe"
import Projekts from "./Projekts";

function Home() {
  return (
    <div className="grid-wraper">
      <Me />
      <AboutMe />
      <Projekts />
    </div>
  );
}

export default withRouter(Home);
