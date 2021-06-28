import React from "react";

import ProjectFront from "./ProjectFront";
import ProjectBackground from "./ProjectBackground";

const PROJECTS = [
  {
    name: "Three.js Website",
    year: "2021",
    link: "",
    description: "Dummy site for Three.js experience.",
    frameworks: ["javascript", "three", "docker", "next.js"],
  },
  {
    name: "Website",
    year: "2021",
    link: "https://github.com/Jamaki5/Next-Website",
    description: "A simple Website to intoduce myself.",
    frameworks: [
      "javascript",
      "react",
      "material-ui",
      "tailwindcss",
      "docker",
      "next.js",
    ],
  },
  {
    name: "CS:GO Triggerbot",
    year: "2020",
    link: "https://github.com/Jamaki5/CS",
    description:
      "A small extern Triggerbot. The Offsets have to be changed for every CS:GO version.",
    frameworks: ["c++", "cs:go"],
  },
  {
    name: "Hearthstone Bot",
    year: "2020",
    link: "https://hearthstoneai.github.io/results2020.html",
    description:
      "Hearthstone Bot for SabberStone. Got the first place in the officel IEEE contest 2020",
    frameworks: ["c#", "sabberstone"],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col w-full max-w-6xl justify-self-center">
      <div className="mt-6 md:mt-16 text-4xl font-semibold mb-6 self-center md:self-start">
        Projects
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 mx-4 lg:mx-0">
        {PROJECTS.map((project) => {
          return (
            <div className="relative w-full h-full" key={project.name}>
              <ProjectBackground project={project} />
              <ProjectFront project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
