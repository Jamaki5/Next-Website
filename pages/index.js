import Me from "../components/Home/Me";
import AboutMe from "../components/Home/AboutMe";
import MeContact from "../components/Home/MeContact";

import style from "../styles/All.module.css";

function Home() {
  return (
    <div className="min-h-screen w-full relative grid">
      <Me />
      <div className={style.backgroundColor}>
        <div className="min-h-screen w-full grid place-items-center">
          <AboutMe />
          <MeContact />
        </div>
      </div>
    </div>
  );
}

export default Home;
