import React from 'react'
import { useState, useEffect } from "react";

const TestCountdownHere = () => {
    const [months, setMonths] = useState(0);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const UpdateCountdown = () => {
            const currentTime = new Date().getTime();
            const finalTimeString = "Dec 01, 2023 00:00:00";
            const finalTime = new Date(finalTimeString).getTime();
            const gap = finalTime - currentTime;

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;
            const month = day * 30;

            const calculatedMonths = Math.floor(gap / month);
            const calculatedDays = Math.floor((gap % month) / day);
            const calculatedHours = Math.floor((gap % day) / hour);
            const calculatedMinutes = Math.floor((gap % hour) / minute);
            const calculatedSeconds = Math.floor((gap % minute) / second);
            
            setMonths(calculatedMonths);
            setDays(calculatedDays);
            setHours(calculatedHours);
            setMinutes(calculatedMinutes);
            setSeconds(calculatedSeconds);
        };

        setInterval(UpdateCountdown, 1000);

    }, []);


    

  return (
    <div>
        <p>Months {months}</p>
        <p>Days {days}</p>
        <p>Hours {hours}</p>
        <p>Minutes {minutes}</p>
        <p>Seconds {seconds}</p>
    </div>
  )
}

export default TestCountdownHere