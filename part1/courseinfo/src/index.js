import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
    ],
    totalExercises: 0
  }
  course.parts.forEach(item => course.totalExercises += item.exercises)
  return (
    <div>
      <Header course={course.name} />
      {course.parts.map((item, index) => <Part key={index} name={item.name} exercises={item.exercises} />)}
      <Total exercises={course.totalExercises} />
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
