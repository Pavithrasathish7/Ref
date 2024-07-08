import React, { useState, useRef } from "react";
import Result from "./Result.jsx";

export default function Timerchallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timestart, setTimestart] = useState(false);
  const [timeExpried, setTimeExpried] = useState(false);
  //let timer;
  function timeHandler() {
    timer.current = setTimeout(() => {
      setTimeExpried(true);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimestart(true);
    console.log(timer.current);
  }
  function timestop() {
    clearTimeout(timer.current);
  }
  return (
    <>
      {timeExpried && (
        <Result ref={dialog} result="lost" targettime={targetTime} />
      )}
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timestart ? timeHandler : timestop}>
            {timestart ? "stop" : "start"} Challenge
          </button>
        </p>
        <p className={timestart ? "active" : undefined}>
          {timestart ? "Time is running" : "Time stop"}
        </p>
      </section>
    </>
  );
}
