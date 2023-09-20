import { motion } from "framer-motion";
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
      <div className="mx-auto container">
        <div className="flex">
          <motion.div 
            className=" flex flex-col justify-center items-center"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
              transition={{
                duration: "3",
                delay: "2"
              }}
          >
            <p className="text-white p-3 md:p-4 lg:p-6 mx-2 lg:mx-2 text-2xl md:text-4xl lg:text-6xl rounded-md mb-2">{months}</p>
            <p className="text-white text-xs lg:text-xl">Month(s)</p>
          </motion.div>
          <motion.div 
            className=" flex flex-col justify-center items-center"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
              transition={{
                duration: "3",
                delay: "2.2"
              }}
          >
            <p className="text-white p-3 md:p-4 lg:p-6 mx-2 lg:mx-2 text-2xl md:text-4xl lg:text-6xl rounded-md mb-2">{days}</p>
            <p className="text-white text-xs lg:text-xl">Day(s)</p>
          </motion.div>
          <motion.div 
            className=" flex flex-col justify-center items-center"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
              transition={{
                duration: "3",
                delay: "2.4"
              }}
          >
            <p className="text-white p-3 md:p-4 lg:p-6 mx-2 lg:mx-2 text-2xl md:text-4xl lg:text-6xl rounded-md mb-2">{hours}</p>
            <p className="text-white text-xs lg:text-xl">Hour(s)</p>
          </motion.div>
          <motion.div 
            className=" flex flex-col justify-center items-center"
            initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{
                duration: "3",
                delay: "2.6"
              }}
          >
            <p className="text-white p-3 md:p-4 lg:p-6 mx-2 lg:mx-2 text-2xl md:text-4xl lg:text-6xl rounded-md mb-2">{minutes}</p>
            <p className="text-white text-xs lg:text-xl">Minute(s)</p>
          </motion.div>
          <motion.div 
            className=" flex flex-col justify-center items-center"
            initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{
                duration: "3",
                delay: "2.8"
              }}
          >
            <p className="text-white p-3 md:p-4 lg:p-6 mx-2 lg:mx-2 text-2xl md:text-4xl lg:text-6xl rounded-md mb-2">{seconds}</p>
            <p className="text-white text-xs lg:text-xl">Second(s)</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TestCountdownHere;