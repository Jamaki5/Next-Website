import React, { useEffect, useReducer } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import style from "../../styles/Home.module.css";

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
      <div className="h-full w-full">
        <div className="hidden md:grid h-full w-full px-4">
          <div className="grid grid-cols-3">
            <div className="flex flex-col col-start-1 col-end-3">
              <div className="mt-6 text-4xl">Hi,</div>
              <div className="mt-4 text-4xl">my Name is</div>
              <div className="mt-6 text-7xl">Jann-Marten Kias</div>
            </div>
            <div className="justify-self-center mt-8">
              <Image
                alt="Jann-Marten Kias"
                className="rounded"
                src="/pictures/me.jpg"
                width="200"
                height="200"
                layout="fixed"
              />
            </div>
          </div>
          <div className="justify-self-baseline self-end">
            <div className="grid text-3xl mb-2">I am a</div>
            <div className="flex mb-8 text-5xl">
              <div>{description.text}</div>
              <div className={description.hidden ? "opacity-0" : ""}>_</div>
            </div>
          </div>
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center md:hidden">
          <Image
            alt="Jann-Marten Kias"
            className="rounded"
            src="/pictures/me.jpg"
            width="250"
            height="250"
          />
          <div className="grid">
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
