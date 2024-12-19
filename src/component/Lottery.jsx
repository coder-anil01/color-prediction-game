import React, { useEffect, useState } from 'react'
import { LuAlarmClock } from "react-icons/lu";
import '../style/Lottery.css';
import PeriodChart from './PeriodChart';
import Wallet from './Wallet';

const Lottery = () => {

  const [tradTime, setTradTime] = useState(30);
  const [time, setTime] = useState(0);
  const [tradeNumber, setTradeNumber] = useState(0);

  const CurrentTime = () => {
    let time = (tradTime - ((new Date().getMinutes()*60) + new Date().getSeconds())%tradTime);
    if(time == 0){
      setTime(tradTime);
    }else{
      setTime(time);
    }
    setTradeNumber(Math.floor(Math.random() * 100000000) + 1);
  }

  useEffect(() => {
    CurrentTime();
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
  }, [tradTime, (time==0)]);


  return (
    <>
        <div className='lottery'>
          {/* wallet */}
          <Wallet/>

          {/* TIMING */}
          <div className="lottery-time-container">
            <div className={tradTime === 30 ? "lottery-time-container-card-active" : "lottery-time-container-card"}
                  onClick={() => setTradTime(30)}>
              <div className="lottery-time-container-card-header"><LuAlarmClock/></div>
              <div className="lottery-time-container-card-body">Win GO 30S</div>
            </div>
            <div className={tradTime === 60 ? "lottery-time-container-card-active" : "lottery-time-container-card"}
                  onClick={() => setTradTime(60)}>
              <div className="lottery-time-container-card-header"><LuAlarmClock/></div>
              <div className="lottery-time-container-card-body">Win GO 1Min</div>
            </div>
            <div className={tradTime === 180 ? "lottery-time-container-card-active" : "lottery-time-container-card"}
                  onClick={() => setTradTime(180)}>
              <div className="lottery-time-container-card-header"><LuAlarmClock/></div>
              <div className="lottery-time-container-card-body">Win GO 3Min</div>
            </div>
            <div className={tradTime === 300 ? "lottery-time-container-card-active" : "lottery-time-container-card"}
                  onClick={() => setTradTime(300)}>
              <div className="lottery-time-container-card-header"><LuAlarmClock/></div>
              <div className="lottery-time-container-card-body">Win GO 5Min</div>
            </div>
          </div>

          {/* Timing Remaining */}
          <div className="lottery-time-remaining">
            <div className="lottery-time-remaining-card">
              <div className='lottery-time-remaining-card-button'>Win Go
                {tradTime == 30 ? `${` 30s`}` : ` ${tradTime/60}M` }</div>
              <div className='lottery-time-remaining-card-number'>{tradeNumber}</div>
            </div>
            <div className="lottery-time-remaining-card">
              <div>Time Remaining</div>
              <div className='lottery-time-remaining-timer'>
                <div className='lottery-time-remaining-timer-card'>0</div>
                <div className='lottery-time-remaining-timer-card'>{Math.floor(time/60)}</div>
                <div className='lottery-time-remaining-timer-colloon'>:</div>
                <div className='lottery-time-remaining-timer-card'>{time%60 > 9 ? String(time%60)[0] : 0}</div>
                <div className='lottery-time-remaining-timer-card'>{time%60 > 9 ? String(time%60)[1] : String(time%60)[0]}</div>
              </div>
            </div>
          </div>

          {/* Preduction */}
          <div className='preduction-container'>
            <div className="preduction-container-color">
              <div className="preduction-container-color-card-green">Green</div>
              <div className="preduction-container-color-card-violet">Violet</div>
              <div className="preduction-container-color-card-red">Red</div>
            </div>

            <div className="circle-grid">
              {[
                { number: 0, color: "red" },
                { number: 1, color: "green" },
                { number: 2, color: "red" },
                { number: 3, color: "green" },
                { number: 4, color: "red" },
                { number: 5, color: "green" },
                { number: 6, color: "red" },
                { number: 7, color: "green" },
                { number: 8, color: "red" },
                { number: 9, color: "green" },
              ].map((circle, index) => (
                <div key={index} className={`circle ${circle.color}`}>
                  <span>{circle.number}</span>
                </div>
              ))}
            </div>
            <div className="preduction-container-small-big">
              <div className="preduction-container-small-big-card-big">Big</div>
              <div className="preduction-container-small-big-card-small">Small</div>
            </div>
          </div>
          <PeriodChart/>
        </div>
    </>
  )
}

export default Lottery
