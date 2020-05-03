import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Info = ({ name, number }) => <p>{name} {number || 0}</p>;

const Statistics = ({ stats }) => {
  const { good, neutral, bad, allFeedback } = stats;

  return (
    <>
      <h2>Statistics</h2>
      {
        allFeedback !== 0 ?
          <>
            <Info name={"good"} number={good} />
            <Info name={"neutral"} number={neutral} />
            <Info name={"bad"} number={bad} />
            <Info name={"all"} number={allFeedback} />
            <Info name={"average"} number={(good - bad) / allFeedback} />
            <Info name={"positive"} number={(good / allFeedback) * 100} />
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
  console.log("App -> good", good)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics stats={{ good, neutral, bad, allFeedback }} />
    </div>
  )
}


ReactDOM.render(<App />,
  document.getElementById('root')
)