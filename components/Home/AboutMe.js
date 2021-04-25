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
    position: "Magdeburg",
    school: "Otto-von-Guericke University",
    icon: <QueryBuilderIcon />,
    iconColor: "bg-blue-400",
    content: null,
  },
  {
    time: "2012 - 2017",
    name: "High School",
    position: "Wittenberge",
    school: "Marie-Curie Gymnasium",
    icon: <CheckCircleIcon />,
    iconColor: "bg-green-400",
    content: null,
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
                <div className="text-base">{item.content}</div>
              </div>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
    );
  }

  return (
    <div className={style.page}>
      <div className={style.background}></div>
      <div className="w-full h-full flex flex-col">
        <div className="text-5xl md:text-7xl px-4 mt-10 mb-10">About Me</div>
        <div className="hidden md:grid grid-cols-5 grid-rows-2 px-4 gap-4 h-full w-full">
          <div className="bg-white bg-opacity-20 h-full w-full rounded col-start-1 col-end-3">
            hi
          </div>
          <div className="grid bg-white bg-opacity-20 h-full w-full col-start-3 col-end-6 row-start-1 row-end-3 items-center">
            <Timeline align="alternate">
              {TIMELINE.map((item, index) => makeTimelineItem(item, index))}
            </Timeline>
          </div>
          <div className="bg-white bg-opacity-20 h-full w-full rounded col-start-1 col-end-3">
            hi
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
