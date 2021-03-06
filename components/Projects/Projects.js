import React from "react";

import ProjectFront from "./ProjectFront";
import ProjectBackground from "./ProjectBackground";

import websitePic from "../../public/pictures/projects/website/website.jpg";
import contactPic from "../../public/pictures/projects/website/contact.jpg";
import sabberPic from "../../public/pictures/projects/sabberstone/sabberstone.jpg";
import threePic from "../../public/pictures/projects/three/threeWebsite.jpg";
import csPic from "../../public/pictures/projects/cs-go/trigger.jpg"

const PROJECTS = [
  {
    name: "Three.js Website",
    year: "2021",
    link: ["https://threejs.org/", "/examples/three"],
    description: "Dummy site for Three.js experience.",
    frameworks: ["javascript", "three", "docker", "next.js"],
    pictures: [threePic],
    button: ["Visit three.org", "Open Example"],
  },
  {
    name: "Website",
    year: "2021",
    link: ["https://github.com/Jamaki5/Next-Website"],
    description: "A simple Website to introduce myself.",
    frameworks: [
      "javascript",
      "react",
      "material-ui",
      "tailwindcss",
      "docker",
      "next.js",
    ],
    pictures: [websitePic, contactPic],
    button: ["GitHub Repo"],
  },
  {
    name: "CS:GO Triggerbot",
    year: "2020",
    link: [""],
    description: "A small external Triggerbot.",
    frameworks: ["c++"],
    pictures: [csPic],
    button: ["private Project"],
  },
  {
    name: "Hearthstone Bot",
    year: "2020",
    link: ["https://hearthstoneai.github.io/results2020.html"],
    description:
      "Hearthstone Bot for SabberStone. Got the first place in the official IEEE contest 2020",
    frameworks: ["c#"],
    pictures: [sabberPic],
    button: ["Hearthstone AI GitHub"],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col w-full max-w-6xl place-self-center">
      <div className="mt-4 text-4xl font-semibold mb-6 self-center md:self-start">
        Projects
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 mx-4">
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
