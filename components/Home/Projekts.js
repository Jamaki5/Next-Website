import React from "react";
import { withRouter } from "react-router-dom";
import { Card, Button } from "antd";
import Parallax from "react-rellax";

import WebsitePicture from "../../pictures/website.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const { Meta } = Card;

const PROJEKTS = [
  {
    name: "Website",
    description: "The currend Website",
    picture: WebsitePicture,
    link: null,
  },
  {
    name: "Tools",
    description: "Little Tools for everyone",
    picture: WebsitePicture,
    link: { extern: false, to: "/tools" },
  },
  {
    name: "Triggerbot CS:GO",
    description: "External Triggerbot for CS:GO",
    picture: WebsitePicture,
    link: { extern: true, to: "https://github.com/Jamaki5/CS" },
  },
  {
    name: "Chat App",
    description: "Self hostable Chat App (wip)",
    picture: WebsitePicture,
    link: { extern: true, to: "https://github.com/Jamaki5/chat" },
  },
];

function Projekts() {
  function getLink(projekt) {
    let Linker;

    if (projekt.link !== null) {
      if (projekt.link.extern) {
        Linker = (
          <a
            style={{ justifySelf: "center", alignSelf: "center" }}
            target="_blank"
            rel="noopener noreferrer"
            href={projekt.link.to}
          >
            <Button size={"50%"} type="primary">
              Öffnen
            </Button>
          </a>
        );
      } else {
        Linker = (
          <Link
            style={{ justifySelf: "center", alignSelf: "center" }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={projekt.link.to}
          >
            <Button size={"50%"} type="primary">
              Öffnen
            </Button>
          </Link>
        );
      }
    } else {
      Linker = (
        <Button
          style={{ justifySelf: "center", alignSelf: "center" }}
          disabled
          size={"50%"}
          type="primary"
        >
          Öffnen
        </Button>
      );
    }

    return Linker;
  }

  function makeCard(projekt) {
    if (projekt.link !== null) {
      if (projekt.link.extern) {
        return (
          <a
            style={{ justifySelf: "center", alignSelf: "center" }}
            target="_blank"
            rel="noopener noreferrer"
            href={projekt.link.to}
          >
            <Card
              hoverable
              key={projekt.name}
              style={{ width: 300 }}
              cover={
                projekt.picture !== null ? (
                  <img alt={projekt.name} src={projekt.picture} />
                ) : null
              }
            >
              <Meta title={projekt.name} description={projekt.description} />
            </Card>
          </a>
        );
      } else {
        return (
          <Link
            style={{ justifySelf: "center", alignSelf: "center" }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={projekt.link.to}
          >
            <Card
              hoverable
              key={projekt.name}
              style={{ width: 300 }}
              cover={
                projekt.picture !== null ? (
                  <img alt={projekt.name} src={projekt.picture} />
                ) : null
              }
            >
              <Meta title={projekt.name} description={projekt.description} />
            </Card>
          </Link>
        );
      }
    } else {
      return (
        <Card
          hoverable
          key={projekt.name}
          style={{ width: 300 }}
          cover={
            projekt.picture !== null ? (
              <img alt={projekt.name} src={projekt.picture} />
            ) : null
          }
        >
          <Meta title={projekt.name} description={projekt.description} />
        </Card>
      );
    }
  }

  function makeProjekt(projekt, index, small) {
    if (small) {
      return (
        <div
          className="glas round-border"
          data-aos="zoom-in"
          data-aos-offset="100"
          key={projekt.name}
          style={{
            height: `200px`,
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: "1fr 1fr",
            padding:"1rem"
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateRows: "0.25fr 1fr",
              textAlign: "left",
            }}
          >
            <div
              style={{
                fontSize: "calc(10px + 2vmin)",
              }}
            >
              {projekt.name}
            </div>
            <div>{projekt.description}</div>
          </div>
          <div style={{ display: "grid" }}>{getLink(projekt)}</div>
        </div>
      );
    } else {
      return (
        <div
          data-aos="fade-up"
          data-aos-delay={(index % 2) * 200}
          data-aos-offset="100"
          key={projekt.name}
        >
          {makeCard(projekt)}
        </div>
      );
    }
  }

  return (
    <div className="page">
      <div
        className="grid-wraper"
        style={{
          padding: "2rem",
        }}
      >
        <div
          style={{ fontSize: "3rem", padding: "1rem", justifySelf: "baseline" }}
        >
          Projects
        </div>
        <div
          className="grid-wraper projekt middle-hide"
          style={{
            gridTemplateColumns: "repeat(2, minmax(auto, auto))",
            gridGap: "1rem",
            padding: "1rem",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {PROJEKTS.map((p, index) => {
            return makeProjekt(p, index, false);
          })}
        </div>
        <div
          className="grid-wraper projekt middle-show"
          style={{ padding: "1rem", gridGap:"20px" }}
        >
          {PROJEKTS.map((p, index) => {
            return makeProjekt(p, index, true);
          })}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Projekts);
