import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
}

const Statistic = ({ name, number }) => <p>{name} {number || 0}</p>;

const Statistics = ({ stats }) => {
  const { good, neutral, bad, allFeedback } = stats;

  return (
    <>
      <h2>Statistics</h2>
      {
        allFeedback !== 0 ?
          <>
            <Statistic name={"good"} number={good} />
            <Statistic name={"neutral"} number={neutral} />
            <Statistic name={"bad"} number={bad} />
            <Statistic name={"all"} number={allFeedback} />
            <Statistic name={"average"} number={(good - bad) / allFeedback} />
            <Statistic name={"positive"} number={(good / allFeedback) * 100} />
          </>
          : "No feedback given"}
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allFeedback = good + neutral + bad;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text={"good"} onClick={() => setGood(good + 1)} />
      <Button text={"neutral"} onClick={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} value={bad} onClick={() => setBad(bad + 1)} />
      <Statistics stats={{ good, neutral, bad, allFeedback }} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)