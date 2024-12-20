import React, { useEffect, useState } from 'react'
import '../style/Lottery.css';
import PeriodChart from './PeriodChart';
import Wallet from './Wallet';
import MusicPlayWin from './MusicPlayWin';

const Lottery = () => {

  const [tradTime, setTradTime] = useState(30);
  const [time, setTime] = useState(0);
  const [tradeNumber, setTradeNumber] = useState(0);
  const watchActive = "https://res.cloudinary.com/dhse8vh5y/image/upload/v1734698113/tc%20Lottery/tc05_saa26d.png";
  const watchDesible = "https://res.cloudinary.com/dhse8vh5y/image/upload/v1734698114/tc%20Lottery/tc06_plcyqv.png";
  const cyrcle1 = "https://res.cloudinary.com/dhse8vh5y/image/upload/v1734698114/tc%20Lottery/tc08_szofbk.png";
  const cyrcle5 = "https://res.cloudinary.com/dhse8vh5y/image/upload/v1734698116/tc%20Lottery/tc11_tqdmqb.png";
  const cyrcleRed = "https://res.cloudinary.com/dhse8vh5y/image/upload/v1734698116/tc%20Lottery/tc10_ynxvhc.png";
  const cyrcleGreen = "https://res.cloudinary.com/dhse8vh5y/image/upload/v1734698115/tc%20Lottery/tc09_bdl1k9.png";

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

<iframe allow="autoplay"hidden/>
          <div>
        </div>
          {/* TIMING */}
          <div className="lottery-time-container">
            <div className={tradTime === 30 ? "lottery-time-container-card-active" : "lottery-time-container-card"}
                  onClick={() => setTradTime(30)}>
              <img src={tradTime == 30 ? watchActive : watchDesible} className="lottery-time-container-card-header" alt="" />
              <div className="lottery-time-container-card-body">Win GO 30S</div>
            </div>
            <div className={tradTime === 60 ? "lottery-time-container-card-active" : "lottery-time-container-card"}
                  onClick={() => setTradTime(60)}>
              <img src={tradTime == 60 ? watchActive : watchDesible} className="lottery-time-container-card-header" alt="" />
              <div className="lottery-time-container-card-body">Win GO 1Min</div>
            </div>
            <div className={tradTime === 180 ? "lottery-time-container-card-active" : "lottery-time-container-card"}
                  onClick={() => setTradTime(180)}>
              <img src={tradTime == 180 ? watchActive : watchDesible} className="lottery-time-container-card-header" alt="" />
              <div className="lottery-time-container-card-body">Win GO 3Min</div>
            </div>
            <div className={tradTime === 300 ? "lottery-time-container-card-active" : "lottery-time-container-card"}
                  onClick={() => setTradTime(300)}>
              <img src={tradTime == 300 ? watchActive : watchDesible} className="lottery-time-container-card-header" alt="" />
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
            <img className='lottery-time-remaining-img' src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1734698114/tc%20Lottery/tc07_et65aw.png" alt="" />
          </div>

          {/* Preduction */}
          <div className='preduction-container'>

            {/* predicition-result */}
            {time <6 && <div className='preduction-result'>
              <div className='preduction-result-container'>
                <span>0</span>
                <span>{time}</span>
              </div>
            </div>}
            <div className="preduction-container-color">
              <div className="preduction-container-color-card-green">Green</div>
              <div className="preduction-container-color-card-violet">Violet</div>
              <div className="preduction-container-color-card-red">Red</div>
            </div>

            <div className="circle-grid">
              {[
                { number: 0, circle: cyrcle1, color: "red"},
                { number: 1, circle: cyrcleGreen, color: "green"},
                { number: 2, circle: cyrcleRed, color: "red"},
                { number: 3, circle: cyrcleGreen, color: "green"},
                { number: 4, circle: cyrcleRed, color: "red"},
                { number: 5, circle: cyrcle5, color: "green"},
                { number: 6, circle: cyrcleRed, color: "red"},
                { number: 7, circle: cyrcleGreen, color: "green"},
                { number: 8, circle: cyrcleRed, color: "red"},
                { number: 9, circle: cyrcleGreen, color: "green"},
              ].map((index) => (
                <div key={index} className="circle-grid-card">
                  <img src={index.circle} alt="" />
                  <span className={`circle-grid-${index.color}`}>{index.number}</span>
                </div>
              ))}
            </div>
            <div className="preduction-container-small-big">
              <div className="preduction-container-small-big-card-big">Big</div>
              <div className="preduction-container-small-big-card-small">Small</div>
            </div>
          </div>
          <PeriodChart/>
          <MusicPlayWin time={time}/>
        </div>
    </>
  )
}

export default Lottery
