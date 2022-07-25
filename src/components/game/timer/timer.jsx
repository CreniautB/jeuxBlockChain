import React, { useState, useEffect } from "react";

const Timer = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(
    (setEndGame, endDate) => {
      // SET THE END DATE GAME
      endDate = new Date("2022-09-17T10:34:20");
      const interval = setInterval(() => {
        let actualDate = new Date().getTime();
        let timeLeft = endDate - actualDate;

        // Calculating the days, hours, minutes and seconds left
        setDays(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((timeLeft % (1000 * 60)) / 1000));

        if (timeLeft < 0) {
          setEndGame(true);
          setDays(0);
          setHours(0);
          setMinutes(0);
          setSeconds(0);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    },
    [seconds]
  );

  return (
    <div className="timer">
      <p className="titleTimer">Time until the end </p>
      <p>{days}</p>
      <p>:</p>
      <p>{hours}</p>
      <p>:</p>
      <p>{minutes}</p>
      <p>:</p>
      <p>{seconds}</p>
    </div>
  );
};

export default Timer;
