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
    ]
  }

  return (
    <div>
      <Header title = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

const Header = ({title}) => <h1>{title}</h1>

const Part = ({part}) => <p> {part.name} {part.exercises} </p>

const Content = ({parts}) => (
  <div>
    <Part part={parts[0]}/>
    <Part part={parts[1]}/>
    <Part part={parts[2]}/>
  </div>
)

const Total = ({parts}) => {
  let total = 0
  parts.forEach(part => {
    total += part['exercises']
  })
  
  return <p>Number of exercises {total}</p>
}

ReactDOM.render(<App />, document.getElementById('root'))