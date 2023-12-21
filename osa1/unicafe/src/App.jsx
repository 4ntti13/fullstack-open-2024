/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'

const Header = ({header}) => {
  return(
    <div>
      <h1>{header}</h1>
    </div>
  )
}

const HeaderStats = ({headerStats}) => {
  return(
    <h1>{headerStats}</h1>
  )
}

const Button = ({clicks, text}) => {
  return(
    <button onClick={clicks}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Statistics = ({good, neutral, bad, total, average, positive}) => {
  if (total > 0) {
    return(
      <div>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="all" value ={total} />
        <StatisticLine text="average" value ={average} />
        <StatisticLine text="positive" value ={positive + " %"} />
      </div>
    )
  }
  return (
    <div>
      No feedback given
    </div>
  )
}

function App() {
  const header = "give feedback";
  const headerStats = "statistics";
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodButton = () => {
    setGood(good + 1)
  }

  const handleNeutralButton = () => {
    setNeutral(neutral + 1)
  }

  const handleBadButton = () => {
    setBad(bad + 1)
  }

  const total = good + neutral + bad;
  let average = 0;
  if (total > 0) {
    average = (good - bad) / total;
  }

  let positive = 0;
  if (total > 0) {
    positive = (good / total) * 100
  }

  return (  
    <div>
      <div>
        <Header header = {header} />
      </div>
        <Button clicks = {handleGoodButton} text = "good"/>
        <Button clicks = {handleNeutralButton} text = "neutral"/>
        <Button clicks = {handleBadButton} text = "bad"/>
      <div>
        <HeaderStats headerStats = {headerStats} />
      </div>
      <div>
        <Statistics
          good = {good}
          neutral  ={neutral}
          bad = {bad}
          total = {total}
          average = {average}
          positive = {positive} />
      </div>
    </div>   
  )
}
export default App
