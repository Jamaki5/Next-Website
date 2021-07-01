import React, { useEffect, useReducer } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import style from "../../styles/All.module.css";

import mePicture from "../../public/pictures/me.jpg";

const NoSSRBackground = dynamic(() => import("./MeBackground"), {
  ssr: false,
});

const titles = ["Software developer", "Gamer", "Computer science student"];

const pauseTimer = 30;
const pauseHiddenTimer = 6;

function reducer(state, action) {
  let text = state.text;
  let word = state.word;
  let pause = state.pause;
  let write = state.write;
  let hidden = state.hidden;
  let pauseHidden = state.pauseHidden;

  //Reduce Pause Timer
  if (pause !== 0) {
    pause--;
    if (pauseHidden === 0) {
      hidden = !hidden;
      pauseHidden = pauseHiddenTimer;
    } else {
      pauseHidden--;
    }
  } else {
    pauseHidden = pauseHiddenTimer;
    hidden = 0;

    //Write if Word is not completed
    if (write === true) {
      if (text === titles[word]) {
        write = false;
        pause = pauseTimer;
      }
      text = titles[word].substring(0, text.length + 1);
    } else if (write === false) {
      if (text === "") {
        if (word === titles.length - 1) {
          word = 0;
        } else {
          word++;
        }
        pause = pauseTimer * 0.5;
        write = true;
      }
      text = text.substring(0, text.length - 1);
    }
  }

  return { text, word, pause, write, hidden, pauseHidden };
}

function Me() {
  const [description, dispatch] = useReducer(reducer, {
    text: "Software developer",
    word: 0,
    pause: pauseTimer,
    write: true,
    hidden: true,
    pauseHidden: 0,
  });

  useEffect(() => {
    const idText = setInterval(() => {
      dispatch({});
    }, 100);
    return () => {
      clearInterval(idText);
    };
  }, []);

  return (
    <div className={style.page}>
      <NoSSRBackground />
      <div className="h-full w-full grid">
        <div className="hidden md:grid h-full max-w-6xl place-self-center">
          <div className="grid w-full my-auto z-10">
            <div className={style.name + " place-self-center flex flex-col"}>
              <div className="text-4xl self-center">Hi, my Name is</div>
              <div className="text-5xl lg:text-7xl mb-6">Jann-Marten Kias</div>
            </div>
            <div className={style.picture + " justify-self-center"}>
              <Image
                alt="Jann-Marten Kias"
                className="rounded"
                src={mePicture}
                placeholder="blur"
                width="250"
                height="250"
              />
            </div>
            <div className={style.description + " mt-6 flex flex-col"}>
              <div className="grid text-3xl mb-2 self-center">I am a</div>
              <div className="flex mb-8 text-5xl lg:text-6xl self-center">
                <div>{description.text}</div>
                <div className={description.hidden ? "opacity-0" : ""}>_</div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          className="h-full w-full flex flex-col justify-center items-center md:hidden"
        >
          <Image
            alt="Jann-Marten Kias"
            className="rounded"
            src={mePicture}
            placeholder="blur"
            width="250"
            height="250"
          />
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1000"
            data-aos-delay="1000"
            className="grid"
          >
            <div className="text-4xl mt-6">Jann-Marten Kias</div>
            <div className="flex text-xl mt-1">
              <div>{description.text}</div>
              <div className={description.hidden ? "opacity-0" : ""}>_</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Me;
