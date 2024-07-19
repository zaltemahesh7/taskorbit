import React, { useEffect, useState } from "react";

function StopWatch() {
  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  let intervalId;
  useEffect(() => {
    if (sec || min || hr) {
      if (!isStarted) {
        clearInterval(intervalId);
      } else {
        intervalId = setInterval(() => {
          setSec((prev) => {
            if (prev >= 59) {
              setMin((prev) => {
                if (prev >= 59) {
                  setHr((prev) => prev + 1);
                  return 0;
                }
                return prev + 1;
              });
              return 0;
            }
            return prev + 1;
          });
        }, 1000);
      }
    }
    return () => clearInterval(intervalId);
  }, [sec, min, hr]);

  function startTimer() {
    setIsStarted(!isStarted);
    if (sec == 0) setSec(1);
    else setSec(sec + 1);
  }

  function stopTimer() {
    setIsStarted(!isStarted);
  }

  function reserIntervel() {
    setSec(0);
    setMin(0);
    setHr(0);
    setIsStarted(false);
  }

  return (
    <div className="h-[100vh] grid col-span-1 items-center justify-center bg-[#2d3644]">
      <div>
        <div className=" flex flex-col items-center justify-center gap-8 h-96 w-96 rounded-md bg-[#F4EBFF]">
          <h1>Stop Watch</h1>
          <div className="flex gap-2 text-5xl">
            <div className="border border-gray-900 p-2 rounded-md">
              {hr < 10 ? "0" + hr : hr}
            </div>
            <span className="py-2">:</span>
            <div className="border border-gray-900 p-2 rounded-md">
              {min < 10 ? "0" + min : min}
            </div>
            <span className="py-2">:</span>
            <div className="border border-gray-900 p-2 rounded-md">
              {sec < 10 ? "0" + sec : sec}
            </div>
            {/* <span className="py-2">:</span>
            <div className="border border-gray-900 p-2 rounded-md">
              {sec < 10 ? "0" + sec : sec}
            </div> */}
          </div>
          <button
            className="w-40 h-14 text-white text-2xl font-bold text-center border-none rounded-md flex items-center justify-center gap-2 bg-transparent cursor-pointer relative bg-gradient-to-r from-[#3838ff] to-[#7a00ff] transition-all duration-300 tracking-[1.4px] hover:scale-95 hover:duration-300 before:content-[''] before:absolute before:w-[80%] before:h-[30%] before:bg-gradient-to-r before:from-[rgb(,43,255)] before:to-[#7a00ff] before:blur-[10px] before:bottom-[-3px] before:z-[-1] before:duration-300 hover:before:bottom-[-1px] hover:before:blur-[5px] hover:before:duration-300"
            onClick={() => (!isStarted ? startTimer() : stopTimer())}
          >
            {isStarted ? "Pause" : "Start"}
          </button>
          <button className=" px-4 py-2 border border-gray-400 rounded-md" onClick={reserIntervel}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
