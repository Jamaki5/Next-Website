import React from "react";
import Image from "next/image";
import Button from "@material-ui/core/Button";

import pic from "../../public/pictures/website.jpg";

export default function ProjectFront({ project }) {
  function getButton(link) {
    if (link === "") {
      return (
        <div className="text-white cursor-not-allowed">
          <Button color="primary" className="w-full" disabled>
            Open
          </Button>
        </div>
      );
    }
    return (
      <a
        className="w-full"
        target="_blank"
        rel="noopener noreferrer"
        href={project.link}
      >
        <Button color="primary" className="w-full">
          <div className="text-white">Open</div>
        </Button>
      </a>
    );
  }

  return (
    <div className="w-full h-full bg-white bg-opacity-10 rounded p-4 grid">
      <div className="text-2xl">{project.name}</div>
      <div className="opacity-50 text-sm mb-2">{project.year}</div>
      <div className="text-lg z-10">{project.description}</div>
      <div className="opacity-75 my-2 hover:opacity-90">
        <Image
          alt={project.name}
          src={pic}
          width="16"
          height="9"
          layout="responsive"
        />
      </div>
      <div className="z-10">
        Build with:
        {project.frameworks.map((frame, index) => {
          switch (frame) {
            case "cs:go":
            case "sabberstone":
              return;
            default:
              break;
          }
          if (index === 0)
            return " " + frame.charAt(0).toUpperCase() + frame.slice(1);
          return ", " + frame.charAt(0).toUpperCase() + frame.slice(1);
        })}
      </div>
      <div className="w-5/6 bg-blue-500 rounded hover:shadow-md mt-4 place-self-center bg-opacity-100 z-10">
        {getButton(project.link)}
      </div>
    </div>
  );
}
