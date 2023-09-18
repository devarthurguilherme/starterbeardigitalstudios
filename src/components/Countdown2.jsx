import { useState, useEffect } from "react";
//https://www.youtube.com/watch?v=7CQdoqP5qj0
const Countdown2 = ({ duration }) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000)
        }, 1000);
    }, [time]);

    const getFormattedTime = (milliseconds) => {
        let totalSeconds = parseInt(Math.floor(milliseconds / 1000));
        let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
        let totalHours = parseInt(Math.floor(totalMinutes / 60));
        let totalDays = parseInt(Math.floor(totalHours / 24));

        let seconds = parseInt(totalSeconds % 60);
        let minutes = parseInt(totalMinutes % 60);
        let hours = parseInt(totalHours % 24);

        //return `${totalDays}: ${hours}: ${minutes}: ${seconds}`;
        return (
            <div>{totalDays} {hours} {minutes} {seconds}</div>
          );
    };

  return (
    <>{getFormattedTime(time)}</>
  )
}

export default Countdown2