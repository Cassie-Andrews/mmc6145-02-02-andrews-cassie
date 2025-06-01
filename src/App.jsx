import React, { useState } from "react";
import CardGame from "./components/cardGame";
import Header from "./components/header";
import Modal from "./components/modal";
import { useTimer } from "./util/customHooks";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [previousTime, setPreviousTime] = useState(null);
  const [bestTime, setBestTime] = useState(null);

  const {
    time,
    start: timerStart,
    stop: timerStop,
    reset: timerReset,
    isCounting
  } = useTimer();

  const cardTexts = [
    "Bunny 🐰",
    "Frog 🐸",
    "Panda 🐼",
    "Doggy 🐶",
    "Kitty 😺",
    "Duck 🦆",
  ];

  const handleGameStart = () => {
    // reset the timer
    timerReset();
    // start the timer
    timerStart();
  };

  const handleGameEnd = () => {
    // stop the timer
    timerStop();
    // save as previous time, handle best time
    setPreviousTime(time);
      if (bestTime === null || time < bestTime) {
        setBestTime(time);
      }
    timerReset();
  };

  return (
    <>
      <Header
        // add time prop
        time={time}
        // add bestTime prop
        bestTime={bestTime}
        // add previousTime prop
        previousTime={previousTime}
        isCounting={isCounting}
        openModal={() => setShowModal(true)}
      />
      <CardGame
        // add onGameStart prop
        onGameStart={handleGameStart}
        // add onGameEnd prop
        onGameEnd={handleGameEnd}
        cardTexts={cardTexts}
      />
      <Modal isShown={showModal} close={() => setShowModal(false)} />
    </>
  );
}