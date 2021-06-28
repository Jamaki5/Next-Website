import Me from "../components/Home/Me";
import AboutMe from "../components/Home/AboutMe";
import MeContact from "../components/Home/MeContact";

function Home() {
  return (
    <div className="min-h-screen w-full relative grid">
      <Me />
      <AboutMe />
      <MeContact />
    </div>
  );
}

export default Home;
