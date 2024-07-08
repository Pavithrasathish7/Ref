import React from "react";
import { forwardRef } from "react";

const Result = forwardRef(function Result({ result, targettime }, ref) {
  return (
    <dialog ref={ref} className="result-modal" open>
      <h2>you {result}</h2>
      <p>the target time {targettime}</p>
      <p>your timer stop</p>
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>
  );
});
export default Result;
