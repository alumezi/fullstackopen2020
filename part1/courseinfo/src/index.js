import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  let totalExercises = 0;
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  parts.forEach(item => totalExercises += item.exercises)
  return (
    <div>
      <Header course={course} />
      {parts.map((item, index) => <Part key={index} name={item.name} exercises={item.exercises} />)}
      <Total exercises={totalExercises} />
    </div>
  )
}

const Header = ({ course }) => {
  return <h1>{course}</h1>;
}

const Part = ({ name, exercises }) => {
  return <p>{name} {exercises}</p>
}

const Total = ({ exercises }) => {
  return <p>Number of exercises {exercises}</p>;
}

ReactDOM.render(<App />, document.getElementById('root'))
