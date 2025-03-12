"use client";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

function BrokenTimer() {
  const [seconds, setSeconds] = useState(0);
  const [showStartTimer, setshowStartTimer] = useState(true);
  let intervalId = useRef(0);

  const startTimer = () => {
    if (intervalId.current === 0) {
      setshowStartTimer(false);
      intervalId.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 200);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId.current);
    intervalId.current = 0;
    setshowStartTimer(true);
  };

  const resetTimer = () => {
    clearInterval(intervalId.current);
    intervalId.current = 0;
    setSeconds(0);
    setshowStartTimer(true);
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <h1>Elapsed Time: {seconds} seconds</h1>
      <div className="flex gap-2 mt-4">
        {showStartTimer ? (
          <Button onClick={startTimer}>Start</Button>
        ) : (
          <Button onClick={stopTimer}>Stop</Button>
        )}

        <Button onClick={resetTimer}>Reset</Button>
      </div>
      <div className="max-w-xl mt-6">
        I've created a React component named BrokenTimer to practice building a
        simple timer application. The component uses React hooks like useState
        to manage the timer's state and useRef to store the interval ID. The
        timer has three main functions: startTimer, stopTimer, and resetTimer.
        The startTimer function starts the timer, incrementing the seconds every
        second using setInterval. The stopTimer function stops the timer by
        clearing the interval, and the resetTimer function stops the timer and
        resets the seconds to zero. The component displays the elapsed time and
        provides buttons to start, stop, and reset the timer. However, I've
        noticed a couple of issues in my code: the intervalId is incorrectly
        initialized as a regular variable instead of using useRef, and it is
        reset on every render, which can cause the timer to malfunction.
      </div>
    </div>
  );
}

export default BrokenTimer;
