import React from 'react'
//https://www.youtube.com/watch?v=Rib69h2DOxg
const Countdown = () => {
   
    const countDate = new Date("Dec 01, 2023 00:00:00").getTime();
    const currentTime = new Date().getTime();
    const gap = (countDate - currentTime);
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    
    const textMonth = Math.floor(gap / month);
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
        
  return (
    <>
        <div className="container mx-auto">
            <div className="flex  bg-red-400">
                <div>
                    <h3 className="text-3xl">{textMonth}</h3>
                    <h3 className="text-xl">Month</h3>
                </div>
                <div>
                    <h3 className="text-3xl">{textDay}</h3>
                    <h3 className="text-xl">Day</h3>
                </div>
                <div>
                    <h3 className="text-3xl">{textHour}</h3>
                    <h3 className="text-xl">Hour</h3>
                </div>
                <div>
                    <h3 className="text-3xl">{textMinute}</h3>
                    <h3 className="text-xl">Minute</h3>
                </div>
                <div>
                    <h3 className="text-3xl">{textSecond}</h3>
                    <h3 className="text-xl">Second</h3>
                </div>
            </div>
        </div>
    </>
  )
}

setInterval(Countdown, 1000)

export default Countdown