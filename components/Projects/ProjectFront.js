import React, { useState } from "react";
import Image from "next/image";
import Button from "@material-ui/core/Button";

import Arrow from "@material-ui/icons/ArrowForwardIos";

export default function ProjectFront({ project }) {
  const [index, setIndex] = useState(0);

  function getButton(link) {
    if (link === "") {
      return (
        <div className="text-white cursor-not-allowed">
          <Button color="primary" className="w-full" disabled>
            {project.button}
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
          <div className="text-white">Open: {project.button}</div>
        </Button>
      </a>
    );
  }

  function handleClick(site) {
    if (site === "back") {
      if (index === 0) {
        setIndex(project.pictures.length - 1);
      } else {
        setIndex(index - 1);
      }
    }

    if (site === "front") {
      if (index === project.pictures.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  }

  function leftButton() {
    if (project.pictures.length < 2) return;
    else {
      return (
        <button
          className="h-1/3 top-1/3 left-0 absolute z-20 bg-white bg-opacity-10 grid hover:bg-opacity-20 rounded focus:outline-none place-items-center transform rotate-180"
          onClick={() => handleClick("back")}
        >
          <Arrow />
        </button>
      );
    }
  }

  function rightButton() {
    if (project.pictures.length < 2) return;
    else {
      return (
        <button
          className="h-1/3 top-1/3 right-0 absolute z-20 bg-white bg-opacity-10 grid hover:bg-opacity-20 rounded focus:outline-none place-items-center"
          onClick={() => handleClick("front")}
        >
          <Arrow />
        </button>
      );
    }
  }

  return (
    <div className="w-full h-full bg-white bg-opacity-10 rounded p-4 grid">
      <div className="text-2xl">{project.name}</div>
      <div className="opacity-50 text-sm mb-2">{project.year}</div>
      <div className="text-lg z-10">{project.description}</div>
      <div className="opacity-75 my-2 hover:opacity-90 relative">
        <Image
          unoptimized={true}
          alt={project.name + index}
          src={project.pictures[index]}
          width="16"
          height="9"
          layout="responsive"
        />
        {leftButton()}
        {rightButton()}
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
