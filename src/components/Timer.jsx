import React, { useRef, useState } from "react";

function Timer() {
  const [started, setStarted] = useState(false);

  let timerIDRef = useRef();
  return (
    <div>
      {started ? <p>Timer started</p> : <p>Press button to start</p>}
      {!started ? (
        <button
          onClick={() => {
            setStarted(true);

            timerIDRef.current = setTimeout(() => {
              alert("timer done");
            }, 3000);
          }}
        >
          Start Timer for 5 seconds
        </button>
      ) : (
        <button
          onClick={() => {
            setStarted(false);
            clearTimeout(timerIDRef.current);
          }}
        >
          Stop timer
        </button>
      )}
    </div>
  );
}

export default Timer;
