import Parallax from "react-rellax";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import SchoolIcon from "@material-ui/icons/School";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

import style from "../../styles/All.module.css";

const TIMELINE = [
  {
    time: "2017 - now",
    name: "Bachelor",
    position: "Magdeburg, Germany",
    school: "Otto-von-Guericke University",
    icon: <QueryBuilderIcon />,
    iconColor: "bg-blue-400",
    content:
      "Since 2017 I studied computer science at the Otto-von-Guericke university. While my ongoing Bachelor degree I learned about fundamental principles from algorithms and data structures to machine learning.",
  },
  {
    time: "2012 - 2017",
    name: "High School",
    position: "Wittenberge, Germany",
    school: "Marie-Curie Gymnasium",
    icon: <CheckCircleIcon />,
    iconColor: "bg-green-400",
    content:
      "I began to be interested in computer science when I was in high school. At that time I dealt with the technical basics of computers.",
  },
];

function AboutMe() {
  function makeTimelineItem(item, index) {
    return (
      <TimelineItem key={item.name}>
        <TimelineOppositeContent>
          <div className="grid w-full h-full">
            <div className="self-center text-xl ">{item.time}</div>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector className="opacity-30" />
          <TimelineDot
            color="inherit"
            className={item.iconColor + " border-transparent"}
          >
            {item.icon}
          </TimelineDot>
          <TimelineConnector className="opacity-30" />
        </TimelineSeparator>
        <TimelineContent>
          <div className="grid w-full">
            <div
              className={
                index % 2 === 0
                  ? "max-w-80 bg-black bg-opacity-30 justify-self-start rounded hover:shadow-md"
                  : "max-w-80 bg-black bg-opacity-30 justify-self-end rounded hover:shadow-md"
              }
            >
              <div className="grid auto-rows-min p-2 gap-2 justify-items-start">
                <div className="text-3xl mb-4">{item.name}</div>
                <div className="text-base">
                  <LocationOnIcon /> {item.position}
                </div>
                <div className="text-base">
                  <SchoolIcon /> {item.school}
                </div>
                <div className="text-base text-left">{item.content}</div>
              </div>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
    );
  }

  function makeContent(item) {
    return (
      <div
        data-aos="zoom-in"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="500"
        key={`${item.name}`}
        className="grid w-full h-full text-lg rounded bg-white bg-opacity-10 p-4"
      >
        <div className="flex text-2xl">
          {item.name}&nbsp;
          <div className="text-base self-center">({item.time})</div>
        </div>

        <div className="mt-2">
          <LocationOnIcon />
          &nbsp; {item.position}
        </div>
        <div className="mb-2">
          <SchoolIcon />
          &nbsp;{item.school}
        </div>
        <div className="text-xl">{item.content}</div>
      </div>
    );
  }

  return (
    <div className={style.content + " mb-6"}>
      <div className={style.background}>
        <Parallax
          percentage={0.9}
          speed={4}
          className={style.backgroundItem}
          style={{ top: "20%", right: "15%", transform: "rotateZ(20deg)" }}
        >
          <div className="text-white">
            <LocationOnIcon />
          </div>
          <div className={style.constColor}>&nbsp;Magdeburg, Germany</div>
        </Parallax>
        <Parallax
          percentage={0.9}
          speed={5}
          className={style.backgroundItem}
          style={{ top: "45%", left: "20%", transform: "rotateZ(-15deg)" }}
        >
          &#123;
          <div className={style.varColor}>age:&nbsp;</div>
          <div className={style.numberColor}>22</div>
          &#125;
        </Parallax>
        <Parallax
          percentage={0.9}
          speed={6}
          className={style.backgroundItem}
          style={{ top: "60%", left: "35%", transform: "rotateZ(5deg)" }}
        >
          <div className={style.constColor}>Webdeveloper</div>
        </Parallax>
      </div>
      <div className="w-full h-full flex flex-col place-self-center max-w-7xl z-10">
        <div className="text-5xl md:text-7xl px-4 mt-10 mb-10">About Me</div>
        <div className="grid grid-cols-1 lg:grid-cols-5 px-4 gap-4 h-full w-full">
          <div className="self-center w-full col-span-1 lg:col-span-2 gap-4 max-w-2xl justify-self-center">
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="500"
              className="bg-white bg-opacity-10 rounded p-4 text-lg"
            >
              Hello, my name is Jann-Marten Kias. From a young age, I became
              enthusiastic about technology through my hobby as a gamer. I am
              currently studying at the Otto-von-Guericke university. Some of
              the subjects I've already completed include: machine learning,
              deep learning, basics of c ++ programming, computational
              intelligence in games and a lot more. I am currently looking for
              an internship.
              <br />
              <br />
              In my studies and in my free time I have acquired knowledge in
              various areas of software development. I am currently working on
              the development of frontend. My current stack includes: Next.js,
              React, Tailwind CSS, Material-UI, Javascript, git and Docker.
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="500"
            className="hidden lg:grid h-full w-full col-span-3 items-center max-w-3xl justify-self-center"
          >
            <Timeline align="alternate">
              {TIMELINE.map((item, index) => makeTimelineItem(item, index))}
            </Timeline>
          </div>
          <div className="grid lg:hidden gap-4 h-full grid-span-1 w-full items-center justify-self-center">
            <div className="text-3xl mt-4">Timeline</div>
            {TIMELINE.map((item) => makeContent(item))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
