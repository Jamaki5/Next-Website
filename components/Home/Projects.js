import Parallax from "react-rellax";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import Image from "next/image";

import style from "../../styles/All.module.css";

const PROJECTS = [
  {
    name: "Website",
    description: "The current Website",
    picture: (
      <Image
        alt="Website"
        src="/pictures/website.jpg"
        width="16"
        height="9"
        layout="responsive"
      />
    ),
    link: null,
  },
  {
    name: "Tools",
    description: "Little Tools for everyone",
    picture: (
      <Image
        alt="Tools"
        src="/pictures/website.jpg"
        width="16"
        height="9"
        layout="responsive"
      />
    ),
    link: { extern: false, to: "/tools" },
  },
  {
    name: "Triggerbot CS:GO",
    description: "External Triggerbot for CS:GO",
    picture: (
      <Image
        alt="Triggerbot"
        src="/pictures/website.jpg"
        width="16"
        height="9"
        layout="responsive"
      />
    ),
    link: { extern: true, to: "https://github.com/Jamaki5/CS" },
  },
  {
    name: "Chat App",
    description: "Self hostable Chat App (wip)",
    picture: (
      <Image
        alt="Chat App"
        src="/pictures/website.jpg"
        width="16"
        height="9"
        layout="responsive"
      />
    ),
    link: { extern: true, to: "https://github.com/Jamaki5/chat" },
  },
];

function Projects() {
  function getLink(link) {
    if (link !== null) {
      if (link.extern) {
        return (
          <a
            className="w-full"
            target="_blank"
            rel="noopener noreferrer"
            href={link.to}
          >
            <Button color="primary" className="w-full">
              <div className="text-white">Open</div>
            </Button>
          </a>
        );
      }
      if (link.extern === false) {
        return (
          <Link className="w-full" href={link.to}>
            <Button color="primary" className="w-full">
              <div className="text-white">Open</div>
            </Button>
          </Link>
        );
      }
    }
    return (
      <Button className="w-full" disabled>
        Open
      </Button>
    );
  }

  function makeCard({ name, description, picture, link }, index) {
    return (
      <div
        className="w-full max-w-xl"
        data-aos="fade-up"
        data-aos-delay={(index % 2) * 200}
        data-aos-offset="100"
        key={name}
      >
        <Card className="w-full hover:shadow-xl">
          <CardMedia alt={name} title={name}>
            {picture}
          </CardMedia>
          <CardContent className="grid grid-cols-3 justify-items-center items-center">
            <div className="justify-self-start col-start-1 col-end-3">
              <div className="text-2xl text-black">{name}</div>
              <div className="text-xl text-black">{description}</div>
            </div>
            <div className="w-5/6 bg-blue-500 rounded hover:shadow-md duration-200">
              {getLink(link)}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  function makeList({ name, description, link }) {
    return (
      <div
        key={name}
        data-aos="zoom-in"
        data-aos-offset="100"
        className="h-auto w-full rounded bg-white bg-opacity-10 p-2"
      >
        <div className="h-full w-full grid grid-cols-4 justify-items-center items-center">
          <div className="col-start-1 col-end-3 grid justify-self-start">
            <div className="text-2xl">{name}</div>
            <div className="text-large">{description}</div>
          </div>
          <div className="w-5/6 bg-blue-500 rounded hover:shadow-md duration-200 col-start-3 col-end-5">
            {getLink(link)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={style.page}>
      <div className={style.background}>
        <Parallax
          percentage={0.9}
          speed={4}
          className={style.backgroundItem + " w-1/5 md:w-50"}
          style={{ top: "20%", left: "15%", transform: "rotateZ(20deg)" }}
        >
          <Image
            alt="reactPicture"
            className={style.reactPicture}
            src="/pictures/projects/react.png"
            width={300}
            height={300}
          />
        </Parallax>
        <Parallax
          percentage={0.9}
          speed={4}
          className={style.backgroundItem + " w-1/5 md:w-50"}
          style={{ top: "60%", left: "40%", transform: "rotateZ(-15deg)" }}
        >
          <Image
            alt="javascriptPicture"
            src="/pictures/projects/javascript.png"
            width={300}
            height={300}
          />
        </Parallax>
        <Parallax
          percentage={0.9}
          speed={4}
          className={style.backgroundItem + " w-1/5 md:w-50"}
          style={{ top: "35%", right: "15%", transform: "rotateZ(12deg)" }}
        >
          <Image
            alt="material-uiPicture"
            src="/pictures/projects/material-ui.png"
            width={300}
            height={300}
          />
        </Parallax>
      </div>
      <div className="h-full place-self-center max-w-7xl w-full flex flex-col">
        <div className="text-5xl md:text-7xl px-4 mt-10 mb-10">Projects</div>
        <div className="hidden md:grid grid-cols-2 grid-rows-2 px-4 justify-items-center items-center h-full w-full gap-8 mb-6 opacity-90">
          {PROJECTS.map((p, index) => makeCard(p, index))}
        </div>
        <div className="grid md:hidden px-4 h-full w-full gap-4 mb-6">
          {PROJECTS.map((p) => makeList(p))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
