import React from "react";
import Image from "next/image";

import style from "../../styles/All.module.css";

import reactPicture from "../../public/pictures/projects/react.png";
import materialPicture from "../../public/pictures/projects/material-ui.png";
import javascriptPicture from "../../public/pictures/projects/javascript.jpg";
import dockerPicture from "../../public/pictures/projects/docker.svg";
import csharpPicture from "../../public/pictures/projects/csharp.svg";
import nextPicture from "../../public/pictures/projects/next.png";
import tailwindPicture from "../../public/pictures/projects/tailwind.svg";
import cplusplusPicture from "../../public/pictures/projects/c++.png";

const POSITION = [
  { left: "75%", top: "5%", rotation: "rotateZ(5deg)" },
  { left: "15%", top: "25%", rotation: "rotateZ(12deg)" },
  { left: "35%", top: "66%", rotation: "rotateZ(-12deg)" },
  { left: "65%", top: "54%", rotation: "rotateZ(-17deg)" },
  { left: "45%", top: "35%", rotation: "rotateZ(7deg)" },
  { left: "22%", top: "45%", rotation: "rotateZ(-9deg)" },
];

export default function ProjectBackground({ project }) {
  return (
    <div className={style.background}>
      {project.frameworks.map((frame, index) => {
        let image = null;
        switch (frame) {
          case "javascript":
            image = javascriptPicture;
            break;
          case "react":
            image = reactPicture;
            break;
          case "material-ui":
            image = materialPicture;
            break;
          case "docker":
            image = dockerPicture;
            break;
          case "c#":
            image = csharpPicture;
            break;
          case "c++":
            image = cplusplusPicture;
            break;
          case "next.js":
            image = nextPicture;
            break;
          case "three":
            image = materialPicture;
            break;
          case "tailwindcss":
            image = tailwindPicture;
            break;
          default:
            return;
        }

        if (image) {
          return (
            <div
              key={project.name + frame}
              className={style.backgroundItem + " w-1/5 md:w-50"}
              style={{
                top: POSITION[index].top,
                left: POSITION[index].left,
                transform: POSITION[index].rotation,
              }}
            >
              <Image
                className={frame === "react" ? style.reactPicture : ""}
                alt={project.name + frame}
                src={image}
                width={300}
                height={300}
              />
            </div>
          );
        }
      })}
    </div>
  );
}
