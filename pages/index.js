import Me from "../components/Home/Me";
import Projects from "../components/Home/Projects";

function Home() {
  return (
    <div className="min-h-screen w-full relative grid">
      <Me />
      <Projects />
    </div>
  );
}

export default Home;
