import React from "react";
import Countdown from "react-countdown";

const CoundownCounter = () => {
  const Completionist = () => (
    <span>Witamy i zapraszamy do wspólnego kolędowania</span>
  );

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {

      return <Completionist />;
    } else {

      return (
        <div>
          Już za {hours}{" "}
          {hours === 0
            ? "godzin"
            : hours === 1
            ? "godzinę"
            : hours < 5
            ? "godziny"
            : hours < 22
            ? "godzin"
            : "godziny"}{" "}
          {minutes}{" "}
          {minutes === 1
            ? "minutę"
            : minutes > 11 && minutes < 15
            ? "minut"
            : Number(minutes.toString().slice(-1)) < 2
            ? "minut"
            : Number(minutes.toString().slice(-1)) < 5
            ? "minuty"
            : "minut"}{" "}
          {seconds}{" "}
          {seconds === 1
            ? "sekundę"
            : seconds > 11 && seconds < 15
            ? "sekund"
            : Number(seconds.toString().slice(-1)) < 2
            ? "sekund"
            : Number(seconds.toString().slice(-1)) < 5
            ? "sekundy"
            : "sekund"}
        </div>
      );
    }
  };

  return <Countdown date={"2023-01-23T18:30:00"} renderer={renderer} />;
};
export default CoundownCounter;
