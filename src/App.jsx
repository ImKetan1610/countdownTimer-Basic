import { useState, useEffect } from "react";
import CounterComponent from "./Components/CounterComponent";
import "./App.css";

function App() {
  const [count, setCount] = useState({
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
  });

  const [time, setTime] = useState();
  const [targetTime, setTargetTime] = useState();

  const handleChange = (e) => {
    setTime(e.target.value);
  };

  const handleClick = () => {
    console.log(time);
    const selectedDate = new Date(time).getTime();
    setTargetTime(selectedDate);
  };

  const calculateTimeLeft = () => {
    const difference = targetTime - new Date().getTime();
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setCount({
        Days: days,
        Hours: hours,
        Minutes: minutes,
        Seconds: seconds,
      });
    } else {
      setCount({ Days: 0, Hours: 0, Minutes: 0, Seconds: 0 });
    }
  };

  useEffect(() => {
    console.log("here");
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <>
      <h1 id="headingApp">
        <span>Countdown</span> Timer
      </h1>
      <input
        type="datetime-local"
        name="counter-time"
        id="counter-time"
        onChange={handleChange}
      />
      <br />
      <button id="startTimer" onClick={handleClick}>
        Start Timer
      </button>
      <div id="componentDiv">
        <CounterComponent value={count.Days} name="Days" />
        <CounterComponent value={count.Hours} name="Hours" />
        <CounterComponent value={count.Minutes} name="Minutes" />
        <CounterComponent value={count.Seconds} name="Seconds" />
      </div>
    </>
  );
}

export default App;
