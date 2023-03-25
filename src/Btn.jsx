import React, { useState, useRef } from 'react';
import "./Btn.css";
// import background from "./background-horloge.png";

const Button = function () {

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - hours * 3600) / 60);
    const seconds = time - hours * 3600 - minutes * 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (

    <div className="flex">

      <div className="title-chrn">

        <h1 id="chronometre">{formatTime(time)}</h1>
      </div>

      <div className="btns">
        <button className="btn btnStr" onClick={start}> <i class="uil uil-play"> </i> Start</button>
        <button className="btnStp" onClick={stop}> <i class="uil uil-pause"> </i> Stop</button>
        <button className="btnRst" onClick={reset}> <i class="uil uil-redo"> </i> Reset</button>
      </div>

    
    </div>
  );
};

export default Button;
