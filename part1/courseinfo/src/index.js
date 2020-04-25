import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Part name={part1} number={exercises1}/>
      <Part name={part2} number={exercises2}/>
      <Part name={part3} number={exercises3}/>
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = ({course}) => {
  return <h1>{course}</h1>;
}

const Part = ({name, number}) => {
return <p>{name} {number}</p>
}

const Total = ({exercises}) => {
  return <p>Number of exercises {exercises}</p>;
}

ReactDOM.render(<App />, document.getElementById('root'))
