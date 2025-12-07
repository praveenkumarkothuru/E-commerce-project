import React, { useState, useEffect } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timerId); 

  }, []);

  return (
    <>
      <h1>Timer: {timer} seconds</h1>
    </>
  );
}

export default Timer;
