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
    content:
      "In meinem Informatik Studium habe ich von grundlegenden Prinzipien, wie Algorhytmen und Datenstrukturen, bis hin zu maschinellem Lernen, Neuronale Netze und sicherheitstechnische Konzepte.",
  },
  {
    time: "2012 - 2017",
    name: "High School",
    position: "Wittenberge",
    school: "Marie-Curie Gymnasium",
    icon: <CheckCircleIcon />,
    iconColor: "bg-green-400",
    content:
      "Bereits in der Schule habe ich großes Interesse an Informatik gehabt, welches von meinem Hobby als Gamer gefördert wurde. Zu dieser Zeit habe ich hauptsächlich die technischen Grundlagen eines PCs mir angeschaut.",
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

  return (
    <div className={style.page}>
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
          <div className={style.constColor}>&nbsp;Magdeburg</div>
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
      <div className="w-full h-full flex flex-col place-self-center max-w-7xl">
        <div className="text-5xl md:text-7xl px-4 mt-10 mb-10">About Me</div>
        <div className="grid grid-cols-1 lg:grid-cols-5 px-4 gap-4 h-full w-full">
          <div className="self-center w-full col-span-1 lg:col-span-2 gap-4 max-w-2xl justify-self-center">
            <div className="bg-white bg-opacity-10 rounded p-4 text-lg">
              Mein Name ist Jann-Marten Kias. Bereits in jungen Jahren habe ich
              durch meine Leidenschaft als Gamer mich mit Technik beschäftigt.
              Aktuell studiere ich an der Otto-von-Guericke Universität
              Informatik im Bachelor. Während meines Studiums habe ich bereits
              diverse Fächer absolviert. Dazu zählen: Machine Learning, Deep
              Learning, Grundlagen der C++ Programmierung und viele Weitere. Zum
              jetztigen Zeitpunkt suche ich ein Praktikum um meinen Bachelor
              abschließen zu können.
              <br />
              <br />
              In meinem Studium und in eigenen Projekten habe ich mir Kenntnisse
              in verschiedenen Bereichen der Software Entwicklung angeeignet.
              Aktuell befasse ich mich mit Frontend und etwas
              Backend-Entwicklung. Dafür nutze ich Next.js, GraphQl und Apollo.
              Für Versionierung und einfaches Deployment benutze ich Git und
              Docker.
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
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
