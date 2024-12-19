import React, { useState } from 'react'
import '../style/PeriodChart.css'
const PeriodChart = () => {

  const chart = [
    { Period: 24121802011, Number: 1 , BigSmall: "Big", color: "violet"},
    { Period: 24121802010, Number: 5 , BigSmall: "Small", color: "violet"},
    { Period: 24121802009, Number: 3 , BigSmall: "Big", color: "green"},
    { Period: 24121802008, Number: 7 , BigSmall: "Big", color: "red"},
    { Period: 24121802007, Number: 6 , BigSmall: "Small", color: "violet"},
    { Period: 24121802006, Number: 8 , BigSmall: "Big", color: "red"},
    { Period: 24121802005, Number: 1 , BigSmall: "Big", color: "green"},
    { Period: 24121802004, Number: 0 , BigSmall: "Small", color: "red"},
    { Period: 24121802003, Number: 6 , BigSmall: "Small", color: "violet"},
    { Period: 24121802002, Number: 8 , BigSmall: "Big", color: "green"},
    { Period: 24121802001, Number: 3 , BigSmall: "Small", color: "violet"},
  ]

    const [selectedButton, setSelectedButton] = useState(1);
  return (
    <>
    <div className="game-chart">
      <button className={selectedButton == 1 ? "game-chart-button-active" : "game-chart-button"} onClick={() => setSelectedButton(1)}>Game history</button>
      <button className={selectedButton == 2 ? "game-chart-button-active" : "game-chart-button"} onClick={() => setSelectedButton(2)}>Chart</button>
      <button className={selectedButton == 3 ? "game-chart-button-active" : "game-chart-button"} onClick={() => setSelectedButton(3)}>My history</button>
    </div>


    {selectedButton == 1 &&
    <>
      <div className="game-history-table-head">
        <span>Period</span>
        <span>Number</span>
        <span>B/S</span>
        <span>Color</span>
      </div>
      {chart.map((index)=>(
      <div key={index} className='game-history-table'>
        <span>{index.Period}</span>
        <span>{index.Number}</span>
        <span>{index.BigSmall}</span>
        <div className={`history-color-${index.color}`}></div>
      </div>
      ))}
    </>}

{/* CHART */}
    {selectedButton == 2 &&
    <>
      <div className="game-chart-table-head">
        <span>Period</span>
        <span>Number</span>
      </div>

      {chart.map((index)=>(
      <div key={index} className='game-chart-table'>
        <span>{index.Period}</span>
        <div className='game-chart-table-number'>
          <span className={`game-chart-table-number-${ index.Number == 0 && index.color }`}>0</span>
          <span className={`game-chart-table-number-${ index.Number == 1 && index.color }`}>1</span>
          <span className={`game-chart-table-number-${ index.Number == 2 && index.color }`}>2</span>
          <span className={`game-chart-table-number-${ index.Number == 3 && index.color }`}>3</span>
          <span className={`game-chart-table-number-${ index.Number == 4 && index.color }`}>4</span>
          <span className={`game-chart-table-number-${ index.Number == 5 && index.color }`}>5</span>
          <span className={`game-chart-table-number-${ index.Number == 6 && index.color }`}>6</span>
          <span className={`game-chart-table-number-${ index.Number == 7 && index.color }`}>7</span>
          <span className={`game-chart-table-number-${ index.Number == 8 && index.color }`}>8</span>
          <span className={`game-chart-table-number-${ index.Number == 9 && index.color }`}>9</span>
        </div>
        <div className="game-chart-table-bs-container">
          <span className={`game-chart-table-bs-container-${index.BigSmall}`}>{index.BigSmall == "Big" ? "B" : "S"}</span>
        </div>
      </div>
      ))}
    </>}
    </>
  )
}

export default PeriodChart
