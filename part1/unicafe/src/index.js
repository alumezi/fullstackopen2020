import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>Statistics</h2>
      <Info name={"good"} number={good} />
      <Info name={"neutral"} number={neutral} />
      <Info name={"bad"} number={bad} />
    </div>
  )
}

const Info = ({ name, number }) => <p>{name} {number}</p>;

ReactDOM.render(<App />,
  document.getElementById('root')
)