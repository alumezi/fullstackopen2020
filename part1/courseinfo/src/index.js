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
      <Content data={[
        { part: part1, exercise: exercises1 },
        { part: part2, exercise: exercises2 },
        { part: part3, exercise: exercises3 }]} />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>;
}

const Content = (props) => {
  return props.data.map(item => <p key={item.part}>{item.part} {item.exercise}</p>);
}

const Total = (props) => {
  return <p>Number of exercises {props.exercises}</p>;
}

ReactDOM.render(<App />, document.getElementById('root'))
